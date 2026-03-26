# Categorization System

## Overview
This document defines the categorization taxonomy for the Free AI API Database. Use these categories for filtering, searching, and organizing APIs in Notion or any database system.

---

## Primary Categories

### 1. TEXT (Natural Language Processing)
**Icon:** 📝
**Description:** APIs for text generation, analysis, translation, and language understanding

**Subcategories:**
- `text/llm` - Large Language Models (GPT, Claude, Gemini, etc.)
- `text/embeddings` - Text vectorization and embeddings
- `text/translation` - Language translation services
- `text/summarization` - Text summarization APIs
- `text/classification` - Text classification and sentiment analysis
- `text/extraction` - Named entity recognition, keyword extraction

**APIs in this category:**
OpenAI API, Anthropic Claude, Google Gemini, Hugging Face Inference, Cohere API, Mistral AI, Groq API, Together AI, Perplexity API, DeepSeek API

---

### 2. IMAGE (Computer Vision & Generation)
**Icon:** 🖼️
**Description:** APIs for image generation, editing, analysis, and processing

**Subcategories:**
- `image/generation` - Text-to-image generation
- `image/editing` - Image manipulation and enhancement
- `image/recognition` - Object detection, facial recognition
- `image/ocr` - Optical character recognition
- `image/background` - Background removal and replacement
- `image/stock` - Stock photo and media APIs

**APIs in this category:**
Stability AI, DALL-E 3, Leonardo AI, Replicate API, Clipdrop API, Remove.bg, DeepAI, Imgix, Cloudinary, Midjourney, Adobe Firefly, Canva API, Figma API, Unsplash API, Pexels API, Google Vision API, Azure Computer Vision, AWS Rekognition

---

### 3. AUDIO (Speech & Sound)
**Icon:** 🎵
**Description:** APIs for speech-to-text, text-to-speech, and audio processing

**Subcategories:**
- `audio/tts` - Text-to-speech synthesis
- `audio/stt` - Speech-to-text transcription
- `audio/voice` - Voice cloning and custom voices
- `audio/music` - Music generation and processing
- `audio/analysis` - Audio analysis and classification

**APIs in this category:**
ElevenLabs, Murf AI, PlayHT, AssemblyAI, Deepgram, Whisper API, Rev AI, Azure Speech, Google Cloud TTS, Amazon Polly, Coqui TTS

---

### 4. VIDEO (Video Generation & Processing)
**Icon:** 🎬
**Description:** APIs for video generation, editing, and analysis

**Subcategories:**
- `video/generation` - Text-to-video generation
- `video/editing` - Video editing and manipulation
- `video/avatars` - AI avatar and talking head generation
- `video/captions` - Auto-captioning and subtitles
- `video/analysis` - Video content analysis

**APIs in this category:**
Runway ML, Pika Labs, HeyGen, D-ID, Synthesia, Luma Dream Machine, Kaiber, Captions API, FFmpeg.wasm, Shotstack

---

### 5. CODE (Developer Tools)
**Icon:** 💻
**Description:** APIs and tools for code generation, completion, and analysis

**Subcategories:**
- `code/completion` - AI code completion
- `code/generation` - Code generation from prompts
- `code/debugging` - Bug detection and fixing
- `code/search` - Code search and navigation
- `code/review` - Code review and analysis
- `code/frameworks` - LLM application frameworks

**APIs in this category:**
Replit Ghostwriter, GitHub Copilot, Amazon CodeWhisperer, Tabnine, Sourcegraph Cody, Codeium, Blackbox AI, Phind, Sweep AI, Cursor, LangChain, LlamaIndex

---

### 6. AUTOMATION (Workflow & Integration)
**Icon:** ⚡
**Description:** APIs for workflow automation, integrations, and business processes

**Subcategories:**
- `automation/workflow` - Workflow automation platforms
- `automation/integration` - App integration services
- `automation/database` - Database and spreadsheet APIs
- `automation/notification` - Notification and messaging APIs
- `automation/email` - Email delivery and management
- `automation/payment` - Payment processing APIs

**APIs in this category:**
Zapier AI, Make (Integromat), n8n, Pipedream, Bardeen, Airtable API, Notion API, Google Sheets API, Microsoft Graph API, Slack API, SendGrid API, Mailgun API, Resend, Postmark, Stripe API, PayPal API, Twilio API

---

### 7. DATA (Search & Information)
**Icon:** 🔍
**Description:** APIs for search, data retrieval, and information access

**Subcategories:**
- `data/search` - Search engine APIs
- `data/news` - News and content APIs
- `data/social` - Social media APIs
- `data/financial` - Financial and market data
- `data/crypto` - Cryptocurrency data
- `data/weather` - Weather and environmental data
- `data/maps` - Maps and location services

**APIs in this category:**
SerpAPI, Serper API, Brave Search API, DuckDuckGo API, Bing Search API, NewsAPI, Guardian API, New York Times API, Reddit API, Twitter API v2, LinkedIn API, CoinGecko API, CoinMarketCap API, Alpha Vantage, Finnhub, WeatherAPI, OpenWeatherMap, Mapbox API, Google Maps API

