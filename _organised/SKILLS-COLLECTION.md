# 🛠️ OpenClaw Skills Collection
*Working tools built for Charmaine - March 18, 2026*

---

## 📦 SKILLS CREATED TONIGHT

### **1. QR Generator** 📱
**API:** goqr.me (100% FREE, no key)
**Use:** Generate QR codes for anything

**Commands:**
```bash
/qr-generate --text "https://etsy.com/shop/CharmaineCVTemplates"
/qr-generate --wifi --ssid "MyNetwork" --password "MyPassword"
/qr-generate --vcard --name "Charmaine Frost" --phone "+971564830227"
```

**Perfect for:**
- Etsy shop QR codes
- Business cards
- WiFi sharing
- Contact sharing

---

### **2. Currency Converter** 💱
**API:** exchangerate-api.com (100% FREE, no key)
**Use:** Real-time currency conversion

**Commands:**
```bash
/currency-convert --amount 97 --from USD --to EUR,GBP,AED
/currency-rates --base USD
```

**Perfect for:**
- Etsy international pricing
- Travel budgeting
- Business invoicing

**Example:**
```
$97 USD = €89.24 EUR = £76.83 GBP = AED 356.39
```

---

### **3. IP Lookup** 🌍
**API:** ipapi.co (FREE, 1000/day)
**Use:** Geolocation, ISP, timezone lookup

**Commands:**
```bash
/ip-lookup
/ip-lookup --ip 8.8.8.8
```

**Perfect for:**
- Security monitoring
- Visitor analytics
- Server location check
- VPN verification

---

### **4. URL Shortener** 🔗
**API:** TinyURL (100% FREE, no signup)
**Use:** Shorten long URLs

**Commands:**
```bash
/url-shorten --url "https://very-long-etsy-link.com/..."
/url-shorten --url "https://..." --alias "my-cv-shop"
```

**Perfect for:**
- Instagram bio links
- Social media posts
- QR codes (shorter = better!)
- Email signatures

---

### **5. Crypto Prices** ₿
**API:** CoinGecko (FREE, no key)
**Use:** Real-time cryptocurrency prices

**Commands:**
```bash
/crypto-price --coin bitcoin
/crypto-prices --coins bitcoin,ethereum,solana
/crypto-price --coin bitcoin --currency AED
```

**Perfect for:**
- Portfolio tracking
- Crypto payment pricing
- Market monitoring
- Content creation

---

### **6. Dictionary** 📖
**API:** dictionaryapi.dev (100% FREE, no key)
**Use:** Definitions, synonyms, examples

**Commands:**
```bash
/dictionary --word "serendipity"
/synonyms --word "responsible"
/examples --word "ephemeral"
```

**Perfect for:**
- CV writing (stronger verbs!)
- Content creation
- Learning new words
- Spelling checks

**CV Power Words:**
```
❌ "Responsible for"
✅ "Spearheaded", "Orchestrated", "Directed"
```

---

### **7. n8n Webhook** 🔗
**API:** Your n8n instance
**Use:** Trigger n8n workflows

**Commands:**
```bash
/n8n-trigger --workflow company-research --data '{"company":"Tesla"}'
/n8n-trigger --workflow daily-briefing --schedule "0 7 * * *"
```

**Perfect for:**
- Business automation
- Data processing
- Multi-step workflows
- Integration hub

---

## 📊 SKILL SUMMARY

| Skill | API | Cost | Auth | Use Case |
|-------|-----|------|------|----------|
| qr-generator | goqr.me | FREE | None | QR codes |
| currency-convert | exchangerate-api | FREE | None | Currency |
| ip-lookup | ipapi.co | FREE | None | Geolocation |
| url-shortener | TinyURL | FREE | None | URL shortening |
| crypto-prices | CoinGecko | FREE | None | Crypto tracking |
| dictionary | dictionaryapi | FREE | None | Word lookup |
| n8n-webhook | Your n8n | FREE | API Key | Automation |

**Total:** 7 skills, ALL FREE APIs, most require NO authentication!

---

## 🚀 HOW TO INSTALL

### **Option 1: Copy to OpenClaw Skills**
```bash
# Copy each skill
cp -r /mnt/data/openclaw/workspace/.openclaw/workspace/skills/* ~/.openclaw/skills/

# Or symlink (for development)
ln -s /mnt/data/openclaw/workspace/.openclaw/workspace/skills/* ~/.openclaw/skills/
```

