# Chapter 6: Agent Blueprint #5 - Social Media Manager Agent

## Overview

A Social Media Manager Agent automates content planning, creation, scheduling, engagement monitoring, and performance analytics across multiple social media platforms.

## Agent Profile

**Name**: SocialBot
**Primary Function**: Automated social media management and optimization
**Key Capabilities**: Content creation, scheduling, engagement, analytics, trend monitoring
**Ideal For**: Small businesses, marketers, content creators, agencies, startups

## Architecture

```
Content Strategy → Content Creation → Multi-Platform Adaptation → 
Scheduling → Publishing → Engagement Monitoring → Performance Analytics → 
Optimization Recommendations
```

## Core Components

### 1. Content Strategy & Planning
- Content calendar creation
- Theme and campaign planning
- Audience analysis
- Competitor monitoring
- Trend identification
- Hashtag research

### 2. Content Creation
- Post copywriting
- Image/video suggestions
- Hashtag generation
- Platform-specific formatting
- A/B test variation creation
- Content repurposing

### 3. Multi-Platform Management
- Facebook
- Instagram
- Twitter/X
- LinkedIn
- TikTok
- Pinterest
- YouTube

### 4. Scheduling & Publishing
- Optimal timing determination
- Queue management
- Cross-platform posting
- Auto-publishing
- Content recycling

### 5. Engagement Monitoring
- Comment tracking
- Message responses
- Mention monitoring
- Sentiment analysis
- Influencer identification
- Community management

### 6. Analytics & Reporting
- Performance metrics tracking
- Engagement rate analysis
- Follower growth tracking
- Content performance comparison
- ROI measurement
- Competitive analysis

## Setup Instructions

### Step 1: Environment Setup

```bash
mkdir social-media-agent && cd social-media-agent
python -m venv venv
source venv/bin/activate

# Core libraries
pip install openai python-dotenv pandas numpy
pip install requests beautifulsoup4

# Social media APIs
pip install tweepy facebook-sdk google-api-python-client
pip install linkedin-api  # Unofficial but functional
pip install instagrapi  # Use responsibly

# Scheduling
pip install schedule apscheduler

# Analytics
pip install matplotlib seaborn plotly

# Image processing (for content creation)
pip install pillow
```

### Step 2: API Configuration

Create `.env`:
```env
OPENAI_API_KEY=your_openai_key

# Twitter/X
TWITTER_API_KEY=your_twitter_key
TWITTER_API_SECRET=your_twitter_secret
TWITTER_ACCESS_TOKEN=your_twitter_token
TWITTER_ACCESS_SECRET=your_twitter_secret

# Facebook/Instagram
FACEBOOK_APP_ID=your_app_id
FACEBOOK_APP_SECRET=your_app_secret
FACEBOOK_ACCESS_TOKEN=your_fb_token
INSTAGRAM_ACCOUNT_ID=your_ig_account_id

# LinkedIn
LINKEDIN_CLIENT_ID=your_linkedin_client_id
LINKEDIN_CLIENT_SECRET=your_linkedin_secret
LINKEDIN_ACCESS_TOKEN=your_linkedin_token

# TikTok (Business API)
TIKTOK_CLIENT_KEY=your_tiktok_key
TIKTOK_CLIENT_SECRET=your_tiktok_secret

# Buffer/Hootsuite (alternative - manages multiple platforms)
BUFFER_API_KEY=your_buffer_key
```

### Step 3: Core Agent Code

Create `social_media_agent.py`:

