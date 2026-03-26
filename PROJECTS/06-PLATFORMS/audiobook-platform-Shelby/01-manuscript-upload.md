# 1. Manuscript Upload System

## Overview

The Manuscript Upload System is the entry point for all audiobook productions. It handles file ingestion, format conversion, chapter detection, and initial proofing to ensure manuscripts are ready for AI narration.

---

## Supported File Formats

### Primary Formats (Native Support)
| Format | Extension | Max Size | Processing Time |
|--------|-----------|----------|-----------------|
| Microsoft Word | .docx, .doc | 50 MB | <30 sec |
| PDF | .pdf | 50 MB | <60 sec |
| Plain Text | .txt | 10 MB | <10 sec |
| EPUB | .epub | 50 MB | <45 sec |
| HTML | .html, .htm | 10 MB | <15 sec |

### Secondary Formats (Conversion Required)
| Format | Extension | Conversion Target | Notes |
|--------|-----------|-------------------|-------|
| Google Docs | Link | .docx | Via Google API |
| Pages | .pages | .docx | macOS conversion |
| OpenOffice | .odt | .docx | LibreOffice conversion |
| RTF | .rtf | .docx | Native conversion |

### Audio Preview Formats
- Generate 30-second sample from first chapter
- Allow authors to preview voice options before full production

---

## Upload Flow

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   SELECT    │ →  │   UPLOAD    │ →  │   VALIDATE  │ →  │   PREVIEW   │
│   FILE      │    │   (S3)      │    │   CONTENT   │    │   CHAPTERS  │
└─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘
                                                                 │
                                                                 ↓
┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   BEGIN     │ ←  │   CONFIRM   │ ←  │   EDIT      │ ←  │   DETECT    │
│   PRODUCTION│    │   UPLOAD    │    │   METADATA  │    │   CHAPTERS  │
└─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘
```

---

## Chapter Detection System

### Automatic Detection Rules

The system uses ML-powered chapter detection with the following heuristics:

#### Pattern-Based Detection
```javascript
const chapterPatterns = [
  /chapter\s+[ivxlcdm]+\b/gi,           // Roman numerals: Chapter IV
  /chapter\s+\d+\b/gi,                   // Arabic numerals: Chapter 4
  /\bchapter\s+one\b/gi,                 // Written numbers: Chapter One
  /\bpart\s+[ivxlcdm]+\b/gi,             // Parts: Part II
  /\bpart\s+\d+\b/gi,                    // Parts: Part 2
  /^\s*\d+\.\s+[A-Z]/m,                  // Numbered sections: 1. Introduction
  /^\s*#[^\n]+/m,                        // Markdown headers: # Chapter Title
  /^\s*##[^\n]+/m,                       // Markdown subheaders
];
```

#### Structural Detection
- Page breaks (form feed characters)
- Large whitespace gaps (3+ line breaks)
- Centered text patterns
- Font size changes (PDF analysis)
- Heading styles (DOCX style analysis)

#### Confidence Scoring
| Confidence | Detection Method | Action |
|------------|------------------|--------|
| High (90%+) | Multiple patterns match | Auto-accept |
| Medium (70-89%) | Single strong pattern | Suggest for review |
| Low (<70%) | Weak or no patterns | Manual review required |

### Manual Chapter Editor

Authors can manually adjust chapter boundaries:

```typescript
interface ChapterEdit {
  chapterId: string;
  title: string;
  startOffset: number;      // Character position
  endOffset: number;
  estimatedDuration: number; // In seconds (based on avg 150 wpm)
  wordCount: number;
  needsReview: boolean;
}
```

**Editor Features:**
- Drag-and-drop chapter reordering
- Split/merge chapters
- Rename chapter titles
- Add chapter notes (for narrator context)
- Mark chapters as "skip" (front matter, acknowledgments, etc.)

---

## Content Validation

### Automated Checks

| Check | Description | Action on Failure |
|-------|-------------|-------------------|
| File Integrity | Verify file is not corrupted | Reject upload |
| Text Extraction | Ensure text can be extracted | Request alternate format |
| Language Detection | Identify primary language | Route to appropriate voice |
| Content Length | Verify 1,000+ words | Warn if too short |
| Special Characters | Detect non-standard characters | Flag for review |
| Image Detection | Identify embedded images | Notify (images not narrated) |
| Table Detection | Identify tables | Flag for special handling |
| Footnote Detection | Identify footnotes/endnotes | Offer inclusion/exclusion |

### Content Warnings

The system scans for content that may require special handling:

```typescript
interface ContentFlags {
  explicitLanguage: boolean;
  violence: boolean;
  adultContent: boolean;
  sensitiveTopics: string[];
  requiresDisclaimer: boolean;
}
```

**Actions:**
- Auto-add content warnings to audiobook metadata
- Allow author to add custom disclaimers
- Flag for human review if needed

---

## Text Preprocessing

### Normalization Pipeline

```
Raw Text → Unicode Normalization → Character Cleanup → 
Abbreviation Expansion → Number Formatting → SSML Markup
```

#### Unicode Normalization
- Convert to NFC (Normalization Form C)
- Handle special characters (em-dashes, smart quotes, etc.)
- Preserve intentional styling (italics, bold for emphasis)

#### Character Cleanup
```javascript
const cleanupRules = [
  { pattern: /[\u200B-\u200D]/g, replacement: '' },  // Zero-width chars
  { pattern: /\uFEFF/g, replacement: '' },            // BOM
  { pattern: /[\r\n]{3,}/g, replacement: '\n\n' },    // Excess line breaks
  { pattern: /[ \t]+/g, replacement: ' ' },           // Multiple spaces
];
```

#### Abbreviation Expansion
| Abbreviation | Expansion | Context |
|--------------|-----------|---------|
| Mr. | Mister | Before names |
| Mrs. | Missus | Before names |
| Dr. | Doctor | Context-dependent |
| St. | Street/Saint | Context-dependent |
| etc. | et cetera | End of lists |
| i.e. | that is | Explanations |
| e.g. | for example | Examples |

#### Number Formatting
- Currency: "$1,234.56" → "one thousand two hundred thirty-four dollars and fifty-six cents"
- Dates: "March 15, 2026" → "March fifteenth, twenty twenty-six"
- Times: "3:30 PM" → "three thirty P M"
- Percentages: "45%" → "forty-five percent"
- Phone numbers: "555-123-4567" → "five five five, one two three, four five six seven"

---

## SSML (Speech Synthesis Markup Language) Integration

### Supported SSML Tags

```xml
<speak>
  <!-- Prosody: Control speech characteristics -->
  <prosody rate="slow" pitch="low" volume="loud">
    Dramatic passage here.
  </prosody>
  
  <!-- Break: Insert pauses -->
  Sentence one.<break time="500ms"/>Sentence two.
  
  <!-- Emphasis: Stress specific words -->
  This is <emphasis level="strong">very</emphasis> important.
  
  <!-- Say-as: Specify interpretation -->
  My birthday is <say-as interpret-as="date">03-15-1985</say-as>.
  
  <!-- Substitution: Replace text -->
  <sub alias="Road">Rd.</sub>
  
  <!-- Phoneme: Custom pronunciation -->
  <phoneme alphabet="ipa" ph="ʃɪˈbɒləθ">Shibboleth</phoneme>
</speak>
```

### Auto-Generated SSML

The system automatically adds SSML for:
- **Paragraph breaks**: 300ms pause
- **Scene breaks**: 800ms pause
- **Dialogue**: Slight pitch variation for different speakers
- **Emphasis**: Detect italicized/bold text
- **Lists**: Appropriate pacing between items

---

## Proofing Interface

### Pre-Production Proofing Checklist

```markdown
## Manuscript Proofing Checklist

