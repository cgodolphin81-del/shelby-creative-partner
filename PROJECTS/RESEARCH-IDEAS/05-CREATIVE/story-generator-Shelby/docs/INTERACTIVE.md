# Interactive Stories - Choose Your Own Adventure

## Overview
The Interactive Stories module enables creation of branching narratives where readers make choices that affect the story's direction and outcome.

---

## Branching Narrative Structure

### Node-Based Story Graph

```
                    ┌─────────────────┐
                    │   START NODE    │
                    │   (Chapter 1)   │
                    └────────┬────────┘
                             │
              ┌──────────────┴──────────────┐
              │                             │
              ▼                             ▼
     ┌─────────────────┐           ┌─────────────────┐
     │   NODE A        │           │   NODE B        │
     │   (Choice 1)    │           │   (Choice 2)    │
     └────────┬────────┘           └────────┬────────┘
              │                             │
    ┌─────────┼─────────┐         ┌─────────┴─────────┐
    │         │         │         │                   │
    ▼         ▼         ▼         ▼                   ▼
┌───────┐ ┌───────┐ ┌───────┐ ┌───────┐         ┌───────────┐
│Node A1│ │Node A2│ │Node A3│ │Node B1│         │  Node B2  │
└───┬───┘ └───┬───┘ └───┬───┘ └───┬───┘         └─────┬─────┘
    │         │         │         │                   │
    └─────────┴────┬────┴─────────┘                   │
                   │                                  │
                   ▼                                  ▼
          ┌─────────────────┐                ┌─────────────────┐
          │   ENDING 1      │                │   ENDING 2      │
          │   (Good)        │                │   (Bad)         │
          └─────────────────┘                └─────────────────┘
```

### Story Node Data Model

```typescript
interface StoryNode {
  id: string;
  title: string;
  content: string;
  type: 'start' | 'branch' | 'choice' | 'ending' | 'checkpoint';
  
  // Content
  text: string;
  images?: StoryImage[];
  audio?: AudioClip;
  video?: VideoClip;
  
  // Choices (for choice nodes)
  choices?: Choice[];
  
  // Branching logic
  conditions?: Condition[];
  variables?: StoryVariable[];
  
  // Connections
  nextNodes: string[]; // IDs of connected nodes
  
  // Metadata
  wordCount: number;
  estimatedReadTime: number; // minutes
  difficulty?: number; // 1-10, for game-like stories
  
  // Flags
  isEnding: boolean;
  endingType?: 'good' | 'bad' | 'neutral' | 'secret';
  isLocked: boolean;
  unlockRequirements?: string[];
  
  // Analytics
  visitCount: number;
  averageChoiceDistribution?: {
    [choiceId: string]: number;
  };
}

interface Choice {
  id: string;
  text: string;
  targetNodeId: string;
  
  // Optional conditions
  requirements?: {
    variable: string;
    operator: 'equals' | 'greater' | 'less' | 'has';
    value: any;
  }[];
  
  // Consequences
  effects?: {
    variable: string;
    operation: 'set' | 'add' | 'remove' | 'toggle';
    value: any;
  }[];
  
  // Display
  style?: 'default' | 'highlighted' | 'disabled' | 'secret';
  cost?: {
    type: 'health' | 'mana' | 'gold' | 'item';
    amount: number;
  };
}
```

---

## Interactive Story Types

### 1. Choose Your Own Adventure (Classic)

```
Simple branching with clear choices.
Each choice leads to different content.
Multiple endings based on choices.

Example Structure:
- 50-100 nodes
- 2-4 choices per node
- 5-15 different endings
- Play time: 30-90 minutes
```

### 2. Visual Novel

```
Heavy focus on character interaction.
Dialogue trees with relationship tracking.
Romance options and multiple routes.

Example Structure:
- 200-500 nodes
- Character affinity variables
- Romance routes (3-5 love interests)
- Multiple endings per route
- Play time: 5-20 hours
```

### 3. Interactive Fiction (Text Adventure)

