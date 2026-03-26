// NFT Minting Integration - OpenSea & Foundation
const { ethers } = require('ethers');
const axios = require('axios');

class NFTMintingService {
  constructor(options = {}) {
    this.rpcUrl = options.rpcUrl || process.env.ETH_RPC_URL;
    this.privateKey = options.privateKey || process.env.WALLET_PRIVATE_KEY;
    this.openseaApiKey = options.openseaApiKey || process.env.OPENSEA_API_KEY;
    this.foundationApiKey = options.foundationApiKey || process.env.FOUNDATION_API_KEY;
    
    this.provider = new ethers.JsonRpcProvider(this.rpcUrl);
    this.wallet = this.privateKey ? new ethers.Wallet(this.privateKey, this.provider) : null;
    
    // ERC-721 Contract ABI (simplified)
    this.erc721ABI = [
      'function safeMint(address to, string memory uri) public',
      'function tokenURI(uint256 tokenId) public view returns (string memory)',
      'function ownerOf(uint256 tokenId) public view returns (address)',
      'event Transfer(address indexed from, address indexed to, uint256 indexed tokenId)'
    ];
  }

  /**
   * Upload metadata and image to IPFS
   * @param {object} metadata - NFT metadata
   * @param {string} imageUrl - Image URL or base64
   * @returns {Promise<{imageIpfs: string, metadataIpfs: string}>}
   */
  async uploadToIPFS(metadata, imageUrl) {
    // Using Pinata or similar IPFS service
    const pinataApiKey = process.env.PINATA_API_KEY;
    const pinataSecret = process.env.PINATA_SECRET;

    try {
      // Upload image
      const imageBlob = await fetch(imageUrl).then(r => r.blob());
      const imageFormData = new FormData();
      imageFormData.append('file', imageBlob);

      const imageResponse = await axios.post(
        'https://api.pinata.cloud/pinning/pinFileToIPFS',
        imageFormData,
        {
          headers: {
            'pinata_api_key': pinataApiKey,
            'pinata_secret_api_key': pinataSecret,
            'Content-Type': 'multipart/form-data'
          }
        }
      );

      const imageIpfs = `ipfs://${imageResponse.data.IpfsHash}`;

      // Upload metadata
      metadata.image = imageIpfs;
      const metadataResponse = await axios.post(
        'https://api.pinata.cloud/pinning/pinJSONToIPFS',
        {
          pinataContent: metadata,
          pinataMetadata: {
            name: metadata.name
          }
        },
        {
          headers: {
            'pinata_api_key': pinataApiKey,
            'pinata_secret_api_key': pinataSecret,
            'Content-Type': 'application/json'
          }
        }
      );

      const metadataIpfs = `ipfs://${metadataResponse.data.IpfsHash}`;

      return { imageIpfs, metadataIpfs };
    } catch (error) {
      console.error('IPFS upload failed:', error.message);
      throw new Error(`IPFS upload failed: ${error.message}`);
    }
  }

