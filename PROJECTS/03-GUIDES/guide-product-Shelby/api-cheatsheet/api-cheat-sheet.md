# API Cheat Sheet - 50+ Essential APIs for AI Agents

## Table of Contents
1. AI & Machine Learning APIs
2. Search & Information APIs
3. Communication APIs
4. Social Media APIs
5. Productivity & Business APIs
6. Data & Analytics APIs
7. Payment & E-commerce APIs
8. Cloud & Storage APIs
9. Media & Content APIs
10. Developer Tools APIs

---

## 1. AI & Machine Learning APIs

### 1.1 OpenAI API
**Purpose:** LLM, image generation, embeddings, speech-to-text
**Pricing:** Pay-per-use (tokens)
**Auth:** API Key
**Rate Limits:** Tier-based

**Endpoints:**
```
POST /v1/chat/completions - Chat completions
POST /v1/completions - Text completion
POST /v1/images/generations - Image generation
POST /v1/embeddings - Generate embeddings
POST /v1/audio/transcriptions - Speech to text
POST /v1/audio/speech - Text to speech
```

**Example:**
```python
import openai
client = openai.OpenAI(api_key="sk-...")
response = client.chat.completions.create(
    model="gpt-4",
    messages=[{"role": "user", "content": "Hello!"}]
)
```

**Website:** https://platform.openai.com

---

### 1.2 Anthropic API (Claude)
**Purpose:** LLM (Claude models)
**Pricing:** Pay-per-use (tokens)
**Auth:** API Key
**Rate Limits:** Tier-based

**Endpoints:**
```
POST /v1/messages - Chat completions
POST /v1/complete - Text completion
```

**Example:**
```python
import anthropic
client = anthropic.Anthropic(api_key="sk-ant-...")
response = client.messages.create(
    model="claude-3-opus-20240229",
    max_tokens=1024,
    messages=[{"role": "user", "content": "Hello!"}]
)
```

**Website:** https://www.anthropic.com

---

### 1.3 Google AI (Gemini)
**Purpose:** LLM (Gemini models), embeddings
**Pricing:** Free tier + pay-per-use
**Auth:** API Key
**Rate Limits:** 60 requests/minute (free)

**Endpoints:**
```
POST /v1/models/{model}:generateContent
POST /v1/models/{model}:embedContent
```

**Website:** https://ai.google.dev

---

### 1.4 Cohere API
**Purpose:** LLM, embeddings, reranking
**Pricing:** Free tier + pay-per-use
**Auth:** API Key

**Endpoints:**
```
POST /v1/generate - Text generation
POST /v1/embed - Generate embeddings
POST /v1/rerank - Rerank documents
POST /v1/classify - Text classification
```

**Website:** https://cohere.com

---

### 1.5 Hugging Face Inference API
**Purpose:** Access 100,000+ ML models
**Pricing:** Free tier + paid
**Auth:** API Token

**Endpoints:**
```
POST /api/inference/{model_id}
GET /api/models
```

**Website:** https://huggingface.co

---

### 1.6 Replicate API
**Purpose:** Run open-source ML models
**Pricing:** Pay-per-second
**Auth:** API Token

**Endpoints:**
```
POST /v1/predictions - Run model
GET /v1/predictions/{id} - Get result
```

**Website:** https://replicate.com

---

### 1.7 Stability AI API
**Purpose:** Image generation (Stable Diffusion)
**Pricing:** Pay-per-image
**Auth:** API Key

**Endpoints:**
```
POST /v1/stable-diffusion/{version}:text-to-image
POST /v1/stable-diffusion/{version}:image-to-image
```

**Website:** https://stability.ai

---

### 1.8 AssemblyAI
**Purpose:** Speech-to-text, audio understanding
**Pricing:** Free tier + pay-per-hour
**Auth:** API Key

**Endpoints:**
```
POST /v2/upload_url - Upload audio
GET /v2/transcript/{id} - Get transcription
```

**Features:** Transcription, sentiment analysis, topic detection

**Website:** https://www.assemblyai.com

---

### 1.9 DeepL API
**Purpose:** Translation (high quality)
**Pricing:** Free tier (500K chars/month) + paid
**Auth:** API Key

**Endpoints:**
```
POST /translate - Translate text
GET /languages - Get supported languages
```

**Website:** https://www.deepl.com/api

---

### 1.10 ElevenLabs
**Purpose:** Text-to-speech (realistic voices)
**Pricing:** Free tier + pay-per-character
**Auth:** API Key

