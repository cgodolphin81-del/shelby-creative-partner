# FormFlow Templates Library

## Overview

FormFlow includes 200+ professionally designed templates across all major use cases. Templates are fully customizable and optimized for conversion.

---

## Template Categories

### 📊 Surveys (35 templates)

| Template | Use Case | Questions | Conversion Rate |
|----------|----------|-----------|-----------------|
| Customer Satisfaction (CSAT) | Post-purchase feedback | 5-8 | 45% |
| Net Promoter Score (NPS) | Loyalty measurement | 3-5 | 52% |
| Employee Engagement | HR feedback | 15-25 | 38% |
| Product Feedback | Feature requests | 8-12 | 42% |
| Market Research | Consumer insights | 10-20 | 35% |
| Event Feedback | Post-event survey | 6-10 | 48% |
| Website Feedback | UX improvement | 4-6 | 55% |
| Course Evaluation | Education feedback | 10-15 | 40% |

**Featured: Customer Satisfaction Survey**
```json
{
  "name": "Customer Satisfaction (CSAT)",
  "category": "surveys",
  "elements": [
    {
      "type": "rating",
      "question": "How satisfied are you with our product?",
      "scale": 5,
      "required": true
    },
    {
      "type": "multiple_choice",
      "question": "What did you like most?",
      "options": ["Quality", "Price", "Service", "Speed"],
      "allow_multiple": true
    },
    {
      "type": "long_text",
      "question": "What could we improve?",
      "required": false
    },
    {
      "type": "email",
      "question": "Email (optional)",
      "required": false
    }
  ],
  "settings": {
    "show_progress": false,
    "thank_you_message": "Thank you for your feedback!"
  }
}
```

---

### 🎯 Quizzes (25 templates)

| Template | Use Case | Questions | Avg. Completion |
|----------|----------|-----------|-----------------|
| Personality Quiz | Lead generation | 8-12 | 72% |
| Knowledge Assessment | Education | 10-20 | 65% |
| Product Recommender | E-commerce | 5-8 | 68% |
| Health Assessment | Wellness | 10-15 | 58% |
| Career Quiz | Career sites | 10-15 | 70% |
| Trivia Quiz | Engagement | 5-10 | 75% |
| Style Quiz | Fashion/Beauty | 8-12 | 71% |

**Featured: Personality Quiz**
```json
{
  "name": "Personality Quiz Template",
  "category": "quizzes",
  "features": [
    "Score calculation",
    "Result pages based on answers",
    "Email results to participant",
    "Social sharing"
  ],
  "elements": [
    {
      "type": "multiple_choice",
      "question": "Choose your ideal weekend",
      "options": [
        {"text": "Adventure outdoors", "score": {"type": "A", "value": 3}},
        {"text": "Reading at home", "score": {"type": "B", "value": 3}},
        {"text": "Party with friends", "score": {"type": "C", "value": 3}}
      ]
    }
  ],
  "results": [
    {"type": "A", "title": "The Adventurer", "description": "..."},
    {"type": "B", "title": "The Thinker", "description": "..."},
    {"type": "C", "title": "The Socialite", "description": "..."}
  ]
}
```

---

### 🛒 Order Forms (30 templates)

| Template | Use Case | Payment | Avg. Order Value |
|----------|----------|---------|------------------|
| Product Order | E-commerce | Stripe/PayPal | $85 |
| Service Booking | Services | Stripe | $250 |
| Custom Quote | B2B services | None/Invoice | $1,500 |
| Donation Form | Non-profits | Stripe/PayPal | $75 |
| Pre-Order | Product launches | Stripe | $120 |
| Subscription | Recurring | Stripe | $45/mo |
| Event Tickets | Events | Stripe | $95 |

**Featured: Product Order Form**
```json
{
  "name": "Product Order Form",
  "category": "orders",
  "elements": [
    {
      "type": "product_selector",
      "products": [
        {"id": "prod_1", "name": "Product A", "price": 49.00},
        {"id": "prod_2", "name": "Product B", "price": 79.00}
      ],
      "quantity_field": true
    },
    {
      "type": "dropdown",
      "question": "Shipping Speed",
      "options": [
        {"text": "Standard (5-7 days)", "price": 0},
        {"text": "Express (2-3 days)", "price": 15.00},
        {"text": "Overnight", "price": 35.00}
      ]
    },
    {
      "type": "address",
      "question": "Shipping Address",
      "required": true
    },
    {
      "type": "payment",
      "processor": "stripe",
      "required": true
    }
  ],
  "settings": {
    "show_order_summary": true,
    "tax_calculation": true,
    "inventory_check": true
  }
}
```

