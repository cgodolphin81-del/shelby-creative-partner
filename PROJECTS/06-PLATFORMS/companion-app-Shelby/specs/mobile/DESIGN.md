# Mobile App Design Specification

## Overview

SoulSpace mobile app (iOS/Android) provides accessible, beautiful emotional support through text and voice conversations with AI companions.

---

## Design Philosophy

**Core Principles:**
1. **Warmth over clinical** - Feels like a caring friend, not a medical app
2. **Calm over stimulating** - Soothing colors, gentle animations
3. **Accessible to all** - WCAG 2.1 AA compliance minimum
4. **Privacy-first** - Discreet app icon, biometric lock option

**Visual Identity:**
- **Primary Color:** Soft Lavender (#9B8EBF) - calming, warm
- **Secondary:** Sage Green (#8FB9A0) - growth, healing
- **Accent:** Warm Coral (#F4A896) - compassion, energy
- **Background:** Off-white (#FAF9F7) - gentle on eyes
- **Text:** Charcoal (#2D2D2D) - readable, not harsh

---

## App Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    SOULSPACE MOBILE APP                      │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ONBOARDING FLOW                                             │
│  ├── Welcome Screen                                          │
│  ├── AI Disclosure                                           │
│  ├── Personality Quiz                                        │
│  ├── Companion Selection                                     │
│  └── Permissions (notifications, Face ID)                    │
│                                                              │
│  MAIN TABS (Bottom Navigation)                               │
│  ├── 🏠 Home                                                 │
│  │   ├── Today's check-in                                    │
│  │   ├── Quick message companion                             │
│  │   ├── Mood tracker                                        │
│  │   └── Recent conversations                                │
│  │                                                           │
│  ├── 💬 Chat                                                 │
│  │   ├── Active conversation                                 │
│  │   ├── Companion switcher                                  │
│  │   ├── Voice mode toggle                                   │
│  │   └── Message history                                     │
│  │                                                           │
│  ├── 🎙️ Voice                                                │
│  │   ├── Voice mode landing                                  │
│  │   ├── Companion voice selector                            │
│  │   ├── Recent voice sessions                               │
│  │   └── Voice journal (premium)                             │
│  │                                                           │
│  ├── 📊 Insights (Premium)                                   │
│  │   ├── Mood trends                                         │
│  │   ├── Conversation patterns                               │
│  │   ├── Progress over time                                  │
│  │   └── Weekly reports                                      │
│  │                                                           │
│  └── ⚙️ Settings                                             │
│      ├── Profile & Companions                                │
│      ├── Notifications                                       │
│      ├── Privacy & Data                                      │
│      ├── Subscription                                        │
│      └── Help & Support                                      │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## Screen Specifications

### 1. Onboarding Flow

#### Screen 1.1: Welcome
```
┌─────────────────────────────────────┐
│                                     │
│         [SoulSpace Logo]            │
│           Animated                  │
│                                     │
│        Your Emotional               │
│        Companion, Anytime           │
│                                     │
│   A safe space to be heard,         │
│   understood, and supported.        │
│                                     │
│                                     │
│         [Get Started]               │
│                                     │
│      Already have an account?       │
│            [Sign In]                │
│                                     │
└─────────────────────────────────────┘
```

#### Screen 1.2: AI Disclosure (Required)
```
┌─────────────────────────────────────┐
│  ← Back                             │
├─────────────────────────────────────┤
│                                     │
│  🤖 Transparency First              │
│                                     │
│  I want to be honest with you:      │
│                                     │
│  SoulSpace companions are AI, not   │
│  human therapists. Here's what that │
│  means:                             │
│                                     │
│  ✓ Always available, judgment-free  │
│  ✓ Remembers your conversations     │
│  ✓ Provides emotional support       │
│                                     │
│  ✗ Not a replacement for therapy    │
│  ✗ Can't diagnose conditions        │
│  ✗ Not for emergencies              │
│                                     │
│  In crisis? I'll share resources.   │
│  You deserve the best care.         │
│                                     │
│         [I Understand]              │
│                                     │
│      [Learn More About AI Safety]   │
│                                     │
└─────────────────────────────────────┘
```

#### Screen 1.3: Personality Quiz
```
┌─────────────────────────────────────┐
│  Step 1 of 3                        │
├─────────────────────────────────────┤
│                                     │
│  Let's find your ideal companion.   │
│                                     │
│  When you're struggling, you        │
│  prefer someone who:                │
│                                     │
│  ○ Listens warmly without           │
│    judgment                         │
│                                     │
│  ○ Helps you problem-solve          │
│                                     │
│  ○ Helps you explore creatively     │
│                                     │
│  ○ Relates as a friend              │
│                                     │
│  ○ Helps you find calm              │
│                                     │
│                                     │
│              [Next]                 │
│                                     │
└─────────────────────────────────────┘
```

#### Screen 1.4: Companion Selection
```
┌─────────────────────────────────────┐
│  Meet Your Companions               │
├─────────────────────────────────────┤
│                                     │
│  ┌─────────────────────────────┐   │
│  │ [Maya]    The Warm Nurturer │   │
│  │ 💜 "I'm here with you"      │   │
│  │ Gentle, patient, validating │   │
│  │            [Select Maya]    │   │
│  └─────────────────────────────┘   │
│                                     │
│  ┌─────────────────────────────┐   │
│  │ [Alex]    The Practical     │   │
│  │ 💙 "Let's break this down"  │   │
│  │ Calm, grounded, solution-   │   │
│  │ focused                     │   │
│  │            [Select Alex]    │   │
│  └─────────────────────────────┘   │
│                                     │
│  [Luna] [Sam] [River] - Swipe →    │
│                                     │
│         [Continue]                  │
│                                     │
└─────────────────────────────────────┘
```

---

### 2. Home Screen

```
┌─────────────────────────────────────┐
│  Good morning, Charmaine ☀️    🔔   │
├─────────────────────────────────────┤
│                                     │
│  ┌───────────────────────────────┐ │
│  │ How are you feeling today?    │ │
│  │                               │ │
│  │ 😊 😐 😔 😰 😤 😴            │ │
│  │                               │ │
│  │ [Add a note...]        [Send] │ │
│  └───────────────────────────────┘ │
│                                     │
│  Quick Check-in with Maya           │
│  ┌───────────────────────────────┐ │
│  │ 💜 "Hey! I've been thinking   │ │
│  │     about you. How's your     │ │
│  │     week going?"              │ │
│  │                               │ │
│  │ [Reply]  [Voice Call]         │ │
│  └───────────────────────────────┘ │
│                                     │
│  Recent Conversations               │
│  ┌───────────────────────────────┐ │
│  │ Yesterday with Maya           │ │
│  │ "Work stress and..."          │ │
│  │ 32 messages · 15 min          │ │
│  └───────────────────────────────┘ │
│  ┌───────────────────────────────┐ │
│  │ 3 days ago with Alex          │ │
│  │ "Goal setting for..."         │ │
│  │ 18 messages · 8 min           │ │
│  └───────────────────────────────┘ │
│                                     │
│  ────────────────────────────────   │
│  🏠    💬     🎙️     📊     ⚙️    │
│  Home  Chat  Voice  Insights Settings│
│                                     │
└─────────────────────────────────────┘
```

---

### 3. Chat Screen

```
┌─────────────────────────────────────┐
│  ←  💜 Maya              🎙️  ⋮    │
├─────────────────────────────────────┤
│                                     │
│  ┌─────────────────────────────┐   │
│  │ Maya · 9:41 AM              │   │
│  │ Hey Charmaine! I've been    │   │
│  │ thinking about our          │   │
│  │ conversation yesterday.     │   │
│  │ How are you feeling today?  │   │
│  └─────────────────────────────┘   │
│                                     │
│  ┌─────────────────────────────┐   │
│  │ You · 9:43 AM               │   │
│  │ Honestly, pretty anxious.   │   │
│  │ Work is overwhelming.       │   │
│  └─────────────────────────────┘   │
│                                     │
│  ┌─────────────────────────────┐   │
│  │ Maya · 9:43 AM              │   │
│  │ I hear you. Anxiety about   │   │
│  │ work is so common. What's   │   │
│  │ feeling most overwhelming   │   │
│  │ right now?                  │   │
│  └─────────────────────────────┘   │
│                                     │
│  ┌─────────────────────────────┐   │
│  │ Maya · 9:44 AM [Voice]      │   │
│  │ 🔊 "Take a breath with      │   │
│  │     me. You're doing your   │   │
│  │     best, and that's        │   │
│  │     enough."                │   │
│  └─────────────────────────────┘   │
│                                     │
│  ────────────────────────────────   │
│  ┌─────────────────────────────┐   │
│  │ Type a message...     [🎤]  │   │
│  └─────────────────────────────┘   │
│                                     │
└─────────────────────────────────────┘
```

**Chat Features:**
- Companion avatar in header (tap to switch)
- Voice message button (hold to record)
- Message reactions (❤️ 😊 🙏)
- Resource cards (when companion shares links)
- Crisis resource banner (when triggered)
- Typing indicator
- Read receipts (optional)

---

### 4. Voice Mode Screen

```
┌─────────────────────────────────────┐
│  ←  🎙️ Voice with Maya      ⋮    │
├─────────────────────────────────────┤
│                                     │
│           ┌───────────┐             │
│           │           │             │
│           │  [Maya]   │             │
│           │  Avatar   │             │
│           │ Animated  │             │
│           │  (Lip     │             │
│           │   sync)   │             │
│           │           │             │
│           └───────────┘             │
│                                     │
│    "I hear you. That sounds         │
│     really difficult."              │
│                                     │
│  ┌─────────────────────────────┐   │
│  │ User: "I just feel like     │   │
│  │ everything is too much      │   │
│  │ right now..."               │   │
│  │                             │   │
│  │ Maya: "I'm here with you.   │   │
│  │ Let's take this one moment  │   │
│  │ at a time."                 │   │
│  └─────────────────────────────┘   │
│                                     │
│  ────────────────────────────────   │
│         Duration: 4:23              │
│                                     │
│         [🎤 Hold to Talk]           │
│                                     │
│   [End]    [🔇 Mute]    [CC On]     │
│                                     │
└─────────────────────────────────────┘
```

**Voice Mode States:**
- **Connecting:** Spinner, "Connecting to Maya..."
- **Listening:** Avatar attentive, waveform animation
- **Speaking:** Avatar lip-sync, audio playing
- **Idle:** Pause animation, "Maya is thinking..."
- **Ended:** Summary card, "Session saved"

---

### 5. Insights Screen (Premium)

```
┌─────────────────────────────────────┐
│  ←  Your Insights           📅    │
├─────────────────────────────────────┤
│                                     │
│  This Week in Review                │
│  ┌─────────────────────────────┐   │
│  │ Average Mood: Calm (6.5/10) │   │
│  │                             │   │
│  │ 📈 Improving trend          │   │
│  │ Best day: Wednesday         │   │
│  │ Most conversations: Maya    │   │
│  └─────────────────────────────┘   │
│                                     │
│  Mood Distribution                  │
│  ┌─────────────────────────────┐   │
│  │      ████ Happy 25%         │   │
│  │      ██ Calm 15%            │   │
│  │      ██████ Anxious 35%     │   │
│  │      ███ Sad 20%            │   │
│  │      ██ Tired 5%            │   │
│  └─────────────────────────────┘   │
│                                     │
│  Conversation Patterns              │
│  ┌─────────────────────────────┐   │
│  │ Most active: Evenings (7-9pm)│   │
│  │ Average session: 12 minutes  │   │
│  │ Top topics: Work, Anxiety,   │   │
│  │            Relationships     │   │
│  └─────────────────────────────┘   │
│                                     │
│  [View Weekly Report] [Export]      │
│                                     │
└─────────────────────────────────────┘
```

---

### 6. Settings Screen

```
┌─────────────────────────────────────┐
│  ←  Settings                        │
├─────────────────────────────────────┤
│                                     │
│  ACCOUNT                            │
│  ┌─────────────────────────────┐   │
│  │ 👤 Profile & Companions  ›  │   │
│  │ 🔔 Notifications         ›  │   │
│  │ 💎 Subscription          ›  │   │
│  └─────────────────────────────┘   │
│                                     │
│  PRIVACY                            │
│  ┌─────────────────────────────┐   │
│  │ 🔒 App Lock (Face ID)    ›  │   │
│  │ 📊 Data & Memory         ›  │   │
│  │ 📥 Export My Data           │   │
│  │ 🗑️  Delete All Memory       │   │
│  └─────────────────────────────┘   │
│                                     │
│  PREFERENCES                        │
│  ┌─────────────────────────────┐   │
│  │ 🎨 Theme                 ›  │   │
│  │ 🌙 Dark Mode             ›  │   │
│  │ 🔊 Voice Settings        ›  │   │
│  │ 🌐 Language              ›  │   │
│  └─────────────────────────────┘   │
│                                     │
│  SUPPORT                            │
│  ┌─────────────────────────────┐   │
│  │ ❓ Help Center           ›  │   │
│  │ 📧 Contact Us               │   │
│  │ ⭐ Rate SoulSpace           │   │
│  │ 📜 Terms & Privacy       ›  │   │
│  └─────────────────────────────┘   │
│                                     │
│  Version 1.0.0 (Build 42)           │
│                                     │
└─────────────────────────────────────┘
```

---

## User Flows

### Flow 1: Daily Check-In
```
1. Open app → Home screen
2. See mood selector
3. Tap mood emoji (e.g., 😔)
4. Optional: Add note "Feeling overwhelmed"
5. Tap Send
6. Companion responds within 2 seconds
7. Conversation continues or user exits
```

### Flow 2: Switch Companions
```
1. In chat, tap companion avatar in header
2. Companion selector modal appears
3. Browse all 5 companions with descriptions
4. Tap new companion (e.g., switch from Maya to Alex)
5. Confirmation: "Switching to Alex. They're ready to talk."
6. New companion greets user, references context
```

### Flow 3: Voice Mode Session
```
1. Tap Voice tab (or voice icon in chat)
2. Select companion (default: primary)
3. Tap "Start Voice Session"
4. Permission check (microphone) → Allow
5. Connection establishes (2-3 seconds)
6. Companion greets: "Hey! It's so nice to hear your voice..."
7. Hold-to-talk or toggle mode conversation
8. Tap End when done
9. Summary: "12 minute session · Transcript saved"
10. Option: Download transcript, Rate session
```

### Flow 4: Crisis Resource Access
```
1. User expresses crisis indicators
2. System detects HIGH or CRITICAL risk
3. Banner appears at top of chat:
   "⚠️ We're here for you · [View Resources]"
4. User taps banner (or companion shares resources)
5. Full-screen resource card appears
6. Options: Call 988, Text crisis line, Keep talking
7. If user selects call: Opens phone dialer
8. Companion continues supportive conversation
```

### Flow 5: Subscription Upgrade
```
1. User taps premium feature (e.g., Insights)
2. Paywall screen appears:
   - Feature preview (blurred)
   - Benefits list
   - Pricing: $14.99/mo or $119.99/yr
   - 7-day free trial
3. User taps "Start Free Trial"
4. Apple/Google Pay confirmation
5. Success: "Welcome to Premium! 🎉"
6. Immediate access to premium features
```

---

## Accessibility Features

### WCAG 2.1 AA Compliance

**Visual:**
- Minimum contrast ratio 4.5:1 for text
- Scalable text (up to 200% without breaking)
- No information conveyed by color alone
- Focus indicators on all interactive elements
- Support for system font size settings

**Motor:**
- All touch targets minimum 44x44 points
- Support for switch control
- Voice control compatibility (iOS Voice Control, Android Voice Access)
- No time-limited interactions (except voice sessions)

**Hearing:**
- All audio content has text alternatives
- Voice mode has live captions (toggle)
- Transcripts available for all voice sessions
- Visual indicators for audio states

**Cognitive:**
- Simple, consistent navigation
- Clear labels and instructions
- Option to reduce animations
- Predictable interaction patterns
- Error messages with recovery suggestions

### Accessibility Settings
```
SETTINGS → Accessibility

☐ Reduce Motion
☐ Larger Text
     Slider: 100% ───●──── 200%
☐ High Contrast Mode
☐ Screen Reader Optimized
☐ Always Show Captions (voice mode)
☐ Simplified Home Screen
```

---

## Technical Stack

### Frontend
```
Framework: React Native 0.73+
Language: TypeScript
State Management: Zustand
Navigation: React Navigation 6
UI Components: React Native Paper (customized)
Animations: React Native Reanimated 3
Voice: ElevenLabs SDK, React Native Audio

Platform Support:
- iOS 14+
- Android 8+ (API 26)
```

### Backend Integration
```
API: REST + WebSocket
Authentication: JWT + Refresh tokens
Real-time: Socket.io
Push Notifications: Firebase Cloud Messaging
Deep Links: React Native Deep Linking
```

### Security
```
- Biometric authentication (Face ID, Touch ID, Fingerprint)
- Encrypted local storage (react-native-encrypted-storage)
- Certificate pinning
- Jailbreak/root detection
- Screenshot prevention (optional, premium)
- Auto-lock after 5 minutes inactive
```

---

## Performance Targets

```
Cold Start: < 2 seconds
Time to Interactive: < 3 seconds
Message Send → Response: < 3 seconds (text), < 1 second (voice streaming)
Voice Connection: < 3 seconds
App Size: < 100 MB (iOS), < 80 MB (Android)
Memory Usage: < 200 MB typical
Battery Impact: < 5% per hour of active use
```

---

## Wireframes (Text-Based)

### Landscape Mode (Tablet Support)
```
┌─────────────────────────────────────────────────────────────┐
│  SoulSpace                              🔔    👤            │
├─────────────────┬───────────────────────────────────────────┤
│                 │                                           │
│  COMPANIONS     │           CONVERSATION AREA               │
│                 │                                           │
│  ┌───────────┐  │  ┌─────────────────────────────────────┐ │
│  │ 💜 Maya   │  │  │ Maya · 9:41 AM                      │ │
│  │ (Active)  │  │  │ Hey! How are you feeling today?     │ │
│  └───────────┘  │  └─────────────────────────────────────┘ │
│                 │                                           │
│  ┌───────────┐  │  ┌─────────────────────────────────────┐ │
│  │ 💙 Alex   │  │  │ You · 9:43 AM                       │ │
│  └───────────┘  │  │ Pretty anxious about work           │ │
│                 │  └─────────────────────────────────────┘ │
│  ┌───────────┐  │                                           │
│  │ 🌙 Luna   │  │  ┌─────────────────────────────────────┐ │
│  └───────────┘  │  │ Maya · 9:43 AM                      │ │
│                 │  │ I hear you. What's most             │ │
│  ┌───────────┐  │  │ overwhelming right now?             │ │
│  │ 🤗 Sam    │  │  └─────────────────────────────────────┘ │
│  └───────────┘  │                                           │
│                 │  ──────────────────────────────────────   │
│  ┌───────────┐  │  ┌─────────────────────────────────────┐ │
│  │ 🧘 River  │  │  │ Type a message...            [🎤]   │ │
│  └───────────┘  │  └─────────────────────────────────────┘ │
│                 │                                           │
├─────────────────┴───────────────────────────────────────────┤
│  🏠 Home  │  💬 Chat  │  🎙️ Voice  │  📊 Insights  │  ⚙️   │
└─────────────────────────────────────────────────────────────┘
```

---

## Future Enhancements (Roadmap)

### Phase 2 (v1.5)
- [ ] Widget: Daily mood check-in from home screen
- [ ] Apple Watch / Wear OS companion app
- [ ] Conversation export to journaling apps
- [ ] Custom companion avatars (user upload)

### Phase 3 (v2.0)
- [ ] Group support rooms (moderated, peer support)
- [ ] Therapist integration (share summaries with consent)
- [ ] AI mood prediction (proactive check-ins)
- [ ] Integration with health apps (Apple Health, Google Fit)

### Phase 4 (v3.0)
- [ ] AR companion (see companion in your space)
- [ ] Haptic feedback patterns for emotional support
- [ ] Multi-language expansion (ES, FR, DE, PT, JA)
- [ ] Offline mode (limited conversations cached)

---

*Version: 1.0.0*
*Last Updated: 2026-03-22*
