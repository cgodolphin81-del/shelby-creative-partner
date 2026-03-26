# 02. Tech Stack Guide

Technology recommendations by use case, with pros/cons and decision frameworks.

---

## Decision Framework

```
                    ┌─────────────────┐
                    │  Project Start  │
                    └────────┬────────┘
                             │
              ┌──────────────┼──────────────┐
              │              │              │
         Need native    Need fast      Budget < $30K?
         features?      launch?            │
              │              │              │
         ┌────┴────┐   ┌────┴────┐    ┌────┴────┐
         │  Yes    │   │  Yes    │    │  Yes    │
         │         │   │         │    │         │
         ▼         │   ▼         │    ▼         │
    ┌─────────┐    │ ┌──────────┐ │ ┌──────────┐│
    │ Native  │    │ │Cross-Plat│ │ │No-Code   ││
    │(Swift/  │    │ │(RN/Flutter)│ │ │(FlutterFlow)│
    │ Kotlin) │    │ └──────────┘ │ └──────────┘│
    └─────────┘    │              │              │
                   │              │              │
                   ▼              ▼              ▼
              ┌─────────────────────────────────┐
              │      Backend + Infrastructure   │
              └─────────────────────────────────┘
```

---

## Native Development

### iOS: Swift + SwiftUI

**Best For:**
- Premium consumer apps
- Apps using latest iOS features
- AR/VR applications
- Heavy graphics/gaming
- Apps targeting iOS-first demographics

**Tech Stack:**
```
Language: Swift 5.9+
UI Framework: SwiftUI (preferred) or UIKit
Architecture: MVVM or VIPER
Dependency Management: Swift Package Manager
Networking: URLSession / Alamofire
Local Storage: CoreData / Realm / SwiftData
Async: async/await, Combine
Testing: XCTest, Quick/Nimble
CI/CD: Xcode Cloud, GitHub Actions, Bitrise
```

**Pros:**
- ✅ Best performance
- ✅ Full iOS feature access
- ✅ Apple guideline compliance
- ✅ Premium UX expectations met
- ✅ Long-term maintainability

**Cons:**
- ❌ iOS only (need separate Android)
- ❌ Higher development cost
- ❌ Longer development time
- ❌ Smaller developer pool than web

**When to Choose:**
- Budget > $80K for iOS
- App Store featured placement goals
- Complex animations/gestures
- Heavy camera/media usage
- ARKit, HealthKit, HomeKit integration

---

### Android: Kotlin + Jetpack Compose

**Best For:**
- Global market reach
- Emerging market targeting
- Hardware integration
- Custom UI requirements
- Enterprise internal tools

**Tech Stack:**
```
Language: Kotlin 1.9+
UI Framework: Jetpack Compose (preferred) or XML
Architecture: MVVM or MVI
Dependency Management: Gradle, KSP
Networking: Retrofit + OkHttp
Local Storage: Room / DataStore
Async: Coroutines + Flow
Testing: JUnit, Espresso, Mockk
CI/CD: GitHub Actions, Bitrise, GitLab CI
```

**Pros:**
- ✅ Full Android feature access
- ✅ Large global market
- ✅ Flexible distribution (Play + sideloading)
- ✅ Strong Google ecosystem
- ✅ Modern, concise language

**Cons:**
- ❌ Android only (need separate iOS)
- ❌ Device fragmentation challenges
- ❌ Longer QA cycles (many devices)
- ❌ Play Store review inconsistencies

**When to Choose:**
- Targeting emerging markets
- Hardware sensor integration
- Custom ROM/device support
- Enterprise device management
- Budget > $80K for Android

---

## Cross-Platform Development

### React Native

**Best For:**
- Web teams transitioning to mobile
- Apps with heavy JavaScript ecosystem needs
- Teams with React expertise
- Fast iteration requirements

**Tech Stack:**
```
Framework: React Native 0.73+
Language: TypeScript (required)
State Management: Redux Toolkit / Zustand / Jotai
Navigation: React Navigation v6+
UI Components: React Native Paper / NativeBase / Tamagui
Styling: StyleSheet / Styled Components / Tamagui
Networking: Axios / TanStack Query
Local Storage: AsyncStorage / WatermelonDB / Realm
Native Modules: react-native-bridge when needed
Testing: Jest, React Native Testing Library, Detox
CI/CD: GitHub Actions, EAS Build, Bitrise
```

**Pros:**
- ✅ Single codebase (iOS + Android)
- ✅ Large developer pool
- ✅ Fast development speed
- ✅ Hot reloading
- ✅ Web team skill transfer
- ✅ Massive ecosystem

