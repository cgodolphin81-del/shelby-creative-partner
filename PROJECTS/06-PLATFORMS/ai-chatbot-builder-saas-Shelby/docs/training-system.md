# ChatFlow AI - Training System

## Overview

ChatFlow AI's training system enables businesses to create intelligent, accurate chatbots without ML expertise. Train your bot on your business knowledge using multiple methods, with continuous improvement based on real conversations.

---

## Training Methods

### 1. 🌐 URL Scraping

**Best for**: Websites, documentation, help centers, blogs

#### How It Works

1. User provides URL(s)
2. System crawls site (respects robots.txt)
3. Extracts main content (removes nav, footer, ads)
4. Chunks into semantic segments
5. Generates embeddings
6. Stores in vector database

#### Configuration

```json
{
  "url": "https://example.com/docs",
  "crawl_depth": 3,
  "max_pages": 100,
  "exclude_patterns": [
    "/blog/*",
    "/careers/*",
    "/?*"
  ],
  "include_patterns": [
    "/docs/*",
    "/help/*"
  ],
  "respect_robots_txt": true
}
```

#### Crawl Depth

| Depth | Pages (typical) | Use Case |
|-------|-----------------|----------|
| 1 | 5-20 | Single page, landing page |
| 2 | 20-50 | Small site, help center |
| 3 | 50-200 | Medium site, documentation |
| 4 | 200-500 | Large site, full knowledge base |
| 5 | 500+ | Enterprise documentation |

#### Content Extraction

**HTML Processing**:
```python
def extract_content(html):
    # Remove unwanted elements
    soup = BeautifulSoup(html, 'html.parser')
    
    for element in soup(['nav', 'footer', 'header', 'aside']):
        element.decompose()
    
    # Extract main content
    main = soup.find('main') or soup.find('article') or soup.body
    text = main.get_text(separator=' ', strip=True)
    
    # Clean text
    text = re.sub(r'\s+', ' ', text)
    text = re.sub(r'[^\w\s.,!?-]', '', text)
    
    return text
```

#### Example

**Input**: `https://help.chatflow.ai/getting-started`

**Extracted Content**:
```
Getting Started with ChatFlow AI

Welcome to ChatFlow AI! This guide will help you set up 
your first chatbot in under 15 minutes.

Step 1: Create Your Bot
Click "New Bot" in the dashboard. Give it a name and 
select your primary use case (support, sales, or both).

Step 2: Train Your Bot
Add your website URL or upload documents. Our AI will 
learn from your content automatically.

Step 3: Customize
Adjust your bot's personality, tone, and response style.

Step 4: Deploy
Add the widget to your website or connect your channels.
```

**Chunks Created**: 4 (one per step)  
**Embeddings Generated**: 4 vectors  
**Searchable**: Yes

---

### 2. 📄 Document Upload

**Best for**: PDFs, manuals, policies, training materials, product specs

#### Supported Formats

| Format | Max Size | Processing |
|--------|----------|------------|
| PDF | 50MB | Text extraction + OCR |
| DOCX | 50MB | Native text |
| TXT | 10MB | Direct |
| MD | 10MB | Direct |
| CSV | 20MB | Row-by-row |
| XLSX | 20MB | Sheet-by-sheet |
| PPTX | 50MB | Slide-by-slide |

#### Processing Pipeline

```
Upload → Virus Scan → Text Extraction → Chunking → 
Embedding → Vector Store → Index Update
```

#### Text Extraction

**PDF**:
```python
def extract_pdf(file):
    # Try native text first
    text = pdfplumber.open(file).text
    
    # If no text, use OCR
    if not text.strip():
        images = pdf2image.convert_from_path(file)
        text = pytesseract.image_to_string(images[0])
    
    return text
```

**DOCX**:
```python
def extract_docx(file):
    doc = docx.Document(file)
    paragraphs = [p.text for p in doc.paragraphs if p.text.strip()]
    return '\n\n'.join(paragraphs)
```

#### Chunking Strategy

**Optimal Chunk Size**: 500 tokens (~400 words)  
**Overlap**: 50 tokens (~40 words)

**Why?**:
- Large enough for context
- Small enough for precise retrieval
- Overlap ensures no lost information

```python
def chunk_text(text, chunk_size=500, overlap=50):
    tokens = tokenize(text)
    chunks = []
    
    for i in range(0, len(tokens), chunk_size - overlap):
        chunk = tokens[i:i + chunk_size]
        chunks.append({
            "text": detokenize(chunk),
            "start": i,
            "end": i + len(chunk)
        })
    
    return chunks
```

