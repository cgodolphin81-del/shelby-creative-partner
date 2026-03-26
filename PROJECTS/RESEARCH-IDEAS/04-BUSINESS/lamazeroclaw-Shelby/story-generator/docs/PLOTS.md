# Plot Generator System

## Overview
The Plot Generator creates structured story outlines using proven narrative frameworks including 3-Act Structure, Hero's Journey, Save the Cat, and more.

---

## Plot Frameworks

### 1. Three-Act Structure

The classic dramatic structure used in most Western storytelling.

```
ACT I - SETUP (25%)
├─ Opening Image
├─ Theme Stated
├─ Setup (Normal World)
├─ Inciting Incident
└─ Plot Point 1 (Into Act II)

ACT II - CONFRONTATION (50%)
├─ B Story Begins
├─ Fun and Games
├─ Midpoint
├─ Bad Guys Close In
├─ All Is Lost
└─ Plot Point 2 (Into Act III)

ACT III - RESOLUTION (25%)
├─ Finale
├─ Final Image
└─ Resolution
```

#### Detailed Beat Sheet

```typescript
interface ThreeActStructure {
  act1: {
    openingImage: {
      page: '1-5';
      description: 'Visual that sets tone, mood, and type';
      purpose: 'Show the protagonist's ordinary world';
    };
    themeStated: {
      page: '5';
      description: 'Someone mentions the theme';
      purpose: 'Plant the thematic question';
    };
    setup: {
      pages: '1-10';
      description: 'Introduce protagonist and their world';
      elements: ['Status quo', 'Character flaws', 'What\'s missing'];
    };
    incitingIncident: {
      page: '12';
      description: 'Event that disrupts normal world';
      purpose: 'Present the story problem';
    };
    debate: {
      pages: '12-25';
      description: 'Protagonist hesitates to act';
      question: 'Should I go on this journey?';
    };
    plotPoint1: {
      page: '25';
      description: 'Decision that launches into Act II';
      purpose: 'Point of no return';
    };
  };
  
  act2: {
    bStory: {
      pages: '25-30';
      description: 'Usually the love story or theme carrier';
      purpose: 'Provides emotional counterpoint';
    };
    funAndGames: {
      pages: '30-55';
      description: 'Promise of the premise';
      purpose: 'Deliver on genre expectations';
    };
    midpoint: {
      page: '55';
      description: 'Major event raises stakes';
      types: ['False victory', 'False defeat'];
      purpose: 'Shift from reactive to proactive';
    };
    badGuysCloseIn: {
      pages: '55-75';
      description: 'Pressure intensifies';
      elements: ['Internal team conflict', 'External threats mount'];
    };
    allIsLost: {
      page: '75';
      description: 'Worst moment yet';
      purpose: 'Hero has lost everything';
    };
    whiffOfDeath: {
      page: '75';
      description: 'Something/someone dies';
      purpose: 'Symbolic or literal death';
    };
    plotPoint2: {
      page: '85';
      description: 'Discovery that leads to Act III';
      purpose: 'Final piece of the puzzle';
    };
  };
  
  act3: {
    finale: {
      pages: '85-110';
      description: 'Final confrontation';
      elements: [
        'Gather the team',
        'Execute the plan',
        'High tower surprise',
        'Dig deep down',
        'Execution of new plan'
      ];
    };
    finalImage: {
      page: '110';
      description: 'Opposite of opening image';
      purpose: 'Show how much protagonist has changed';
    };
  };
}
```

---

### 2. Hero's Journey (Monomyth)

Joseph Campbell's 17-stage mythic structure, simplified to 12 stages.

```
ORDINARY WORLD
     ↓
CALL TO ADVENTURE
     ↓
REFUSAL OF THE CALL
     ↓
MEETING THE MENTOR
     ↓
CROSSING THE THRESHOLD
     ↓
TESTS, ALLIES, ENEMIES
     ↓
APPROACH TO INMOST CAVE
     ↓
THE ORDEAL
     ↓
REWARD (SEIZING THE SWORD)
     ↓
THE ROAD BACK
     ↓
RESURRECTION
     ↓
RETURN WITH ELIXIR
```

#### Detailed Stage Breakdown

