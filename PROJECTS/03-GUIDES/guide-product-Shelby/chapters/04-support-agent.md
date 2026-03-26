# Chapter 4: Agent Blueprint #3 - Customer Support Agent

## Overview

A Customer Support Agent automates customer inquiries, provides instant responses, escalates complex issues, and maintains support ticket quality while improving response times and customer satisfaction.

## Agent Profile

**Name**: SupportBot
**Primary Function**: Automated customer support and ticket management
**Key Capabilities**: Query resolution, ticket routing, knowledge base search, sentiment analysis
**Ideal For**: E-commerce, SaaS companies, service businesses, startups

## Architecture

```
Customer Inquiry → Intent Classification → Knowledge Base Search → 
Response Generation → Sentiment Analysis → Escalation Decision → 
Ticket Creation/Update → Follow-up Scheduling
```

## Core Components

### 1. Multi-Channel Integration
- Email support
- Live chat
- Social media messages
- Help desk tickets
- SMS/WhatsApp

### 2. Intent Recognition
- Categorize inquiry type (billing, technical, general, complaint)
- Detect urgency and sentiment
- Identify product/service mentioned
- Recognize repeat customers

### 3. Knowledge Base Integration
- Search help articles and FAQs
- Retrieve product documentation
- Access troubleshooting guides
- Pull from past resolved tickets

### 4. Response Generation
- Provide accurate, helpful answers
- Match brand voice and tone
- Include relevant links and resources
- Offer next steps and alternatives

### 5. Escalation Management
- Identify when human intervention needed
- Route to appropriate team/agent
- Provide context and history
- Set priority levels

### 6. Ticket Management
- Create and update tickets
- Track resolution status
- Schedule follow-ups
- Maintain conversation history

## Setup Instructions

### Step 1: Environment Setup

```bash
mkdir support-agent && cd support-agent
python -m venv venv
source venv/bin/activate

pip install openai python-dotenv
pip install zendesk-sdk intercom-python
pip install textblob sentiment-analyzer
pip install requests beautifulsoup4
```

### Step 2: API Configuration

Create `.env`:
```env
OPENAI_API_KEY=your_openai_key
ZENDESK_API_KEY=your_zendesk_key
ZENDESK_SUBDOMAIN=your_subdomain
INTERCOM_TOKEN=your_intercom_token
SUPPORT_EMAIL=support@yourcompany.com
```

### Step 3: Core Agent Code

Create `support_agent.py`:

