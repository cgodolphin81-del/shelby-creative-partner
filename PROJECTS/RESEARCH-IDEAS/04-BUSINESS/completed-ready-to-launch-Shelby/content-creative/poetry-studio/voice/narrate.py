#!/usr/bin/env python3
"""
Voice Narration System
ElevenLabs integration for poetry audio
Multiple voice profiles for different moods
"""

import os
import json
from datetime import datetime

# ============================================
# ELEVENLABS API CONFIGURATION
# ============================================

ELEVENLABS_CONFIG = {
    "api_key": os.getenv("ELEVENLABS_API_KEY", "your-api-key-here"),
    "base_url": "https://api.elevenlabs.io/v1",
    "model": "eleven_monolingual_v1",  # or eleven_multilingual_v2
}

# ============================================
# VOICE PROFILES FOR POETRY
# ============================================

VOICE_PROFILES = {
    "narrator_warm": {
        "voice_id": "EXAVITQu4vr4xnSDxMaL",  # Example: Sarah
        "name": "Sarah - Warm Narrator",
        "description": "Warm, inviting female voice. Perfect for love poems and gentle verses.",
        "settings": {
            "stability": 0.75,
            "similarity_boost": 0.75,
            "style": 0.0,
            "use_speaker_boost": True
        },
        "mood": "romantic, gentle, comforting",
        "best_for": ["love poems", "lullabies", "comfort poetry"]
    },
    
    "narrator_dramatic": {
        "voice_id": "pNInz6obpgDQGcFmaJgB",  # Example: Adam
        "name": "Adam - Dramatic Male",
        "description": "Deep, resonant male voice with gravitas. Ideal for sonnets and serious poetry.",
        "settings": {
            "stability": 0.5,
            "similarity_boost": 0.8,
            "style": 0.3,
            "use_speaker_boost": True
        },
        "mood": "dramatic, powerful, authoritative",
        "best_for": ["sonnets", "epic poetry", "spoken word"]
    },
    
    "narrator_youthful": {
        "voice_id": "jBpfuIE2acCO8z3wKNLl",  # Example: Bella
        "name": "Bella - Youthful Energy",
        "description": "Young, energetic female voice. Great for contemporary free verse and rap.",
        "settings": {
            "stability": 0.6,
            "similarity_boost": 0.7,
            "style": 0.4,
            "use_speaker_boost": True
        },
        "mood": "energetic, modern, relatable",
        "best_for": ["free verse", "rap", "contemporary poetry"]
    },
    
    "narrator_wise": {
        "voice_id": "VR6AewLTigWG4xSOukaG",  # Example: Arnold
        "name": "Marcus - Wise Elder",
        "description": "Mature, thoughtful voice with wisdom. Perfect for reflective and philosophical poems.",
        "settings": {
            "stability": 0.8,
            "similarity_boost": 0.7,
            "style": 0.1,
            "use_speaker_boost": True
        },
        "mood": "wise, contemplative, serene",
        "best_for": ["philosophical", "meditative", "nature poetry"]
    },
    
    "narrator_soft": {
        "voice_id": "TxGEqnHWrfWFTfGW9XjX",  # Example: Josh (soft setting)
        "name": "Luna - Soft Whisper",
        "description": "Gentle, whisper-like voice. Ideal for intimate, personal poetry.",
        "settings": {
            "stability": 0.9,
            "similarity_boost": 0.6,
            "style": 0.0,
            "use_speaker_boost": False
        },
        "mood": "intimate, soft, personal",
        "best_for": ["haiku", "intimate poems", "bedtime poetry"]
    }
}

# ============================================
# API FUNCTIONS
# ============================================

def get_voices():
    """List all available ElevenLabs voices"""
    import requests
    
    url = f"{ELEVENLABS_CONFIG['base_url']}/voices"
    headers = {
        "xi-api-key": ELEVENLABS_CONFIG["api_key"],
        "Content-Type": "application/json"
    }
    
    response = requests.get(url, headers=headers)
    return response.json()

