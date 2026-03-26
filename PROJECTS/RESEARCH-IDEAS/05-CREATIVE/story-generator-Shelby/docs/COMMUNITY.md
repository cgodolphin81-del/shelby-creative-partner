# Community Features

## Overview
StoryForge AI includes a robust community platform where writers can share stories, get feedback, collaborate, and grow their audience.

---

## Community Hub Features

### 1. Story Sharing

```typescript
interface SharedStory {
  id: string;
  authorId: string;
  authorName: string;
  
  // Story Info
  title: string;
  description: string;
  genre: string;
  tags: string[];
  wordCount: number;
  coverImage?: string;
  
  // Visibility
  visibility: 'public' | 'community' | 'private' | 'unlisted';
  allowComments: boolean;
  allowFeedback: boolean;
  allowRemixes: boolean;
  
  // Content
  chapters: Chapter[];
  isComplete: boolean;
  isInteractive: boolean;
  
  // Engagement
  views: number;
  reads: number;
  likes: number;
  comments: number;
  bookmarks: number;
  
  // Moderation
  status: 'published' | 'pending' | 'flagged' | 'removed';
  contentWarnings: string[];
  ageRating: 'G' | 'PG' | 'PG-13' | 'R' | 'NC-17';
  
  // Timestamps
  publishedAt: Date;
  updatedAt: Date;
}
```

### Sharing Settings

```
┌─────────────────────────────────────────────────────────┐
│  PUBLISH STORY                              [Publish]   │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  Title: [The Dragon's Heir________________]             │
│                                                         │
│  Description:                                           │
│  [An epic fantasy about a young blacksmith who         │
│   discovers he's the last heir of the dragon riders...] │
│                                                         │
│  Genre: [Fantasy ▼]  Subgenre: [High Fantasy ▼]        │
│                                                         │
│  Tags: [fantasy] [dragons] [epic] [coming-of-age] [+]  │
│                                                         │
│  Cover Image: [Upload Image]                            │
│                                                         │
│  Visibility:                                            │
│  ○ Public - Anyone can find and read                    │
│  ○ Community - Only StoryForge members                  │
│  ○ Unlisted - Only people with link                     │
│  ○ Private - Only you                                   │
│                                                         │
│  Permissions:                                           │
│  ☑ Allow comments                                       │
│  ☑ Allow feedback                                       │
│  ☐ Allow remixes (derivative works)                     │
│  ☐ Enable tipping/donations                             │
│                                                         │
│  Content Warnings:                                      │
│  [violence] [mild language] [+]                         │
│                                                         │
│  Age Rating: [PG-13 ▼]                                  │
│                                                         │
│  Schedule:                                              │
│  ○ Publish now                                          │
│  ○ Schedule for: [Date Picker] [Time Picker]            │
│                                                         │
│  [Save Draft]  [Preview]  [Publish]                     │
└─────────────────────────────────────────────────────────┘
```

---

### 2. Feedback System

```typescript
interface Feedback {
  id: string;
  storyId: string;
  readerId: string;
  
  // Type
  type: 'comment' | 'review' | 'annotation' | 'beta_read';
  
  // Content
  content: string;
  rating?: number; // 1-5 stars
  chapterId?: string;
  paragraphIndex?: number;
  
  // Feedback Categories
  categories: {
    plot?: number; // 1-5
    characters?: number;
    pacing?: number;
    prose?: number;
    dialogue?: number;
  };
  
  // Tags
  tags: string[]; // 'plot-hole', 'great-scene', 'typo', etc.
  
  // Engagement
  likes: number;
  replies: Reply[];
  
  // Author Actions
  authorResponse?: string;
  markedHelpful: boolean;
  
  // Moderation
  reported: boolean;
  status: 'visible' | 'hidden' | 'removed';
  
  createdAt: Date;
}
```

### Feedback Interface

