# EU AI Act Risk Assessment Template
## High-Risk AI System Classification & Scoring Matrix

**Document Version:** 1.0  
**Template For:** EU AI Act Compliance Assessment  
**Based On:** Regulation (EU) 2024/1689, Annex III

---

## PART 1: AI SYSTEM IDENTIFICATION

### System Information

| Field | Details |
|-------|---------|
| **System Name** | |
| **System ID/Version** | |
| **Developer/Provider** | |
| **Deployer Organization** | |
| **Deployment Date** | |
| **System Owner** | |
| **Contact Information** | |

### Intended Purpose

**Describe the specific purpose and use case(s) of this AI system:**

---

**Target users and affected persons:**

---

**Operating environment and conditions:**

---

---

## PART 2: RISK CLASSIFICATION SCREENING

### 2.1 Prohibited AI Practices Check (Article 5)

*If ANY item is checked, this system is PROHIBITED and cannot be placed on the EU market.*

| Prohibited Practice | Applies? | Details |
|---------------------|----------|---------|
| Social scoring by public authorities | ☐ Yes ☐ No | |
| Real-time remote biometric identification in public spaces (law enforcement exceptions apply) | ☐ Yes ☐ No | |
| Biometric categorization inferring sensitive attributes | ☐ Yes ☐ No | |
| Emotion recognition in workplace/education (exceptions apply) | ☐ Yes ☐ No | |
| Untargeted scraping of facial images from internet/CCTV | ☐ Yes ☐ No | |
| AI that manipulates human behavior causing harm | ☐ Yes ☐ No | |
| Exploiting vulnerabilities of specific groups | ☐ Yes ☐ No | |
| Predictive policing based solely on profiling | ☐ Yes ☐ No | |

**Result:** ☐ PROHIBITED (cannot proceed) ☐ NOT PROHIBITED (continue assessment)

---

### 2.2 High-Risk Category Screening (Annex III)

*Check if the AI system falls into ANY high-risk category:*

| High-Risk Category | Applies? | Specific Use Case |
|--------------------|----------|-------------------|
| **Biometric Identification** | ☐ Yes ☐ No ☐ N/A | |
| └─ Remote biometric identification | | |
| └─ Biometric categorization | | |
| └─ Emotion recognition | | |
| **Critical Infrastructure** | ☐ Yes ☐ No ☐ N/A | |
| └─ Road traffic safety | | |
| └─ Water/gas/electricity supply | | |
| └─ Digital infrastructure management | | |
| **Education & Vocational Training** | ☐ Yes ☐ No ☐ N/A | |
| └─ Admission decisions | | |
| └─ Assignment to education levels | | |
| └─ Learning analytics/monitoring | | |
| └─ Exam proctoring/cheating detection | | |
| **Employment & Worker Management** | ☐ Yes ☐ No ☐ N/A | |
| └─ Recruitment/screening | | |
| └─ Promotion/termination decisions | | |
| └─ Task allocation/monitoring | | |
| └─ Performance evaluation | | |
| **Essential Services (Public/Private)** | ☐ Yes ☐ No ☐ N/A | |
| └─ Credit scoring | | |
| └─ Insurance risk assessment | | |
| └─ Social benefits eligibility | | |
| └─ Emergency services dispatch | | |
| **Law Enforcement** | ☐ Yes ☐ No ☐ N/A | |
| └─ Individual risk assessment | | |
| └─ Polygraph/detection tools | | |
| └─ Criminal profiling | | |
| └─ Evidence reliability evaluation | | |
| **Migration & Border Control** | ☐ Yes ☐ No ☐ N/A | |
| └─ Travel document verification | | |
| └─ Asylum application assessment | | |
| └─ Risk profiling for border control | | |
| **Justice & Democratic Processes** | ☐ Yes ☐ No ☐ N/A | |
| └─ Judicial decision support | | |
| └─ Election influence detection | | |
| └─ Legal research/recommendation | | |

**Preliminary Classification:** ☐ HIGH-RISK ☐ NOT HIGH-RISK

---

## PART 3: RISK SCORING MATRIX

### 3.1 Severity Assessment

*Rate the potential harm if the AI system fails or produces incorrect outputs.*

| Impact Dimension | Severity Level (1-5) | Justification |
|------------------|---------------------|---------------|
| **Physical Safety** | 1 2 3 4 5 | 1=No risk, 5=Life-threatening |
| **Fundamental Rights** | 1 2 3 4 5 | 1=Minimal, 5=Severe rights violation |
| **Financial Impact** | 1 2 3 4 5 | 1=Negligible, 5=Catastrophic loss |
| **Reputational Damage** | 1 2 3 4 5 | 1=Minor, 5=Existential threat |
| **Discrimination Potential** | 1 2 3 4 5 | 1=None, 5=Systematic bias against protected groups |
| **Scale of Affected Persons** | 1 2 3 4 5 | 1=<100, 5=>1M people |
| **Irreversibility** | 1 2 3 4 5 | 1=Fully reversible, 5=Permanent harm |

**Severity Subtotal:** _____ / 35

**Severity Classification:**
- **LOW:** 7-14 points
- **MEDIUM:** 15-24 points
- **HIGH:** 25-35 points

