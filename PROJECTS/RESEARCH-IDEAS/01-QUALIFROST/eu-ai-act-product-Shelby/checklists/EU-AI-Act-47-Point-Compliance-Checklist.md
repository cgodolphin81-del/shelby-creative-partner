# EU AI Act Compliance Checklist
## 47-Point Comprehensive Compliance Checklist for High-Risk AI Systems

**Version:** 1.0  
**Based on:** Regulation (EU) 2024/1689 (AI Act)  
**Applicability:** Providers of High-Risk AI Systems (Article 6 + Annex III)  
**Last Updated:** March 2026

---

## 📋 How to Use This Checklist

- ✅ = Compliant
- ⚠️ = Partially Compliant / In Progress
- ❌ = Not Compliant / Not Started
- N/A = Not Applicable

**Instructions:** Review each item against your AI system. Document evidence in the "Evidence Location" column. Address all gaps before market placement.

---

## SECTION 1: SCOPE & CLASSIFICATION (Points 1-5)

| # | Requirement | Status | Evidence Location | Notes |
|---|-------------|--------|-------------------|-------|
| 1 | **Determine if your AI system falls under the EU AI Act definition** (Article 3): machine-based system with autonomy, infers outputs from inputs | | | |
| 2 | **Verify if your system is classified as high-risk** per Annex III (biometrics, critical infrastructure, education, employment, essential services, law enforcement, migration, justice/democracy) | | | |
| 3 | **Confirm the system is not excluded** (military/defense/national security purposes, or purely research/testing outside market placement) | | | |
| 4 | **Identify your role in the AI value chain**: Provider, Deployer, Importer, Distributor, or Product Manufacturer | | | |
| 5 | **Determine if GPAI model obligations apply** (Article 53) if you provide foundation models used by downstream providers | | | |

---

## SECTION 2: PROHIBITED PRACTICES CHECK (Points 6-12)

| # | Requirement | Status | Evidence Location | Notes |
|---|-------------|--------|-------------------|-------|
| 6 | **Verify no subliminal/manipulative techniques** are used that materially distort behavior (Article 5(1)(a)) | | | |
| 7 | **Confirm no exploitation of vulnerabilities** based on age, disability, or social/economic situation (Article 5(1)(b)) | | | |
| 8 | **Ensure no social scoring systems** that lead to detrimental treatment (Article 5(1)(c)) | | | |
| 9 | **Verify no criminal risk prediction** based solely on profiling or personality traits (Article 5(1)(d)) | | | |
| 10 | **Confirm no untargeted facial image scraping** for recognition databases (Article 5(1)(e)) | | | |
| 11 | **Ensure no emotion inference** in workplace/education (except medical/safety) (Article 5(1)(f)) | | | |
| 12 | **Verify no biometric categorization** inferring race, politics, religion, sex, or sexual orientation (Article 5(1)(g)) | | | |

---

## SECTION 3: RISK MANAGEMENT SYSTEM (Points 13-18)

| # | Requirement | Status | Evidence Location | Notes |
|---|-------------|--------|-------------------|-------|
| 13 | **Establish documented risk management system** as continuous iterative process throughout lifecycle (Article 9(1-2)) | | | |
| 14 | **Identify and analyze known/foreseeable risks** to health, safety, and fundamental rights (Article 9(2)(a)) | | | |
| 15 | **Estimate and evaluate risks** under intended purpose AND reasonably foreseeable misuse (Article 9(2)(b)) | | | |
| 16 | **Implement targeted risk management measures** to address identified risks (Article 9(2)(d)) | | | |
| 17 | **Ensure residual risks are acceptable** and balance risk reduction with requirement fulfillment (Article 9(4-5)) | | | |
| 18 | **Test AI system** to identify appropriate risk management measures and verify consistent performance (Article 9(6-8)) | | | |

---

## SECTION 4: DATA GOVERNANCE (Points 19-24)

| # | Requirement | Status | Evidence Location | Notes |
|---|-------------|--------|-------------------|-------|
| 19 | **Implement data governance practices** for training, validation, and testing datasets (Article 10(2)) | | | |
| 20 | **Ensure datasets are relevant, representative, and error-free** to the best extent possible (Article 10(3)) | | | |
| 21 | **Document data collection processes** and original purpose of personal data collection (Article 10(2)(b-c)) | | | |
| 22 | **Examine datasets for biases** that could affect health, safety, fundamental rights, or cause discrimination (Article 10(2)(f)) | | | |
| 23 | **Implement measures to detect, prevent, and mitigate biases** identified in datasets (Article 10(2)(g)) | | | |
| 24 | **Identify and address data gaps** that prevent compliance with the AI Act (Article 10(2)(h)) | | | |

---

## SECTION 5: TECHNICAL DOCUMENTATION (Points 25-30)

| # | Requirement | Status | Evidence Location | Notes |
|---|-------------|--------|-------------------|-------|
| 25 | **Create technical documentation BEFORE market placement** per Article 11 and Annex IV (Article 11(1)) | | | |
| 26 | **Include general system description**: intended purpose, provider details, versions, hardware/software interactions (Annex IV.1) | | | |
| 27 | **Document development process**: methods, design specifications, architecture, computational resources (Annex IV.2) | | | |
| 28 | **Provide datasheets for training data**: provenance, scope, characteristics, labeling, cleaning methodologies (Annex IV.2(d)) | | | |
| 29 | **Include validation/testing procedures**: metrics, accuracy, robustness, discriminatory impact assessments, test logs (Annex IV.2(g)) | | | |
| 30 | **Document cybersecurity measures** implemented in the system (Annex IV.2(h)) | | | |

