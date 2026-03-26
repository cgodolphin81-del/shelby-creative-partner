# Writing Styles Engine

## Overview
The Writing Styles Engine analyzes and mimics the distinctive voices of famous authors, allowing users to generate content in specific literary styles or blend multiple influences.

---

## Author Style Library

### Classic Literature

#### Ernest Hemingway
```yaml
style_id: hemingway
name: Ernest Hemingway
era: 1920s-1960s
movement: Modernism / Lost Generation

characteristics:
  sentence_length: short
  vocabulary: simple, concrete
  dialogue: realistic, sparse
  description: minimal, sensory
  adjectives: sparse
  adverbs: avoided
  punctuation: simple
  paragraphs: short

techniques:
  - Iceberg Theory (omit deeper meaning)
  - Simple declarative sentences
  - Concrete nouns and active verbs
  - Understatement
  - Repetition for effect

themes:
  - Masculinity
  - War
  - Loss
  - Nature
  - Death
  - Courage

example:
  "It was late and the waiters knew he would stay. 
   He sat in the shadow of the leaves of the tree 
   that moved in the wind. The street light shone 
   on the brass number on his collar."

prompt_guide:
  - "Write in short, direct sentences"
  - "Use concrete, physical details"
  - "Avoid adjectives and adverbs"
  - "Let dialogue carry emotion"
  - "Omit the deeper meaning - show only surface"
```

#### Jane Austen
```yaml
style_id: austen
name: Jane Austen
era: 1810s-1820s
movement: Romantic / Social Satire

characteristics:
  sentence_length: long, complex
  vocabulary: formal, precise
  dialogue: witty, indirect
  description: social observations
  tone: ironic, gentle
  narration: free indirect discourse
  humor: subtle, satirical

techniques:
  - Free indirect speech
  - Irony and satire
  - Social commentary
  - Manners as character revelation
  - Balanced sentence structures

themes:
  - Marriage and money
  - Social class
  - Pride and prejudice
  - Self-knowledge
  - Propriety

example:
  "It is a truth universally acknowledged, that a 
   single man in possession of a good fortune, must 
   be in want of a wife. However little known the 
   feelings or views of such a man may be on his 
   first entering a neighbourhood, this truth is so 
   well fixed in the minds of the surrounding families..."

prompt_guide:
  - "Use long, balanced sentences"
  - "Employ gentle irony"
  - "Focus on social dynamics"
  - "Let manners reveal character"
  - "Use free indirect discourse"
```

#### Charles Dickens
```yaml
style_id: dickens
name: Charles Dickens
era: 1830s-1870s
movement: Victorian / Social Realism

characteristics:
  sentence_length: very long, complex
  vocabulary: rich, varied
  description: elaborate, detailed
  characters: exaggerated, memorable
  humor: satirical, dark
  social_commentary: prominent

techniques:
  - Extended metaphors
  - Caricature
  - Social criticism
  - Parallel plots
  - Detailed settings
  - Repetition of phrases

themes:
  - Social injustice
  - Poverty
  - Industrialization
  - Childhood
  - Redemption

example:
  "It was the best of times, it was the worst of times, 
   it was the age of wisdom, it was the age of foolishness, 
   it was the epoch of belief, it was the epoch of incredulity..."

prompt_guide:
  - "Use elaborate descriptions"
  - "Create memorable, exaggerated characters"
  - "Include social commentary"
  - "Employ parallel storylines"
  - "Use repetition for emphasis"
```

---

### Modern Literature

#### Stephen King
```yaml
style_id: king
name: Stephen King
era: 1970s-present
movement: Horror / Popular Fiction

characteristics:
  sentence_length: varied, conversational
  vocabulary: accessible, colloquial
  dialogue: natural, regional
  pacing: deliberate then rapid
  description: sensory, specific
  asides: frequent author commentary

techniques:
  - Conversational narration
  - Pop culture references
  - Detailed backstory
  - Building dread
  - Multiple POVs
  - Metafiction elements

themes:
  - Good vs. evil
  - Childhood trauma
  - Addiction
  - Small-town secrets
  - The supernatural in everyday life

example:
  "The man in black fled across the desert, and the 
   gunslinger followed. The desert was the apotheosis 
   of all deserts, huge, standing to the sky for what 
   looked like eternity in all directions. It was white 
   and blinding and waterless..."

prompt_guide:
  - "Write conversationally, like telling a story"
  - "Include specific brand names and pop culture"
  - "Build tension slowly, then release quickly"
  - "Use regional dialect in dialogue"
  - "Don't be afraid of authorial asides"
  - "Focus on sensory details"
```