```python
import os
from dotenv import load_dotenv
from openai import OpenAI
from textblob import TextBlob
import re
from datetime import datetime, timedelta

load_dotenv()

class CustomerSupportAgent:
    def __init__(self):
        self.client = OpenAI()
        self.model = "gpt-4"
        
        # Load knowledge base
        self.knowledge_base = self.load_knowledge_base()
        
        # Support categories
        self.categories = [
            'billing', 'technical', 'account', 'shipping', 
            'returns', 'product_info', 'complaint', 'feature_request'
        ]
        
        # Escalation triggers
        self.escalation_keywords = [
            'speak to manager', 'complaint', 'lawsuit', 'refund immediately',
            'unacceptable', 'terrible service', 'cancel my account'
        ]
    
    def load_knowledge_base(self):
        """Load knowledge base from files or database"""
        # In production, load from database or CMS
        kb = {
            'billing': [
                {
                    'question': 'How do I update my payment method?',
                    'answer': 'You can update your payment method in Account Settings > Billing > Payment Methods. Click "Add Payment Method" or edit existing cards.',
                    'url': '/help/billing/payment-methods'
                },
                {
                    'question': 'Where can I find my invoices?',
                    'answer': 'Invoices are available in Account Settings > Billing > Invoice History. You can download PDF copies anytime.',
                    'url': '/help/billing/invoices'
                }
            ],
            'technical': [
                {
                    'question': 'How do I reset my password?',
                    'answer': 'Click "Forgot Password" on the login page. Enter your email and we\'ll send a reset link. Links expire after 24 hours.',
                    'url': '/help/account/password-reset'
                }
            ],
            'shipping': [
                {
                    'question': 'What are your shipping times?',
                    'answer': 'Standard shipping: 5-7 business days. Express: 2-3 business days. Overnight: Next business day. International: 10-21 business days.',
                    'url': '/help/shipping/delivery-times'
                }
            ]
        }
        return kb
    
    def classify_intent(self, message):
        """Classify customer intent and category"""
        
        prompt = f"""
        Classify this customer support inquiry:
        
        Message: "{message}"
        
        Provide JSON output with:
        {{
            "category": "billing|technical|account|shipping|returns|product_info|complaint|feature_request",
            "urgency": "low|medium|high|critical",
            "sentiment": "positive|neutral|frustrated|angry",
            "requires_human": true/false,
            "product_mentioned": "product name or null",
            "customer_type": "new|existing|vip",
            "summary": "one-line summary"
        }}
        """
        
        response = self.client.chat.completions.create(
            model=self.model,
            messages=[{"role": "user", "content": prompt}],
            response_format={"type": "json_object"}
        )
        
        import json
        return json.loads(response.choices[0].message.content)
    
    def search_knowledge_base(self, query, category=None):
        """Search knowledge base for relevant articles"""
        
        # Simple keyword search (in production, use vector search)
        results = []
        query_words = query.lower().split()
        
        if category and category in self.knowledge_base:
            articles = self.knowledge_base[category]
        else:
            articles = []
            for cat_articles in self.knowledge_base.values():
                articles.extend(cat_articles)
        
        for article in articles:
            score = 0
            article_text = f"{article['question']} {article['answer']}".lower()
            
            for word in query_words:
                if word in article_text:
                    score += 1
            
            if score > 0:
                results.append({**article, 'relevance_score': score})
        
        # Sort by relevance
        results.sort(key=lambda x: x['relevance_score'], reverse=True)
        return results[:3]  # Return top 3
    
    def generate_response(self, message, classification, kb_results):
        """Generate helpful response"""
        
        prompt = f"""
        Generate a customer support response with these parameters:
        
        Customer Message: "{message}"
        
        Classification:
        - Category: {classification['category']}
        - Urgency: {classification['urgency']}
        - Sentiment: {classification['sentiment']}
        
        Relevant Knowledge Base Articles:
        {kb_results}
        
        Response Guidelines:
        - Be empathetic and helpful
        - Match customer's sentiment (calm if they're frustrated)
        - Provide clear, actionable steps
        - Include relevant links
        - Keep it concise but complete
        - Use friendly, professional tone
        - Sign off with offer for further help
        
        Format the response naturally (no JSON).
        """
        
        response = self.client.chat.completions.create(
            model=self.model,
            messages=[{"role": "user", "content": prompt}],
            temperature=0.7
        )
        
        return response.choices[0].message.content
    
    def analyze_sentiment(self, text):
        """Analyze sentiment of customer message"""
        blob = TextBlob(text)
        polarity = blob.sentiment.polarity
        
        if polarity > 0.1:
            return 'positive'
        elif polarity < -0.1:
            return 'negative'
        else:
            return 'neutral'
    
    def should_escalate(self, message, classification):
        """Determine if ticket needs human escalation"""
        
        # Check for escalation keywords
        message_lower = message.lower()
        for keyword in self.escalation_keywords:
            if keyword in message_lower:
                return True, f"Contains escalation keyword: {keyword}"
        
        # Check classification
        if classification.get('requires_human'):
            return True, "AI classified as requiring human"
        
        if classification.get('urgency') == 'critical':
            return True, "Critical urgency level"
        
        if classification.get('sentiment') == 'angry':
            return True, "Customer is angry"
        
        return False, None
    
    def create_ticket(self, customer_email, message, classification, response):
        """Create support ticket in system"""
        
        ticket = {
            'id': f"TICKET-{datetime.now().strftime('%Y%m%d%H%M%S')}",
            'customer_email': customer_email,
            'subject': f"{classification['category'].title()}: {classification['summary']}",
            'message': message,
            'classification': classification,
            'response': response,
            'status': 'open',
            'priority': classification['urgency'],
            'created_at': datetime.now().isoformat(),
            'requires_escalation': classification.get('requires_human', False)
        }
        
        # In production, save to database or ticketing system
        print(f"Created ticket: {ticket['id']}")
        
        return ticket
    
    def handle_inquiry(self, customer_email, message):
        """Main inquiry handling workflow"""
        
        # Step 1: Classify intent
        classification = self.classify_intent(message)
        
        # Step 2: Search knowledge base
        kb_results = self.search_knowledge_base(
            message, 
            classification.get('category')
        )
        
        # Step 3: Generate response
        if kb_results:
            response = self.generate_response(message, classification, kb_results)
        else:
            response = self.generate_fallback_response(message, classification)
        
        # Step 4: Check for escalation
        escalate, reason = self.should_escalate(message, classification)
        
        # Step 5: Create ticket
        ticket = self.create_ticket(customer_email, message, classification, response)
        
        return {
            'ticket': ticket,
            'response': response,
            'escalate': escalate,
            'escalation_reason': reason,
            'classification': classification
        }
    
    def generate_fallback_response(self, message, classification):
        """Generate response when no KB article found"""
        
        prompt = f"""
        A customer asked about something not in our knowledge base.
        
        Question: "{message}"
        Category: {classification['category']}
        
        Generate a helpful response that:
        1. Acknowledges their question
        2. Explains you're gathering more information
        3. Sets expectation for follow-up
        4. Offers immediate alternatives if available
        5. Remains helpful and professional
        """
        
        response = self.client.chat.completions.create(
            model=self.model,
            messages=[{"role": "user", "content": prompt}],
            temperature=0.7
        )
        
        return response.choices[0].message.content
    
    def generate_follow_up(self, ticket_id, days_since_response=2):
        """Generate follow-up message for open tickets"""
        
        prompt = f"""
        Write a friendly follow-up message for support ticket {ticket_id}.
        
        Context:
        - It's been {days_since_response} days since last response
        - We want to check if the issue is resolved
        - Offer further assistance if needed
        - Keep it brief and friendly
        
        Tone: Helpful, not pushy
        """
        
        response = self.client.chat.completions.create(
            model=self.model,
            messages=[{"role": "user", "content": prompt}],
            temperature=0.7
        )
        
        return response.choices[0].message.content

# Usage Example
if __name__ == "__main__":
    agent = CustomerSupportAgent()
    
    # Simulate customer inquiry
    result = agent.handle_inquiry(
        customer_email="customer@example.com",
        message="I was charged twice for my subscription! This is unacceptable. I want a refund immediately!"
    )
    
    print("Response to customer:")
    print(result['response'])
    print(f"\nEscalation needed: {result['escalate']}")
    print(f"Reason: {result['escalation_reason']}")
    print(f"Ticket ID: {result['ticket']['id']}")
```

