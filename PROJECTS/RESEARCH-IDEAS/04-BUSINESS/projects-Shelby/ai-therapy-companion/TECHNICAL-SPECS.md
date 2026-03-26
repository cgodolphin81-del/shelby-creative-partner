# MindfulAI - Technical Specifications

**Version:** 1.0.0  
**Status:** Implementation Ready

---

## 1. API Specifications

### 1.1 Authentication Endpoints

```yaml
POST /api/v1/auth/register
  description: Create new user account
  rate_limit: 5/hour
  body:
    email: string (required, validated)
    password: string (required, min 12 chars, complexity)
    age_verified: boolean (required, must be true)
    terms_accepted: boolean (required, must be true)
    disclaimer_accepted: boolean (required, must be true)
    marketing_opt_in: boolean (optional, default false)
  response:
    user_id: uuid
    email: string
    created_at: timestamp
    access_token: jwt
    refresh_token: jwt
    requires_email_verification: boolean

POST /api/v1/auth/login
  body:
    email: string
    password: string
    mfa_code: string (optional, if enabled)
  response:
    access_token: jwt
    refresh_token: jwt
    user_id: uuid
    mfa_required: boolean

POST /api/v1/auth/refresh
  body:
    refresh_token: string
  response:
    access_token: jwt
    refresh_token: jwt

POST /api/v1/auth/logout
  headers:
    Authorization: Bearer <token>
  response:
    success: boolean

POST /api/v1/auth/password/reset
  body:
    email: string
  response:
    message: "Reset email sent if account exists"

PUT /api/v1/auth/password
  headers:
    Authorization: Bearer <token>
  body:
    current_password: string
    new_password: string
```

### 1.2 Conversation Endpoints

```yaml
POST /api/v1/conversations
  description: Start new conversation session
  headers:
    Authorization: Bearer <token>
  body:
    topic: string (optional)
    mood: string (optional, enum: sad, anxious, angry, joyful, calm, overwhelmed)
  response:
    conversation_id: uuid
    session_token: string
    created_at: timestamp

POST /api/v1/conversations/{id}/message
  description: Send message in conversation
  headers:
    Authorization: Bearer <token>
  body:
    text: string (required, max 2000 chars)
    voice_audio: base64 (optional, if voice input)
  response:
    message_id: uuid
    ai_response: string
    detected_mood: object
      valence: number (-1 to 1)
      arousal: number (0 to 1)
      emotions: array
    techniques_used: array
    crisis_flag: boolean
    crisis_resources: object (if crisis detected)
    suggested_actions: array
    timestamp: timestamp

GET /api/v1/conversations/{id}
  description: Get conversation history
  response:
    conversation_id: uuid
    messages: array
      - role: "user" | "assistant"
        content: string
        timestamp: timestamp
        mood_detected: object (assistant messages only)
    created_at: timestamp
    updated_at: timestamp

DELETE /api/v1/conversations/{id}
  description: Delete conversation
  response:
    success: boolean

GET /api/v1/conversations
  description: List user's conversations (paginated)
  query_params:
    limit: number (default 20, max 100)
    offset: number
    date_from: date (optional)
    date_to: date (optional)
  response:
    conversations: array
    total: number
    has_more: boolean
```

### 1.3 Mood Tracking Endpoints

```yaml
POST /api/v1/mood/check-in
  description: Log mood check-in
  headers:
    Authorization: Bearer <token>
  body:
    mood_score: number (1-10, required)
    emotions: array (required, min 1)
      - emotion: string
        intensity: number (1-5)
    energy_level: number (1-5, optional)
    sleep_hours: number (optional)
    sleep_quality: number (1-5, optional)
    notes: string (optional, max 500 chars)
    tags: array (optional)
  response:
    check_in_id: uuid
    mood_score: number
    timestamp: timestamp
    insights: array (optional, if patterns detected)

GET /api/v1/mood/trends
  description: Get mood trends
  query_params:
    period: string (7d, 30d, 90d, 1y, all)
    granularity: string (day, week, month)
  response:
    data_points: array
      - date: date
        avg_mood: number
        check_ins: number
        top_emotions: array
    summary: object
      avg_mood: number
      trend: "improving" | "stable" | "declining"
      best_day: string
      challenging_day: string
    correlations: array (optional)
      - factor: "sleep" | "exercise" | "journaling"
        correlation: number
        insight: string

GET /api/v1/mood/insights
  response:
    insights: array
      - type: "pattern" | "milestone" | "suggestion"
        title: string
        description: string
        data_support: object
```