```python
import os
import json
from dotenv import load_dotenv
from openai import OpenAI
from datetime import datetime, timedelta
import pandas as pd
import schedule
import time

load_dotenv()

class SocialMediaManagerAgent:
    def __init__(self):
        self.client = OpenAI()
        self.model = "gpt-4"
        
        # Platform configurations
        self.platforms = {
            'twitter': {
                'max_length': 280,
                'hashtag_limit': 3,
                'best_times': ['9:00', '12:00', '17:00'],
                'post_frequency': '3-5 per day'
            },
            'linkedin': {
                'max_length': 1300,
                'hashtag_limit': 5,
                'best_times': ['8:00', '12:00', '17:00'],
                'post_frequency': '1 per day'
            },
            'instagram': {
                'max_length': 2200,
                'hashtag_limit': 30,
                'best_times': ['11:00', '14:00', '19:00'],
                'post_frequency': '1-2 per day'
            },
            'facebook': {
                'max_length': 63206,
                'hashtag_limit': 5,
                'best_times': ['13:00', '15:00', '17:00'],
                'post_frequency': '1-2 per day'
            }
        }
        
        self.content_queue = []
        self.brand_voice = self.load_brand_voice()
    
    def load_brand_voice(self):
        """Load brand voice guidelines"""
        return {
            'tone': 'friendly and professional',
            'personality': 'helpful, knowledgeable, approachable',
            'values': ['transparency', 'innovation', 'customer-first'],
            'avoid': ['jargon', 'overly salesy', 'controversial topics'],
            'emoji_style': 'moderate, relevant',
            'cta_style': 'clear but not pushy'
        }
    
    def generate_content_calendar(self, month, themes, campaigns=None):
        """Generate monthly content calendar"""
        
        prompt = f"""
        Create a content calendar for {month} with these themes: {themes}
        
        Campaigns: {campaigns if campaigns else 'None'}
        
        Brand Voice: {self.brand_voice}
        
        Create a day-by-day calendar including:
        - Date
        - Platform(s)
        - Content theme/topic
        - Content type (educational, promotional, engaging, etc.)
        - Key message
        - Suggested hashtags
        - CTA
        
        Balance content types:
        - 40% Educational/Value
        - 30% Engaging/Community
        - 20% Promotional
        - 10% Behind-the-scenes
        
        Format as a table.
        """
        
        response = self.client.chat.completions.create(
            model=self.model,
            messages=[{"role": "user", "content": prompt}],
            temperature=0.7
        )
        
        calendar = response.choices[0].message.content
        return calendar
    
    def create_post(self, topic, platform, content_type='standard'):
        """Create platform-optimized post"""
        
        platform_config = self.platforms.get(platform, self.platforms['twitter'])
        
        prompt = f"""
        Create a {platform} post about: {topic}
        
        Platform Specifications:
        - Max length: {platform_config['max_length']} characters
        - Hashtag limit: {platform_config['hashtag_limit']}
        - Best practices: {platform_config['post_frequency']}
        
        Content Type: {content_type}
        Brand Voice: {self.brand_voice['tone']}, {self.brand_voice['personality']}
        
        Include:
        1. Engaging hook/opening
        2. Main message/value
        3. Relevant hashtags (optimal number for platform)
        4. Clear call-to-action
        5. Emoji usage (appropriate for platform)
        
        Platform-Specific Optimization:
        - Twitter: Concise, punchy, use threads if needed
        - LinkedIn: Professional, insightful, longer-form OK
        - Instagram: Visual-first caption, emoji-friendly
        - Facebook: Conversational, shareable, engaging question
        
        Generate 3 variations for A/B testing.
        """
        
        response = self.client.chat.completions.create(
            model=self.model,
            messages=[{"role": "user", "content": prompt}],
            temperature=0.8
        )
        
        variations = response.choices[0].message.content
        return variations
    
    def generate_hashtags(self, topic, platform, num_hashtags=10):
        """Generate relevant hashtags"""
        
        prompt = f"""
        Generate {num_hashtags} relevant hashtags for a {platform} post about: {topic}
        
        Include mix of:
        - 3-5 high-volume popular hashtags (100K+ posts)
        - 5-7 medium-volume niche hashtags (10K-100K posts)
        - 2-3 branded/campaign-specific hashtags
        
        Platform: {platform}
        Industry: [Auto-detect from topic]
        
        Format as comma-separated list.
        """
        
        response = self.client.chat.completions.create(
            model=self.model,
            messages=[{"role": "user", "content": prompt}],
            temperature=0.7
        )
        
        hashtags = response.choices[0].message.content
        return hashtags
    
    def schedule_post(self, post_content, platform, scheduled_time):
        """Add post to scheduling queue"""
        
        post = {
            'id': f"POST-{datetime.now().strftime('%Y%m%d%H%M%S')}",
            'platform': platform,
            'content': post_content,
            'scheduled_time': scheduled_time,
            'status': 'scheduled',
            'created_at': datetime.now().isoformat()
        }
        
        self.content_queue.append(post)
        print(f"Scheduled {platform} post for {scheduled_time}")
        
        return post
    
    def get_optimal_posting_time(self, platform, timezone='UTC'):
        """Determine optimal posting time"""
        
        # In production, use analytics data
        best_times = self.platforms[platform]['best_times']
        
        # Select best time based on day of week
        day_of_week = datetime.now().weekday()
        
        # Simple logic - can be enhanced with historical data
        if platform == 'linkedin':
            # B2B performs better on weekdays
            if day_of_week < 5:  # Monday-Friday
                optimal_time = best_times[1]  # Noon
            else:
                optimal_time = best_times[0]  # Morning
        elif platform == 'instagram':
            # Evening engagement
            optimal_time = best_times[2]  # 7 PM
        else:
            optimal_time = best_times[1]  # Default to noon
        
        return f"{optimal_time} {timezone}"
    
    def engage_with_audience(self, platform, engagement_type='comments'):
        """Monitor and respond to engagement"""
        
        # This would integrate with platform APIs
        # Example response generation:
        
        prompt = f"""
        Generate appropriate responses to {engagement_type} on {platform}.
        
        Brand Voice: {self.brand_voice}
        
        Scenarios to handle:
        1. Positive comment/compliment
        2. Question about product/service
        3. Constructive criticism
        4. Spam/troll (generate polite dismissal)
        
        For each scenario, provide:
        - Response text
        - Tone notes
        - When to escalate to human
        
        Keep responses authentic and human-like.
        """
        
        response = self.client.chat.completions.create(
            model=self.model,
            messages=[{"role": "user", "content": prompt}],
            temperature=0.7
        )
        
        return response.choices[0].message.content
    
    def analyze_performance(self, platform, date_range_days=30):
        """Analyze social media performance"""
        
        # In production, pull from platform APIs
        # This is a template for analysis
        
        prompt = f"""
        Analyze {platform} performance for the last {date_range_days} days.
        
        Metrics to analyze:
        - Post reach and impressions
        - Engagement rate (likes, comments, shares)
        - Follower growth
        - Click-through rates
        - Best performing content types
        - Optimal posting times
        - Hashtag performance
        
        Provide:
        1. Executive Summary
        2. Key Metrics (with % change from previous period)
        3. Top Performing Posts
        4. Areas for Improvement
        5. Recommendations for Next Period
        6. Content Strategy Adjustments
        
        Format with clear sections and actionable insights.
        """
        
        response = self.client.chat.completions.create(
            model=self.model,
            messages=[{"role": "user", "content": prompt}],
            temperature=0.5
        )
        
        return response.choices[0].message.content
    
    def monitor_trends(self, industry, platforms=['twitter', 'linkedin']):
        """Monitor trending topics and hashtags"""
        
        prompt = f"""
        Identify current trending topics and hashtags in the {industry} industry.
        
        Platforms: {platforms}
        
        For each trend, provide:
        - Trend/topic name
        - Relevance to our brand
        - Engagement potential (high/medium/low)
        - Suggested angle for our content
        - Risk assessment (any controversies?)
        - Recommended action (participate/observe/avoid)
        
        Prioritize trends that align with our brand values: {self.brand_voice['values']}
        """
        
        response = self.client.chat.completions.create(
            model=self.model,
            messages=[{"role": "user", "content": prompt}],
            temperature=0.7
        )
        
        return response.choices[0].message.content
    
    def repurpose_content(self, source_content, source_platform, target_platforms):
        """Repurpose content for different platforms"""
        
        repurposed = {}
        
        for target in target_platforms:
            prompt = f"""
            Repurpose this {source_platform} content for {target}:
            
            Original Content:
            {source_content}
            
            {target} Specifications:
            - Max length: {self.platforms[target]['max_length']} characters
            - Hashtag limit: {self.platforms[target]['hashtag_limit']}
            - Style: {self.platforms[target]['post_frequency']}
            
            Adapt the content to:
            - Match platform culture and expectations
            - Optimize length and format
            - Adjust tone if needed
            - Include platform-specific features (threads, carousels, etc.)
            - Add relevant hashtags for {target}
            """
            
            response = self.client.chat.completions.create(
                model=self.model,
                messages=[{"role": "user", "content": prompt}],
                temperature=0.7
            )
            
            repurposed[target] = response.choices[0].message.content
        
        return repurposed
    
    def create_campaign(self, campaign_name, objectives, duration_days, platforms):
        """Create comprehensive social media campaign"""
        
        prompt = f"""
        Create a social media campaign:
        
        Campaign Name: {campaign_name}
        Objectives: {objectives}
        Duration: {duration_days} days
        Platforms: {platforms}
        
        Deliverables:
        1. Campaign Overview and Theme
        2. Target Audience Definition
        3. Key Messages and Value Propositions
        4. Content Pillars (3-5 themes)
        5. Platform-Specific Strategy
        6. Content Calendar (week-by-week)
        7. Hashtag Strategy
        8. Influencer Partnership Opportunities
        9. Paid Promotion Recommendations
        10. Success Metrics and KPIs
        11. Risk Mitigation Plan
        
        Make it actionable and detailed.
        """
        
        response = self.client.chat.completions.create(
            model=self.model,
            messages=[{"role": "user", "content": prompt}],
            temperature=0.7
        )
        
        return response.choices[0].message.content
    
    def generate_report(self, report_type='weekly', platforms=None):
        """Generate comprehensive social media report"""
        
        if platforms is None:
            platforms = list(self.platforms.keys())
        
        prompt = f"""
        Generate a {report_type} social media report covering: {platforms}
        
        Include:
        1. Executive Summary
        2. Overall Performance Metrics
        3. Platform-by-Platform Breakdown
           - Followers/Subscribers
           - Engagement Rate
           - Reach/Impressions
           - Top Posts
        4. Content Performance Analysis
           - Best performing content types
           - Worst performing content types
           - Optimal posting times
        5. Audience Insights
           - Demographics
           - Growth trends
           - Engagement patterns
        6. Competitive Analysis (if data available)
        7. Recommendations for Next Period
        8. Action Items
        
        Use clear formatting with sections and bullet points.
        Include specific numbers and percentages where possible.
        """
        
        response = self.client.chat.completions.create(
            model=self.model,
            messages=[{"role": "user", "content": prompt}],
            temperature=0.5
        )
        
        return response.choices[0].message.content

# Usage Example
if __name__ == "__main__":
    agent = SocialMediaManagerAgent()
    
    # Generate content calendar
    calendar = agent.generate_content_calendar(
        month="April 2024",
        themes=["Product Launch", "Customer Success Stories", "Industry Insights"]
    )
    print("Content Calendar Generated!")
    
    # Create posts
    post_variations = agent.create_post(
        topic="New product feature announcement",
        platform="linkedin",
        content_type="promotional"
    )
    print(f"Post variations created!")
    
    # Generate hashtags
    hashtags = agent.generate_hashtags(
        topic="artificial intelligence tools",
        platform="instagram",
        num_hashtags=15
    )
    
    # Schedule post
    scheduled = agent.schedule_post(
        post_content=post_variations,
        platform="linkedin",
        scheduled_time="2024-03-25 12:00:00"
    )
    
    # Analyze performance
    performance = agent.analyze_performance(platform="twitter", date_range_days=30)
    print(performance)
```