**Endpoints:**
```
POST /v1/text-to-speech/{voice_id} - Generate speech
GET /v1/voices - List voices
```

**Website:** https://elevenlabs.io

---

## 2. Search & Information APIs

### 2.1 Serper API (Google Search)
**Purpose:** Google Search results
**Pricing:** Free tier (100 searches) + paid
**Auth:** API Key

**Endpoints:**
```
POST /search - Web search
POST /news - News search
POST /images - Image search
POST /scholar - Scholar search
```

**Example:**
```python
import requests
response = requests.post(
    "https://google.serper.dev/search",
    headers={"X-API-KEY": "your-key"},
    json={"q": "query"}
)
```

**Website:** https://serper.dev

---

### 2.2 Brave Search API
**Purpose:** Web search (privacy-focused)
**Pricing:** Free tier (2K searches/month) + paid
**Auth:** API Key

**Endpoints:**
```
GET /v1/web/search - Web search
GET /v1/news/search - News search
```

**Website:** https://brave.com/search/api

---

### 2.3 Bing Search API
**Purpose:** Microsoft Bing search
**Pricing:** Pay-per-transaction (free tier available)
**Auth:** API Key

**Endpoints:**
```
GET /v7.0/search - Web search
GET /v7.0/news/search - News search
GET /v7.0/images/search - Image search
```

**Website:** https://www.microsoft.com/en-us/bing/apis

---

### 2.4 DuckDuckGo Instant Answer
**Purpose:** Instant answers (no web search)
**Pricing:** Free
**Auth:** None

**Endpoints:**
```
GET /?q={query}&format=json
```

**Website:** https://duckduckgo.com/api

---

### 2.5 Wikipedia API
**Purpose:** Wikipedia content
**Pricing:** Free
**Auth:** None (rate limited)

**Endpoints:**
```
GET /w/api.php?action=query&format=json&prop=extracts&titles={title}
```

**Website:** https://www.mediawiki.org/wiki/API

---

### 2.6 NewsAPI
**Purpose:** News articles from 70K+ sources
**Pricing:** Free tier + paid
**Auth:** API Key

**Endpoints:**
```
GET /v2/top-headlines - Top news
GET /v2/everything - Search all articles
```

**Website:** https://newsapi.org

---

### 2.7 GDELT Project
**Purpose:** Global news monitoring
**Pricing:** Free
**Auth:** None

**Endpoints:**
```
BigQuery: gdelt-bq:full.v2.gkg
REST API for simplified access
```

**Website:** https://www.gdeltproject.org

---

## 3. Communication APIs

### 3.1 Twilio
**Purpose:** SMS, voice, video, WhatsApp
**Pricing:** Pay-per-use
**Auth:** API Key + Secret

**Endpoints:**
```
POST /2010-04-01/Accounts/{sid}/Messages.json - Send SMS
POST /2010-04-01/Accounts/{sid}/Calls.json - Make call
```

**Website:** https://www.twilio.com

---

### 3.2 SendGrid
**Purpose:** Email delivery
**Pricing:** Free tier (100/day) + paid
**Auth:** API Key

**Endpoints:**
```
POST /v3/mail/send - Send email
GET /v3/mail_settings - Get settings
```

**Website:** https://sendgrid.com

---

### 3.3 Mailgun
**Purpose:** Email API
**Pricing:** Free tier (5K emails/month) + paid
**Auth:** API Key

**Endpoints:**
```
POST /{domain}/messages - Send email
GET /{domain}/events - Get events
```

**Website:** https://www.mailgun.com

---

### 3.4 Slack API
**Purpose:** Slack messaging and automation
**Pricing:** Free + paid tiers
**Auth:** OAuth/Bot Token

**Endpoints:**
```
POST /chat.postMessage - Send message
GET /conversations.list - List channels
POST /reactions.add - Add reaction
```

**Website:** https://api.slack.com

---

### 3.5 Discord API
**Purpose:** Discord bot integration
**Pricing:** Free
**Auth:** Bot Token

**Endpoints:**
```
POST /channels/{id}/messages - Send message
GET /users/@me - Get bot info
```

**Website:** https://discord.com/developers

---

### 3.6 Telegram Bot API
**Purpose:** Telegram bot integration
**Pricing:** Free
**Auth:** Bot Token

**Endpoints:**
```
POST /sendMessage - Send message
POST /sendPhoto - Send photo
GET /getUpdates - Get updates
```

