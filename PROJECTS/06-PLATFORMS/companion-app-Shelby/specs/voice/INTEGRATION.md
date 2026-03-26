# Voice Mode Integration Specification

## Overview

SoulSpace Voice Mode enables real-time, natural voice conversations with AI companions using ElevenLabs' Conversational AI. This creates a more intimate, human-like experience.

---

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     VOICE MODE FLOW                          │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌──────────┐     ┌──────────┐     ┌──────────┐            │
│  │  Mobile  │────▶│  Eleven  │────▶│  SoulSpace│            │
│  │   App    │     │  Labs    │     │  Backend  │            │
│  │          │     │  Conv AI │     │           │            │
│  │ - Mic    │     │          │     │ - Context │            │
│  │ - Speaker│     │ - STT    │     │ - Memory  │            │
│  │ - UI     │     │ - LLM    │     │ - Safety  │            │
│  └──────────┘     │ - TTS    │     │ - Logging │            │
│        │          └──────────┘     └──────────┘            │
│        │                │                  │                 │
│        └────────────────┼──────────────────┘                 │
│                         │                                    │
│                  WebSocket (bidirectional)                   │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## ElevenLabs Conversational AI Setup

### Configuration
```typescript
interface VoiceAgentConfig {
  agentId: string;
  name: string;
  voiceId: string;
  model: 'eleven_turbo_v2' | 'eleven_monolingual_v1';
  language: string;
  temperature: number;
  systemPrompt: string;
  firstMessage: string;
  maxDurationSeconds: number;
  transcriptionModel: 'default' | 'enhanced';
}
```

### Companion Voice Mappings
```typescript
const COMPANION_VOICE_CONFIGS = {
  maya: {
    voiceId: 'EXAVITQu4vr4xnSDxMaL', // "Bella" - warm, nurturing
    stability: 0.65,
    clarity: 0.75,
    style: 0.50,
    speakingRate: 0.90,
    pitch: 0.0,
  },
  alex: {
    voiceId: 'TxGEqnHWrfWFTfGW9XjX', // "Josh" - calm, authoritative
    stability: 0.75,
    clarity: 0.80,
    style: 0.40,
    speakingRate: 1.00,
    pitch: -2.0,
  },
  luna: {
    voiceId: 'jBpfuIE2acCO8z3wKNLl', // "Gigi" - expressive, soft
    stability: 0.55,
    clarity: 0.70,
    style: 0.70,
    speakingRate: 0.95,
    pitch: 2.0,
  },
  sam: {
    voiceId: 'VR6AewLTigWG4xSOukaG', // "Adam" - casual, friendly
    stability: 0.60,
    clarity: 0.75,
    style: 0.55,
    speakingRate: 1.05,
    pitch: 0.0,
  },
  river: {
    voiceId: 'g5CIjZEefAph4nQFvHAz', // "Domi" - calm, grounded
    stability: 0.80,
    clarity: 0.85,
    style: 0.30,
    speakingRate: 0.85,
    pitch: -4.0,
  },
};
```

### Agent Creation (Backend Setup)
```python
async def create_voice_agent(companion: Companion) -> VoiceAgent:
    """
    Create ElevenLabs Conversational AI agent for a companion.
    """
    voice_config = COMPANION_VOICE_CONFIGS[companion.id]
    
    agent_config = {
        "name": f"SoulSpace - {companion.name}",
        "voice_id": voice_config['voiceId'],
        "model": "eleven_turbo_v2",
        "language": "en",
        "temperature": 0.6,
        "system_prompt": build_voice_system_prompt(companion),
        "first_message": companion.greeting,
        "max_duration_seconds": 1800,  # 30 minutes
        "transcription_model": "enhanced",
        "voice_settings": {
            "stability": voice_config['stability'],
            "similarity_boost": voice_config['clarity'],
            "style": voice_config['style'],
            "speed": voice_config['speakingRate'],
        }
    }
    
    response = await elevenlabs_client.create_agent(agent_config)
    return VoiceAgent(id=response['agent_id'], config=agent_config)

def build_voice_system_prompt(companion: Companion) -> str:
    """
    Build optimized prompt for voice conversation.
    Voice prompts should be more concise than text.
    """
    return f"""
You are {companion.name}, a compassionate emotional support companion.

PERSONALITY: {', '.join(companion.traits)}
STYLE: {companion.communication_style}

VOICE CONVERSATION GUIDELINES:
1. Keep responses concise (2-3 sentences typical)
2. Use natural speech patterns (contractions, occasional pauses)
3. Acknowledge what you hear before responding
4. Ask clarifying questions when needed
5. Never diagnose or give medical advice
6. If user mentions self-harm, express care and share resources

SPECIAL PROTOCOLS:
- If user seems suicidal: "I care about your safety. Can I share some resources?"
- If user asks for advice: "I can share what's helped others, but you know yourself best"
- If conversation lulls: "What else is on your mind?" or gentle check-in

Remember: You're having a conversation, not giving a speech.
"""
```

