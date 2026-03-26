# Quality Assurance & Compliance

## Testing, Monitoring, and Regulatory Compliance

---

## Overview

This guide covers:
- Quality assurance processes
- Accuracy testing methodologies
- Call monitoring and scoring
- Compliance requirements (TCPA, HIPAA, PCI, GDPR)
- Security standards
- Audit preparation

---

## 1. Quality Assurance Framework

### QA Pillars

```
┌─────────────────────────────────────────────────────────────┐
│                    Quality Assurance                        │
├─────────────┬─────────────┬─────────────┬─────────────────┤
│  Accuracy   │  Reliability│  Security   │  Compliance     │
│  (NLU, ASR) │ (Uptime,    │ (Data,      │ (TCPA, HIPAA,   │
│             │  Latency)   │  Access)    │  PCI, GDPR)     │
└─────────────┴─────────────┴─────────────┴─────────────────┘
```

### QA Metrics

| Category | Metric | Target | Measurement |
|----------|--------|--------|-------------|
| Accuracy | Intent Recognition | 95%+ | Weekly sampling |
| Accuracy | Entity Extraction | 93%+ | Weekly sampling |
| Accuracy | ASR Accuracy | 97%+ | Continuous |
| Reliability | System Uptime | 99.9%+ | Real-time |
| Reliability | Response Latency | <500ms | Real-time |
| Reliability | Call Success Rate | 99%+ | Daily |
| Security | Vulnerability Count | 0 critical | Monthly scan |
| Security | Access Violations | 0 | Real-time |
| Compliance | TCPA Violations | 0 | Per call |
| Compliance | Data Breaches | 0 | Real-time |

---

## 2. Accuracy Testing

### NLU Accuracy Testing

**Test Dataset Creation:**

```python
# Test dataset structure
test_dataset = {
    "intent_name": {
        "examples": [
            {"utterance": "I need to book an appointment", "expected_intent": "book_appointment"},
            {"utterance": "Can I schedule a time?", "expected_intent": "book_appointment"},
            # 200+ examples per intent
        ],
        "entities": [
            {"text": "tomorrow at 2pm", "entity": "datetime", "value": "2026-03-24T14:00:00"},
        ]
    }
}
```

**Testing Process:**

1. **Baseline Test** - Before each deployment
2. **Regression Test** - After each change
3. **Continuous Test** - Production sampling

**Metrics:**

```python
def calculate_nlu_metrics(predictions, actuals):
    # Intent accuracy
    intent_matches = sum(1 for p, a in zip(predictions, actuals) if p.intent == a.intent)
    intent_accuracy = intent_matches / len(actuals)
    
    # Entity F1 score
    entity_precision = calculate_precision(predictions, actuals, 'entities')
    entity_recall = calculate_recall(predictions, actuals, 'entities')
    entity_f1 = 2 * (entity_precision * entity_recall) / (entity_precision + entity_recall)
    
    # Confidence distribution
    confidence_scores = [p.confidence for p in predictions]
    
    return {
        "intent_accuracy": intent_accuracy,
        "entity_f1": entity_f1,
        "avg_confidence": sum(confidence_scores) / len(confidence_scores),
        "low_confidence_rate": sum(1 for c in confidence_scores if c < 0.7) / len(confidence_scores)
    }
```

**Acceptance Criteria:**

| Metric | Minimum | Target | Excellent |
|--------|---------|--------|-----------|
| Intent Accuracy | 90% | 95% | 98% |
| Entity F1 | 85% | 90% | 95% |
| Low Confidence Rate | <15% | <10% | <5% |

### ASR Accuracy Testing

**Test Audio Dataset:**

- 100+ hours of real call audio
- Diverse accents and dialects
- Various background noise levels
- Different phone qualities
- Multiple languages (if applicable)

**Testing Process:**

```python
def test_asr_accuracy(audio_files, expected_transcripts):
    results = []
    
    for audio, expected in zip(audio_files, expected_transcripts):
        # Get transcription from ASR provider
        transcription = asr.transcribe(audio)
        
        # Calculate Word Error Rate (WER)
        wer = calculate_wer(expected, transcription)
        
        # Calculate accuracy
        accuracy = 1 - wer
        
        results.append({
            "file": audio,
            "expected": expected,
            "actual": transcription,
            "wer": wer,
            "accuracy": accuracy
        })
    
    # Aggregate metrics
    avg_accuracy = sum(r["accuracy"] for r in results) / len(results)
    p90_accuracy = percentile([r["accuracy"] for r in results], 90)
    
    return {
        "average_accuracy": avg_accuracy,
        "p90_accuracy": p90_accuracy,
        "total_samples": len(results)
    }
```

