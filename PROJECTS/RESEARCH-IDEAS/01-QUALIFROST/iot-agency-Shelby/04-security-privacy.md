# Security & Privacy Framework

## Overview

Security is not optional in IoT deployments. This framework ensures every deployment follows security best practices from device selection through ongoing operations.

---

## Security Principles

### Defense in Depth
Multiple layers of security controls so that if one layer fails, others provide protection.

### Least Privilege
Every component operates with minimum necessary permissions.

### Zero Trust
Never trust, always verify. Assume breach and design accordingly.

### Privacy by Design
Privacy considerations built into every design decision, not added later.

### Security by Default
Secure configurations are the default, not an option.

---

## Device Security

### Device Selection Criteria

#### Security Requirements
- **Authentication:** Support for strong authentication (certificates, not just passwords)
- **Encryption:** TLS 1.2+ for all communications
- **Secure Boot:** Verified boot process
- **Hardware Security:** TPM, secure element, or equivalent
- **Update Mechanism:** Secure, signed firmware updates
- **Physical Security:** Tamper detection/resistance where applicable

#### Vendor Assessment
- Security track record
- Vulnerability disclosure process
- Update frequency and support lifecycle
- Third-party security audits
- Compliance certifications

### Device Hardening

#### Before Deployment
1. **Firmware Update:** Update to latest stable firmware
2. **Default Credentials:** Change all default passwords
3. **Unnecessary Services:** Disable unused services/ports
4. **Logging:** Enable security logging
5. **Time Sync:** Configure NTP for accurate timestamps

#### Configuration Standards
```
Password Requirements:
- Minimum 16 characters
- Complex (upper, lower, number, special)
- No default or common passwords
- Unique per device
- Stored in password manager

Network Configuration:
- Static IPs or DHCP reservations
- Dedicated IoT VLAN
- Firewall rules limiting traffic
- No direct internet access unless required
- Encrypted communications only

Access Control:
- Role-based access
- Multi-factor authentication where supported
- Time-limited access for contractors
- Regular access reviews
- Immediate revocation on termination
```

### Device Inventory

| Field | Description |
|-------|-------------|
| Device ID | Unique identifier |
| Device Type | Model and manufacturer |
| Serial Number | Manufacturer serial |
| MAC Address | Network identifier |
| IP Address | Current IP (or range) |
| Location | Physical location |
| Firmware Version | Current firmware |
| Last Update | Date of last update |
| Next Update | Scheduled update date |
| Owner | Responsible party |
| Criticality | Business impact if compromised |
| End of Life | Manufacturer EOL date |

---

## Network Segmentation

### Network Architecture

```
┌─────────────────────────────────────────────────────────┐
│                      INTERNET                            │
└─────────────────────────────────────────────────────────┘
                            │
                    ┌───────▼───────┐
                    │   Firewall    │
                    │   (Primary)   │
                    └───────┬───────┘
                            │
            ┌───────────────┼───────────────┐
            │               │               │
    ┌───────▼───────┐ ┌─────▼─────┐ ┌──────▼──────┐
    │   Corporate   │ │    DMZ    │ │   Guest     │
    │     VLAN      │ │   VLAN    │ │   VLAN      │
    └───────────────┘ └───────────┘ └─────────────┘
                            │
                    ┌───────▼───────┐
                    │   Firewall    │
                    │  (Internal)   │
                    └───────┬───────┘
                            │
            ┌───────────────┼───────────────┐
            │               │               │
    ┌───────▼───────┐ ┌─────▼─────┐ ┌──────▼──────┐
    │   IoT VLAN    │ │ Building  │ │  Security   │
    │  (Sensors)    │ │  Systems  │ │   Systems   │
    └───────────────┘ └───────────┘ └─────────────┘
```

### VLAN Design