---

## WebSocket Connection Flow

### Connection Establishment
```typescript
// Client-side (React Native)
const connectVoiceSession = async (companionId: string) => {
  // 1. Get signed session token from backend
  const { sessionToken, agentId } = await api.post('/voice/session', {
    userId: currentUser.id,
    companionId,
  });
  
  // 2. Connect to ElevenLabs WebSocket
  const ws = new WebSocket(
    `wss://api.elevenlabs.io/v1/convai/converse?agent_id=${agentId}`
  );
  
  ws.onopen = () => {
    // Send authentication
    ws.send(JSON.stringify({
      type: 'authentication',
      token: sessionToken,
    }));
  };
  
  ws.onmessage = (event) => {
    const message = JSON.parse(event.data);
    handleVoiceMessage(message);
  };
  
  return ws;
};
```

### Message Types
```typescript
type VoiceMessageType =
  | { type: 'user_transcript'; text: string; is_final: boolean }
  | { type: 'agent_response'; text: string; audio_url?: string }
  | { type: 'interruption'; user_spoke: boolean }
  | { type: 'ping'; timestamp: number }
  | { type: 'error'; code: string; message: string };

const handleVoiceMessage = (message: VoiceMessageType) => {
  switch (message.type) {
    case 'user_transcript':
      // Show live transcription
      updateTranscript(message.text, message.is_final);
      break;
      
    case 'agent_response':
      // Play audio, show transcript
      playAudio(message.audio_url);
      updateAssistantMessage(message.text);
      break;
      
    case 'interruption':
      // Stop audio playback if user interrupted
      if (message.user_spoke) {
        stopAudioPlayback();
      }
      break;
      
    case 'ping':
      // Keep connection alive
      sendPong();
      break;
      
    case 'error':
      // Handle errors
      handleError(message);
      break;
  }
};
```

---

## Mobile App Voice UI

### Voice Mode Screen Layout
```
┌─────────────────────────────────────┐
│  ← Back              ● Recording    │
├─────────────────────────────────────┤
│                                     │
│           [Companion Avatar]        │
│              Animated               │
│           (lip sync visual)         │
│                                     │
├─────────────────────────────────────┤
│                                     │
│    "I hear you. That sounds         │
│     really difficult."              │
│                                     │
│    [Live Transcript Area]           │
│                                     │
├─────────────────────────────────────┤
│                                     │
│         [Hold to Talk]              │
│         or Tap for Toggle           │
│                                     │
│   [End Call]    [Mute]    [CC]      │
│                                     │
└─────────────────────────────────────┘
```

### Voice UI States
```typescript
enum VoiceState {
  CONNECTING = 'connecting',
  LISTENING = 'listening',    // AI listening to user
  SPEAKING = 'speaking',      // AI speaking
  IDLE = 'idle',              // Pause between exchanges
  ENDED = 'ended',            // Call ended
  ERROR = 'error',            // Connection error
}

