# NFT Collection Build

**Complete Guide to Launching an NFT Collection**

---

## Overview

This document provides a step-by-step framework for building and launching a successful NFT collection from concept to post-launch.

**Timeline:** 4-8 weeks
**Budget Range:** $50K - $200K
**Typical Collection Size:** 5,000 - 10,000 NFTs

---

## Phase 1: Concept & Art Direction (Week 1-2)

### 1.1 Define Collection Concept

**Key Questions:**
- What story/world are you building?
- Who is the target collector?
- What utility does the NFT provide?
- What makes this collection unique?

**Deliverables:**
- Collection name and tagline
- One-paragraph concept description
- Target audience profile
- Unique value proposition

### 1.2 Art Style & Direction

**Style Options:**
- **PFP (Profile Picture)** - Most common, 10K collections
- **1/1 Art** - Unique pieces, higher price point
- **Generative Art** - Algorithm-based, tech-forward
- **Photography** - Real-world assets
- **3D/Animated** - Higher production value

**Art Production Options:**

| Option | Cost | Timeline | Quality |
|--------|------|----------|---------|
| In-house Artist | $20K-$50K | 4-6 weeks | High |
| Freelance Artist | $10K-$30K | 3-5 weeks | Variable |
| AI-Assisted | $5K-$15K | 2-3 weeks | Variable |
| Agency Design | $30K-$100K | 4-8 weeks | Premium |

**Trait Structure (for PFP collections):**

Typical 10K collection needs 100-300 traits across 6-8 categories:

```
Example Trait Structure:
- Background (10-15 options)
- Body/Skin (10-15 options)
- Eyes (15-20 options)
- Mouth (15-20 options)
- Clothing (20-30 options)
- Accessories (20-30 options)
- Headwear (15-20 options)
- Special/Rare (5-10 options)
```

**Rarity Distribution:**
- Common: 50-60%
- Uncommon: 25-30%
- Rare: 10-15%
- Epic: 3-5%
- Legendary: 1-2%

### 1.3 Art Deliverables Checklist

- [ ] All trait layers created (PNG with transparency)
- [ ] Layers properly sized and aligned (e.g., 1000x1000px)
- [ ] Naming convention established
- [ ] Rarity weights assigned
- [ ] Test generations reviewed
- [ ] Final collection generated (10K images)
- [ ] Preview images for marketing
- [ ] Banner and profile images

---

## Phase 2: Smart Contract Development (Week 2-4)

### 2.1 Choose Blockchain

See [Blockchain Selection Guide](./02-blockchain-selection.md)

**Quick Reference:**
- **Ethereum:** Premium, high security, high cost
- **Solana:** Fast, cheap, strong NFT ecosystem
- **Polygon:** EVM-compatible, low cost
- **Base:** Coinbase-backed, growing fast

### 2.2 Smart Contract Features

**Standard Features:**
- [ ] ERC-721 or ERC-1155 (EVM) / Metaplex (Solana)
- [ ] Mint function with price control
- [ ] Max supply enforcement
- [ ] Owner/admin controls
- [ ] Reveal mechanism
- [ ] Royalty enforcement (5-10%)
- [ ] Pause/unpause functionality
- [ ] Withdraw function

**Premium Features:**
- [ ] Allowlist/whitelist pricing
- [ ] Public sale pricing
- [ ] Mint limits per wallet
- [ ] Airdrop capability
- [ ] Soulbound options
- [ ] Dynamic metadata
- [ ] Staking integration
- [ ] Breeding/evolution mechanics

### 2.3 Contract Development Process

**Week 2-3: Development**
1. Set up development environment
2. Write contract code
3. Write deployment scripts
4. Create unit tests
5. Deploy to testnet

**Week 4: Testing & Audit**
1. Internal security review
2. Test all functions thoroughly
3. Fix any issues
4. External audit (recommended for >$100K projects)
5. Final testnet deployment

### 2.4 Recommended Contract Standards

**Ethereum/Polygon/Base:**
```solidity
// Use OpenZeppelin contracts
- @openzeppelin/contracts/token/ERC721/ERC721.sol
- @openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol
- @openzeppelin/contracts/security/ReentrancyGuard.sol
- @openzeppelin/contracts/access/Ownable.sol

// Gas-optimized alternative
- ERC721A by Aztec (saves 50%+ on mint gas)
```

**Solana:**
```rust
// Use Metaplex standards
- Metaplex Token Metadata Program
- Candy Machine v3 for minting
- Anchor Framework for development
```

### 2.5 Smart Contract Costs

