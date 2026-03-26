# Content Idea Generator - Notion Template

## 🎯 Notion Template Setup

**Create this structure in Notion:**

---

## Database Structure

### Database 1: "Content Ideas"

**Properties:**

```
1. Name (Title) - "Content Topic/Idea"
2. Status (Select) - "Ideas, Researching, Writing, Editing, Scheduled, Published"
3. Content Type (Select) - "Blog Post, Video, Podcast, Social Media, Newsletter, Case Study, Whitepaper, Infographic"
4. Target Keyword (Text) - "Primary SEO keyword"
5. Search Volume (Number) - "Monthly searches"
6. Difficulty (Select) - "Low, Medium, High"
7. Target Audience (Multi-select) - "Small Business, Enterprise, Marketers, Developers, Executives"
8. Content Pillar (Select) - "GEO SEO, AI Marketing, Analytics, Strategy, Tools, Case Studies"
9. Estimated Word Count (Number) - "1000, 1500, 2000, 3000+"
10. Priority (Select) - "🔥 High, ⚡ Medium, 📌 Low"
11. Due Date (Date) - "Target publish date"
12. Assigned To (Person) - "Team member"
13. AI Prompt (Text) - "Custom prompt for this topic"
14. Notes (Text) - "Additional context"
15. URL (URL) - "Published content link"
16. Performance Score (Number) - "Post-publish metrics"
```

### Database 2: "AI Prompt Library"

**Properties:**

```
1. Prompt Name (Title)
2. Use Case (Select) - "Blog Intro, Outline, Full Article, Social Caption, Email Subject, Video Script"
3. Prompt Template (Text) - "The actual prompt"
4. Variables (Text) - "What to customize: [TOPIC], [KEYWORD], [AUDIENCE]"
5. Best For (Multi-select) - "GEO SEO, General SEO, Social Media, Email"
6. Rating (Select) - "⭐⭐⭐⭐⭐, ⭐⭐⭐⭐, ⭐⭐⭐"
7. Last Used (Date)
8. Usage Count (Number)
```

---

## 📋 Pre-Built AI Prompts (Copy into Prompt Library)

### Prompt 1: Blog Post Generator
```
Prompt Name: Complete Blog Post Generator
Use Case: Full Article
Prompt Template:
Write a comprehensive blog post about [TOPIC] optimized for GEO SEO.

Target keyword: [KEYWORD]
Audience: [AUDIENCE]
Word count: [WORD_COUNT]

Structure:
1. Engaging hook opening (address pain point)
2. What is [TOPIC] explanation
3. Why it matters for [AUDIENCE]
4. 5-7 actionable tips/steps
5. Common mistakes to avoid
6. Tools and resources
7. Conclusion with CTA

Tone: Professional but conversational
Include: Statistics, examples, subheadings every 200-300 words
SEO: Natural keyword integration, related terms, question-based headings

Variables: [TOPIC], [KEYWORD], [AUDIENCE], [WORD_COUNT]
Best For: GEO SEO, General SEO
Rating: ⭐⭐⭐⭐⭐
```

### Prompt 2: Content Outline Creator
```
Prompt Name: SEO Content Outline
Use Case: Outline
Prompt Template:
Create a detailed content outline for [TOPIC].

Target keyword: [KEYWORD]
Search intent: [Informational/Commercial/Transactional]
Competitor top 3 angles: [COMPETITOR_ANGLES]

Include:
- H1 title (5 variations to choose from)
- H2 main sections (5-7 sections)
- H3 subsections under each H2
- Key points to cover in each section
- Suggested word count per section
- Internal linking opportunities
- FAQ section (5 questions)

Variables: [TOPIC], [KEYWORD], [COMPETITOR_ANGLES]
Best For: GEO SEO, General SEO
Rating: ⭐⭐⭐⭐⭐
```

### Prompt 3: Social Media Caption Generator
```
Prompt Name: Multi-Platform Social Captions
Use Case: Social Caption
Prompt Template:
Create social media captions for promoting content about [TOPIC].

Content URL: [URL]
Key message: [KEY_MESSAGE]

For each platform:
- LinkedIn (professional, 150-300 words, 3-5 hashtags)
- Twitter/X (280 chars, engaging hook, 2-3 hashtags)
- Instagram (casual, emoji-friendly, 100-150 words, 8-12 hashtags)
- Facebook (conversational, question to engage, 100-200 words)

Include: Hook, value proposition, CTA, relevant hashtags

Variables: [TOPIC], [URL], [KEY_MESSAGE]
Best For: Social Media
Rating: ⭐⭐⭐⭐
```