const VoiceUIComponent = ({ state, transcript, audioLevel }) => {
  return (
    <View style={styles.container}>
      {/* Companion Avatar with Animation */}
      <AnimatedAvatar 
        state={state}
        audioLevel={audioLevel}
        companion={currentCompanion}
      />
      
      {/* Live Transcript */}
      <TranscriptDisplay 
        messages={transcript}
        isLive={state === VoiceState.LISTENING}
      />
      
      {/* Microphone Button */}
      <MicrophoneButton
        state={state}
        onPressIn={startRecording}
        onPressOut={stopRecording}
        mode="push-to-talk" // or "toggle"
      />
      
      {/* Controls */}
      <VoiceControls
        onEnd={endCall}
        onMute={toggleMute}
        onCaptions={toggleCaptions}
      />
    </View>
  );
};
```

### Push-to-Talk vs. Toggle Modes
```typescript
interface VoiceModeSettings {
  inputMode: 'push-to-talk' | 'toggle' | 'always-listening';
  autoEndSilence: boolean; // End call after 60s silence
  showTranscript: boolean;
  playSoundEffects: boolean;
  hapticFeedback: boolean;
}

// Default settings
const DEFAULT_VOICE_SETTINGS: VoiceModeSettings = {
  inputMode: 'push-to-talk', // More control, less accidental triggers
  autoEndSilence: true,
  showTranscript: true,
  playSoundEffects: true,
  hapticFeedback: true,
};
```

---

## Audio Processing

### Input (User Speech → Text)
```
User speaks → Mobile app captures audio → 
ElevenLabs STT → Transcript → Backend

Audio Format:
- Sample rate: 16kHz or 44.1kHz
- Format: PCM/WAV or Opus
- Channels: Mono
- Bit depth: 16-bit

Noise Handling:
- Mobile app applies noise suppression
- Voice activity detection (VAD)
- Auto-gain control
```

### Output (Text → AI Speech)
```
Backend response → ElevenLabs TTS → Audio stream → Mobile app → Speaker

