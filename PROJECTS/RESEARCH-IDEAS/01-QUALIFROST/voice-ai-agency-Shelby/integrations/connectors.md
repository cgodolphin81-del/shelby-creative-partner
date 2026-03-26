# Integration Architecture

## Connectors, APIs, and System Integration Guide

---

## Overview

Voice AI systems don't operate in isolation. This guide covers:
- Integration architecture patterns
- Pre-built connectors
- Custom integration development
- API specifications
- Security and authentication
- Testing and monitoring

---

## 1. Integration Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                      Voice AI Platform                          │
├─────────────────────────────────────────────────────────────────┤
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐       │
│  │   ASR    │  │   NLU    │  │  Dialog  │  │   TTS    │       │
│  └────┬─────┘  └────┬─────┘  └────┬─────┘  └────┬─────┘       │
│       │             │             │             │               │
│       └─────────────┴──────┬──────┴─────────────┘               │
│                            │                                    │
│                    ┌───────┴───────┐                            │
│                    │  Integration  │                            │
│                    │     Layer     │                            │
│                    └───────┬───────┘                            │
└────────────────────────────┼────────────────────────────────────┘
                             │
        ┌────────────────────┼────────────────────┐
        │                    │                    │
   ┌────┴────┐         ┌────┴────┐         ┌────┴────┐
   │   CRM   │         │ Phone   │         │Helpdesk │
   │Systems  │         │ Systems │         │Systems  │
   └─────────┘         └─────────┘         └─────────┘
```

### Integration Patterns

#### 1. Real-Time API (Synchronous)

**Use Cases:**
- CRM lookups during calls
- Real-time data updates
- Authentication checks
- Availability checks

**Characteristics:**
- Low latency required (<500ms)
- Request-response pattern
- Immediate results needed

**Example:**
```python
async def get_customer_data(phone_number):
    response = await http.get(
        f"https://api.crm.com/customers/lookup/{phone_number}",
        headers={"Authorization": f"Bearer {API_KEY}"}
    )
    return response.json()
```

#### 2. Event-Driven (Asynchronous)

**Use Cases:**
- Call logging
- Transcript storage
- Analytics events
- Notifications

**Characteristics:**
- Fire-and-forget
- Queue-based
- Can have slight delay

**Example:**
```python
async def log_call_event(event_data):
    await queue.publish(
        "call-events",
        event_data
    )
```

#### 3. Webhook (Inbound)

**Use Cases:**
- CRM updates triggering callbacks
- Status change notifications
- External system events

**Characteristics:**
- Platform receives webhooks
- Event-driven processing
- Signature verification required

**Example:**
```python
@app.post("/webhooks/crm")
async def crm_webhook(request):
    # Verify signature
    if not verify_signature(request):
        raise HTTPException(401)
    
    event = request.json()
    await process_crm_event(event)
    
    return {"status": "ok"}
```

#### 4. Batch Sync

**Use Cases:**
- Data synchronization
- Nightly updates
- Bulk imports

**Characteristics:**
- Scheduled jobs
- Large data volumes
- Idempotent operations

**Example:**
```python
@cron.schedule("0 2 * * *")  # Daily at 2 AM
async def sync_customer_data():
    customers = await crm.get_all_customers()
    await db.bulk_upsert("customers", customers)
```

---

## 2. Pre-Built Connectors

### CRM Systems

#### Salesforce

**Capabilities:**
- Contact lookup by phone
- Lead creation
- Case creation
- Activity logging
- Opportunity updates

**Authentication:** OAuth 2.0

**Setup:**
1. Create Connected App in Salesforce
2. Configure OAuth scopes
3. Store credentials securely
4. Implement token refresh

**Example:**
```python
class SalesforceConnector:
    def __init__(self, client_id, client_secret, refresh_token):
        self.client_id = client_id
        self.client_secret = client_secret
        self.refresh_token = refresh_token
        self.access_token = None
    
    async def lookup_contact(self, phone):
        query = f"SELECT Id, Name, Email FROM Contact WHERE Phone = '{phone}'"
        result = await self._query(query)
        return result
    
    async def create_case(self, contact_id, subject, description):
        case_data = {
            "ContactId": contact_id,
            "Subject": subject,
            "Description": description,
            "Origin": "Phone"
        }
        return await self._create("Case", case_data)
