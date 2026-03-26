# Character Creator System

## Overview
The Character Creator is a comprehensive system for building deep, memorable characters with appearance, personality, backstory, and character arcs.

---

## Character Data Model

```typescript
interface Character {
  // Basic Info
  id: string;
  name: string;
  role: 'protagonist' | 'antagonist' | 'supporting' | 'mentor' | 'love_interest';
  
  // Demographics
  age: number;
  gender: string;
  ethnicity?: string;
  occupation?: string;
  socialClass?: string;
  
  // Physical Appearance
  appearance: {
    height: string;
    build: string;
    hairColor: string;
    hairStyle: string;
    eyeColor: string;
    skinTone: string;
    distinguishingFeatures: string[];
    clothing: string;
    accessories: string[];
  };
  
  // Personality
  personality: {
    mbti?: string;
    enneagram?: number;
    alignment: string; // Lawful Good, Chaotic Neutral, etc.
    traits: string[]; // Positive and negative
    strengths: string[];
    weaknesses: string[];
    fears: string[];
    desires: string[];
    values: string[];
    quirks: string[];
    speechPatterns: string;
  };
  
  // Backstory
  backstory: {
    birthplace: string;
    family: FamilyMember[];
    childhood: string;
    education: string;
    formativeEvents: Event[];
    secrets: string[];
    regrets: string[];
    achievements: string[];
  };
  
  // Character Arc
  arc: {
    type: 'positive' | 'negative' | 'flat' | 'corruption' | 'redemption';
    startingState: string;
    endingState: string;
    keyMoments: ArcMoment[];
    internalConflict: string;
    externalGoal: string;
    lieTheyBelieve: string;
    truthTheyLearn: string;
  };
  
  // Relationships
  relationships: {
    [characterId: string]: {
      type: string; // friend, enemy, lover, family, rival
      history: string;
      dynamic: string;
      tension: number; // 1-10
    };
  };
  
  // Story-Specific
  storyRole: {
    function: string; // What purpose do they serve?
    motivation: string; // Why are they in this story?
    conflict: string; // What opposes them?
    stake: string; // What do they stand to lose?
  };
  
  metadata: {
    createdAt: Date;
    updatedAt: Date;
    version: number;
  };
}
```

---

## Character Builder Interface

### Step 1: Core Identity
```
┌─────────────────────────────────────────────────────────┐
│  CHARACTER BUILDER - Step 1 of 5                        │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  Name: [___________________________]                    │
│                                                         │
│  Role: ○ Protagonist  ○ Antagonist  ○ Supporting       │
│        ○ Mentor       ○ Love Interest ○ Other          │
│                                                         │
│  Age: [____]  Gender: [______________]                  │
│                                                         │
│  Occupation: [_______________________]                  │
│                                                         │
│  One-sentence summary:                                  │
│  [___________________________________________________]  │
│                                                         │
│  [Back] [Next: Appearance →]                            │
└─────────────────────────────────────────────────────────┘
```

### Step 2: Appearance
```
┌─────────────────────────────────────────────────────────┐
│  CHARACTER BUILDER - Step 2 of 5                        │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  Physical Traits:                                       │
│  ─────────────────                                      │
│  Height: [5'10"]  Build: [Athletic ▼]                   │
│                                                         │
│  Hair: [Dark Brown] [Wavy] [Shoulder-length]            │
│  Eyes: [Green]                                          │
│  Skin: [Fair with freckles]                             │
│                                                         │
│  Distinguishing Features:                               │
│  [+] Add feature                                        │
│  • Scar above left eyebrow                              │
│  • Always wears silver ring                             │
│                                                         │
│  Typical Clothing:                                      │
│  [Worn leather jacket, dark jeans, combat boots]        │
│                                                         │
│  [← Back] [Next: Personality →]                         │
└─────────────────────────────────────────────────────────┘
```