### 1.4 Journal Endpoints

```yaml
POST /api/v1/journal/entries
  headers:
    Authorization: Bearer <token>
  body:
    content: string (required, max 10000 chars)
    mood: string (optional)
    tags: array (optional)
    is_voice_transcript: boolean (default false)
    attachments: array (optional)
      - type: "image" | "audio"
        url: string
    encrypted: boolean (default false)
  response:
    entry_id: uuid
    created_at: timestamp
    word_count: number

GET /api/v1/journal/entries/{id}
  response:
    entry_id: uuid
    content: string
    mood: string
    tags: array
    attachments: array
    created_at: timestamp
    updated_at: timestamp

GET /api/v1/journal/entries
  query_params:
    limit: number
    offset: number
    tag: string (filter by tag)
    date_from: date
    date_to: date
    search: string (full-text search)
  response:
    entries: array
    total: number
    has_more: boolean

PUT /api/v1/journal/entries/{id}
  body:
    content: string
    mood: string
    tags: array
  response:
    entry_id: uuid
    updated_at: timestamp

DELETE /api/v1/journal/entries/{id}
  response:
    success: boolean

POST /api/v1/journal/prompts
  description: Get personalized journal prompt
  body:
    category: string (optional: self-discovery, emotional, gratitude, cbt, future)
    mood: string (optional, for mood-appropriate prompt)
  response:
    prompt_id: uuid
    prompt_text: string
    category: string
    suggested_duration: number (minutes)
```

### 1.5 Breathing & Meditation Endpoints

```yaml
GET /api/v1/breathing/exercises
  response:
    exercises: array
      - id: string
        name: string
        duration_seconds: number
        difficulty: "beginner" | "intermediate" | "advanced"
        purpose: array
        instructions: array
        audio_url: string (optional)
        haptic_pattern: string (optional)

GET /api/v1/breathing/exercises/{id}
  response:
    exercise: object

POST /api/v1/breathing/sessions
  description: Log breathing session
  body:
    exercise_id: string
    duration_seconds: number
    completed: boolean
    mood_before: number (1-10, optional)
    mood_after: number (1-10, optional)
  response:
    session_id: uuid
    completed_at: timestamp

GET /api/v1/meditation/sessions
  query_params:
    category: string (optional)
    duration: string (optional: 5, 10, 20, 30)
    difficulty: string (optional)
  response:
    sessions: array
      - id: string
        title: string
        description: string
        duration_seconds: number
        category: string
        difficulty: string
        voice: string
        audio_url: string
        transcript: string (Pro+)
        background_sound: array

POST /api/v1/meditation/sessions/{id}/complete
  body:
    duration_listened: number
    mood_before: number (optional)
    mood_after: number (optional)
  response:
    session_id: uuid
    completed_at: timestamp
```

### 1.6 User Profile Endpoints

```yaml
GET /api/v1/users/me
  response:
    user_id: uuid
    email: string
    profile: object
      display_name: string
      avatar_url: string (optional)
      timezone: string
      language: string
    preferences: object
      communication_style: string
      notification_times: array
      voice_preference: string
      session_length: string
    subscription: object
      tier: "free" | "pro" | "therapy_connect"
      status: "active" | "trial" | "cancelled" | "expired"
      started_at: timestamp
      renew_at: timestamp
    stats: object
      total_conversations: number
      total_journal_entries: number
      check_in_streak: number
      member_since: timestamp

PUT /api/v1/users/me
  body:
    display_name: string (optional)
    timezone: string (optional)
    language: string (optional)
    preferences: object (optional)

GET /api/v1/users/me/data-export
  response:
    export_id: uuid
    status: "pending" | "ready" | "failed"
    download_url: string (when ready, expires 24h)
    formats: array

POST /api/v1/users/me/data-export
  response:
    export_id: uuid
    status: "pending"
    estimated_time: number (seconds)

DELETE /api/v1/users/me
  description: Delete account (GDPR right to erasure)
  body:
    confirmation: string (must be "DELETE MY ACCOUNT")
    password: string
  response:
    deletion_scheduled: timestamp
    grace_period_days: 30
```

### 1.7 Subscription Endpoints