### Prompt 4: Email Newsletter Writer
```
Prompt Name: Newsletter Content Creator
Use Case: Email
Prompt Template:
Write an engaging newsletter email about [TOPIC].

Audience: [AUDIENCE]
Goal: [Educate/Promote/Engage]
CTA: [DESIRED_ACTION]

Structure:
- Subject line (5 options, under 50 chars)
- Preview text (2 options)
- Opening (personal, relatable)
- Main content (200-300 words, value-packed)
- CTA button text (3 options)
- P.S. (urgency or bonus)

Tone: Friendly, helpful, not salesy

Variables: [TOPIC], [AUDIENCE], [DESIRED_ACTION]
Best For: Email, GEO SEO
Rating: ⭐⭐⭐⭐⭐
```

### Prompt 5: Video Script Writer
```
Prompt Name: YouTube Video Script
Use Case: Video Script
Prompt Template:
Write a YouTube video script about [TOPIC].

Target keyword: [KEYWORD]
Video length: [LENGTH] minutes
Audience: [AUDIENCE]

Structure:
- Hook (0-15 seconds): Grab attention, state problem
- Intro (15-30 seconds): What they'll learn
- Main content: 3-5 key points with examples
- CTA (mid-roll): Subscribe/engage
- Conclusion: Summary + final CTA
- End screen: Related video suggestion

Include: Timestamp markers, visual cues, B-roll suggestions, on-screen text

Variables: [TOPIC], [KEYWORD], [LENGTH], [AUDIENCE]
Best For: Video, GEO SEO
Rating: ⭐⭐⭐⭐
```

### Prompt 6: Case Study Framework
```
Prompt Name: Client Case Study
Use Case: Case Study
Prompt Template:
Write a compelling case study about [CLIENT_NAME] who achieved [RESULT].

Industry: [INDUSTRY]
Challenge: [CHALLENGE]
Solution: [SOLUTION_USED]
Results: [METRICS]

Structure:
- Executive summary (2-3 sentences)
- Client background
- The challenge (pain points)
- Why they chose us
- Our approach/solution
- Implementation process
- Results (quantified with metrics)
- Client quote/testimonial
- Key takeaways for readers
- CTA: "Want similar results?"

Tone: Professional, results-focused, story-driven

Variables: [CLIENT_NAME], [RESULT], [INDUSTRY], [CHALLENGE], [SOLUTION_USED], [METRICS]
Best For: GEO SEO, Case Studies
Rating: ⭐⭐⭐⭐⭐
```

### Prompt 7: Content Repurposer
```
Prompt Name: Multi-Format Content Repurposer
Use Case: Full Article
Prompt Template:
Take this existing content about [TOPIC] and repurpose it into multiple formats.

Original content: [PASTE_OR_URL]

Create:
1. Twitter thread (8-12 tweets)
2. LinkedIn post (professional angle)
3. Instagram carousel outline (10 slides)
4. Email newsletter version
5. Blog post expansion (if original was short)
6. YouTube video script outline
7. Podcast episode outline
8. Infographic data points

Maintain consistent messaging across all formats.

Variables: [TOPIC], [PASTE_OR_URL]
Best For: Social Media, GEO SEO
Rating: ⭐⭐⭐⭐⭐
```

### Prompt 8: Keyword-to-Topic Expander
```
Prompt Name: Keyword Content Ideation
Use Case: Outline
Prompt Template:
Generate 20 content ideas based on this keyword: [KEYWORD]

For each idea provide:
1. Title (SEO-optimized)
2. Search intent (Informational/Commercial/Transactional)
3. Target audience
4. Content type (Blog/Video/Infographic/etc.)
5. Estimated difficulty (Low/Medium/High)
6. Related long-tail keywords (3-5)
7. Unique angle/hook

Focus on GEO SEO and AI marketing topics.

Variables: [KEYWORD]
Best For: GEO SEO, General SEO
Rating: ⭐⭐⭐⭐
```

---

## 🎨 Notion Page Layout

### Main Dashboard View

```
# 🚀 Content Idea Generator

## Quick Actions
- [Button: Generate New Ideas] → Links to AI prompt template
- [Button: View Content Calendar] → Calendar view of Ideas database
- [Button: Prompt Library] → Links to AI Prompt database

## 📊 Content Pipeline
[Linked view of Content Ideas database]
Filter: Status ≠ Published
Sort: Priority (High first), then Due Date
View: Board by Status

## 🔥 High Priority Ideas
[Linked view]
Filter: Priority = 🔥 High AND Status = Ideas
Sort: Created (newest first)
View: List

## 📅 This Week's Content
[Linked view]
Filter: Due Date is within next 7 days
View: Calendar

## 💡 AI Prompt Quick Access
[Linked view of AI Prompt Library]
Sort: Rating (5-star first)
View: Gallery with prompt preview
```

---

## 🔗 Embed Codes

### For Website Integration

