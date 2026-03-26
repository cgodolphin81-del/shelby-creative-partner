# 4. Quality Control Workflow

## Overview

The Quality Control (QC) Workflow ensures every audiobook meets professional standards before distribution. Our multi-layered approach combines AI-powered analysis with human review to catch errors, ensure consistency, and maintain the highest quality.

---

## QC Pipeline Overview

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    QUALITY CONTROL PIPELINE                              │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  ┌──────────────┐    ┌──────────────┐    ┌──────────────┐              │
│  │   AI PROOF   │ →  │   TECHNICAL  │ →  │   HUMAN      │              │
│  │   (Auto)     │    │   CHECK      │    │   REVIEW     │              │
│  └──────────────┘    └──────────────┘    └──────────────┘              │
│         ↓                   ↓                   ↓                       │
│  • Pronunciation      • Loudness           • Content accuracy          │
│  • Pacing             • Peak levels        • Emotional delivery        │
│  • Misreads           • Noise floor        • Character consistency     │
│  • Audio artifacts    • Format compliance  • Overall quality           │
│                                                                          │
│         └──────────────────┬──────────────────┘                          │
│                            ↓                                             │
│                   ┌──────────────┐                                       │
│                   │   CORRECTIONS│                                       │
│                   │   & REVISION │                                       │
│                   └──────────────┘                                       │
│                            ↓                                             │
│                   ┌──────────────┐                                       │
│                   │   FINAL      │                                       │
│                   │   APPROVAL   │                                       │
│                   └──────────────┘                                       │
│                            ↓                                             │
│                   ┌──────────────┐                                       │
│                   │   EXPORT &   │                                       │
│                   │   DISTRIBUTE │                                       │
│                   └──────────────┘                                       │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## Phase 1: AI Proofing (Automated)

### Pronunciation Verification

AI compares generated audio against expected pronunciation:

```typescript
interface PronunciationCheck {
  word: string;
  expectedPhonetic: string;
  detectedPhonetic: string;
  confidence: number;  // 0-100
  timestamp: number;   // Seconds in audio
  severity: 'error' | 'warning' | 'info';
  suggestion?: string; // Corrected pronunciation
}
```

**Detection Methods:**
- Phonetic alignment analysis
- Word boundary detection
- Confidence scoring from TTS engine
- Custom dictionary matching

### Misread Detection

Identify words that were read incorrectly:

```typescript
interface MisreadDetection {
  expectedText: string;
  detectedText: string;
  timestamp: number;
  confidence: number;
  type: 'substitution' | 'omission' | 'addition' | 'reordering';
  severity: 'critical' | 'major' | 'minor';
}
```

**Common Misread Patterns:**
| Pattern | Example | Detection Method |
|---------|---------|------------------|
| Homophones | "their" vs "there" | Context analysis |
| Abbreviations | "Dr." as "drive" | Dictionary lookup |
| Numbers | "1985" as "one nine eight five" | Format rules |
| Names | "Seán" as "Sean" | Pronunciation dictionary |
| Foreign words | "café" as "cafe" | Language detection |

### Pacing Analysis

Verify appropriate pacing throughout:

```typescript
interface PacingAnalysis {
  averageWPM: number;
  targetWPM: number;
  variance: number;
  sections: Array<{
    startTime: number;
    endTime: number;
    wpm: number;
    assessment: 'too-fast' | 'appropriate' | 'too-slow';
  }>;
  anomalies: Array<{
    timestamp: number;
    type: 'rush' | 'drag' | 'pause';
    severity: number;
  }>;
}
```

**Pacing Standards:**
| Content Type | Target WPM | Acceptable Range |
|--------------|------------|------------------|
| Literary Fiction | 145-155 | 130-170 |
| Thriller/Action | 155-165 | 140-180 |
| Non-Fiction | 150-160 | 135-175 |
| Children's | 130-140 | 120-150 |
| Technical | 140-150 | 125-165 |

### Audio Artifact Detection

Identify technical issues in the audio:

```typescript
interface ArtifactDetection {
  clipping: Array<{ timestamp: number; severity: number }>;
  plosives: Array<{ timestamp: number; severity: number }>;
  sibilance: Array<{ timestamp: number; severity: number }>;
  mouthClicks: Array<{ timestamp: number; severity: number }>;
  backgroundNoise: {
    level: number;  // dB
    frequency: number;  // Hz
    consistent: boolean;
  };
  digitalArtifacts: Array<{
    type: 'pop' | 'crackle' | 'dropout' | 'glitch';
    timestamp: number;
    severity: number;
  }>;
}
```