Optimizations:
- Streaming TTS (don't wait for full response)
- Audio caching for common phrases
- Preload greeting message
- Adaptive bitrate based on connection
```

### Audio Quality Settings
```typescript
const AUDIO_QUALITY_PRESETS = {
  low: {
    bitrate: 64, // kbps
    sampleRate: 22050,
    format: 'mp3',
    // For poor connections
  },
  medium: {
    bitrate: 128,
    sampleRate: 44100,
    format: 'mp3',
    // Default
  },
  high: {
    bitrate: 192,
    sampleRate: 48000,
    format: 'wav',
    // Premium, WiFi only
  },
};
```

---

## Conversation Context Integration

### Sending Context to Voice Agent
```python
async def create_voice_session(
    user_id: str,
    companion_id: str,
    context: ConversationContext
) -> VoiceSession:
    """
    Create voice session with full context.
    """
    # Get recent conversation for context
    recent_messages = await get_recent_messages(user_id, limit=5)
    
    # Build context string for ElevenLabs
    context_prompt = f"""
USER: {context.user_name}

RECENT CONVERSATION:
{format_for_voice_context(recent_messages)}

CURRENT MOOD: {context.detected_mood}

CONTINUE THE CONVERSATION NATURALLY.
Remember what was discussed. Reference previous topics when relevant.
"""
    
    # Update agent's context dynamically
    await elevenlabs_client.update_agent_context(
        agent_id=context.agent_id,
        context=context_prompt
    )
    
    # Create session
    session = await elevenlabs_client.start_conversation(
        agent_id=context.agent_id,
        user_id=user_id
    )
    
    # Log session start
    await db.voice_sessions.create({
        'user_id': user_id,
        'companion_id': companion_id,
        'session_id': session.id,
        'started_at': datetime.now(),
        'context_summary': context_prompt[:500]
    })
    
    return session
```

### Memory During Voice Calls
```python
async def process_voice_transcript(
    session_id: str,
    transcript: str,
    role: 'user' | 'agent'
):
    """
    Process and store voice conversation for memory.
    """
    # Add to session memory
    await redis.append_message(session_id, {
        'role': role,
        'content': transcript,
        'type': 'voice',
        'timestamp': datetime.now()
    })
    
    # Extract facts (same as text)
    if role == 'user':
        facts = await extract_facts_from_text(transcript)
        for fact in facts:
            await store_user_fact(fact)
    
    # Queue for embedding
    await queue.embed_message({
        'session_id': session_id,
        'message': transcript,
        'type': 'voice',
        'role': role
    })
```

---

## Safety in Voice Mode

### Real-time Crisis Detection
```python
VOICE_CRISIS_KEYWORDS = [
    'kill myself', 'end it all', 'suicide', 'want to die',
    'hurt myself', 'self-harm', 'cutting',
    'no reason to live', 'everyone would be better off'
]

async function monitorVoiceTranscript(transcript: str, sessionId: str):
    """
    Monitor voice transcript for crisis indicators.
    """
    transcript_lower = transcript.lower()
    
    for keyword in VOICE_CRISIS_KEYWORDS:
        if keyword in transcript_lower:
            # Trigger safety protocol
            await trigger_crisis_protocol({
                'session_id': sessionId,
                'type': 'voice',
                'keyword': keyword,
                'transcript': transcript,
                'timestamp': datetime.now()
            })
            
            # Inject safety response into conversation
            await inject_safety_message(sessionId, """
                I hear how much pain you're in, and I'm really glad you told me.
                Your safety matters so much. I want to make sure you have support.
                
                Can I share some resources for immediate help?
                You don't have to go through this alone.
            """)
            
            break
```

### Voice Mode Safety Features
```
1. Crisis keyword detection (real-time)
2. Session recording (opt-in, encrypted)
3. Easy exit: "I need to end this call" → graceful close
4. Post-call resources: If crisis detected, send SMS/email with resources
5. Human review: Flagged sessions reviewed by safety team
```

---

## Pricing & Limits

### Free Tier
```
- 10 voice minutes per month
- Standard voice quality (128kbps)
- Basic companions (Maya, Sam)
- Push-to-talk only
```

### Premium Tier ($14.99/mo)
```
- 300 voice minutes per month
- High quality audio (192kbps)
- All 5 companions
- Toggle or always-listening modes
- Voice message history
- Download voice sessions (for journaling)
```

### Overage
```
- $0.10 per additional minute
- Capped at $20/month extra
- Warning at 80% and 100% of limit
```

---

## API Endpoints

```
POST /api/v1/voice/session
     → Create new voice session
     Body: { userId, companionId }
     Response: { sessionToken, agentId, expiresAt }

POST /api/v1/voice/session/:id/end
     → End voice session
     Response: { duration, transcript, summary }

GET /api/v1/voice/sessions
     → List user's voice sessions
     Query: { limit, offset, companionId }

GET /api/v1/voice/sessions/:id/transcript
     → Get full transcript
     Response: { messages[], duration, date }

DELETE /api/v1/voice/sessions/:id
     → Delete voice session recording

POST /api/v1/voice/feedback
     → Rate voice session quality
     Body: { sessionId, rating, feedback }
```

---

## Technical Requirements

### Mobile App
- iOS 14+ (AVFoundation)
- Android 8+ (AudioRecord)
- Microphone permission required
- Background audio support (optional)

### Backend
- WebSocket server (Socket.io or native)
- ElevenLabs API integration
- Audio file storage (S3)
- Real-time monitoring service

### Bandwidth Estimates
```
Per minute of voice conversation:
- Upload (user speech): ~100KB
- Download (AI speech): ~800KB (128kbps MP3)
- Total: ~1MB/minute

300 minutes/month (premium) = ~300MB/month
```

---

## Future Enhancements

1. **Emotion Detection from Voice**
   - Analyze tone, pitch, speed for emotional state
   - Adjust companion response accordingly

2. **Multilingual Support**
   - Auto-detect language
   - Switch companion voice accordingly

3. **Voice Journaling**
   - Record thoughts without AI response
   - Transcribe and store for reflection

4. **Companion Voice Customization**
   - Adjust speed, pitch per user preference
   - Create custom voice clones (premium)

---

*Version: 1.0.0*
*Last Updated: 2026-03-22*
