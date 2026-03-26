# Technical Documentation Template
## EU AI Act Compliance - Annex IV Technical Documentation

**Document ID:** TECH-DOC-[SYSTEM-NAME]-[VERSION]  
**System Name:** [Enter AI System Name]  
**Provider:** [Company Name]  
**Version:** [X.X.X]  
**Date:** [YYYY-MM-DD]  
**Classification:** High-Risk AI System (Article 6 + Annex III)

---

## TABLE OF CONTENTS

1. [General Description](#1-general-description)
2. [System Elements & Development Process](#2-system-elements--development-process)
3. [Monitoring, Functioning & Control](#3-monitoring-functioning--control)
4. [Performance Metrics](#4-performance-metrics)
5. [Risk Management System](#5-risk-management-system)
6. [System Changes](#6-system-changes)
7. [Applied Standards](#7-applied-standards)
8. [EU Declaration of Conformity](#8-eu-declaration-of-conformity)
9. [Post-Market Monitoring](#9-post-market-monitoring)

---

## 1. GENERAL DESCRIPTION

### 1.1 Intended Purpose
*[Describe the specific purpose the AI system is designed to serve, including the problem it solves and the context of use]*

**Intended Purpose Statement:**
[Enter detailed description]

**Target Users:**
- Primary: [Describe]
- Secondary: [Describe]

**Geographic Scope:**
[Describe intended geographic deployment]

### 1.2 Provider Information
| Field | Details |
|-------|---------|
| Provider Name | [Legal Entity Name] |
| Registered Address | [Full Address] |
| Contact Email | [Email] |
| Contact Phone | [Phone Number] |
| Authorized Representative (if applicable) | [Name, Address, Contact] |
| System Version | [X.X.X] |
| Previous Versions | [List with relation to current version] |

### 1.3 System Interactions
**Hardware Interactions:**
*[Describe how the AI system interacts with hardware components]*

**Software Interactions:**
*[Describe interactions with other software systems, APIs, databases]*

**Other AI Systems:**
*[Describe any integration with other AI systems]*

### 1.4 Distribution Forms
*[Check all that apply and describe]*
- [ ] Software download
- [ ] Embedded in hardware
- [ ] API/Cloud service
- [ ] Physical product component
- [ ] Other: [Specify]

**Description of Each Form:**
[Provide details for each selected form]

### 1.5 Hardware Requirements
| Component | Minimum Requirements | Recommended Requirements |
|-----------|---------------------|--------------------------|
| Processor | | |
| Memory (RAM) | | |
| Storage | | |
| GPU (if applicable) | | |
| Network | | |
| Other | | |

### 1.6 Product Integration (if applicable)
*[Include photographs or illustrations showing:]*
- External features
- CE marking location
- Internal layout
- User interface screenshots

### 1.7 User Interface Description
*[Provide basic description of the user interface provided to deployers]*

### 1.8 Instructions for Use
*[Reference or attach full instructions for use document]*

---

## 2. SYSTEM ELEMENTS & DEVELOPMENT PROCESS

### 2.1 Development Methods
**Development Methodology:**
*[Describe the methods and steps performed for development]*

**Pre-trained Systems/Tools Used:**
| Third-Party Tool | Provider | Usage Description | Modifications Made |
|-----------------|----------|-------------------|-------------------|
| | | | |
| | | | |

### 2.2 Design Specifications

**System Logic & Algorithms:**
*[Describe the general logic of the AI system and algorithms used]*

**Key Design Choices:**
| Design Choice | Rationale | Assumptions Made |
|---------------|-----------|------------------|
| | | |
| | | |

**Target Persons/Groups:**
*[Describe persons or groups for whom the system is intended]*

**Classification Choices:**
*[Describe main classification choices and their basis]*

**Optimization Objectives:**
*[Describe what the system is designed to optimize for]*

**Parameter Relevance:**
*[Explain the relevance of different parameters]*

**Expected Output:**
*[Describe expected output and output quality]*

**Trade-off Decisions:**
*[Describe decisions about trade-offs made to comply with Chapter III, Section 2 requirements]*

### 2.3 System Architecture
**Architecture Description:**
*[Explain how software components build on or feed into each other]*

**Architecture Diagram:**
*[Insert system architecture diagram]*

**Computational Resources:**
| Phase | Resources Used | Duration |
|-------|---------------|----------|
| Development | | |
| Training | | |
| Testing | | |
| Validation | | |

### 2.4 Data Requirements & Datasheets

**Training Data:**
| Aspect | Description |
|--------|-------------|
| Data Collection Method | |
| Data Origin/Provenance | |
| Time Period Covered | |
| Geographic Coverage | |
| Data Subjects | |
| Volume (records/samples) | |
| Features/Variables | |

**Validation Data:**
| Aspect | Description |
|--------|-------------|
| [Same structure as training data] | |

**Testing Data:**
| Aspect | Description |
|--------|-------------|
| [Same structure as training data] | |

**Data Preparation:**
- Annotation/Labeling Procedures: [Describe]
- Data Cleaning Methodologies: [Describe, including outlier detection]
- Data Aggregation Methods: [Describe]
- Data Augmentation (if applicable): [Describe]

**Bias Assessment:**
*[Document examination for possible biases affecting health, safety, fundamental rights, or discrimination]*

**Bias Mitigation Measures:**
*[Describe measures to detect, prevent, and mitigate identified biases]*

**Data Gaps Identified:**
*[Identify any relevant data gaps or shortcomings and how addressed]*

### 2.5 Human Oversight Assessment
*[Reference Article 14 assessment - can reference separate Human Oversight Template]*

**Human Oversight Measures:**
[Describe measures and technical measures to facilitate interpretation]

### 2.6 Predetermined Changes
*[For AI systems that continue to learn after deployment]*

**Predetermined Changes:**
| Change Type | Description | Impact on Performance | Compliance Measures |
|-------------|-------------|----------------------|---------------------|
| | | | |

### 2.7 Validation & Testing Procedures

**Testing Methodology:**
*[Describe validation and testing procedures used]*

**Test Data Characteristics:**
[Describe test data used and main characteristics]

**Performance Metrics:**
| Metric | Target Value | Achieved Value | Test Conditions |
|--------|--------------|----------------|-----------------|
| Accuracy | | | |
| Precision | | | |
| Recall | | | |
| F1 Score | | | |
| Robustness | | | |
| Fairness/Bias | | | |
| Other | | | |

**Discriminatory Impact Assessment:**
*[Document assessment of potentially discriminatory impacts across different demographic groups]*

**Test Logs:**
*[Reference or attach test logs and reports, dated and signed by responsible persons]*

| Test Report ID | Date | Responsible Person | Signature |
|----------------|------|-------------------|-----------|
| | | | |
| | | | |

### 2.8 Cybersecurity Measures
*[Describe cybersecurity measures implemented]*

**Security Controls:**
| Control Category | Measures Implemented |
|-----------------|---------------------|
| Access Control | |
| Data Protection | |
| Network Security | |
| Vulnerability Management | |
| Incident Response | |
| AI-Specific Protections (data poisoning, adversarial attacks, model evasion) | |

---

## 3. MONITORING, FUNCTIONING & CONTROL

### 3.1 Performance Capabilities & Limitations

**Accuracy Levels:**
| Person/Group | Accuracy Level | Confidence Interval |
|--------------|---------------|---------------------|
| Overall System | | |
| [Specific Group 1] | | |
| [Specific Group 2] | | |

**Known Limitations:**
*[Describe limitations in performance]*

### 3.2 Foreseeable Unintended Outcomes
*[Identify foreseeable unintended outcomes and sources of risks]*

| Risk Category | Description | Likelihood | Impact | Mitigation |
|---------------|-------------|------------|--------|------------|
| Health & Safety | | | | |
| Fundamental Rights | | | | |
| Discrimination | | | | |

### 3.3 Human Oversight Specifications
*[Detailed specifications on human oversight measures - reference Article 14]*

### 3.4 Input Data Specifications
*[Specify requirements for input data, as appropriate]*

---

## 4. PERFORMANCE METRICS

### 4.1 Appropriateness of Metrics
*[Describe why selected performance metrics are appropriate for this specific AI system]*

**Metric Justification:**
| Metric | Why Appropriate | Industry Standard? |
|--------|-----------------|-------------------|
| | | |

### 4.2 Declared Accuracy Levels
*[As required by Article 15(3), declare accuracy levels in instructions for use]*

---

## 5. RISK MANAGEMENT SYSTEM

*[Reference or include full Risk Management documentation - see Risk Assessment Template]*

### 5.1 Risk Management Process Description
[Describe the risk management system per Article 9]

### 5.2 Risk Identification
[Summary of identified risks]

### 5.3 Risk Mitigation Measures
[Summary of mitigation measures]

### 5.4 Residual Risk Assessment
[Document that residual risks are acceptable]

---

## 6. SYSTEM CHANGES

### 6.1 Change History
| Version | Date | Changes Made | Reason | Approved By |
|---------|------|--------------|--------|-------------|
| 1.0.0 | | Initial release | | |
| | | | | |

### 6.2 Change Management Process
*[Describe the process for managing and documenting changes]*

---

## 7. APPLIED STANDARDS

### 7.1 Harmonised Standards Applied
| Standard Reference | Title | Applied In Full? | Restrictions |
|-------------------|-------|-----------------|--------------|
| | | Yes/No | |
| | | | |

### 7.2 Other Standards Applied
| Standard Reference | Title | Description |
|-------------------|-------|-------------|
| | | |

### 7.3 Alternative Solutions (if no harmonised standards applied)
*[If no harmonised standards were applied or they don't cover all requirements, describe solutions adopted to meet Chapter III, Section 2 requirements]*

---

## 8. EU DECLARATION OF CONFORMITY

*[Attach the EU Declaration of Conformity as per Article 47]*

**Reference:** [Link to or attach Declaration]

---

## 9. POST-MARKET MONITORING

*[Reference or include Post-Market Monitoring Plan - see separate template]*

### 9.1 Post-Market Monitoring System Description
[Describe the system established per Article 72]

### 9.2 Post-Market Monitoring Plan
[Attach or reference the monitoring plan]

### 9.3 Data Collection Methods
[Describe how data on system performance will be collected]

### 9.4 Analysis Procedures
[Describe how collected data will be analyzed]

---

## DOCUMENT APPROVAL

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Document Author | | | |
| Technical Lead | | | |
| Compliance Officer | | | |
| Quality Manager | | | |
| Authorized Signatory | | | |

---

## DOCUMENT REVISION HISTORY

| Version | Date | Author | Changes | Approved By |
|---------|------|--------|---------|-------------|
| 1.0 | | | Initial version | |
| | | | | |

---

**Document Control:**
- **Retention Period:** 10 years after system placed on market (Article 18)
- **Storage Location:** [Specify secure storage location]
- **Access Controls:** [Describe who has access]
- **Review Frequency:** Annual or upon significant changes

---

*This template is based on Regulation (EU) 2024/1689, Article 11 and Annex IV. Customize for your specific AI system and ensure all applicable sections are completed.*
