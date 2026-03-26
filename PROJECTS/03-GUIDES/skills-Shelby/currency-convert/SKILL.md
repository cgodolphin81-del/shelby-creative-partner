---
name: currency-convert
description: Real-time currency conversion (free API, no key needed)
homepage: https://exchangerate-api.com/
metadata: {
  "openclaw": {
    "emoji": "💱",
    "requires": {},
    "always": true,
  }
}
---

# Currency Converter

Real-time currency conversion using free exchange rate APIs. **No API key required!**

## Usage

### Basic Conversion
```
/currency-convert --amount 100 --from USD --to EUR
```

### Multiple Currencies
```
/currency-convert --amount 1000 --from USD --to EUR,GBP,JPY,AED
```

### Get Exchange Rates
```
/currency-rates --base USD
```

### Historical Rates
```
/currency-historical --date 2024-01-15 --from USD --to EUR
```

## Implementation

```bash
# Get latest rates (free, no auth)
curl -s "https://api.exchangerate-api.com/v4/latest/${FROM_CURRENCY}"

# Convert amount
AMOUNT * rates[TO_CURRENCY]

# Get all rates for a base currency
curl -s "https://api.exchangerate-api.com/v4/latest/USD"
```

## Examples

### Example 1: Convert USD to EUR
```
You: Convert 100 USD to EUR
Agent: 💱 Currency Conversion
       
       Amount: $100.00 USD
       Rate: 1 USD = 0.92 EUR
       Result: €92.00 EUR
       
       Updated: Just now
```

### Example 2: Etsy Price in Multiple Currencies
```
You: My $97 template - what's that in other currencies?
Agent: 💱 Etsy Template Price ($97 USD)
       
       🇪🇺 EUR: €89.24
       🇬🇧 GBP: £76.83
       🇯🇵 JPY: ¥14,550
       🇦🇪 AED: AED 356.39
       🇨🇦 CAD: C$137.45
       🇦🇺 AUD: A$154.23
       
       Perfect for international Etsy listings!
```

### Example 3: Check AED to USD
```
You: How much is 5000 AED in USD?
Agent: 💱 Currency Conversion
       
       Amount: AED 5,000.00
       Rate: 1 AED = 0.27 USD
       Result: $1,362.50 USD
       
       Updated: Just now
```

## Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `--amount` | number | Yes | - | Amount to convert |
| `--from` | string | Yes | - | Source currency code (USD, EUR, etc.) |
| `--to` | string | Yes | - | Target currency (comma-separated for multiple) |
| `--base` | string | No | USD | Base currency for rates |
| `--date` | string | No | today | Historical date (YYYY-MM-DD) |

## Supported Currencies

**Major:**
- USD (US Dollar)
- EUR (Euro)
- GBP (British Pound)
- JPY (Japanese Yen)
- CHF (Swiss Franc)
- CAD (Canadian Dollar)
- AUD (Australian Dollar)

**Middle East:**
- AED (UAE Dirham)
- SAR (Saudi Riyal)
- QAR (Qatari Riyal)
- KWD (Kuwaiti Dinar)
- BHD (Bahraini Dinar)
- OMR (Omani Rial)

**And 150+ more currencies worldwide!**

## API Details

**Provider:** exchangerate-api.com
**Cost:** 100% FREE (no auth endpoint)
**Rate Limit:** Unlimited for basic endpoint
**Auth:** None required
**Update Frequency:** Daily

## Error Handling

**Invalid Currency:**
```
❌ Error: Invalid currency code "XYZ"
Use ISO 4217 codes (USD, EUR, GBP, etc.)
```

**Network Error:**
```
⚠️ Warning: Could not fetch latest rates
Using cached rates from: 2024-03-18
```

**Historical Date:**
```
❌ Error: Historical data only available for past 10 years
```

## Use Cases

**E-commerce (Your Etsy Shop!):**
- Display prices in local currencies
- Calculate international profits
- Set competitive regional pricing

**Travel:**
- Budget planning
- Expense tracking
- Cash withdrawal decisions

**Business:**
- Invoice conversion
- Expense reports
- Financial reporting

**Personal:**
- Remittances
- Investment tracking
- Salary comparisons

## Quick Reference

**Common Conversions:**
```
USD → EUR: × 0.92
USD → GBP: × 0.79
USD → AED: × 3.67
USD → JPY: × 150
EUR → GBP: × 0.86
EUR → AED: × 3.99
```

**Reverse:**
```
EUR → USD: × 1.09
GBP → USD: × 1.27
AED → USD: × 0.27
JPY → USD: × 0.0067
```

## Related Skills

- `crypto-prices` - Cryptocurrency prices
- `stock-prices` - Stock market data
- `price-tracker` - Track price changes over time

---

*Version: 1.0.0*
*Last Updated: March 18, 2026*
*API: https://www.exchangerate-api.com/*