#### Toni Morrison
```yaml
style_id: morrison
name: Toni Morrison
era: 1970s-2010s
movement: Literary Fiction / African American Literature

characteristics:
  sentence_length: lyrical, varied
  vocabulary: poetic, rich
  structure: non-linear
  imagery: dense, symbolic
  voice: communal, ancestral

techniques:
  - Stream of consciousness
  - Non-linear narrative
  - Symbolic imagery
  - Multiple voices
  - Historical weaving
  - Magical realism

themes:
  - Identity
  - Memory
  - Trauma
  - Community
  - Race and history
  - Love and loss

example:
  "124 was spiteful. Full of a baby's venom. The women 
   in the house knew it and so did the children. For 
   years each put up with the spite in his own way..."

prompt_guide:
  - "Use lyrical, poetic language"
  - "Employ non-linear structure"
  - "Include symbolic imagery"
  - "Weave history and memory"
  - "Let multiple voices emerge"
  - "Embrace ambiguity"
```

#### George R.R. Martin
```yaml
style_id: martin
name: George R.R. Martin
era: 1990s-present
movement: Epic Fantasy

characteristics:
  sentence_length: moderate
  vocabulary: accessible, medieval flavor
  pov: third-person limited (multiple)
  detail: food, heraldry, genealogy
  violence: realistic, consequential

techniques:
  - Multiple POV characters
  - Cliffhanger chapter endings
  - Detailed world-building
  - Political intrigue
  - Subverting expectations
  - Killing major characters

themes:
  - Power and corruption
  - Honor vs. survival
  - War's consequences
  - Family legacy
  - Moral ambiguity

example:
  "Bran watched his father pass judgment, sitting tall 
   on his horse. Lord Eddard Stark looked as grim as 
   the king beside him, but there was no joy in his 
   eyes. He did the work because it must be done..."

prompt_guide:
  - "Use multiple POV characters"
  - "End chapters with hooks"
  - "Include detailed descriptions of food, clothing, heraldry"
  - "Create complex political situations"
  - "Don't shy from consequences"
  - "Give each character distinct voice"
```

---

### Contemporary Voices

#### Gillian Flynn
```yaml
style_id: flynn
name: Gillian Flynn
era: 2000s-present
movement: Psychological Thriller

characteristics:
  sentence_length: sharp, punchy
  vocabulary: contemporary, cutting
  tone: cynical, dark
  narration: unreliable
  twists: frequent

techniques:
  - Unreliable narrator
  - Dark humor
  - Psychological manipulation
  - Twists and reveals
  - Sharp dialogue
  - Media satire

themes:
  - Marriage and betrayal
  - Female rage
  - Media manipulation
  - Identity performance
  - Darkness in suburbia

prompt_guide:
  - "Use sharp, cutting prose"
  - "Create unreliable narrators"
  - "Include dark humor"
  - "Subvert expectations"
  - "Make characters morally complex"
  - "Satirize media and culture"
```

#### Neil Gaiman
```yaml
style_id: gaiman
name: Neil Gaiman
era: 1990s-present
movement: Fantasy / Magical Realism

characteristics:
  sentence_length: varied, lyrical
  vocabulary: precise, whimsical
  tone: wistful, dark fairy tale
  imagery: dreamlike

techniques:
  - Mythological weaving
  - Fairy tale logic
  - Urban fantasy
  - Personification
  - Gentle horror
  - Metafiction

themes:
  - Stories and storytelling
  - Dreams and reality
  - Old gods in new world
  - Childhood and growing up
  - Death and endings

example:
  "The door was three inches high, made of dark wood, 
   and set into the skirting board at the side of the 
   fireplace. It was, quite clearly, a fairy door..."

prompt_guide:
  - "Blend the mundane with the magical"
  - "Use fairy tale logic"
  - "Personify abstract concepts"
  - "Create wistful, melancholic tone"
  - "Weave in mythology"
  - "Don't explain the magic"
```

---

## Style Analysis Engine

### Analyze Text for Style

```typescript
POST /api/v1/styles/analyze

Request:
{
  "text": string,
  "depth": "basic" | "detailed" | "comprehensive"
}

Response:
{
  "detectedStyles": [
    {
      "author": "Hemingway",
      "confidence": 0.78,
      "matchingElements": [
        "Short sentences",
        "Concrete vocabulary",
        "Sparse description"
      ]
    }
  ],
  "metrics": {
    "averageSentenceLength": 12.4,
    "vocabularyComplexity": 0.45,
    "adjectiveRatio": 0.08,
    "adverbRatio": 0.02,
    "dialoguePercentage": 0.35,
    "passiveVoicePercentage": 0.12
  },
  "characteristics": {
    "tone": "direct",
    "pacing": "moderate",
    "complexity": "accessible"
  },
  "recommendations": [
    "Consider varying sentence length",
    "Add more sensory details"
  ]
}
```

