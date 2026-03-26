# n8n Workflow Library

**10 Production-Ready Workflows for Enterprise Automation**

n8n offers self-hosted automation with advanced capabilities:
- Visual workflow editor
- Custom JavaScript/Python code nodes
- Webhook triggers
- Cron scheduling
- Error workflows
- Sub-workflows
- Version control integration

---

## Table of Contents

1. [Multi-Tenant Data Pipeline](#1-multi-tenant-data-pipeline)
2. [AI-Powered Document Processing](#2-ai-powered-document-processing)
3. [Real-Time Alert System](#3-real-time-alert-system)
4. [API Aggregation Service](#4-api-aggregation-service)
5. [Scheduled Report Generator](#5-scheduled-report-generator)
6. [Webhook Router & Processor](#6-webhook-router--processor)
7. [Database Sync & Migration](#7-database-sync--migration)
8. [Social Media Management](#8-social-media-management)
9. [ETL Data Transformation](#9-etl-data-transformation)
10. [Incident Response Automation](#10-incident-response-automation)

---

## 1. Multi-Tenant Data Pipeline

**Purpose:** Process data for multiple tenants with isolation

### Workflow JSON Export
```json
{
  "name": "Multi-Tenant Data Pipeline",
  "nodes": [
    {
      "parameters": {
        "httpMethod": "POST",
        "path": "tenant-data",
        "responseMode": "lastNode"
      },
      "name": "Webhook",
      "type": "n8n-nodes-base.webhook",
      "typeVersion": 1,
      "position": [250, 300]
    },
    {
      "parameters": {
        "jsCode": "// Extract tenant ID from header\nconst tenantId = $('Webhook').first().json.headers['x-tenant-id'];\nconst data = $('Webhook').first().json.body;\n\nreturn {\n  tenantId,\n  data,\n  timestamp: new Date().toISOString()\n};"
      },
      "name": "Extract Tenant",
      "type": "n8n-nodes-base.code",
      "typeVersion": 2,
      "position": [450, 300]
    },
    {
      "parameters": {
        "conditions": {
          "string": [
            {
              "value1": "={{ $json.tenantId }}",
              "operation": "equals",
              "value2": "enterprise"
            }
          ]
        }
      },
      "name": "Route by Tenant",
      "type": "n8n-nodes-base.if",
      "typeVersion": 1,
      "position": [650, 300]
    },
    {
      "parameters": {
        "operation": "insert",
        "table": "enterprise_data",
        "columns": "tenant_id, data, created_at",
        "values": "={{ $json.tenantId }}, {{ JSON.stringify($json.data) }}, {{ $json.timestamp }}"
      },
      "name": "PostgreSQL Enterprise",
      "type": "n8n-nodes-base.postgres",
      "typeVersion": 1,
      "position": [850, 200]
    },
    {
      "parameters": {
        "operation": "insert",
        "table": "standard_data",
        "columns": "tenant_id, data, created_at",
        "values": "={{ $json.tenantId }}, {{ JSON.stringify($json.data) }}, {{ $json.timestamp }}"
      },
      "name": "PostgreSQL Standard",
      "type": "n8n-nodes-base.postgres",
      "typeVersion": 1,
      "position": [850, 400]
    },
    {
      "parameters": {
        "method": "POST",
        "url": "={{ $env.TENANT_WEBHOOK_URL }}",
        "body": {
          "status": "processed",
          "tenantId": "={{ $json.tenantId }}",
          "recordCount": 1
        }
      },
      "name": "Notify Tenant",
      "type": "n8n-nodes-base.httpRequest",
      "typeVersion": 3,
      "position": [1050, 300]
    }
  ],
  "connections": {
    "Webhook": {
      "main": [[{"node": "Extract Tenant", "type": "main", "index": 0}]]
    },
    "Extract Tenant": {
      "main": [[{"node": "Route by Tenant", "type": "main", "index": 0}]]
    },
    "Route by Tenant": {
      "main": [
        [{"node": "PostgreSQL Enterprise", "type": "main", "index": 0}],
        [{"node": "PostgreSQL Standard", "type": "main", "index": 0}]
      ]
    },
    "PostgreSQL Enterprise": {
      "main": [[{"node": "Notify Tenant", "type": "main", "index": 0}]]
    },
    "PostgreSQL Standard": {
      "main": [[{"node": "Notify Tenant", "type": "main", "index": 0}]]
    }
  },
  "settings": {
    "errorWorkflow": "error-handler-workflow"
  }
}
```

### Environment Variables Required
```bash
TENANT_WEBHOOK_URL=https://tenant-system.com/webhook
DATABASE_ENTERPRISE=enterprise_db
DATABASE_STANDARD=standard_db
```

---

## 2. AI-Powered Document Processing

**Purpose:** Extract and classify information from uploaded documents

### Workflow Structure
```
[Webhook: File Upload]
    ↓
[Google Drive: Download File]
    ↓
[Textract/PDF Extract: Parse Document]
    ↓
[OpenAI: Classify Document Type]
    ↓
[Router: Document Type]
    ├── Invoice → [Extract: Line Items, Total, Vendor]
    ├── Contract → [Extract: Parties, Dates, Terms]
    ├── Resume → [Extract: Skills, Experience, Education]
    └── Other → [Store: Raw Text]
    ↓
[Database: Store Extracted Data]
    ↓
[Slack: Notify Team]
```

### Code Node: Document Classification
```javascript
const documentText = $('PDF Extract').first().json.text;

const classification = await fetch('https://api.openai.com/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    model: 'gpt-4',
    messages: [
      {
        role: 'system',
        content: 'Classify this document as: invoice, contract, resume, or other. Return JSON.'
      },
      {
        role: 'user',
        content: documentText.substring(0, 4000)
      }
    ],
    response_format: { type: 'json_object' }
  })
});

const result = await classification.json();
return {
  json: JSON.parse(result.choices[0].message.content)
};
```

### Code Node: Invoice Extraction
```javascript
const invoiceText = $('PDF Extract').first().json.text;

const extraction = await fetch('https://api.openai.com/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    model: 'gpt-4',
    messages: [
      {
        role: 'system',
        content: 'Extract invoice data. Return JSON with: invoice_number, date, vendor, line_items (array), subtotal, tax, total.'
      },
      {
        role: 'user',
        content: invoiceText.substring(0, 4000)
      }
    ],
    response_format: { type: 'json_object' }
  })
});

const result = await extraction.json();
return {
  json: JSON.parse(result.choices[0].message.content)
};
```

---

## 3. Real-Time Alert System

**Purpose:** Monitor multiple data sources and send alerts

### Workflow Structure
```
[Cron: Every 5 Minutes]
    ↓
[Parallel Execution]
    ├── [API: Check Service Health]
    ├── [Database: Query Thresholds]
    ├── [Twitter: Monitor Keywords]
    └── [RSS: Check News Sources]
    ↓
[Router: Alert Type]
    ├── Critical → [PagerDuty + SMS + Email]
    ├── Warning → [Slack + Email]
    └── Info → [Slack Only]
    ↓
[Google Sheets: Log Alert]
```

### Code Node: Health Check Aggregator
```javascript
const services = [
  { name: 'API', url: 'https://api.example.com/health' },
  { name: 'Web', url: 'https://www.example.com' },
  { name: 'Database', url: 'https://db.example.com/health' }
];

const results = await Promise.all(
  services.map(async (service) => {
    try {
      const response = await fetch(service.url, { 
        method: 'GET',
        timeout: 5000
      });
      const status = response.ok ? 'healthy' : 'unhealthy';
      return { name: service.name, status, statusCode: response.status };
    } catch (error) {
      return { name: service.name, status: 'error', error: error.message };
    }
  })
);

const alerts = results.filter(r => r.status !== 'healthy');
return {
  json: {
    timestamp: new Date().toISOString(),
    services: results,
    alerts: alerts,
    hasAlerts: alerts.length > 0
  }
};
```

### Code Node: Alert Router
```javascript
const alerts = $('Health Check').first().json.alerts;

if (alerts.length === 0) {
  return null; // Stop workflow
}

const criticalKeywords = ['down', 'error', 'critical', 'failure'];
const critical = alerts.filter(a => 
  criticalKeywords.some(k => (a.error || '').toLowerCase().includes(k))
);

const severity = critical.length > 0 ? 'critical' : 'warning';

return {
  json: {
    severity,
    alerts,
    channels: severity === 'critical' 
      ? ['pagerduty', 'sms', 'email', 'slack']
      : ['slack', 'email']
  }
};
```

---

## 4. API Aggregation Service

**Purpose:** Combine multiple API responses into unified format

### Workflow Structure
```
[Webhook: Data Request]
    ↓
[Parallel API Calls]
    ├── [Salesforce: Get Accounts]
    ├── [HubSpot: Get Contacts]
    ├── [Stripe: Get Customers]
    └── [Intercom: Get Users]
    ↓
[Code: Normalize & Merge]
    ↓
[Code: Deduplicate]
    ↓
[Code: Enrich with AI]
    ↓
[Response: Unified JSON]
```

### Code Node: Data Normalization
```javascript
const salesforce = $('Salesforce').all().map(item => ({
  id: item.json.Id,
  source: 'salesforce',
  name: item.json.Name,
  email: item.json.Email__c,
  company: item.json.Account.Name,
  createdAt: item.json.CreatedDate,
  value: item.json.AnnualRevenue
}));

const hubspot = $('HubSpot').all().map(item => ({
  id: item.json.vid,
  source: 'hubspot',
  name: `${item.json.properties.firstname} ${item.json.properties.lastname}`,
  email: item.json.properties.email,
  company: item.json.properties.company,
  createdAt: item.json.properties.createdate,
  value: item.json.properties.lifetime_value
}));

const stripe = $('Stripe').all().map(item => ({
  id: item.json.id,
  source: 'stripe',
  name: item.json.name,
  email: item.json.email,
  company: item.json.metadata?.company || '',
  createdAt: new Date(item.json.created * 1000).toISOString(),
  value: item.json.metadata?.ltv || 0
}));

// Merge all sources
const allRecords = [...salesforce, ...hubspot, ...stripe];

// Group by email for deduplication
const byEmail = {};
allRecords.forEach(record => {
  if (!byEmail[record.email]) {
    byEmail[record.email] = { ...record, sources: [record.source] };
  } else {
    byEmail[record.email].sources.push(record.source);
    // Prefer most recent/complete data
    if (new Date(record.createdAt) > new Date(byEmail[record.email].createdAt)) {
      Object.assign(byEmail[record.email], record);
    }
  }
});

return {
  json: {
    total: Object.keys(byEmail).length,
    records: Object.values(byEmail)
  }
};
```

---

## 5. Scheduled Report Generator

**Purpose:** Generate and distribute recurring reports

### Workflow Structure
```
[Cron: Weekly/Monthly]
    ↓
[Parallel Data Collection]
    ├── [Google Analytics: Traffic]
    ├── [Stripe: Revenue]
    ├── [HubSpot: Leads]
    └── [PostgreSQL: Custom Metrics]
    ↓
[Code: Aggregate Data]
    ↓
[OpenAI: Generate Insights]
    ↓
[Google Slides: Create Deck]
    ↓
[PDF: Export]
    ↓
[Email: Distribute]
    └── [Slack: Post Summary]
```

### Code Node: Report Aggregation
```javascript
const ga = $('Google Analytics').first().json;
const stripe = $('Stripe').first().json;
const hubspot = $('HubSpot').first().json;

const reportData = {
  period: {
    start: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
    end: new Date().toISOString()
  },
  metrics: {
    traffic: {
      sessions: ga.sessions,
      users: ga.users,
      pageviews: ga.pageviews,
      bounceRate: ga.bounceRate,
      change: ga.sessionChange
    },
    revenue: {
      mrr: stripe.mrr,
      newRevenue: stripe.newMrr,
      churn: stripe.churnRate,
      ltv: stripe.ltv,
      change: stripe.mrrChange
    },
    leads: {
      total: hubspot.newContacts,
      qualified: hubspot.qualifiedLeads,
      conversionRate: hubspot.conversionRate,
      change: hubspot.leadChange
    }
  },
  generatedAt: new Date().toISOString()
};

// Calculate trends
reportData.trends = {
  revenuePerUser: reportData.metrics.revenue.mrr / reportData.metrics.traffic.users,
  leadToCustomer: reportData.metrics.revenue.newRevenue / reportData.metrics.leads.qualified,
  healthScore: calculateHealthScore(reportData.metrics)
};

function calculateHealthScore(metrics) {
  const scores = [];
  if (metrics.traffic.change > 0) scores.push(1);
  if (metrics.revenue.change > 0) scores.push(1);
  if (metrics.leads.conversionRate > 0.05) scores.push(1);
  return (scores.length / 3) * 100;
}

return { json: reportData };
```

### OpenAI Node: Generate Insights
```javascript
const reportData = $('Aggregate').first().json;

const prompt = `Analyze this business report and provide:
1. Executive Summary (2-3 sentences)
2. Key Wins (3 bullet points)
3. Areas of Concern (2-3 bullet points)
4. Recommended Actions (3-5 items)

Report Data:
${JSON.stringify(reportData, null, 2)}

Return as JSON with keys: summary, wins, concerns, actions`;

const response = await fetch('https://api.openai.com/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    model: 'gpt-4',
    messages: [{ role: 'user', content: prompt }],
    response_format: { type: 'json_object' }
  })
});

return { json: JSON.parse((await response.json()).choices[0].message.content) };
```

---

## 6. Webhook Router & Processor

**Purpose:** Central webhook handler for multiple integrations

### Workflow Structure
```
[Webhook: Universal Endpoint]
    ↓
[Code: Parse & Validate]
    ↓
[Router: Event Type]
    ├── payment.* → [Payment Processing]
    ├── user.* → [User Management]
    ├── order.* → [Order Fulfillment]
    └── custom.* → [Custom Handler]
    ↓
[Each Path: Process Event]
    ↓
[Code: Log Event]
    ↓
[Response: Acknowledge]
```

### Code Node: Event Router
```javascript
const body = $('Webhook').first().json.body;
const headers = $('Webhook').first().json.headers;

// Validate signature (example for Stripe)
const signature = headers['stripe-signature'];
const isValid = validateSignature(body, signature, process.env.STRIPE_WEBHOOK_SECRET);

if (!isValid) {
  throw new Error('Invalid signature');
}

const eventType = body.type;
const eventData = body.data.object;

let route = 'default';

if (eventType.startsWith('payment_intent.')) {
  route = 'payment';
} else if (eventType.startsWith('customer.')) {
  route = 'user';
} else if (eventType.startsWith('order.')) {
  route = 'order';
} else if (eventType.startsWith('invoice.')) {
  route = 'billing';
}

return {
  json: {
    route,
    eventType,
    eventData,
    receivedAt: new Date().toISOString(),
    source: headers['user-agent']
  }
};

function validateSignature(body, signature, secret) {
  // Implement HMAC validation
  return true; // Simplified for example
}
```

---

## 7. Database Sync & Migration

**Purpose:** Bi-directional database synchronization

### Workflow Structure
```
[Cron: Every Hour]
    ↓
[PostgreSQL: Fetch Changed Records]
    ↓
[MongoDB: Fetch Changed Records]
    ↓
[Code: Compare & Detect Conflicts]
    ↓
[Router: Conflict Resolution]
    ├── No Conflict → [Sync Forward]
    ├── Timestamp Wins → [Sync Newer]
    └── Manual Review → [Slack Alert]
    ↓
[Both DBs: Update Records]
    ↓
[Google Sheets: Sync Log]
```

### Code Node: Conflict Detection
```javascript
const postgres = $('PostgreSQL').all().map(item => ({
  id: item.json.id,
  data: item.json.data,
  updatedAt: new Date(item.json.updated_at),
  source: 'postgres'
}));

const mongo = $('MongoDB').all().map(item => ({
  id: item.json._id,
  data: item.json.data,
  updatedAt: new Date(item.json.updatedAt),
  source: 'mongo'
}));

// Create maps for comparison
const postgresMap = new Map(postgres.map(r => [r.id, r]));
const mongoMap = new Map(mongo.map(r => [r.id, r]));

const toSync = [];
const conflicts = [];

// Check postgres → mongo
postgres.forEach(record => {
  const mongoRecord = mongoMap.get(record.id);
  if (!mongoRecord) {
    toSync.push({ ...record, action: 'insert_mongo' });
  } else if (record.updatedAt > mongoRecord.updatedAt) {
    if (JSON.stringify(record.data) !== JSON.stringify(mongoRecord.data)) {
      conflicts.push({
        id: record.id,
        postgres: record,
        mongo: mongoRecord,
        resolution: 'timestamp'
      });
    }
  }
});

// Check mongo → postgres
mongo.forEach(record => {
  const postgresRecord = postgresMap.get(record.id);
  if (!postgresRecord) {
    toSync.push({ ...record, action: 'insert_postgres' });
  } else if (record.updatedAt > postgresRecord.updatedAt) {
    if (JSON.stringify(record.data) !== JSON.stringify(postgresRecord.data)) {
      conflicts.push({
        id: record.id,
        postgres: postgresRecord,
        mongo: record,
        resolution: 'timestamp'
      });
    }
  }
});

return {
  json: {
    toSync,
    conflicts,
    summary: {
      totalChanges: toSync.length + conflicts.length,
      syncable: toSync.length,
      conflicts: conflicts.length
    }
  }
};
```

---

## 8. Social Media Management

**Purpose:** Schedule and publish content across platforms

### Workflow Structure
```
[Airtable: Content Calendar]
    ↓
[Filter: Due Today]
    ↓
[Iterator: Each Post]
    ↓
[Router: Platform]
    ├── Twitter → [Twitter API: Post Thread]
    ├── LinkedIn → [LinkedIn API: Post]
    ├── Instagram → [Meta API: Post]
    └── Facebook → [Meta API: Post]
    ↓
[Code: Track Performance]
    ↓
[Airtable: Update Status]
    ↓
[Slack: Post Summary]
```

### Code Node: Twitter Thread Creator
```javascript
const post = $('Airtable').first().json;
const content = post.twitter_thread;

// Split into tweets (max 280 chars each)
const tweets = splitIntoTweets(content);

async function splitIntoTweets(content) {
  const maxChars = 280;
  const tweets = [];
  const paragraphs = content.split('\n\n');
  let currentTweet = '';
  
  for (const para of paragraphs) {
    if ((currentTweet + '\n\n' + para).length <= maxChars) {
      currentTweet += (currentTweet ? '\n\n' : '') + para;
    } else {
      if (currentTweet) tweets.push(currentTweet);
      currentTweet = para.length > maxChars ? splitLongParagraph(para, maxChars) : para;
    }
  }
  if (currentTweet) tweets.push(currentTweet);
  
  return tweets.map((t, i) => ({
    text: t,
    position: i + 1,
    total: tweets.length
  }));
}

function splitLongParagraph(para, maxChars) {
  // Split by sentences if too long
  const sentences = para.match(/[^\.!\?]+[\.!\?]+/g) || [para];
  const chunks = [];
  let current = '';
  
  for (const sentence of sentences) {
    if ((current + sentence).length <= maxChars) {
      current += sentence;
    } else {
      if (current) chunks.push(current.trim());
      current = sentence;
    }
  }
  if (current) chunks.push(current.trim());
  
  return chunks;
}

// Post thread
const postedTweets = [];
let parentTweetId = null;

for (const tweet of tweets) {
  const response = await fetch('https://api.twitter.com/2/tweets', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.TWITTER_BEARER_TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      text: tweet.text,
      reply: parentTweetId ? { in_reply_to_tweet_id: parentTweetId } : undefined
    })
  });
  
  const result = await response.json();
  postedTweets.push(result);
  parentTweetId = result.data.id;
}

return {
  json: {
    postId: postedTweets[0].data.id,
    tweetCount: postedTweets.length,
    urls: postedTweets.map(t => `https://twitter.com/user/status/${t.data.id}`)
  }
};
```

---

## 9. ETL Data Transformation

**Purpose:** Extract, transform, and load data between systems

### Workflow Structure
```
[S3: Download Source File]
    ↓
[Code: Parse CSV/JSON]
    ↓
[Code: Transform Data]
    ↓
[Code: Validate Schema]
    ↓
[Router: Validation Result]
    ├── Valid → [PostgreSQL: Bulk Insert]
    └── Invalid → [S3: Quarantine + Alert]
    ↓
[Code: Generate Report]
    ↓
[Email: Send Summary]
```

### Code Node: Data Transformation
```javascript
const sourceData = $('Parse CSV').all().map(item => item.json);

const transformed = sourceData.map((row, index) => {
  // Validate required fields
  if (!row.email || !row.name) {
    return {
      ...row,
      _error: 'Missing required fields',
      _status: 'invalid'
    };
  }
  
  // Transform and normalize
  return {
    id: generateId(row),
    email: row.email.toLowerCase().trim(),
    name: normalizeName(row.name),
    phone: normalizePhone(row.phone),
    company: row.company?.trim() || null,
    industry: mapIndustry(row.industry),
    revenue: parseCurrency(row.revenue),
    employees: parseInt(row.employees) || null,
    tags: parseTags(row.tags),
    source: row.source || 'etl_import',
    importedAt: new Date().toISOString(),
    _status: 'valid'
  };
});

function generateId(row) {
  return `${row.source || 'import'}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

function normalizeName(name) {
  return name.split(' ').map(w => 
    w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()
  ).join(' ');
}

function normalizePhone(phone) {
  if (!phone) return null;
  return phone.replace(/\D/g, '').replace(/^1?(\d{3})(\d{3})(\d{4})$/, '+1 ($1) $2-$3');
}

function mapIndustry(industry) {
  const mapping = {
    'tech': 'Technology',
    'software': 'Technology',
    'finance': 'Financial Services',
    'banking': 'Financial Services',
    'healthcare': 'Healthcare',
    'retail': 'Retail'
  };
  return mapping[industry?.toLowerCase()] || industry || 'Other';
}

function parseCurrency(value) {
  if (!value) return null;
  return parseFloat(value.toString().replace(/[$,]/g, ''));
}

function parseTags(tags) {
  if (!tags) return [];
  return tags.split(',').map(t => t.trim()).filter(t => t);
}

// Separate valid and invalid
const valid = transformed.filter(r => r._status === 'valid');
const invalid = transformed.filter(r => r._status === 'invalid');

return {
  json: {
    total: transformed.length,
    valid: valid.length,
    invalid: invalid.length,
    validRecords: valid,
    invalidRecords: invalid
  }
};
```

---

## 10. Incident Response Automation

**Purpose:** Automated incident detection, escalation, and resolution

### Workflow Structure
```
[Multiple Triggers]
    ├── [PagerDuty: New Incident]
    ├── [Datadog: Alert Triggered]
    └── [Webhook: Manual Report]
    ↓
[Code: Enrich Incident]
    ↓
[Router: Severity]
    ├── P1/Critical → [War Room + All Hands]
    ├── P2/High → [On-Call + Team Lead]
    ├── P3/Medium → [On-Call Only]
    └── P4/Low → [Ticket Queue]
    ↓
[Parallel Actions]
    ├── [Slack: Create Channel]
    ├── [Jira: Create Ticket]
    ├── [Status Page: Update]
    └── [Email: Notify Stakeholders]
    ↓
[Cron: Check Resolution]
    ↓
[Post-Incident: Generate Report]
```

### Code Node: Incident Enrichment
```javascript
const incident = $('Trigger').first().json;

// Fetch related data
const [services, onCall, recentIncidents] = await Promise.all([
  fetchServices(),
  fetchOnCall(incident.service_id),
  fetchRecentIncidents(incident.service_id)
]);

const service = services.find(s => s.id === incident.service_id);
const escalationPolicy = service?.escalation_policy;

// Determine severity
let severity = incident.severity || 'P3';
if (incident.title.match(/down|outage|critical/i)) {
  severity = 'P1';
} else if (incident.title.match(/degraded|slow|error/i)) {
  severity = 'P2';
}

// Calculate impact
const impact = {
  customers: estimateAffectedCustomers(service),
  revenue: estimateRevenueImpact(service),
  sla: checkSLAImpact(service, severity)
};

return {
  json: {
    ...incident,
    severity,
    service: service?.name,
    team: service?.team,
    onCall: onCall,
    escalationPolicy,
    impact,
    recentIncidents: recentIncidents.length,
    isRecurring: recentIncidents.length > 2,
    createdAt: new Date().toISOString(),
    status: 'triggered'
  }
};

async function fetchServices() {
  const response = await fetch('https://api.pagerduty.com/services', {
    headers: { 'Authorization': `Token token=${process.env.PAGERDUTY_KEY}` }
  });
  return (await response.json()).services;
}

async function fetchOnCall(serviceId) {
  // Fetch current on-call for service
  return { name: 'John Doe', email: 'john@example.com', phone: '+1234567890' };
}

async function fetchRecentIncidents(serviceId) {
  // Fetch incidents in last 24 hours
  return [];
}

function estimateAffectedCustomers(service) {
  // Based on service tier
  const tiers = { enterprise: 1000, business: 100, standard: 10 };
  return tiers[service?.tier] || 10;
}

function estimateRevenueImpact(service) {
  // Based on service criticality
  const impacts = { critical: 10000, high: 1000, medium: 100, low: 0 };
  return impacts[service?.criticality] || 0;
}

function checkSLAImpact(service, severity) {
  // Check if this affects SLA
  return severity === 'P1' || severity === 'P2';
}
```

### Code Node: War Room Creator
```javascript
const incident = $('Enrich').first().json;

// Create Slack channel
const channelResponse = await fetch('https://slack.com/api/conversations.create', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${process.env.SLACK_BOT_TOKEN}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: `warroom-${incident.id}-${Date.now()}`,
    is_private: false
  })
});

const channel = await channelResponse.json();

// Invite responders
const members = [
  incident.onCall.email,
  ...incident.team.members,
  ...incident.escalationPolicy.rules.flatMap(r => r.targets)
];

await fetch('https://slack.com/api/conversations.invite', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${process.env.SLACK_BOT_TOKEN}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    channel: channel.channel.id,
    users: members.join(',')
  })
});

// Post incident summary
await fetch('https://slack.com/api/chat.postMessage', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${process.env.SLACK_BOT_TOKEN}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    channel: channel.channel.id,
    text: `🚨 *INCIDENT: ${incident.severity}*\n\n*Title:* ${incident.title}\n*Service:* ${incident.service}\n*Impact:* ${incident.impact.customers} customers\n\n*On-Call:* ${incident.onCall.name}\n*Created:* ${incident.createdAt}\n\nPlease acknowledge and begin investigation.`,
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `🚨 *INCIDENT: ${incident.severity}*\n\n*Title:* ${incident.title}`
        }
      }
    ]
  })
});

return {
  json: {
    channel: channel.channel,
    channelUrl: `https://slack.com/archives/${channel.channel.id}`,
    membersInvited: members.length
  }
};
```

---

## Deployment Guide

### Self-Hosted Setup

```bash
# Docker Compose
version: '3'
services:
  n8n:
    image: n8nio/n8n
    ports:
      - "5678:5678"
    environment:
      - N8N_BASIC_AUTH_ACTIVE=true
      - N8N_BASIC_AUTH_USER=admin
      - N8N_BASIC_AUTH_PASSWORD=${N8N_PASSWORD}
      - DB_TYPE=postgresdb
      - DB_POSTGRESDB_HOST=postgres
      - DB_POSTGRESDB_PORT=5432
      - DB_POSTGRESDB_DATABASE=n8n
      - DB_POSTGRESDB_USER=n8n
      - DB_POSTGRESDB_PASSWORD=${DB_PASSWORD}
      - WEBHOOK_URL=https://n8n.yourdomain.com
    volumes:
      - n8n_data:/home/node/.n8n
    depends_on:
      - postgres

  postgres:
    image: postgres:13
    environment:
      - POSTGRES_USER=n8n
      - POSTGRES_PASSWORD=${DB_PASSWORD}
      - POSTGRES_DB=n8n
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  n8n_data:
  postgres_data:
```

### Environment Variables Template

```bash
# Authentication
N8N_BASIC_AUTH_USER=admin
N8N_BASIC_AUTH_PASSWORD=your_secure_password

# Database
DB_TYPE=postgresdb
DB_POSTGRESDB_HOST=localhost
DB_POSTGRESDB_PORT=5432
DB_POSTGRESDB_DATABASE=n8n
DB_POSTGRESDB_USER=n8n
DB_POSTGRESDB_PASSWORD=your_db_password

# External Services
OPENAI_API_KEY=sk-...
SLACK_BOT_TOKEN=xoxb-...
PAGERDUTY_KEY=your_pagerduty_key
STRIPE_WEBHOOK_SECRET=whsec_...

# Webhook
WEBHOOK_URL=https://n8n.yourdomain.com
```

---

## Best Practices

### Performance
- Use pagination for large datasets
- Implement rate limiting on API calls
- Cache frequently accessed data
- Use error workflows for graceful failures

### Security
- Store credentials in environment variables
- Enable HTTPS for webhooks
- Implement webhook signature validation
- Regular credential rotation

### Monitoring
- Set up health check endpoints
- Monitor workflow execution times
- Alert on error rates
- Track API usage quotas

---

*Last Updated: March 2026*
*Version: 2.0*