**Website:** https://core.telegram.org/bots/api

---

## 4. Social Media APIs

### 4.1 Twitter API v2
**Purpose:** Tweets, users, engagement
**Pricing:** Free tier (limited) + paid ($100-$42K/month)
**Auth:** OAuth 2.0 / API Key

**Endpoints:**
```
GET /2/tweets/search/recent - Search tweets
POST /2/tweets - Post tweet
GET /2/users/me - Get authenticated user
```

**Website:** https://developer.twitter.com

---

### 4.2 LinkedIn API
**Purpose:** Professional network data
**Pricing:** Free (with approval)
**Auth:** OAuth 2.0

**Endpoints:**
```
GET /v2/me - Get user profile
POST /v2/shares - Share post
GET /v2/organizations/{id} - Get org info
```

**Website:** https://www.linkedin.com/developers

---

### 4.3 Facebook Graph API
**Purpose:** Facebook pages, posts, insights
**Pricing:** Free (with limits)
**Auth:** OAuth 2.0 / Access Token

**Endpoints:**
```
GET /{page-id} - Get page info
POST /{page-id}/feed - Post to page
GET /{page-id}/insights - Get analytics
```

**Website:** https://developers.facebook.com

---

### 4.4 Instagram Basic Display API
**Purpose:** Instagram media and profile
**Pricing:** Free
**Auth:** OAuth 2.0

**Endpoints:**
```
GET /me - Get user profile
GET /me/media - Get user media
```

**Website:** https://developers.facebook.com/docs/instagram-basic-display-api

---

### 4.5 Instagram Graph API
**Purpose:** Instagram Business accounts
**Pricing:** Free
**Auth:** OAuth 2.0

**Endpoints:**
```
GET /{ig-user-id} - Get business account
POST /{ig-user-id}/media - Create media container
POST /{ig-user-id}/media_publish - Publish media
```

**Website:** https://developers.facebook.com/docs/instagram-api

---

### 4.6 YouTube Data API v3
**Purpose:** YouTube videos, channels, analytics
**Pricing:** Free (quota-based)
**Auth:** OAuth 2.0 / API Key

**Endpoints:**
```
GET /videos - Get video details
POST /videos - Upload video
GET /channels - Get channel info
GET /commentThreads - Get comments
```

**Website:** https://developers.google.com/youtube/v3

---

### 4.7 TikTok API
**Purpose:** TikTok content and analytics
**Pricing:** Free (business accounts)
**Auth:** OAuth 2.0

**Endpoints:**
```
GET /research/api/v1/video/list - List videos
GET /research/api/v1/user/list - List users
```

**Website:** https://developers.tiktok.com

---

### 4.8 Pinterest API
**Purpose:** Pinterest boards, pins
**Pricing:** Free
**Auth:** OAuth 2.0

**Endpoints:**
```
GET /v5/pins - List pins
POST /v5/pins - Create pin
GET /v5/boards - List boards
```

**Website:** https://developers.pinterest.com

---

## 5. Productivity & Business APIs

### 5.1 Google Calendar API
**Purpose:** Calendar management
**Pricing:** Free (with quotas)
**Auth:** OAuth 2.0

**Endpoints:**
```
GET /calendar/v3/calendars/{calendarId}/events - List events
POST /calendar/v3/calendars/{calendarId}/events - Create event
```

**Website:** https://developers.google.com/calendar

---

### 5.2 Google Contacts API
**Purpose:** Contact management
**Pricing:** Free
**Auth:** OAuth 2.0

**Endpoints:**
```
GET /people - List contacts
POST /people - Create contact
```

**Website:** https://developers.google.com/people

---

### 5.3 Notion API
**Purpose:** Notion workspace automation
**Pricing:** Free
**Auth:** OAuth 2.0 / Integration Token

**Endpoints:**
```
POST /v1/pages - Create page
GET /v1/blocks/{block_id}/children - Get blocks
POST /v1/databases/{database_id}/query - Query database
```

**Website:** https://developers.notion.com

---

### 5.4 Airtable API
**Purpose:** Database/spreadsheet automation
**Pricing:** Free tier + paid
**Auth:** API Key / OAuth 2.0

**Endpoints:**
```
GET /v0/{baseId}/{tableName} - List records
POST /v0/{baseId}/{tableName} - Create record
```

**Website:** https://airtable.com/api

---

