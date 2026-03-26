# 📱 Mobile-First Design - Wireframes & User Flows

Design system for Mystic AI mobile application.

---

## Design System

### Colors
```
Primary:     #6B4C7B (Mystic Purple)
Secondary:   #9B7EBD (Lavender)
Accent:      #D4AF37 (Gold Foil)
Background:  #1A1A2E (Deep Space)
Surface:     #2D2D44 (Card Background)
Text:        #FFFFFF (White)
Text Muted:  #A0A0B0 (Soft Gray)
Success:     #4ECDC4 (Teal)
Warning:     #FF6B6B (Coral)
```

### Typography
```
Headings:    'Cinzel', serif (mystical, elegant)
Body:        'Inter', sans-serif (readable, clean)
Accent:      'Playfair Display', serif (quotes, special text)
```

### Spacing
- Base unit: 8px
- Common: 8, 16, 24, 32, 48, 64px

### Corner Radius
- Cards: 16px
- Buttons: 24px (pill-shaped)
- Containers: 12px

---

## Screen Wireframes

### 1. Onboarding Flow (4 Screens)

**Screen 1: Welcome**
```
┌─────────────────────────┐
│                         │
│     🌙 ✨ 🌙            │
│                         │
│      MYSTIC AI          │
│                         │
│   Your Personal Tarot   │
│   & Oracle Guide        │
│                         │
│    [Get Started →]      │
│                         │
│  Already have account?  │
│       Sign In           │
└─────────────────────────┘
```

**Screen 2: What Draws You Here?**
```
┌─────────────────────────┐
│  ← Back                 │
│                         │
│  What draws you here?   │
│  (Select all that apply)│
│                         │
│  ☐ Daily guidance       │
│  ☐ Love & relationships │
│  ☐ Career decisions     │
│  ☐ Spiritual growth     │
│  ☐ Self-discovery       │
│  ☐ Just curious        │
│                         │
│         [Continue →]    │
└─────────────────────────┘
```

**Screen 3: Choose Your Deck**
```
┌─────────────────────────┐
│  Select Your Deck       │
│                         │
│  ┌─────────────────┐    │
│  │  [Classic Tarot]│    │
│  │   🎴 Traditional│    │
│  │   78 cards      │    │
│  └─────────────────┘    │
│                         │
│  ┌─────────────────┐    │
│  │ [Oracle Cards]  │    │
│  │  ✨ Intuitive   │    │
│  │  44 cards       │    │
│  └─────────────────┘    │
│                         │
│         [Continue →]    │
└─────────────────────────┘
```

**Screen 4: Notifications**
```
┌─────────────────────────┐
│  Stay Connected 🌟      │
│                         │
│  Get daily readings and │
│  moon phase reminders   │
│                         │
│  ○ No notifications     │
│  ● Daily at 8:00 AM     │
│  ○ Custom time          │
│                         │
│    [Set Time Picker]    │
│                         │
│         [Complete ✓]    │
└─────────────────────────┘
```

---

### 2. Home Screen (Main Dashboard)

```
┌─────────────────────────┐
│ ☰  🌙 Mystic AI    👤  │
├─────────────────────────┤
│                         │
│  Good evening, [Name]   │
│  🌕 Waxing Gibbous      │
│                         │
│  ┌───────────────────┐  │
│  │  🎴 Daily Card    │  │
│  │                   │  │
│  │   [DRAW CARD]     │  │
│  │                   │  │
│  │  2 readings left  │  │
│  └───────────────────┘  │
│                         │
│  Quick Spreads:         │
│  ┌─────┐ ┌─────┐ ┌────┐│
│  │ 3   │ │Celtic│ │Love││
│  │Card │ │ Cross│ │    ││
│  └─────┘ └─────┘ └────┘│
│                         │
│  Recent Readings        │
│  ┌───────────────────┐  │
│  │ Oct 15 - Career   │  │
│  │ Oct 12 - Love     │  │
│  │ Oct 10 - Daily    │  │
│  └───────────────────┘  │
│                         │
│  ┌───────────────────┐  │
│  │ 📔 Journal Entry  │  │
│  │ "What energy..."  │  │
│  │ [+ New Entry]     │  │
│  └───────────────────┘  │
│                         │
├─────────────────────────┤
│  🏠   🎴   📔   💎   ⚙ │
│  Home Read Journal Premium│
└─────────────────────────┘
```

---

### 3. Reading Screen (Active Spread)

```
┌─────────────────────────┐
│ ← Back    Celtic Cross  │
├─────────────────────────┤
│                         │
│  Your Question:         │
│  "Should I change       │
│   careers?"             │
│                         │
│  ┌───────────────────┐  │
│  │   Card Layout     │  │
│  │                   │  │
│  │      [6]          │  │
│  │       |           │  │
│  │  [4]-[1]-[2]-[3]  │  │
│  │       |           │  │
│  │      [5]          │  │
│  │                   │  │
│  │  [7][8][9][10]    │  │
│  │                   │  │
│  └───────────────────┘  │
│                         │
│  Position 1: The Present│
│  ┌───────────────────┐  │
│  │   [Card Image]    │  │
│  │   The Magician    │  │
│  │   Upright         │  │
│  └───────────────────┘  │
│                         │
│  [Reveal Interpretation]│
│                         │
│  ┌───────────────────┐  │
│  │ 💬 AI Reading     │  │
│  │ (Tap to expand)   │  │
│  └───────────────────┘  │
│                         │
│  [Save] [Share] [Journal]│
└─────────────────────────┘
```