```
┌─────────────────────────────────────────────────────────┐
│  FEEDBACK ON "THE DRAGON'S HEIR" - Chapter 3            │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  ┌───────────────────────────────────────────────────┐ │
│  │  ⭐⭐⭐⭐⭐  Sarah_Reads                             │ │
│  │  2 hours ago                                      │ │
│  │                                                   │ │
│  │  This chapter really picked up the pace! The      │ │
│  │  confrontation with the dragon rider was intense. │ │
│  │  A few thoughts:                                    │ │
│  │                                                   │ │
│  │  👍 Great action sequence                         │ │
│  │  👍 Kael's internal conflict felt real            │ │
│  │  💭 Wondering if Lyra's betrayal is coming too    │ │
│  │     soon? Maybe build tension longer?             │ │
│  │  ✏️ Small typo: "their" should be "there" (para 7)│ │
│  │                                                   │ │
│  │  [Like] [Reply] [Report]                          │ │
│  └───────────────────────────────────────────────────┘ │
│                                                         │
│  ┌───────────────────────────────────────────────────┐ │
│  │  ⭐⭐⭐⭐   BookDragon99                            │ │
│  │  5 hours ago                                      │ │
│  │                                                   │ │
│  │  Loving the world-building! The magic system is   │ │
│  │  clear without being over-explained.              │ │
│  │                                                   │ │
│  │  [Like] [Reply] [Report]                          │ │
│  └───────────────────────────────────────────────────┘ │
│                                                         │
│  [Write a Review]  [Beta Read Request]                  │
└─────────────────────────────────────────────────────────┘
```

### Beta Reader Program

```typescript
interface BetaReadRequest {
  storyId: string;
  authorId: string;
  
  // Request Details
  title: string;
  summary: string;
  wordCount: number;
  genre: string;
  
  // What They're Looking For
  feedbackAreas: string[];
  // 'plot-holes', 'character-consistency', 'pacing',
  // 'dialogue', 'world-building', 'typos', 'general'
  
  // Requirements
  deadline?: Date;
  experienceLevel: 'any' | 'casual' | 'experienced' | 'professional';
  maxReaders: number;
  
  // Compensation
  type: 'volunteer' | 'trade' | 'paid';
  payment?: number; // If paid
  
  // Status
  status: 'open' | 'full' | 'closed';
  applicants: BetaApplicant[];
  selectedReaders: string[]; // User IDs
  
  createdAt: Date;
}
```

---

### 3. Collaboration Tools

```typescript
interface Collaboration {
  id: string;
  type: 'co-author' | 'anthology' | 'shared-universe' | 'workshop';
  
  // Project Info
  title: string;
  description: string;
  genre: string;
  
  // Team
  owner: string; // User ID
  members: CollaborationMember[];
  inviteCode?: string;
  
  // Permissions
  roles: {
    owner: string[];
    editor: string[];
    contributor: string[];
    viewer: string[];
  };
  
  // Content
  sharedDocuments: Document[];
  sharedCharacters: Character[];
  sharedWorld: WorldBible;
  
  // Workflow
  status: 'planning' | 'writing' | 'editing' | 'complete';
  milestones: Milestone[];
  
  // Communication
  discussionThread: Thread[];
  
  createdAt: Date;
  updatedAt: Date;
}

interface CollaborationMember {
  userId: string;
  role: 'owner' | 'editor' | 'contributor' | 'viewer';
  joinedAt: Date;
  contribution: {
    wordsWritten: number;
    chaptersAuthored: number;
    editsMade: number;
  };
}
```

### Collaboration Workspace