| VLAN ID | Purpose | Access Rules |
|---------|---------|--------------|
| 10 | Management | Admin access only, MFA required |
| 20 | IoT Devices | Outbound to cloud only, no inbound |
| 30 | IoT Gateways | Bidirectional with IoT VLAN and cloud |
| 40 | Building Systems | Limited to building management |
| 50 | Security Systems | Restricted, audit all access |
| 100 | Guest | Internet only, isolated |

### Firewall Rules

#### IoT VLAN Rules (Example)
```
ALLOW: IoT Devices → IoT Gateway (specific ports)
ALLOW: IoT Gateway → Cloud Platform (HTTPS/MQTT)
ALLOW: IoT Gateway → Management VLAN (admin only)
DENY:  IoT Devices → Corporate VLAN
DENY:  IoT Devices → Internet (except via gateway)
DENY:  All → IoT VLAN (except established connections)
LOG:   All denied traffic
```

### Network Access Control (NAC)
- 802.1X authentication where supported
- MAC address filtering as fallback
- Device profiling and classification
- Automated quarantine for non-compliant devices
- Regular compliance scanning

---

## Encryption

### Data in Transit

#### Requirements
- **TLS 1.2 minimum** (TLS 1.3 preferred)
- **Strong cipher suites only:**
  - TLS_AES_256_GCM_SHA384
  - TLS_CHACHA20_POLY1305_SHA256
  - TLS_AES_128_GCM_SHA256
- **Certificate validation:** Always validate server certificates
- **Certificate pinning:** For critical applications

#### Protocol-Specific Guidance

| Protocol | Encryption | Notes |
|----------|------------|-------|
| MQTT | TLS (MQTTS) | Port 8883, certificate authentication |
| HTTP | HTTPS | TLS 1.3, HSTS enabled |
| CoAP | DTLS | For constrained devices |
| Zigbee | AES-128 | Network and application layer |
| Z-Wave | AES-128 | S2 security framework |
| LoRaWAN | AES-128 | Network and application keys |

### Data at Rest

#### Requirements
- **Database encryption:** TDE or equivalent
- **File encryption:** For sensitive configuration files
- **Backup encryption:** All backups encrypted
- **Key management:** Secure key storage (HSM, KMS)

#### Encryption Standards
- AES-256 for data encryption
- RSA-2048 or ECDSA P-256 for key exchange
- Secure key rotation procedures
- Key access logging and monitoring

### Key Management

#### Best Practices
1. **Never hardcode keys** in applications or configurations
2. **Use key management services** (AWS KMS, Azure Key Vault)
3. **Rotate keys regularly** (minimum annually, quarterly for critical)
4. **Separate duties** for key management
5. **Audit all key access**
6. **Secure key destruction** when no longer needed

---

## Authentication & Authorization

### Authentication Methods

#### Device Authentication
- **X.509 Certificates:** Preferred for device authentication
- **Pre-shared Keys:** Only for constrained devices, rotate regularly
- **Token-based:** OAuth 2.0 device flow for user-associated devices

#### User Authentication
- **Multi-factor authentication:** Required for all admin access
- **Password policy:** Strong passwords, regular rotation
- **SSO integration:** Where available (SAML, OIDC)
- **Session management:** Timeout, concurrent session limits

### Authorization Model

#### Role-Based Access Control (RBAC)

| Role | Permissions | Typical Users |
|------|-------------|---------------|
| Viewer | Read-only dashboards | General staff |
| Operator | View + acknowledge alerts | Operations team |
| Technician | View + configure devices | Field technicians |
| Administrator | Full system access | IT/Security team |
| Auditor | Read logs, no config | Compliance team |

#### Principle of Least Privilege
- Start with no access
- Grant minimum necessary permissions
- Time-limited access for temporary needs
- Regular access reviews (quarterly)
- Immediate revocation on role change

---

## Secure Updates