---

### 📝 Applications (40 templates)

| Template | Use Case | Fields | Avg. Completion Time |
|----------|----------|--------|---------------------|
| Job Application | Hiring | 15-25 | 8 min |
| College Application | Education | 20-40 | 25 min |
| Rental Application | Real Estate | 15-20 | 12 min |
| Grant Application | Non-profits | 25-50 | 35 min |
| Vendor Application | B2B | 15-30 | 15 min |
| Membership Application | Organizations | 10-20 | 10 min |
| Loan Application | Finance | 20-35 | 20 min |

**Featured: Job Application**
```json
{
  "name": "Job Application Form",
  "category": "applications",
  "elements": [
    {
      "type": "section",
      "title": "Personal Information"
    },
    {
      "type": "name",
      "required": true
    },
    {
      "type": "email",
      "required": true
    },
    {
      "type": "phone",
      "required": true
    },
    {
      "type": "section",
      "title": "Experience"
    },
    {
      "type": "file_upload",
      "question": "Upload Resume",
      "accepted_types": [".pdf", ".doc", ".docx"],
      "max_size": "10MB",
      "required": true
    },
    {
      "type": "file_upload",
      "question": "Upload Cover Letter",
      "accepted_types": [".pdf", ".doc", ".docx"],
      "required": false
    },
    {
      "type": "long_text",
      "question": "Why are you interested in this position?",
      "required": true
    },
    {
      "type": "dropdown",
      "question": "How did you hear about us?",
      "options": ["LinkedIn", "Indeed", "Referral", "Company Website", "Other"]
    }
  ],
  "integrations": ["ats", "email", "slack"]
}
```

---

### 📋 Contact Forms (20 templates)

| Template | Use Case | Fields | Conversion Rate |
|----------|----------|--------|-----------------|
| General Contact | Websites | 4-6 | 35% |
| Support Request | Help desk | 5-8 | 42% |
| Sales Inquiry | B2B sales | 6-10 | 28% |
| Partnership | Business dev | 8-12 | 22% |
| Media Inquiry | PR | 5-7 | 30% |
| Feedback | General | 3-5 | 45% |

---

### 🎫 Event Registration (25 templates)

| Template | Use Case | Payment | Capacity |
|----------|----------|---------|----------|
| Conference | Large events | Stripe | Unlimited |
| Webinar | Online events | Free/Stripe | 100-1000 |
| Workshop | Training | Stripe | 10-50 |
| Meetup | Networking | Free | 20-200 |
| Wedding | Personal | Free | 50-300 |
| Class | Education | Stripe | 5-30 |

**Featured: Event Registration**
```json
{
  "name": "Conference Registration",
  "category": "events",
  "elements": [
    {
      "type": "ticket_selector",
      "tickets": [
        {"name": "General Admission", "price": 199.00, "quantity": 500},
        {"name": "VIP", "price": 499.00, "quantity": 50},
        {"name": "Student", "price": 99.00, "quantity": 100}
      ]
    },
    {
      "type": "multiple_choice",
      "question": "Dietary Restrictions",
      "options": ["None", "Vegetarian", "Vegan", "Gluten-Free", "Other"],
      "allow_multiple": false
    },
    {
      "type": "long_text",
      "question": "Session Preferences",
      "required": false
    },
    {
      "type": "payment",
      "required": true
    }
  ],
  "settings": {
    "confirmation_email": true,
    "calendar_invite": true,
    "waitlist": true
  }
}
```

---

### 🏥 Health & Wellness (15 templates)

| Template | Use Case | Compliance | Fields |
|----------|----------|------------|--------|
| Patient Intake | Healthcare | HIPAA | 20-30 |
| Symptom Checker | Telehealth | HIPAA | 10-15 |
| Consent Form | Medical | HIPAA, e-Sign | 5-10 |
| Health Assessment | Wellness | None | 15-25 |
| Appointment Request | Clinics | HIPAA | 8-12 |
| Prescription Refill | Pharmacy | HIPAA | 6-8 |

---

### 📚 Education (20 templates)

