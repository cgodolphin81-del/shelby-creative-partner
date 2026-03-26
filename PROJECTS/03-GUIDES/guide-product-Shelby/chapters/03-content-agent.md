# Chapter 3: Agent Blueprint #2 - Content Creation Assistant

## Overview

A Content Creation Assistant agent helps generate, edit, and optimize various types of content including blog posts, social media updates, marketing copy, and creative writing.

## Agent Profile

**Name**: ContentBot
**Primary Function**: AI-powered content creation and optimization
**Key Capabilities**: Writing, editing, SEO optimization, multi-format adaptation
**Ideal For**: Marketers, bloggers, social media managers, copywriters

## Architecture

```
Content Brief → Topic Analysis → Outline Generation → Draft Creation → 
SEO Optimization → Editing & Refinement → Format Adaptation → Final Review
```

## Core Components

### 1. Content Strategy
- Analyze target audience and goals
- Research trending topics and keywords
- Determine optimal content format and length
- Plan content calendar and topics

### 2. Research Integration
- Gather relevant information and data
- Find supporting quotes and statistics
- Identify competitor content
- Ensure factual accuracy

### 3. Content Generation
- Create compelling headlines and hooks
- Write engaging body content
- Maintain brand voice and tone
- Generate calls-to-action

### 4. SEO Optimization
- Keyword research and placement
- Meta description creation
- Internal linking suggestions
- Readability optimization

### 5. Multi-Format Adaptation
- Convert long-form to social posts
- Create email newsletters from blogs
- Generate video scripts from articles
- Adapt content for different platforms

### 6. Quality Assurance
- Grammar and spell checking
- Plagiarism detection
- Tone consistency
- Brand guideline compliance

## Setup Instructions

### Step 1: Environment Setup

```bash
mkdir content-agent && cd content-agent
python -m venv venv
source venv/bin/activate

pip install openai python-dotenv
pip install grammarly-check seo-analyzer textstat
pip install newspaper3k requests beautifulsoup4
```

### Step 2: API Configuration

Create `.env`:
```env
OPENAI_API_KEY=your_openai_key
GRAMMARLY_API_KEY=your_grammarly_key  # Optional
SERPER_API_KEY=your_serper_key
```

### Step 3: Core Agent Code

Create `content_agent.py`:

```python
import os
from dotenv import load_dotenv
from openai import OpenAI
import textstat
import re

load_dotenv()

class ContentCreationAgent:
    def __init__(self):
        self.client = OpenAI()
        self.model = "gpt-4"
        
        self.brand_voice = {
            'tone': 'professional yet approachable',
            'style': 'clear and concise',
            'personality': 'helpful and knowledgeable',
            'avoid': ['jargon', 'overly salesy language', 'passive voice']
        }
    
    def generate_outline(self, topic, content_type="blog_post", target_length=1500):
        """Generate a structured outline for content"""
        
        prompt = f"""
        Create a detailed outline for a {content_type} about "{topic}".
        Target length: {target_length} words.
        
        Include:
        1. Compelling title (5 options)
        2. Engaging introduction hook
        3. Main sections with subsections
        4. Key points to cover in each section
        5. Conclusion with call-to-action
        6. Suggested visuals or media
        
        Target audience: General readers interested in {topic}
        Tone: {self.brand_voice['tone']}
        """
        
        response = self.client.chat.completions.create(
            model=self.model,
            messages=[{"role": "user", "content": prompt}],
            temperature=0.7
        )
        
        return response.choices[0].message.content
    
    def write_content(self, outline, additional_research=None):
        """Write full content based on outline"""
        
        prompt = f"""
        Write complete content based on this outline:
        
        {outline}
        
        Additional research/data to incorporate:
        {additional_research if additional_research else "None"}
        
        Guidelines:
        - Write in a {self.brand_voice['tone']} tone
        - Use clear, concise language
        - Include examples and actionable advice
        - Add transition between sections
        - Maintain engaging pace
        - Include relevant statistics where appropriate
        - Optimize for readability (Flesch score > 60)
        """
        
        response = self.client.chat.completions.create(
            model=self.model,
            messages=[{"role": "user", "content": prompt}],
            temperature=0.7,
            max_tokens=4000
        )
        
        return response.choices[0].message.content
    
    def optimize_for_seo(self, content, target_keywords):
        """Optimize content for search engines"""
        
        prompt = f"""
        Optimize the following content for SEO with these target keywords: {target_keywords}
        
        Content:
        {content}
        
        Provide:
        1. SEO-optimized title (under 60 characters)
        2. Meta description (150-160 characters)
        3. Suggested header structure (H1, H2, H3)
        4. Keyword placement recommendations
        5. Internal linking opportunities
        6. Image alt text suggestions
        7. URL slug recommendation
        8. Readability improvements
        
        Keep the content natural - don't keyword stuff.
        """
        
        response = self.client.chat.completions.create(
            model=self.model,
            messages=[{"role": "user", "content": prompt}],
            temperature=0.5
        )
        
        return response.choices[0].message.content
    
    def adapt_for_platform(self, content, platform):
        """Adapt content for different platforms"""
        
        platform_specs = {
            'twitter': {'length': 280, 'style': 'concise, engaging, use hashtags', 'format': 'thread if needed'},
            'linkedin': {'length': 1300, 'style': 'professional, insightful', 'format': 'article or post'},
            'instagram': {'length': 2200, 'style': 'visual, inspirational, emoji-friendly', 'format': 'caption'},
            'facebook': {'length': 400, 'style': 'conversational, shareable', 'format': 'post with engagement question'},
            'email': {'length': 500, 'style': 'personal, value-driven', 'format': 'newsletter'},
            'blog': {'length': 1500, 'style': 'informative, SEO-optimized', 'format': 'article'}
        }
        
        spec = platform_specs.get(platform, platform_specs['blog'])
        
        prompt = f"""
        Adapt the following content for {platform}:
        
        Original Content:
        {content}
        
        Platform Requirements:
        - Max length: {spec['length']} characters
        - Style: {spec['style']}
        - Format: {spec['format']}
        
        Create platform-optimized version that:
        1. Captures the key message
        2. Engages the platform's audience
        3. Includes appropriate hashtags (if applicable)
        4. Has a clear call-to-action
        5. Maintains brand voice
        """
        
        response = self.client.chat.completions.create(
            model=self.model,
            messages=[{"role": "user", "content": prompt}],
            temperature=0.7
        )
        
        return response.choices[0].message.content
    
    def edit_and_improve(self, content, focus_areas=None):
        """Edit and improve existing content"""
        
        prompt = f"""
        Edit and improve the following content:
        
        {content}
        
        Focus areas: {focus_areas if focus_areas else "overall quality, clarity, and engagement"}
        
        Provide:
        1. Edited version with improvements
        2. List of changes made
        3. Readability score (before/after)
        4. Suggestions for further improvement
        5. Grammar and spelling corrections
        6. Tone consistency check
        """
        
        response = self.client.chat.completions.create(
            model=self.model,
            messages=[{"role": "user", "content": prompt}],
            temperature=0.5
        )
        
        return response.choices[0].message.content
    
    def generate_headlines(self, topic, num_options=10):
        """Generate multiple headline options"""
        
        prompt = f"""
        Generate {num_options} compelling headlines for content about "{topic}".
        
        Include variety:
        - How-to headlines
        - List-based headlines
        - Question headlines
        - Controversial/provocative headlines
        - Benefit-driven headlines
        - Curiosity-gap headlines
        
        Make each headline:
        - Under 60 characters (ideal for SEO)
        - Clear and specific
        - Emotionally engaging
        - Promise clear value
        """
        
        response = self.client.chat.completions.create(
            model=self.model,
            messages=[{"role": "user", "content": prompt}],
            temperature=0.8
        )
        
        return response.choices[0].message.content
    
    def analyze_content_quality(self, content):
        """Analyze content quality metrics"""
        
        metrics = {
            'word_count': len(content.split()),
            'flesch_reading_ease': textstat.flesch_reading_ease(content),
            'flesch_kincaid_grade': textstat.flesch_kincaid_grade(content),
            'gunning_fog': textstat.gunning_fog(content),
            'smog_index': textstat.smog_index(content),
            'avg_sentence_length': textstat.avg_sentence_length(content),
            'avg_syllables_per_word': textstat.avg_syllables_per_word(content)
        }
        
        analysis = f"""
        Content Quality Analysis:
        
        Word Count: {metrics['word_count']}
        Reading Ease: {metrics['flesch_reading_ease']}/100 (Higher = easier)
        Grade Level: {metrics['flesch_kincaid_grade']}
        Gunning Fog Index: {metrics['gunning_fog']}
        Average Sentence Length: {metrics['avg_sentence_length']} words
        
        Recommendations:
        """
        
        if metrics['flesch_reading_ease'] < 60:
            analysis += "- Simplify sentence structure for better readability\n"
        if metrics['avg_sentence_length'] > 25:
            analysis += "- Break up long sentences\n"
        if metrics['word_count'] < 1000:
            analysis += "- Consider expanding content for better SEO\n"
        
        return analysis

# Usage Example
if __name__ == "__main__":
    agent = ContentCreationAgent()
    
    # Generate content workflow
    topic = "10 Tips for Effective Time Management"
    outline = agent.generate_outline(topic, content_type="blog_post")
    print("Outline generated!")
    
    content = agent.write_content(outline)
    print("Content written!")
    
    seo_optimized = agent.optimize_for_seo(content, "time management, productivity tips")
    print("SEO optimized!")
    
    twitter_version = agent.adapt_for_platform(content, "twitter")
    print("Adapted for Twitter!")
    
    quality_analysis = agent.analyze_content_quality(content)
    print(quality_analysis)
```

