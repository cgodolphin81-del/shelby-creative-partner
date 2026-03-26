# Step-by-Step Setup Instructions

## Quick Start Guide

This document provides detailed setup instructions for all 5 agent blueprints. Follow these steps to implement each agent in your environment.

---

## Agent 1: Personal Research Assistant

### Prerequisites
- Python 3.8+
- OpenAI API key
- Search API key (Serper, Brave, or Google)
- Basic command line knowledge

### Installation Steps

#### Step 1: Create Project Directory
```bash
mkdir research-agent
cd research-agent
```

#### Step 2: Set Up Virtual Environment
```bash
# Linux/Mac
python -m venv venv
source venv/bin/activate

# Windows
python -m venv venv
venv\Scripts\activate
```

#### Step 3: Install Dependencies
```bash
pip install openai python-dotenv
pip install langchain duckduckgo-search
pip install requests beautifulsoup4 newspaper3k
```

#### Step 4: Create Environment File
Create `.env` file in project root:
```env
OPENAI_API_KEY=sk-your-actual-api-key-here
SERPER_API_KEY=your-serper-api-key
# Alternative search APIs:
# BRAVE_API_KEY=your-brave-api-key
# GOOGLE_API_KEY=your-google-api-key
```

**Getting API Keys:**
- OpenAI: https://platform.openai.com/api-keys
- Serper (Google Search): https://serper.dev/
- Brave Search: https://brave.com/search/api/

#### Step 5: Create Main Agent File
Create `research_agent.py` with the code from Chapter 2.

#### Step 6: Test Installation
```bash
python research_agent.py
```

Expected output: Research report on quantum computing.

#### Step 7: Customize Configuration
Edit these parameters in `research_agent.py`:
```python
# Adjust search depth
num_sources = 5  # Increase for more comprehensive research

# Set default depth
depth = "medium"  # Options: shallow, medium, deep

# Customize LLM model
self.model = "gpt-4"  # Or "gpt-3.5-turbo" for lower cost
```

#### Step 8: Set Up Knowledge Base (Optional)
Create `knowledge_base/` directory for saved research:
```bash
mkdir knowledge_base
```

#### Troubleshooting

**Issue: API Key Errors**
- Verify API keys in `.env` file
- Check for extra spaces or quotes
- Ensure API account has credits

**Issue: Import Errors**
```bash
pip install -r requirements.txt
```

**Issue: Rate Limiting**
- Reduce request frequency
- Implement retry logic with exponential backoff
- Consider upgrading API plan

---

## Agent 2: Content Creation Assistant

### Prerequisites
- Python 3.8+
- OpenAI API key
- Optional: Grammarly API key
- Writing samples for brand voice

### Installation Steps

#### Step 1: Create Project Directory
```bash
mkdir content-agent
cd content-agent
```

#### Step 2: Set Up Virtual Environment
```bash
python -m venv venv
source venv/bin/activate  # Linux/Mac
```

#### Step 3: Install Dependencies
```bash
pip install openai python-dotenv
pip install textstat grammarly-check
pip install requests beautifulsoup4
```

#### Step 4: Create Environment File
```env
OPENAI_API_KEY=sk-your-actual-api-key-here
GRAMMARLY_API_KEY=optional-grammarly-key
SERPER_API_KEY=optional-search-api-key
```

#### Step 5: Create Brand Voice File
Create `brand_voice.json`:
```json
{
  "tone": "professional yet approachable",
  "style": "clear and concise",
  "personality": "helpful and knowledgeable",
  "values": ["transparency", "innovation", "excellence"],
  "avoid": ["jargon", "buzzwords", "overly salesy language"],
  "emoji_usage": "moderate",
  "sentence_length": "varied, mostly medium"
}
```

#### Step 6: Create Main Agent File
Create `content_agent.py` with code from Chapter 3.

#### Step 7: Create Templates Directory
```bash
mkdir templates
```

Add template files:
- `blog_post_template.txt`
- `social_media_template.txt`
- `email_newsletter_template.txt`
- `video_script_template.txt`

