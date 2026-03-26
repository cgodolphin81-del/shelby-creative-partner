# 🖨️ Print-on-Demand Setup - Printful Integration

Sell poetry prints, books, and merchandise without inventory.

---

## 🏪 PRODUCT CATALOG

### Poetry Prints (Posters)

| Product | Size | Printful SKU | Base Cost | Retail Price | Margin |
|---------|------|--------------|-----------|--------------|--------|
| Matte Poster | 12x18" | poster_12x18 | $8.95 | $24.99 | $16.04 |
| Matte Poster | 18x24" | poster_18x24 | $12.95 | $34.99 | $22.04 |
| Matte Poster | 24x36" | poster_24x36 | $16.95 | $44.99 | $28.04 |
| Framed Poster | 12x18" | framed_12x18 | $24.95 | $59.99 | $35.04 |
| Canvas | 12x16" | canvas_12x16 | $19.95 | $49.99 | $30.04 |
| Canvas | 16x20" | canvas_16x20 | $24.95 | $59.99 | $35.04 |

### Poetry Books

| Product | Pages | Base Cost | Retail Price | Margin |
|---------|-------|-----------|--------------|--------|
| Softcover Book | 50 pages | $5.95 | $19.99 | $14.04 |
| Softcover Book | 100 pages | $7.95 | $24.99 | $17.04 |
| Hardcover Book | 50 pages | $9.95 | $29.99 | $20.04 |
| Hardcover Book | 100 pages | $12.95 | $34.99 | $22.04 |

### Merchandise

| Product | Base Cost | Retail Price | Margin |
|---------|-----------|--------------|--------|
| T-Shirt (poetry quote) | $11.95 | $29.99 | $18.04 |
| Tote Bag | $9.95 | $24.99 | $15.04 |
| Mug | $8.95 | $19.99 | $11.04 |
| Notebook | $7.95 | $19.99 | $12.04 |

---

## 🔧 PRINTFUL API INTEGRATION

### Setup Steps

1. **Create Printful Account**: https://www.printful.com
2. **Get API Key**: Dashboard → Settings → API
3. **Connect Store**: Link to Shopify, WooCommerce, or custom site
4. **Sync Products**: Use API to create product listings

### API Configuration

```python
# Printful API Integration
import requests
import base64

PRINTFUL_CONFIG = {
    "api_key": "your-printful-api-key",
    "base_url": "https://api.printful.com",
    "store_id": "your-store-id"
}

def get_headers():
    return {
        "Authorization": f"Bearer {PRINTFUL_CONFIG['api_key']}",
        "Content-Type": "application/json"
    }

# Create a product listing
def create_product(product_data):
    """Create a new product in Printful"""
    
    url = f"{PRINTFUL_CONFIG['base_url']}/store/products"
    
    payload = {
        "product": {
            "external_id": product_data["external_id"],
            "title": product_data["title"],
            "sync_variants": product_data["variants"],
            "thumbnail": product_data["thumbnail_url"]
        }
    }
    
    response = requests.post(url, json=payload, headers=get_headers())
    return response.json()

# Upload design file
def upload_design(file_path, description="Poetry Print"):
    """Upload design file to Printful"""
    
    url = f"{PRINTFUL_CONFIG['base_url']}/files"
    
    with open(file_path, 'rb') as f:
        files = {'file': f}
        data = {'description': description}
        response = requests.post(url, files=files, data=data, 
                                 headers={"Authorization": get_headers()["Authorization"]})
    
    return response.json()

# Create order (for custom poems)
def create_order(customer_info, items):
    """Create a print order"""
    
    url = f"{PRINTFUL_CONFIG['base_url']}/orders"
    
    payload = {
        "recipient": {
            "name": customer_info["name"],
            "address1": customer_info["address1"],
            "city": customer_info["city"],
            "country_code": customer_info["country"],
            "state_code": customer_info["state"],
            "zip": customer_info["zip"]
        },
        "items": items
    }
    
    response = requests.post(url, json=payload, headers=get_headers())
    return response.json()

# Get order status
def get_order_status(order_id):
    """Check order fulfillment status"""
    
    url = f"{PRINTFUL_CONFIG['base_url']}/orders/{order_id}"
    response = requests.get(url, headers=get_headers())
    return response.json()
```

---

## 🎨 DESIGN SPECIFICATIONS

### Poster Design Requirements

```
┌────────────────────────────────────────────┐
│                                            │
│   Safe Zone: Keep text 0.5" from edges    │
│                                            │
│   ┌──────────────────────────────────┐     │
│   │                                  │     │
│   │   PRINTABLE AREA                 │     │
│   │   (full bleed +0.125" each side) │     │
│   │                                  │     │
│   │   [Poem text centered]           │     │
│   │   [Author attribution]           │     │
│   │   [AI Poetry Studio branding]    │     │
│   │                                  │     │
│   └──────────────────────────────────┘     │
│                                            │
│   Resolution: 300 DPI minimum              │
│   Color Mode: CMYK for print               │
│   File Format: PNG or PDF                  │
│                                            │
└────────────────────────────────────────────┘
```

