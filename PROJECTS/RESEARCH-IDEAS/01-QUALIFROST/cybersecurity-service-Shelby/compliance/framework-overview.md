# Compliance Frameworks Overview

## Complete Guide to Major Security & Privacy Frameworks

---

## Framework Comparison Matrix

| Framework | Focus | Industry | Certification Body | Validity | Typical Cost |
|-----------|-------|----------|-------------------|----------|--------------|
| SOC 2 | Security controls | SaaS, Tech | CPA Firms | 1 year | $20K-60K |
| ISO 27001 | ISMS | All industries | Accredited Bodies | 3 years | $50K-100K |
| GDPR | Data privacy | EU operations | Supervisory Authorities | Ongoing | €10K-50K |
| HIPAA | Healthcare data | Healthcare | HHS/OCR | Ongoing | $20K-50K |
| PCI-DSS | Payment cards | Payment processing | QSA/AOC | 1 year | $30K-70K |

---

## SOC 2 (Service Organization Control 2)

### Overview
SOC 2 is an auditing procedure that ensures service providers securely manage data to protect the interests of their clients.

### Trust Services Criteria

#### **Security (Required)**
- Access controls
- System operations
- Change management
- Risk mitigation

#### **Availability (Optional)**
- System uptime
- Disaster recovery
- Business continuity

#### **Processing Integrity (Optional)**
- Data accuracy
- Processing completeness
- Timeliness

#### **Confidentiality (Optional)**
- Data encryption
- Access restrictions
- Disposal procedures

#### **Privacy (Optional)**
- Data collection
- Consent management
- Individual rights

### Implementation Timeline
- **Phase 1 (Weeks 1-4):** Gap analysis and scoping
- **Phase 2 (Weeks 5-12):** Control implementation
- **Phase 3 (Weeks 13-16):** Internal testing
- **Phase 4 (Weeks 17-20):** Type I audit
- **Phase 5 (Months 6-12):** Operating period
- **Phase 6 (Month 12+):** Type II audit

### Key Documents Required
- Information security policies
- Risk assessment documentation
- Access control procedures
- Change management logs
- Incident response plan
- Vendor management program
- Employee training records
- System monitoring logs

---

## ISO 27001 (Information Security Management System)

### Overview
ISO 27001 is an international standard for managing information security. It specifies requirements for establishing, implementing, maintaining, and continually improving an ISMS.

### Key Clauses

#### **Clause 4: Context of the Organization**
- Understanding organizational context
- Understanding stakeholder needs
- ISMS scope definition

#### **Clause 5: Leadership**
- Leadership commitment
- Security policy
- Roles and responsibilities

#### **Clause 6: Planning**
- Risk assessment
- Risk treatment
- Security objectives

#### **Clause 7: Support**
- Resources
- Competence
- Awareness
- Communication
- Documentation

#### **Clause 8: Operation**
- Operational planning
- Risk assessment execution
- Risk treatment implementation

#### **Clause 9: Performance Evaluation**
- Monitoring and measurement
- Internal audit
- Management review

#### **Clause 10: Improvement**
- Nonconformity management
- Continual improvement

### Annex A Controls (93 Controls)

**Organizational Controls (37)**
- Policies, roles, responsibilities
- Access control, supplier relationships
- Incident management, business continuity

**People Controls (8)**
- Screening, training, awareness
- Disciplinary processes, remote work

**Physical Controls (14)**
- Secure areas, equipment security
- Clear desk, screen policies

**Technological Controls (34)**
- Identity management, authentication
- Encryption, logging, monitoring
- Secure development, vulnerability management

### Certification Process
1. **ISMS Development** (3-6 months)
2. **Internal Audit** (2-4 weeks)
3. **Management Review** (1-2 weeks)
4. **Stage 1 Audit** (Documentation review)
5. **Stage 2 Audit** (Implementation verification)
6. **Certification Decision**
7. **Surveillance Audits** (Annual)
8. **Recertification** (Every 3 years)

---

## GDPR (General Data Protection Regulation)

### Overview
GDPR is the EU's comprehensive data privacy regulation that applies to any organization processing EU residents' personal data.

### Key Principles

1. **Lawfulness, Fairness, Transparency**
2. **Purpose Limitation**
3. **Data Minimization**
4. **Accuracy**
5. **Storage Limitation**
6. **Integrity and Confidentiality**
7. **Accountability**

### Legal Bases for Processing

- Consent
- Contract performance
- Legal obligation
- Vital interests
- Public task
- Legitimate interests

### Data Subject Rights

| Right | Description | Response Time |
|-------|-------------|---------------|
| Access | Right to obtain personal data | 30 days |
| Rectification | Right to correct inaccurate data | 30 days |
| Erasure | "Right to be forgotten" | 30 days |
| Restriction | Right to limit processing | 30 days |
| Portability | Right to data transfer | 30 days |
| Object | Right to object to processing | 30 days |

### Compliance Requirements

#### **Technical Measures**
- Pseudonymization and encryption
- Confidentiality, integrity, availability
- Testing and evaluation of security measures
- Data protection by design and default

#### **Organizational Measures**
- Data protection policies
- Staff training and confidentiality
- Data processing agreements
- Records of processing activities
- Data protection impact assessments
- Data breach notification procedures

#### **Documentation Required**
- Records of Processing Activities (RoPA)
- Data Protection Impact Assessments (DPIA)
- Data Processing Agreements (DPA)
- Privacy notices and policies
- Breach register
- Consent records

### Fines and Penalties
- **Tier 1:** Up to €10 million or 2% of global revenue
- **Tier 2:** Up to €20 million or 4% of global revenue

---

## HIPAA (Health Insurance Portability and Accountability Act)

### Overview
HIPAA establishes national standards for protecting sensitive patient health information in the United States.

