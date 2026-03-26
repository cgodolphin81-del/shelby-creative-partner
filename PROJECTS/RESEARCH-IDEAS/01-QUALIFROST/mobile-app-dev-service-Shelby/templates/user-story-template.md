# User Story Template

## User Story Format

```
As a [type of user],
I want [some goal],
So that [some reason/benefit].
```

---

## Template

### US-[Number]: [Story Title]

**As a:** [User type/role]

**I want:** [Goal/action]

**So that:** [Benefit/value]

---

### Acceptance Criteria

- [ ] [Criterion 1]
- [ ] [Criterion 2]
- [ ] [Criterion 3]
- [ ] [Criterion 4]

---

### Technical Notes

[Implementation details, technical constraints, dependencies]

---

### Design Links

- [Figma link]
- [Screenshot/mockup]

---

### Dependencies

- [ ] [Dependency 1]
- [ ] [Dependency 2]

---

### Test Cases

| Test | Steps | Expected Result |
|------|-------|-----------------|
| TC1 | [Steps] | [Result] |
| TC2 | [Steps] | [Result] |

---

### Story Points: [X]

### Priority: [Must/Should/Could/Won't]

### Sprint: [Sprint Number]

---

## Example User Stories

### Authentication

#### US-001: User Sign Up with Email

**As a:** New user

**I want:** To create an account with my email address

**So that:** I can access the app's features

**Acceptance Criteria:**
- [ ] User can enter email, password, and name
- [ ] Email validation (valid format required)
- [ ] Password requirements enforced (8+ chars, 1 number, 1 special char)
- [ ] User receives verification email
- [ ] User cannot log in until email verified
- [ ] Error messages displayed for invalid input
- [ ] Success message shown after signup

**Technical Notes:**
- Use Firebase Authentication
- Store user profile in Firestore
- Send verification email via Firebase

**Story Points:** 5

**Priority:** Must Have

---

#### US-002: User Login

**As a:** Registered user

**I want:** To log in with my email and password

**So that:** I can access my account

**Acceptance Criteria:**
- [ ] User can enter email and password
- [ ] "Forgot password" link visible
- [ ] Successful login redirects to home screen
- [ ] Failed login shows appropriate error message
- [ ] "Remember me" option persists session
- [ ] Biometric login option (if device supports)

**Technical Notes:**
- JWT token stored in secure storage
- Session expires after 30 days
- Implement rate limiting (5 attempts/hour)

**Story Points:** 3

**Priority:** Must Have

---

#### US-003: Password Reset

**As a:** User who forgot their password

**I want:** To reset my password via email

**So that:** I can regain access to my account

**Acceptance Criteria:**
- [ ] User can request password reset from login screen
- [ ] Reset link sent to email within 1 minute
- [ ] Reset link expires after 24 hours
- [ ] User can set new password meeting requirements
- [ ] User automatically logged in after reset
- [ ] Confirmation email sent after successful reset

**Story Points:** 5

**Priority:** Must Have

---

### Core Features

#### US-010: View Home Screen

**As a:** Logged-in user

**I want:** To see personalized content on the home screen

**So that:** I can quickly access relevant information

**Acceptance Criteria:**
- [ ] Welcome message with user's name
- [ ] Quick action buttons visible
- [ ] Recent activity feed displayed
- [ ] Pull to refresh works
- [ ] Loading state shown during fetch
- [ ] Empty state shown if no data

**Story Points:** 5

**Priority:** Must Have

---

#### US-011: Search for [Items]

**As a:** User

**I want:** To search for [items]

**So that:** I can find what I'm looking for quickly

**Acceptance Criteria:**
- [ ] Search bar visible on relevant screens
- [ ] Real-time search results as user types
- [ ] Search history saved (last 10 searches)
- [ ] Clear search button available
- [ ] No results state with suggestions
- [ ] Search filters available (if applicable)

**Story Points:** 8

**Priority:** Should Have

---

### Profile Management

#### US-020: Edit Profile

**As a:** User

**I want:** To edit my profile information

**So that:** I can keep my information up to date

**Acceptance Criteria:**
- [ ] User can view current profile
- [ ] User can edit name, email, phone
- [ ] User can upload profile photo
- [ ] Changes saved successfully
- [ ] Validation on required fields
- [ ] Confirmation message on save

**Story Points:** 5

**Priority:** Should Have

---

### Notifications

#### US-030: Receive Push Notifications

**As a:** User

**I want:** To receive push notifications for important events

**So that:** I stay informed even when not using the app

**Acceptance Criteria:**
- [ ] User can enable/disable notifications
- [ ] Notifications received for [events]
- [ ] Tapping notification opens relevant screen
- [ ] Notification preferences in settings
- [ ] Badge count updates correctly

**Story Points:** 8

**Priority:** Should Have

---

### Settings

#### US-040: Manage Notification Preferences

**As a:** User

**I want:** To control which notifications I receive

**So that:** I'm not overwhelmed with notifications

**Acceptance Criteria:**
- [ ] Toggle for each notification type
- [ ] Changes saved immediately
- [ ] Default preferences set on first login
- [ ] Reset to defaults option available

**Story Points:** 3

**Priority:** Could Have

---

## User Story Checklist

Before marking a story as ready for development:

- [ ] Story follows the standard format
- [ ] Acceptance criteria are clear and testable
- [ ] Technical notes included
- [ ] Design links attached (if applicable)
- [ ] Dependencies identified
- [ ] Story points assigned
- [ ] Priority assigned
- [ ] Reviewed by PM and Tech Lead

---

## Story Point Reference

| Points | Effort | Example |
|--------|--------|---------|
| 1 | Minimal | Text change, simple bug fix |
| 2 | Small | Single component, simple API call |
| 3 | Medium | Feature with 2-3 acceptance criteria |
| 5 | Large | Complex feature, multiple screens |
| 8 | Very Large | Epic, should be broken down |
| 13 | Too Large | Must be broken down |

---

## MoSCoW Priority

| Priority | Meaning | % of Sprint |
|----------|---------|-------------|
| **Must** | Critical for launch | 60% |
| **Should** | Important but not critical | 25% |
| **Could** | Nice to have | 10% |
| **Won't** | Not this sprint | 5% |

---

## Tips for Writing Good User Stories

✅ **DO:**
- Keep user-centric (As a... I want... So that...)
- Make acceptance criteria testable
- Include technical constraints
- Link to designs
- Break down large stories

❌ **DON'T:**
- Write technical tasks as user stories
- Make acceptance criteria vague
- Combine multiple features in one story
- Forget about edge cases
- Skip the "so that" (the value)