```typescript
interface HeroJourney {
  // Departure
  ordinaryWorld: {
    description: 'Hero's normal life before adventure';
    purpose: 'Establish what's at stake';
    questions: [
      'What does the hero want?',
      'What do they need?',
      'What's missing from their life?'
    ];
  };
  
  callToAdventure: {
    description: 'Challenge or quest is presented';
    types: [
      'A threat emerges',
      'A discovery is made',
      'A person needs help',
      'A opportunity arises'
    ];
  };
  
  refusalOfCall: {
    description: 'Hero hesitates due to fear or duty';
    purpose: 'Shows the danger and stakes';
    duration: 'Brief - hero must eventually accept';
  };
  
  meetingMentor: {
    description: 'Guide provides training or gift';
    mentorTypes: [
      'Wise old man/woman',
      'Former hero',
      'Unlikely teacher',
      'Inner wisdom'
    ];
    gifts: ['Training', 'Weapon', 'Advice', 'Magic item'];
  };
  
  crossingThreshold: {
    description: 'Hero commits to the journey';
    purpose: 'No turning back';
    thresholdGuardians: 'May face final test before entering';
  };
  
  // Initiation
  testsAlliesEnemies: {
    description: 'Hero learns the rules of the special world';
    elements: [
      'First challenges',
      'Meets allies',
      'Encounters enemies',
      'Learns new skills'
    ];
  };
  
  approachToInmostCave: {
    description: 'Approaching the dangerous place';
    purpose: 'Preparation for major ordeal';
    tension: 'Building anticipation';
  };
  
  ordeal: {
    description: 'Central life-or-death crisis';
    purpose: 'Hero faces greatest fear';
    outcome: 'Hero "dies" and is reborn';
  };
  
  reward: {
    description: 'Hero takes possession of treasure';
    types: [
      'Physical object',
      'Knowledge',
      'Reconciliation',
      'Personal growth'
    ];
  };
  
  // Return
  roadBack: {
    description: 'Hero must return to ordinary world';
    complications: [
      'Pursued by forces',
      'Must rescue others',
      'Race against time'
    ];
  };
  
  resurrection: {
    description: 'Final test, everything at stake';
    purpose: 'Hero proves they've truly changed';
    difference: 'More intense than the ordeal';
  };
  
  returnWithElixir: {
    description: 'Hero returns transformed';
    elixir: 'What they bring back to help others';
    closure: 'Show new normal';
  };
}
```

---

### 3. Save the Cat! (Blake Snyder)

15-beat structure popular in screenwriting.

```
1.  OPENING IMAGE        (page 1)
2.  THEME STATED         (page 5)
3.  SET-UP               (pages 1-10)
4.  CATALYST             (page 12)
5.  DEBATE               (pages 12-25)
6.  BREAK INTO TWO       (page 25)
7.  B STORY              (pages 25-30)
8.  FUN AND GAMES        (pages 30-55)
9.  MIDPOINT             (page 55)
10. BAD GUYS CLOSE IN    (pages 55-75)
11. ALL IS LOST          (page 75)
12. DARK NIGHT OF SOUL   (pages 75-85)
13. BREAK INTO THREE     (page 85)
14. FINALE               (pages 85-110)
15. FINAL IMAGE          (page 110)
```

#### The 10 Story Genres (Save the Cat)

```typescript
enum SaveTheCatGenre {
  // Goal-Oriented
  'Monster in the House', // Trapped with a monster
  'Golden Fleece',        // Quest for a goal
  'Out of the Bottle',    // Wish fulfillment
  
  // Knowledge-Oriented
  'Dude with a Problem',  // Ordinary person in crisis
  'Rites of Passage',     // Painful growth
  'Buddy Love',           // Relationship story
  
  // Event-Oriented
  'Institutionalized',    // Group dynamics
  'Superhero',            // Extraordinary person
  'Fool Triumphant',      // Underdog wins
  'Whydunit'              // Mystery with deeper meaning
}
```

---

### 4. Fichtean Curve

Rising action through a series of crises.

```
EXPOSITION (Brief)
     ↓
CRISES 1 ──┐
     ↓     │
CRISES 2 ──┤
     ↓     │  RISING
CRISES 3 ──┤  ACTION
     ↓     │
CRISES 4 ──┤
     ↓     │
CRISES 5 ──┘
     ↓
CLIMAX
     ↓
FALLING ACTION
     ↓
RESOLUTION
```

---

### 5. Seven-Point Structure

Dan Wells' structure focused on character arc.