### **Option 2: Test First**
```bash
# Test each skill
cd /mnt/data/openclaw/workspace/.openclaw/workspace/skills/

# Check skill structure
cat qr-generator/SKILL.md
```

### **Option 3: Publish to ClawHub**
```bash
# Install clawhub CLI
npm install -g clawhub

# Login
clawhub login

# Publish each skill
cd qr-generator
clawhub publish

# Repeat for each skill...
```

---

## 💡 USE CASES FOR YOUR BUSINESS

### **Etsy Shop Promotion:**

1. **QR Generator:**
   - Create QR codes for business cards
   - Stick on packaging: "Scan for more templates!"
   - Share at networking events

2. **URL Shortener:**
   - Short Etsy URLs for Instagram
   - Track which platform drives most sales
   - Clean links in email signatures

3. **Currency Converter:**
   - Display prices in customer's currency
   - Calculate your profits in AED/USD/GBP
   - Set competitive international pricing

4. **Dictionary:**
   - Write better product descriptions
   - Improve CV template wording
   - Create stronger marketing copy

### **Daily Operations:**

1. **IP Lookup:**
   - Check where customers are from
   - Monitor for fraud
   - Verify login locations

2. **Crypto Prices:**
   - Accept crypto payments? Price in real-time
   - Track crypto investments
   - Create crypto-related content

3. **n8n Webhook:**
   - Automate order processing
   - Send follow-up emails
   - Update inventory
   - Generate reports

---

## 🔧 CUSTOMIZATION

### **Add Your Branding:**

Edit each skill's examples to include your business:

```markdown
### Example: Etsy Shop
You: Generate QR for my shop
Agent: ✅ https://tinyurl.com/charmaine-cv-shop
       QR saved to: ./qrs/etsy-shop.png
```

### **Add More Currencies:**

Edit `currency-convert` to include your preferred currencies:

```json5
{
  defaultCurrencies: ["USD", "EUR", "GBP", "AED", "SAR"],
}
```

### **Custom CV Power Words:**

Edit `dictionary` to include CV-specific suggestions:

```markdown
## CV Power Words for Environmental Sector:
- Optimized (gas systems)
- Managed (portfolios)
- Led (teams)
- Achieved (compliance targets)
```

---

## 📈 NEXT SKILLS TO BUILD

Want more? Here are ideas:

1. **weather** - Weather forecasts (wttr.in, FREE)
2. **news-headlines** - Latest news (newsapi.org, FREE tier)
3. **stock-prices** - Stock market data (alpha vantage, FREE)
4. **recipe-search** - Find recipes (spoonacular, FREE tier)
5. **movie-info** - Movie details (OMDb API, FREE)
6. **email-validator** - Verify emails (verifyemail.io, FREE tier)
7. **screenshot-website** - Capture webpages (screenshotapi.net, FREE tier)
8. **pdf-generator** - Create PDFs (various free options)
9. **translation** - Translate text (libretranslate, FREE)
10. **linkedin-scraper** - Extract LinkedIn data (custom skill)

**Which should I build next?** Just say the word! 🛠️

---

## ⚠️ IMPORTANT NOTES

### **API Rate Limits:**

| Skill | Limit | Notes |
|-------|-------|-------|
| qr-generator | Unlimited | Very generous |
| currency-convert | Unlimited | No auth endpoint |
| ip-lookup | 1000/day | Resets midnight UTC |
| url-shortener | Unlimited | Reasonable use |
| crypto-prices | 10-50/min | CoinGecko demo |
| dictionary | Unlimited | No limits |
| n8n-webhook | Your server | Depends on your setup |

### **Best Practices:**

1. **Cache results** when possible
2. **Don't spam APIs** (be reasonable)
3. **Monitor usage** (especially IP lookup)
4. **Have fallbacks** (if API is down)

### **Security:**

- ✅ All APIs are HTTPS
- ✅ No sensitive data sent
- ✅ Public endpoints only
- ⚠️ Don't log API responses with personal data

---

## 🎉 WHAT YOU CAN DO NOW

**With these 7 skills, you can:**

✅ Generate QR codes for your Etsy shop
✅ Show prices in any currency
✅ Shorten and track URLs
✅ Look up customer locations
✅ Check crypto prices
✅ Improve your CV writing
✅ Automate workflows with n8n

**That's a complete business toolkit - ALL FREE!** 🚀

---

*Created: March 18, 2026*
*Total skills: 7*
*Total APIs: 7 (all FREE)*
*Total API keys needed: 0 (except n8n)*

**Ready to deploy! Just copy to ~/.openclaw/skills/** 📦