**Cons:**
- ❌ Performance ceiling vs native
- ❌ Native module dependencies
- ❌ Breaking changes with RN updates
- ❌ Debugging complexity
- ❌ Larger app size

**When to Choose:**
- Budget $50K-$150K
- Need both platforms quickly
- Team has React/JavaScript expertise
- App is CRUD-heavy, not graphics-intensive
- Planning web version too (React)

**Recommended For:**
- Social apps
- E-commerce apps
- Content apps
- Business tools
- Marketplace apps

---

### Flutter

**Best For:**
- Pixel-perfect UI consistency
- Custom design systems
- Performance-critical cross-platform
- Teams open to Dart

**Tech Stack:**
```
Framework: Flutter 3.x
Language: Dart 3.x
State Management: Provider / Riverpod / Bloc
Navigation: GoRouter / AutoRoute
UI Components: Material 3 / Cupertino / Custom
Networking: Dio / http
Local Storage: Hive / SharedPreferences / Isar
Testing: flutter_test, integration_test, Mockito
CI/CD: GitHub Actions, Codemagic, Bitrise
```

**Pros:**
- ✅ Excellent performance (compiled)
- ✅ Pixel-perfect consistency
- ✅ Fast development
- ✅ Hot reload
- ✅ Growing ecosystem
- ✅ Single codebase
- ✅ Web + desktop options

**Cons:**
- ❌ Dart learning curve
- ❌ Larger app size
- ❌ Fewer third-party libraries than RN
- ❌ Less mature than React Native
- ❌ Platform-specific quirks

**When to Choose:**
- Budget $55K-$150K
- Design consistency is critical
- Performance matters but need cross-platform
- No existing React team
- Considering web/desktop expansion

**Recommended For:**
- Fintech apps
- Productivity apps
- Custom UI-heavy apps
- Startup MVPs
- Enterprise apps

---

## No-Code / Low-Code Options

### FlutterFlow

**Best For:**
- Ultra-fast MVPs
- Non-technical founders
- Simple CRUD apps
- Internal tools

**Capabilities:**
- Visual builder
- Firebase integration
- Custom code injection
- API integrations
- App store export

**Limitations:**
- Complex logic challenging
- Vendor lock-in concerns
- Scaling limitations
- Custom UI constraints

**Pricing:**
- Development: $10K-$25K
- Platform: $70-$200/month

**When to Choose:**
- Budget < $30K
- Timeline < 4 weeks
- Validating idea only
- Simple data-driven apps

---

### Bubble

**Best For:**
- Web-first applications
- Complex workflows
- Database-heavy apps
- Non-technical teams

**Capabilities:**
- Visual programming
- Database built-in
- API integrations
- Responsive design
- Plugin ecosystem

**Limitations:**
- Web-first (mobile is wrapper)
- Performance at scale
- Learning curve for complex logic
- Vendor lock-in

**Pricing:**
- Development: $15K-$40K
- Platform: $32-$500/month

---

### Adalo

**Best For:**
- Simple mobile apps
- Quick prototypes
- Basic CRUD operations

**Capabilities:**
- Drag-and-drop builder
- Database included
- App store publishing
- Component marketplace

**Limitations:**
- Limited customization
- Performance constraints
- Scaling issues

**Pricing:**
- Development: $8K-$20K
- Platform: $50-$200/month

---

## Backend & Infrastructure

### Backend Options

#### Firebase (Recommended for Startups)
```
Services:
- Authentication
- Firestore (NoSQL database)
- Cloud Functions
- Cloud Storage
- Hosting
- Analytics
- Crashlytics
- Push Notifications

Pricing: Pay-as-you-go, free tier generous
Best For: MVPs, startups, real-time apps
```

#### Supabase (Open Source Alternative)
```
Services:
- PostgreSQL database
- Authentication
- Real-time subscriptions
- Storage
- Edge Functions
- Auto-generated APIs

Pricing: Free tier + $25/month pro
Best For: SQL preference, open source advocates
```

#### Custom Backend (Node.js/Python)
```
Stack Options:
- Node.js + Express + PostgreSQL
- Python + FastAPI + PostgreSQL
- Go + Gin + PostgreSQL

Infrastructure:
- AWS (EC2, RDS, S3, Lambda)
- Google Cloud (GCE, Cloud SQL, GCS)
- Azure (VMs, SQL Database, Blob)
- DigitalOcean (simpler, cheaper)

Best For: Complex business logic, enterprise, scale
```