### File Requirements

| Product | Resolution | Color Mode | Max File Size |
|---------|------------|------------|---------------|
| Posters | 300 DPI | CMYK | 50 MB |
| Canvas | 150 DPI | RGB | 50 MB |
| Books | 300 DPI | CMYK | 100 MB |
| T-Shirts | 300 DPI | RGB (DTG) | 25 MB |

### Design Templates by Size

**12x18" Poster**: 3750 x 5625 px @ 300 DPI
**18x24" Poster**: 5625 x 7500 px @ 300 DPI
**24x36" Poster**: 7500 x 11250 px @ 300 DPI

---

## 💰 PRICING STRATEGY

### Tiered Pricing Model

**Standard Prints** (generated poems):
- 12x18": $24.99
- 18x24": $34.99
- 24x36": $44.99

**Premium Prints** (custom poems):
- Add $25-100 for personalized text
- Include customer name/date in design

**Limited Editions** (signed, numbered):
- Add $50-150 premium
- Certificate of authenticity
- Max 100 prints per design

**Bundles**:
- Poetry Collection (3 prints): $59.99 (save $15)
- Complete Set (5 prints): $89.99 (save $35)
- Book + Print Bundle: $49.99 (save $10)

---

## 📦 FULFILLMENT WORKFLOW

### Standard Order Flow

```
Customer Order → Payment (Stripe) → Printful API → 
Production (2-5 days) → Shipping (3-7 days) → 
Tracking Email → Delivery → Review Request
```

### Custom Poetry Order Flow

```
Custom Request → Poem Generation → Customer Approval → 
Payment → Printful API → Production → Shipping → Delivery
```

### Shipping Times

| Region | Production | Shipping | Total |
|--------|------------|----------|-------|
| US | 2-5 days | 3-7 days | 5-12 days |
| EU | 2-5 days | 5-10 days | 7-15 days |
| International | 2-5 days | 10-20 days | 12-25 days |

---

## 🏷️ PRODUCT LISTINGS

### Example Product Description (Etsy/Shopify)

```
✨ AI-Generated Poetry Print - "Cherry Blossoms"

Bring the beauty of haiku into your home with this 
elegant poetry print. Each piece is AI-generated with 
care and printed on premium matte paper.

📜 THE POEM:
cherry blossoms fall
dancing on the spring breeze now
pink snow covers grass

🎨 PRODUCT DETAILS:
• Premium matte poster paper (200gsm)
• Museum-quality archival inks
• Made to order (eco-friendly!)
• Ships in protective tube

📏 SIZE OPTIONS:
• 12x18" - Perfect for desks, shelves
• 18x24" - Great for walls, galleries
• 24x36" - Statement piece

🖼️ FRAMING:
Frame not included. We recommend standard frames 
from IKEA, Target, or Amazon for easy sizing.

📦 SHIPPING:
• Production: 2-5 business days
• US Shipping: 3-7 days
• International: 10-20 days
• Tracking included

💝 PERFECT FOR:
• Home decor
• Gift for poetry lovers
• Mindfulness spaces
• Office inspiration
• Meditation rooms

Each print is made just for you - no two orders 
are exactly alike!

#poetry #haiku #wallart #homedecor #mindfulness
```

---

## 📊 INVENTORY MANAGEMENT

### Printful Auto-Sync

- No inventory needed (print-on-demand)
- Products auto-sync with your store
- Stock levels managed by Printful
- Automatic fulfillment tracking

### Quality Control

1. Order sample of each product first
2. Check print quality, colors, paper
3. Test shipping packaging
4. Verify fulfillment times
5. Review customer feedback

### Returns Policy

```
Returns accepted within 30 days for:
- Damaged items (photo required)
- Wrong item received
- Major quality issues

Not accepted for:
- Buyer's remorse
- Minor color variations
- Frame not included (clearly stated)

Process: Customer emails → We issue return label → 
Printful processes refund → We refund customer
```

---

## 🚀 LAUNCH CHECKLIST

- [ ] Printful account created
- [ ] API key obtained
- [ ] Store connected (Shopify/WooCommerce/Etsy)
- [ ] 10-20 poetry prints designed
- [ ] Product listings created
- [ ] Pricing set (3x base cost minimum)
- [ ] Shipping zones configured
- [ ] Sample order placed (quality check)
- [ ] Return policy written
- [ ] Customer service email set up
- [ ] Social media graphics ready
- [ ] Launch announcement prepared

---

**Integration Guide Version**: 1.0
**Last Updated**: March 2026
**Printful Docs**: https://www.printful.com/docs