### Style Comparison

```typescript
POST /api/v1/styles/compare

Request:
{
  "text1": string,
  "text2": string,
  "authors": ["hemingway", "austen"]
}

Response:
{
  "similarity": {
    "overall": 0.34,
    "byElement": {
      "sentenceLength": 0.21,
      "vocabulary": 0.45,
      "tone": 0.28,
      "structure": 0.41
    }
  },
  "differences": [
    "Text 1 uses shorter sentences (avg 12 vs 24 words)",
    "Text 2 employs more complex sentence structures",
    "Text 1 has more dialogue"
  ],
  "authorMatch": {
    "text1": "hemingway (0.82)",
    "text2": "austen (0.76)"
  }
}
```

---

## Style Application

### Apply Author Style

```typescript
POST /api/v1/styles/apply

Request:
{
  "text": string,
  "targetStyle": "hemingway",
  "intensity": 0.7, // 0.0 - 1.0
  "preservePlot": true,
  "preserveDialogue": false
}

Response:
{
  "original": "...",
  "transformed": "...",
  "changes": [
    {
      "type": "sentence_simplification",
      "count": 23
    },
    {
      "type": "adjective_reduction",
      "count": 15
    },
    {
      "type": "dialogue_streamlining",
      "count": 8
    }
  ],
  "styleScore": 0.84
}
```

### Example Transformations

**Original (Generic):**
```
The magnificent castle stood majestically atop the 
towering mountain, its ancient stones whispering 
secrets of centuries past. The brave knight approached 
cautiously, his heart pounding nervously in his chest 
as he contemplated the dangerous quest that lay before him.
```

**Hemingway Style:**
```
The castle sat on the mountain. The stones were old. 
The knight walked up the path. His heart beat fast. 
He had a job to do.
```

**Austen Style:**
```
It is a truth not often acknowledged that castles, 
however magnificent their situation, must inevitably 
fall to ruin; yet this particular edifice, perched 
with such determination upon its mountainous perch, 
seemed to have resolved upon defying both time and 
nature's gentle corrections.
```

**King Style:**
```
The castle was old, older than anything had a right 
to be, the kind of old that seeped into your bones 
just looking at it. Like the Stones in Maine, only 
these stones had seen things. The knight - name was 
Gareth, though that didn't matter much now - felt 
his heart doing a nervous tap dance against his ribs. 
He'd faced trolls in the Black Wood. He'd killed a 
dragon outside of Derry. But this? This was different.
```

---

## Style Blending

### Mix Multiple Authors

```typescript
POST /api/v1/styles/blend

Request:
{
  "text": string,
  "styles": [
    { "author": "hemingway", "weight": 0.6 },
    { "author": "king", "weight": 0.4 }
  ]
}

Response:
{
  "transformed": "...",
  "blendProfile": {
    "sentenceLength": "short-medium",
    "vocabulary": "simple with colloquialisms",
    "tone": "direct with conversational asides",
    "description": "minimal but sensory"
  }
}
```

### Create Custom Style

```typescript
POST /api/v1/styles/custom

Request:
{
  "name": "Noir Detective",
  "baseStyles": ["hammett", "chandler"],
  "modifications": {
    "sentenceLength": "short",
    "vocabulary": "slang-heavy",
    "tone": "cynical",
    "metaphors": "elaborate"
  },
  "sampleText": "..." // Optional training text
}

Response:
{
  "styleId": "custom-noir-detective-abc123",
  "profile": { ... },
  "ready": true
}
```

---

## Readability & Style Metrics

### Readability Scores

```typescript
GET /api/v1/styles/:id/metrics

Response:
{
  "fleschReadingEase": 72.3, // Higher = easier
  "fleschKincaidGrade": 7.2, // US grade level
  "gunningFog": 9.1,
  "smogIndex": 8.5,
  "automatedReadability": 6.8,
  "colemanLiau": 8.2,
  
  "styleMetrics": {
    "averageSentenceLength": 14.2,
    "averageWordLength": 4.3,
    "lexicalDiversity": 0.67,
    "passiveVoicePercentage": 8.2,
    "adverbDensity": 1.4,
    "adjectiveDensity": 3.2,
    "conjunctionsPerSentence": 1.1
  },
  
  "comparison": {
    "author": "hemingway",
    "matchScore": 0.84,
    "deviations": [
      "Sentences 12% longer than typical",
      "Adverb usage 3% higher"
    ]
  }
}
```