| Template | Use Case | Users | Features |
|----------|----------|-------|----------|
| Course Enrollment | Online courses | Students | Payment, prerequisites |
| Student Registration | Schools | Students/Parents | Multiple sections |
| Permission Slip | K-12 | Parents | E-signature |
| Parent Contact | Schools | Parents | Communication log |
| Tutoring Request | Education | Students | Scheduling |
| Research Survey | Academia | Participants | Anonymous, IRB-ready |

---

### 🏠 Real Estate (15 templates)

| Template | Use Case | Integration | Fields |
|----------|----------|-------------|--------|
| Property Inquiry | Listings | CRM | 6-10 |
| Buyer Application | Sales | Mortgage | 20-30 |
| Rental Application | Rentals | Screening | 15-25 |
| Home Valuation | Lead gen | Email | 8-12 |
| Showing Request | Agents | Calendar | 5-8 |
| Open House RSVP | Events | Email/SMS | 4-6 |

---

### 💼 Business & HR (25 templates)

| Template | Use Case | Users | Features |
|----------|----------|-------|----------|
| Employee Onboarding | HR | New hires | Multi-page, file upload |
| Time Off Request | HR | Employees | Approval workflow |
| Expense Report | Finance | Employees | Receipt upload, calc |
| Performance Review | HR | Managers | Rating scales |
| IT Support Request | IT | Employees | Priority, category |
| Vendor Registration | Procurement | Vendors | Document upload |
| NDA Signature | Legal | Partners | E-signature |

---

## Template Features

### All Templates Include
- ✅ Fully customizable design
- ✅ Mobile-responsive
- ✅ Logic jumps pre-configured
- ✅ Email notifications
- ✅ Thank you page
- ✅ Spam protection
- ✅ Analytics tracking

### Premium Templates (Professional+)
- ✅ Payment integration
- ✅ Advanced logic
- ✅ File uploads
- ✅ E-signature
- ✅ Multi-language support
- ✅ A/B test variants

---

## Template Marketplace

### Community Templates
- Users can create and share templates
- Rating and review system
- Revenue share for creators (30%)
- Template categories and tags
- Search and filtering

### Template Submission Guidelines
1. Original work only
2. Minimum 5 questions
3. Professional design
4. Clear use case description
5. Preview images required
6. No offensive content

### Template Pricing (Marketplace)
| Type | Price Range | FormFlow Share |
|------|-------------|----------------|
| Free | $0 | 0% |
| Standard | $5-15 | 30% |
| Premium | $15-50 | 30% |
| Bundle | $50-200 | 30% |

---

## Template Analytics

Track template performance:
- Most used templates
- Average conversion rates
- Completion times
- Drop-off points
- User ratings

**Top 10 Templates (by usage):**
1. Contact Form (General) - 45,000 uses
2. Customer Satisfaction Survey - 32,000 uses
3. Job Application - 28,000 uses
4. Event Registration - 25,000 uses
5. NPS Survey - 22,000 uses
6. Order Form - 20,000 uses
7. Lead Capture - 18,000 uses
8. Feedback Form - 16,000 uses
9. Newsletter Signup - 15,000 uses
10. Appointment Booking - 14,000 uses

---

## Creating Custom Templates

### Template Builder
1. Start from scratch or existing template
2. Add and configure elements
3. Set up logic and conditions
4. Design and branding
5. Test on all devices
6. Save as template
7. Share privately or publish to marketplace

### Template Variables
```
{{form.title}}          - Form title
{{form.url}}            - Form URL
{{submission.id}}       - Submission ID
{{submission.date}}     - Submission date
{{user.email}}          - Respondent email
{{user.name}}           - Respondent name
{{field.question_1}}    - Specific field value
```

### Template Export/Import
- Export: JSON format
- Import: Drag-drop JSON file
- Share: Public link or private share
- Version control: Template versioning

---

## Template API

### Get Template
```bash
GET /api/v1/templates/:id
```

### List Templates
```bash
GET /api/v1/templates?category=surveys&sort=popular
```

### Create Form from Template
```bash
POST /api/v1/forms/from-template
{
  "template_id": "tmpl_123",
  "customizations": {
    "title": "My Custom Form",
    "theme": {"primary_color": "#FF0000"}
  }
}
```

### Submit Template
```bash
POST /api/v1/templates
{
  "name": "My Template",
  "category": "surveys",
  "description": "...",
  "elements": [...],
  "preview_images": [...],
  "pricing": {"type": "free|paid", "amount": 0}
}
```

---

*Template library updated: March 2024*