### Consistency Check

Ensure voice consistency across the entire book:

```typescript
interface ConsistencyReport {
  voiceDrift: number;  // 0-100 (lower is better)
  pitchVariance: number;  // semitones
  toneVariance: number;  // 0-100
  chapterConsistency: Array<{
    chapterId: string;
    voiceMatch: number;  // 0-100
    toneMatch: number;
    pacingMatch: number;
  }>;
  anomalies: Array<{
    chapterId: string;
    timestamp: number;
    issue: string;
    severity: 'minor' | 'moderate' | 'major';
  }>;
}
```

### AI Proofing Report

Comprehensive automated report:

```typescript
interface AIProofReport {
  projectId: string;
  generatedAt: Date;
  overallScore: number;  // 0-100
  summary: {
    totalIssues: number;
    critical: number;
    major: number;
    minor: number;
  };
  categories: {
    pronunciation: { score: number; issues: PronunciationCheck[] };
    misreads: { score: number; issues: MisreadDetection[] };
    pacing: { score: number; analysis: PacingAnalysis };
    audioQuality: { score: number; artifacts: ArtifactDetection };
    consistency: { score: number; report: ConsistencyReport };
  };
  recommendations: string[];
  autoFixable: number;  // Issues that can be auto-corrected
  requiresHumanReview: boolean;
}
```

---

## Phase 2: Technical Check

### Loudness Compliance

Verify adherence to platform standards:

```typescript
interface LoudnessCheck {
  standard: 'ACX' | 'iTunes' | 'Spotify' | 'Custom';
  measuredLUFS: number;
  targetLUFS: number;
  tolerance: number;
  passed: boolean;
  perChapter: Array<{
    chapterId: string;
    lufs: number;
    passed: boolean;
  }>;
}
```

**Requirements by Platform:**

| Platform | Target LUFS | Tolerance | True Peak Max |
|----------|-------------|-----------|---------------|
| ACX/Audible | -20 | ±2 dB | -3.0 dBTP |
| iTunes | -16 | ±1 dB | -1.0 dBTP |
| Spotify | -15 | ±2 dB | -1.0 dBTP |
| Findaway | -20 | ±2 dB | -3.0 dBTP |

### Peak Level Check

Ensure no clipping or excessive peaks:

```typescript
interface PeakCheck {
  maximumTruePeak: number;  // dBTP
  limit: number;
  passed: boolean;
  peakLocations: Array<{
    timestamp: number;
    chapterId: string;
    level: number;
  }>;
}
```

### Noise Floor Measurement

Verify background noise is within acceptable limits:

```typescript
interface NoiseFloorCheck {
  averageNoiseFloor: number;  // dB
  maximumNoiseFloor: number;
  limit: number;  // Typically -60 dB
  passed: boolean;
  noisySections: Array<{
    chapterId: string;
    startTime: number;
    endTime: number;
    noiseLevel: number;
  }>;
}
```

### Format Compliance

Verify output files meet specifications:

```typescript
interface FormatCheck {
  format: 'mp3' | 'wav' | 'flac' | 'aac';
  sampleRate: number;  // Hz
  bitDepth?: number;   // bits (for WAV/FLAC)
  bitRate?: number;    // kbps (for MP3/AAC)
  channels: 'mono' | 'stereo';
  expected: {
    format: string;
    sampleRate: number;
    bitRate?: number;
    channels: string;
  };
  passed: boolean;
  discrepancies: string[];
}
```

### Metadata Verification

Ensure all required metadata is present:

```typescript
interface MetadataCheck {
  required: Array<{
    field: string;
    present: boolean;
    value?: string;
    valid: boolean;
  }>;
  optional: Array<{
    field: string;
    present: boolean;
    value?: string;
  }>;
  id3Tags: {
    title: boolean;
    artist: boolean;
    album: boolean;
    trackNumber: boolean;
    year: boolean;
    genre: boolean;
    coverArt: boolean;
  };
  passed: boolean;
}
```