```yaml
GET /api/v1/subscription/plans
  response:
    plans: array
      - id: "free"
        name: "Free"
        price: 0
        currency: "USD"
        interval: "month"
        features: array
        limits: object
      - id: "pro_monthly"
        name: "Pro"
        price: 9.99
        currency: "USD"
        interval: "month"
        features: array
        limits: object
      - id: "pro_annual"
        name: "Pro Annual"
        price: 99.99
        currency: "USD"
        interval: "year"
        features: array
        limits: object
        savings: string
      - id: "therapy_connect"
        name: "Therapy Connect"
        price: 49.99
        currency: "USD"
        interval: "month"
        features: array
        limits: object

POST /api/v1/subscription/upgrade
  body:
    plan_id: string
    payment_method_id: string
  response:
    subscription_id: uuid
    plan_id: string
    status: "active"
    current_period_start: timestamp
    current_period_end: timestamp

POST /api/v1/subscription/cancel
  body:
    cancel_at_period_end: boolean (default true)
    reason: string (optional)
  response:
    subscription_id: uuid
    cancel_at: timestamp
    access_until: timestamp

GET /api/v1/subscription/invoices
  response:
    invoices: array
      - id: string
        amount: number
        currency: string
        status: "paid" | "pending" | "failed"
        date: timestamp
        pdf_url: string
```

### 1.8 Crisis & Safety Endpoints

```yaml
GET /api/v1/safety/resources
  query_params:
    country: string (ISO code, from user location/IP)
  response:
    crisis_lines: array
      - name: string
        phone: string
        text: string
        chat_url: string
        hours: string
        specialties: array
    emergency: object
      phone: string (e.g., "911", "999", "112")
      instruction: string
    therapist_finder: object
      url: string
      description: string

POST /api/v1/safety/incident-report
  description: Report safety concern (user or automated)
  headers:
    Authorization: Bearer <token>
  body:
    conversation_id: uuid (optional)
    concern_type: "self_harm" | "violence" | "abuse" | "other"
    description: string
    urgency: "low" | "medium" | "high" | "critical"
  response:
    report_id: uuid
    status: "submitted"
    follow_up: object (if human review needed)

GET /api/v1/safety/emergency-contacts
  response:
    contacts: array
      - id: uuid
        name: string
        relationship: string
        phone: string
        notified: boolean (if ever contacted)

POST /api/v1/safety/emergency-contacts
  body:
    name: string
    relationship: string
    phone: string
  response:
    contact: object

PUT /api/v1/safety/emergency-contacts/{id}
DELETE /api/v1/safety/emergency-contacts/{id}
```

---

## 2. Database Schema

### 2.1 Core Tables