#### Step 8: Test Installation
```bash
python content_agent.py
```

#### Step 9: Integrate with CMS (Optional)

**WordPress Integration:**
```bash
pip install python-wordpress-xmlrpc
```

**Medium Integration:**
```bash
pip install medium-sdk
```

#### Troubleshooting

**Issue: Content Quality**
- Provide more detailed brand voice guidelines
- Fine-tune temperature parameter (0.5-0.8)
- Add more examples in prompts

**Issue: Slow Generation**
- Use GPT-3.5-turbo for faster results
- Reduce max_tokens parameter
- Implement streaming responses

---

## Agent 3: Customer Support Agent

### Prerequisites
- Python 3.8+
- OpenAI API key
- Support platform account (Zendesk, Intercom, etc.)
- Knowledge base articles

### Installation Steps

#### Step 1: Create Project Directory
```bash
mkdir support-agent
cd support-agent
```

#### Step 2: Set Up Virtual Environment
```bash
python -m venv venv
source venv/bin/activate
```

#### Step 3: Install Dependencies
```bash
pip install openai python-dotenv
pip install textblob sentiment-analyzer
pip install zendesk-sdk  # Or your platform's SDK
pip install requests
```

#### Step 4: Create Environment File
```env
OPENAI_API_KEY=sk-your-actual-api-key-here
ZENDESK_API_KEY=your-zendesk-api-key
ZENDESK_SUBDOMAIN=your-company-subdomain
ZENDESK_EMAIL=your-support-email@company.com
SUPPORT_EMAIL=support@yourcompany.com
```

#### Step 5: Build Knowledge Base
Create `knowledge_base/` directory with JSON files:

`billing.json`:
```json
[
  {
    "id": "bill-001",
    "question": "How do I update my payment method?",
    "answer": "Go to Account Settings > Billing > Payment Methods...",
    "category": "billing",
    "tags": ["payment", "credit card", "billing"]
  }
]
```

#### Step 6: Create Main Agent File
Create `support_agent.py` with code from Chapter 4.

#### Step 7: Set Up Ticket Database
```bash
pip install sqlite3  # Built-in, or use PostgreSQL
```

Create `database.py`:
```python
import sqlite3

def init_db():
    conn = sqlite3.connect('support_tickets.db')
    cursor = conn.cursor()
    
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS tickets (
            id TEXT PRIMARY KEY,
            customer_email TEXT,
            subject TEXT,
            message TEXT,
            classification TEXT,
            response TEXT,
            status TEXT,
            priority TEXT,
            created_at TIMESTAMP,
            escalated BOOLEAN
        )
    ''')
    
    conn.commit()
    conn.close()
```

#### Step 8: Configure Escalation Rules
Create `escalation_rules.json`:
```json
{
  "keywords": ["manager", "lawsuit", "refund immediately", "cancel"],
  "sentiment_threshold": -0.5,
  "urgency_levels": {
    "critical": ["account hacked", "data breach", "payment fraud"],
    "high": ["service down", "cannot access account"],
    "medium": ["billing issue", "feature request"],
    "low": ["general inquiry", "feedback"]
  }
}
```

#### Step 9: Test Installation
```bash
python support_agent.py
```

#### Step 10: Set Up Monitoring
Create `monitoring.py` for tracking:
- Response times
- Resolution rates
- Customer satisfaction
- Escalation rates

#### Troubleshooting

**Issue: Incorrect Categorization**
- Expand knowledge base with more examples
- Fine-tune classification prompts
- Implement feedback loop for corrections

**Issue: Inappropriate Responses**
- Add more guardrails in prompts
- Implement human review for sensitive topics
- Create blocklist for problematic responses

---

## Agent 4: Data Analysis Agent

### Prerequisites
- Python 3.8+
- OpenAI API key
- Data science libraries
- Sample datasets

### Installation Steps

#### Step 1: Create Project Directory
```bash
mkdir data-agent
cd data-agent
```

