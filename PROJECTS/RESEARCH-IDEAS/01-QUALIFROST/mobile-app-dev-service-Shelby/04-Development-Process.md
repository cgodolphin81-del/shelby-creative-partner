# 04. Development Process

Agile development workflow, sprints, testing, QA, and deployment procedures.

---

## Development Overview

```
┌─────────────────────────────────────────────────────────────┐
│                    DEVELOPMENT LIFECYCLE                     │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  Discovery → Design → Sprint 1 → Sprint 2 → ... → Sprint N  │
│                              ↓                               │
│                    QA & Testing                              │
│                              ↓                               │
│                    Beta Release                              │
│                              ↓                               │
│                    App Store Submit                          │
│                              ↓                               │
│                    Launch & Monitor                          │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## Methodology: Agile Scrum

### Why Scrum?

- ✅ Regular client visibility
- ✅ Flexible to changing requirements
- ✅ Early risk identification
- ✅ Predictable delivery rhythm
- ✅ Continuous feedback loops

### Sprint Structure

| Sprint Length | Best For | Cadence |
|---------------|----------|---------|
| 1 week | Fast-moving startups, high uncertainty | Daily standups |
| 2 weeks | **Recommended default** | Bi-weekly demos |
| 3 weeks | Enterprise, stable requirements | Tri-weekly demos |

**Our Standard: 2-week sprints**

---

## Sprint Cycle

### Sprint Timeline (2-week sprint)

```
Week 1:
├─ Mon: Sprint Planning (AM)
├─ Tue-Fri: Development
└─ Fri: Sprint Review (PM)

Week 2:
├─ Mon-Thu: Development
├─ Fri: Sprint Review + Retrospective
└─ Fri PM: Sprint Planning (next sprint)
```

### Sprint Ceremonies

#### 1. Sprint Planning (2 hours)
**Attendees:** Full team + client stakeholder (optional)

**Agenda:**
| Time | Activity |
|------|----------|
| 0-15 min | Review sprint goal |
| 15-45 min | Story walkthrough |
| 45-75 min | Estimation (planning poker) |
| 75-90 min | Commitment & task breakdown |
| 90-120 min | Q&A, clarify doubts |

**Output:** Sprint backlog with committed stories

#### 2. Daily Standup (15 minutes)
**Attendees:** Development team only

**Format:**
- What did I do yesterday?
- What will I do today?
- Any blockers?

**Tools:** Slack huddle, Zoom, or in-person

#### 3. Sprint Review (1 hour)
**Attendees:** Full team + client stakeholders

**Agenda:**
| Time | Activity |
|------|----------|
| 0-10 min | Sprint goal review |
| 10-40 min | Demo of completed work |
| 40-50 min | Feedback collection |
| 50-60 min | Next sprint preview |

**Output:** Client feedback, approved features

#### 4. Sprint Retrospective (45 minutes)
**Attendees:** Development team only

**Format:**
- What went well?
- What could be improved?
- Action items for next sprint

**Output:** Continuous improvement actions

---

## Development Workflow

### Git Workflow

**Branching Strategy: Git Flow**

```
main (production)
  │
  ├─── develop (integration)
  │      │
  │      ├─── feature/user-authentication
  │      ├─── feature/payment-integration
  │      └─── feature/profile-management
  │
  ├─── release/v1.0.0
  │
  └─── hotfix/critical-bug-fix
```

**Branch Naming:**
- `feature/[ticket-id]-[description]`
- `bugfix/[ticket-id]-[description]`
- `hotfix/[description]`
- `release/v[major].[minor].[patch]`

**Commit Message Format:**
```
[type] [ticket-id]: brief description

[Optional detailed description]

Fixes #[ticket-id]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Formatting
- `refactor`: Code restructuring
- `test`: Tests
- `chore`: Maintenance

**Example:**
```
feat [AUTH-12]: Add password reset functionality

Implemented password reset flow with email verification.
Added rate limiting to prevent abuse.

Fixes #12
```

### Code Review Process

**Requirements:**
- All PRs require 1+ reviewer approval
- PRs linked to ticket/story
- CI checks must pass
- Test coverage maintained

**PR Template:**
```markdown
## Description
[What does this PR do?]

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Unit tests added/updated
- [ ] Manual testing completed
- [ ] Screenshots (if UI change)

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Comments added where needed
- [ ] Documentation updated
```