### Step 3: Personality
```
┌─────────────────────────────────────────────────────────┐
│  CHARACTER BUILDER - Step 3 of 5                        │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  Personality Type (optional):                           │
│  MBTI: [INTJ ▼]  Enneagram: [5 - The Investigator ▼]   │
│                                                         │
│  Moral Alignment: [Neutral Good ▼]                      │
│                                                         │
│  Core Traits (add 5-7):                                 │
│  [+] Add trait                                          │
│  • Intelligent                                          │
│  • Loyal                                                │
│  • Sarcastic                                            │
│  • Secretive                                            │
│  • Determined                                           │
│                                                         │
│  Greatest Fear: [Being abandoned]                       │
│  Greatest Desire: [Finding belonging]                   │
│                                                         │
│  Fatal Flaw: [Trusts too easily]                        │
│                                                         │
│  [← Back] [Next: Backstory →]                           │
└─────────────────────────────────────────────────────────┘
```

### Step 4: Backstory
```
┌─────────────────────────────────────────────────────────┐
│  CHARACTER BUILDER - Step 4 of 5                        │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  Birthplace: [Boston, Massachusetts]                    │
│                                                         │
│  Family:                                                │
│  [+] Add family member                                  │
│  • Father: Michael (deceased) - strained relationship   │
│  • Mother: Sarah (alive) - protective                   │
│  • Sister: Emma (alive) - closest confidant             │
│                                                         │
│  Formative Events:                                      │
│  [+] Add event                                          │
│  • Age 8: Father disappeared                            │
│  • Age 15: First kill (self-defense)                    │
│  • Age 22: Joined the organization                      │
│                                                         │
│  Biggest Secret: [Witnessed father's murder]            │
│                                                         │
│  Biggest Regret: [Never said goodbye to father]         │
│                                                         │
│  [← Back] [Next: Character Arc →]                       │
└─────────────────────────────────────────────────────────┘
```

### Step 5: Character Arc
```
┌─────────────────────────────────────────────────────────┐
│  CHARACTER BUILDER - Step 5 of 5                        │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  Arc Type: ○ Positive  ○ Negative  ○ Flat  ○ Redemption│
│                                                         │
│  Starting State:                                        │
│  [Cynical loner who trusts no one]                      │
│                                                         │
│  Ending State:                                          │
│  [Learns to trust and finds a family]                   │
│                                                         │
│  The Lie They Believe:                                  │
│  ["I can only rely on myself"]                          │
│                                                         │
│  The Truth They Learn:                                  │
│  ["Connection makes us stronger"]                       │
│                                                         │
│  External Goal: [Stop the villain's plan]               │
│  Internal Need: [Learn to trust others]                 │
│                                                         │
│  Key Arc Moments:                                       │
│  1. [Meets the team, refuses to join]                   │
│  2. [Forced to work together on mission]                │
│  3. [Betrayed by someone they trusted]                  │
│  4. [Team saves their life]                             │
│  5. [Chooses team over solo mission]                    │
│                                                         │
│  [← Back] [Generate Character]                          │
└─────────────────────────────────────────────────────────┘
```

---

## AI-Powered Character Generation

### Generate Character from Prompt
```typescript
POST /api/v1/characters/generate

Request:
{
  "prompt": "A weary detective in 1940s Los Angeles",
  "genre": "noir",
  "role": "protagonist",
  "complexity": "detailed" // basic, standard, detailed
}

Response:
{
  "character": { /* Full character object */ },
  "alternatives": [/* 2-3 variations */],
  "suggestions": {
    "potentialArcs": [...],
    "possibleRelationships": [...],
    "conflictIdeas": [...]
  }
}
```

### Character Consistency Check
```typescript
POST /api/v1/characters/:id/validate

Checks for:
- Personality consistency
- Backstory contradictions
- Arc progression logic
- Relationship coherence

Response:
{
  "valid": boolean,
  "issues": [
    {
      "type": "contradiction",
      "field": "personality.traits",
      "message": "Trait 'cowardly' conflicts with backstory event 'faced armed robber'",
      "suggestion": "Consider changing trait to 'cautious' or adding context"
    }
  ],
  "score": 0.85
}
```