```sql
-- Users table
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    email_verified BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    deleted_at TIMESTAMP WITH TIME ZONE,
    last_login_at TIMESTAMP WITH TIME ZONE,
    
    -- Profile
    display_name VARCHAR(100),
    avatar_url TEXT,
    timezone VARCHAR(50) DEFAULT 'UTC',
    language VARCHAR(10) DEFAULT 'en',
    
    -- Security
    mfa_enabled BOOLEAN DEFAULT FALSE,
    mfa_secret VARCHAR(255),
    
    -- Compliance
    terms_accepted_at TIMESTAMP WITH TIME ZONE,
    disclaimer_accepted_at TIMESTAMP WITH TIME ZONE,
    gdpr_consent_at TIMESTAMP WITH TIME ZONE,
    
    INDEX idx_users_email (email),
    INDEX idx_users_created (created_at),
    INDEX idx_users_deleted (deleted_at)
);

-- User profiles (extended info, optional)
CREATE TABLE user_profiles (
    user_id UUID PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
    age_range VARCHAR(20),
    gender_identity VARCHAR(100),
    country VARCHAR(2),
    seeking_help_for TEXT[],
    therapy_status VARCHAR(50),
    communication_style VARCHAR(50) DEFAULT 'gentle',
    notification_times TEXT[] DEFAULT '{morning,evening}',
    voice_preference VARCHAR(50) DEFAULT 'neutral',
    data_sharing_level VARCHAR(50) DEFAULT 'minimal',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Subscriptions
CREATE TABLE subscriptions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    plan_id VARCHAR(50) NOT NULL,
    status VARCHAR(50) NOT NULL,
    current_period_start TIMESTAMP WITH TIME ZONE NOT NULL,
    current_period_end TIMESTAMP WITH TIME ZONE NOT NULL,
    cancel_at_period_end BOOLEAN DEFAULT FALSE,
    cancelled_at TIMESTAMP WITH TIME ZONE,
    payment_method_id VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    INDEX idx_subscriptions_user (user_id),
    INDEX idx_subscriptions_status (status),
    INDEX idx_subscriptions_end (current_period_end)
);

-- Conversations
CREATE TABLE conversations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    session_token VARCHAR(255) UNIQUE NOT NULL,
    topic VARCHAR(255),
    initial_mood VARCHAR(50),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    ended_at TIMESTAMP WITH TIME ZONE,
    
    INDEX idx_conversations_user (user_id),
    INDEX idx_conversations_created (created_at)
);

-- Messages
CREATE TABLE messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    conversation_id UUID NOT NULL REFERENCES conversations(id) ON DELETE CASCADE,
    role VARCHAR(20) NOT NULL CHECK (role IN ('user', 'assistant')),
    content TEXT NOT NULL,
    content_encrypted TEXT, -- For E2EE option
    mood_detected JSONB,
    techniques_used TEXT[],
    crisis_flag BOOLEAN DEFAULT FALSE,
    crisis_score INTEGER,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    INDEX idx_messages_conversation (conversation_id),
    INDEX idx_messages_created (created_at),
    INDEX idx_messages_crisis (crisis_flag) WHERE crisis_flag = TRUE
);

-- Mood check-ins
CREATE TABLE mood_check_ins (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    mood_score INTEGER NOT NULL CHECK (mood_score BETWEEN 1 AND 10),
    emotions JSONB NOT NULL,
    energy_level INTEGER CHECK (energy_level BETWEEN 1 AND 5),
    sleep_hours DECIMAL(3,1),
    sleep_quality INTEGER CHECK (sleep_quality BETWEEN 1 AND 5),
    notes TEXT,
    tags TEXT[],
    check_in_type VARCHAR(50) DEFAULT 'manual', -- manual, morning, evening
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    INDEX idx_mood_user (user_id),
    INDEX idx_mood_created (user_id, created_at),
    INDEX idx_mood_score (user_id, mood_score)
);

-- Journal entries
CREATE TABLE journal_entries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    content TEXT NOT NULL,
    content_encrypted TEXT, -- For E2EE
    mood VARCHAR(50),
    tags TEXT[],
    word_count INTEGER,
    is_voice_transcript BOOLEAN DEFAULT FALSE,
    encrypted BOOLEAN DEFAULT FALSE,
    encryption_key_id VARCHAR(255), -- If user-managed encryption
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    INDEX idx_journal_user (user_id),
    INDEX idx_journal_created (user_id, created_at),
    INDEX idx_journal_tags (user_id, tags)
);

-- Breathing sessions
CREATE TABLE breathing_sessions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    exercise_id VARCHAR(100) NOT NULL,
    duration_seconds INTEGER NOT NULL,
    completed BOOLEAN DEFAULT TRUE,
    mood_before INTEGER CHECK (mood_before BETWEEN 1 AND 10),
    mood_after INTEGER CHECK (mood_after BETWEEN 1 AND 10),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    INDEX idx_breathing_user (user_id),
    INDEX idx_breathing_created (user_id, created_at)
);

-- Meditation sessions
CREATE TABLE meditation_sessions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    session_id VARCHAR(100) NOT NULL,
    duration_listened INTEGER NOT NULL,
    mood_before INTEGER CHECK (mood_before BETWEEN 1 AND 10),
    mood_after INTEGER CHECK (mood_after BETWEEN 1 AND 10),
    completed BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    INDEX idx_meditation_user (user_id),
    INDEX idx_meditation_created (user_id, created_at)
);

-- Emergency contacts
CREATE TABLE emergency_contacts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    relationship VARCHAR(100),
    phone VARCHAR(50) NOT NULL,
    email VARCHAR(255),
    notified_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    INDEX idx_contacts_user (user_id)
);

-- Safety incident reports
CREATE TABLE safety_reports (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE SET NULL,
    conversation_id UUID REFERENCES conversations(id) ON DELETE SET NULL,
    concern_type VARCHAR(50) NOT NULL,
    description TEXT NOT NULL,
    urgency VARCHAR(20) NOT NULL,
    status VARCHAR(50) DEFAULT 'submitted',
    reviewed_by UUID, -- Admin/clinician user_id
    reviewed_at TIMESTAMP WITH TIME ZONE,
    action_taken TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    INDEX idx_reports_status (status),
    INDEX idx_reports_urgency (urgency),
    INDEX idx_reports_created (created_at)
);

-- Audit logs (compliance)
CREATE TABLE audit_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID,
    action VARCHAR(100) NOT NULL,
    resource_type VARCHAR(50),
    resource_id UUID,
    ip_address INET,
    user_agent TEXT,
    metadata JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    INDEX idx_audit_user (user_id),
    INDEX idx_audit_action (action),
    INDEX idx_audit_created (created_at)
);
```