**Required Metadata Fields:**
- Title
- Author
- Narrator
- Publisher
- Copyright year
- ISBN (if available)
- Track titles
- Track numbers
- Cover art (3000x3000 minimum)

### Technical QC Report

```typescript
interface TechnicalQCReport {
  projectId: string;
  generatedAt: Date;
  overallPassed: boolean;
  checks: {
    loudness: LoudnessCheck;
    peaks: PeakCheck;
    noiseFloor: NoiseFloorCheck;
    format: FormatCheck;
    metadata: MetadataCheck;
  };
  failures: Array<{
    check: string;
    chapterId?: string;
    issue: string;
    severity: 'critical' | 'major' | 'minor';
    fixRequired: boolean;
  }>;
  warnings: string[];
}
```

---

## Phase 3: Human Review

### Reviewer Roles

| Role | Responsibilities | Access Level |
|------|------------------|--------------|
| **QC Specialist** | Full technical + content review | Edit permissions |
| **Proof Listener** | Content accuracy only | Comment permissions |
| **Author** | Final approval | Approve/Reject |
| **Producer** | Override and exceptions | Admin permissions |

### Review Interface

```
┌────────────────────────────────────────────────────────────────────────┐
│  QC REVIEW: "The Midnight Garden" - Chapter 5                          │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  ┌──────────────────────────────────────────────────────────────────┐ │
│  │  ⚠️ 3 ISSUES FLAGGED FOR REVIEW                                  │ │
│  │  ─────────────────────────────────────────────────────────────   │ │
│  │  🔴 CRITICAL (1)  🟡 MAJOR (1)  🟢 MINOR (1)                      │ │
│  └──────────────────────────────────────────────────────────────────┘ │
│                                                                        │
│  ISSUE #1 - CRITICAL                                                   │
│  ──────────────────────────────────────────────────────────────────    │
│  📍 Timestamp: 3:45                                                    │
│  🔊 Type: Misread                                                      │
│  📝 Expected: "She walked through the garden gate."                    │
│  🎤 Heard: "She talked through the garden gate."                       │
│  ⚡ Action: [Regenerate] [Manual Fix] [Mark Correct] [Skip]            │
│                                                                        │
│  ISSUE #2 - MAJOR                                                      │
│  ──────────────────────────────────────────────────────────────────    │
│  📍 Timestamp: 7:22                                                    │
│  🔊 Type: Pronunciation                                                │
│  📝 Word: "Cthulhu"                                                    │
│  🎤 Heard: "KATH-ool-hoo" (Expected: "kuh-THOOL-hoo")                  │
│  ⚡ Action: [Apply Dictionary] [Custom Pronunciation] [Skip]           │
│                                                                        │
│  ISSUE #3 - MINOR                                                      │
│  ──────────────────────────────────────────────────────────────────    │
│  📍 Timestamp: 12:08                                                   │
│  🔊 Type: Pacing                                                       │
│  📝 Section reads 20% faster than chapter average                      │
│  ⚡ Action: [Adjust Pacing] [Accept] [Skip]                            │
│                                                                        │
│  ──────────────────────────────────────────────────────────────────    │
│  [▶ Play Section]  [📝 Add Comment]  [✅ Approve Chapter]              │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘
```

### Review Checklist

```markdown
## Human Review Checklist

### Content Accuracy
- [ ] All words read correctly
- [ ] Proper nouns pronounced correctly
- [ ] Numbers and dates read appropriately
- [ ] Foreign words pronounced correctly
- [ ] No omitted or added words

### Performance Quality
- [ ] Consistent voice throughout
- [ ] Appropriate emotional delivery
- [ ] Natural pacing and rhythm
- [ ] Clear enunciation
- [ ] Character voices consistent (if applicable)

### Technical Quality
- [ ] No audio artifacts (clicks, pops, noise)
- [ ] Appropriate volume levels
- [ ] Smooth transitions between sections
- [ ] No unwanted breaths or mouth sounds
- [ ] Consistent room tone

### Chapter Structure
- [ ] Chapter title announced correctly
- [ ] Appropriate pauses at section breaks
- [ ] Front/back matter handled correctly
- [ ] Total duration as expected

### Overall Assessment
- [ ] Quality meets professional standards
- [ ] Ready for distribution
- [ ] Notes for future reference: _______________
```

### Review Scoring