```

#### HubSpot

**Capabilities:**
- Contact lookup
- Deal creation
- Ticket creation
- Activity logging
- Company association

**Authentication:** Private App Token or OAuth 2.0

**Example:**
```python
class HubSpotConnector:
    def __init__(self, api_key):
        self.api_key = api_key
        self.base_url = "https://api.hubapi.com"
    
    async def search_contact(self, phone):
        response = await http.post(
            f"{self.base_url}/crm/v3/objects/contacts/search",
            headers={"Authorization": f"Bearer {self.api_key}"},
            json={
                "filterGroups": [{
                    "filters": [{
                        "propertyName": "phone",
                        "operator": "EQ",
                        "value": phone
                    }]
                }]
            }
        )
        return response.json()
```

#### Microsoft Dynamics 365

**Capabilities:**
- Contact management
- Case management
- Activity tracking
- Custom entity support

**Authentication:** OAuth 2.0 (Azure AD)

---

### Phone Systems

#### Twilio

**Capabilities:**
- Inbound call handling
- Outbound calling
- Call recording
- SMS integration
- Conference calls

**Authentication:** API Key + Secret

**Example:**
```python
from twilio.rest import Client

class TwilioConnector:
    def __init__(self, account_sid, auth_token):
        self.client = Client(account_sid, auth_token)
    
    def create_call(self, to, from_, url):
        call = self.client.calls.create(
            to=to,
            from_=from_,
            url=url
        )
        return call.sid
    
    def get_recording(self, call_sid):
        recordings = self.client.recordings.list(call_sid)
        if recordings:
            return recordings[0].media()
```

#### Vonage (Nexmo)

**Capabilities:**
- Voice API
- SMS API
- Number management
- Verify API

**Authentication:** API Key + Secret or JWT

#### AWS Connect

**Capabilities:**
- Contact flow integration
- Agent routing
- Real-time metrics
- Recording access

**Authentication:** IAM Roles

---

### Helpdesk Systems

#### Zendesk

**Capabilities:**
- Ticket creation
- Ticket updates
- User lookup
- Comment addition
- Attachment upload

**Authentication:** API Token or OAuth 2.0

**Example:**
```python
class ZendeskConnector:
    def __init__(self, subdomain, email, api_token):
        self.base_url = f"https://{subdomain}.zendesk.com/api/v2"
        self.auth = (f"{email}/token", api_token)
    
    async def create_ticket(self, subject, description, requester_email):
        ticket_data = {
            "ticket": {
                "subject": subject,
                "comment": {"body": description},
                "requester": {"email": requester_email}
            }
        }
        response = await http.post(
            f"{self.base_url}/tickets.json",
            auth=self.auth,
            json=ticket_data
        )
        return response.json()
```

#### Freshdesk

**Capabilities:**
- Ticket management
- Contact management
- Company management
- Time tracking

**Authentication:** API Key

#### Intercom

**Capabilities:**
- Conversation creation
- User lookup
- Message sending
- Article suggestions

**Authentication:** Access Token

---

### Calendar Systems

#### Google Calendar

**Capabilities:**
- Availability checking
- Event creation
- Event updates
- Event cancellation

**Authentication:** OAuth 2.0 (Google Cloud)

**Example:**
```python
from google.oauth2 import service_account
from googleapiclient.discovery import build

class GoogleCalendarConnector:
    def __init__(self, credentials_path):
        creds = service_account.Credentials.from_service_account_file(
            credentials_path,
            scopes=['https://www.googleapis.com/auth/calendar']
        )
        self.service = build('calendar', 'v3', credentials=creds)
    
    def find_available_slots(self, calendar_id, start, end, duration):
        freebusy = self.service.freebusy().query(
            body={
                "timeMin": start,
                "timeMax": end,
                "items": [{"id": calendar_id}]
            }
        ).execute()
        
        return self._extract_available_slots(freebusy, duration)
    
    def create_event(self, calendar_id, summary, start, end, attendees):
        event = {
            'summary': summary,
            'start': {'dateTime': start, 'timeZone': 'UTC'},
            'end': {'dateTime': end, 'timeZone': 'UTC'},
            'attendees': [{'email': e} for e in attendees]
        }
        return self.service.events().insert(
            calendarId=calendar_id,
            body=event
        ).execute()
```

#### Microsoft Outlook/Exchange

**Capabilities:**
- Calendar management
- Meeting scheduling
- Availability checking

**Authentication:** OAuth 2.0 (Azure AD)

#### Calendly

**Capabilities:**
- Event type lookup
- Availability checking
- Booking creation
- Webhook notifications

**Authentication:** OAuth 2.0 or API Key

---

### Payment Systems

#### Stripe

**Capabilities:**
- Payment processing
- Subscription management
- Invoice creation
- Refund processing

**Authentication:** API Key (secret)

**Example:**
```python
import stripe