```
Parser-based or choice-based.
Inventory and puzzle mechanics.
Exploration-focused.

Example Structure:
- State machine for locations
- Inventory system
- Puzzle solutions
- Win/lose conditions
- Play time: 2-10 hours
```

### 4. Narrative Game

```
Choices with mechanical consequences.
Stats and skill checks.
Combat or challenge systems.

Example Structure:
- Character stats (STR, INT, CHA, etc.)
- Skill check DCs
- Health/combat system
- Resource management
- Play time: 5-30 hours
```

### 5. Branching Video Script

```
For interactive video content.
Timestamp-based branching.
Seamless transitions.

Example Structure:
- Video segments (30s - 5min each)
- Choice points at segment ends
- 3-5 major branches
- Play time: 15-45 minutes
```

---

## Choice Mechanics

### Basic Choice

```typescript
{
  id: "choice_001",
  text: "Open the mysterious door",
  targetNodeId: "node_room_inside"
}
```

### Conditional Choice

```typescript
{
  id: "choice_002",
  text: "Pick the lock [Requires: Lockpicks]",
  targetNodeId: "node_secret_passage",
  requirements: [
    {
      variable: "inventory.lockpicks",
      operator: "has",
      value: true
    }
  ],
  // Fallback if condition not met
  fallbackChoiceId: "choice_003"
}
```

### Choice with Consequences

```typescript
{
  id: "choice_004",
  text: "Confront the betrayer",
  targetNodeId: "node_confrontation",
  effects: [
    {
      variable: "relationship.marcus",
      operation: "set",
      value: -50
    },
    {
      variable: "reputation",
      operation: "add",
      value: 10
    },
    {
      variable: "health",
      operation: "add",
      value: -20
    }
  ]
}
```

### Timed Choice

```typescript
{
  id: "choice_005",
  text: "Draw your weapon!",
  targetNodeId: "node_combat",
  timeLimit: 10, // seconds
  timeoutChoiceId: "choice_006", // What happens if time runs out
  style: "urgent"
}
```

### Hidden/Secret Choice

```typescript
{
  id: "choice_secret",
  text: "???", // Hidden until conditions met
  targetNodeId: "node_secret_ending",
  requirements: [
    {
      variable: "flags.found_all_clues",
      operator: "equals",
      value: true
    }
  ],
  style: "secret"
}
```

---

## Variable System

### Story Variables

```typescript
interface StoryState {
  // Character stats
  health: number;
  mana: number;
  stamina: number;
  
  // Skills
  skills: {
    combat: number;
    stealth: number;
    persuasion: number;
    magic: number;
  };
  
  // Relationships
  relationships: {
    [characterId: string]: number; // -100 to 100
  };
  
  // Inventory
  inventory: string[]; // Item IDs
  
  // Flags
  flags: {
    [flagName: string]: boolean;
  };
  
  // Counters
  counters: {
    [counterName: string]: number;
  };
  
  // Story progress
  progress: {
    currentChapter: number;
    nodesVisited: string[];
    endingsUnlocked: string[];
  };
}
```

### Variable Operations

```typescript
// Set a variable
{ variable: "health", operation: "set", value: 100 }

// Modify a variable
{ variable: "health", operation: "add", value: -10 }

// Toggle a flag
{ variable: "flags.door_unlocked", operation: "toggle", value: true }

// Add to inventory
{ variable: "inventory", operation: "add", value: "sword_iron" }

// Remove from inventory
{ variable: "inventory", operation: "remove", value: "key_rusty" }
```

---

## Ending System

### Ending Types

```typescript
interface Ending {
  id: string;
  title: string;
  description: string;
  type: 'good' | 'bad' | 'neutral' | 'secret' | 'true';
  
  // Requirements to reach
  requirements: {
    variables?: Condition[];
    nodesVisited?: string[];
    choicesMade?: string[];
  };
  
  // Content
  finalScene: StoryNode;
  epilogue?: string;
  
  // Rewards
  unlocks?: string[]; // Achievements, bonus content
  percentage: number; // What % of content seen
  
  // Statistics
  reachCount: number;
  averagePathLength: number;
}
```