**WER Calculation:**

```python
def calculate_wer(reference, hypothesis):
    """Calculate Word Error Rate"""
    ref_words = reference.lower().split()
    hyp_words = hypothesis.lower().split()
    
    # Levenshtein distance for words
    edits = levenshtein_distance(ref_words, hyp_words)
    wer = edits / len(ref_words)
    
    return wer
```

**Acceptance Criteria:**

| Environment | Target WER | Target Accuracy |
|-------------|------------|-----------------|
| Clean audio | <3% | 97%+ |
| Noisy audio | <8% | 92%+ |
| Accented speech | <10% | 90%+ |
| Overall | <5% | 95%+ |

---

## 3. Call Monitoring & Scoring

### Automated Call Scoring

**Scoring Categories:**

```python
call_scorecard = {
    "greeting": {
        "weight": 10,
        "criteria": [
            "Bot identified itself",
            "Offered assistance",
            "Tone was friendly"
        ]
    },
    "intent_recognition": {
        "weight": 25,
        "criteria": [
            "Correctly identified intent",
            "Asked clarifying questions if needed",
            "Didn't misunderstand user"
        ]
    },
    "information_accuracy": {
        "weight": 25,
        "criteria": [
            "Provided correct information",
            "Didn't hallucinate",
            "Cited sources when needed"
        ]
    },
    "conversation_flow": {
        "weight": 20,
        "criteria": [
            "Natural conversation",
            "Appropriate pauses",
            "Didn't interrupt"
        ]
    },
    "resolution": {
        "weight": 20,
        "criteria": [
            "Issue was resolved",
            "User confirmed satisfaction",
            "Appropriate handoff if needed"
        ]
    }
}
```

**Automated Scoring:**

```python
async def score_call(call_data):
    scores = {}
    
    # Greeting score
    greeting_detected = "hello" in call_data.transcript[:500].lower()
    scores["greeting"] = 100 if greeting_detected else 0
    
    # Intent recognition (compare to actual outcome)
    if call_data.predicted_intent == call_data.actual_intent:
        scores["intent_recognition"] = 100
    elif call_data.confidence > 0.7:
        scores["intent_recognition"] = 50
    else:
        scores["intent_recognition"] = 0
    
    # Information accuracy (check against knowledge base)
    accuracy = await verify_information(call_data.responses)
    scores["information_accuracy"] = accuracy * 100
    
    # Conversation flow (analyze turn-taking, interruptions)
    flow_score = analyze_conversation_flow(call_data.turns)
    scores["conversation_flow"] = flow_score
    
    # Resolution (check if user issue was resolved)
    resolved = await check_resolution(call_data)
    scores["resolution"] = 100 if resolved else 0
    
    # Weighted total
    total = sum(scores[k] * call_scorecard[k]["weight"] / 100 for k in scores)
    
    return {
        "category_scores": scores,
        "total_score": total,
        "grade": get_grade(total)
    }

def get_grade(score):
    if score >= 90: return "A"
    if score >= 80: return "B"
    if score >= 70: return "C"
    if score >= 60: return "D"
    return "F"
```

### Manual QA Review

**Sampling Strategy:**

| Call Type | Sample Rate | Reviewer |
|-----------|-------------|----------|
| Random | 2% of all calls | QA team |
| Low confidence | 100% | QA team |
| Handoffs | 100% | QA team |
| Negative sentiment | 100% | QA team |
| Long calls (>10 min) | 50% | QA team |
| New use cases | 100% | Senior QA |

**QA Review Form:**

```markdown
## Call QA Review

**Call ID:** _______________
**Date:** _______________
**Reviewer:** _______________

### Scoring (1-5 scale)

| Category | Score | Notes |
|----------|-------|-------|
| Greeting | ___/5 | |
| Intent Recognition | ___/5 | |
| Information Accuracy | ___/5 | |
| Conversation Flow | ___/5 | |
| Resolution | ___/5 | |

### Issues Identified

- [ ] Misunderstood intent
- [ ] Provided incorrect information
- [ ] Awkward conversation flow
- [ ] Failed to resolve
- [ ] Technical issue
- [ ] Other: _______________

### Root Cause

- [ ] NLU training gap
- [ ] Missing knowledge
- [ ] Integration issue
- [ ] Flow design issue
- [ ] Other: _______________

### Action Items

1. _______________________________________________
2. _______________________________________________

### Follow-up Required

- [ ] Yes - Assign to: _______________
- [ ] No
```

