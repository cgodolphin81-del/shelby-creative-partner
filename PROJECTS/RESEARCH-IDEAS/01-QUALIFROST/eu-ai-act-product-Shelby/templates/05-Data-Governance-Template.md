# Data Governance Template
## EU AI Act Compliance - Article 10 Data and Data Governance

**Document ID:** DATA-GOV-[SYSTEM-NAME]-[VERSION]  
**System Name:** [Enter AI System Name]  
**Provider:** [Company Name]  
**Version:** [X.X.X]  
**Date:** [YYYY-MM-DD]  
**Data Governance Lead:** [Name/Title]

---

## TABLE OF CONTENTS

1. [Data Governance Framework](#1-data-governance-framework)
2. [Data Collection & Origin](#2-data-collection--origin)
3. [Data Preparation](#3-data-preparation)
4. [Data Quality Assessment](#4-data-quality-assessment)
5. [Bias Assessment & Mitigation](#5-bias-assessment--mitigation)
6. [Data Gaps & Shortcomings](#6-data-gaps--shortcomings)
7. [Special Categories of Personal Data](#7-special-categories-of-personal-data)
8. [Data Management Practices](#8-data-management-practices)
9. [Data Documentation](#9-data-documentation)

---

## 1. DATA GOVERNANCE FRAMEWORK

### 1.1 Overview
*[Describe data governance and management practices per Article 10(2)]*

**Governance Framework:**
[Describe the overall data governance framework]

**Data Governance Team:**

| Role | Name | Responsibility | Contact |
|------|------|----------------|---------|
| Data Governance Lead | | | |
| Data Protection Officer | | | |
| Data Engineer | | | |
| ML Engineer | | | |
| Compliance Officer | | | |

### 1.2 Data Governance Principles

**Principles Applied:**
- [ ] Lawfulness, fairness, transparency
- [ ] Purpose limitation
- [ ] Data minimization
- [ ] Accuracy
- [ ] Storage limitation
- [ ] Integrity and confidentiality
- [ ] Accountability

### 1.3 Data Lifecycle Management

| Phase | Activities | Responsible | Documentation |
|-------|------------|-------------|---------------|
| Planning | | | |
| Collection | | | |
| Preparation | | | |
| Training/Validation/Testing | | | |
| Storage | | | |
| Monitoring | | | |
| Disposal | | | |

---

## 2. DATA COLLECTION & ORIGIN

### 2.1 Dataset Overview

| Dataset | Type (Train/Val/Test) | Purpose | Source |
|---------|----------------------|---------|--------|
| | | | |
| | | | |
| | | | |

### 2.2 Data Collection Process

**Collection Method:**
- [ ] Direct collection from subjects
- [ ] Third-party data provider
- [ ] Public datasets
- [ ] Web scraping
- [ ] Sensors/IoT devices
- [ ] User-generated content
- [ ] Other: [Specify]

**Collection Period:**
- Start Date: [YYYY-MM-DD]
- End Date: [YYYY-MM-DD]

**Geographic Coverage:**
[List countries/regions covered]

**Collection Tools/Methods:**
[Describe tools and methods used for collection]

### 2.3 Data Origin & Provenance

**Original Purpose of Collection:**
*[For personal data, describe original purpose per Article 10(2)(b)]*

| Dataset | Original Purpose | Legal Basis | Compatible with AI Act Use? |
|---------|-----------------|-------------|----------------------------|
| | | [Consent/Legitimate Interest/etc.] | Yes/No/Partial |

**Data Lineage:**
[Describe the lineage/origin of data]

### 2.4 Data Subjects

**Description of Data Subjects:**
[Describe the individuals or entities the data relates to]

**Demographics:**

| Characteristic | Distribution | Notes |
|----------------|--------------|-------|
| Age Groups | | |
| Gender | | |
| Geographic Distribution | | |
| Ethnicity/Race | | |
| Socioeconomic Status | | |
| Other | | |

### 2.5 Third-Party Data

| Provider | Dataset | License/Terms | Restrictions | Compliance Verified |
|----------|---------|---------------|--------------|---------------------|
| | | | | |
| | | | | |

**Due Diligence Performed:**
[Describe due diligence on third-party data]

---

## 3. DATA PREPARATION

### 3.1 Pre-Processing Operations

**Operations Performed:**

| Operation | Description | Tools Used | Parameters |
|-----------|-------------|------------|------------|
| Cleaning | | | |
| Normalization | | | |
| Transformation | | | |
| Aggregation | | | |
| Other | | | |

### 3.2 Annotation & Labeling

**Annotation Process:**

| Aspect | Details |
|--------|---------|
| Annotation Method | [Manual/Automated/Hybrid] |
| Annotator Qualifications | |
| Number of Annotators | |
| Inter-Annotator Agreement | |
| Quality Control Process | |
| Annotation Guidelines | [Reference document] |

**Label Distribution:**

| Label | Count | Percentage |
|-------|-------|------------|
| | | |
| | | |

### 3.3 Data Cleaning Methodologies

**Cleaning Procedures:**

| Procedure | Description | Records Affected |
|-----------|-------------|------------------|
| Missing Value Handling | | |
| Outlier Detection | | |
| Duplicate Removal | | |
| Error Correction | | |
| Inconsistency Resolution | | |

**Outlier Detection Method:**
[Describe method used]

**Outliers Found:** [Number]

**Outliers Removed:** [Number]

**Justification for Removal:**
[Explain rationale]

### 3.4 Data Augmentation (if applicable)

**Augmentation Techniques:**

| Technique | Description | Applied To |
|-----------|-------------|------------|
| | | |
| | | |

---

## 4. DATA QUALITY ASSESSMENT

### 4.1 Relevance Assessment
*[Datasets shall be relevant to intended purpose - Article 10(3)]*

**Relevance Criteria:**

| Criterion | Assessment | Evidence |
|-----------|------------|----------|
| Alignment with Intended Purpose | | |
| Coverage of Use Cases | | |
| Temporal Relevance | | |
| Contextual Relevance | | |

**Overall Relevance:** [High/Medium/Low]

### 4.2 Representativeness Assessment
*[Datasets shall be sufficiently representative - Article 10(3)]*

**Representativeness Analysis:**

| Population/Subgroup | Target Distribution | Actual Distribution | Gap |
|---------------------|--------------------|--------------------|-----|
| | | | |
| | | | |

**Statistical Properties:**

| Metric | Value | Acceptable? |
|--------|-------|-------------|
| Sample Size | | |
| Confidence Level | | |
| Margin of Error | | |
| Power | | |

**Representativeness Conclusion:**
[Assess whether datasets are sufficiently representative]

### 4.3 Error-Free Assessment
*[To the best extent possible, free of errors - Article 10(3)]*

**Error Analysis:**

| Error Type | Count | Rate | Action Taken |
|------------|-------|------|--------------|
| Labeling Errors | | | |
| Data Entry Errors | | | |
| Processing Errors | | | |
| Other | | | |

**Error Rate:** [X%]

**Acceptable Error Threshold:** [X%]

**Met Threshold?** [Yes/No]

### 4.4 Completeness Assessment
*[To the best extent possible, complete - Article 10(3)]*

**Completeness Analysis:**

| Field/Feature | % Complete | Missing Data Handling |
|---------------|------------|----------------------|
| | | |
| | | |

**Overall Completeness:** [X%]

**Completeness Conclusion:**
[Assess whether datasets are sufficiently complete]

### 4.5 Context-Specific Considerations
*[Consider geographical, contextual, behavioural, functional setting - Article 10(4)]*

**Context Analysis:**

| Context Element | Considered? | How Addressed |
|-----------------|-------------|---------------|
| Geographical | | |
| Cultural | | |
| Linguistic | | |
| Temporal | | |
| Behavioral | | |
| Functional | | |

---

## 5. BIAS ASSESSMENT & MITIGATION

### 5.1 Bias Examination
*[Examination for possible biases per Article 10(2)(f)]*

**Bias Types Assessed:**

| Bias Type | Assessment Method | Findings | Severity |
|-----------|-------------------|----------|----------|
| Historical Bias | | | |
| Representation Bias | | | |
| Measurement Bias | | | |
| Aggregation Bias | | | |
| Evaluation Bias | | | |
| Deployment Bias | | | |

### 5.2 Protected Characteristics Analysis

| Characteristic | Dataset Distribution | Population Distribution | Disparity | Risk Level |
|----------------|--------------------|--------------------|-----------|------------|
| Race/Ethnicity | | | | |
| Gender | | | | |
| Age | | | | |
| Disability | | | | |
| Religion | | | | |
| Sexual Orientation | | | | |
| Socioeconomic | | | | |

### 5.3 Bias Impact Assessment
*[Assessment of biases likely to affect health, safety, fundamental rights, or cause discrimination]*

| Potential Impact | Affected Groups | Likelihood | Severity | Risk Level |
|-----------------|-----------------|------------|----------|------------|
| Health Impact | | | | |
| Safety Impact | | | | |
| Fundamental Rights | | | | |
| Discrimination | | | | |

### 5.4 Bias Mitigation Measures
*[Measures to detect, prevent, and mitigate biases - Article 10(2)(g)]*

| Bias Identified | Mitigation Measure | Implementation | Effectiveness |
|-----------------|-------------------|----------------|---------------|
| | | | |
| | | | |

**Mitigation Techniques Used:**
- [ ] Re-sampling
- [ ] Re-weighting
- [ ] Adversarial debiasing
- [ ] Fairness constraints
- [ ] Pre-processing adjustments
- [ ] In-processing adjustments
- [ ] Post-processing adjustments
- [ ] Other: [Specify]

### 5.5 Residual Bias Assessment

| Bias Type | Residual Level | Acceptable? | Justification |
|-----------|---------------|-------------|---------------|
| | | | |
| | | | |

---

## 6. DATA GAPS & SHORTCOMINGS

### 6.1 Identified Gaps
*[Identify relevant data gaps or shortcomings - Article 10(2)(h)]*

| Gap/Shortcoming | Description | Impact on Compliance | Severity |
|-----------------|-------------|--------------------|----------|
| | | | |
| | | | |

### 6.2 Gap Mitigation Plan

| Gap | Mitigation Approach | Timeline | Responsible | Status |
|-----|--------------------|----------|-------------|--------|
| | [Additional collection/Synthetic data/Other] | | | |
| | | | | |

### 6.3 Additional Data Collection (if needed)

**Collection Plan:**

| Aspect | Details |
|--------|---------|
| Data Needed | |
| Collection Method | |
| Target Volume | |
| Timeline | |
| Budget | |
| Responsible | |

---

## 7. SPECIAL CATEGORIES OF PERSONAL DATA

### 7.1 Processing Justification
*[If applicable - processing for bias detection/correction per Article 10(5)]*

**Processing Applies:** [Yes/No]

*If Yes:*

**Justification for Processing:**

| Requirement | Met? | Evidence |
|-------------|------|----------|
| Bias detection cannot be fulfilled by other data | | |
| Technical limitations on re-use | | |
| State-of-the-art security measures | | |
| Strict access controls | | |
| No transmission to other parties | | |
| Deletion after bias correction | | |
| Records of processing activities | | |

### 7.2 Safeguards Implemented

| Safeguard | Description | Implementation |
|-----------|-------------|----------------|
| Pseudonymization | | |
| Encryption | | |
| Access Controls | | |
| Audit Logging | | |
| Retention Limits | | |
| Other | | |

### 7.3 Processing Records

**Records Location:**
[Reference to records of processing activities]

**Deletion Schedule:**
[Specify when special category data will be deleted]

---

## 8. DATA MANAGEMENT PRACTICES

### 8.1 Data Storage

| Aspect | Details |
|--------|---------|
| Storage Location | |
| Storage Format | |
| Encryption | |
| Backup Procedures | |
| Access Controls | |
| Retention Period | |

### 8.2 Data Security

**Security Measures:**

| Measure | Description |
|---------|-------------|
| Access Control | |
| Encryption at Rest | |
| Encryption in Transit | |
| Audit Logging | |
| Incident Response | |
| Other | |

### 8.3 Data Access

**Access Control Matrix:**

| Role | Read | Write | Delete | Export |
|------|------|-------|--------|--------|
| Data Engineer | | | | |
| ML Engineer | | | | |
| Analyst | | | | |
| Auditor | | | | |
| Other | | | | |

### 8.4 Data Retention & Disposal

**Retention Schedule:**

| Dataset | Retention Period | Legal Basis | Disposal Method |
|---------|-----------------|-------------|-----------------|
| | | | |
| | | | |

**Disposal Procedures:**
[Describe secure disposal procedures]

---

## 9. DATA DOCUMENTATION

### 9.1 Datasheets

**Training Data Datasheet:**
[Attach or reference complete datasheet]

**Validation Data Datasheet:**
[Attach or reference complete datasheet]

**Testing Data Datasheet:**
[Attach or reference complete datasheet]

### 9.2 Documentation Checklist

- [ ] Data collection methodology documented
- [ ] Data origin and provenance recorded
- [ ] Pre-processing operations documented
- [ ] Annotation guidelines and quality metrics recorded
- [ ] Data quality assessment completed
- [ ] Bias assessment documented
- [ ] Mitigation measures recorded
- [ ] Data gaps identified and addressed
- [ ] Security measures documented
- [ ] Retention and disposal procedures defined

### 9.3 Documentation Updates

| Date | Version | Changes | Author |
|------|---------|---------|--------|
| | | | |
| | | | |

---

## APPENDICES

### Appendix A: Dataset Datasheets
*[Complete datasheets for each dataset]*

### Appendix B: Data Collection Instruments
*[Forms, APIs, scripts used for collection]*

### Appendix C: Annotation Guidelines
*[Complete annotation guidelines]*

### Appendix D: Bias Assessment Reports
*[Detailed bias assessment reports]*

### Appendix E: Data Processing Scripts
*[Code used for data processing]*

### Appendix F: References
- Regulation (EU) 2024/1689, Article 10
- GDPR (Regulation (EU) 2016/679)
- [Other relevant standards]

---

## DOCUMENT APPROVAL

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Data Governance Lead | | | |
| Data Protection Officer | | | |
| Technical Lead | | | |
| Compliance Officer | | | |
| Authorized Signatory | | | |

---

**Document Control:**
- **Retention Period:** 10 years after system placed on market
- **Storage Location:** [Specify]
- **Access Controls:** [Describe]
- **Review Frequency:** [Specify]

---

*This template is based on Regulation (EU) 2024/1689, Article 10. Customize for your specific AI system and data context. Ensure compliance with GDPR and other applicable data protection laws.*