## Prompt Templates

### Post Creation Template
```
Create a {platform} post with these specifications:

Topic: {topic}
Goal: {awareness|engagement|traffic|conversion}
Tone: {tone}
Key Message: {message}
CTA: {call_to_action}
Hashtags: Include {number} relevant hashtags
Length: {short|medium|long}

Platform Optimization:
- Hook in first line
- Use emojis appropriately
- Include visual description
- Tag relevant accounts
- Add link if applicable

Generate {number} variations for A/B testing.
```

### Engagement Response Template
```
Respond to this {platform} {engagement_type}:

Original Content: {content}
Comment/Message: {message}
Sentiment: {positive|neutral|negative}
Customer Status: {new|existing|vip}

Response Guidelines:
- Match platform tone
- Address their specific point
- Add value or solve problem
- Include CTA if appropriate
- Keep it concise
- Sign off naturally

Escalate if: {escalation_criteria}
```

### Campaign Brief Template
```
Social Media Campaign Brief:

Campaign Name: {name}
Duration: {start_date} to {end_date}
Objectives: {objectives}
Target Audience: {audience}
Budget: {budget}
Platforms: {platforms}
Key Messages: {messages}
Brand Guidelines: {guidelines}
Success Metrics: {kpis}

Deliverables Needed:
- Content calendar
- Post copy for each platform
- Visual concepts
- Hashtag strategy
- Influencer list
- Paid promotion plan
- Measurement framework
```

