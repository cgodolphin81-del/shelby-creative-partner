---
name: crypto-prices
description: Real-time cryptocurrency prices (free, no API key)
homepage: https://coingecko.com/
metadata: {
  "openclaw": {
    "emoji": "₿",
    "requires": {},
    "always": true,
  }
}
---

# Crypto Price Tracker

Real-time cryptocurrency prices from CoinGecko. **Free, no API key needed!**

## Usage

### Single Coin Price
```
/crypto-price --coin bitcoin
```

### Multiple Coins
```
/crypto-prices --coins bitcoin,ethereum,solana,cardano
```

### Price in Specific Currency
```
/crypto-price --coin bitcoin --currency AED
```

### Market Overview
```
/crypto-market --top 10
```

### Price Alert
```
/crypto-alert --coin ethereum --above 2000 --below 1800
```

## Implementation

```bash
# Get single coin price
curl -s "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"

# Multiple coins
curl -s "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana&vs_currencies=usd,eur,aed"

# With market data
curl -s "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10"
```

## Examples

### Example 1: Bitcoin Price
```
You: What's Bitcoin's price?
Agent: ₿ Bitcoin (BTC)
       
       💰 Price: $67,234.50 USD
       📊 24h Change: +2.34% 📈
       🏆 Market Cap: $1.32T
       📦 24h Volume: $28.5B
       
       Updated: 30 seconds ago
```

### Example 2: Portfolio Check
```
You: Check my crypto portfolio - 0.5 BTC, 10 ETH, 100 SOL
Agent: 💼 Your Crypto Portfolio
       
       Asset          Amount    Price       Value
       ─────────────────────────────────────────
       Bitcoin        0.5       $67,234     $33,617
       Ethereum       10        $3,456      $34,560
       Solana         100       $145.67     $14,567
       ─────────────────────────────────────────
       TOTAL:                               $82,744
       
       24h Change: +$1,892 (+2.34%) 📈
```

### Example 3: Prices in AED
```
You: Crypto prices in AED
Agent: 🇦🇪 Crypto Prices (AED)
       
       Bitcoin:      AED 247,023
       Ethereum:     AED 12,694
       Solana:       AED 535
       Cardano:      AED 2.15
       Ripple:       AED 1.89
       
       Updated: Just now
```

## Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `--coin` | string | No* | - | Single coin ID |
| `--coins` | string | No* | - | Multiple coins (comma-separated) |
| `--currency` | string | No | USD | Fiat currency (USD, EUR, AED, etc.) |
| `--top` | number | No | 10 | Top N coins by market cap |
| `--alert` | flag | No | false | Set price alert |

## Supported Coins

**Top 10:**
- Bitcoin (bitcoin)
- Ethereum (ethereum)
- Tether (tether)
- BNB (bnb)
- Solana (solana)
- USDC (usd-coin)
- XRP (ripple)
- Dogecoin (dogecoin)
- Cardano (cardano)
- TRON (tron)

**And 10,000+ more!**

## API Details

**Provider:** CoinGecko
**Cost:** 100% FREE (demo tier)
**Rate Limit:** 10-50 calls/minute
**Auth:** None required (public API)
**Data:** Real-time prices, market cap, volume

## Error Handling

**Invalid Coin:**
```
❌ Error: Unknown coin "notacoin"
Use CoinGecko ID (e.g., "bitcoin", "ethereum")
Search: /crypto-search --query "name"
```

**Rate Limit:**
```
⚠️ Rate limit reached
Waiting 60 seconds before retry...
```

**API Down:**
```
⚠️ CoinGecko API temporarily unavailable
Using cached prices from: 5 minutes ago
```

## Use Cases

**Personal Trading:**
- Quick price checks
- Portfolio tracking
- Price alerts
- Market overview

**Business:**
- Crypto payment pricing
- Invoice conversion
- Financial reporting

**Content:**
- Market updates
- Price analysis
- Social media posts

## Price Alerts

**Set Alerts:**
```
/alert --coin bitcoin --above 70000
/alert --coin ethereum --below 2000
```

**Alert Delivery:**
- Telegram message
- Email notification
- Push notification (if configured)

## Related Skills

- `currency-convert` - Fiat currency conversion
- `stock-prices` - Stock market data
- `portfolio-tracker` - Track investment portfolio

---

*Version: 1.0.0*
*Last Updated: March 18, 2026*
*API: https://www.coingecko.com/*