```typescript
interface ReviewScore {
  contentAccuracy: number;    // 0-100
  performanceQuality: number; // 0-100
  technicalQuality: number;   // 0-100
  overallScore: number;       // 0-100
  recommendation: 'approve' | 'revise' | 'reject';
  notes: string;
  reviewerId: string;
  reviewedAt: Date;
}
```

**Scoring Thresholds:**
| Score Range | Status | Action |
|-------------|--------|--------|
| 95-100 | Excellent | Auto-approve |
| 85-94 | Good | Minor revisions optional |
| 70-84 | Acceptable | Revisions required |
| Below 70 | Below Standard | Re-record required |

---

## Phase 4: Corrections & Revision

### Correction Types

| Type | Description | Turnaround |
|------|-------------|------------|
| **Auto-Fix** | AI-correctable (pronunciation, pacing) | <1 minute |
| **Regenerate** | Re-narrate specific passage | <5 minutes |
| **Manual Edit** | Audio editing required | <30 minutes |
| **Re-record** | Full section re-narration | <24 hours |

### Correction Workflow

```typescript
interface CorrectionRequest {
  id: string;
  projectId: string;
  chapterId: string;
  timestamp: number;
  type: 'pronunciation' | 'misread' | 'pacing' | 'emotion' | 'technical';
  description: string;
  severity: 'critical' | 'major' | 'minor';
  suggestedFix?: {
    method: 'regenerate' | 'edit' | 'replace';
    parameters: Record<string, any>;
  };
  status: 'pending' | 'in-progress' | 'resolved' | 'rejected';
  assignedTo?: string;
  createdAt: Date;
  resolvedAt?: Date;
}
```

### Batch Corrections

Apply multiple corrections efficiently:

```http
POST /api/v1/projects/:projectId/corrections/batch

Request:
{
  "corrections": [
    {
      "chapterId": "ch_003",
      "timestamp": 125.5,
      "type": "pronunciation",
      "word": "Eldoria",
      "correction": "el-DOR-ee-ah",
      "applyGlobally": true
    },
    {
      "chapterId": "ch_003",
      "timestamp": 245.0,
      "type": "pacing",
      "newRate": 0.9,
      "duration": 15.0
    }
  ],
  "regenerateAffected": true
}

Response:
{
  "batchId": "batch_abc123",
  "estimatedCompletion": "2026-03-22T15:00:00Z",
  "affectedChapters": ["ch_003", "ch_007", "ch_012"],
  "status": "processing"
}
```

### Revision History

Track all corrections:

```typescript
interface RevisionHistory {
  projectId: string;
  revisions: Array<{
    revisionId: string;
    timestamp: Date;
    author: string;
    changes: Array<{
      chapterId: string;
      type: string;
      description: string;
      before?: any;
      after?: any;
    }>;
    qcScoreBefore?: number;
    qcScoreAfter?: number;
  }>;
}
```

---

## Phase 5: Final Approval

### Approval Workflow

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   QC PASS   │ →  │   AUTHOR    │ →  │   PRODUCER  │ →  │   READY FOR │
│   (Auto)    │    │   REVIEW    │    │   SIGN-OFF  │    │   EXPORT    │
└─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘
```

### Approval Checklist

```markdown
## Final Approval Checklist

### Pre-Approval Verification
- [ ] All QC issues resolved
- [ ] Author has reviewed and approved
- [ ] All chapters present and in order
- [ ] Metadata complete and accurate
- [ ] Cover art uploaded and verified
- [ ] ISBN assigned (if applicable)

### Distribution Readiness
- [ ] ACX compliance verified (if Audible)
- [ ] All format variants generated
- [ ] Chapter markers embedded
- [ ] ID3 tags complete
- [ ] Distribution metadata prepared

### Documentation
- [ ] QC reports archived
- [ ] Revision history documented
- [ ] Author approval recorded
- [ ] Rights documentation complete
```

### Approval API

```http
POST /api/v1/projects/:projectId/approve

Request:
{
  "approverId": "usr_abc123",
  "approverRole": "author" | "producer" | "admin",
  "approvalType": "chapter" | "full-book",
  "chapterIds": ["ch_001", "ch_002"],  // If chapter-level
  "notes": "All chapters approved for distribution",
  "conditionalApproval": false,
  "conditions": string[]  // If conditional
}