### QA Dashboard

**Key Metrics:**

- Average QA score (daily/weekly/monthly)
- Score distribution
- Common issues
- Improvement trends
- Reviewer consistency

---

## 4. Compliance Requirements

### TCPA (Telephone Consumer Protection Act)

**Requirements:**

1. **Prior Express Consent**
   - Written consent for autodialed calls
   - Clear disclosure of call purpose
   - Easy opt-out mechanism

2. **Do Not Call (DNC) Compliance**
   - Maintain internal DNC list
   - Scrub against national DNC registry
   - Honor opt-outs immediately

3. **Call Time Restrictions**
   - No calls before 8 AM or after 9 PM (recipient's time zone)
   - Respect recipient's time zone

4. **Caller ID**
   - Accurate caller ID information
   - No spoofing

5. **Recording Disclosure**
   - Inform callers if call is being recorded
   - "This call may be recorded for quality assurance"

**Implementation:**

```python
class TCPACompliance:
    def __init__(self, dnc_service_api):
        self.dnc_service = dnc_service_api
        self.internal_dnc = InternalDNCList()
    
    async def can_call(self, phone_number, consent_record):
        # Check internal DNC
        if await self.internal_dnc.is_listed(phone_number):
            return False, "Number on internal DNC list"
        
        # Check national DNC
        if await self.dnc_service.is_registered(phone_number):
            # Check if consent overrides DNC
            if not self._has_valid_consent(consent_record):
                return False, "Number on national DNC list"
        
        # Check call time
        if not self._is_valid_call_time(phone_number):
            return False, "Outside permitted calling hours"
        
        # Check consent
        if not self._has_valid_consent(consent_record):
            return False, "No valid consent on file"
        
        return True, "Call permitted"
    
    def _is_valid_call_time(self, phone_number):
        tz = get_timezone_for_number(phone_number)
        current_time = datetime.now(tz)
        return 8 <= current_time.hour < 21
    
    def _has_valid_consent(self, consent_record):
        if not consent_record:
            return False
        if consent_record.revoked:
            return False
        if consent_record.expired:
            return False
        return True
    
    async def process_opt_out(self, phone_number, reason=None):
        await self.internal_dnc.add(phone_number, reason)
        # Sync to CRM
        await crm.update_contact(phone_number, {"do_not_call": True})
```

### HIPAA (Health Insurance Portability and Accountability Act)

**Requirements:**

1. **Business Associate Agreement (BAA)**
   - Required with all vendors handling PHI
   - Must be signed before any PHI exchange

2. **Protected Health Information (PHI) Safeguards**
   - Encryption at rest and in transit
   - Access controls
   - Audit logging
   - Minimum necessary access

3. **Patient Authorization**
   - Consent for communications
   - Right to revoke consent
   - Documentation of consent

4. **Breach Notification**
   - Notify within 60 days of breach
   - Notify affected individuals
   - Notify HHS if 500+ affected

**Implementation:**

```python
class HIPAACompliance:
    def __init__(self):
        self.encryption_key = get_encryption_key()
        self.audit_logger = AuditLogger()
    
    def encrypt_phi(self, data):
        """Encrypt PHI before storage"""
        return encrypt(data, self.encryption_key)
    
    def decrypt_phi(self, encrypted_data):
        """Decrypt PHI for authorized access"""
        return decrypt(encrypted_data, self.encryption_key)
    
    async def log_access(self, user_id, patient_id, action, purpose):
        """Log all PHI access"""
        await self.audit_logger.log({
            "timestamp": datetime.utcnow().isoformat(),
            "user_id": user_id,
            "patient_id": patient_id,
            "action": action,
            "purpose": purpose,
            "ip_address": get_client_ip()
        })
    
    async def verify_authorization(self, patient_id, communication_type):
        """Verify patient has authorized this communication"""
        consent = await get_consent_record(patient_id)
        if not consent:
            return False
        if communication_type not in consent.authorized_types:
            return False
        if consent.revoked:
            return False
        return True
    
    def minimize_phi(self, data, purpose):
        """Return only necessary PHI for the purpose"""
        # Implement minimum necessary rule
        return filter_to_necessary_fields(data, purpose)
```

### PCI-DSS (Payment Card Industry Data Security Standard)

**Requirements:**

1. **Secure Network**
   - Firewalls
   - No vendor defaults

2. **Cardholder Data Protection**
   - Encryption in transit
   - Encryption at rest
   - Masking when displayed

3. **Access Control**
   - Need-to-know basis
   - Unique IDs
   - Authentication

4. **Monitoring**
   - Track all access
   - Regular testing
   - Security policies

**Implementation:**

```python
class PCICompliance:
    def __init__(self):
        self.vault = PaymentVault()
    
    async def process_payment(self, card_data, amount):
        """Process payment without storing card data"""
        # Never store full card number
        # Use tokenization
        
        # Send directly to payment processor
        token = await self.vault.create_token(card_data)
        
        # Process with token
        result = await payment_processor.charge(token, amount)
        
        # Log without sensitive data
        await self.log_transaction({
            "amount": amount,
            "last_four": card_data.number[-4:],
            "result": result.status
        })
        
        return result
    
    def mask_card_number(self, card_number):
        """Mask card number for display"""
        return f"****-****-****-{card_number[-4:]}"
    
    async def log_transaction(self, transaction_data):
        """Log transaction without sensitive data"""
        # Ensure no PAN, CVV, or track data in logs
        sanitized = self._sanitize_for_logging(transaction_data)
        await audit_logger.log(sanitized)
```

### GDPR (General Data Protection Regulation)

**Requirements:**

1. **Lawful Basis**
   - Consent, contract, legal obligation, etc.
   - Document the basis

2. **Data Subject Rights**
   - Right to access
   - Right to rectification
   - Right to erasure
   - Right to portability
   - Right to object

3. **Data Minimization**
   - Only collect necessary data
   - Limited retention

4. **Security**
   - Appropriate technical measures
   - Breach notification (72 hours)

**Implementation:**

```python
class GDPRCompliance:
    async def handle_access_request(self, user_id):
        """Handle right to access request"""
        data = await collect_all_user_data(user_id)
        return {
            "personal_data": data,
            "processing_purposes": get_purposes(data),
            "retention_period": get_retention_period(),
            "recipients": get_data_recipients()
        }
    
    async def handle_erasure_request(self, user_id):
        """Handle right to erasure request"""
        # Delete from all systems
        await db.delete("users", user_id)
        await db.delete("calls", user_id=user_id)
        await db.delete("transcripts", user_id=user_id)
        
        # Keep only legally required data
        await archive_for_legal_hold(user_id)
        
        return {"status": "completed"}
    
    async def handle_portability_request(self, user_id):
        """Handle right to data portability"""
        data = await collect_user_data(user_id)
        return {
            "format": "JSON",
            "data": data
        }
    
    def get_lawful_basis(self, processing_type):
        """Document lawful basis for processing"""
        bases = {
            "call_handling": "contract",
            "quality_improvement": "legitimate_interest",
            "marketing": "consent"
        }
        return bases.get(processing_type)
```

---

## 5. Security Standards

### Security Framework

**Layers of Security:**

```
┌─────────────────────────────────────────────────────────────┐
│                      Application Layer                       │
│  - Input validation  - Output encoding  - AuthZ/AuthN       │
├─────────────────────────────────────────────────────────────┤
│                       Infrastructure Layer                   │
│  - Firewalls  - WAF  - DDoS protection  - Network isolation  │
├─────────────────────────────────────────────────────────────┤
│                        Data Layer                            │
│  - Encryption  - Key management  - Access controls  - Audit  │
└─────────────────────────────────────────────────────────────┘
```

### Security Controls

| Control | Implementation | Frequency |
|---------|----------------|-----------|
| Vulnerability Scanning | Automated scans | Weekly |
| Penetration Testing | Third-party | Annual |
| Code Review | Peer review + SAST | Per PR |
| Dependency Scanning | Automated | Daily |
| Access Review | Manual review | Quarterly |
| Security Training | Online + phishing | Annual |
| Incident Response | Tabletop exercises | Quarterly |

### Encryption Standards

```python
# Data in transit
# - TLS 1.3 for all API communications
# - Certificate pinning for mobile apps
# - HSTS enabled

# Data at rest
from cryptography.fernet import Fernet

class EncryptionService:
    def __init__(self):
        self.key = get_key_from_vault()
        self.cipher = Fernet(self.key)
    
    def encrypt(self, data: str) -> str:
        return self.cipher.encrypt(data.encode()).decode()
    
    def decrypt(self, encrypted_data: str) -> str:
        return self.cipher.decrypt(encrypted_data.encode()).decode()

# Key rotation
# - Rotate encryption keys every 90 days
# - Re-encrypt data with new keys
# - Maintain key history for decryption
```

### Access Control

```python
from enum import Enum

class Role(Enum):
    ADMIN = "admin"
    ENGINEER = "engineer"
    SUPPORT = "support"
    VIEWER = "viewer"

class Permission(Enum):
    READ_CALLS = "calls:read"
    WRITE_CALLS = "calls:write"
    DELETE_CALLS = "calls:delete"
    READ_USERS = "users:read"
    WRITE_USERS = "users:write"
    ADMIN = "admin:*"

ROLE_PERMISSIONS = {
    Role.ADMIN: [Permission.ADMIN],
    Role.ENGINEER: [Permission.READ_CALLS, Permission.WRITE_CALLS, Permission.READ_USERS],
    Role.SUPPORT: [Permission.READ_CALLS, Permission.WRITE_CALLS],
    Role.VIEWER: [Permission.READ_CALLS, Permission.READ_USERS]
}

def check_permission(user, permission: Permission) -> bool:
    user_permissions = get_user_permissions(user)
    if Permission.ADMIN in user_permissions:
        return True
    return permission in user_permissions
```

---

## 6. Audit Preparation

### Audit Checklist

**Documentation:**

- [ ] Security policies and procedures
- [ ] Risk assessment documentation
- [ ] Incident response plan
- [ ] Business continuity plan
- [ ] Data flow diagrams
- [ ] Vendor agreements (BAAs, DPAs)
- [ ] Training records
- [ ] Access control policies

**Technical Evidence:**

- [ ] Encryption configuration
- [ ] Access control logs
- [ ] Audit logs
- [ ] Vulnerability scan reports
- [ ] Penetration test reports
- [ ] Backup and recovery tests
- [ ] Monitoring and alerting configuration

**Process Evidence:**

- [ ] Change management records
- [ ] Incident response logs
- [ ] Access review records
- [ ] Training completion records
- [ ] Vendor review records

### Audit Timeline

| Phase | Duration | Activities |
|-------|----------|------------|
| Preparation | 4-6 weeks | Gap analysis, documentation |
| Fieldwork | 2-4 weeks | Auditor testing, interviews |
| Reporting | 2-3 weeks | Draft report, management response |
| Remediation | 4-12 weeks | Address findings |
| Follow-up | 2-4 weeks | Verify remediation |

---

## 7. Incident Response

### Incident Classification

| Severity | Description | Response Time | Examples |
|----------|-------------|---------------|----------|
| Critical | System down, data breach | 15 minutes | Service outage, breach |
| High | Major functionality impaired | 1 hour | High error rates |
| Medium | Partial functionality impaired | 4 hours | Performance degradation |
| Low | Minor issues | 24 hours | Cosmetic issues |

### Incident Response Process

```python
class IncidentResponse:
    async def report_incident(self, severity, description, reporter):
        # Create incident ticket
        incident = await create_incident({
            "severity": severity,
            "description": description,
            "reporter": reporter,
            "timestamp": datetime.utcnow()
        })
        
        # Notify response team
        await notify_team(incident)
        
        # Start investigation
        return incident
    
    async def investigate(self, incident):
        # Gather information
        logs = await gather_logs(incident)
        metrics = await gather_metrics(incident)
        interviews = await interview_stakeholders(incident)
        
        # Determine root cause
        root_cause = await analyze_root_cause(logs, metrics, interviews)
        
        # Update incident
        incident.root_cause = root_cause
        return incident
    
    async def remediate(self, incident):
        # Implement fix
        fix = await implement_fix(incident)
        
        # Verify fix
        verified = await verify_fix(incident)
        
        # Update incident
        incident.status = "resolved" if verified else "ongoing"
        return incident
    
    async def post_mortem(self, incident):
        # Document lessons learned
        post_mortem = await create_post_mortem(incident)
        
        # Implement preventive measures
        await implement_prevention(post_mortem.actions)
        
        # Share learnings
        await share_learnings(post_mortem)
```

---

*Quality and compliance guide updated quarterly. Last updated: March 2026*