---

## 3. AI System Architecture

### 3.1 Conversation Pipeline

```python
# Core conversation handler
class ConversationHandler:
    def __init__(self, user_id: str, llm_client, safety_service, technique_selector):
        self.user_id = user_id
        self.llm = llm_client
        self.safety = safety_service
        self.techniques = technique_selector
        self.memory = ConversationMemory(user_id)
    
    async def process_message(self, user_input: str) -> AIResponse:
        # Step 1: Safety check (blocking)
        safety_result = await self.safety.analyze(user_input)
        if safety_result.crisis_level == CRITICAL:
            return self.crisis_response(safety_result)
        
        # Step 2: Emotion & intent detection
        emotion = await self.detect_emotion(user_input)
        intent = await self.classify_intent(user_input)
        
        # Step 3: Retrieve context
        context = self.memory.get_relevant_context(user_input, limit=10)
        user_profile = await self.get_user_profile()
        
        # Step 4: Select therapeutic technique
        technique = self.techniques.select(
            emotion=emotion,
            intent=intent,
            user_history=user_profile.history,
            effectiveness=user_profile.effectiveness_data
        )
        
        # Step 5: Generate response
        system_prompt = self.build_system_prompt(technique, user_profile)
        response = await self.llm.generate(
            system_prompt=system_prompt,
            user_message=user_input,
            context=context,
            temperature=0.7,
            max_tokens=500
        )
        
        # Step 6: Safety filter on output
        filtered_response = await self.safety.filter_output(response)
        
        # Step 7: Store and return
        await self.memory.store(user_input, filtered_response, emotion, technique)
        
        return AIResponse(
            text=filtered_response,
            emotion=emotion,
            technique=technique,
            suggested_actions=self.generate_actions(technique),
            crisis_resources=safety_result.resources if safety_result.elevated else None
        )
```

### 3.2 Crisis Detection Model

```python
class CrisisDetectionService:
    def __init__(self):
        self.keyword_classifier = load_model('crisis_keywords_v1')
        self.semantic_model = load_model('crisis_semantic_bert')
        self.pattern_detector = PatternDetector()
    
    async def analyze(self, text: str, user_id: str) -> CrisisResult:
        # Layer 1: Keyword matching (fast)
        keyword_score = self.keyword_classifier.score(text)
        
        # Layer 2: Semantic analysis
        semantic_score = await self.semantic_model.predict(text)
        
        # Layer 3: Behavioral patterns
        pattern_score = self.pattern_detector.analyze(user_id)
        
        # Weighted combination
        total_score = (
            keyword_score * 0.4 +
            semantic_score * 0.4 +
            pattern_score * 0.2
        )
        
        # Determine level
        if total_score >= 80:
            level = CrisisLevel.CRITICAL
        elif total_score >= 60:
            level = CrisisLevel.HIGH
        elif total_score >= 30:
            level = CrisisLevel.ELEVATED
        else:
            level = CrisisLevel.NORMAL
        
        return CrisisResult(
            level=level,
            score=total_score,
            factors=self.identify_factors(text),
            resources=self.get_resources(user_id, level)
        )
```

### 3.3 Technique Selection Engine