class StripeConnector:
    def __init__(self, api_key):
        stripe.api_key = api_key
    
    def create_payment_intent(self, amount, currency, customer_id):
        intent = stripe.PaymentIntent.create(
            amount=amount,
            currency=currency,
            customer=customer_id
        )
        return intent.client_secret
    
    def process_refund(self, payment_intent_id, amount=None):
        refund_params = {"payment_intent": payment_intent_id}
        if amount:
            refund_params["amount"] = amount
        return stripe.Refund.create(**refund_params)
```

#### PayPal

**Capabilities:**
- Payment processing
- Subscription management
- Invoice management

**Authentication:** OAuth 2.0

---

### Database Systems

#### PostgreSQL

**Capabilities:**
- Customer data lookup
- Order history
- Custom data storage

**Authentication:** Connection string with SSL

**Example:**
```python
import asyncpg

class PostgresConnector:
    def __init__(self, connection_string):
        self.connection_string = connection_string
    
    async def get_customer(self, phone):
        conn = await asyncpg.connect(self.connection_string)
        result = await conn.fetchrow(
            "SELECT * FROM customers WHERE phone = $1",
            phone
        )
        await conn.close()
        return dict(result) if result else None
```

#### MongoDB

**Capabilities:**
- Document storage
- Flexible schemas
- Real-time updates

**Authentication:** Connection string with auth

#### Snowflake

**Capabilities:**
- Data warehouse queries
- Analytics data
- Historical lookups

**Authentication:** Username/Password or Key Pair

---

## 3. Custom Integration Development

### Integration SDK

**Base Connector Class:**
```python
from abc import ABC, abstractmethod
from typing import Optional, Dict, Any

class BaseConnector(ABC):
    def __init__(self, config: Dict[str, Any]):
        self.config = config
        self._authenticated = False
    
    @abstractmethod
    async def authenticate(self) -> bool:
        """Authenticate with the external system"""
        pass
    
    @abstractmethod
    async def health_check(self) -> bool:
        """Check if connection is healthy"""
        pass
    
    @abstractmethod
    async def sync_data(self, data_type: str, filters: Dict) -> Any:
        """Sync data from external system"""
        pass
    
    def log_action(self, action: str, details: Dict):
        """Log integration actions for monitoring"""
        logger.info(f"Integration [{self.__class__.__name__}]: {action}", extra=details)
```

### Error Handling

```python
class IntegrationError(Exception):
    def __init__(self, message: str, retryable: bool = False):
        super().__init__(message)
        self.retryable = retryable

class RateLimitError(IntegrationError):
    def __init__(self, message: str, retry_after: int):
        super().__init__(message, retryable=True)
        self.retry_after = retry_after

class AuthenticationError(IntegrationError):
    def __init__(self, message: str):
        super().__init__(message, retryable=False)

# Retry logic with exponential backoff
async def with_retry(func, max_retries=3, base_delay=1):
    for attempt in range(max_retries):
        try:
            return await func()
        except RateLimitError as e:
            delay = e.retry_after
            logger.warning(f"Rate limited, waiting {delay}s")
            await asyncio.sleep(delay)
        except IntegrationError as e:
            if e.retryable and attempt < max_retries - 1:
                delay = base_delay * (2 ** attempt)
                logger.warning(f"Retryable error, waiting {delay}s")
                await asyncio.sleep(delay)
            else:
                raise
        except Exception as e:
            logger.error(f"Unexpected error: {e}")
            raise
```

### Data Mapping

```python
class DataMapper:
    """Map between external system schemas and internal schema"""
    
    def __init__(self, mapping_config: Dict):
        self.mapping = mapping_config
    
    def map_to_internal(self, external_data: Dict, source: str) -> Dict:
        """Convert external data to internal schema"""
        field_mapping = self.mapping.get(source, {})
        internal_data = {}
        
        for internal_field, external_path in field_mapping.items():
            value = self._get_nested_value(external_data, external_path)
            internal_data[internal_field] = value
        
        return internal_data
    
    def map_to_external(self, internal_data: Dict, source: str) -> Dict:
        """Convert internal data to external schema"""
        field_mapping = self.mapping.get(source, {})
        external_data = {}
        
        for internal_field, external_path in field_mapping.items():
            if internal_field in internal_data:
                self._set_nested_value(
                    external_data, 
                    external_path, 
                    internal_data[internal_field]
                )
        
        return external_data
    
    def _get_nested_value(self, data: Dict, path: str) -> Any:
        """Get value from nested dict using dot notation"""
        keys = path.split('.')
        value = data
        for key in keys:
            if isinstance(value, dict) and key in value:
                value = value[key]
            else:
                return None
        return value
    
    def _set_nested_value(self, data: Dict, path: str, value: Any):
        """Set value in nested dict using dot notation"""
        keys = path.split('.')
        for key in keys[:-1]:
            data = data.setdefault(key, {})
        data[keys[-1]] = value