```html
<!-- Notion Content Calendar Embed -->
<div style="max-width: 1200px; margin: 0 auto;">
  <iframe 
    src="https://www.notion.so/YOUR_PAGE_ID?embed=true" 
    style="width: 100%; height: 800px; border: 1px solid #ddd; border-radius: 8px;"
    frameborder="0">
  </iframe>
</div>
```

### For Client Portal

```html
<!-- Content Ideas Public View -->
<div class="content-ideas-widget">
  <h3>📝 Latest Content Ideas</h3>
  <div id="ideas-container"></div>
  
  <script>
    // Fetch from Notion API (requires integration)
    const NOTION_API_KEY = 'your_integration_token';
    const DATABASE_ID = 'your_database_id';
    
    async function fetchContentIdeas() {
      const response = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${NOTION_API_KEY}`,
          'Notion-Version': '2022-06-28',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          filter: {
            property: 'Status',
            select: { equals: 'Published' }
          },
          sorts: [{ property: 'Due Date', direction: 'descending' }],
          page_size: 10
        })
      });
      
      const data = await response.json();
      displayIdeas(data.results);
    }
    
    function displayIdeas(ideas) {
      const container = document.getElementById('ideas-container');
      container.innerHTML = ideas.map(idea => `
        <div class="idea-card" style="padding: 15px; border: 1px solid #eee; margin: 10px 0; border-radius: 5px;">
          <h4>${idea.properties.Name.title[0]?.plain_text || 'Untitled'}</h4>
          <p>Type: ${idea.properties['Content Type']?.select?.name}</p>
          <p>Keyword: ${idea.properties['Target Keyword']?.rich_text[0]?.plain_text}</p>
        </div>
      `).join('');
    }
    
    fetchContentIdeas();
  </script>
</div>
```

---

## 📝 Customization Guide

### For Different Niches:

**GEO SEO Agency:**
- Content Pillars: GEO SEO, Local SEO, Google Business Profile, AI Search, Citations
- Audience: Small Business, Local Business, Multi-location
- Content Types: How-to guides, Case studies, Tool reviews

**E-commerce:**
- Content Pillars: Product Guides, Buying Guides, Industry Trends, Customer Stories
- Content Types: Product comparisons, Seasonal guides, Video demos

**SaaS:**
- Content Pillars: Feature Tutorials, Use Cases, Integration Guides, Industry Insights
- Content Types: Technical docs, Webinars, Comparison pages

### Team Workflow:

**Solo Creator:**
- Status: Ideas → Writing → Published
- Simple pipeline, quick turnaround

**Small Team (2-5):**
- Status: Ideas → Researching → Writing → Editing → Scheduled → Published
- Use "Assigned To" property
- Weekly content planning meetings

**Agency (5+):**
- Add "Client" property
- Add "Approval Status" property
- Content calendar reviewed monthly
- Client-specific views

---

## 🎯 Usage Instructions

1. **Duplicate Template:**
   - Open Notion
   - Click "Templates" → "Create new template"
   - Copy structure above
   - Or use this link: [Create your own]

2. **Set Up Databases:**
   - Create "Content Ideas" database with all properties
   - Create "AI Prompt Library" database
   - Add the 8 pre-built prompts

3. **Create Dashboard:**
   - Build main page with linked views
   - Set up filters and sorts
   - Add buttons for quick actions

4. **Generate Ideas:**
   - Click "Generate New Ideas"
   - Choose relevant AI prompt
   - Fill in variables
   - Copy output to Content Ideas database

5. **Plan Content:**
   - Review Ideas board weekly
   - Move items through pipeline
   - Assign due dates
   - Track in calendar view

---

## 💡 Pro Tips

1. **Idea Capture:**
   - Use Notion Web Clipper to save inspiration
   - Create "Inbox" status for unprocessed ideas
   - Review inbox weekly

2. **AI Prompt Optimization:**
   - Rate each prompt after use (1-5 stars)
   - Update top performers with refinements
   - Archive underperforming prompts

3. **Content Recycling:**
   - Filter by "Published" + high Performance Score
   - Use Repurposer prompt to create new formats
   - Update and republish evergreen content quarterly

4. **SEO Integration:**
   - Add Ahrefs/SEMrush data to properties
   - Track keyword rankings post-publish
   - Update Performance Score monthly

5. **Team Collaboration:**
   - @mention team members in comments
   - Use status updates for progress
   - Set up email notifications for assignments

---

## 🚀 Quick Start Template

**Duplicate this template:**
1. Go to notion.so/templates
2. Search "Content Calendar"
3. Or build from scratch using structure above

**Pre-filled with:**
- 50+ content idea examples
- 8 AI prompts ready to use
- Sample content pipeline
- Calendar view configured

---

*Tool Version: 1.0 | Last Updated: 2026-03-21 | Platform: Notion (Free/Plus)*