```
1. HOOK          (Start)
   └─ Opposite of Resolution

2. PLOT TURN 1   (25%)
   └─ Inciting incident

3. PINCH POINT 1 (37%)
   └─ Apply pressure

4. MIDPOINT      (50%)
   └─ Move from reactive to proactive

5. PINCH POINT 2 (62%)
   └─ Apply more pressure

6. PLOT TURN 2   (75%)
   └─ Hero has what they need

7. RESOLUTION    (100%)
   └─ Opposite of Hook
```

---

## Plot Generator API

### Generate Plot Outline

```typescript
POST /api/v1/plots/generate

Request:
{
  "framework": "three-act" | "heros-journey" | "save-the-cat" | "fichtean" | "seven-point",
  "genre": string,
  "logline": string,
  "characters": Character[],
  "wordCount": number,
  "tone": string,
  "customBeats": BeatOverride[] // Optional
}

Response:
{
  "outline": {
    "title": string,
    "framework": string,
    "beats": Beat[],
    "estimatedWordCount": number,
    "pacing": PacingMap
  },
  "suggestions": {
    "potentialTwists": string[],
    "subplots": Subplot[],
    "themeExplorations": string[]
  }
}
```

### Beat Structure

```typescript
interface Beat {
  id: string;
  name: string;
  framework: string;
  position: number; // 0-100 (percentage through story)
  estimatedWords: number;
  description: string;
  purpose: string;
  characters: string[]; // Which characters are involved
  conflict: string;
  emotionalTone: string;
  questions: string[]; // Prompts for the writer
  examples: string[]; // Example scenes from known works
}
```

---

## Plot Generation Examples

### Example: Fantasy - Three-Act Structure

```
TITLE: The Last Dragon's Heir

ACT I - SETUP
─────────────
Opening Image (1-5):
  A young blacksmith, Kael, works in his village forge. 
  Strange marks appear on his hands when he touches metal.

Theme Stated (5):
  Elder says: "Some are born to serve, others to lead. 
  But the choice is always yours."

Setup (1-10):
  - Kael's mundane life in Ironwood Village
  - His secret: he can sense magic in metal
  - His desire: to leave the village, see the world
  - His fear: he's not special, just different

Inciting Incident (12):
  Dragon riders attack the village searching for "the marked one"
  Kael's adoptive parents are killed protecting him

Debate (12-25):
  - Kael wants to flee but feels responsible
  - Elder reveals he's not Kael's real father
  - Gives him a mysterious key and map
  - Kael must decide: run or seek answers

Plot Point 1 (25):
  Kael chooses to follow the map, leaving everything behind

ACT II - CONFRONTATION
──────────────────────
B Story (25-30):
  Meets Lyra, a rogue mage who knew his real parents. 
  She becomes his guide and eventual love interest.

Fun and Games (30-55):
  - Journey through dangerous lands
  - Kael learns to use his powers
  - Discovers he's the last heir of dragon riders
  - Collects allies: Lyra, Grim (dwarf warrior), Aria (elf scout)
  - First victory: defeats a dragon rider patrol

Midpoint (55):
  FALSE VICTORY: Kael reaches the Dragon Temple
  Discovers the truth: he must kill the last dragon 
  to prevent an ancient evil from returning
  But the dragon is sentient and doesn't want to fight

Bad Guys Close In (55-75):
  - Dragon riders track them relentlessly
  - Internal conflict: is killing the dragon right?
  - Ally captured (Grim)
  - Kael's powers grow unstable
  - Lyra reveals she was sent to ensure the dragon dies

All Is Lost (75):
  Kael confronts the dragon but can't strike
  Dragon riders capture Lyra
  Dragon offers itself willingly to save her
  Kael must choose: save Lyra or save the dragon

Dark Night (75-85):
  Kael imprisoned, believes he's failed everyone
  Discovers the truth: the dragon riders serve the ancient evil
  The dragon was guarding the prison, not trapped

Plot Point 2 (85):
  Kael realizes he must free the dragon AND defeat the riders
  He has the power to do both - he's not just an heir, he's a bridge

ACT III - RESOLUTION
────────────────────
Finale (85-110):
  1. Gather the Team: Frees allies, dragon joins them
  2. Storm the Fortress: Battle with dragon riders
  3. High Tower Surprise: Leader is Kael's real father
  4. Dig Deep Down: Kael must choose blood or what's right
  5. Execution: Defeats father, seals the ancient evil

Final Image (110):
  Kael, now leader of the new dragon riders, stands 
  with Lyra and the dragon. He's found his true home.
```