### Firmware Update Process

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   Vendor    │───▶│   Verify    │───▶│  Deploy     │
│   Release   │    │   Signature │    │   Update    │
└─────────────┘    └─────────────┘    └─────────────┘
                          │
                    ┌─────▼─────┐
                    │  Reject   │
                    │   If      │
                    │  Invalid  │
                    └───────────┘
```

### Update Requirements
1. **Signed firmware:** Cryptographic signature verification
2. **Secure delivery:** Encrypted transport (HTTPS, SFTP)
3. **Integrity check:** Hash verification before installation
4. **Rollback capability:** Previous version available if update fails
5. **Testing:** Updates tested in non-production first

### Update Schedule
- **Critical security updates:** Within 72 hours of availability
- **Important updates:** Within 2 weeks
- **Routine updates:** Monthly maintenance window
- **Major version updates:** Quarterly, with testing

### Update Monitoring
- Track update status across all devices
- Alert on failed updates
- Report on update compliance
- Escalate devices missing critical updates

---

## Privacy Considerations

### Data Classification

| Classification | Examples | Handling Requirements |
|----------------|----------|----------------------|
| Public | Weather data, public stats | No restrictions |
| Internal | Operational metrics | Internal access only |
| Confidential | Customer data, configs | Encryption, access control |
| Restricted | PII, credentials, keys | Maximum protection, audit |

### Privacy by Design Principles

1. **Proactive not Reactive:** Anticipate privacy issues before they occur
2. **Privacy as Default:** Personal data automatically protected
3. **Privacy Embedded into Design:** Not bolted on afterwards
4. **Full Functionality:** No false dichotomy of privacy vs. functionality
5. **End-to-End Security:** Full lifecycle protection of data
6. **Visibility and Transparency:** Open about practices
7. **Respect for User Privacy:** User-centric approach

### Data Minimization
- Collect only necessary data
- Retain only as long as needed
- Anonymize where possible
- Aggregate when detailed data not needed

### Consent Management
- Clear notice of data collection
- Purpose limitation (use only as stated)
- Opt-out mechanisms where applicable
- Consent tracking and documentation

### Regulatory Compliance

#### GDPR (if applicable)
- Lawful basis for processing
- Data subject rights (access, deletion, portability)
- Data processing agreements
- Breach notification (72 hours)
- Privacy impact assessments

#### CCPA/CPRA (if applicable)
- Right to know
- Right to delete
- Right to opt-out
- Non-discrimination

#### Industry-Specific
- **HIPAA:** Healthcare data
- **PCI-DSS:** Payment data
- **SOC 2:** Service organizations
- **ISO 27001:** Information security

---

## Security Monitoring

### Logging Requirements

#### What to Log
- Authentication events (success and failure)
- Authorization decisions
- Configuration changes
- System events (startup, shutdown)
- Security events (alerts, anomalies)
- Data access (for sensitive data)
- Administrative actions

#### Log Requirements
- **Integrity:** Logs cannot be modified
- **Confidentiality:** Logs protected from unauthorized access
- **Availability:** Logs available for analysis
- **Retention:** Minimum 1 year, 7 years for regulated industries
- **Synchronization:** All systems time-synced (NTP)

### Security Information and Event Management (SIEM)

#### Integration
- Forward all security logs to SIEM
- Correlation rules for IoT-specific threats
- Alerting on suspicious activities
- Dashboard for security posture

#### Alert Categories
- **Critical:** Immediate response required (breach, ransomware)
- **High:** Response within 4 hours (unauthorized access)
- **Medium:** Response within 24 hours (policy violation)
- **Low:** Response within 1 week (informational)

### Intrusion Detection

#### Network-Based IDS
- Monitor IoT VLAN traffic
- Detect anomalous patterns
- Signature-based detection
- Behavior-based detection

#### Host-Based IDS
- On gateways and servers
- File integrity monitoring
- Process monitoring
- Rootkit detection

---

## Incident Response

### Incident Response Plan

#### Preparation
- Incident response team identified
- Contact list maintained
- Tools and access prepared
- Training and exercises conducted

#### Detection & Analysis
- Monitor alerts and reports
- Triage and categorize incidents
- Determine scope and impact
- Preserve evidence

#### Containment, Eradication, Recovery
- Short-term containment (stop the bleeding)
- Long-term containment (prevent spread)
- Eradication (remove threat)
- Recovery (restore normal operations)

#### Post-Incident Activity
- Lessons learned
- Documentation update
- Process improvement
- Reporting (if required)

### Incident Categories

| Category | Examples | Response Time |
|----------|----------|---------------|
| Unauthorized Access | Compromised credentials | 1 hour |
| Malware | Ransomware, trojans | 1 hour |
| Data Breach | PII exposure | Immediate |
| DDoS | Service disruption | 2 hours |
| Policy Violation | Misconfiguration | 24 hours |
| Physical Security | Device tampering | 4 hours |

---

## Security Assessment

### Regular Assessments

| Assessment | Frequency | Scope |
|------------|-----------|-------|
| Vulnerability Scan | Monthly | All systems |
| Penetration Test | Annual | External + Internal |
| Configuration Review | Quarterly | Critical systems |
| Access Review | Quarterly | All access |
| Policy Review | Annual | All policies |
| Tabletop Exercise | Annual | Incident response |

### Vulnerability Management

1. **Identify:** Regular scanning and monitoring
2. **Prioritize:** Risk-based prioritization (CVSS + context)
3. **Remediate:** Patch or mitigate
4. **Verify:** Confirm remediation
5. **Report:** Track and report metrics

### Security Metrics

| Metric | Target |
|--------|--------|
| Critical vulnerabilities >30 days | 0 |
| High vulnerabilities >60 days | <5 |
| Patch compliance rate | >95% |
| MFA adoption | 100% |
| Security training completion | 100% |
| Incident response time | <1 hour (critical) |

---

## Security Documentation

### Required Documents
- Security policy
- Acceptable use policy
- Incident response plan
- Business continuity plan
- Disaster recovery plan
- Data classification policy
- Access control policy
- Encryption standards
- Change management procedure
- Vendor security requirements

### Maintenance
- Annual review minimum
- Update after incidents
- Update after significant changes
- Version control all documents
- Distribute to relevant personnel

---

## Security Checklist

### Pre-Deployment
- [ ] Device security assessment completed
- [ ] Network segmentation designed
- [ ] Encryption requirements defined
- [ ] Authentication method selected
- [ ] Access control model designed
- [ ] Logging requirements defined
- [ ] Update process established
- [ ] Privacy impact assessment completed

### During Deployment
- [ ] Default credentials changed
- [ ] Firmware updated to latest
- [ ] Network segmentation implemented
- [ ] Firewall rules configured
- [ ] Encryption enabled and verified
- [ ] Authentication configured
- [ ] Access controls implemented
- [ ] Logging enabled

### Post-Deployment
- [ ] Security testing completed
- [ ] Vulnerability scan completed
- [ ] Documentation updated
- [ ] Training completed
- [ ] Monitoring activated
- [ ] Incident response plan tested
- [ ] Maintenance schedule established
- [ ] Regular review schedule set

---

## Compliance Mapping

### Common Frameworks

| Framework | Relevance | Key Requirements |
|-----------|-----------|------------------|
| NIST CSF | General security | Identify, Protect, Detect, Respond, Recover |
| ISO 27001 | ISMS | Risk assessment, controls, continuous improvement |
| SOC 2 | Service orgs | Security, availability, confidentiality |
| IEC 62443 | Industrial IoT | Security levels, zones, conduits |
| GDPR | Privacy (EU) | Data protection, user rights |

### Compliance Approach
1. Identify applicable frameworks
2. Map requirements to controls
3. Implement controls
4. Document evidence
5. Regular audits

---

Security is not a one-time activity but an ongoing commitment. This framework provides the foundation, but security must be continuously monitored, assessed, and improved.