---

### 8. VECTOR (Embeddings & Search)
**Icon:** 🧮
**Description:** Vector databases and embedding services for AI applications

**Subcategories:**
- `vector/database` - Vector database services
- `vector/embeddings` - Embedding generation APIs
- `vector/search` - Similarity search services
- `vector/rag` - RAG (Retrieval-Augmented Generation) platforms

**APIs in this category:**
Vectorize, Pinecone, Weaviate, Qdrant, Milvus, Chroma, Voyage AI, Jina AI

---

### 9. INFRASTRUCTURE (ML Hosting & Deployment)
**Icon:** 🖥️
**Description:** Platforms for hosting, deploying, and running ML models

**Subcategories:**
- `infra/hosting` - Model hosting platforms
- `infra/inference` - Inference API services
- `infra/gpu` - GPU cloud services
- `infra/serverless` - Serverless ML platforms

**APIs in this category:**
Banana Dev, Hugging Face Spaces, Gradio, Modal, Beam, Replicate

---

### 10. COMMUNICATION (Messaging & Chat)
**Icon:** 💬
**Description:** APIs for building chatbots, messaging, and communication tools

**Subcategories:**
- `comm/chatbot` - Chatbot platforms
- `comm/messaging` - Messaging APIs
- `comm/voice` - Voice communication APIs
- `comm/social` - Social platform APIs

**APIs in this category:**
Discord API, Telegram Bot API, WhatsApp Business API, Slack API

---

## Tag System

### Pricing Tags
- `free` - Completely free API
- `freemium` - Free tier available with paid upgrades
- `trial` - Free trial only
- `pay-per-use` - Pay only for what you use
- `subscription` - Monthly/annual subscription required

### Authentication Tags
- `api-key` - Requires API key
- `oauth` - Requires OAuth authentication
- `none` - No authentication required
- `self-hosted` - Self-hosted, no external auth

### Status Tags
- `active` - Fully operational
- `beta` - In beta testing
- `deprecated` - Being phased out
- `limited` - Limited availability

### Use Case Tags
- `enterprise` - Suitable for enterprise use
- `startup` - Good for startups
- `hobby` - Good for hobby projects
- `production` - Production-ready
- `prototype` - Good for prototyping

---

## Notion Database Properties Setup

### Property Types for Notion

| Property Name | Type | Options/Format |
|--------------|------|----------------|
| Name | Title | Text |
| Category | Select | TEXT, IMAGE, AUDIO, VIDEO, CODE, AUTOMATION, DATA, VECTOR, INFRASTRUCTURE, COMMUNICATION |
| Subcategory | Multi-select | From subcategories above |
| Description | Text | 200 char limit |
| Endpoint | URL | API endpoint URL |
| Rate Limit | Text | e.g., "100 RPM", "1000/day" |
| Auth Type | Select | API Key, OAuth, None, Self-hosted |
| Pricing | Select | Free, Freemium, Trial, Pay-per-use, Subscription |
| Affiliate Link | URL | Affiliate/referral URL |
| Use Cases | Text | Comma-separated |
| Status | Select | Active, Beta, Deprecated, Limited |
| Tags | Multi-select | Custom tags |
| Added Date | Date | When API was added |
| Last Verified | Date | Last verification date |
| Documentation | URL | Link to API docs |
| Notes | Text | Additional notes |

---

## Filter Presets

### Quick Filters for Notion

**Free APIs Only:**
- Pricing = Free

**Freemium APIs:**
- Pricing = Freemium

**No Auth Required:**
- Auth Type = None

**Text APIs:**
- Category = TEXT

**Image Generation:**
- Category = IMAGE
- Subcategory contains "generation"

**Production Ready:**
- Status = Active
- Tags contains "production"

**High Rate Limits:**
- Rate Limit contains "1000" OR "Unlimited"

**With Affiliate Programs:**
- Affiliate Link is not empty

---

## Category Distribution

| Category | Count | Percentage |
|----------|-------|------------|
| TEXT | 10 | 8% |
| IMAGE | 18 | 14% |
| AUDIO | 11 | 9% |
| VIDEO | 10 | 8% |
| CODE | 12 | 10% |
| AUTOMATION | 25 | 20% |
| DATA | 19 | 15% |
| VECTOR | 8 | 6% |
| INFRASTRUCTURE | 6 | 5% |
| COMMUNICATION | 6 | 5% |
| **Total** | **125** | **100%** |

---

## Usage Guidelines

1. **Always assign a primary category** - Every API must have exactly one primary category
2. **Use subcategories for precision** - Add relevant subcategories for better filtering
3. **Update status regularly** - Mark APIs as deprecated when they're no longer available
4. **Verify rate limits** - Rate limits change frequently; verify monthly
5. **Track affiliate links** - Update affiliate links when programs change

---

*Last Updated: March 2026*
*Version: 1.0*