---

## Plot Twist Generator

```typescript
POST /api/v1/plots/:id/twists

Generates plot twists based on current outline:

Response:
{
  "twists": [
    {
      "type": "identity",
      "beat": "midpoint",
      "description": "The mentor is actually the villain's puppet",
      "setup": ["Mentor has mysterious absences", "Mentor knows too much"],
      "payoff": "Mentor's true allegiance revealed at midpoint"
    },
    {
      "type": "reversal",
      "beat": "all-is-lost",
      "description": "The MacGuffin was inside the hero all along",
      "setup": ["Hero has unusual powers", "Artifact never shown clearly"],
      "payoff": "Hero themselves is the key"
    },
    {
      "type": "motivation",
      "beat": "plot-point-2",
      "description": "Villain is trying to prevent worse evil",
      "setup": ["Villain's actions seem protective", "Hints of greater threat"],
      "payoff": "Villain's true motivation revealed"
    }
  ]
}
```

---

## Subplot Generator

```typescript
POST /api/v1/plots/:id/subplots

Generates subplots that complement the main plot:

Response:
{
  "subplots": [
    {
      "type": "romance",
      "characters": ["Kael", "Lyra"],
      "arc": "Enemies to lovers",
      "beats": [
        { "act": 1, "event": "Reluctant partnership" },
        { "act": 2, "event": "Moment of vulnerability" },
        { "act": 2, "event": "Betrayal revelation" },
        { "act": 3, "event": "Sacrifice proves love" }
      ]
    },
    {
      "type": "coming-of-age",
      "characters": ["Kael"],
      "arc": "Boy to leader",
      "beats": [
        { "act": 1, "event": "Refuses responsibility" },
        { "act": 2, "event": "Accepts partial responsibility" },
        { "act": 3, "event": "Embraces full leadership" }
      ]
    },
    {
      "type": "redemption",
      "characters": ["Grim"],
      "arc": "Cynic to believer",
      "beats": [
        { "act": 1, "event": "Joins for money only" },
        { "act": 2, "event": "Begins to care" },
        { "act": 3, "event": "Fights for the cause" }
      ]
    }
  ]
}
```

---

## Pacing Calculator

```typescript
POST /api/v1/plots/:id/pacing

Calculates optimal pacing based on word count and framework:

Response:
{
  "totalWords": 80000,
  "pacing": {
    "act1": {
      "percentage": 25,
      "words": 20000,
      "chapters": "1-7",
      "beats": [
        { "name": "Opening", "words": 3000, "chapter": 1 },
        { "name": "Inciting Incident", "words": 2000, "chapter": 3 },
        { "name": "Plot Point 1", "words": 3000, "chapter": 7 }
      ]
    },
    "act2": {
      "percentage": 50,
      "words": 40000,
      "chapters": "8-20",
      "beats": [...]
    },
    "act3": {
      "percentage": 25,
      "words": 20000,
      "chapters": "21-28",
      "beats": [...]
    }
  },
  "recommendations": [
    "Consider shortening Act 1 - currently 28%",
    "Midpoint should land around chapter 14",
    "Add breathing room between beats 8-10"
  ]
}
```

---

## Plot Consistency Checker

```typescript
POST /api/v1/plots/:id/validate

Checks for:
- Pacing issues
- Missing beats
- Logical gaps
- Character motivation consistency
- Stakes escalation
- Theme integration

Response:
{
  "score": 0.87,
  "issues": [
    {
      "severity": "warning",
      "type": "pacing",
      "beat": "fun-and-games",
      "message": "This section is 40% of Act II - consider trimming",
      "suggestion": "Remove one quest sequence"
    },
    {
      "severity": "error",
      "type": "logic",
      "beat": "finale",
      "message": "Hero gains ability without explanation",
      "suggestion": "Plant setup in Act I or II"
    }
  ],
  "strengths": [
    "Strong midpoint reversal",
    "Clear character arc",
    "Well-escalating stakes"
  ]
}
```

---

## Integration Points

### With Character System
- Character goals drive plot beats
- Character flaws create obstacles
- Character arcs align with plot structure

### With Genre System
- Genre conventions inform beat expectations
- Tropes integrated at appropriate beats
- Reader expectations managed

### With Style Engine
- Tone consistency across beats
- Voice appropriate to story moments
- Pacing reflected in prose style