## Platform-Specific Best Practices

### Twitter/X
- Keep it concise (under 280 chars)
- Use 2-3 hashtags max
- Engage in trending conversations
- Thread for longer content
- Post 3-5 times daily
- Use images/videos for higher engagement

### LinkedIn
- Professional but personable tone
- Long-form content performs well
- Use 3-5 relevant hashtags
- Post during business hours
- Engage with comments promptly
- Share industry insights and thought leadership

### Instagram
- Visual-first platform
- Use all 30 hashtags if relevant
- Stories for behind-the-scenes
- Reels for maximum reach
- Post 1-2 times daily
- Engage with community

### Facebook
- Conversational tone
- Shareable content
- Use 1-5 hashtags
- Video content performs well
- Post 1-2 times daily
- Build community through groups

### TikTok
- Authentic, unpolished content
- Trending sounds and challenges
- Hook in first 3 seconds
- Post 1-3 times daily
- Engage with comments
- Use trending hashtags

## Integration with Automation Tools

### Buffer Integration
```python
import requests

class BufferIntegration:
    def __init__(self, api_key):
        self.api_key = api_key
        self.base_url = "https://api.bufferapp.com/1"
    
    def create_update(self, profile_id, text, scheduled_at=None):
        url = f"{self.base_url}/updates/create.json"
        data = {
            'token': self.api_key,
            'profile_ids[]': profile_id,
            'text': text,
            'scheduled_at': scheduled_at
        }
        
        response = requests.post(url, data=data)
        return response.json()
    
    def get_profile(self, profile_id):
        url = f"{self.base_url}/profiles/{profile_id}.json"
        params = {'token': self.api_key}
        
        response = requests.get(url, params=params)
        return response.json()
```