#### Example

**Uploaded File**: `product-manual.pdf` (45 pages)

**Processing**:
- Pages: 45
- Text extracted: 18,500 words
- Chunks created: 47
- Embeddings: 47 vectors
- Processing time: 23 seconds

---

### 3. ❓ Q&A Pairs

**Best for**: FAQs, common questions, specific answers, edge cases

#### Manual Creation

**Single Q&A**:
```json
{
  "question": "What is your refund policy?",
  "answer": "We offer a 30-day money-back guarantee. If you're not satisfied for any reason, contact support within 30 days of purchase for a full refund.",
  "variations": [
    "Can I get a refund?",
    "Do you have a money-back guarantee?",
    "What if I'm not satisfied?",
    "How long do I have to return?"
  ],
  "category": "billing",
  "tags": ["refund", "guarantee", "policy"]
}
```

#### Bulk Import (CSV)

**Format**:
```csv
question,answer,variations,category
"What is your refund policy?","We offer a 30-day money-back guarantee...","Can I get a refund?|Do you have a guarantee?",billing
"What are your hours?","We're available 24/7 via chat...","When are you open?|Support hours?",support
```

#### AI-Generated Q&A

**From Documents**:
```python
def generate_qa_from_document(text):
    prompt = f"""
    Based on this document, generate 10 likely customer questions
    and their answers:
    
    {text}
    
    Format: JSON array with question, answer, variations
    """
    
    response = llm.generate(prompt)
    return parse_qa_json(response)
```

**Example Output**:
```json
[
  {
    "question": "How do I reset my password?",
    "answer": "Go to Settings → Security → Reset Password. Enter your email and we'll send a reset link.",
    "variations": [
      "I forgot my password",
      "Can't log in",
      "Password reset"
    ]
  }
]
```

#### Q&A Quality Guidelines

**Good Questions**:
- Natural language (how customers actually ask)
- Specific and clear
- Include variations (different phrasings)

**Good Answers**:
- Direct and concise (2-4 sentences)
- Include actionable steps
- Link to detailed docs if needed
- Avoid jargon

**Example Comparison**:

❌ **Bad**:
```
Q: "Refunds?"
A: "See policy."
```

✅ **Good**:
```
Q: "What is your refund policy?"
A: "We offer a 30-day money-back guarantee. 
    Contact support@chatflow.ai within 30 days 
    of purchase for a full refund. No questions asked."
```

---

### 4. 🔗 API Integration

**Best for**: Dynamic content, existing knowledge bases, real-time data

#### Supported Sources

| Source | Type | Sync |
|--------|------|------|
| Notion | Knowledge base | Real-time |
| Confluence | Documentation | Hourly |
| Zendesk | Help articles | Hourly |
| Guru | Knowledge cards | Real-time |
| GitBook | Documentation | On publish |
| Custom API | Any | Configurable |

#### Notion Integration Example

```python
def sync_notion(database_id):
    # Fetch all pages
    pages = notion.databases.query(database_id=database_id)
    
    for page in pages:
        # Extract content
        content = notion.pages.retrieve(page.id)
        text = extract_notion_blocks(content)
        
        # Update knowledge base
        update_knowledge(
            source_id=page.id,
            text=text,
            metadata={
                "title": page.properties["Name"]["title"],
                "url": page.url,
                "last_edited": page.last_edited_time
            }
        )
```

#### Sync Frequency

| Source | Default | Configurable Range |
|--------|---------|-------------------|
| Notion | Real-time (webhooks) | N/A |
| Confluence | 1 hour | 15 min - 24 hours |
| Zendesk | 1 hour | 15 min - 24 hours |
| Guru | Real-time (webhooks) | N/A |
| Custom API | 1 hour | 5 min - 24 hours |

---

## Knowledge Management

### Chunking & Embeddings

#### Embedding Model

**Default**: OpenAI Ada-002  
**Dimensions**: 1536  
**Alternatives**:
- HuggingFace all-MiniLM-L6-v2 (faster, cheaper)
- Cohere Embed v3 (multilingual)
- Custom fine-tuned (Enterprise)

#### Vector Storage

**Database**: Pinecone  
**Index**: chatflow-knowledge  
**Namespaces**: One per bot (`bot_{id}`)

