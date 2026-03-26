# EU AI Act Technical Documentation Template
## Required Documentation for High-Risk AI Systems

**Document Version:** 1.0  
**Based On:** Regulation (EU) 2024/1689, Annex IV  
**System Name:** ________________________________  
**System ID:** ________________________________  
**Provider:** ________________________________  
**Date:** ________________________________

---

## TABLE OF CONTENTS

1. [General System Description](#1-general-system-description)
2. [System Architecture & Components](#2-system-architecture--components)
3. [Data Requirements & Governance](#3-data-requirements--governance)
4. [Model Development & Training](#4-model-development--training)
5. [Performance & Testing](#5-performance--testing)
6. [Risk Management](#6-risk-management)
7. [Human Oversight](#7-human-oversight)
8. [Transparency & User Information](#8-transparency--user-information)
9. [Cybersecurity Measures](#9-cybersecurity-measures)
10. [Post-Market Monitoring](#10-post-market-monitoring)
11. [Declaration of Conformity](#11-declaration-of-conformity)
12. [Appendices](#12-appendices)

---

## 1. GENERAL SYSTEM DESCRIPTION

### 1.1 System Identity

| Attribute | Description |
|-----------|-------------|
| **System Name** | |
| **Version Number** | |
| **Provider Legal Name** | |
| **Provider Address** | |
| **Contact Information** | |
| **EU Authorized Representative** (if applicable) | |
| **Notified Body** (if involved) | |

### 1.2 Intended Purpose

**Primary Purpose:**

---

**Specific Use Cases:**

---

**Target User Groups:**

---

**Affected Persons** (individuals subject to AI decisions):

---

### 1.3 Operating Environment

**Technical Environment:**
- Hardware requirements:
- Software dependencies:
- Network requirements:
- Integration points:

**Operational Conditions:**
- Expected usage patterns:
- Environmental constraints:
- Geographic deployment:
- Language support:

### 1.4 System Classification

| Classification | Status | Justification |
|----------------|--------|---------------|
| Prohibited AI (Article 5) | ☐ Yes ☐ No | |
| High-Risk AI (Annex III) | ☐ Yes ☐ No | |
| Limited-Risk AI (Article 50) | ☐ Yes ☐ No | |
| Minimal-Risk AI | ☐ Yes ☐ No | |

**If High-Risk, specify category/categories:**

---

---

## 2. SYSTEM ARCHITECTURE & COMPONENTS

### 2.1 High-Level Architecture

*[Insert architecture diagram here]*

**Architecture Description:**

---

### 2.2 Component Inventory

| Component ID | Component Name | Type | Version | Supplier | Function |
|--------------|----------------|------|---------|----------|----------|
| | | | | | |
| | | | | | |
| | | | | | |

### 2.3 Data Flow Diagram

*[Insert data flow diagram showing:*
- *Data inputs and sources*
- *Processing stages*
- *Data outputs and destinations*
- *Third-party data sharing*
- *Storage locations*
*]*

### 2.4 Interfaces & APIs

| Interface | Type | Purpose | Authentication | Rate Limits |
|-----------|------|---------|----------------|-------------|
| | | | | |
| | | | | |

### 2.5 Dependencies

**Third-Party Components:**

| Component | Provider | License | Version | Criticality |
|-----------|----------|---------|---------|-------------|
| | | | | |
| | | | | |

**External Services:**

| Service | Provider | Purpose | SLA | Fallback |
|---------|----------|---------|-----|----------|
| | | | | |
| | | | | |

---

## 3. DATA REQUIREMENTS & GOVERNANCE

### 3.1 Training Data

| Dataset | Source | Size | Collection Period | Geographic Coverage |
|---------|--------|------|-------------------|---------------------|
| | | | | |
| | | | | |

**Data Relevance Assessment:**

---

**Data Representativeness Analysis:**

---

**Known Data Limitations:**

---

### 3.2 Data Quality Measures

| Quality Dimension | Assessment Method | Results | Acceptable Threshold |
|-------------------|-------------------|---------|---------------------|
| Accuracy | | | |
| Completeness | | | |
| Consistency | | | |
| Timeliness | | | |
| Uniqueness | | | |

### 3.3 Bias Assessment

**Protected Characteristics Analyzed:**
- ☐ Race/Ethnicity
- ☐ Gender
- ☐ Age
- ☐ Disability
- ☐ Religion
- ☐ Sexual Orientation
- ☐ National Origin
- ☐ Other: ________________

**Bias Testing Methodology:**

---

**Bias Test Results:**

| Characteristic | Disparity Ratio | Threshold | Pass/Fail |
|----------------|-----------------|-----------|-----------|
| | | | |
| | | | |

**Mitigation Measures for Identified Biases:**

---

### 3.4 Data Processing Procedures

**Preprocessing Steps:**

1. 
2. 
3. 

**Labeling Methodology:**

---

**Data Augmentation Techniques:**

---

### 3.5 GDPR Compliance

| Requirement | Status | Evidence |
|-------------|--------|----------|
| Lawful Basis Identified | ☐ Yes ☐ No | |
| Data Minimization Applied | ☐ Yes ☐ No | |
| Purpose Limitation Observed | ☐ Yes ☐ No | |
| Data Subject Rights Supported | ☐ Yes ☐ No | |
| DPIA Completed | ☐ Yes ☐ No | |
| DPO Consultation | ☐ Yes ☐ No | |

---

## 4. MODEL DEVELOPMENT & TRAINING

### 4.1 Model Specification

| Attribute | Details |
|-----------|---------|
| **Model Type** | |
| **Architecture** | |
| **Algorithm(s)** | |
| **Framework** | |
| **Parameters** | |
| **Training Duration** | |
| **Compute Resources** | |

### 4.2 Training Process

**Training Methodology:**

---

**Hyperparameters:**

| Parameter | Value | Rationale |
|-----------|-------|-----------|
| | | |
| | | |

**Training Iterations:**

| Iteration | Dataset | Performance | Notes |
|-----------|---------|-------------|-------|
| | | | |
| | | | |

### 4.3 Model Versioning

| Version | Date | Changes | Performance Delta | Approved By |
|---------|------|---------|-------------------|-------------|
| 1.0 | | Initial release | - | |
| | | | | |

### 4.4 Model Cards

*[Attach or link to detailed model cards including:*
- *Intended use*
- *Training data summary*
- *Performance metrics*
- *Ethical considerations*
- *Limitations*
*]*

---

## 5. PERFORMANCE & TESTING

### 5.1 Performance Metrics

| Metric | Target | Achieved | Test Dataset | Confidence Interval |
|--------|--------|----------|--------------|---------------------|
| Accuracy | | | | |
| Precision | | | | |
| Recall | | | | |
| F1 Score | | | | |
| AUC-ROC | | | | |
| Other: _____ | | | | |

### 5.2 Testing Summary

| Test Type | Methodology | Sample Size | Pass Rate | Critical Issues |
|-----------|-------------|-------------|-----------|-----------------|
| Unit Testing | | | | |
| Integration Testing | | | | |
| Validation Testing | | | | |
| Stress Testing | | | | |
| Edge Case Testing | | | | |
| Adversarial Testing | | | | |

### 5.3 Robustness Assessment

**Tested Perturbations:**
- ☐ Input noise
- ☐ Missing data
- ☐ Out-of-distribution samples
- ☐ Adversarial examples
- ☐ Distribution shift
- ☐ Other: ________________

**Robustness Results:**

---

### 5.4 Generalization Assessment

**Out-of-Distribution Performance:**

---

**Subgroup Performance Analysis:**

| Subgroup | Sample Size | Performance | Disparity vs. Baseline |
|----------|-------------|-------------|------------------------|
| | | | |
| | | | |

---

## 6. RISK MANAGEMENT

### 6.1 Risk Management Framework

*[Reference or attach full Risk Management documentation]*

**Risk Management Process Owner:** ________________

**Last Risk Assessment Date:** ________________

**Next Scheduled Review:** ________________

### 6.2 Identified Risks Summary

| Risk ID | Description | Severity | Probability | Mitigation Status |
|---------|-------------|----------|-------------|-------------------|
| | | | | |
| | | | | |

### 6.3 Residual Risk Assessment

**Overall Residual Risk Level:** ☐ LOW ☐ MEDIUM ☐ HIGH

**Risk Acceptance Justification** (if applicable):

---

---

## 7. HUMAN OVERSIGHT

### 7.1 Oversight Measures

| Oversight Type | Description | When Applied | Responsible Role |
|----------------|-------------|--------------|------------------|
| Preventive | | | |
| Detective | | | |
| Corrective | | | |

### 7.2 Human-in-the-Loop Procedures

**Intervention Points:**

1. 
2. 
3. 

**Override Mechanisms:**

---

**Escalation Procedures:**

---

### 7.3 Oversight Personnel Requirements

| Requirement | Specification |
|-------------|---------------|
| Qualifications | |
| Training Required | |
| Certification | |
| Experience Level | |

### 7.4 Oversight Effectiveness Monitoring

**Metrics Tracked:**

- Intervention rate: _____%
- Override frequency: _____%
- False positive rate: _____%
- Response time: _____ (avg)

---

## 8. TRANSPARENCY & USER INFORMATION

### 8.1 User Instructions

*[Attach complete user manual/instructions for use]*

**Languages Available:** ________________

**Last Updated:** ________________

### 8.2 System Capabilities Disclosure

**What the System CAN Do:**

---

**What the System CANNOT Do:**

---

**Known Limitations:**

---

### 8.3 AI Disclosure to Affected Persons

**Disclosure Method:** ☐ Notice ☐ Label ☐ Verbal ☐ Other: ________

**Disclosure Content:**

---

**Timing of Disclosure:** ☐ Before ☐ During ☐ After AI interaction

### 8.4 Explainability Features

| Feature | Description | User Access |
|---------|-------------|-------------|
| | | |
| | | |

---

## 9. CYBERSECURITY MEASURES

### 9.1 Security Architecture

*[Insert security architecture diagram]*

### 9.2 Security Controls

| Control Category | Controls Implemented | Standard/Frame work |
|------------------|---------------------|---------------------|
| Access Control | | |
| Encryption | | |
| Network Security | | |
| Application Security | | |
| Data Protection | | |
| Incident Response | | |

### 9.3 Security Testing

| Test Type | Date | Provider | Findings | Remediation Status |
|-----------|------|----------|----------|-------------------|
| Penetration Test | | | | |
| Vulnerability Scan | | | | |
| Code Review | | | | |
| Red Team Exercise | | | | |

### 9.4 Incident Response Plan

*[Attach or reference incident response procedures]*

**Incident Response Team:**

| Role | Name | Contact |
|------|------|---------|
| Incident Commander | | |
| Technical Lead | | |
| Communications | | |
| Legal/Compliance | | |

---

## 10. POST-MARKET MONITORING

### 10.1 Monitoring Plan

**Monitoring Objectives:**

---

**Data Collection Methods:**

- ☐ User feedback
- ☐ System logs
- ☐ Performance metrics
- ☐ Incident reports
- ☐ Regulatory updates
- ☐ Other: ________________

### 10.2 Performance Indicators

| Indicator | Target | Measurement Frequency | Owner |
|-----------|--------|----------------------|-------|
| | | | |
| | | | |

### 10.3 Incident Reporting

**Serious Incident Definition:**

---

**Reporting Timeline:** Within 15 days of awareness

**Reporting Authority:** ________________

**Internal Escalation:**

---

### 10.4 Update Management

**Change Classification:**

| Change Type | Assessment Required | Approval Level |
|-------------|--------------------|----------------|
| Minor bug fix | Documentation update | System Owner |
| Performance improvement | Impact assessment | Compliance Officer |
| Model retraining | Full re-assessment | Senior Management |
| New use case | New conformity assessment | Notified Body |

---

## 11. DECLARATION OF CONFORMITY

### EU Declaration of Conformity

**System Name:** ________________

**System ID:** ________________

**Provider:** ________________

**Address:** ________________

We declare under our sole responsibility that the AI system identified above complies with Regulation (EU) 2024/1689 (EU AI Act).

**Applicable Requirements:**

- ☐ Article 8 (Risk Management)
- ☐ Article 9 (Data Governance)
- ☐ Article 10 (Technical Documentation)
- ☐ Article 11 (Record-Keeping)
- ☐ Article 12 (Transparency)
- ☐ Article 13 (Human Oversight)
- ☐ Article 14 (Accuracy, Robustness, Cybersecurity)
- ☐ Article 15 (Conformity Assessment)

**Notified Body** (if applicable):

| Name | ID Number | Certificate Number |
|------|-----------|-------------------|
| | | |

**Place:** ________________

**Date:** ________________

**Name and Function:** ________________

**Signature:** ________________

---

## 12. APPENDICES

### Appendix A: Glossary of Terms

---

### Appendix B: References & Standards

| Standard | Version | Application |
|----------|---------|-------------|
| | | |
| | | |

### Appendix C: Change Log

| Version | Date | Author | Changes | Approval |
|---------|------|--------|---------|----------|
| 1.0 | | | Initial release | |
| | | | | |

### Appendix D: Document Distribution

| Recipient | Role | Date Distributed |
|-----------|------|------------------|
| | | |
| | | |

---

## DOCUMENT CONTROL

| Field | Value |
|-------|-------|
| **Document Owner** | |
| **Review Frequency** | Annual (or upon significant change) |
| **Next Review Date** | |
| **Classification** | Internal / Confidential |
| **Retention Period** | 10 years after system withdrawal |

---

*This template satisfies Annex IV technical documentation requirements. Maintain this documentation for 10 years after the AI system is placed on the market.*