### Hootsuite Integration
```python
class HootsuiteIntegration:
    def __init__(self, access_token):
        self.access_token = access_token
        self.base_url = "https://platform.hootsuite.com/v1"
        self.headers = {'Authorization': f'Bearer {access_token}'}
    
    def create_message(self, message_data):
        url = f"{self.base_url}/messages"
        
        response = requests.post(
            url, 
            json=message_data, 
            headers=self.headers
        )
        
        return response.json()
```

## Analytics and Reporting

### Key Metrics to Track

#### Engagement Metrics
- Likes, comments, shares
- Engagement rate (engagement / reach)
- Click-through rate
- Save rate (Instagram)
- Retweet rate (Twitter)

#### Growth Metrics
- Follower/subscriber growth
- Reach and impressions
- Profile visits
- Website clicks

#### Content Metrics
- Top performing posts
- Best posting times
- Hashtag performance
- Content type performance

#### Conversion Metrics
- Lead generation
- Sales attributed to social
- Email signups
- Demo requests

### Report Template
```
# Social Media Performance Report
Period: {date_range}

## Executive Summary
- Overall performance highlights
- Key wins
- Areas for improvement

## Platform Performance
### Twitter
- Followers: {count} (+{growth}%)
- Engagement Rate: {rate}%
- Top Tweet: {content}

### LinkedIn
- Followers: {count} (+{growth}%)
- Engagement Rate: {rate}%
- Top Post: {content}

[Continue for each platform]

## Content Analysis
- Best performing content type: {type}
- Worst performing: {type}
- Optimal posting times: {times}
- Top hashtags: {hashtags}

## Recommendations
1. {recommendation}
2. {recommendation}
3. {recommendation}

## Next Period Goals
- {goal_1}
- {goal_2}
- {goal_3}
```