```

---

## 4. API Specifications

### Internal Integration API

**Base URL:** `https://api.youragency.com/v1`

#### Authentication

```http
Authorization: Bearer <api_key>
```

#### Endpoints

##### Create Call Session

```http
POST /sessions
Content-Type: application/json

{
  "phone_number": "+1234567890",
  "use_case": "support",
  "context": {
    "customer_id": "cust_123",
    "previous_interactions": [...]
  }
}

Response:
{
  "session_id": "sess_abc123",
  "status": "active"
}
```

##### Get Session Status

```http
GET /sessions/{session_id}

Response:
{
  "session_id": "sess_abc123",
  "status": "active",
  "current_intent": "check_order_status",
  "collected_data": {
    "order_number": "ORD-12345"
  },
  "transcript": [...]
}
```

##### End Session

```http
POST /sessions/{session_id}/end
Content-Type: application/json

{
  "outcome": "completed",
  "summary": "Customer checked order status, delivery confirmed",
  "handoff_to": null
}
```

##### Webhook Configuration

```http
POST /webhooks
Content-Type: application/json

{
  "url": "https://client.com/webhooks/voice-ai",
  "events": ["session.started", "session.ended", "handoff.requested"],
  "secret": "whsec_..."
}
```

### Webhook Payloads

#### Session Started

```json
{
  "event": "session.started",
  "timestamp": "2026-03-23T10:30:00Z",
  "data": {
    "session_id": "sess_abc123",
    "phone_number": "+1234567890",
    "use_case": "support"
  }
}
```

#### Session Ended

```json
{
  "event": "session.ended",
  "timestamp": "2026-03-23T10:35:00Z",
  "data": {
    "session_id": "sess_abc123",
    "duration_seconds": 300,
    "outcome": "completed",
    "summary": "Customer checked order status",
    "transcript_url": "https://..."
  }
}
```

#### Handoff Requested

```json
{
  "event": "handoff.requested",
  "timestamp": "2026-03-23T10:35:00Z",
  "data": {
    "session_id": "sess_abc123",
    "reason": "complex_issue",
    "context": {
      "customer_id": "cust_123",
      "issue_type": "billing_dispute",
      "collected_data": {...}
    },
    "suggested_agent": "billing_team"
  }
}
```

---

## 5. Security & Authentication

### Authentication Methods

| Method | Use Case | Security Level |
|--------|----------|----------------|
| API Key | Simple integrations | Medium |
| OAuth 2.0 | User data access | High |
| JWT | Service-to-service | High |
| mTLS | Enterprise integrations | Very High |
| IP Whitelist | Additional layer | Medium |

### Best Practices

**API Key Management:**
```python
# Store in secrets manager, not environment variables
from aws_secretsmanager import get_secret

async def get_api_key(secret_name: str) -> str:
    secret = await get_secret(secret_name)
    return secret['api_key']

# Rotate keys regularly
# Use different keys per environment
# Implement key revocation
```

**OAuth 2.0 Flow:**
```python
# 1. Redirect to authorization
auth_url = (
    f"https://provider.com/oauth/authorize?"
    f"client_id={client_id}&"
    f"redirect_uri={redirect_uri}&"
    f"response_type=code&"
    f"scope={scopes}&"
    f"state={state}"
)

# 2. Exchange code for token
async def exchange_code(code: str) -> dict:
    response = await http.post(
        "https://provider.com/oauth/token",
        data={
            "grant_type": "authorization_code",
            "code": code,
            "redirect_uri": redirect_uri,
            "client_id": client_id,
            "client_secret": client_secret
        }
    )
    return response.json()

# 3. Refresh token before expiry
async def refresh_token(refresh_token: str) -> dict:
    response = await http.post(
        "https://provider.com/oauth/token",
        data={
            "grant_type": "refresh_token",
            "refresh_token": refresh_token,
            "client_id": client_id,
            "client_secret": client_secret
        }
    )
    return response.json()
```

**Data Encryption:**
- TLS 1.3 for all data in transit
- AES-256 for data at rest
- Field-level encryption for PII
- Key rotation every 90 days

**Access Control:**
- Principle of least privilege
- Role-based access control (RBAC)
- Audit logging for all access
- Regular access reviews

---

## 6. Testing & Monitoring

### Integration Testing

**Test Categories:**

1. **Unit Tests** - Individual connector methods
2. **Integration Tests** - End-to-end with sandbox
3. **Contract Tests** - API schema validation
4. **Load Tests** - Performance under load
5. **Chaos Tests** - Failure scenarios