## Prompt Templates

### Standard Response Template
```
You are a helpful customer support agent for {company_name}.

Customer Inquiry: {inquiry}
Category: {category}
Sentiment: {sentiment}
Knowledge Base Articles: {kb_articles}

Response Requirements:
- Acknowledge the customer's concern
- Provide clear solution or information
- Include relevant links: {links}
- Offer additional assistance
- Sign off professionally
- Tone: {tone}
- Length: {length}
```

### Escalation Notice Template
```
This ticket requires human agent attention.

Ticket ID: {ticket_id}
Customer: {customer_email}
Issue: {summary}
Classification: {classification}
Reason for Escalation: {reason}
Customer Sentiment: {sentiment}
Urgency: {urgency}
Suggested Action: {action}
Previous AI Response: {ai_response}

Please review and respond within {sla_time}.
```

### Follow-up Template
```
Hi {customer_name},

Following up on your recent support request about {topic}.

Has this been resolved to your satisfaction? 

{if_yes: Great! Don't hesitate to reach out if you need anything else.}
{if_no: We're here to help. Please let us know what else we can do.}

Best regards,
{agent_name}
{company_name} Support Team
```

## Integration with Support Platforms

### Zendesk Integration
```python
from zendesk import Zendesk

class ZendeskIntegration:
    def __init__(self, subdomain, email, token):
        self.zd = Zendesk(subdomain, email, token)
    
    def create_ticket(self, ticket_data):
        ticket = self.zd.tickets.create({
            'subject': ticket_data['subject'],
            'comment': {
                'body': ticket_data['message'],
                'public': True
            },
            'requester': {
                'email': ticket_data['customer_email']
            },
            'tags': [ticket_data['classification']['category']]
        })
        return ticket
    
    def update_ticket(self, ticket_id, response):
        self.zd.tickets.update(ticket_id, {
            'comment': {
                'body': response,
                'public': True,
                'author_id': BOT_USER_ID
            },
            'status': 'pending'
        })
```