### 5.5 Zapier API
**Purpose:** Workflow automation
**Pricing:** Free tier + paid
**Auth:** API Key

**Endpoints:**
```
POST /v1/zaps/{zap_id}/runs - Trigger zap
GET /v1/zaps - List zaps
```

**Website:** https://zapier.com/developer

---

### 5.6 Calendly API
**Purpose:** Meeting scheduling
**Pricing:** Free tier + paid
**Auth:** OAuth 2.0 / API Key

**Endpoints:**
```
GET /v2/event_types - List event types
POST /v2/scheduled_events - Schedule event
GET /v2/users/me - Get user info
```

**Website:** https://developer.calendly.com

---

### 5.7 Dropbox API
**Purpose:** File storage and sharing
**Pricing:** Free tier + paid
**Auth:** OAuth 2.0

**Endpoints:**
```
POST /2/files/upload - Upload file
POST /2/files/download - Download file
POST /2/files/list_folder - List folder
```

**Website:** https://www.dropbox.com/developers

---

### 5.8 Google Drive API
**Purpose:** Google Drive file management
**Pricing:** Free (with quotas)
**Auth:** OAuth 2.0

**Endpoints:**
```
GET /drive/v3/files - List files
POST /drive/v3/files - Create file
POST /drive/v3/files/{fileId}/copy - Copy file
```

**Website:** https://developers.google.com/drive

---

## 6. Data & Analytics APIs

### 6.1 Google Analytics Data API
**Purpose:** GA4 analytics data
**Pricing:** Free
**Auth:** OAuth 2.0

**Endpoints:**
```
POST /v4/reports:runReport - Run report
POST /v4/reports:batchRun - Batch reports
```

**Website:** https://developers.google.com/analytics

---

### 6.2 Mixpanel API
**Purpose:** Product analytics
**Pricing:** Free tier + paid
**Auth:** API Secret

**Endpoints:**
```
GET /api/2.0/export/engage - Export data
GET /api/2.0/events - Query events
```

**Website:** https://developer.mixpanel.com

---

### 6.3 Amplitude API
**Purpose:** Product analytics
**Pricing:** Free tier + paid
**Auth:** API Key

**Endpoints:**
```
GET /api/3/export - Export data
POST /api/3/behavioral-maps - Get behavioral maps
```

**Website:** https://www.docs.developers.amplitude.com

---

### 6.4 Segment API
**Purpose:** Customer data platform
**Pricing:** Free tier + paid
**Auth:** API Key

**Endpoints:**
```
POST /v1/track - Track event
POST /v1/identify - Identify user
GET /v1/sources - List sources
```

**Website:** https://segment.com/docs/api

---

### 6.5 Snowflake API
**Purpose:** Data warehouse
**Pricing:** Pay-per-use
**Auth:** API Key / OAuth

**Endpoints:**
```
POST /api/v2/statements - Execute SQL
GET /api/v2/statements/{id} - Get statement result
```

**Website:** https://docs.snowflake.com/en/developer-guide/sql-rest-api

---

### 6.6 Databricks API
**Purpose:** Data analytics platform
**Pricing:** Pay-per-use
**Auth:** Personal Access Token

**Endpoints:**
```
POST /api/2.0/sql/statements/ - Execute SQL
GET /api/2.0/sql/statements/{id} - Get result
```

**Website:** https://docs.databricks.com/api

---

## 7. Payment & E-commerce APIs

### 7.1 Stripe API
**Purpose:** Payment processing
**Pricing:** 2.9% + 30¢ per transaction
**Auth:** API Key

**Endpoints:**
```
POST /v1/charges - Create charge
POST /v1/customers - Create customer
POST /v1/payment_intents - Create payment intent
GET /v1/balance - Get balance
```

**Website:** https://stripe.com/docs/api

---

### 7.2 PayPal API
**Purpose:** Payment processing
**Pricing:** Variable (2.9% + 30¢ typical)
**Auth:** OAuth 2.0

**Endpoints:**
```
POST /v2/checkout/orders - Create order
POST /v2/checkout/orders/{id}/capture - Capture payment
```

**Website:** https://developer.paypal.com

---

### 7.3 Square API
**Purpose:** Payment processing and POS
**Pricing:** Variable
**Auth:** OAuth 2.0 / Access Token

**Endpoints:**
```
POST /v2/payments - Create payment
POST /v2/customers - Create customer
GET /v2/locations - List locations
```

**Website:** https://developer.squareup.com

---

