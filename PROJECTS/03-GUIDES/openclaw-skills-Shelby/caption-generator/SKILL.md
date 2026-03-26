---
name: caption-generator
description: AI-generated captions with hashtags for all platforms
homepage: https://github.com/ai-caption-system
metadata: {
  "openclaw": {
    "emoji": "📝",
    "requires": {},
    "always": true,
  }
}
---

# Caption Generator

AI-powered captions optimized for each platform. Viral hooks, perfect hashtags!

## Usage

### Generate Caption
```
/caption --topic "AI content creation" --platform "tiktok"
```

### Add Hashtags
```
/caption --topic "recipe video" --platform "instagram" --hashtags 15
```

### Multiple Variations
```
/caption --topic "productivity tips" --platform "linkedin" --variations 5
```

### Optimize for Virality
```
/caption --topic "side hustle ideas" --optimize "viral" --platform "tiktok"
```

## Platform Styles

| Platform | Length | Hashtags | Tone | CTA |
|----------|--------|----------|------|-----|
| **TikTok** | Short | 3-5 | Casual, fun | "Link in bio" |
| **Instagram** | Medium | 10-15 | Visual, aspirational | "Save this" |
| **YouTube** | Long | 5-10 | Informative | "Subscribe" |
| **LinkedIn** | Long | 3-5 | Professional | "Share your thoughts" |
| **Twitter** | Short | 2-3 | Witty, concise | "Retweet" |
| **Facebook** | Medium | 5-10 | Friendly | "Tag a friend" |

## Examples

### Example 1: TikTok Caption
```
You: Caption for AI recipe video
Agent: 📝 TikTok Caption Generated!
       
       "AI made this recipe and it's 🔥
        3 ingredients, 10 minutes, ZERO effort
        Recipe in bio! 👆
        
        #airecipe #easyrecipe #cookinghacks #foodtiktok #quickmeals"
       
       ✅ Optimized for: TikTok
       Length: 127 characters
       Hashtags: 5 (trending in food niche)
```

### Example 2: Instagram Caption
```
You: Caption for productivity post
Agent: 📝 Instagram Caption Generated!
       
       "POV: You finally figured out how to 
        get 10 hours of work done in 4 🎯
        
        It's not about working harder.
        It's about working SMARTER.
        
        Save this for your next productive day! 💾
        
        .
        .
        .
        
        #productivity #productivitytips #timemanagement 
        #worksmarter #goalgetter #successmindset 
        #entrepreneurlife #hustlesmart #efficiency 
        #motivationmonday #growthmindset #focusmode 
        #getthingsdone #procrastinationhelp #worklifebalance"
       
       ✅ Optimized for: Instagram
       Length: 412 characters
       Hashtags: 15 (mix of popular + niche)
```

### Example 3: LinkedIn Caption
```
You: Caption for AI business post
Agent: 📝 LinkedIn Caption Generated!
       
       "The AI content creation market is projected to 
        reach $174 BILLION by 2035.
        
        Here's what most people miss:
        
        It's not about replacing humans.
        It's about AUGMENTING human creativity.
        
        The winners in this space will be those who:
        1. Master AI tools
        2. Maintain authentic voice
        3. Focus on value creation
        
        What's your take on AI in content creation?
        Drop your thoughts below. 👇
        
        #AI #ContentCreation #FutureOfWork #Innovation"
       
       ✅ Optimized for: LinkedIn
       Length: 523 characters
       Hashtags: 4 (professional, industry-specific)
```

### Example 4: Viral Hook Variations
```
You: 5 viral hooks for side hustle content
Agent: 📝 5 Viral Hooks Generated!
       
       1. "I made $10K last month with this ONE tool"
       2. "Nobody's talking about this side hustle..."
       3. "POV: You found the perfect passive income"
       4. "This changed my financial life forever"
       5. "3 side hustles that actually work in 2026"
       
       ✅ All optimized for TikTok/Reels
       Average hook rate: 85%+ retention
```

## Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `--topic` | string | Yes | - | Content topic |
| `--platform` | string | Yes | - | tiktok, instagram, youtube, linkedin, twitter |
| `--hashtags` | number | No | auto | Number of hashtags |
| `--variations` | number | No | 1 | Number of variations |
| `--optimize` | string | No | engagement | viral, engagement, reach |
| `--tone` | string | No | auto | casual, professional, funny, inspirational |
| `--cta` | string | No | auto | Call-to-action type |

## Hashtag Strategy

**TikTok:**
- 3-5 hashtags
- Mix: 1 broad + 2-3 niche + 1 branded
- Examples: #fyp #foodtiktok #easyrecipe

**Instagram:**
- 10-15 hashtags
- Mix: 3 broad + 7 niche + 3-5 micro
- Examples: #entrepreneur #sidehustle #passiveincome2026

**LinkedIn:**
- 3-5 hashtags
- Industry-specific
- Examples: #AI #ContentStrategy #DigitalMarketing

**YouTube:**
- 5-10 hashtags
- Search-optimized
- Examples: #aitutorial #contentcreation #makemoneyonline

## Error Handling

**Missing Topic:**
```
❌ Please provide a topic

Examples:
/caption --topic "AI tools" --platform "tiktok"
/caption --topic "recipe video" --platform "instagram"
```

**Invalid Platform:**
```
❌ Platform "snapchat" not supported

Supported:
- tiktok
- instagram
- youtube
- linkedin
- twitter
- facebook
- pinterest
```

## Use Cases

**Content Creators:**
- Daily caption generation
- Platform optimization
- Hashtag research

**Businesses:**
- Brand voice consistency
- Multi-platform campaigns
- Team collaboration

**Agencies:**
- Client content at scale
- A/B testing captions
- Performance tracking

## Pro Tips

**For Viral Captions:**
```
1. Hook in first 3 words
2. Create curiosity gap
3. Use power words (secret, revealed, finally)
4. Add urgency (now, today, limited)
5. Strong CTA
```

**Hashtag Strategy:**
```
Broad: #entrepreneur (1M+ posts)
Niche: #sidehustleideas (100K-1M posts)
Micro: #passiveincome2026 (10K-100K posts)

Mix for best reach!
```

## Related Skills

- `script-writer` - Video scripts
- `posting-scheduler` - Auto-post
- `niche-finder` - Content ideas
- `council-of-advisors` - Strategy

---

*Version: 1.0.0*
*Last Updated: March 19, 2026*
*AI: Local LLM + hashtag database*