#### Backend-as-a-Service Comparison

| Service | Best For | Monthly Cost (Scale) | Complexity |
|---------|----------|---------------------|------------|
| Firebase | Startups, real-time | $25-$500+ | Low |
| Supabase | SQL apps, OSS | $25-$300+ | Low-Medium |
| AWS Amplify | AWS ecosystem | $50-$1000+ | Medium |
| Custom | Enterprise, complex | $200-$5000+ | High |

---

## Third-Party Integrations

### Essential Services

| Category | Recommended | Alternative | Cost |
|----------|-------------|-------------|------|
| Analytics | Firebase Analytics | Mixpanel, Amplitude | Free-$100/mo |
| Crash Reporting | Firebase Crashlytics | Sentry | Free-$50/mo |
| Push Notifications | Firebase Cloud Messaging | OneSignal | Free-$50/mo |
| Authentication | Firebase Auth | Auth0, Clerk | Free-$100/mo |
| Payments | Stripe, RevenueCat | PayPal, Paddle | 2.9% + 30¢ |
| Email | SendGrid, Resend | Mailgun, Postmark | Free-$100/mo |
| Maps | Google Maps | Mapbox | Free-$200/mo |
| Chat | Stream, SendBird | Firebase, Custom | $100-$500/mo |
| Video | Agora, Twilio | Zoom SDK | $50-$500/mo |
| Search | Algolia | Elasticsearch | Free-$200/mo |

---

## Technology Decision Matrix

### By Budget

| Budget | Recommended Stack |
|--------|------------------|
| <$30K | No-code (FlutterFlow) or MVP RN |
| $30K-$60K | React Native or Flutter (single platform) |
| $60K-$100K | React Native or Flutter (both platforms) |
| $100K-$150K | Cross-platform + custom backend |
| $150K-$250K | Native (one platform) or cross-platform + robust backend |
| $250K+ | Native (both platforms) + enterprise backend |

### By Use Case

| Use Case | Recommended Stack |
|----------|------------------|
| Social Network | React Native + Firebase |
| E-commerce | React Native + Custom Backend |
| Fintech | Native (security) + Custom Backend |
| Health/Fitness | Native (sensors) + Firebase |
| Enterprise Tool | Flutter + Custom Backend |
| Marketplace | React Native + Custom Backend |
| Content/Media | React Native + Headless CMS |
| Gaming | Unity or Native |
| AR/VR | Native (ARKit/ARCore) |
| IoT Companion | Native (Bluetooth) + Custom Backend |

### By Team Expertise

| Existing Skills | Recommended Stack |
|-----------------|------------------|
| React/Web | React Native |
| iOS (Swift) | Native iOS + consider RN later |
| Android (Kotlin) | Native Android + consider Flutter later |
| Python | Flutter + Python backend |
| Node.js | React Native + Node backend |
| No technical team | No-code (FlutterFlow) |

---

## Technology Recommendations 2025

### Our Default Recommendations

**For Most Startups:**
```
Frontend: React Native (TypeScript)
Backend: Firebase (start) → Custom Node.js (scale)
Database: Firestore → PostgreSQL
Auth: Firebase Auth
Hosting: Vercel / AWS
Monitoring: Firebase + Sentry
```

**For Enterprise:**
```
Frontend: Native (Swift + Kotlin) OR Flutter
Backend: Custom (Node.js/Python/Go)
Database: PostgreSQL
Auth: Auth0 / Custom
Infrastructure: AWS/GCP
Monitoring: DataDog + Sentry
```

**For MVP/Validation:**
```
Frontend: FlutterFlow OR React Native
Backend: Firebase
Database: Firestore
Auth: Firebase Auth
Timeline: 4-8 weeks
```

---

## Version Control & Collaboration

```
Platform: GitHub (preferred) or GitLab
Branching: Git Flow or Trunk-Based
Code Review: Required PR reviews
Documentation: README + inline comments
Project Board: GitHub Projects / Linear / Jira
```

---

## Security Best Practices

- ✅ Environment variables (never commit secrets)
- ✅ HTTPS only
- ✅ Certificate pinning (sensitive apps)
- ✅ Biometric authentication option
- ✅ Data encryption at rest
- ✅ Regular dependency updates
- ✅ Security audits before launch
- ✅ OWASP Mobile Top 10 compliance

---

## Next Steps

1. Use this guide to recommend stack based on client needs
2. Reference [Discovery Process](./03-Discovery-Process.md) for requirements gathering
3. Create technical spec using [templates/technical-spec-template.md](./templates/technical-spec-template.md)