def text_to_speech(text, voice_profile, output_path=None):
    """
    Convert text to speech using ElevenLabs
    
    Args:
        text: The poem text to narrate
        voice_profile: Voice profile dict from VOICE_PROFILES
        output_path: Where to save the audio file
    
    Returns:
        Path to generated audio file
    """
    import requests
    
    voice_id = voice_profile["voice_id"]
    url = f"{ELEVENLABS_CONFIG['base_url']}/text-to-speech/{voice_id}"
    
    headers = {
        "xi-api-key": ELEVENLABS_CONFIG["api_key"],
        "Content-Type": "application/json"
    }
    
    payload = {
        "text": text,
        "model_id": ELEVENLABS_CONFIG["model"],
        "voice_settings": voice_profile["settings"]
    }
    
    response = requests.post(url, json=payload, headers=headers)
    
    if response.status_code == 200:
        if not output_path:
            timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
            output_path = f"/mnt/data/openclaw/workspace/.openclaw/workspace/poetry-studio/voice/audio/poem_{voice_profile['name'].replace(' ', '_').lower()}_{timestamp}.mp3"
        
        os.makedirs(os.path.dirname(output_path), exist_ok=True)
        
        with open(output_path, 'wb') as f:
            f.write(response.content)
        
        print(f"✅ Audio saved: {output_path}")
        return output_path
    else:
        print(f"❌ Error: {response.status_code} - {response.text}")
        return None

def narrate_poem(poem_text, style, topic, voice_name="narrator_warm"):
    """
    Complete poem narration workflow
    
    Args:
        poem_text: The generated poem
        style: Poetry style (haiku, sonnet, etc.)
        topic: Poem topic
        voice_name: Voice profile key
    
    Returns:
        Dict with audio path and metadata
    """
    if voice_name not in VOICE_PROFILES:
        print(f"⚠️  Unknown voice '{voice_name}', using 'narrator_warm'")
        voice_name = "narrator_warm"
    
    voice = VOICE_PROFILES[voice_name]
    
    # Create intro/outro for professional sound
    intro = f"From AI Poetry Studio... {style} about {topic}..."
    outro = "Thank you for listening."
    
    full_text = f"{intro}\n\n{poem_text}\n\n{outro}"
    
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    output_path = f"/mnt/data/openclaw/workspace/.openclaw/workspace/poetry-studio/voice/audio/{style}_{topic.replace(' ', '_')}_{voice_name}_{timestamp}.mp3"
    
    audio_path = text_to_speech(full_text, voice, output_path)
    
    return {
        "audio_path": audio_path,
        "voice_used": voice["name"],
        "style": style,
        "topic": topic,
        "duration_estimate": len(poem_text.split()) * 0.4,  # ~0.4 sec per word
        "timestamp": datetime.now().isoformat()
    }

# ============================================
# BACKGROUND MUSIC SUGGESTIONS
# ============================================

MUSIC_SUGGESTIONS = {
    "haiku": ["soft piano", "nature sounds", "zen garden ambience", "Japanese koto"],
    "sonnet": ["classical strings", "renaissance lute", "chamber music", "soft orchestral"],
    "free_verse": ["lo-fi beats", "ambient electronic", "jazz piano", "indie acoustic"],
    "rap": ["hip-hop instrumental", "trap beats", "boom bap", "jazz rap"]
}

def get_music_recommendation(style):
    """Get background music suggestions for poetry style"""
    return MUSIC_SUGGESTIONS.get(style, ["ambient piano"])

# ============================================
# PRICING FOR VOICE NARRATION
# ============================================

VOICE_PRICING = {
    "free_tier": {
        "narrations_per_day": 3,
        "max_length": "30 seconds",
        "voices_available": ["narrator_warm"],
        "quality": "standard"
    },
    "premium": {
        "narrations_per_day": "unlimited",
        "max_length": "5 minutes",
        "voices_available": "all",
        "quality": "high",
        "background_music": True,
        "commercial_license": True
    }
}

# ============================================
# CLI USAGE
# ============================================

if __name__ == "__main__":
    print("""
╔═══════════════════════════════════════════════════════════╗
║         🎙️  AI Poetry Studio - Voice Narration           ║
╚═══════════════════════════════════════════════════════════╝

Available Voices:
""")
    
    for key, voice in VOICE_PROFILES.items():
        print(f"\n  🎤 {voice['name']} ({key})")
        print(f"     {voice['description']}")
        print(f"     Best for: {voice['best_for']}")
    
    print(f"""
Usage:
  Set ELEVENLABS_API_KEY environment variable
  
  python narrate.py --voice <voice_name> --text "your poem here"
  
Example voices:
  - narrator_warm (romantic, gentle)
  - narrator_dramatic (powerful, sonnets)
  - narrator_youthful (modern, rap)
  - narrator_wise (philosophical)
  - narrator_soft (intimate, haiku)

Music Recommendations by Style:
""")
    
    for style, music in MUSIC_SUGGESTIONS.items():
        print(f"  {style}: {', '.join(music)}")