#### Step 2: Set Up Virtual Environment
```bash
python -m venv venv
source venv/bin/activate
```

#### Step 3: Install Data Science Stack
```bash
pip install pandas numpy scipy scikit-learn
pip install matplotlib seaborn plotly
pip install openai python-dotenv
pip install sqlalchemy  # For database connections
pip install jupyter  # For interactive analysis
```

#### Step 4: Create Environment File
```env
OPENAI_API_KEY=sk-your-actual-api-key-here
DATABASE_URL=postgresql://user:password@localhost:5432/dbname
AWS_ACCESS_KEY=your-aws-key
AWS_SECRET_KEY=your-aws-secret
S3_BUCKET=your-bucket-name
```

#### Step 5: Create Data Directory Structure
```bash
mkdir -p data/{raw,processed,output}
mkdir visualizations
mkdir reports
```

#### Step 6: Create Main Agent File
Create `data_agent.py` with code from Chapter 5.

#### Step 7: Set Up Database Connections
Create `connections.py`:
```python
from sqlalchemy import create_engine
import os

def get_database_engine():
    db_url = os.getenv('DATABASE_URL')
    return create_engine(db_url)

def get_s3_client():
    import boto3
    return boto3.client(
        's3',
        aws_access_key_id=os.getenv('AWS_ACCESS_KEY'),
        aws_secret_access_key=os.getenv('AWS_SECRET_KEY')
    )
```

#### Step 8: Create Sample Analysis Script
Create `sample_analysis.py`:
```python
from data_agent import DataAnalysisAgent

agent = DataAnalysisAgent()
agent.load_data('data/raw/sales_data.csv')
agent.assess_data_quality()
agent.clean_data()
agent.generate_descriptive_statistics()
agent.generate_visualizations()
agent.generate_insights()
agent.create_report()
```

#### Step 9: Test Installation
```bash
python sample_analysis.py
```

#### Step 10: Set Up Jupyter Notebook (Optional)
```bash
jupyter notebook
```

Create notebook with cells for:
1. Data loading
2. Quality assessment
3. Cleaning
4. Analysis
5. Visualization
6. Insights

#### Troubleshooting

**Issue: Memory Errors with Large Datasets**
- Use chunking: `pd.read_csv(file, chunksize=10000)`
- Use data types efficiently: `dtype='category'` for strings
- Consider Dask for very large datasets

**Issue: Visualization Errors**
- Check matplotlib backend: `matplotlib.use('Agg')`
- Ensure write permissions in output directory
- Reduce plot complexity

---

## Agent 5: Social Media Manager Agent

### Prerequisites
- Python 3.8+
- OpenAI API key
- Social media API access
- Brand guidelines

### Installation Steps

#### Step 1: Create Project Directory
```bash
mkdir social-media-agent
cd social-media-agent
```

#### Step 2: Set Up Virtual Environment
```bash
python -m venv venv
source venv/bin/activate
```

#### Step 3: Install Dependencies
```bash
pip install openai python-dotenv pandas
pip install tweepy  # Twitter
pip install facebook-sdk  # Facebook/Instagram
pip install schedule  # For scheduling
pip install pillow  # Image processing
```

#### Step 4: Create Environment File
```env
OPENAI_API_KEY=sk-your-actual-api-key-here

# Twitter/X
TWITTER_API_KEY=your-twitter-api-key
TWITTER_API_SECRET=your-twitter-api-secret
TWITTER_ACCESS_TOKEN=your-access-token
TWITTER_ACCESS_SECRET=your-access-secret

# Facebook/Instagram
FACEBOOK_APP_ID=your-app-id
FACEBOOK_APP_SECRET=your-app-secret
FACEBOOK_ACCESS_TOKEN=your-access-token
INSTAGRAM_ACCOUNT_ID=your-ig-account-id

# LinkedIn
LINKEDIN_CLIENT_ID=your-linkedin-client-id
LINKEDIN_CLIENT_SECRET=your-linkedin-secret
LINKEDIN_ACCESS_TOKEN=your-linkedin-token

# Buffer (Alternative - manages multiple platforms)
BUFFER_API_KEY=your-buffer-api-key
```