**Example Test:**
```python
import pytest

class TestSalesforceConnector:
    @pytest.fixture
    def connector(self):
        return SalesforceConnector(
            client_id="test_id",
            client_secret="test_secret",
            refresh_token="test_token"
        )
    
    @pytest.mark.asyncio
    async def test_lookup_contact_success(self, connector, mock_http):
        mock_http.get.return_value.json.return_value = {
            "records": [{"Id": "123", "Name": "John Doe"}]
        }
        
        result = await connector.lookup_contact("+1234567890")
        
        assert result["Id"] == "123"
        assert result["Name"] == "John Doe"
    
    @pytest.mark.asyncio
    async def test_lookup_contact_not_found(self, connector, mock_http):
        mock_http.get.return_value.json.return_value = {"records": []}
        
        result = await connector.lookup_contact("+1234567890")
        
        assert result is None
    
    @pytest.mark.asyncio
    async def test_rate_limit_handling(self, connector, mock_http):
        mock_http.get.side_effect = RateLimitError("Rate limited", 60)
        
        with pytest.raises(RateLimitError):
            await connector.lookup_contact("+1234567890")
```

### Monitoring

**Key Metrics:**

| Metric | Target | Alert Threshold |
|--------|--------|-----------------|
| API Latency (p95) | <500ms | >1000ms |
| Error Rate | <1% | >5% |
| Success Rate | >99% | <95% |
| Rate Limit Hits | <100/day | >1000/day |
| Auth Failures | <10/day | >50/day |

**Monitoring Dashboard:**
```python
# Example metrics collection
from prometheus_client import Counter, Histogram, Gauge

# Metrics
integration_requests = Counter(
    'integration_requests_total',
    'Total integration requests',
    ['connector', 'endpoint', 'status']
)

integration_latency = Histogram(
    'integration_latency_seconds',
    'Integration latency',
    ['connector', 'endpoint']
)

integration_errors = Counter(
    'integration_errors_total',
    'Integration errors',
    ['connector', 'error_type']
)

# Usage in connector
async def make_request(self, endpoint: str):
    start_time = time.time()
    try:
        result = await self._do_request(endpoint)
        integration_requests.labels(
            connector=self.name,
            endpoint=endpoint,
            status='success'
        ).inc()
        return result
    except Exception as e:
        integration_requests.labels(
            connector=self.name,
            endpoint=endpoint,
            status='error'
        ).inc()
        integration_errors.labels(
            connector=self.name,
            error_type=type(e).__name__
        ).inc()
        raise
    finally:
        integration_latency.labels(
            connector=self.name,
            endpoint=endpoint
        ).observe(time.time() - start_time)
```

### Alerting

**Alert Rules:**
```yaml
groups:
  - name: integration-alerts
    rules:
      - alert: HighErrorRate
        expr: |
          rate(integration_errors_total[5m]) > 0.05
        for: 5m
        labels:
          severity: critical
        annotations:
          summary: "High integration error rate"
      
      - alert: HighLatency
        expr: |
          histogram_quantile(0.95, rate(integration_latency_seconds_bucket[5m])) > 1
        for: 10m
        labels:
          severity: warning
        annotations:
          summary: "High integration latency"
      
      - alert: AuthenticationFailures
        expr: |
          rate(integration_errors_total{error_type="AuthenticationError"}[1h]) > 10
        for: 5m
        labels:
          severity: critical
        annotations:
          summary: "Multiple authentication failures"
```

---

## 7. Integration Checklist

### Pre-Integration

- [ ] Requirements documented
- [ ] API access obtained
- [ ] Authentication method determined
- [ ] Data mapping defined
- [ ] Error handling strategy defined
- [ ] Rate limits understood
- [ ] Compliance requirements identified

### Development

- [ ] Connector implemented
- [ ] Authentication implemented
- [ ] Error handling implemented
- [ ] Logging implemented
- [ ] Metrics implemented
- [ ] Unit tests written
- [ ] Integration tests written

### Testing

- [ ] Sandbox testing complete
- [ ] Load testing complete
- [ ] Failure scenario testing complete
- [ ] Security review complete
- [ ] Performance benchmarks met

### Deployment

- [ ] Credentials stored securely
- [ ] Monitoring configured
- [ ] Alerting configured
- [ ] Runbook created
- [ ] Team trained

### Post-Deployment

- [ ] Health checks passing
- [ ] Metrics flowing
- [ ] No errors in logs
- [ ] Client validation complete
- [ ] Documentation updated

---

*Integration guide updated quarterly. Last updated: March 2026*