| Item | Ethereum | Solana | Polygon | Base |
|------|----------|--------|---------|------|
| Development | $15K-$40K | $15K-$40K | $15K-$40K | $15K-$40K |
| Deployment | $500-$5K | $50-$200 | $10-$100 | $5-$50 |
| Audit | $10K-$50K | $10K-$50K | $10K-$50K | $10K-$50K |
| **Total** | **$25.5K-$95K** | **$25K-$90K** | **$25K-$90K** | **$25K-$90K** |

---

## Phase 3: Minting Website (Week 3-5)

### 3.1 Website Requirements

**Essential Features:**
- [ ] Wallet connection (MetaMask, Phantom, etc.)
- [ ] Mint interface with quantity selector
- [ ] Real-time mint status
- [ ] Transaction confirmation
- [ ] Allowlist verification
- [ ] Countdown timer
- [ ] Collection display/gallery
- [ ] Roadmap section
- [ ] Team section (optional)
- [ ] FAQ section
- [ ] Social links

**Premium Features:**
- [ ] Reveal page
- [ ] Secondary marketplace integration
- [ ] Staking interface
- [ ] Token-gated content
- [ ] Leaderboard
- [ ] Referral system

### 3.2 Tech Stack Recommendations

**Frontend:**
- React.js or Next.js
- Tailwind CSS for styling
- Framer Motion for animations

**Web3 Integration:**
- **EVM:** RainbowKit + Wagmi + Viem
- **Solana:** @solana/wallet-adapter

**Hosting:**
- Vercel (recommended)
- Netlify
- IPFS (for decentralization)

### 3.3 Website Development Timeline

| Phase | Duration | Cost |
|-------|----------|------|
| Design | 1 week | $5K-$15K |
| Frontend Dev | 1-2 weeks | $10K-$25K |
| Web3 Integration | 1 week | $5K-$15K |
| Testing | 3-5 days | Included |
| **Total** | **3-4 weeks** | **$20K-$55K** |

### 3.4 Security Checklist

- [ ] HTTPS enabled
- [ ] Smart contract addresses verified
- [ ] No hardcoded private keys
- [ ] Rate limiting on API calls
- [ ] DDoS protection (Cloudflare)
- [ ] Input validation
- [ ] Wallet connection security
- [ ] Transaction simulation before signing

---

## Phase 4: Metadata & IPFS (Week 4-5)

### 4.1 Metadata Structure

**Standard ERC-721 Metadata:**
```json
{
  "name": "Collection Name #1234",
  "description": "Description of the NFT",
  "image": "ipfs://Qm.../1234.png",
  "attributes": [
    {
      "trait_type": "Background",
      "value": "Blue"
    },
    {
      "trait_type": "Eyes",
      "value": "Laser"
    }
  ],
  "external_url": "https://yourproject.com"
}
```

### 4.2 Storage Options

| Option | Cost | Decentralized | Recommended |
|--------|------|---------------|-------------|
| IPFS (Pinata) | $100-$500/year | Yes | ✅ |
| IPFS (Infura) | $100-$300/year | Yes | ✅ |
| Arweave | $500-$2000 (one-time) | Yes | ✅ |
| AWS S3 | $50-$200/year | No | ⚠️ |
| Custom Server | $100-$500/year | No | ❌ |

**Recommendation:** Use Pinata or Arweave for permanent storage

### 4.3 Metadata Generation

**Process:**
1. Generate all 10K metadata files
2. Upload images to IPFS
3. Upload metadata to IPFS
4. Verify all links work
5. Test with marketplace (OpenSea, etc.)

**Tools:**
- HashLips Art Engine (free)
- NFTrarity (paid)
- Custom scripts

**Cost:** $2K-$5K for generation and upload

---

## Phase 5: Roadmap Development (Week 5-6)

### 5.1 Roadmap Structure

**Standard 4-Phase Roadmap:**

```
PHASE 1: Launch (Month 1)
- Successful mint
- Community building
- Marketplace listings
- Initial partnerships

PHASE 2: Growth (Months 2-3)
- Utility reveal
- Staking launch
- Merchandise store
- Community events

PHASE 3: Expansion (Months 4-6)
- Second collection/season
- Token airdrop
- Major partnerships
- IRL events

PHASE 4: Long-term (Months 6+)
- DAO formation
- Ecosystem development
- Metaverse integration
- Legacy building
```

### 5.2 Roadmap Best Practices

✅ **Do:**
- Be specific with deliverables
- Set realistic timelines
- Include community benefits
- Show long-term vision
- Update regularly

❌ **Don't:**
- Over-promise
- Give exact dates (use "Q2 2025" not "April 15")
- Copy other projects
- Forget to update
- Make it all about price

### 5.3 Roadmap Design

**Deliverables:**
- Visual roadmap graphic
- Detailed text version
- Website integration
- Social media assets

