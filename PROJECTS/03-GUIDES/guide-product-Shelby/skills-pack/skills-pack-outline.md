# OpenClaw Skills Pack - AI Agent Quick Start

## Overview

This skills pack includes 5 pre-configured OpenClaw skills corresponding to the 5 agent blueprints in the AI Agent Quick Start Guide. Each skill is ready to install and use immediately.

---

## Pack Contents

### Skill 1: research-assistant
**Purpose:** Automated research and information synthesis
**Commands:** 6
**Complexity:** Beginner
**Dependencies:** OpenAI API, Search API

### Skill 2: content-creator
**Purpose:** AI-powered content creation and optimization
**Commands:** 8
**Complexity:** Beginner
**Dependencies:** OpenAI API

### Skill 3: support-agent
**Purpose:** Customer support automation
**Commands:** 7
**Complexity:** Intermediate
**Dependencies:** OpenAI API, Zendesk/Intercom (optional)

### Skill 4: data-analyst
**Purpose:** Data analysis and insight generation
**Commands:** 9
**Complexity:** Intermediate
**Dependencies:** OpenAI API, pandas, numpy

### Skill 5: social-media-manager
**Purpose:** Social media management and automation
**Commands:** 10
**Complexity:** Intermediate
**Dependencies:** OpenAI API, Social media APIs

---

## Skill 1: research-assistant

### Directory Structure
```
research-assistant/
├── SKILL.md
├── README.md
├── commands/
│   ├── query.sh
│   ├── deep.sh
│   ├── fact-check.sh
│   ├── compare.sh
│   ├── monitor.sh
│   └── brief.sh
├── scripts/
│   ├── research_core.py
│   └── search_utils.py
├── config/
│   └── default.yaml
└── references/
    ├── examples.md
    └── api-docs.md
```

### SKILL.md
```markdown
# research-assistant

Automated research and information synthesis skill for OpenClaw.

## Description
Conducts comprehensive research on any topic by searching multiple sources, extracting content, synthesizing findings, and delivering structured reports with citations.

## Commands

### `research query <topic>`
Quick research on a topic (3-5 sources, 1-2 minute execution)

**Usage:**
```bash
research query "latest AI developments 2024"
```

**Options:**
- `--sources <n>` - Number of sources (default: 5)
- `--format <brief|detailed>` - Output format (default: brief)

### `research deep <topic>`
Comprehensive research report (10-15 sources, 5-10 minute execution)

**Usage:**
```bash
research deep "quantum computing applications"
```

**Options:**
- `--sources <n>` - Number of sources (default: 15)
- `--include-academic` - Include academic papers
- `--date-range <YYYY-MM-DD>` - Limit to recent content

### `research fact-check <claim>`
Verify a specific claim with evidence

**Usage:**
```bash
research fact-check "AI will replace all jobs by 2030"
```

**Output:**
- Verdict (True/False/Misleading/Unverified)
- Confidence level (0-100%)
- Evidence summary
- Sources

### `research compare <item1> <item2>`
Comparative analysis of two or more items

**Usage:**
```bash
research compare "GPT-4" "Claude 3"
```

**Output:**
- Feature comparison table
- Pros/cons for each
- Use case recommendations

### `research monitor <topic>`
Set up ongoing topic monitoring

**Usage:**
```bash
research monitor "artificial intelligence regulation"
```

**Options:**
- `--frequency <daily|weekly>` - Check frequency
- `--alert-threshold` - When to notify (default: significant changes)

### `research brief <topic>`
Ultra-quick brief (30 seconds, top 3 sources)

**Usage:**
```bash
research brief "stock market today"
```

## Configuration

```yaml
# config/default.yaml
search:
  default_engine: "serper"  # serper, brave, google
  default_sources: 5
  cache_results: true
  cache_duration: 24h

llm:
  model: "gpt-4"
  temperature: 0.7
  max_tokens: 4000

output:
  format: "markdown"
  include_citations: true
  cite_style: "apa"