**Storage Structure**:
```json
{
  "id": "chunk_abc123",
  "values": [0.023, -0.014, 0.089, ...],  // 1536 dimensions
  "metadata": {
    "text": "We offer a 30-day money-back guarantee...",
    "source_type": "document",
    "source_id": "doc_456",
    "chunk_index": 3,
    "total_chunks": 47,
    "filename": "refund-policy.pdf",
    "last_updated": "2026-03-23T10:00:00Z"
  }
}
```

### Retrieval (RAG)

#### Query Processing

```python
def retrieve_knowledge(query, bot_id, top_k=5):
    # Generate query embedding
    query_embedding = openai.Embedding.create(
        model="text-embedding-ada-002",
        input=query
    )
    
    # Search vector DB
    results = pinecone.index.query(
        namespace=f"bot_{bot_id}",
        vector=query_embedding,
        top_k=top_k,
        include_metadata=True
    )
    
    # Format for LLM
    context = "\n\n".join([
        f"Source: {r.metadata['source']}\n{r.metadata['text']}"
        for r in results.matches
    ])
    
    return context
```

#### Response Generation

```python
def generate_response(query, context, bot_config):
    prompt = f"""
    You are a helpful assistant for {bot_config.company_name}.
    
    Use the following context to answer the question.
    If the answer isn't in the context, say you don't know
    and offer to connect them with a human.
    
    Context:
    {context}
    
    Question: {query}
    
    Answer:
    """
    
    response = llm.generate(
        model=bot_config.model,
        prompt=prompt,
        temperature=bot_config.temperature,
        max_tokens=bot_config.max_tokens
    )
    
    return response
```

### Confidence Scoring

**How It Works**:
1. Retrieve top-k relevant chunks
2. Calculate similarity scores
3. If max score < threshold, flag as low confidence

**Thresholds**:
- >0.85: High confidence (answer directly)
- 0.60-0.85: Medium confidence (answer with caveat)
- <0.60: Low confidence (escalate to human)

**Example**:
```
User: "What's your enterprise pricing?"

Bot: [Searches knowledge, finds no enterprise pricing info]
Bot: "I don't have specific enterprise pricing details 
      in my knowledge base. Let me connect you with 
      our sales team who can provide a custom quote."

[Triggers handoff]
```

---

## Training Dashboard

### Overview

**URL**: `app.chatflow.ai/bots/{id}/training`