```
┌─────────────────────────────────────────────────────────┐
│  COLLABORATION: "The Chronicles of Aether"              │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  TEAM (4 members)                                       │
│  ┌─────────────────────────────────────────────────┐   │
│  │ 👑 You (Owner)          [Manage]                │   │
│  │ ✏️ Sarah_Writes (Editor)  12,450 words          │   │
│  │ ✏️ Mike_Story (Editor)    8,320 words           │   │
│  │ 👁️ Beta_Jen (Viewer)     Feedback only          │   │
│  │ [+ Invite Member]                                │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  PROJECT STATUS: Writing                                │
│  ████████████░░░░░░░░ 55% complete                      │
│                                                         │
│  CHAPTERS                                               │
│  ┌─────────────────────────────────────────────────┐   │
│  │ ✓ Ch 1: The Beginning (You)       [Edit] [View] │   │
│  │ ✓ Ch 2: The Journey (Sarah)       [Edit] [View] │   │
│  │ 🔄 Ch 3: The Challenge (Mike)     [Edit] [View] │   │
│  │ ⏳ Ch 4: The Revelation (You)     [Write]       │   │
│  │ ⏳ Ch 5: The Return (Sarah)       [Assign]      │   │
│  │ [+ Add Chapter]                                  │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  SHARED ASSETS                                          │
│  📁 World Bible  📁 Characters  📁 Plot Outline        │
│                                                         │
│  DISCUSSION (12 messages)                               │
│  ┌─────────────────────────────────────────────────┐   │
│  │ Sarah: Should we add a subplot about the mentor? │   │
│  │ Mike: Good idea! Maybe tie it to Ch 4?           │   │
│  │ [Reply...]                                       │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

### 4. Writing Groups & Workshops

```typescript
interface WritingGroup {
  id: string;
  name: string;
  description: string;
  
  // Type
  type: 'genre' | 'skill' | 'support' | 'challenge';
  focus: string; // e.g., 'Fantasy', 'First Chapters', 'NaNoWriMo'
  
  // Membership
  visibility: 'public' | 'private' | 'invite-only';
  members: string[]; // User IDs
  maxMembers?: number;
  
  // Activity
  meetings: Meeting[];
  challenges: Challenge[];
  discussions: Thread[];
  
  // Moderation
  moderators: string[];
  rules: string[];
  
  createdAt: Date;
}

interface Challenge {
  id: string;
  groupId: string;
  
  title: string;
  description: string;
  prompt?: string;
  
  // Timeline
  startDate: Date;
  endDate: Date;
  
  // Requirements
  wordCountGoal?: number;
  genre?: string;
  requirements: string[];
  
  // Participation
  participants: string[];
  submissions: Submission[];
  
  // Rewards
  prize?: string;
  voting: boolean;
  