```

## Environment Variables
```bash
OPENAI_API_KEY=required
SERPER_API_KEY=required  # Or BRAVE_API_KEY
```

## Examples

Quick brief:
```bash
research brief "weather forecast NYC"
```

Deep dive:
```bash
research deep "renewable energy trends" --sources 20 --include-academic
```

Fact check:
```bash
research fact-check "coffee stunts growth" --verbose
```

## Dependencies
- Python 3.8+
- openai
- langchain
- requests
- beautifulsoup4

## License
MIT
```

### Installation Script
```bash
#!/bin/bash
# install.sh

echo "Installing research-assistant skill..."

# Install Python dependencies
pip install openai langchain requests beautifulsoup4

# Create config if not exists
if [ ! -f config/default.yaml ]; then
    cp config/default.yaml.example config/default.yaml
fi

echo "Installation complete!"
echo "Set your API keys in .env file:"
echo "  OPENAI_API_KEY=your_key"
echo "  SERPER_API_KEY=your_key"
```

---

## Skill 2: content-creator

### Directory Structure
```
content-creator/
├── SKILL.md
├── README.md
├── commands/
│   ├── create.sh
│   ├── optimize.sh
│   ├── adapt.sh
│   ├── edit.sh
│   ├── headlines.sh
│   ├── analyze.sh
│   ├── calendar.sh
│   └── repurpose.sh
├── scripts/
│   ├── content_engine.py
│   ├── seo_optimizer.py
│   └── platform_adapter.py
├── templates/
│   ├── blog_post.txt
│   ├── social_media.txt
│   ├── email.txt
│   └── video_script.txt
└── config/
    └── brand_voice.yaml
```

### SKILL.md Excerpt
```markdown
# content-creator

AI-powered content creation and optimization skill.

## Commands

### `content create <type> <topic>`
Create new content from scratch

**Types:** blog_post, social_post, email, video_script, product_desc

**Usage:**
```bash
content create blog_post "10 productivity tips"
content create social_post linkedin "new product launch"
```

### `content optimize <text>`
SEO optimization for existing content

**Usage:**
```bash
content optimize article.md --keywords "productivity,time management"
```

### `content adapt <platform>`
Adapt content for different platforms

**Usage:**
```bash
content adapt twitter --source blog_post.md
content adapt linkedin instagram --source blog_post.md
```

### `content edit <text>`
Edit and improve content

**Usage:**
```bash
content edit draft.md --focus "clarity,tone"
```

### `content headlines <topic>`
Generate headline options

**Usage:**
```bash
content headlines "remote work trends" --count 15
```

### `content analyze <text>`
Analyze content quality

**Output:**
- Readability scores
- Word count
- Tone analysis
- SEO score
- Suggestions

### `content calendar <month>`
Generate monthly content calendar

**Usage:**
```bash
content calendar april --themes "productivity,leadership"
```

### `content repurpose <source>`
Repurpose content into multiple formats

**Usage:**
```bash
content repurpose webinar_recording.md
```

## Configuration

```yaml
brand_voice:
  tone: "professional yet approachable"
  personality: "helpful, knowledgeable"
  avoid: ["jargon", "buzzwords"]
  emoji_usage: "moderate"

defaults:
  blog_post_length: 1500
  social_post_variations: 3
  headline_count: 10
```
```

---

## Skill 3: support-agent

### Directory Structure
```
support-agent/
├── SKILL.md
├── README.md
├── commands/
│   ├── respond.sh
│   ├── classify.sh
│   ├── escalate.sh
│   ├── ticket.sh
│   ├── followup.sh
│   ├── kb-search.sh
│   └── stats.sh
├── scripts/
│   ├── support_core.py
│   ├── classifier.py
│   └── ticket_manager.py
├── knowledge_base/
│   ├── billing.json
│   ├── technical.json
│   ├── account.json
│   └── shipping.json
└── config/
    └── escalation_rules.yaml
```