- [ ] All chapters detected correctly
- [ ] Chapter titles are accurate
- [ ] Front matter identified (copyright, dedication, etc.)
- [ ] Back matter identified (about author, also by, etc.)
- [ ] Footnotes/endnotes handling confirmed
- [ ] Special content flagged (poetry, letters, documents)
- [ ] Pronunciation guide completed
- [ ] Character voice notes added
- [ ] Content warnings reviewed
- [ ] Estimated duration confirmed
```

### Pronunciation Guide

Authors can create custom pronunciation rules:

```typescript
interface PronunciationRule {
  word: string;
  phonetic: string;      // IPA or simplified phonetic
  audioSample?: string;  // Optional uploaded sample
  context?: string;      // When to apply (optional)
}

// Example:
{
  word: "Cthulhu",
  phonetic: "kuh-THOOL-hoo",
  context: "Always"
}
```

### Character Voice Notes

For multi-character scenes:

```typescript
interface CharacterNote {
  name: string;
  description: string;
  voiceHints: {
    age?: 'young' | 'middle' | 'old';
    gender?: 'male' | 'female' | 'non-binary';
    accent?: string;
    tone?: string;
    speechPattern?: string;
  };
  sampleDialogue?: string;
}
```

---

## API Endpoints

### Upload Manuscript

```http
POST /api/v1/manuscripts/upload
Content-Type: multipart/form-data

Request:
- file: File (required)
- title: string (required)
- author: string (required)
- language: string (default: "en-US")
- genre: string (optional)

Response:
{
  "manuscriptId": "ms_abc123",
  "status": "processing",
  "estimatedProcessingTime": 45,
  "pollUrl": "/api/v1/manuscripts/ms_abc123/status"
}
```

### Get Manuscript Status

```http
GET /api/v1/manuscripts/:id/status

Response:
{
  "manuscriptId": "ms_abc123",
  "status": "ready" | "processing" | "error",
  "progress": 85,
  "chapters": [
    {
      "id": "ch_001",
      "title": "Chapter 1: The Beginning",
      "wordCount": 3500,
      "estimatedDuration": 1400,
      "status": "detected"
    }
  ],
  "metadata": {
    "totalWords": 75000,
    "totalChapters": 24,
    "estimatedDuration": 30000,
    "language": "en-US"
  }
}
```

### Update Chapter

```http
PUT /api/v1/manuscripts/:id/chapters/:chapterId

Request:
{
  "title": "New Chapter Title",
  "startOffset": 12500,
  "endOffset": 18750,
  "skip": false,
  "notes": "Fast-paced action scene"
}
```

### Add Pronunciation Rule

```http
POST /api/v1/manuscripts/:id/pronunciation

Request:
{
  "word": "Eldoria",
  "phonetic": "el-DOR-ee-ah",
  "context": "Always"
}
```

---

## Error Handling

### Common Upload Errors

| Error Code | Message | Resolution |
|------------|---------|------------|
| UPLOAD_001 | File too large | Compress or split manuscript |
| UPLOAD_002 | Unsupported format | Convert to DOCX or PDF |
| UPLOAD_003 | File corrupted | Re-export from source |
| UPLOAD_004 | Text extraction failed | Try alternate format |
| UPLOAD_005 | Language not supported | Contact support |
| UPLOAD_006 | Content policy violation | Review guidelines |

### Retry Logic

- Automatic retry for transient errors (3 attempts, exponential backoff)
- Manual retry option for recoverable errors
- Support ticket creation for persistent failures

---

## Security & Privacy

### Data Protection

- **Encryption**: AES-256 at rest, TLS 1.3 in transit
- **Access Control**: Role-based access (author, editor, admin)
- **Retention**: Manuscripts retained for 90 days post-production (configurable)
- **Deletion**: Secure deletion upon request (GDPR compliant)

### Content Security

- Virus scanning on all uploads (ClamAV)
- Content policy enforcement
- DMCA takedown process
- Watermarking for preview samples

---

## Performance Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Upload Success Rate | 99.5% | Successful uploads / Total attempts |
| Processing Time | <60 sec | Upload to chapter detection complete |
| Chapter Detection Accuracy | 95% | Correctly detected / Total chapters |
| User Satisfaction | 4.5/5 | Post-upload survey |

---

*Version: 1.0.0 | Last Updated: March 2026*
