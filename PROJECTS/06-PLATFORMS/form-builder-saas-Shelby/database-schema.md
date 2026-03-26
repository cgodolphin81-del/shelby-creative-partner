# FormFlow Database Schema

## Overview

FormFlow uses MongoDB as the primary database with Redis for caching and session management. This document outlines the collection schemas and relationships.

---

## Collections

### users

User accounts and authentication.

```javascript
{
  _id: ObjectId,
  
  // Authentication
  email: String,           // Unique, indexed
  passwordHash: String,
  emailVerified: Boolean,
  emailVerificationToken: String,
  emailVerificationExpires: Date,
  
  // OAuth
  oauthProviders: [{
    provider: String,      // 'google', 'github', etc.
    providerId: String,
    accessToken: String,
    refreshToken: String,
    connectedAt: Date
  }],
  
  // Profile
  name: String,
  avatar: String,          // URL
  timezone: String,        // 'America/New_York'
  locale: String,          // 'en-US'
  
  // Plan & Billing
  plan: String,            // 'free', 'starter', 'professional', 'enterprise'
  planStartedAt: Date,
  planExpiresAt: Date,
  subscriptionId: String,  // Stripe subscription ID
  customerId: String,      // Stripe customer ID
  trialEndsAt: Date,
  
  // Usage Tracking
  usage: {
    forms: Number,
    submissions: Number,
    submissionsThisMonth: Number,
    storageBytes: Number,
    apiCalls: Number,
    apiCallsThisMonth: Number
  },
  
  // API Keys
  apiKeys: [{
    id: String,
    key: String,           // Hashed
    name: String,
    type: String,          // 'full', 'read_only', 'submissions'
    lastUsedAt: Date,
    createdAt: Date
  }],
  
  // Settings
  settings: {
    notifications: {
      email: Boolean,
      slack: Boolean,
      submissionAlerts: Boolean,
      weeklyReports: Boolean
    },
    defaults: {
      formLanguage: String,
      dateFormat: String,
      timeFormat: String
    }
  },
  
  // Team
  teamId: ObjectId,        // Reference to teams collection
  role: String,            // 'owner', 'admin', 'editor', 'viewer'
  
  // Security
  mfaEnabled: Boolean,
  mfaSecret: String,
  lastLoginAt: Date,
  lastLoginIp: String,
  
  // Timestamps
  createdAt: Date,
  updatedAt: Date,
  deletedAt: Date          // Soft delete
}
```

**Indexes:**
```javascript
db.users.createIndex({ email: 1 }, { unique: true });
db.users.createIndex({ 'apiKeys.key': 1 }, { unique: true });
db.users.createIndex({ teamId: 1, role: 1 });
db.users.createIndex({ createdAt: -1 });
db.users.createIndex({ deletedAt: 1 }, { sparse: true });
```

---

### teams

Team/organization accounts for multi-user setups.

```javascript
{
  _id: ObjectId,
  
  // Basic Info
  name: String,
  slug: String,            // Unique, for URLs
  avatar: String,
  
  // Plan & Billing
  plan: String,
  subscriptionId: String,
  customerId: String,
  billingEmail: String,
  
  // Usage Aggregates
  usage: {
    forms: Number,
    submissions: Number,
    submissionsThisMonth: Number,
    storageBytes: Number,
    teamMembers: Number
  },
  
  // Settings
  settings: {
    domain: String,        // Custom domain
    branding: {
      logo: String,
      primaryColor: String,
      secondaryColor: String
    },
    sso: {
      enabled: Boolean,
      provider: String,    // 'saml', 'oidc'
      config: Object
    }
  },
  
  // Limits
  limits: {
    maxForms: Number,
    maxSubmissions: Number,
    maxStorage: Number,
    maxTeamMembers: Number
  },
  
  // Timestamps
  createdAt: Date,
  updatedAt: Date
}
```

**Indexes:**
```javascript
db.teams.createIndex({ slug: 1 }, { unique: true });
db.teams.createIndex({ 'subscriptionId': 1 }, { sparse: true });
```

---

### forms

Form definitions and configurations.