## Common Challenges and Solutions

### Challenge: Maintaining Consistency
**Solution**: Use content calendar, batch create content, automate scheduling

### Challenge: Platform Algorithm Changes
**Solution**: Diversify platforms, focus on engagement not just followers, test new formats

### Challenge: Negative Comments/Crises
**Solution**: Have crisis communication plan, respond promptly and professionally, know when to escalate

### Challenge: Content Burnout
**Solution**: Repurpose content, user-generated content, curated content, behind-the-scenes

### Challenge: Measuring ROI
**Solution**: Set clear KPIs, use UTM parameters, track conversions, attribute revenue

## Automation Workflows

### Daily Workflow (30 minutes)
```
1. Check notifications and respond (10 min)
2. Review scheduled posts (5 min)
3. Engage with community (10 min)
4. Monitor trends (5 min)
```

### Weekly Workflow (2 hours)
```
1. Review analytics (30 min)
2. Plan next week's content (45 min)
3. Create and schedule posts (30 min)
4. Competitor analysis (15 min)
```

### Monthly Workflow (4 hours)
```
1. Comprehensive performance review (1 hour)
2. Strategy adjustment (1 hour)
3. Campaign planning (1 hour)
4. Report generation (1 hour)
```

## Integration with OpenClaw

Create skill `social-media-skill`:

```markdown
# social-media-skill SKILL.md

## Commands
- `social calendar <month>` - Generate content calendar
- `social create <platform> <topic>` - Create post
- `social schedule <platform> <time>` - Schedule post
- `social hashtags <topic>` - Generate hashtags
- `social analytics <platform>` - Performance report
- `social trends <industry>` - Monitor trends
- `social engage` - Handle engagement
- `social campaign <name>` - Create campaign

## Configuration
```yaml
platforms: [twitter, linkedin, instagram, facebook]
default_tone: friendly and professional
auto_schedule: true
optimal_timing: true
```

## Integrations
- Buffer
- Hootsuite
- Native platform APIs
- Google Analytics
```

## Best Practices

### Content Quality
1. Provide value in every post
2. Be authentic and human
3. Use storytelling
4. Include clear CTAs
5. Test and iterate

### Engagement
1. Respond promptly
2. Ask questions
3. Join conversations
4. Show appreciation
5. Handle negativity professionally

### Growth
1. Post consistently
2. Use relevant hashtags
3. Collaborate with others
4. Cross-promote platforms
5. Analyze and optimize

### Ethics
1. Disclose partnerships
2. Respect privacy
3. Avoid misleading claims
4. Credit sources
5. Be transparent

---

**All 5 Agent Blueprints Complete!**

**Next Steps:**
1. Create setup instructions for each agent
2. Write prompt templates collection
3. Develop OpenClaw skills pack
4. Create API cheat sheet
5. Design PDF structure
6. Write video scripts
