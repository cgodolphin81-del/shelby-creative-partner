# FormFlow Quick Start Guide

## For Developers

### 1. Clone & Setup

```bash
# Clone the repository
git clone https://github.com/formflow/formflow.git
cd formflow

# Install dependencies
npm install

# Copy environment template
cp .env.example .env

# Edit .env with your configuration
# - MONGODB_URI
# - REDIS_URL
# - JWT_SECRET
# - STRIPE_SECRET_KEY
# etc.
```

### 2. Start Development

```bash
# Start MongoDB, Redis locally (Docker)
docker-compose up -d mongo redis

# Start development server
npm run dev

# Open http://localhost:3000
```

### 3. Create Your First Form

```bash
# Using the CLI
npx @formflow/cli login
npx @formflow/cli create form "My First Form"

# Or via API
curl -X POST "http://localhost:3000/api/v1/forms" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Contact Form",
    "elements": [
      {
        "type": "email",
        "label": "Email",
        "required": true
      },
      {
        "type": "long_text",
        "label": "Message",
        "required": true
      }
    ]
  }'
```

### 4. Embed on Your Website

```html
<!-- Copy this embed code -->
<script src="https://formflow.io/embed.js"></script>
<script>
  FormFlow.embed('form_abc123', {
    target: '#my-form-container',
    theme: 'light'
  });
</script>

<div id="my-form-container"></div>
```

---

## For End Users

### 1. Sign Up

1. Go to [formflow.io](https://formflow.io)
2. Click "Get Started Free"
3. Enter your email
4. Verify your email
5. You're in! 🎉

### 2. Create a Form

**Option A: Use a Template**
1. Click "Create Form"
2. Browse template library
3. Choose a template
4. Customize it
5. Click "Publish"

**Option B: Start from Scratch**
1. Click "Create Form"
2. Choose "Blank Form"
3. Drag elements from sidebar
4. Configure each element
5. Click "Publish"

### 3. Share Your Form

**Get your form link:**
- Click "Share" on your form
- Copy the URL
- Share anywhere!

**Embed on your website:**
- Click "Embed"
- Copy the code
- Paste into your website HTML

**QR Code:**
- Click "Share" → "QR Code"
- Download and print

### 4. View Responses

1. Go to your form dashboard
2. Click "Submissions"
3. View individual responses
4. Export to CSV/Excel
5. Set up integrations (Google Sheets, Slack, etc.)

---

## Common Tasks

### Add Logic Jumps

```javascript
// In form builder, click on a field
// Go to "Logic" tab
// Add condition:
{
  "if": {
    "field": "satisfaction",
    "equals": "Not satisfied"
  },
  "then": {
    "show": "feedback_reason"
  }
}
```

### Accept Payments

1. Go to Settings → Payments
2. Connect Stripe account
3. Add payment field to form
4. Set amount (fixed or variable)
5. Publish form

### Set Up Google Sheets Integration

1. Go to Settings → Integrations
2. Click "Google Sheets"
3. Connect your Google account
4. Choose spreadsheet
5. Map fields to columns
6. Test connection

### Customize Form Design

1. Go to Settings → Design
2. Choose colors
3. Upload logo
4. Select font
5. Add custom CSS (optional)
6. Preview on all devices

---

## API Examples

### List Your Forms

```bash
curl "https://api.formflow.io/v1/forms" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

### Get Submissions

```bash
curl "https://api.formflow.io/v1/forms/FORM_ID/submissions" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

### Create Webhook

```bash
curl -X POST "https://api.formflow.io/v1/webhooks" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://your-site.com/webhook",
    "events": ["submission.created"]
  }'
```

---

## Troubleshooting

### Form Not Loading

- Check form status (must be "published")
- Verify embed code is correct
- Check browser console for errors
- Clear browser cache

### Not Receiving Notifications

- Check notification settings
- Verify email address
- Check spam folder
- Test with a new submission

### Integration Not Syncing

- Re-connect the integration
- Check permissions
- Verify mapping configuration
- Check integration logs

### Payment Issues

- Verify Stripe account is connected
- Check Stripe dashboard for errors
- Ensure SSL is enabled on your site
- Test with Stripe test mode

---

## Getting Help

### Documentation
- [API Docs](./api-docs.md)
- [Webhooks](./webhooks.md)
- [Features](./features.md)
- [Integrations](./integrations.md)

### Support
- Email: support@formflow.io
- Help Center: help.formflow.io
- Community: community.formflow.io
- Twitter: @formflow_io

### Status
- Status Page: status.formflow.io
- Twitter: @formflow_status

---

## Next Steps

1. ✅ Create your first form
2. ✅ Customize the design
3. ✅ Add logic jumps
4. ✅ Set up integrations
5. ✅ Share and collect responses
6. ✅ Analyze results
7. ✅ Optimize for conversions

---

**Welcome to FormFlow! 🚀**

*Last updated: March 2024*