```python
class TechniqueSelector:
    TECHNIQUES = {
        'validation': {
            'triggers': ['sadness', 'grief', 'loss', 'feeling unheard'],
            'response_template': 'validation_response',
            'effectiveness_weight': 1.0
        },
        'cognitive_restructuring': {
            'triggers': ['negative self-talk', 'catastrophizing', 'all-or-nothing'],
            'response_template': 'cbt_restructure',
            'effectiveness_weight': 1.0
        },
        'breathing_exercise': {
            'triggers': ['anxiety', 'panic', 'overwhelmed', 'racing thoughts'],
            'response_template': 'breathing_intro',
            'effectiveness_weight': 1.0
        },
        'behavioral_activation': {
            'triggers': ['low motivation', 'depression', 'withdrawal'],
            'response_template': 'activation_prompt',
            'effectiveness_weight': 1.0
        },
        'mindfulness': {
            'triggers': ['rumination', 'worry', 'past/future focus'],
            'response_template': 'mindfulness_intro',
            'effectiveness_weight': 1.0
        },
        'problem_solving': {
            'triggers': ['stuck', 'overwhelmed', 'decision needed'],
            'response_template': 'problem_solving_framework',
            'effectiveness_weight': 1.0
        }
    }
    
    def select(self, emotion: Emotion, intent: Intent, 
               user_history: dict, effectiveness: dict) -> Technique:
        # Get candidate techniques based on emotion/intent
        candidates = []
        for tech_name, tech_config in self.TECHNIQUES.items():
            if self.matches_triggers(emotion, intent, tech_config['triggers']):
                candidates.append(tech_name)
        
        if not candidates:
            return self.TECHNIQUES['validation']
        
        # Weight by user-specific effectiveness
        scored = []
        for tech in candidates:
            base_score = self.TECHNIQUES[tech]['effectiveness_weight']
            user_effectiveness = effectiveness.get(tech, 0.5)
            recency_bonus = self.recency_bonus(user_history, tech)
            scored.append((tech, base_score * user_effectiveness * recency_bonus))
        
        # Select highest scored (with some exploration)
        if random.random() < 0.1:  # 10% exploration
            return random.choice(candidates)
        
        best = max(scored, key=lambda x: x[1])
        return self.TECHNIQUES[best[0]]
```

---

## 4. Security Implementation

### 4.1 Encryption at Rest

```python
from cryptography.fernet import Fernet
from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.primitives.kdf.pbkdf2 import PBKDF2HMAC
import base64
import os

class EncryptionService:
    def __init__(self, master_key: bytes):
        self.master_key = master_key
    
    def derive_user_key(self, user_id: str, salt: bytes) -> bytes:
        """Derive user-specific encryption key"""
        kdf = PBKDF2HMAC(
            algorithm=hashes.SHA256(),
            length=32,
            salt=salt,
            iterations=100000,
        )
        key = base64.urlsafe_b64encode(kdf.derive(
            self.master_key + user_id.encode()
        ))
        return key
    
    def encrypt_journal(self, content: str, user_key: bytes) -> str:
        """Encrypt journal entry with user's key"""
        f = Fernet(user_key)
        encrypted = f.encrypt(content.encode())
        return base64.b64encode(encrypted).decode()
    
    def decrypt_journal(self, encrypted_content: str, user_key: bytes) -> str:
        """Decrypt journal entry"""
        f = Fernet(user_key)
        decoded = base64.b64decode(encrypted_content.encode())
        decrypted = f.decrypt(decoded)
        return decrypted.decode()
```

### 4.2 API Security Middleware

```python
from fastapi import Request, HTTPException, status
from jose import JWTError, jwt
import time

class SecurityMiddleware:
    def __init__(self, secret_key: str, algorithm: str = "HS256"):
        self.secret_key = secret_key
        self.algorithm = algorithm
    
    async def verify_token(self, request: Request) -> dict:
        """Verify JWT token from Authorization header"""
        auth_header = request.headers.get("Authorization")
        if not auth_header or not auth_header.startswith("Bearer "):
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Missing or invalid authorization"
            )
        
        token = auth_header.split(" ")[1]
        
        try:
            payload = jwt.decode(token, self.secret_key, algorithms=[self.algorithm])
            user_id: str = payload.get("sub")
            exp: int = payload.get("exp")
            
            if user_id is None or exp < time.time():
                raise HTTPException(
                    status_code=status.HTTP_401_UNAUTHORIZED,
                    detail="Invalid or expired token"
                )
            
            return {"user_id": user_id, "payload": payload}
            
        except JWTError:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Token verification failed"
            )
    
    async def rate_limit(self, request: Request, user_id: str, limit: int, window: int):
        """Rate limiting check"""
        # Implementation with Redis
        pass
```

---

## 5. Infrastructure Deployment

### 5.1 Kubernetes Configuration