### SKILL.md Excerpt
```markdown
# support-agent

Customer support automation skill for OpenClaw.

## Commands

### `support respond <message>`
Generate response to customer inquiry

**Usage:**
```bash
support respond "I was charged twice for my subscription"
```

### `support classify <message>`
Classify inquiry type and urgency

**Output:** Category, urgency, sentiment, escalation flag

### `support escalate <ticket_id>`
Escalate ticket to human agent

**Usage:**
```bash
support escalate TICKET-12345 --reason "angry customer"
```

### `support ticket <action>`
Manage support tickets

**Actions:** create, update, close, list

### `support followup <ticket_id>`
Generate follow-up message

### `support kb-search <query>`
Search knowledge base

### `support stats <period>`
Generate support statistics

**Metrics:** Response time, resolution rate, CSAT, volume
```

---

## Skill 4: data-analyst

### Directory Structure
```
data-analyst/
├── SKILL.md
├── README.md
├── commands/
│   ├── load.sh
│   ├── quality.sh
│   ├── clean.sh
│   ├── stats.sh
│   ├── visualize.sh
│   ├── insights.sh
│   ├── report.sh
│   ├── ask.sh
│   └── export.sh
├── scripts/
│   ├── data_core.py
│   ├── visualizations.py
│   └── ml_models.py
├── templates/
│   ├── report_markdown.md
│   └── report_html.html
└── config/
    └── analysis_defaults.yaml
```

### SKILL.md Excerpt
```markdown
# data-analyst

Automated data analysis and insight generation.

## Commands

### `data load <file>`
Load dataset (CSV, Excel, JSON, SQL)

**Usage:**
```bash
data load sales_data.csv
data load query:SELECT * FROM users --source postgresql
```

### `data quality`
Assess data quality

**Output:** Completeness score, missing values, outliers, duplicates

### `data clean`
Clean data automatically

**Options:** Handle missing, remove duplicates, cap outliers

### `data stats`
Generate descriptive statistics

### `data visualize`
Create visualizations

**Types:** distribution, time_series, correlation, bar charts

### `data insights`
Generate natural language insights

### `data report`
Create comprehensive report

**Formats:** markdown, html, pdf

### `data ask <question>`
Ask questions about data in natural language

**Usage:**
```bash
data ask "What was total revenue last quarter?"
data ask "Show me top 10 customers by revenue"
```

### `data export <format>`
Export analysis results
```

---

## Skill 5: social-media-manager

### Directory Structure
```
social-media-manager/
├── SKILL.md
├── README.md
├── commands/
│   ├── calendar.sh
│   ├── create.sh
│   ├── schedule.sh
│   ├── hashtags.sh
│   ├── analytics.sh
│   ├── trends.sh
│   ├── engage.sh
│   ├── campaign.sh
│   ├── report.sh
│   └── repurpose.sh
├── scripts/
│   ├── social_core.py
│   ├── platform_api.py
│   └── scheduler.py
├── templates/
│   ├── content_calendar.xlsx
│   └── campaign_brief.md
└── config/
    └── platforms.yaml
```

### SKILL.md Excerpt
```markdown
# social-media-manager

Social media management and automation skill.

## Commands

### `social calendar <month>`
Generate content calendar

**Usage:**
```bash
social calendar april --themes "product launch,spring sale"
```

### `social create <platform> <topic>`
Create platform-optimized post

**Platforms:** twitter, linkedin, instagram, facebook

**Output:** 3 variations for A/B testing

### `social schedule <platform> <time>`
Schedule post for publishing

### `social hashtags <topic>`
Generate hashtag strategy

**Output:** Categorized hashtags by volume

### `social analytics <platform>`
Analyze performance metrics

**Metrics:** Engagement, reach, growth, top posts

### `social trends <industry>`
Monitor trending topics

### `social engage`
Handle audience engagement

### `social campaign <name>`
Create campaign plan

### `social report <period>`
Generate performance report

### `social repurpose <content>`
Adapt content for multiple platforms
```

---

## Installation Guide