```javascript
{
  _id: ObjectId,
  
  // Ownership
  userId: ObjectId,        // Creator/owner
  teamId: ObjectId,        // Team (if applicable)
  
  // Basic Info
  name: String,
  description: String,
  status: String,          // 'draft', 'published', 'archived'
  
  // Form Elements (the actual form structure)
  elements: [{
    id: String,            // Unique within form
    type: String,          // 'email', 'text', 'rating', etc.
    label: String,
    description: String,
    placeholder: String,
    required: Boolean,
    
    // Type-specific properties
    properties: {
      // For text fields
      minLength: Number,
      maxLength: Number,
      pattern: String,
      
      // For choice fields
      options: [{
        id: String,
        text: String,
        value: String,
        score: Object      // For quizzes
      }],
      allowMultiple: Boolean,
      allowOther: Boolean,
      
      // For rating/scale
      scale: Number,
      scaleLabels: {
        start: String,
        end: String
      },
      
      // For file uploads
      acceptedTypes: [String],
      maxFileSize: Number,
      maxFiles: Number,
      
      // For payments
      amount: Number,
      currency: String,
      products: [Object]
    },
    
    // Logic jumps
    logic: {
      type: String,        // 'skip', 'show', 'calculate'
      conditions: [{
        field: String,
        operator: String,  // 'equals', 'contains', etc.
        value: Mixed
      }],
      action: {
        type: String,
        target: String,    // Field ID or 'submit'
        value: Mixed
      }
    },
    
    // Validation
    validation: {
      custom: String,      // Custom validation function
      errorMessage: String
    },
    
    // Layout
    layout: {
      width: String,       // 'full', 'half', 'third'
      order: Number
    }
  }],
  
  // Settings
  settings: {
    // Theme
    theme: {
      primaryColor: String,
      backgroundColor: String,
      fontFamily: String,
      layout: String,      // 'single', 'multi-page'
      showProgressBar: Boolean,
      progressType: String // 'percentage', 'steps', 'none'
    },
    
    // Notifications
    notifications: {
      email: String,       // Notification recipient
      slackWebhook: String,
      emailTemplate: Object,
      sendConfirmation: Boolean
    },
    
    // Limits & Access
    limits: {
      maxSubmissions: Number,
      onePerUser: Boolean,
      onePerEmail: Boolean,
      onePerIp: Boolean,
      password: String,    // Password protection
      ipWhitelist: [String]
    },
    
    // Availability
    availability: {
      startsAt: Date,
      endsAt: Date,
      timezone: String
    },
    
    // Submission
    submission: {
      redirectUrl: String,
      showThankYou: Boolean,
      thankYouMessage: String,
      allowEdit: Boolean,
      saveAndResume: Boolean
    },
    
    // Privacy
    privacy: {
      storeIp: Boolean,
      storeUserAgent: Boolean,
      storeLocation: Boolean,
      gdprCompliant: Boolean,
      dataRetentionDays: Number
    },
    
    // Advanced
    customCode: {
      head: String,        // Custom HTML in <head>
      footer: String       // Custom HTML before </body>
    },
    customCss: String,
    customDomain: String
  },
  
  // Analytics (denormalized for performance)
  analytics: {
    views: Number,
    submissions: Number,
    completionRate: Number,
    avgTimeToComplete: Number,
    lastSubmissionAt: Date
  },
  
  // Integrations
  integrations: [{
    type: String,          // 'google_sheets', 'slack', etc.
    config: Object,
    active: Boolean,
    lastSyncAt: Date
  }],
  
  // Webhooks
  webhooks: [{
    id: String,
    url: String,
    events: [String],
    active: Boolean
  }],
  
  // Versioning
  version: Number,
  publishedVersion: Number,
  
  // Timestamps
  createdAt: Date,
  updatedAt: Date,
  publishedAt: Date,
  deletedAt: Date          // Soft delete
}
```

**Indexes:**
```javascript
db.forms.createIndex({ userId: 1, createdAt: -1 });
db.forms.createIndex({ teamId: 1, createdAt: -1 });
db.forms.createIndex({ status: 1 });
db.forms.createIndex({ 'settings.customDomain': 1 }, { sparse: true });
db.forms.createIndex({ name: 'text', description: 'text' });
db.forms.createIndex({ deletedAt: 1 }, { sparse: true });
```

---

### submissions

Form submissions (response data).