#### Step 5: Get Platform API Credentials

**Twitter Developer Account:**
1. Go to https://developer.twitter.com/
2. Create a project and app
3. Generate API keys and tokens

**Facebook/Instagram:**
1. Go to https://developers.facebook.com/
2. Create app
3. Add Instagram Basic Display product
4. Get access token

**LinkedIn:**
1. Go to https://www.linkedin.com/developers/
2. Create app
3. Get credentials

#### Step 6: Create Brand Voice File
Create `brand_guidelines.json`:
```json
{
  "brand_name": "Your Company",
  "tone": "friendly and professional",
  "personality_traits": ["helpful", "knowledgeable", "approachable"],
  "values": ["transparency", "innovation", "customer-first"],
  "visual_style": "clean, modern, colorful",
  "emoji_guidelines": "Use moderately, ensure relevance",
  "hashtag_strategy": "Mix of branded, industry, and trending",
  "posting_frequency": {
    "twitter": "3-5 per day",
    "linkedin": "1 per day",
    "instagram": "1-2 per day",
    "facebook": "1-2 per day"
  }
}
```

#### Step 7: Create Main Agent File
Create `social_media_agent.py` with code from Chapter 6.

#### Step 8: Create Content Calendar Template
Create `content_calendar_template.xlsx` with columns:
- Date
- Platform
- Content Type
- Topic/Theme
- Copy
- Hashtags
- Visual Description
- Status
- Scheduled Time

#### Step 9: Set Up Scheduling
Create `scheduler.py`:
```python
import schedule
import time
from social_media_agent import SocialMediaManagerAgent

agent = SocialMediaManagerAgent()

def check_and_publish():
    """Check queue and publish scheduled posts"""
    now = datetime.now()
    for post in agent.content_queue:
        if post['scheduled_time'] <= now and post['status'] == 'scheduled':
            agent.publish_post(post)
            post['status'] = 'published'

# Schedule checks every 15 minutes
schedule.every(15).minutes.do(check_and_publish)

while True:
    schedule.run_pending()
    time.sleep(60)
```

#### Step 10: Test Installation
```bash
python social_media_agent.py
```

#### Troubleshooting

**Issue: API Rate Limits**
- Implement rate limiting in code
- Use queue system for posting
- Consider paid API tiers

**Issue: Authentication Errors**
- Check token expiration dates
- Refresh tokens as needed
- Verify app permissions

**Issue: Content Approval**
- Implement approval workflow
- Create draft/publish states
- Add human review step

---

## Common Setup Issues Across All Agents

### Python Version Issues
```bash
# Check Python version
python --version

# Should be 3.8 or higher
# If not, install from python.org or use pyenv
```

### Virtual Environment Issues
```bash
# If venv fails
python -m pip install --upgrade pip
python -m venv venv --clear

# Reactivate
source venv/bin/activate  # Linux/Mac
venv\Scripts\activate  # Windows
```

### Dependency Conflicts
```bash
# Clear cache and reinstall
pip cache purge
pip install -r requirements.txt --force-reinstall
```

### API Key Issues
```bash
# Test API key
curl https://api.openai.com/v1/models \
  -H "Authorization: Bearer $OPENAI_API_KEY"
```

### Permission Issues
```bash
# Fix file permissions
chmod +x *.py
chmod 755 data/
```

---

## Next Steps After Setup

1. **Test Each Agent**: Run test scripts with sample data
2. **Customize Prompts**: Adapt to your specific use case
3. **Integrate with Tools**: Connect to your existing systems
4. **Monitor Performance**: Set up logging and analytics
5. **Iterate and Improve**: Gather feedback and refine

## Support Resources

- OpenAI API Documentation: https://platform.openai.com/docs
- LangChain Documentation: https://python.langchain.com/
- Python Documentation: https://docs.python.org/3/
- GitHub Issues: Report bugs and request features

---

**Ready to build your agents!**