### Prerequisites
- OpenClaw installed and configured
- Python 3.8+
- API keys for required services

### Install All Skills
```bash
# Clone or download skills pack
git clone https://github.com/your-repo/openclaw-skills-pack.git
cd openclaw-skills-pack

# Install all skills
./install-all.sh
```

### Install Individual Skill
```bash
# Copy skill to OpenClaw skills directory
cp -r research-assistant ~/.openclaw/workspace/skills/

# Install dependencies
cd ~/.openclaw/workspace/skills/research-assistant
./install.sh
```

### Configure API Keys
Create `~/.openclaw/workspace/.env`:
```bash
# Required for all skills
OPENAI_API_KEY=sk-your-key-here

# Research skill
SERPER_API_KEY=your-serper-key

# Social media skill
TWITTER_API_KEY=your-twitter-key
FACEBOOK_ACCESS_TOKEN=your-fb-token
LINKEDIN_ACCESS_TOKEN=your-linkedin-token

# Support skill (optional)
ZENDESK_API_KEY=your-zendesk-key
```

### Verify Installation
```bash
# Test each skill
openclaw skill test research-assistant
openclaw skill test content-creator
openclaw skill test support-agent
openclaw skill test data-analyst
openclaw skill test social-media-manager
```

---

## Usage Examples

### Research Assistant
```bash
# Quick brief
oc research brief "AI news today"

# Deep research
oc research deep "machine learning healthcare applications" --sources 20

# Fact check
oc research fact-check "AI consciousness imminent"
```

### Content Creator
```bash
# Create blog post
oc content create blog_post "future of remote work"

# Generate headlines
oc content headlines "productivity hacks" --count 15

# Optimize for SEO
oc content optimize draft.md --keywords "remote work,productivity"
```

### Support Agent
```bash
# Respond to inquiry
oc support respond "How do I reset my password?"

# Check ticket stats
oc support stats weekly

# Search knowledge base
oc support kb-search "refund policy"
```

### Data Analyst
```bash
# Load and analyze data
oc data load sales_2024.csv
oc data quality
oc data insights
oc data report --format html
```

### Social Media Manager
```bash
# Generate calendar
oc social calendar april --themes "spring sale,customer stories"

# Create posts
oc social create linkedin "new feature announcement"

# Check analytics
oc social analytics twitter --period 30d
```

---

## Customization Guide

### Modify Brand Voice
Edit `config/brand_voice.yaml`:
```yaml
tone: "your preferred tone"
personality:
  - trait1
  - trait2
values:
  - value1
  - value2
```

### Add Custom Commands
1. Create script in `commands/`
2. Make executable: `chmod +x commands/new-command.sh`
3. Document in SKILL.md

### Integrate Additional APIs
1. Add API client to `scripts/`
2. Update dependencies in SKILL.md
3. Add environment variables to config

---

## Troubleshooting

### Common Issues

**API Key Errors**
```bash
# Verify keys are set
echo $OPENAI_API_KEY
# Should show your key (not empty)
```

**Import Errors**
```bash
# Reinstall dependencies
pip install -r requirements.txt --force-reinstall
```

**Permission Issues**
```bash
# Make scripts executable
chmod +x commands/*.sh
chmod +x scripts/*.py
```

### Get Help
```bash
# Show help for any skill
oc skill help research-assistant

# Show help for specific command
oc research --help
```

---

## Support and Updates

### Reporting Issues
- GitHub Issues: https://github.com/your-repo/openclaw-skills-pack/issues
- Email: support@yourcompany.com

### Updates
```bash
# Check for updates
oc skill check-updates

# Update all skills
oc skill update --all
```

### Version History
- v1.0.0 (March 2024) - Initial release with 5 skills
- v1.1.0 (Coming) - Additional commands and integrations

---

## License

MIT License - Free to use, modify, and distribute

## Credits

Created for the AI Agent Quick Start Guide
Author: Your Name
Website: yourwebsite.com

---

**End of OpenClaw Skills Pack Documentation**