### 7.4 Shopify API
**Purpose:** E-commerce platform
**Pricing:** Included with Shopify plan
**Auth:** OAuth 2.0 / API Key

**Endpoints:**
```
GET /admin/api/2024-01/products.json - List products
POST /admin/api/2024-01/orders.json - Create order
GET /admin/api/2024-01/customers.json - List customers
```

**Website:** https://shopify.dev/api

---

### 7.5 WooCommerce REST API
**Purpose:** WordPress e-commerce
**Pricing:** Free (self-hosted)
**Auth:** OAuth 1.0a / API Keys

**Endpoints:**
```
GET /wp-json/wc/v3/products - List products
POST /wp-json/wc/v3/orders - Create order
```

**Website:** https://woocommerce.github.io/woocommerce-rest-api-docs

---

## 8. Cloud & Storage APIs

### 8.1 AWS S3 API
**Purpose:** Object storage
**Pricing:** Pay-per-use
**Auth:** IAM Credentials

**Endpoints:**
```
PUT /{bucket}/{key} - Upload object
GET /{bucket}/{key} - Download object
DELETE /{bucket}/{key} - Delete object
```

**Website:** https://docs.aws.amazon.com/s3

---

### 8.2 Google Cloud Storage API
**Purpose:** Object storage
**Pricing:** Pay-per-use
**Auth:** OAuth 2.0 / Service Account

**Endpoints:**
```
POST /upload/storage/v1/b/{bucket}/o - Upload object
GET /storage/v1/b/{bucket}/o/{object} - Get object
```

**Website:** https://cloud.google.com/storage/docs/json_api

---

### 8.3 Azure Blob Storage API
**Purpose:** Object storage
**Pricing:** Pay-per-use
**Auth:** Shared Key / SAS Token

**Endpoints:**
```
PUT /{container}/{blob} - Upload blob
GET /{container}/{blob} - Download blob
```

**Website:** https://docs.microsoft.com/rest/api/storageservices/blob-service-rest-api

---

### 8.4 Cloudflare API
**Purpose:** CDN, DNS, security
**Pricing:** Free tier + paid
**Auth:** API Token

**Endpoints:**
```
GET /client/v4/zones - List zones
POST /client/v4/zones/{id}/dns_records - Create DNS record
```

**Website:** https://api.cloudflare.com

---

## 9. Media & Content APIs

### 9.1 Unsplash API
**Purpose:** Stock photos
**Pricing:** Free
**Auth:** OAuth 2.0 / Application ID

**Endpoints:**
```
GET /photos - List photos
GET /photos/{id} - Get photo
GET /search/photos - Search photos
```

**Website:** https://unsplash.com/developers

---

### 9.2 Pexels API
**Purpose:** Stock photos and videos
**Pricing:** Free
**Auth:** API Key

**Endpoints:**
```
GET /v1/search - Search photos
GET /v1/photos/{id} - Get photo
GET /v1/videos/search - Search videos
```

**Website:** https://www.pexels.com/api

---

### 9.3 Giphy API
**Purpose:** GIF search and sharing
**Pricing:** Free (with limits)
**Auth:** API Key

**Endpoints:**
```
GET /gifs/search - Search GIFs
GET /gifs/trending - Get trending GIFs
GET /gifs/{gif_id} - Get GIF
```

**Website:** https://developers.giphy.com

---

### 9.4 Cloudinary API
**Purpose:** Image/video management
**Pricing:** Free tier + paid
**Auth:** API Key + Secret

**Endpoints:**
```
POST /image/upload - Upload image
POST /video/upload - Upload video
DELETE /resources/{type}/{public_id} - Delete resource
```

**Website:** https://cloudinary.com/documentation

---

### 9.5 Vimeo API
**Purpose:** Video hosting and playback
**Pricing:** Free tier + paid
**Auth:** OAuth 2.0

**Endpoints:**
```
GET /videos - List videos
POST /videos - Upload video
PATCH /videos/{video_id} - Update video
```

**Website:** https://developer.vimeo.com

---

### 9.6 Spotify API
**Purpose:** Music streaming data
**Pricing:** Free
**Auth:** OAuth 2.0

**Endpoints:**
```
GET /v1/tracks/{id} - Get track
GET /v1/artists/{id} - Get artist
GET /v1/search - Search music
```

**Website:** https://developer.spotify.com

---

## 10. Developer Tools APIs