### Example Endings

```typescript
const endings: Ending[] = [
  {
    id: "ending_heroic",
    title: "The Hero's Triumph",
    type: "good",
    description: "You defeated the dark lord and saved the kingdom.",
    requirements: {
      variables: [
        { variable: "final_boss_defeated", operator: "equals", value: true },
        { variable: "relationship.people", operator: "greater", value: 50 }
      ]
    },
    percentage: 25
  },
  {
    id: "ending_tragic",
    title: "A Noble Sacrifice",
    type: "neutral",
    description: "You gave your life to save others.",
    requirements: {
      variables: [
        { variable: "health", operator: "less", value: 1 },
        { variable: "flags.sacrifice_made", operator: "equals", value: true }
      ]
    },
    percentage: 15
  },
  {
    id: "ending_villain",
    title: "The Dark Throne",
    type: "bad",
    description: "You claimed power for yourself and became what you fought.",
    requirements: {
      variables: [
        { variable: "corruption", operator: "greater", value: 75 }
      ]
    },
    percentage: 20
  },
  {
    id: "ending_secret",
    title: "The Truth Revealed",
    type: "secret",
    description: "You discovered what really happened that night.",
    requirements: {
      variables: [
        { variable: "flags.all_clues_found", operator: "equals", value: true }
      ],
      nodesVisited: ["node_library_secret", "node_hidden_room"]
    },
    percentage: 5
  },
  {
    id: "ending_true",
    title: "The Real Victory",
    type: "true",
    description: "You found the third option nobody expected.",
    requirements: {
      variables: [
        { variable: "wisdom", operator: "greater", value: 80 },
        { variable: "flags.peaceful_solution", operator: "equals", value: true }
      ]
    },
    percentage: 3
  }
];
```

---

## Interactive Story Builder

### Visual Node Editor

```
┌─────────────────────────────────────────────────────────────────┐
│  INTERACTIVE STORY EDITOR                          [Save] [Play]│
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────┐     ┌─────────┐     ┌─────────┐                   │
│  │ START   │────▶│ Choice  │────▶│ Ending 1│                   │
│  │ Node    │     │ Node A  │     │ (Good)  │                   │
│  └─────────┘     └─────────┘     └─────────┘                   │
│       │                │                                        │
│       │                └──────────────┐                         │
│       │                               ▼                         │
│       │                         ┌─────────┐                     │
│       │                         │ Ending 2│                     │
│       │                         │ (Bad)   │                     │
│       │                         └─────────┘                     │
│       │                                                          │
│       └──────────────────────┐                                   │
│                              ▼                                   │
│                        ┌─────────┐                               │
│                        │ Choice  │                               │
│                        │ Node B  │                               │
│                        └─────────┘                               │
│                                                                 │
│  [+ Add Node]  [Auto-Arrange]  [Validate]  [Export]             │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│  SELECTED NODE: Choice Node A                                   │
│  ─────────────────────────────────────────────────────────────  │
│  Title: The Mysterious Door                                     │
│  Content: You stand before an ancient door...                   │
│                                                                 │
│  Choices:                                                       │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │ 1. Open the door ──────────────────────▶ Node: Room     │   │
│  │ 2. Listen at the door ─────────────────▶ Node: Eavesdrop│   │
│  │ 3. Leave it alone ─────────────────────▶ Node: Corridor │   │
│  └──────────────────────────────────────────────────────────┘   │
│                                                                 │
│  Variables Modified:                                            │
│  • curiosity +5                                                 │
│  • flags.door_discovered = true                                 │
│                                                                 │
│  [Edit Content] [Add Choice] [Delete Node]                      │
└─────────────────────────────────────────────────────────────────┘
```

### Node Templates

