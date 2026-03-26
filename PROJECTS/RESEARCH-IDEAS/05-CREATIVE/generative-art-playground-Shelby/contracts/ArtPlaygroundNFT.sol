// SPDX-License-Identifier: MIT
// ArtPlayground NFT Contract - ERC-721 with royalty support

pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract ArtPlaygroundNFT is ERC721, ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    // Royalty information
    mapping(uint256 => uint256) private _royalties;
    mapping(uint256 => address) private _royaltyReceivers;
    
    // Platform fee (2.5%)
    uint256 public constant PLATFORM_FEE_BPS = 250; // 2.5% in basis points
    address public platformWallet;

    // Events
    event ArtworkMinted(
        uint256 indexed tokenId,
        address indexed creator,
        string tokenURI,
        uint256 royalty
    );
    
    event RoyaltySet(
        uint256 indexed tokenId,
        uint256 royaltyBps,
        address receiver
    );

    constructor(address initialOwner, address _platformWallet) 
        ERC721("ArtPlayground", "ARTPG") 
        Ownable(initialOwner) 
    {
        platformWallet = _platformWallet;
    }

    /**
     * @dev Mint a new NFT for artwork
     * @param to Recipient address
     * @param tokenURI IPFS URI for metadata
     * @param royaltyBps Royalty percentage in basis points (e.g., 500 = 5%)
     * @return tokenId The ID of the newly minted token
     */
    function mintArtwork(
        address to,
        string memory tokenURI,
        uint256 royaltyBps
    ) public onlyOwner returns (uint256) {
        require(royaltyBps <= 1000, "Royalty cannot exceed 10%");
        require(to != address(0), "Invalid recipient");
        require(bytes(tokenURI).length > 0, "Empty tokenURI");

        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, tokenURI);
        
        // Set royalty
        _royalties[tokenId] = royaltyBps;
        _royaltyReceivers[tokenId] = to;

        emit ArtworkMinted(tokenId, to, tokenURI, royaltyBps);
        emit RoyaltySet(tokenId, royaltyBps, to);

        return tokenId;
    }

    /**
     * @dev Batch mint artworks
     * @param recipients Array of recipient addresses
     * @param tokenURIs Array of token URIs
     * @param royalties Array of royalty basis points
     * @return tokenIds Array of minted token IDs
     */
    function batchMint(
        address[] memory recipients,
        string[] memory tokenURIs,
        uint256[] memory royalties
    ) public onlyOwner returns (uint256[] memory) {
        require(
            recipients.length == tokenURIs.length && 
            recipients.length == royalties.length,
            "Array length mismatch"
        );

        uint256[] memory tokenIds = new uint256[](recipients.length);

        for (uint256 i = 0; i < recipients.length; i++) {
            tokenIds[i] = mintArtwork(recipients[i], tokenURIs[i], royalties[i]);
        }

        return tokenIds;
    }

    /**
     * @dev Get royalty information for a token
     * @param tokenId Token ID
     * @return royaltyBps Royalty in basis points
     * @return receiver Royalty receiver address
     */
    function getRoyaltyInfo(uint256 tokenId) 
        public 
        view 
        returns (uint256 royaltyBps, address receiver) 
    {
        require(_exists(tokenId), "Token does not exist");
        return (_royalties[tokenId], _royaltyReceivers[tokenId]);
    }

    /**
     * @dev Calculate royalty amount for a sale
     * @param tokenId Token ID
     * @param salePrice Sale price in wei
     * @return royaltyAmount Royalty amount in wei
     * @return receiver Royalty receiver address
     */
    function calculateRoyalty(uint256 tokenId, uint256 salePrice)
        public
        view
        returns (uint256 royaltyAmount, address receiver)
    {
        require(_exists(tokenId), "Token does not exist");
        
        uint256 royaltyBps = _royalties[tokenId];
        receiver = _royaltyReceivers[tokenId];
        
        royaltyAmount = (salePrice * royaltyBps) / 10000;
    }

    /**
     * @dev Calculate platform fee for a sale
     * @param salePrice Sale price in wei
     * @return platformFee Platform fee amount in wei
     */
    function calculatePlatformFee(uint256 salePrice)
        public
        pure
        returns (uint256)
    {
        return (salePrice * PLATFORM_FEE_BPS) / 10000;
    }

    /**
     * @dev Update platform wallet address
     * @param _newPlatformWallet New platform wallet address
     */
    function setPlatformWallet(address _newPlatformWallet) public onlyOwner {
        require(_newPlatformWallet != address(0), "Invalid address");
        platformWallet = _newPlatformWallet;
    }

    /**
     * @dev Update royalty for a token (only owner)
     * @param tokenId Token ID
     * @param royaltyBps New royalty in basis points
     */
    function updateRoyalty(uint256 tokenId, uint256 royaltyBps) 
        public 
        onlyOwner 
    {
        require(_exists(tokenId), "Token does not exist");
        require(royaltyBps <= 1000, "Royalty cannot exceed 10%");
        
        _royalties[tokenId] = royaltyBps;
        emit RoyaltySet(tokenId, royaltyBps, _royaltyReceivers[tokenId]);
    }

    /**
     * @dev Get total supply
     * @return Total number of tokens minted
     */
    function totalSupply() public view returns (uint256) {
        return _tokenIdCounter.current();
    }

    /**
     * @dev Get all tokens owned by an address
     * @param owner Owner address
     * @return Array of token IDs
     */
    function tokensOfOwner(address owner) public view returns (uint256[] memory) {
        uint256 balance = balanceOf(owner);
        uint256[] memory tokenIds = new uint256[](balance);
        uint256 index = 0;
        
        for (uint256 i = 0; i < _tokenIdCounter.current(); i++) {
            if (ownerOf(i) == owner) {
                tokenIds[index] = i;
                index++;
            }
        }
        
        return tokenIds;
    }

    // Required overrides
    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