**Sections**:
1. Sources (URLs, documents, Q&A)
2. Knowledge Base (all chunks)
3. Analytics (what's being used)
4. Gaps (what's missing)

### Sources View

```
┌─────────────────────────────────────────────────┐
│ Training Sources                                │
├─────────────────────────────────────────────────┤
│                                                 │
│ 🌐 URLs (5)                                     │
│   • https://example.com/docs (100% complete)   │
│   • https://example.com/help (100% complete)   │
│   • https://example.com/faq (100% complete)    │
│   • https://example.com/pricing (100% complete)│
│   • https://example.com/about (100% complete)  │
│                                                 │
│ 📄 Documents (3)                                │
│   • product-manual.pdf (47 chunks)             │
│   • refund-policy.pdf (5 chunks)               │
│   • onboarding-guide.docx (23 chunks)          │
│                                                 │
│ ❓ Q&A Pairs (25)                               │
│   • Billing (8)                                 │
│   • Support (10)                                │
│   • Technical (7)                               │
│                                                 │
│ [+ Add URL] [+ Upload Document] [+ Add Q&A]    │
└─────────────────────────────────────────────────┘
```

### Knowledge Base View

**Search**: Find any chunk in your knowledge base

**Filters**:
- Source type (URL, document, Q&A)
- Date added
- Usage count

**Actions**:
- Edit chunk text
- Delete chunk
- View source
- See conversation usage

### Analytics View

**Top Used Chunks**:
```
1. "What is your refund policy?" - 342 uses
2. "How do I reset my password?" - 287 uses
3. "What are your pricing plans?" - 256 uses
4. "How do I contact support?" - 198 uses
5. "Do you offer discounts?" - 167 uses
```

**Unused Content**:
```
• about-us-page (0 uses in 30 days)
• team-bios.pdf (0 uses in 30 days)
• [Consider removing to reduce noise]
```

### Gap Analysis

**Missing Topics** (based on unanswered questions):
```
⚠️ Users are asking about these topics, but no 
   relevant content was found:

1. "Do you have an API?" - asked 47 times
   → Suggestion: Add API documentation

2. "What's your uptime SLA?" - asked 23 times
   → Suggestion: Add SLA information

3. "Can I export my data?" - asked 18 times
   → Suggestion: Add data export guide

[+ Create Q&A for these topics]
```

---

## Continuous Improvement

### Learning from Conversations

#### Auto-Suggestions

After each conversation, the system analyzes:
1. Was the user satisfied? (explicit rating or sentiment)
2. Did the bot answer correctly? (confidence + resolution)
3. Was there a handoff? (why?)

**Suggestion Types**:

**Add New Q&A**:
```
💡 Suggestion: Create Q&A pair

Question: "Do you integrate with Salesforce?"
Answer: "Yes! We have a native Salesforce integration 
         that syncs contacts, leads, and activities. 
         Available on Business plan and above."

Reason: Asked 15 times this week, 3 handoffs triggered
Confidence: 0.92 (based on similar conversations)

[Create Q&A] [Ignore]
```

**Update Existing Content**:
```
💡 Suggestion: Update existing Q&A

Current: "We offer email support"
Suggested: "We offer email support (24-hour response) 
            and chat support (instant) on Pro+ plans"

Reason: Users keep asking about response times
Evidence: 12 conversations with follow-up questions

[Update] [Ignore]
```

**Add New Document**:
```
💡 Suggestion: Upload documentation

Topic: API Integration Guide
Reason: 47 users asked about API this month
        23 handoffs to sales for API questions
        Competitors have detailed API docs

[Upload Document] [Create Q&A instead] [Ignore]
```

### A/B Testing

**Test Different Answers**:
```
Variant A: "We offer a 30-day money-back guarantee."
Variant B: "Not satisfied? Get a full refund within 30 days, no questions asked."

Test: Show each variant to 50% of users
Metric: Resolution rate (did user ask follow-up?)

Result after 1 week:
• Variant A: 78% resolution
• Variant B: 91% resolution ← Winner

[Variant B is now default]
```

### Feedback Loop

**User Feedback Collection**:
```
Bot: "Was this helpful?"
     [👍 Yes] [👎 No]

If 👎:
Bot: "What was missing?
      • Answer was incorrect
      • Answer was incomplete
      • I needed a human
      • Other"
```

**Feedback Analytics**:
- Thumbs up/down rate
- Common reasons for thumbs down
- Topics with low satisfaction
- Handoff reasons

---

## Training Best Practices

### 1. Start with High-Impact Content

**Priority Order**:
1. FAQ page (most common questions)
2. Pricing page (sales inquiries)
3. Help documentation (support questions)
4. Product manuals (technical questions)
5. About/contact pages (general info)

### 2. Use Multiple Training Methods

**Recommended Mix**:
- 60% URL scraping (website content)
- 25% Q&A pairs (specific questions)
- 15% Documents (detailed guides)

### 3. Write for Natural Language

**Instead of**:
```
Q: "Refund policy?"
A: "30 days."
```

**Write**:
```
Q: "What is your refund policy?"
A: "We offer a 30-day money-back guarantee. If you're 
    not satisfied for any reason, contact us within 
    30 days of purchase for a full refund."
```

### 4. Include Variations

Customers ask the same question many ways:

**Question**: "How do I reset my password?"

**Variations**:
- "I forgot my password"
- "Can't log in"
- "Password reset"
- "Locked out of my account"
- "How do I change my password?"

### 5. Update Regularly

**Monthly Review**:
- Check gap analysis
- Review low-confidence responses
- Add new Q&A for common questions
- Remove outdated content

**Quarterly Audit**:
- Review all training sources
- Update pricing/product info
- Remove unused content
- Re-train with latest data

---

## Training Limits by Plan

| Feature | Starter | Pro | Business | Enterprise |
|---------|---------|-----|----------|------------|
| URL sources | 10 | 100 | 500 | Unlimited |
| Max crawl depth | 2 | 3 | 4 | 5 |
| Document uploads | 5 | 25 | Unlimited | Unlimited |
| Max file size | 10MB | 25MB | 50MB | 100MB |
| Q&A pairs | 25 | 100 | 500 | Unlimited |
| API integrations | ❌ | 2 | 5 | Unlimited |
| Auto-suggestions | ❌ | ✅ | ✅ | ✅ |
| A/B testing | ❌ | ❌ | ✅ | ✅ |
| Custom embeddings | ❌ | ❌ | ❌ | ✅ |

---

*Last Updated: March 2026*