  /**
   * Mint NFT on Ethereum
   * @param {string} contractAddress - NFT contract address
   * @param {string} recipient - Recipient wallet address
   * @param {object} metadata - NFT metadata
   * @param {string} imageUrl - Image URL
   * @returns {Promise<{tokenId: string, transactionHash: string, openseaUrl: string}>}
   */
  async mintNFT(contractAddress, recipient, metadata, imageUrl) {
    if (!this.wallet) {
      throw new Error('Wallet not configured. Set WALLET_PRIVATE_KEY');
    }

    try {
      // Upload to IPFS
      const { metadataIpfs } = await this.uploadToIPFS(metadata, imageUrl);

      // Create contract instance
      const contract = new ethers.Contract(contractAddress, this.erc721ABI, this.wallet);

      // Estimate gas
      const gasEstimate = await contract.safeMint.estimateGas(recipient, metadataIpfs);

      // Mint NFT
      const tx = await contract.safeMint(recipient, metadataIpfs, {
        gasLimit: gasEstimate * BigInt(120) / BigInt(100) // 20% buffer
      });

      console.log('Minting transaction:', tx.hash);

      // Wait for confirmation
      const receipt = await tx.wait();

      // Extract token ID from Transfer event
      const transferEvent = receipt.logs.find(log => {
        try {
          const parsed = contract.interface.parseLog(log);
          return parsed && parsed.name === 'Transfer';
        } catch {
          return false;
        }
      });

      const tokenId = transferEvent ? transferEvent.args.tokenId.toString() : 'unknown';

      // Get OpenSea URL
      const openseaUrl = `https://opensea.io/assets/ethereum/${contractAddress}/${tokenId}`;

      return {
        tokenId,
        transactionHash: tx.hash,
        openseaUrl,
        metadataIpfs
      };
    } catch (error) {
      console.error('Minting failed:', error.message);
      throw new Error(`NFT minting failed: ${error.message}`);
    }
  }

  /**
   * List NFT on OpenSea
   * @param {string} contractAddress - NFT contract address
   * @param {string} tokenId - Token ID
   * @param {string} price - Price in ETH
   * @returns {Promise<{listingUrl: string}>}
   */
  async listOnOpenSea(contractAddress, tokenId, price) {
    try {
      const response = await axios.post(
        'https://api.opensea.io/api/v1/orders',
        {
          asset: {
            token_id: tokenId,
            token_address: contractAddress
          },
          base_price: ethers.parseEther(price).toString(),
          payment_token_contract: {
            symbol: 'ETH'
          }
        },
        {
          headers: {
            'X-API-KEY': this.openseaApiKey,
            'Content-Type': 'application/json'
          }
        }
      );

      return {
        listingUrl: response.data.listing_url
      };
    } catch (error) {
      console.error('OpenSea listing failed:', error.message);
      throw new Error(`OpenSea listing failed: ${error.message}`);
    }
  }

  /**
   * Mint on Foundation (invite-only platform)
   * @param {object} metadata - NFT metadata
   * @param {string} imageUrl - Image URL
   * @param {string} price - Price in ETH
   * @returns {Promise<{foundationUrl: string}>}
   */
  async mintOnFoundation(metadata, imageUrl, price) {
    try {
      // Upload to IPFS first
      const { metadataIpfs } = await this.uploadToIPFS(metadata, imageUrl);

      // Foundation uses their own contract and API
      const response = await axios.post(
        'https://api.foundation.app/v1/mint',
        {
          metadata_uri: metadataIpfs,
          price: ethers.parseEther(price).toString(),
          currency: 'ETH'
        },
        {
          headers: {
            'Authorization': `Bearer ${this.foundationApiKey}`,
            'Content-Type': 'application/json'
          }
        }
      );

      return {
        foundationUrl: response.data.nft_url,
        tokenId: response.data.token_id
      };
    } catch (error) {
      console.error('Foundation minting failed:', error.message);
      throw new Error(`Foundation minting failed: ${error.message}`);
    }
  }

  /**
   * Get NFT ownership and metadata
   * @param {string} contractAddress - NFT contract address
   * @param {string} tokenId - Token ID
   * @returns {Promise<object>}
   */
  async getNFTInfo(contractAddress, tokenId) {
    const contract = new ethers.Contract(contractAddress, this.erc721ABI, this.provider);
    
    const owner = await contract.ownerOf(tokenId);
    const tokenURI = await contract.tokenURI(tokenId);

    // Fetch metadata from IPFS
    const ipfsGateway = 'https://gateway.pinata.cloud/ipfs/';
    const ipfsHash = tokenURI.replace('ipfs://', '');
    const metadataResponse = await axios.get(`${ipfsGateway}${ipfsHash}`);

    return {
      owner,
      tokenId,
      metadata: metadataResponse.data,
      contractAddress
    };
  }
}

module.exports = NFTMintingService;