  status: 'upcoming' | 'active' | 'voting' | 'complete';
}
```

### Workshop Session

```
┌─────────────────────────────────────────────────────────┐
│  WORKSHOP: First Chapter Critique                       │
│  Saturday, March 25 @ 2:00 PM EST                       │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  UPCOMING SESSIONS                                      │
│  ┌─────────────────────────────────────────────────┐   │
│  │ 📅 Mar 25 - First Chapter Critique              │   │
│  │    Host: BookClubBeth  |  8/10 spots filled     │   │
│  │    [Join]                                       │   │
│  │                                                 │   │
│  │ 📅 Apr 1 - Dialogue Deep Dive                   │   │
│  │    Host: DialogueDan   |  5/10 spots filled     │   │
│  │    [Join]                                       │   │
│  │                                                 │   │
│  │ 📅 Apr 8 - Pacing Workshop                      │   │
│  │    Host: PacingPro     |  10/10 spots (Full)    │   │
│  │    [Join Waitlist]                              │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  SUBMIT FOR CRITIQUE                                    │
│  ┌─────────────────────────────────────────────────┐   │
│  │ Story: [The Dragon's Heir ▼]                    │   │
│  │ Chapter: [Chapter 1 ▼]                          │   │
│  │ Word Count: 3,245                               │   │
│  │                                                 │   │
│  │ What feedback do you want?                       │   │
│  │ ☐ Plot & Structure                              │   │
│  │ ☐ Character Development                         │   │
│  │ ☐ Pacing                                        │   │
│  │ ☐ Prose & Style                                 │   │
│  │ ☐ Dialogue                                      │   │
│  │ ☐ Everything                                    │   │
│  │                                                 │   │
│  │ [Submit for Review]                              │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

### 5. Author Profiles

```typescript
interface AuthorProfile {
  userId: string;
  username: string;
  displayName: string;
  
  // Bio
  bio: string;
  avatar?: string;
  banner?: string;
  location?: string;
  website?: string;
  socialLinks: {
    twitter?: string;
    instagram?: string;
    tiktok?: string;
    youtube?: string;
  };
  
  // Stats
  storiesPublished: number;
  totalWords: number;
  totalReads: number;
  totalLikes: number;
  followers: number;
  following: number;
  
  // Achievements
  badges: Badge[];
  level: number;
  xp: number;
  
  // Specializations
  genres: string[];
  styles: string[];
  
  // Activity
  memberSince: Date;
  lastActive: Date;
  
  // Monetization
  tipJar: boolean;
  patreonLink?: string;
  koFiLink?: string;
  
  // Settings
  allowMessages: boolean;
  showOnline: boolean;
  featuredStory?: string;
}

interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  earnedAt: Date;
  
  // Categories
  category: 'milestone' | 'achievement' | 'community' | 'special';
  rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
}
```

### Badge Examples

```typescript
const BADGES: Badge[] = [
  // Milestone Badges
  { id: 'first-story', name: 'First Steps', description: 'Publish your first story', rarity: 'common' },
  { id: '10k-words', name: 'Word Smith', description: 'Write 10,000 words', rarity: 'common' },
  { id: '100k-words', name: 'Novelist', description: 'Write 100,000 words', rarity: 'uncommon' },
  { id: '1m-words', name: 'Wordsmith Master', description: 'Write 1,000,000 words', rarity: 'rare' },
  
  // Achievement Badges
  { id: 'top-rated', name: 'Crowd Pleaser', description: 'Story with 1000+ likes', rarity: 'rare' },
  { id: 'viral', name: 'Viral Sensation', description: 'Story with 100,000+ reads', rarity: 'epic' },
  { id: 'complete', name: 'Finisher', description: 'Complete a 50,000+ word story', rarity: 'uncommon' },
  { id: 'daily-writer', name: 'Dedicated', description: 'Write every day for 30 days', rarity: 'rare' },
  
  // Community Badges
  { id: 'helper', name: 'Helpful', description: 'Give 100 helpful feedback responses', rarity: 'uncommon' },
  { id: 'mentor', name: 'Mentor', description: 'Beta read 10 stories', rarity: 'rare' },
  { id: 'collaborator', name: 'Team Player', description: 'Complete 5 collaborations', rarity: 'uncommon' },
  
  // Special Badges
  { id: 'founder', name: 'Founder', description: 'Early adopter (Year 1)', rarity: 'legendary' },
  { id: 'contest-winner', name: 'Champion', description: 'Win a community contest', rarity: 'epic' },
  { id: 'verified', name: 'Verified Author', description: 'Published author verification', rarity: 'rare' }
];
```

---

### 6. Discovery & Recommendations

```typescript
interface DiscoveryFeed {
  // Personalized
  forYou: Story[]; // Based on reading history
  becauseYouRead: { story: Story; reason: string }[];
  trendingInGenres: { genre: string; stories: Story[] }[];
  
  // Community
  trending: Story[]; // Most read this week
  rising: Story[]; // Fastest growing
  hot: Story[]; // Most engagement
  new: Story[]; // Recently published
  
  // Curated
  editorsPicks: Story[];
  staffPicks: Story[];
  featured: Story[];
  
  // By Genre
  byGenre: { [genre: string]: Story[] };
  
  // Interactive
  interactive: Story[]; // Choose-your-own-adventure
  complete: Story[]; // Finished stories
  serials: Story[]; // Ongoing
}
```

### Search & Filters

```
┌─────────────────────────────────────────────────────────┐
│  DISCOVER STORIES                                       │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  Search: [__________________________] [Search]          │
│                                                         │
│  Filters:                                               │
│  ┌─────────────────────────────────────────────────┐   │
│  │ Genre: [Any ▼]  [Fantasy] [Sci-Fi] [Romance]    │   │
│  │                                                 │   │
│  │ Status: [Any ▼]  [Complete] [Ongoing] [One-shot]│   │
│  │                                                 │   │
│  │ Length: [Any ▼]  [Short] [Medium] [Long] [Epic] │   │
│  │                                                 │   │
│  │ Rating: [Any ▼]  [G] [PG] [PG-13] [R]           │   │
│  │                                                 │   │
│  │ Sort by: [Popularity ▼]  [Newest] [Top Rated]   │   │
│  │            [Most Read] [Trending]               │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  TRENDING THIS WEEK                                     │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐      │
│  │ [Cover] │ │ [Cover] │ │ [Cover] │ │ [Cover] │      │
│  │ Title 1 │ │ Title 2 │ │ Title 3 │ │ Title 4 │      │
│  │ ⭐4.8   │ │ ⭐4.6   │ │ ⭐4.9   │ │ ⭐4.5   │      │
│  │ 12K reads│ │ 8K reads│ │ 25K reads│ │ 5K reads│     │
│  └─────────┘ └─────────┘ └─────────┘ └─────────┘      │
│                                                         │
│  [Load More]                                            │
└─────────────────────────────────────────────────────────┘
```

---

### 7. Contests & Challenges

```typescript
interface Contest {
  id: string;
  title: string;
  description: string;
  
  // Timeline
  submissionStart: Date;
  submissionEnd: Date;
  votingStart: Date;
  votingEnd: Date;
  winnersAnnounced: Date;
  
  // Requirements
  genre?: string;
  wordCountMin: number;
  wordCountMax: number;
  theme?: string;
  requirements: string[];
  
  // Prizes
  prizes: {
    first: { cash: number; badge: string; feature: boolean };
    second: { cash: number; badge: string; feature: boolean };
    third: { cash: number; badge: string; feature: boolean };
    honorable: { badge: string }[];
  };
  
  // Judging
  judgingType: 'community' | 'judges' | 'hybrid';
  judges?: string[]; // User IDs for judge panel
  
  // Submissions
  submissions: ContestSubmission[];
  
  status: 'upcoming' | 'open' | 'voting' | 'judging' | 'complete';
}
```

### Contest Example

```
┌─────────────────────────────────────────────────────────┐
│  🏆 MONTHLY WRITING CONTEST                              │
│  Theme: "The Door That Shouldn't Exist"                 │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  SUBMISSIONS OPEN: March 1 - March 31                   │
│  VOTING: April 1 - April 7                              │
│  WINNERS: April 15                                      │
│                                                         │
│  REQUIREMENTS:                                          │
│  • Genre: Any                                           │
│  • Word Count: 1,000 - 5,000 words                      │
│  • Must include the theme                               │
│  • Original work only                                   │
│                                                         │
│  PRIZES:                                                │
│  🥇 1st Place: $500 + Featured Spot + Gold Badge       │
│  🥈 2nd Place: $250 + Silver Badge                      │
│  🥉 3rd Place: $100 + Bronze Badge                      │
│  🏅 Honorable Mentions: Special Badge                   │
│                                                         │
│  SUBMISSIONS: 127 entries                               │
│                                                         │
│  [Submit Entry]  [View Entries]  [Rules]                │
└─────────────────────────────────────────────────────────┘
```

---

## Community Guidelines

### Code of Conduct

```
1. BE RESPECTFUL
   Treat all members with respect. No harassment, 
   discrimination, or hate speech.

2. CONSTRUCTIVE FEEDBACK
   Give feedback that helps, not hurts. Be specific, 
   be kind, be helpful.

3. ORIGINAL CONTENT
   Only share your own work or content you have 
   rights to share. No plagiarism.

4. APPROPRIATE CONTENT
   Tag mature content appropriately. Respect age 
   ratings and content warnings.

5. NO SPAM
   Don't self-promote excessively. Don't post 
   irrelevant content.

6. PRIVACY
   Respect others' privacy. Don't share personal 
   information without consent.

7. FOLLOW THE LAW
   No illegal content. Respect copyright and 
   intellectual property.

Violations may result in:
- Warning
- Content removal
- Temporary suspension
- Permanent ban
```

### Moderation System

```typescript
interface ModerationAction {
  id: string;
  type: 'warning' | 'content-removal' | 'suspension' | 'ban';
  
  target: {
    type: 'user' | 'content' | 'comment';
    id: string;
  };
  
  reason: string;
  ruleViolated: string;
  
  moderator: string; // User ID
  automated: boolean;
  
  appealable: boolean;
  appealDeadline?: Date;
  
  createdAt: Date;
  expiresAt?: Date; // For temporary suspensions
}
```

---

## API Reference

### Community Endpoints

```
# Stories
GET    /api/v1/community/stories              - Browse stories
POST   /api/v1/community/stories              - Publish story
GET    /api/v1/community/stories/:id          - Get story
PUT    /api/v1/community/stories/:id          - Update story
DELETE /api/v1/community/stories/:id          - Delete story

# Feedback
GET    /api/v1/community/stories/:id/feedback - Get feedback
POST   /api/v1/community/stories/:id/feedback - Add feedback
PUT    /api/v1/community/feedback/:id         - Update feedback
DELETE /api/v1/community/feedback/:id         - Delete feedback

# Profiles
GET    /api/v1/community/users/:id            - Get profile
PUT    /api/v1/community/users/:id            - Update profile
GET    /api/v1/community/users/:id/stories    - User's stories
GET    /api/v1/community/users/:id/followers  - Followers
POST   /api/v1/community/users/:id/follow     - Follow user

# Collaboration
POST   /api/v1/community/collaborations       - Create collab
GET    /api/v1/community/collaborations/:id   - Get collab
PUT    /api/v1/community/collaborations/:id   - Update collab
POST   /api/v1/community/collaborations/:id/invite - Invite

# Groups
GET    /api/v1/community/groups               - Browse groups
POST   /api/v1/community/groups               - Create group
GET    /api/v1/community/groups/:id           - Get group
POST   /api/v1/community/groups/:id/join      - Join group

# Contests
GET    /api/v1/community/contests             - Browse contests
POST   /api/v1/community/contests/:id/submit  - Submit entry
GET    /api/v1/community/contests/:id/entries - View entries
POST   /api/v1/community/contests/:id/vote    - Vote
```

---

## Monetization for Creators

### Tip Jar

```typescript
interface TipJar {
  enabled: boolean;
  provider: 'stripe' | 'paypal' | 'kofi' | 'patreon';
  
  // Settings
  suggestedAmounts: number[]; // [1, 5, 10, 20]
  customAmount: boolean;
  message: string; // Thank you message
  
  // Stats
  totalReceived: number;
  tipsReceived: number;
  topSupporters: { userId: string; amount: number }[];
}
```

### Paid Early Access

```typescript
interface EarlyAccess {
  enabled: boolean;
  platform: 'patreon' | 'subscribe-star' | 'built-in';
  
  // Tiers
  tiers: {
    name: string;
    price: number;
    benefits: string[];
  }[];
  
  // Content
  freeChapters: number; // How many free before paywall
  advanceChapters: number; // How far ahead for paid
}
```

### Revenue Share

```
FREE TIER:
- No monetization allowed

PRO TIER:
- Tip jar: 100% to creator
- Early access: 100% to creator (minus payment processing)
- StoryForge takes 0%

COMMERCIAL TIER:
- All Pro features
- Ability to sell stories directly
- StoryForge takes 5% platform fee
- Analytics on sales
```