---

## SECTION 6: RECORD-KEEPING & LOGGING (Points 31-33)

| # | Requirement | Status | Evidence Location | Notes |
|---|-------------|--------|-------------------|-------|
| 31 | **Implement automatic logging** of system operation (Article 12) | | | |
| 32 | **Retain logs for minimum 6 months** (or longer per applicable law) while under provider control (Article 19(1)) | | | |
| 33 | **Ensure logs enable traceability** of system operation and facilitate post-market monitoring (Article 12) | | | |

---

## SECTION 7: TRANSPARENCY & INFORMATION TO DEPLOYERS (Points 34-37)

| # | Requirement | Status | Evidence Location | Notes |
|---|-------------|--------|-------------------|-------|
| 34 | **Design system for transparency** enabling deployers to interpret outputs appropriately (Article 13(1)) | | | |
| 35 | **Provide clear instructions for use** in accessible digital format (Article 13(2)) | | | |
| 36 | **Include performance characteristics**: accuracy metrics, robustness, cybersecurity levels, known limitations (Article 13(3)(b)) | | | |
| 37 | **Document human oversight measures** and technical measures to facilitate output interpretation (Article 13(3)(d)) | | | |

---

## SECTION 8: HUMAN OVERSIGHT (Points 38-40)

| # | Requirement | Status | Evidence Location | Notes |
|---|-------------|--------|-------------------|-------|
| 38 | **Design system for effective human oversight** with appropriate human-machine interface tools (Article 14(1)) | | | |
| 39 | **Enable deployers to**: understand capabilities/limitations, monitor operation, interpret outputs, override/reverse decisions, interrupt system (Article 14(4)) | | | |
| 40 | **Implement double-verification** (two competent persons) for biometric identification systems unless disproportionate (Article 14(5)) | | | |

---

## SECTION 9: ACCURACY, ROBUSTNESS & CYBERSECURITY (Points 41-42)

| # | Requirement | Status | Evidence Location | Notes |
|---|-------------|--------|-------------------|-------|
| 41 | **Achieve appropriate levels of accuracy, robustness, and cybersecurity** throughout lifecycle (Article 15(1)) | | | |
| 42 | **Implement resilience measures**: technical redundancy, backup/fail-safe plans, protection against data poisoning, adversarial attacks (Article 15(4-5)) | | | |

---

## SECTION 10: QUALITY MANAGEMENT SYSTEM (Points 43-44)

| # | Requirement | Status | Evidence Location | Notes |
|---|-------------|--------|-------------------|-------|
| 43 | **Establish documented quality management system** including: regulatory compliance strategy, design controls, testing procedures, data management, risk management, post-market monitoring, incident reporting, resource management, accountability framework (Article 17(1)) | | | |
| 44 | **Ensure QMS implementation is proportionate** to organization size while maintaining required rigor (Article 17(2)) | | | |

---

## SECTION 11: CONFORMITY ASSESSMENT & CE MARKING (Points 45-47)

| # | Requirement | Status | Evidence Location | Notes |
|---|-------------|--------|-------------------|-------|
| 45 | **Undergo appropriate conformity assessment** before market placement: Annex VI (internal control) or Annex VII (notified body) based on system type and standards applied (Article 43) | | | |
| 46 | **Draw up EU Declaration of Conformity** per Article 47 and affix CE marking per Article 48 | | | |
| 47 | **Register high-risk AI system** in EU database per Article 49 before market placement or service | | | |

---

## POST-MARKET OBLIGATIONS (Ongoing - Not Counted in 47)

| # | Requirement | Frequency | Evidence Location | Notes |
|---|-------------|-----------|-------------------|-------|
| PM-1 | **Establish post-market monitoring system** with monitoring plan (Article 72) | Continuous | | |
| PM-2 | **Report serious incidents** to authorities within 15 days (Article 73) | As they occur | | |
| PM-3 | **Take corrective actions** for non-compliant systems (withdraw, disable, recall) (Article 20) | As needed | | |
| PM-4 | **Update technical documentation** to reflect system changes (Article 11) | As changes occur | | |
| PM-5 | **Cooperate with competent authorities** upon reasoned requests (Article 16(k)) | As requested | | |

---

## COMPLIANCE SUMMARY

| Section | Total Points | ✅ Compliant | ⚠️ In Progress | ❌ Not Started | Compliance % |
|---------|--------------|--------------|----------------|----------------|--------------|
| 1. Scope & Classification | 5 | | | | |
| 2. Prohibited Practices | 7 | | | | |
| 3. Risk Management | 6 | | | | |
| 4. Data Governance | 6 | | | | |
| 5. Technical Documentation | 6 | | | | |
| 6. Record-Keeping | 3 | | | | |
| 7. Transparency | 4 | | | | |
| 8. Human Oversight | 3 | | | | |
| 9. Accuracy & Security | 2 | | | | |
| 10. Quality Management | 2 | | | | |
| 11. Conformity Assessment | 3 | | | | |
| **TOTAL** | **47** | | | | **0%** |

---

## NEXT STEPS

1. **Complete all checklist items** marked ❌ or ⚠️
2. **Compile evidence** in organized compliance folder
3. **Conduct internal audit** before conformity assessment
4. **Schedule notified body assessment** if required (Annex VII)
5. **Submit registration** to EU database
6. **Affix CE marking** and place on market

---

**Document Owner:** [Name/Title]  
**Review Date:** [Date]  
**Next Review:** [Date + 6 months]

---

*This checklist is based on Regulation (EU) 2024/1689. Always verify against the official text and consult legal counsel for specific compliance matters.*
