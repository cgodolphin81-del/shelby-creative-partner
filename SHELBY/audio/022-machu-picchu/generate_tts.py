#!/usr/bin/env python3
"""
Generate TTS audio for Springbok Radio Episode 022: Machu Picchu
Split into 3 segments (~2,800 words each) using ElevenLabs TTS
"""

import os
import re
import requests
from datetime import datetime

# ============================================
# ELEVENLABS API CONFIGURATION
# ============================================

ELEVENLABS_CONFIG = {
    "api_key": os.getenv("ELEVENLABS_API_KEY", "your-api-key-here"),
    "base_url": "https://api.elevenlabs.io/v1",
    "model": "eleven_monolingual_v1",
}

# Warm, storytelling voice - perfect for travel narratives
STORYTELLER_VOICE = {
    "voice_id": "EXAVITQu4vr4xnSDxMaL",  # Sarah - Warm Narrator
    "name": "Sarah - Warm Storyteller",
    "settings": {
        "stability": 0.75,
        "similarity_boost": 0.75,
        "style": 0.15,
        "use_speaker_boost": True
    }
}

# ============================================
# READ AND SPLIT EPISODE
# ============================================

def read_episode_file():
    """Read the episode markdown file"""
    with open('/mnt/data/openclaw/workspace/.openclaw/workspace/SHELBY/identity/stories/022-machu-picchu.md', 'r') as f:
        return f.read()

def split_into_segments(text):
    """
    Split episode into 3 segments by acts
    Each segment should be approximately 2,800 words
    """
    # Split by ACT markers
    acts = re.split(r'\n## (ACT [IVX]+:)', text)
    
    segments = []
    
    # Reconstruct acts with their markers
    for i in range(1, len(acts), 2):
        act_marker = acts[i]
        act_content = acts[i + 1] if i + 1 < len(acts) else ""
        segments.append(f"## {act_marker}{act_content}")
    
    return segments

def count_words(text):
    """Count words in text"""
    return len(text.split())

# ============================================
# TTS GENERATION
# ============================================

def text_to_speech(text, voice_profile, output_path):
    """
    Convert text to speech using ElevenLabs
    
    Args:
        text: Text to narrate
        voice_profile: Voice profile dict
        output_path: Where to save the audio file
    
    Returns:
        Tuple of (success: bool, duration_estimate: float)
    """
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
    
    print(f"🎙️  Generating audio for segment...")
    print(f"   Word count: {count_words(text)}")
    print(f"   Output: {output_path}")
    
    try:
        response = requests.post(url, json=payload, headers=headers, timeout=300)
        
        if response.status_code == 200:
            os.makedirs(os.path.dirname(output_path), exist_ok=True)
            
            with open(output_path, 'wb') as f:
                f.write(response.content)
            
            # Estimate duration (~0.4 seconds per word for normal speech)
            duration_estimate = count_words(text) * 0.4 / 60  # in minutes
            print(f"✅ Audio saved: {output_path}")
            print(f"   Estimated duration: {duration_estimate:.1f} minutes")
            return True, duration_estimate
        else:
            print(f"❌ Error: {response.status_code} - {response.text[:200]}")
            return False, 0
            
    except Exception as e:
        print(f"❌ Exception: {str(e)}")
        return False, 0

# ============================================
# MAIN
# ============================================

def main():
    print("=" * 70)
    print("SPRINGBOK RADIO EPISODE 022: MACHU PICCHU")
    print("TTS Audio Generation")
    print("=" * 70)
    print()
    
    # Read episode
    print("📖 Reading episode file...")
    episode_text = read_episode_file()
    total_words = count_words(episode_text)
    print(f"   Total word count: {total_words:,} words")
    print()
    
    # Split into segments
    print("✂️  Splitting into 3 segments...")
    segments = split_into_segments(episode_text)
    
    for i, segment in enumerate(segments, 1):
        word_count = count_words(segment)
        print(f"   Segment {i}: {word_count:,} words")
    print()
    
    # Generate TTS for each segment
    output_dir = '/mnt/data/openclaw/workspace/.openclaw/workspace/SHELBY/audio/022-machu-picchu'
    results = []
    
    for i, segment in enumerate(segments, 1):
        print(f"\n{'=' * 70}")
        print(f"SEGMENT {i} OF 3")
        print(f"{'=' * 70}")
        
        output_path = f"{output_dir}/022-machu-picchu-part{i}.mp3"
        success, duration = text_to_speech(segment, STORYTELLER_VOICE, output_path)
        
        results.append({
            "segment": i,
            "path": output_path,
            "success": success,
            "duration_minutes": duration,
            "word_count": count_words(segment)
        })
    
    # Summary
    print(f"\n{'=' * 70}")
    print("GENERATION COMPLETE")
    print(f"{'=' * 70}")
    print()
    
    for result in results:
        status = "✅" if result["success"] else "❌"
        print(f"{status} Part {result['segment']}: {result['path']}")
        print(f"   Words: {result['word_count']:,} | Duration: ~{result['duration_minutes']:.1f} min")
    
    print()
    print("🎉 All segments generated!")

if __name__ == "__main__":
    main()