```typescript
const NODE_TEMPLATES = {
  // Standard choice node
  choice: {
    type: 'choice',
    content: '',
    choices: [
      { text: 'Option 1', target: '' },
      { text: 'Option 2', target: '' }
    ]
  },
  
  // Combat encounter
  combat: {
    type: 'combat',
    enemy: '',
    enemyHealth: 100,
    playerDamage: 10,
    enemyDamage: 15,
    winNode: '',
    loseNode: ''
  },
  
  // Skill check
  skillCheck: {
    type: 'skill_check',
    skill: 'persuasion',
    difficulty: 15,
    successNode: '',
    failureNode: ''
  },
  
  // Inventory check
  inventoryCheck: {
    type: 'inventory',
    requiredItem: '',
    consumeItem: false,
    hasItemNode: '',
    noItemNode: ''
  },
  
  // Random encounter
  random: {
    type: 'random',
    outcomes: [
      { probability: 0.6, node: '' },
      { probability: 0.4, node: '' }
    ]
  },
  
  // Ending
  ending: {
    type: 'ending',
    endingType: 'good',
    content: '',
    isFinal: true
  }
};
```

---

## Game Mechanics

### Skill Check System

```typescript
interface SkillCheck {
  skill: 'strength' | 'dexterity' | 'intelligence' | 
         'wisdom' | 'charisma' | 'combat' | 'stealth' | 'magic';
  difficulty: number; // DC 5-25
  modifier: number; // From character stats
  
  roll(): {
    success: boolean;
    rolled: number;
    total: number;
    critical: boolean;
  };
}

// Example skill check node
{
  id: "node_skill_gate",
  type: "skill_check",
  skill: "persuasion",
  difficulty: 15,
  successNode: "node_convinced",
  failureNode: "node_rejected",
  criticalSuccessNode: "node_greatly_impressed",
  criticalFailureNode: "node_offended"
}
```

### Combat System

```typescript
interface CombatEncounter {
  enemy: {
    name: string;
    health: number;
    maxHealth: number;
    damage: number;
    defense: number;
  };
  
  player: {
    health: number;
    damage: number;
    defense: number;
  };
  
  options: CombatOption[];
  
  winNode: string;
  loseNode: string;
  fleeNode?: string;
}

interface CombatOption {
  id: string;
  text: string;
  type: 'attack' | 'defend' | 'special' | 'item' | 'flee';
  damage?: number;
  cost?: { type: string; amount: number };
  cooldown?: number;
}
```

### Relationship System

```typescript
interface Relationship {
  characterId: string;
  value: number; // -100 (hated) to 100 (loved)
  
  thresholds: {
    hostile: -75;
    unfriendly: -25;
    neutral: 25;
    friendly: 50;
    loved: 75;
  };
  
  getCurrentStatus(): 'hostile' | 'unfriendly' | 'neutral' | 'friendly' | 'loved';
  
  unlockableContent: {
    [threshold: string]: string[]; // Node IDs unlocked at each threshold
  };
}
```

---

## Analytics & Tracking

### Player Journey Tracking

```typescript
interface PlayerJourney {
  sessionId: string;
  startTime: Date;
  endTime?: Date;
  
  path: {
    nodeId: string;
    timestamp: Date;
    choiceMade?: string;
    timeSpent: number; // seconds
  }[];
  
  variables: {
    [key: string]: any;
  };
  
  endingReached?: string;
  completionPercentage: number;
  
  choicesMade: {
    nodeId: string;
    choiceId: string;
    timestamp: Date;
  }[];
}
```

### Story Analytics

```typescript
GET /api/v1/stories/:id/analytics

Response:
{
  "totalPlays": 15420,
  "completions": 8934,
  "completionRate": 0.58,
  
  "endingDistribution": {
    "ending_heroic": 0.35,
    "ending_tragic": 0.22,
    "ending_villain": 0.18,
    "ending_secret": 0.05,
    "ending_true": 0.03,
    "abandoned": 0.17
  },
  
  "choiceAnalytics": {
    "node_042": {
      "totalChoices": 12000,
      "distribution": {
        "choice_a": 0.55,
        "choice_b": 0.35,
        "choice_c": 0.10
      }
    }
  },
  
  "dropoffPoints": [
    { "nodeId": "node_089", "dropoffRate": 0.23, "reason": "difficulty_spike" },
    { "nodeId": "node_156", "dropoffRate": 0.18, "reason": "length" }
  ],
  
  "averagePlayTime": 2340, // seconds
  "averageNodesVisited": 45
}
```