## Prompt Templates

### Blog Post Creation
```
Write a comprehensive blog post with the following specifications:

Topic: {topic}
Target Audience: {audience}
Word Count: {word_count}
Tone: {tone}
Key Points to Cover: {key_points}
Call-to-Action: {cta}

Include:
- Compelling introduction with hook
- Clear section headers
- Examples and case studies
- Data and statistics where relevant
- Actionable takeaways
- Strong conclusion with CTA
- 3-5 FAQ section
```

### Social Media Post
```
Create a {platform} post about {topic}:

Key Message: {message}
Goal: {engagement|traffic|conversion|awareness}
Hashtags: Include {number} relevant hashtags
Character Limit: {limit}
Visual Suggestion: Describe ideal accompanying image

Make it:
- Engaging and scroll-stopping
- On-brand for {brand_voice}
- Include clear call-to-action
- Optimized for {platform} algorithm
```

### Email Newsletter
```
Write an email newsletter with:

Subject Line Options: (provide 5)
Preview Text: Compelling preview
Main Content: {content_topic}
Tone: {tone}
Length: {length}

Structure:
1. Personal greeting
2. Hook/opening story
3. Main value/content
4. Secondary content/tips
5. Call-to-action
6. P.S. with additional value

Unsubscribe footer included.
```

### Video Script
```
Create a video script for {platform} about {topic}:

Video Length: {duration}
Style: {educational|entertaining|promotional}
Target Audience: {audience}

Include:
- Hook (first 5 seconds)
- Introduction
- Main points with timestamps
- Visual cues/directions
- On-screen text suggestions
- Call-to-action
- Outro

Format: Two-column (video/audio) or single column
```

## Content Workflows

### Workflow 1: Blog Post Creation (30 minutes)
```
1. Topic research and keyword analysis (5 min)
2. Outline generation (3 min)
3. First draft writing (10 min)
4. SEO optimization (5 min)
5. Edit and refine (5 min)
6. Create social media snippets (2 min)
```

### Workflow 2: Social Media Content Batch (20 minutes)
```
1. Define content themes for week (3 min)
2. Generate 10 post ideas (2 min)
3. Write full posts for each platform (10 min)
4. Add hashtags and CTAs (3 min)
5. Schedule and queue (2 min)
```