```javascript
{
  _id: ObjectId,
  
  // References
  formId: ObjectId,
  userId: ObjectId,        // Form owner
  teamId: ObjectId,
  
  // Respondent Info
  respondent: {
    email: String,
    name: String,
    ip: String,
    anonymous: Boolean
  },
  
  // Submission Data
  data: {
    // Keyed by field ID
    field_abc123: {
      fieldId: String,
      fieldType: String,
      label: String,
      value: Mixed,        // Type depends on field
      values: [Mixed]      // For multi-select
    }
    // ... more fields
  },
  
  // Calculated Values
  calculated: {
    score: Number,         // For quizzes
    total: Number,         // For payments/calculations
    result: String         // Quiz result type
  },
  
  // Status
  status: String,          // 'complete', 'partial', 'abandoned'
  currentPage: Number,     // For multi-page forms
  lastFieldId: String,     // Last field interacted with
  
  // Payment
  payment: {
    status: String,        // 'pending', 'paid', 'failed', 'refunded'
    amount: Number,
    currency: String,
    processor: String,
    processorId: String,
    paidAt: Date
  },
  
  // Metadata
  metadata: {
    userAgent: String,
    browser: String,
    os: String,
    device: String,
    referrer: String,
    utm: {
      source: String,
      medium: String,
      campaign: String,
      term: String,
      content: String
    },
    location: {
      country: String,
      countryCode: String,
      region: String,
      city: String,
      latitude: Number,
      longitude: Number
    }
  },
  
  // Timing
  startedAt: Date,
  submittedAt: Date,
  timeToComplete: Number,  // In seconds
  
  // Files (uploaded)
  files: [{
    fieldId: String,
    filename: String,
    mimeType: String,
    size: Number,
    url: String,
    s3Key: String,
    uploadedAt: Date
  }],
  
  // Audit
  edited: Boolean,
  editedAt: Date,
  
  // Timestamps
  createdAt: Date,
  updatedAt: Date
}
```

**Indexes:**
```javascript
db.submissions.createIndex({ formId: 1, submittedAt: -1 });
db.submissions.createIndex({ userId: 1, submittedAt: -1 });
db.submissions.createIndex({ teamId: 1, submittedAt: -1 });
db.submissions.createIndex({ 'respondent.email': 1 });
db.submissions.createIndex({ status: 1 });
db.submissions.createIndex({ submittedAt: -1 });
db.submissions.createIndex({ formId: 1, status: 1, submittedAt: -1 });
```

---

### submissions_partial

Partial/abandoned submissions (for recovery).

```javascript
{
  _id: ObjectId,
  formId: ObjectId,
  sessionId: String,       // Cookie/session identifier
  data: Object,            // Partial data
  lastFieldId: String,
  currentPage: Number,
  createdAt: Date,
  expiresAt: Date          // TTL index
}
```

**Indexes:**
```javascript
db.submissions_partial.createIndex({ sessionId: 1 });
db.submissions_partial.createIndex({ expiresAt: 1 }, { expireAfterSeconds: 604800 });
```

---

### templates

Form templates (library).

```javascript
{
  _id: ObjectId,
  
  // Basic Info
  name: String,
  description: String,
  category: String,        // 'surveys', 'quizzes', 'orders', etc.
  tags: [String],
  
  // Template Content
  elements: [Object],      // Same structure as forms.elements
  settings: Object,        // Same structure as forms.settings
  
  // Metadata
  author: {
    userId: ObjectId,
    name: String
  },
  isPublic: Boolean,
  isPremium: Boolean,
  price: Number,
  
  // Stats
  usageCount: Number,
  rating: Number,
  ratingsCount: Number,
  
  // Preview
  previewImage: String,
  previewUrl: String,
  
  // Timestamps
  createdAt: Date,
  updatedAt: Date
}
```

**Indexes:**
```javascript
db.templates.createIndex({ category: 1 });
db.templates.createIndex({ tags: 1 });
db.templates.createIndex({ isPublic: 1, usageCount: -1 });
db.templates.createIndex({ name: 'text', description: 'text' });
```

---

### integrations

Connected third-party integrations.

```javascript
{
  _id: ObjectId,
  
  // Ownership
  userId: ObjectId,
  teamId: ObjectId,
  
  // Integration Info
  type: String,            // 'google_sheets', 'slack', 'hubspot', etc.
  name: String,
  
  // Authentication
  auth: {
    type: String,          // 'oauth', 'api_key', 'webhook'
    accessToken: String,
    refreshToken: String,
    tokenExpiresAt: Date,
    apiKey: String,
    webhookUrl: String
  },
  
  // Configuration
  config: Object,
  
  // Status
  status: String,          // 'active', 'error', 'disconnected'
  lastError: String,
  lastErrorAt: Date,
  lastSyncAt: Date,
  
  // Timestamps
  createdAt: Date,
  updatedAt: Date
}
```

**Indexes:**
```javascript
db.integrations.createIndex({ userId: 1, type: 1 });
db.integrations.createIndex({ teamId: 1, type: 1 });
db.integrations.createIndex({ status: 1 });
```

---

### webhooks

Webhook endpoints.

```javascript
{
  _id: ObjectId,
  
  // Ownership
  userId: ObjectId,
  teamId: ObjectId,
  
  // Configuration
  url: String,
  events: [String],        // Event types to subscribe to
  secret: String,          // Signing secret
  active: Boolean,
  
  // Headers
  customHeaders: Object,
  
  // Stats
  deliveryCount: Number,
  successCount: Number,
  failureCount: Number,
  lastDeliveryAt: Date,
  lastDeliveryStatus: Number,
  
  // Timestamps
  createdAt: Date,
  updatedAt: Date
}
```