---

## Character Archetypes Library

### The Hero
```json
{
  "name": "The Hero",
  "description": "The protagonist who embarks on a quest",
  "variations": [
    "The Chosen One",
    "The Reluctant Hero",
    "The Tragic Hero",
    "The Anti-Hero",
    "The Everyman Hero"
  ],
  "commonTraits": ["Brave", "Determined", "Moral"],
  "commonFlaws": ["Reckless", "Stubborn", "Naive"],
  "typicalArc": "Positive - learns humility or gains wisdom"
}
```

### The Mentor
```json
{
  "name": "The Mentor",
  "description": "Wise guide who helps the hero",
  "variations": [
    "The Wise Old Man/Woman",
    "The Fallen Mentor",
    "The Tough Love Mentor",
    "The Reluctant Mentor"
  ],
  "commonTraits": ["Wise", "Patient", "Experienced"],
  "commonFlaws": ["Secretive", "Haunted by past", "Overprotective"],
  "typicalArc": "Flat or Redemption"
}
```

### The Shadow (Antagonist)
```json
{
  "name": "The Shadow",
  "description": "Represents what the hero could become",
  "variations": [
    "The Dark Mirror",
    "The Fallen Hero",
    "The Well-Intentioned Extremist",
    "The Pure Evil"
  ],
  "commonTraits": ["Powerful", "Convincing", "Complex"],
  "commonFlaws": ["Obsessed", "Blinded by ideology", "Arrogant"],
  "typicalArc": "Negative or Corruption"
}
```

### The Ally
```json
{
  "name": "The Ally",
  "description": "Supports the hero on their journey",
  "variations": [
    "The Loyal Friend",
    "The Comic Relief",
    "The Skilled Specialist",
    "The Love Interest"
  ],
  "commonTraits": ["Loyal", "Supportive", "Reliable"],
  "commonFlaws": ["Insecure", "Overshadowed", "Self-sacrificing"],
  "typicalArc": "Positive - gains confidence"
}
```

---

## Character Relationship Map

```
                    ┌─────────────┐
                    │  PROTAGONIST│
                    └──────┬──────┘
                           │
        ┌──────────────────┼──────────────────┐
        │                  │                  │
        ▼                  ▼                  ▼
  ┌───────────┐     ┌───────────┐     ┌───────────┐
  │  MENTOR   │     │ LOVE INT. │     │  SIDEKICK │
  └─────┬─────┘     └─────┬─────┘     └─────┬─────┘
        │                 │                 │
        │    ┌────────────┴────────────┐    │
        │    │                         │    │
        ▼    ▼                         ▼    ▼
  ┌───────────────────┐         ┌───────────────────┐
  │    ANTAGONIST     │◄────────│   ANTAGONIST'S    │
  │                   │         │     ALLY          │
  └───────────────────┘         └───────────────────┘
```

### Relationship Types
- **Allies**: Friend, Mentor, Love Interest, Family, Teammate
- **Antagonists**: Rival, Enemy, Opposer, Competitor
- **Neutral**: Acquaintance, Stranger, Contact
- **Complex**: Frenemy, Former Love, Estranged Family

### Relationship Dynamics
```typescript
interface Relationship {
  characterA: string;
  characterB: string;
  type: string;
  history: string;
  currentStatus: 'positive' | 'negative' | 'neutral' | 'complex';
  tension: number; // 1-10
  trust: number; // 1-10
  intimacy: number; // 1-10 (romantic/platonic)
  powerDynamic: 'equal' | 'A_over_B' | 'B_over_A';
  evolution: Array<{
    storyBeat: string;
    change: string;
  }>;
}
```

---

## Character Arc Types

### 1. Positive Change Arc
```
Starting Point: Flawed but functional
    ↓
Inciting Incident: Challenge to worldview
    ↓
Resistance: Clings to old ways
    ↓
Growth: Learns new truth
    ↓
Climax: Acts from new truth
    ↓
Ending: Transformed for better
```