**Cost:** $3K-$10K

---

## Phase 6: Pre-Launch Preparation (Week 6-7)

### 6.1 Marketing Assets

Create:
- [ ] Teaser images/videos
- [ ] Trait reveals
- [ ] Countdown graphics
- [ ] Allowlist graphics
- [ ] Mint day graphics
- [ ] Social media templates
- [ ] Press kit

**Budget:** $5K-$20K

### 6.2 Community Setup

See [Community Building](./05-community-building.md)

**Minimum Viable:**
- Discord server
- Twitter/X account
- Website
- Email list

### 6.3 Allowlist Strategy

**Methods:**
- Discord engagement
- Twitter contests
- Whitelist partners
- Early supporters
- Paid allowlist (controversial)

**Typical Allocation:**
- 30-50% allowlist
- 50-70% public

### 6.4 Pricing Strategy

**Ethereum:**
- Allowlist: 0.03-0.06 ETH
- Public: 0.05-0.1 ETH

**Solana:**
- Allowlist: 0.5-1.5 SOL
- Public: 1-3 SOL

**Polygon/Base:**
- Allowlist: $10-$30
- Public: $30-$100

---

## Phase 7: Launch & Post-Launch (Week 8+)

### 7.1 Launch Day Checklist

**Before Launch:**
- [ ] Contract deployed and verified
- [ ] Website tested thoroughly
- [ ] Team wallets funded
- [ ] Social media ready
- [ ] Support team briefed
- [ ] Emergency contacts ready

**During Launch:**
- [ ] Monitor mint progress
- [ ] Handle support issues
- [ ] Social media updates
- [ ] Community engagement
- [ ] Track any issues

**After Launch:**
- [ ] Reveal NFTs
- [ ] Thank community
- [ ] Secondary market monitoring
- [ ] Roadmap execution begins

### 7.2 Post-Launch Support

**Week 1-2:**
- Daily community updates
- Support ticket resolution
- Bug fixes if needed
- Marketplace verification

**Month 1-3:**
- Weekly updates
- Roadmap progress
- Community events
- Partnership announcements

### 7.3 Success Metrics

| Metric | Good | Great | Exceptional |
|--------|------|-------|-------------|
| Mint Speed | 50% in 24h | 80% in 24h | 100% in 1h |
| Floor Price | >0.5x mint | >1x mint | >3x mint |
| Holder Count | 30%+ unique | 50%+ unique | 70%+ unique |
| Volume (Week 1) | 2x mint | 5x mint | 10x mint |

---

## Complete Budget Breakdown

### Budget: $50K (Minimum Viable)

| Item | Cost |
|------|------|
| Art (freelance) | $15,000 |
| Smart Contract | $15,000 |
| Website (template) | $8,000 |
| Marketing Assets | $5,000 |
| Legal/Setup | $3,000 |
| Contingency | $4,000 |
| **Total** | **$50,000** |

### Budget: $100K (Standard)

| Item | Cost |
|------|------|
| Art (professional) | $30,000 |
| Smart Contract + Audit | $35,000 |
| Website (custom) | $20,000 |
| Marketing/PR | $10,000 |
| Legal/Setup | $5,000 |
| **Total** | **$100,000** |

### Budget: $200K (Premium)

| Item | Cost |
|------|------|
| Art (studio/3D) | $75,000 |
| Smart Contract + Audit | $50,000 |
| Website (premium) | $40,000 |
| Marketing/Influencers | $25,000 |
| Legal/Setup | $10,000 |
| **Total** | **$200,000** |

---

## Timeline Summary

```
Week 1-2:  Concept & Art Direction
Week 2-4:  Smart Contract Development
Week 3-5:  Minting Website
Week 4-5:  Metadata & IPFS
Week 5-6:  Roadmap & Marketing Assets
Week 6-7:  Pre-Launch Preparation
Week 8:    LAUNCH
Week 8+:   Post-Launch Support
```

---

## Risk Mitigation

### Common Risks & Solutions:

**Smart Contract Bugs:**
- Solution: Thorough testing + audit + bug bounty

**Low Mint Demand:**
- Solution: Strong pre-launch marketing + allowlist strategy

**Technical Issues:**
- Solution: Load testing + backup servers + support team

**Community Backlash:**
- Solution: Transparent communication + fair practices

**Market Downturn:**
- Solution: Focus on utility + long-term roadmap

---

## Next Steps

1. Review this guide with client
2. Confirm budget and timeline
3. Select blockchain
4. Begin art direction
5. Start community building

**Related Documents:**
- [Blockchain Selection](./02-blockchain-selection.md)
- [Community Building](./05-community-building.md)
- [Marketing Strategy](./06-marketing-strategy.md)