**Indexes:**
```javascript
db.webhooks.createIndex({ userId: 1, active: 1 });
db.webhooks.createIndex({ teamId: 1, active: 1 });
```

---

### webhook_deliveries

Webhook delivery logs.

```javascript
{
  _id: ObjectId,
  
  // References
  webhookId: ObjectId,
  eventId: String,
  
  // Delivery Info
  eventType: String,
  payload: Object,
  
  // Attempt
  attempt: Number,
  url: String,
  requestHeaders: Object,
  responseStatus: Number,
  responseBody: String,
  duration: Number,        // ms
  
  // Status
  status: String,          // 'pending', 'success', 'failed'
  error: String,
  
  // Timestamps
  createdAt: Date,
  deliveredAt: Date
}
```

**Indexes:**
```javascript
db.webhook_deliveries.createIndex({ webhookId: 1, createdAt: -1 });
db.webhook_deliveries.createIndex({ eventId: 1 });
db.webhook_deliveries.createIndex({ createdAt: -1 }, { expireAfterSeconds: 2592000 });
```

---

### analytics_daily

Aggregated daily analytics (for performance).

```javascript
{
  _id: ObjectId,
  
  // References
  formId: ObjectId,
  userId: ObjectId,
  
  // Date
  date: String,            // 'YYYY-MM-DD'
  
  // Metrics
  views: Number,
  submissions: Number,
  completions: Number,
  abandonments: Number,
  avgTimeToComplete: Number,
  
  // Breakdown
  devices: {
    desktop: Number,
    mobile: Number,
    tablet: Number
  },
  browsers: [{
    name: String,
    count: Number
  }],
  countries: [{
    code: String,
    count: Number
  }],
  
  // Drop-off by field
  dropOff: [{
    fieldId: String,
    count: Number
  }],
  
  // Timestamps
  createdAt: Date,
  updatedAt: Date
}
```

**Indexes:**
```javascript
db.analytics_daily.createIndex({ formId: 1, date: -1 });
db.analytics_daily.createIndex({ userId: 1, date: -1 });
```

---

### audit_logs

Activity audit trail (Enterprise).

```javascript
{
  _id: ObjectId,
  
  // References
  userId: ObjectId,
  teamId: ObjectId,
  
  // Action
  action: String,          // 'form.created', 'form.updated', etc.
  resourceType: String,    // 'form', 'submission', 'user', etc.
  resourceId: ObjectId,
  
  // Changes
  changes: {
    before: Object,
    after: Object
  },
  
  // Context
  ip: String,
  userAgent: String,
  
  // Timestamp
  createdAt: Date
}
```

**Indexes:**
```javascript
db.audit_logs.createIndex({ teamId: 1, createdAt: -1 });
db.audit_logs.createIndex({ userId: 1, createdAt: -1 });
db.audit_logs.createIndex({ resourceType: 1, resourceId: 1 });
```

---

## Redis Data Structures

### Sessions
```
Key: session:{sessionId}
Type: Hash
TTL: 30 days
Fields: userId, email, plan, teamId, role
```

### Form Cache
```
Key: form:{formId}
Type: String (JSON)
TTL: 5 minutes
Value: Serialized form object
```

### Rate Limiting
```
Key: rate:{userId}:{endpoint}
Type: String (counter)
TTL: 1 minute
Value: Request count
```

### Submission Queue
```
Key: queue:submissions
Type: List
Value: Serialized submission jobs
```

### Webhook Queue
```
Key: queue:webhooks
Type: List
Value: Serialized webhook delivery jobs
```

### Analytics Buffer
```
Key: analytics:buffer:{formId}:{date}
Type: Hash
TTL: 24 hours
Fields: views, submissions, etc.
```

---

## Data Retention Policies

| Collection | Retention | Notes |
|------------|-----------|-------|
| users | Until deleted | Soft delete, 30-day recovery |
| forms | Until deleted | Soft delete, 30-day recovery |
| submissions | Configurable | Per-form setting, default 365 days |
| submissions_partial | 7 days | TTL index |
| webhook_deliveries | 30 days | TTL index |
| audit_logs | 7 years | Enterprise only |
| analytics_daily | 2 years | Aggregated data |

---

## Backup Strategy

- **MongoDB:** Daily automated backups (Atlas)
- **Point-in-time recovery:** Enabled
- **Retention:** 30 days
- **S3:** File uploads, versioned
- **Redis:** Persistence enabled (RDB + AOF)

---

*Database schema version: 1.0*
*Last updated: March 2024*