### Intercom Integration
```python
from intercom import Intercom

class IntercomIntegration:
    def __init__(self, token):
        self.client = Intercom(token=token)
    
    def send_message(self, user_id, message):
        self.client.messages.create(
            message_type='inapp',
            body=message,
            user_id=user_id
        )
    
    def get_conversation(self, conversation_id):
        return self.client.conversations.find(id=conversation_id)
```

## Advanced Features

### 1. Multi-Language Support
```python
def translate_response(self, response, target_language):
    """Translate response to customer's language"""
    
    prompt = f"""
    Translate the following customer support response to {target_language}:
    
    {response}
    
    Maintain:
    - Professional tone
    - Clarity and accuracy
    - Cultural appropriateness
    - Technical terms in original language if needed
    """
    
    translation = self.client.chat.completions.create(
        model=self.model,
        messages=[{"role": "user", "content": prompt}]
    )
    
    return translation.choices[0].message.content
```

### 2. Proactive Support
```python
def detect_proactive_opportunities(self, user_activity):
    """Identify opportunities for proactive support"""
    
    triggers = {
        'multiple_failed_logins': 'Offer password reset help',
        'checkout_abandonment': 'Offer checkout assistance',
        'feature_usage_drop': 'Offer training resources',
        'error_page_visits': 'Offer troubleshooting help'
    }
    
    opportunities = []
    for activity, count in user_activity.items():
        if activity in triggers and count > threshold:
            opportunities.append({
                'trigger': activity,
                'message': triggers[activity],
                'priority': 'medium'
            })
    
    return opportunities
```

### 3. Customer Satisfaction Prediction
```python
def predict_csat(self, conversation):
    """Predict customer satisfaction score"""
    
    prompt = f"""
    Predict customer satisfaction (1-5) for this support conversation:
    
    {conversation}
    
    Consider:
    - Issue resolution
    - Response time
    - Tone and empathy
    - Clarity of communication
    - Customer sentiment progression
    
    Output JSON: {{"predicted_csat": 1-5, "confidence": 0-1, "reasoning": "text"}}
    """
    
    prediction = self.client.chat.completions.create(
        model=self.model,
        messages=[{"role": "user", "content": prompt}],
        response_format={"type": "json_object"}
    )
    
    import json
    return json.loads(prediction.choices[0].message.content)
```

## Metrics and KPIs

Track these metrics:
- First Response Time (FRT)
- Average Resolution Time
- Customer Satisfaction (CSAT)
- Ticket Volume by Category
- Escalation Rate
- Resolution Rate (First Contact)
- Customer Effort Score
- Agent Utilization Rate

## Best Practices

### Response Quality
1. Always verify information before sending
2. Personalize responses when possible
3. Use customer's name appropriately
4. Match customer's communication style
5. Provide clear next steps

### Escalation Guidelines
1. Escalate angry or frustrated customers quickly
2. Flag complex technical issues for specialists
3. Route billing disputes to finance team
4. Escalate legal threats immediately
5. Transfer VIP customers to dedicated support

### Continuous Improvement
1. Review escalated tickets weekly
2. Update knowledge base from resolved tickets
3. Analyze common inquiry patterns
4. A/B test response templates
5. Gather and act on customer feedback

## Security and Compliance

### Data Protection
- Never store sensitive data in logs
- Mask credit card and personal information
- Comply with GDPR/CCPA requirements
- Implement data retention policies
- Use encryption for data in transit

### Access Control
- Limit agent permissions to minimum required
- Implement role-based access
- Audit all agent actions
- Regular security reviews

## Common Challenges and Solutions

### Challenge: Incorrect Information
**Solution**: Implement confidence scoring, require human review for low-confidence answers, regular KB updates

### Challenge: Handling Complex Issues
**Solution**: Clear escalation criteria, detailed handoff notes, seamless transfer process

### Challenge: Maintaining Brand Voice
**Solution**: Comprehensive tone guidelines, response templates, regular quality audits

### Challenge: Customer Preference for Humans
**Solution**: Offer option to speak to human, be transparent about AI assistance, ensure smooth handoff

---

**Next Chapter**: Agent Blueprint #4 - Data Analysis Agent