**Review SLA:** 24 hours for standard PRs

---

## Quality Assurance

### Testing Pyramid

```
           /\
          /  \
         / E2E \        (10% - Critical paths)
        /--------\
       /          \
      / Integration \    (20% - API, modules)
     /----------------\
    /                  \
   /    Unit Tests      \  (70% - Functions, components)
  /----------------------\
```

### Testing Requirements

#### Unit Tests
**Coverage Target:** 70%+

**What to Test:**
- Business logic
- Utility functions
- Component rendering
- State management

**Tools:**
- iOS: XCTest
- Android: JUnit, Mockk
- React Native: Jest, RTL
- Flutter: flutter_test

#### Integration Tests
**Focus Areas:**
- API integrations
- Database operations
- Third-party services
- Module interactions

**Tools:**
- iOS: XCTest integration tests
- Android: Espresso
- React Native: Detox
- Flutter: integration_test

#### End-to-End Tests
**Critical Paths:**
- User registration → login
- Core feature flow
- Payment flow (if applicable)
- Error scenarios

**Tools:**
- Detox (React Native)
- Appium (cross-platform)
- Maestro (new, recommended)

### QA Checklist

**Pre-Release Checklist:**
- [ ] All user stories completed
- [ ] Unit tests passing (>70% coverage)
- [ ] Integration tests passing
- [ ] E2E tests for critical paths
- [ ] No critical/high bugs open
- [ ] Performance benchmarks met
- [ ] Security review completed
- [ ] Accessibility check (WCAG 2.1 AA)
- [ ] Analytics events implemented
- [ ] Crash reporting configured
- [ ] App icon and splash screen
- [ ] App Store assets ready

---

## Bug Severity Classification

| Severity | Definition | Response Time | Example |
|----------|------------|---------------|---------|
| Critical | App unusable, data loss | 4 hours | Crash on launch |
| High | Major feature broken | 24 hours | Payment failure |
| Medium | Feature impaired | 1 week | Slow loading |
| Low | Minor issue, workaround exists | Next sprint | UI misalignment |

### Bug Report Template

```markdown
## Title
[Brief description]

## Severity
[Critical/High/Medium/Low]

## Steps to Reproduce
1. [Step 1]
2. [Step 2]
3. [Step 3]

## Expected Behavior
[What should happen]

## Actual Behavior
[What actually happens]

## Environment
- Device: [iPhone 14, Samsung S23, etc.]
- OS: [iOS 17.1, Android 14]
- App Version: [1.0.0]

## Screenshots/Video
[Attach if applicable]

## Logs
[Attach crash logs if available]
```

---

## Continuous Integration/Deployment

### CI/CD Pipeline

```
Code Push → Lint → Test → Build → Deploy (Beta) → Notify
```

### Recommended Setup

#### GitHub Actions (React Native/Flutter)

```yaml
name: Mobile CI

on:
  push:
    branches: [develop, main]
  pull_request:
    branches: [develop, main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci
      - run: npm run lint
      - run: npm test

  build-ios:
    needs: test
    runs-on: macos-latest
    steps:
      - uses: actions/checkout@v3
      - run: npm ci
      - run: cd ios && pod install
      - run: xcodebuild -scheme App -sdk iphonesimulator

  build-android:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npm ci
      - run: cd android && ./gradlew assembleDebug
```

### Build Services

| Service | Best For | Pricing |
|---------|----------|---------|
| GitHub Actions | General CI/CD | Free-$200/mo |
| Bitrise | Mobile-focused | Free-$200/mo |
| EAS Build (Expo) | React Native/Expo | Free-$100/mo |
| Codemagic | Flutter | Free-$100/mo |
| Xcode Cloud | iOS only | $25-$200/mo |
| App Center | Microsoft ecosystem | Free-$100/mo |

---

## Deployment Process

### Environment Strategy

```
Development → Staging → Production
     │           │          │
  Local dev   TestFlight  App Store
  Simulator   Internal    Public
              Google Play
              Internal
```

### iOS Deployment

**TestFlight:**
1. Archive build in Xcode
2. Upload to App Store Connect
3. Add build to TestFlight
4. Add internal testers (team)
5. Add external testers (clients/users)
6. Submit for beta review (external only)