### Key Rules

#### **Privacy Rule**
- Protected Health Information (PHI) definition
- Permitted uses and disclosures
- Patient rights
- Administrative requirements

#### **Security Rule**
- Administrative safeguards
- Physical safeguards
- Technical safeguards
- Organizational requirements
- Policies and procedures

#### **Breach Notification Rule**
- Breach definition and assessment
- Notification requirements
- Timeline requirements
- Documentation requirements

### Security Rule Safeguards

#### **Administrative Safeguards**
- Security management process
- Assigned security responsibility
- Workforce security
- Information access management
- Security awareness training
- Security incident procedures
- Contingency plan
- Evaluation
- Business associate management

#### **Physical Safeguards**
- Facility access controls
- Workstation use and security
- Device and media controls

#### **Technical Safeguards**
- Access control
- Audit controls
- Integrity controls
- Authentication
- Transmission security

### Compliance Timeline
- **Phase 1 (Weeks 1-4):** Risk analysis and gap assessment
- **Phase 2 (Weeks 5-8):** Policy development
- **Phase 3 (Weeks 9-12):** Control implementation
- **Phase 4 (Weeks 13-16):** Training and documentation
- **Phase 5 (Ongoing):** Monitoring and auditing

### Required Documentation
- Risk analysis report
- Risk management plan
- Security policies and procedures
- Business associate agreements
- Training records
- Incident response logs
- Contingency plans
- Access control logs

### Penalties
- **Tier 1:** $100 - $50,000 per violation (unknowing)
- **Tier 2:** $1,000 - $50,000 per violation (reasonable cause)
- **Tier 3:** $10,000 - $50,000 per violation (willful neglect, corrected)
- **Tier 4:** $50,000+ per violation (willful neglect, not corrected)
- **Annual Maximum:** $1.5 million per violation category

---

## PCI-DSS (Payment Card Industry Data Security Standard)

### Overview
PCI-DSS is a set of security standards designed to ensure that all companies that accept, process, store, or transmit credit card information maintain a secure environment.

### 12 Requirements

#### **Build and Maintain a Secure Network**
1. Install and maintain firewall configuration
2. Do not use vendor-supplied defaults

#### **Protect Cardholder Data**
3. Protect stored cardholder data
4. Encrypt transmission of cardholder data

#### **Maintain a Vulnerability Management Program**
5. Protect against malware
6. Develop and maintain secure systems

#### **Implement Strong Access Control Measures**
7. Restrict access on need-to-know basis
8. Identify and authenticate access
9. Restrict physical access

#### **Regularly Monitor and Test Networks**
10. Track and monitor all access
11. Test security systems regularly

#### **Maintain an Information Security Policy**
12. Maintain security policy

### Validation Levels

| Level | Transaction Volume | Validation Requirements |
|-------|-------------------|------------------------|
| 1 | 6M+ annually | Annual ROC by QSA + quarterly ASV scans |
| 2 | 1M - 6M annually | Annual AOC by QSA/ISA + quarterly ASV scans |
| 3 | 20K - 1M annually | Annual SAQ + quarterly ASV scans |
| 4 | <20K annually | Annual SAQ + quarterly ASV scans |

### Self-Assessment Questionnaires (SAQ)

| SAQ Type | Description | Eligible Merchants |
|----------|-------------|-------------------|
| SAQ A | Card-not-present, outsourced | E-commerce, mail/telephone |
| SAQ A-EP | Partially outsourced | E-commerce with some control |
| SAQ B | Imprint machines/standalone terminals | Traditional retail |
| SAQ B-IP | IP-connected terminals | Retail with IP terminals |
| SAQ C-VT | Virtual terminals | Manual entry, no storage |
| SAQ C | Standalone terminals | Traditional with POS systems |
| SAQ D | All others | Full scope merchants |
| SAQ P2PE | Point-to-point encryption | P2PE validated solutions |

### Compliance Process
1. **Scope Determination** - Identify cardholder data environment
2. **Gap Assessment** - Compare current state to requirements
3. **Remediation** - Address identified gaps
4. **Documentation** - Complete SAQ or prepare for ROC
5. **Assessment** - QSA audit or self-assessment
6. **Attestation** - Submit AOC to acquiring bank
7. **Maintenance** - Ongoing compliance monitoring

---

## Framework Selection Guide

### Choose SOC 2 If:
- You're a SaaS or technology company
- Your customers request SOC 2 reports
- You want flexible control selection
- You need annual third-party validation

### Choose ISO 27001 If:
- You operate globally
- You want internationally recognized certification
- You need a comprehensive ISMS
- You're in highly regulated industries

### Choose GDPR Compliance If:
- You process EU residents' data
- You have EU customers or employees
- You want to demonstrate privacy commitment
- You need comprehensive data governance

### Choose HIPAA If:
- You're in healthcare (covered entity or BA)
- You handle PHI
- You work with US healthcare organizations
- You need healthcare-specific compliance

### Choose PCI-DSS If:
- You accept credit card payments
- You store, process, or transmit card data
- Your payment processor requires it
- You want to reduce breach risk

---

## Multi-Framework Approach

### Recommended Combinations

#### **SaaS Company**
- SOC 2 Type II (primary)
- GDPR (if EU customers)
- ISO 27001 (for enterprise customers)

#### **Healthcare Technology**
- HIPAA (required)
- SOC 2 Type II (customer trust)
- HITRUST (healthcare-specific)

#### **E-commerce/Retail**
- PCI-DSS (required)
- SOC 2 (customer assurance)
- GDPR (if EU customers)

#### **Financial Services**
- SOC 2 Type II
- ISO 27001
- Industry-specific regulations (GLBA, SOX, etc.)

---

*Last Updated: March 2026*