---

### 4. Reading Results (Full Interpretation)

```
┌─────────────────────────┐
│ ← Back    Your Reading  │
├─────────────────────────┤
│                         │
│  🌟 Celtic Cross        │
│  October 21, 2024       │
│                         │
│  ┌───────────────────┐  │
│  │ "The Magician in  │  │
│  │ the present       │  │
│  │ position suggests │  │
│  │ you have all the  │  │
│  │ tools needed for  │  │
│  │ this career       │  │
│  │ transition..."    │  │
│  │                   │  │
│  │ [Show Full Reading]│ │
│  └───────────────────┘  │
│                         │
│  Card Positions:        │
│  1. Present: Magician   │
│  2. Challenge: 5 Swords │
│  3. Foundation: Empress │
│  ... (expandable)       │
│                         │
│  Key Themes:            │
│  • Manifestation        │
│  • Overcoming conflict  │
│  • Creative energy      │
│                         │
│  [💾 Save] [📤 Share]   │
│  [📔 Journal] [🔄 Redraw]│
└─────────────────────────┘
```

---

### 5. Journal Screen

```
┌─────────────────────────┐
│ ☰  My Journal      [+] │
├─────────────────────────┤
│                         │
│  Search entries...  🔍  │
│                         │
│  Filter: [All ▼]        │
│                         │
│  ┌───────────────────┐  │
│  │ Oct 21 - Career   │  │
│  │ Linked: Celtic    │  │
│  │ "This reading     │  │
│  │ really resonated  │  │
│  │ because..."       │  │
│  │ 🏷️ career #growth │  │
│  └───────────────────┘  │
│                         │
│  ┌───────────────────┐  │
│  │ Oct 19 - Daily    │  │
│  │ "Today I felt..." │  │
│  │ 🏷️ daily #gratitude││
│  └───────────────────┘  │
│                         │
│  ┌───────────────────┐  │
│  │ Oct 17 - Love     │  │
│  │ "What pattern..." │  │
│  │ 🏷️ love #shadow   │  │
│  └───────────────────┘  │
│                         │
├─────────────────────────┤
│  🏠   🎴   📔   💎   ⚙ │
└─────────────────────────┘
```

---

### 6. Premium Upgrade Screen

```
┌─────────────────────────┐
│              ✨ PREMIUM │
├─────────────────────────┤
│                         │
│     🌙 Unlock Your      │
│       Full Potential    │
│                         │
│  ┌───────────────────┐  │
│  │  FREE (Current)   │  │
│  │  • 3 readings/mo  │  │
│  │  • Basic spreads  │  │
│  │  • 7-day history  │  │
│  │  • Ads            │  │
│  │                   │  │
│  │  $0/month         │  │
│  └───────────────────┘  │
│                         │
│  ┌───────────────────┐  │
│  │  PREMIUM ✨       │  │
│  │  • Unlimited reads│  │
│  │  • All spreads    │  │
│  │  • Unlimited journal││
│  │  • Moon tracking  │  │
│  │  • No ads         │  │
│  │  • Priority AI    │  │
│  │                   │  │
│  │  $7.99/month      │  │
│  │  [Start Free Trial]│ │
│  └───────────────────┘  │
│                         │
│  "The premium reading   │
│   accuracy is incredible│
│   - Sarah M. ⭐⭐⭐⭐⭐"   │
│                         │
│  Restore Purchases      │
└─────────────────────────┘
```

---

## User Flow Diagrams

### First-Time User Flow
```
Download → Onboarding (4 screens) → Home → Daily Card Draw → 
Prompt to Journal → Save Reading → Explore Spreads → 
Hit Free Limit → Premium Prompt
```

### Daily User Flow
```
Open App → Home (see moon phase) → Daily Card → 
Read Interpretation → Optional Journal → Check Notifications → Close
```

### Reading Flow
```
Home → Choose Spread → Enter Question → 
Shuffle Animation → Card Reveal (one by one) → 
AI Interpretation → Save/Share/Journal Options
```

### Premium Conversion Flow
```
Free User → Attempt 4th Reading → Paywall → 
Show Value Props → Start Trial → Payment → 
Premium Badge Unlocked → Unlimited Access
```

---

## Animations & Microinteractions

1. **Card Shuffle**: Cards fan and shuffle with sound
2. **Card Reveal**: Flip animation with glow effect
3. **Moon Phase**: Subtle pulsing glow on current moon
4. **Premium Badge**: Sparkle animation on upgrade
5. **Journal Save**: Satisfying checkmark with haptic
6. **Loading**: Crescent moon spinner

---

## Accessibility

- Minimum 16px body text
- 4.5:1 contrast ratio
- VoiceOver labels on all cards
- Haptic feedback for key actions
- Reduced motion option