---

### 3.2 Probability Assessment

*Rate the likelihood of risks materializing.*

| Risk Factor | Probability Level (1-5) | Justification |
|-------------|------------------------|---------------|
| **Technical Failure Rate** | 1 2 3 4 5 | Based on testing, historical data |
| **Data Quality Issues** | 1 2 3 4 5 | Known gaps, bias, incompleteness |
| **Adversarial Vulnerability** | 1 2 3 4 5 | Susceptibility to attacks |
| **Human Error Potential** | 1 2 3 4 5 | Complexity, training adequacy |
| **Deployment Environment Risk** | 1 2 3 4 5 | Unpredictable conditions |
| **Third-Party Dependencies** | 1 2 3 4 5 | Vendor reliability, integration risks |
| **Regulatory Change Risk** | 1 2 3 4 5 | Likelihood of new requirements |

**Probability Subtotal:** _____ / 35

**Probability Classification:**
- **LOW:** 7-14 points
- **MEDIUM:** 15-24 points
- **HIGH:** 25-35 points

---

### 3.3 Overall Risk Classification Matrix

| | **LOW Probability** | **MEDIUM Probability** | **HIGH Probability** |
|---|---|---|---|
| **HIGH Severity** | MEDIUM RISK | HIGH RISK | HIGH RISK |
| **MEDIUM Severity** | LOW RISK | MEDIUM RISK | HIGH RISK |
| **LOW Severity** | LOW RISK | LOW RISK | MEDIUM RISK |

**Your Classification:**

- **Severity Score:** _____ (Classification: _________)
- **Probability Score:** _____ (Classification: _________)

**OVERALL RISK CLASSIFICATION:** ☐ LOW ☐ MEDIUM ☐ HIGH

---

## PART 4: RISK REGISTER

| Risk ID | Risk Description | Category | Severity | Probability | Risk Level | Mitigation Measures | Owner | Status |
|---------|------------------|----------|----------|-------------|------------|---------------------|-------|--------|
| R-001 | | | | | | | | |
| R-002 | | | | | | | | |
| R-003 | | | | | | | | |
| R-004 | | | | | | | | |
| R-005 | | | | | | | | |
| R-006 | | | | | | | | |
| R-007 | | | | | | | | |
| R-008 | | | | | | | | |
| R-009 | | | | | | | | |
| R-010 | | | | | | | | |

*Add additional rows as needed*

---

## PART 5: RISK TREATMENT PLAN

### High-Priority Risks (Requires Immediate Action)

| Risk ID | Treatment Strategy | Actions Required | Timeline | Resources Needed | Success Criteria |
|---------|-------------------|------------------|----------|------------------|------------------|
| | ☐ Avoid ☐ Reduce ☐ Transfer ☐ Accept | | | | |
| | ☐ Avoid ☐ Reduce ☐ Transfer ☐ Accept | | | | |

### Medium-Priority Risks (Requires Planned Action)

| Risk ID | Treatment Strategy | Actions Required | Timeline | Resources Needed | Success Criteria |
|---------|-------------------|------------------|----------|------------------|------------------|
| | ☐ Avoid ☐ Reduce ☐ Transfer ☐ Accept | | | | |
| | ☐ Avoid ☐ Reduce ☐ Transfer ☐ Accept | | | | |

### Low-Priority Risks (Monitor & Review)

| Risk ID | Treatment Strategy | Review Date | Notes |
|---------|-------------------|-------------|-------|
| | ☐ Accept ☐ Monitor | | |
| | ☐ Accept ☐ Monitor | | |

---

## PART 6: RESIDUAL RISK ASSESSMENT

*After mitigation measures are implemented, reassess remaining risk.*

| Risk ID | Original Risk Level | Mitigation Applied | Residual Risk Level | Acceptable? | Approval |
|---------|--------------------|--------------------|--------------------|-------------|----------|
| | | | | ☐ Yes ☐ No | |
| | | | | ☐ Yes ☐ No | |
| | | | | ☐ Yes ☐ No | |

**Overall Residual Risk:** ☐ ACCEPTABLE ☐ NOT ACCEPTABLE

**If NOT ACCEPTABLE, system cannot be deployed until additional mitigations are implemented.**

---

## PART 7: ASSESSMENT APPROVAL

| Role | Name | Signature | Date |
|------|------|-----------|------|
| **Assessment Lead** | | | |
| **System Owner** | | | |
| **Compliance Officer** | | | |
| **Senior Management** | | | |

---

## PART 8: REVIEW SCHEDULE

| Review Type | Frequency | Next Review Date | Responsible Party |
|-------------|-----------|------------------|-------------------|
| Full Risk Assessment | Annual | | |
| High-Risk System Review | Quarterly | | |
| Incident-Triggered Review | As needed | | |
| Regulatory Change Review | As needed | | |

---

**Document Control:**

- **Version:** 1.0
- **Effective Date:** _______________
- **Review Date:** _______________
- **Classification:** Internal / Confidential

---

*This template aligns with EU AI Act Article 9 (Risk Management System) and ISO 31000 Risk Management principles.*