### 10.1 GitHub API
**Purpose:** GitHub repository management
**Pricing:** Free (with rate limits)
**Auth:** OAuth 2.0 / Personal Access Token

**Endpoints:**
```
GET /repos/{owner}/{repo} - Get repo
POST /repos/{owner}/{repo}/issues - Create issue
GET /search/repositories - Search repos
```

**Website:** https://docs.github.com/rest

---

### 10.2 GitLab API
**Purpose:** GitLab repository management
**Pricing:** Free (self-hosted) + paid
**Auth:** Private Token / OAuth 2.0

**Endpoints:**
```
GET /api/v4/projects - List projects
POST /api/v4/projects/{id}/issues - Create issue
```

**Website:** https://docs.gitlab.com/ee/api

---

### 10.3 Jira API
**Purpose:** Issue tracking
**Pricing:** Free tier + paid
**Auth:** Basic Auth / OAuth 2.0

**Endpoints:**
```
GET /rest/api/3/issue/{issueIdOrKey} - Get issue
POST /rest/api/3/issue - Create issue
```

**Website:** https://developer.atlassian.com/cloud/jira-platform

---

### 10.4 Trello API
**Purpose:** Project management
**Pricing:** Free + paid
**Auth:** API Key + Token

**Endpoints:**
```
GET /1/boards/{id} - Get board
POST /1/cards - Create card
GET /1/members/me - Get member
```

**Website:** https://developer.atlassian.com/cloud/trello

---

### 10.5 PagerDuty API
**Purpose:** Incident management
**Pricing:** Free tier + paid
**Auth:** API Token

**Endpoints:**
```
GET /incidents - List incidents
POST /incidents - Create incident
```

**Website:** https://developer.pagerduty.com

---

### 10.6 Sentry API
**Purpose:** Error tracking
**Pricing:** Free tier + paid
**Auth:** Auth Token

**Endpoints:**
```
GET /api/0/organizations/{org}/issues/ - List issues
GET /api/0/projects/{org}/{project}/releases/ - List releases
```

**Website:** https://docs.sentry.io/api

---

## Quick Reference: Authentication Methods

### API Key
```python
headers = {"Authorization": "Bearer YOUR_API_KEY"}
# or
headers = {"X-API-Key": "YOUR_API_KEY"}
```

### OAuth 2.0
```python
# Get token
token_response = requests.post(token_url, data={
    "grant_type": "client_credentials",
    "client_id": CLIENT_ID,
    "client_secret": CLIENT_SECRET
})
access_token = token_response.json()["access_token"]

# Use token
headers = {"Authorization": f"Bearer {access_token}"}
```

### Basic Auth
```python
from requests.auth import HTTPBasicAuth
response = requests.get(url, auth=HTTPBasicAuth(username, password))
```

---

## Rate Limiting Best Practices

1. **Implement exponential backoff**
```python
import time
def request_with_backoff(url, max_retries=5):
    for attempt in range(max_retries):
        response = requests.get(url)
        if response.status_code == 429:
            wait_time = (2 ** attempt) + random.random()
            time.sleep(wait_time)
        else:
            return response
```

2. **Track rate limits**
```python
remaining = int(response.headers.get('X-RateLimit-Remaining', 0))
reset_time = int(response.headers.get('X-RateLimit-Reset', 0))
```

3. **Use caching**
```python
from functools import lru_cache
@lru_cache(maxsize=1000)
def cached_api_call(param):
    return api_call(param)
```

---

## API Security Best Practices

1. **Never commit API keys** - Use environment variables
2. **Rotate keys regularly** - Set calendar reminders
3. **Use minimal scopes** - Request only needed permissions
4. **Implement rate limiting** - Protect against abuse
5. **Log API usage** - Monitor for anomalies
6. **Use HTTPS only** - Encrypt all requests

---

## Cost Optimization Tips

1. **Use free tiers wisely** - Many APIs offer generous free tiers
2. **Cache responses** - Reduce duplicate API calls
3. **Batch requests** - When APIs support it
4. **Monitor usage** - Set up alerts for spending
5. **Choose appropriate tier** - Match plan to usage patterns

---

## Resources

- **API Directories:**
  - https://www.programmableweb.com
  - https://rapidapi.com
  - https://apis.guru

- **API Testing Tools:**
  - Postman
  - Insomnia
  - curl

- **API Documentation Standards:**
  - OpenAPI/Swagger
  - RAML
  - API Blueprint

---

**End of API Cheat Sheet**
