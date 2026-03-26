---
name: design-generator
description: AI design generator for POD products (DALL-E, Midjourney)
homepage: https://github.com/ai-design-generator
metadata: {
  "openclaw": {
    "emoji": "🎨",
    "requires": {},
    "always": true,
  }
}
---

# Design Generator

AI-powered design generation for print-on-demand products.

## Usage

### Generate Design
```
/design --prompt "neurodivergent pride brain illustration colorful" --style "minimalist"
```

### Generate Series
```
/design --series "hobby humor" --count 10 --type "tshirt"
```

### Create Mockup
```
/design --design "generated-design.png" --product "mug" --output "mug-mockup.jpg"
```

### Style Transfer
```
/design --design "original.png" --style "vintage" --output "vintage-version.png"
```

### Batch Generate
```
/design --batch --niche "eco-minimalism" --count 20 --output ./designs/
```

## Implementation

```python
# DALL-E API call
import requests

def generate_design(prompt, style):
    response = requests.post(
        "https://api.openai.com/v1/images/generations",
        headers={"Authorization": f"Bearer {API_KEY}"},
        json={
            "model": "dall-e-3",
            "prompt": f"{prompt}, {style}, high quality, commercial use",
            "n": 1,
            "size": "1024x1024"
        }
    )
    return response.json()['data'][0]['url']
```

## Examples

### Example 1: Neurodivergent Pride Design
```
You: Create neurodivergent pride T-shirt design
Agent: 🎨 Generating design...
       
       **Prompt:**
       "Colorful brain illustration with 
       neurodiversity symbols, minimalist style,
       positive affirmations, high contrast"
       
       **Style:** Minimalist
       **Colors:** Rainbow + black
       **Background:** Transparent
       
       ✅ Generated: ./designs/nd-pride-001.png
       
       **Variations:**
       - ADHD version
       - Autism version
       - Anxiety version
       - General neurodiversity
       
       Saved to: ./designs/neurodivergent-collection/
```

### Example 2: Eco-Minimalism Series
```
You: Generate eco-minimalism designs
Agent: 🎨 Creating eco-minimalism series...
       
       **10 Designs Generated:**
       
       1. "Less Stuff More Life" (text-based)
       2. Plant + sun illustration
       3. Zero waste icon set
       4. Sustainability quote
       5. Earth-friendly symbol
       6. Minimalist nature scene
       7. Recycle symbol art
       8. Eco warrior illustration
       9. Green living tips
       10. Planet first message
       
       ✅ All saved to: ./designs/eco-minimalism/
       
       **Ready for:**
       - T-shirts
       - Tote bags
       - Mugs
       - Stickers
```

### Example 3: Hobby Humor Designs
```
You: Create gardening humor designs
Agent: 🎨 Generating gardening humor...
       
       **5 Designs:**
       
       1. "Plant Mom" with cactus
       2. "Just One More Row" with garden
       3. "This is My Happy Place" greenhouse
       4. "I Talk To Plants" funny illustration
       5. "Gardening is My Therapy" zen garden
       
       ✅ Saved to: ./designs/gardening-humor/
       
       **Products:**
       - T-shirts (3 variants each)
       - Mugs (3 variants)
       - Tote bags (2 variants)
       - Stickers (5 variants)
       
       Total: 85 product mockups generated!
```

## Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `--prompt` | string | Yes* | - | Design prompt |
| `--style` | string | No | modern | art style |
| `--series` | string | No* | - | Design series name |
| `--count` | number | No | 1 | Number of designs |
| `--type` | string | No | tshirt | Product type |
| `--batch` | flag | No | false | Batch generation |
| `--niche` | string | If batch | - | Niche for batch |
| `--output` | string | No | auto | Output folder |

## AI Models Supported

**DALL-E 3:**
- Best for text integration
- High quality
- Commercial use allowed
- Cost: $0.04/image

**Midjourney:**
- Best for artistic styles
- Unique aesthetics
- Commercial use: Yes (paid)
- Cost: $10-30/month

**Stable Diffusion:**
- Free (self-hosted)
- Unlimited generations
- Requires GPU
- Best for batch

**DALL-E 2:**
- Cheaper option
- Good quality
- Commercial use allowed
- Cost: $0.02/image

## Error Handling

**Invalid Prompt:**
```
❌ Prompt too vague

Be specific:
❌ "nice design"
✅ "colorful brain illustration with rainbow colors, minimalist style"
```

**Copyright Issue:**
```
⚠️ Design may contain copyrighted elements

Avoid:
- Disney characters
- Trademarked logos
- Celebrity likenesses
- Protected phrases

Use original concepts only!
```

## Use Cases

**POD Sellers:**
- Generate unique designs
- Test multiple concepts
- Scale design production
- Create themed collections

**Etsy Sellers:**
- Product mockups
- Listing images
- Brand assets
- Marketing materials

**Agencies:**
- Client design work
- Rapid prototyping
- A/B testing
- Campaign visuals

## Pro Tips

**For Best Results:**
```
1. Be specific in prompts:
   "Minimalist line art of a cat, black and white,
    vector style, clean lines"

2. Use style keywords:
   - "vintage"
   - "modern"
   - "retro"
   - "minimalist"
   - "colorful"
   - "monochrome"

3. Test variations:
   - Different color schemes
   - Multiple compositions
   - Various text placements

4. Commercial use:
   - Use DALL-E 3 (included in price)
   - Midjourney (paid plan required)
   - Stable Diffusion (self-hosted)
```

## Related Skills

- `niche-finder` - Find profitable niches
- `mockup-generator` - Create product mockups
- `listing-writer` - Write Etsy listings
- `design-variations` - Create design variations

---

*Version: 1.0.0*
*Last Updated: March 18, 2026*
*AI: DALL-E, Midjourney, Stable Diffusion*