---

## Voice Consistency Checker

```typescript
POST /api/v1/styles/:id/consistency

Checks if a manuscript maintains consistent style:

Response:
{
  "overallConsistency": 0.87,
  "byChapter": [
    { "chapter": 1, "consistency": 0.92, "drift": "none" },
    { "chapter": 2, "consistency": 0.88, "drift": "slight" },
    { "chapter": 3, "consistency": 0.71, "drift": "moderate" }
  ],
  "issues": [
    {
      "chapter": 3,
      "section": "pages 45-52",
      "issue": "Sentence length increased 40%",
      "suggestion": "Review for Austen-like complexity creeping in"
    }
  ],
  "strengths": [
    "Dialogue consistently matches target style",
    "Description maintains appropriate density"
  ]
}
```

---

## Style Templates

### Quick-Start Style Presets

```typescript
interface StylePreset {
  id: string;
  name: string;
  description: string;
  baseAuthor: string;
  modifications: StyleModification[];
  bestFor: string[];
}

const PRESETS: StylePreset[] = [
  {
    id: "pulp-action",
    name: "Pulp Action",
    baseAuthor: "hammett",
    modifications: {
      pacing: "faster",
      sentences: "shorter",
      violence: "more graphic"
    },
    bestFor: ["thrillers", "action scenes", "noir"]
  },
  {
    id: "literary-introspective",
    name: "Literary Introspective",
    baseAuthor: "woolf",
    modifications: {
      interiority: "higher",
      timeShifts: "frequent",
      imagery: "denser"
    },
    bestFor: ["character studies", "literary fiction"]
  },
  {
    id: "ya-contemporary",
    name: "YA Contemporary",
    baseAuthor: "green",
    modifications: {
      voice: "first-person",
      humor: "witty",
      emotion: "immediate"
    },
    bestFor: ["young adult", "coming-of-age"]
  },
  {
    id: "epic-fantasy",
    name: "Epic Fantasy",
    baseAuthor: "martin",
    modifications: {
      description: "detailed",
      pov: "multiple",
      politics: "complex"
    },
    bestFor: ["fantasy", "epic narratives"]
  }
];
```

---

## Integration with Story Engine

### Style-Aware Generation

```typescript
POST /api/v1/stories/generate

Request:
{
  "genre": "mystery",
  "plot": {...},
  "characters": [...],
  "style": {
    "primary": "christie",
    "secondary": "doyle",
    "blendRatio": 0.7
  }
}

The engine generates prose that:
- Matches target author's sentence patterns
- Uses appropriate vocabulary
- Maintains tonal consistency
- Applies characteristic techniques
```

### Style-Guided Revision

```typescript
POST /api/v1/stories/:id/revise-style

Request:
{
  "targetStyle": "king",
  "sections": ["chapter-3", "chapter-7"],
  "preservePlot": true
}

Revises specified sections to match style while 
keeping plot points intact.
```

---

## API Reference

### Endpoints

```
GET    /api/v1/styles              - List all available styles
GET    /api/v1/styles/:id          - Get style details
POST   /api/v1/styles/analyze      - Analyze text for style
POST   /api/v1/styles/compare      - Compare two texts
POST   /api/v1/styles/apply        - Apply style to text
POST   /api/v1/styles/blend        - Blend multiple styles
POST   /api/v1/styles/custom       - Create custom style
GET    /api/v1/styles/:id/metrics  - Get readability metrics
POST   /api/v1/styles/:id/consistency - Check consistency
GET    /api/v1/styles/authors      - List all authors
GET    /api/v1/styles/authors/:name/samples - Get writing samples
```

### Style Object

```typescript
interface Style {
  id: string;
  name: string;
  author: string;
  era: string;
  movement: string;
  
  characteristics: {
    sentenceLength: 'short' | 'medium' | 'long' | 'varied';
    vocabulary: string;
    tone: string;
    description: string;
  };
  
  techniques: string[];
  themes: string[];
  
  examples: {
    text: string;
    source: string;
  }[];
  
  promptGuide: string[];
  
  metrics: {
    avgSentenceLength: number;
    avgWordLength: number;
    adjectiveRatio: number;
    adverbRatio: number;
  };
}
```