### Workflow 3: Content Repurposing (15 minutes)
```
1. Select source content (blog/video/podcast)
2. Extract key points and quotes (3 min)
3. Create platform-specific versions (8 min)
4. Add platform-optimized elements (4 min)
```

## Integration with OpenClaw

Create skill `content-creation-skill`:

```markdown
# content-creation-skill SKILL.md

## Commands
- `content create <type> <topic>` - Create new content
- `content optimize <text>` - SEO optimization
- `content adapt <platform>` - Adapt for platform
- `content edit <text>` - Edit and improve
- `content headlines <topic>` - Generate headlines
- `content analyze <text>` - Quality analysis

## Configuration
```yaml
default_tone: professional yet approachable
default_length: 1500
auto_seo: true
platforms: [twitter, linkedin, instagram, facebook, blog]
```

## Templates
Store custom templates in `templates/` directory
```

## Advanced Features

### 1. Brand Voice Learning
```python
def learn_brand_voice(self, sample_content_list):
    """Learn brand voice from examples"""
    
    prompt = f"""
    Analyze these content samples to understand our brand voice:
    
    {sample_content_list}
    
    Extract and define:
    1. Tone characteristics
    2. Vocabulary preferences
    3. Sentence structure patterns
    4. Topics and themes
    5. Things we avoid
    6. Personality traits
    
    Create a brand voice guideline document.
    """
    
    return self.client.chat.completions.create(
        model=self.model,
        messages=[{"role": "user", "content": prompt}]
    ).choices[0].message.content
```

### 2. A/B Test Variation Generation
```python
def generate_variations(self, content, num_variations=5, test_element="headline"):
    """Generate A/B test variations"""
    
    prompt = f"""
    Create {num_variations} variations of this {test_element} for A/B testing:
    
    Original: {content}
    
    Each variation should:
    - Test different psychological triggers
    - Vary in length and structure
    - Use different emotional appeals
    - Maintain brand consistency
    
    Label each: Variation A, B, C, etc.
    """
    
    return self.client.chat.completions.create(
        model=self.model,
        messages=[{"role": "user", "content": prompt}]
    ).choices[0].message.content
```

### 3. Content Calendar Generation
```python
def generate_content_calendar(self, month, themes, content_types):
    """Generate monthly content calendar"""
    
    prompt = f"""
    Create a content calendar for {month} with:
    
    Themes: {themes}
    Content Types: {content_types}
    Posting Frequency: Daily
    
    Include for each day:
    - Date
    - Topic/title
    - Content type
    - Target platform
    - Key message
    - CTA
    - Relevant hashtags
    
    Format as a table.
    """
    
    return self.client.chat.completions.create(
        model=self.model,
        messages=[{"role": "user", "content": prompt}]
    ).choices[0].message.content
```

## Performance Metrics

Track these KPIs:
- Content production time
- Engagement rates (likes, shares, comments)
- SEO rankings improvement
- Conversion rates
- Traffic growth
- Time saved vs manual creation

## Common Challenges and Solutions

### Challenge: Generic-Sounding Content
**Solution**: Provide detailed brand guidelines, use specific examples, fine-tune on your content

### Challenge: Factual Accuracy
**Solution**: Implement fact-checking step, require citations, human review for sensitive topics

### Challenge: Maintaining Consistency
**Solution**: Create style guide, use consistent prompts, maintain content library

### Challenge: Platform Algorithm Changes
**Solution**: Regular performance review, A/B testing, stay updated on platform best practices

## Best Practices

1. **Always review AI-generated content** before publishing
2. **Add personal anecdotes** and unique insights
3. **Update regularly** with current information
4. **Test and iterate** based on performance data
5. **Maintain human oversight** for quality control
6. **Disclose AI assistance** when appropriate
7. **Respect copyright** and avoid plagiarism

---

**Next Chapter**: Agent Blueprint #3 - Customer Support Agent