```yaml
# deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: mindfulai-api
  namespace: production
spec:
  replicas: 5
  selector:
    matchLabels:
      app: mindfulai-api
  template:
    metadata:
      labels:
        app: mindfulai-api
    spec:
      containers:
      - name: api
        image: mindfulai/api:latest
        ports:
        - containerPort: 8000
        env:
        - name: DATABASE_URL
          valueFrom:
            secretKeyRef:
              name: mindfulai-secrets
              key: database-url
        - name: JWT_SECRET
          valueFrom:
            secretKeyRef:
              name: mindfulai-secrets
              key: jwt-secret
        - name: ENCRYPTION_KEY
          valueFrom:
            secretKeyRef:
              name: mindfulai-secrets
              key: encryption-key
        resources:
          requests:
            memory: "512Mi"
            cpu: "250m"
          limits:
            memory: "1Gi"
            cpu: "500m"
        livenessProbe:
          httpGet:
            path: /health
            port: 8000
          initialDelaySeconds: 30
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /ready
            port: 8000
          initialDelaySeconds: 5
          periodSeconds: 5
---
apiVersion: v1
kind: Service
metadata:
  name: mindfulai-api
  namespace: production
spec:
  selector:
    app: mindfulai-api
  ports:
  - port: 80
    targetPort: 8000
  type: ClusterIP
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: mindfulai-ingress
  annotations:
    kubernetes.io/ingress.class: nginx
    cert-manager.io/cluster-issuer: letsencrypt-prod
    nginx.ingress.kubernetes.io/ssl-redirect: "true"
spec:
  tls:
  - hosts:
    - api.mindfulai.com
    secretName: mindfulai-tls
  rules:
  - host: api.mindfulai.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: mindfulai-api
            port:
              number: 80
```

### 5.2 Database Configuration

```yaml
# RDS PostgreSQL configuration
{
  "DBInstanceClass": "db.r6g.xlarge",
  "AllocatedStorage": 100,
  "MaxAllocatedStorage": 500,
  "Engine": "postgres",
  "EngineVersion": "15.4",
  "MultiAZ": true,
  "StorageEncrypted": true,
  "KmsKeyId": "arn:aws:kms:us-east-1:123456789:key/...",
  "BackupRetentionPeriod": 30,
  "PreferredBackupWindow": "03:00-04:00",
  "AutoMinorVersionUpgrade": true,
  "PubliclyAccessible": false,
  "VpcSecurityGroupIds": ["sg-..."],
  "DBSubnetGroupName": "mindfulai-db-subnet",
  "CloudwatchLogsExportConfiguration": {
    "EnableLogTypes": ["postgresql", "upgrade"]
  },
  "PerformanceInsightsEnabled": true,
  "PerformanceInsightsRetentionPeriod": 7,
  "EnhancedMonitoringInterval": 60
}
```

---

## 6. Monitoring & Alerting

### 6.1 Key Metrics

```yaml
# Datadog metrics to track
metrics:
  # API Performance
  - name: api.request.latency
    type: distribution
    tags: [endpoint, method, status_code]
    alert: p95 > 500ms
  
  - name: api.request.rate
    type: count
    tags: [endpoint, status_code]
  
  - name: api.error.rate
    type: count
    tags: [endpoint, error_type]
    alert: > 1% of requests
  
  # AI Performance
  - name: ai.response.latency
    type: distribution
    tags: [model, endpoint]
    alert: p95 > 2s
  
  - name: ai.crisis_detection.rate
    type: count
    tags: [severity_level]
  
  # Business Metrics
  - name: user.conversations.daily
    type: count
    tags: [tier]
  
  - name: user.retention.d7
    type: gauge
  
  - name: subscription.conversion.rate
    type: gauge
    tags: [from_tier, to_tier]
  
  # Safety
  - name: safety.incidents.reported
    type: count
    tags: [urgency, type]
    alert: immediate page for critical
  
  - name: safety.escalation.response_time
    type: distribution
    alert: p95 > 15min

# Alert channels
alerts:
  critical:
    channels: [pagerduty, slack-critical]
    conditions:
      - safety.crisis_detected AND NOT human_notified
      - api.error.rate > 5%
      - database.connections > 90%
  
  warning:
    channels: [slack-warnings]
    conditions:
      - api.latency.p95 > 500ms
      - ai.latency.p95 > 2s
      - subscription.churn.rate > 10%
```

---

**Document Version:** 1.0  
**Last Updated:** March 23, 2026