### 2. Negative Change Arc (Tragedy)
```
Starting Point: Flawed but functional
    ↓
Temptation: Offer of power/solution
    ↓
Compromise: Makes moral compromise
    ↓
Descent: More compromises
    ↓
Climax: Final moral failure
    ↓
Ending: Destroyed or damned
```

### 3. Flat Arc (Steadfast)
```
Starting Point: Already has the truth
    ↓
Challenge: World tests their truth
    ↓
Trials: Tempted to abandon truth
    ↓
Stand: Holds firm
    ↓
Climax: Truth prevails through them
    ↓
Ending: Changed world, unchanged hero
```

### 4. Redemption Arc
```
Starting Point: Fallen/damned
    ↓
Catalyst: Reason to change
    ↓
Struggle: Old habits vs. new path
    ↓
Sacrifice: Gives up something
    ↓
Climax: Proves change through action
    ↓
Ending: Redeemed (or dies redeemed)
```

---

## Character Voice Generator

```typescript
POST /api/v1/characters/:id/voice-sample

Generates sample dialogue in character's voice:

Response:
{
  "samples": [
    {
      "situation": "Greeting a friend",
      "dialogue": "'Hey. You're late. I was about to leave without you.'"
    },
    {
      "situation": "Under pressure",
      "dialogue": "'I've handled worse. Just... give me a second to think.'"
    },
    {
      "situation": "Emotional moment",
      "dialogue": "'I don't... I can't talk about this. Not now.'"
    }
  ],
  "voiceProfile": {
    "formality": "informal",
    "sentenceLength": "short-medium",
    "vocabulary": "practical",
    "humor": "dry sarcasm",
    "fillerWords": ["look", "just"],
    "catchphrases": []
  }
}
```

---

## Integration with Story Engine

### Character-Driven Plot Generation
```typescript
POST /api/v1/stories/generate-from-character

Request:
{
  "characterId": "uuid",
  "genre": "fantasy",
  "conflictType": "internal-external"
}

The system generates plot based on:
- Character's goal
- Character's flaw
- Character's fear
- Character's relationships
```

### Character Consistency During Generation
```typescript
// During story generation, the system:
1. References character profile for each scene
2. Ensures dialogue matches voice profile
3. Checks actions align with personality
4. Tracks character arc progression
5. Validates relationship dynamics
```

---

## Character Export Options

```typescript
GET /api/v1/characters/:id/export?format=sheet

Formats:
- character-sheet (PDF)
- wiki-entry (Markdown)
- json (Full data)
- csv (For spreadsheet)
- image (Character portrait via AI)
```

### Character Sheet Template
```
╔═══════════════════════════════════════════════════════════╗
║                    CHARACTER PROFILE                       ║
╠═══════════════════════════════════════════════════════════╣
║  NAME: Elena Vasquez                                      ║
║  ROLE: Protagonist                                        ║
║  AGE: 34                                                  ║
╠═══════════════════════════════════════════════════════════╣
║  APPEARANCE                                               ║
║  • 5'7", Athletic build                                   ║
║  • Dark curly hair, hazel eyes                            ║
║  • Scar on left cheek                                     ║
╠═══════════════════════════════════════════════════════════╣
║  PERSONALITY                                              ║
║  • Traits: Determined, Loyal, Impulsive                   ║
║  • Fear: Failure                                          ║
║  • Desire: Redemption                                     ║
╠═══════════════════════════════════════════════════════════╣
║  BACKSTORY (Summary)                                      ║
║  Former detective who lost her partner. Now works as      ║
║  private investigator seeking the truth behind his        ║
║  death.                                                   ║
╠═══════════════════════════════════════════════════════════╣
║  CHARACTER ARC                                            ║
║  Type: Redemption                                         ║
║  Lie: "I work better alone"                               ║
║  Truth: "Trust makes us stronger"                         ║
╚═══════════════════════════════════════════════════════════╝
```