**App Store:**
1. Complete App Store metadata
2. Upload screenshots
3. Submit for review
4. Review time: 24-48 hours
5. Release: Manual or automatic

### Android Deployment

**Internal Testing:**
1. Build signed APK/AAB
2. Upload to Play Console
3. Add testers to internal track
4. Instant availability

**Production:**
1. Complete Play Store listing
2. Upload screenshots
3. Submit for review
4. Review time: 2-7 days
5. Rollout: Staged or full

### Deployment Checklist

**Pre-Deployment:**
- [ ] Version number incremented
- [ ] Release notes written
- [ ] Build number updated
- [ ] Environment variables configured
- [ ] API endpoints set to production
- [ ] Analytics configured for production
- [ ] Crash reporting active
- [ ] Backend ready for traffic

**Post-Deployment:**
- [ ] Monitor crash reports
- [ ] Check analytics events
- [ ] Verify critical flows
- [ ] Monitor server logs
- [ ] Respond to early reviews
- [ ] Update status page (if applicable)

---

## Documentation Standards

### Code Documentation

**Inline Comments:**
- Why, not what (code shows what)
- Complex algorithms
- Non-obvious decisions
- TODOs with ticket references

**Example:**
```javascript
// Using debounce here to prevent API rate limiting
// when user types quickly in search
const searchResults = useMemo(
  () => debounce(fetchResults, 300),
  [query]
);
```

### README Requirements

Every repository must have:
- [ ] Project description
- [ ] Setup instructions
- [ ] Environment variables
- [ ] Build commands
- [ ] Test commands
- [ ] Deployment process
- [ ] Contributing guidelines

### API Documentation

**For Custom Backends:**
- OpenAPI/Swagger spec
- Authentication details
- Rate limits
- Error codes
- Example requests/responses

**Tools:** Swagger, Postman, Redoc

---

## Sprint Artifacts

### Sprint Board (Jira/Linear/GitHub Projects)

**Columns:**
```
Backlog → Ready → In Progress → Review → QA → Done
```

**Ticket Fields:**
- Title
- Description
- Acceptance criteria
- Story points
- Assignee
- Sprint
- Labels

### Burndown Chart

Track daily progress:
- X-axis: Days in sprint
- Y-axis: Remaining story points
- Ideal line vs actual line

### Velocity Tracking

Track story points completed per sprint:
```
Sprint 1: 25 points
Sprint 2: 28 points
Sprint 3: 26 points
Average: 26 points/sprint
```

Use for future sprint planning and timeline estimates.

---

## Risk Management

### Common Risks & Mitigations

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Scope creep | High | High | Change order process, sprint boundaries |
| Key person out | Medium | High | Documentation, pair programming |
| Third-party API changes | Medium | Medium | Abstraction layers, monitoring |
| App Store rejection | Low | High | Pre-submission checklist, guidelines review |
| Performance issues | Medium | High | Early profiling, performance budgets |
| Security vulnerabilities | Low | Critical | Security review, dependency scanning |

### Escalation Path

```
Developer → Tech Lead → Project Manager → Account Director → Executive
```

**Escalation Triggers:**
- Blocker > 4 hours
- Critical bug in production
- Client complaint
- Timeline risk > 1 week
- Budget overrun risk > 10%

---

## Tools Stack

### Project Management
- **Linear** (recommended for startups)
- **Jira** (enterprise)
- **Asana** (general)
- **ClickUp** (all-in-one)

### Communication
- **Slack** (team chat)
- **Zoom** (video calls)
- **Loom** (async video updates)

### Development
- **VS Code** (editor)
- **GitHub/GitLab** (version control)
- **Figma** (design handoff)

### Testing
- **Jest** (unit tests)
- **Detox/Maestro** (E2E)
- **BrowserStack** (device testing)

### Monitoring
- **Firebase Crashlytics** (crashes)
- **Sentry** (errors)
- **Mixpanel/Amplitude** (analytics)

---

## Next Steps

1. Set up project in project management tool
2. Configure CI/CD pipeline
3. Create sprint 1 backlog
4. Begin development following sprint cycle
5. Reference [Project Management](./08-Project-Management.md) for timeline tracking