---

## Export Formats

### Interactive Formats

```typescript
// Web (HTML/JS)
POST /api/v1/stories/:id/export/web

Generates:
- Single-page HTML app
- JavaScript state management
- Responsive design
- Save/load functionality

// ePub (Fixed Layout)
POST /api/v1/stories/:id/export/epub

Generates:
- Fixed-layout ePub3
- Navigation via links
- Works on iBooks, Kindle

// Twine (HTML)
POST /api/v1/stories/:id/export/twine

Generates:
- Twine-compatible HTML
- Harlowe or SugarCube format
- Import back into Twine

// JSON (Custom Engine)
POST /api/v1/stories/:id/export/json

Generates:
- Full story graph as JSON
- For custom game engines
- Includes all variables and logic
```

### ChoiceScript Format

```
*title The Dragon's Choice
*author StoryForge AI

*page_start
You stand before the dragon's lair. The entrance is a massive 
cave mouth, steam rising from within.

*choice
    #Enter the cave boldly
        *goto cave_enter_bold
    #Sneak in quietly
        *goto cave_sneak
    #Call out a challenge
        *goto cave_challenge

*page_cave_enter_bold
*set courage +10
You stride into the cave, your footsteps echoing...
```

---

## API Reference

### Story Management

```
POST   /api/v1/interactive/create          - Create new interactive story
GET    /api/v1/interactive/:id             - Get story details
PUT    /api/v1/interactive/:id             - Update story
DELETE /api/v1/interactive/:id             - Delete story
POST   /api/v1/interactive/:id/node        - Add node
PUT    /api/v1/interactive/:id/node/:nodeId - Update node
DELETE /api/v1/interactive/:id/node/:nodeId - Delete node
POST   /api/v1/interactive/:id/validate    - Validate story graph
```

### Play Session

```
POST   /api/v1/interactive/:id/play        - Start play session
GET    /api/v1/interactive/:id/play/:sessionId - Get session state
POST   /api/v1/interactive/:id/play/:sessionId/choose - Make choice
POST   /api/v1/interactive/:id/play/:sessionId/save - Save progress
POST   /api/v1/interactive/:id/play/:sessionId/load - Load save
GET    /api/v1/interactive/:id/play/:sessionId/stats - Get session stats
```

### Analytics

```
GET    /api/v1/interactive/:id/analytics   - Get story analytics
GET    /api/v1/interactive/:id/analytics/endings - Ending distribution
GET    /api/v1/interactive/:id/analytics/choices - Choice analytics
GET    /api/v1/interactive/:id/analytics/dropoff - Dropoff points
```

---

## Best Practices

### Writing for Branching Narratives

1. **Keep branches manageable**
   - Avoid exponential branching
   - Use funnel technique (branches reconverge)
   - Limit to 2-4 choices per node

2. **Make choices meaningful**
   - Each choice should feel different
   - Consequences should be visible
   - Avoid illusion of choice

3. **Track important variables**
   - Don't over-complicate state
   - Focus on 5-10 key variables
   - Use flags for binary states

4. **Write modular content**
   - Nodes should work in multiple contexts
   - Avoid too many dependencies
   - Use variables for personalization

5. **Test all paths**
   - Play through every ending
   - Check for dead ends
   - Verify variable tracking

### Pacing Guidelines

```
Story Length    Nodes    Choices    Endings    Play Time
─────────────────────────────────────────────────────────
Short          20-40    30-60      3-5        15-30 min
Medium         50-100   80-150     6-10       1-2 hours
Long           150-300  200-400    10-20      3-5 hours
Epic           400+     500+       20+        8+ hours
```