Response:
{
  "approvalId": "apv_xyz789",
  "status": "approved" | "conditionally-approved",
  "approvedAt": "2026-03-22T16:00:00Z",
  "nextStep": "export" | "address-conditions",
  "exportReady": true
}
```

---

## QC Metrics & Reporting

### Quality Metrics Dashboard

```typescript
interface QCMetrics {
  projectId: string;
  generatedAt: Date;
  
  aiProofing: {
    totalIssues: number;
    issuesByCategory: Record<string, number>;
    autoFixRate: number;  // Percentage
    averageScore: number;
  };
  
  technicalCheck: {
    loudnessCompliance: number;  // Percentage
    peakCompliance: number;
    noiseFloorCompliance: number;
    formatCompliance: number;
  };
  
  humanReview: {
    reviewerScore: number;
    issuesFound: number;
    issuesResolved: number;
    reviewDuration: number;  // minutes
  };
  
  overall: {
    qualityScore: number;  // 0-100
    firstPassApproval: boolean;
    revisionCount: number;
    totalQCTime: number;  // minutes
  };
}
```

### Platform Compliance Report

```typescript
interface ComplianceReport {
  platform: 'ACX' | 'iTunes' | 'Spotify' | 'Findaway';
  version: string;
  checkedAt: Date;
  
  requirements: Array<{
    name: string;
    specification: string;
    measured: string;
    passed: boolean;
    notes?: string;
  }>;
  
  summary: {
    totalRequirements: number;
    passed: number;
    failed: number;
    compliancePercentage: number;
  };
  
  certification: {
    eligible: boolean;
    certificateId?: string;
    validUntil?: Date;
  };
}
```

---

## Error Handling & Escalation

### Issue Severity Levels

| Level | Description | Response Time | Escalation |
|-------|-------------|---------------|------------|
| **Critical** | Unusable audio, major misreads | <1 hour | Producer + Author |
| **Major** | Noticeable errors, pacing issues | <4 hours | QC Lead |
| **Minor** | Slight imperfections | <24 hours | QC Specialist |
| **Cosmetic** | Personal preference items | <48 hours | Optional fix |

### Escalation Path

```
QC Specialist → QC Lead → Producer → Author → Support
```

### Dispute Resolution

When author and QC disagree:

```typescript
interface DisputeResolution {
  issueId: string;
  qcPosition: {
    issue: string;
    severity: string;
    recommendation: string;
    evidence: any[];
  };
  authorPosition: {
    rationale: string;
    preference: string;
    supportingInfo?: string;
  };
  resolution: {
    decision: 'qc-overrides' | 'author-overrides' | 'compromise';
    decidedBy: string;
    rationale: string;
    timestamp: Date;
  };
}
```

---

## API Endpoints

### Get QC Report

```http
GET /api/v1/projects/:projectId/qc/report

Response: AIProofReport | TechnicalQCReport
```

### Submit Review

```http
POST /api/v1/projects/:projectId/qc/review

Request:
{
  "reviewerId": "usr_abc123",
  "chapterId": "ch_005",
  "scores": {
    "contentAccuracy": 95,
    "performanceQuality": 92,
    "technicalQuality": 98
  },
  "issues": [...],
  "recommendation": "approve",
  "notes": "Excellent narration, minor pacing note in section 3"
}
```

### Request Correction

```http
POST /api/v1/projects/:projectId/qc/correction

Request:
{
  "chapterId": "ch_005",
  "timestamp": 145.5,
  "type": "misread",
  "description": "Word 'desert' should be 'dessert'",
  "severity": "major"
}
```

### Get Compliance Report

```http
GET /api/v1/projects/:projectId/qc/compliance/:platform

Response: ComplianceReport
```

---

## Performance Standards

| Metric | Target | Measurement |
|--------|--------|-------------|
| AI Proofing Accuracy | 95% | Issues correctly identified |
| False Positive Rate | <5% | Incorrectly flagged issues |
| Technical Check Time | <2 min/book | Automated processing |
| Human Review Time | <30 min/chapter | Average review duration |
| First-Pass Approval Rate | 80% | Books approved without revision |
| Correction Turnaround | <24 hours | From request to resolution |
| Overall QC Time | <48 hours | Upload to approval |

---

*Version: 1.0.0 | Last Updated: March 2026*
