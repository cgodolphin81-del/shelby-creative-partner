#!/usr/bin/env python3
"""
Generate TTS audio for Springbok Radio Episodes 024-027.
Uses ElevenLabs API for high-quality voice synthesis.

Usage:
    export ELEVENLABS_API_KEY='your_api_key'
    python3 generate-all-tts.py
"""

import os
import sys
from pathlib import Path
from elevenlabs import ElevenLabs, VoiceSettings

# Configuration
BASE_DIR = Path('/mnt/data/openclaw/workspace/.openclaw/workspace/SHELBY')
AUDIO_DIR = BASE_DIR / 'audio'

# Episodes to process
EPISODES = [
    '024-ha-long-bay',
    '025-kyoto',
    '026-iceland',
    '027-petra',
]

# Voice settings
VOICE_ID = os.environ.get('ELEVENLABS_VOICE_ID', '21m00Tcm4TlvDq8ikWAM')  # Rachel
MODEL_ID = 'eleven_multilingual_v2'
OUTPUT_FORMAT = 'mp3_44100_128'

def generate_tts(text, api_key, voice_id, output_file):
    """Generate TTS audio and save to file."""
    client = ElevenLabs(api_key=api_key)
    
    audio = client.text_to_speech.convert(
        text=text,
        voice_id=voice_id,
        model_id=MODEL_ID,
        output_format=OUTPUT_FORMAT,
        voice_settings=VoiceSettings(
            stability=0.5,
            similarity_boost=0.75,
            style=0.0,
            use_speaker_boost=True
        )
    )
    
    with open(output_file, 'wb') as f:
        for chunk in audio:
            f.write(chunk)
    
    return os.path.getsize(output_file)

def process_episode(episode_name, api_key):
    """Process all segments for an episode."""
    episode_dir = AUDIO_DIR / episode_name
    
    if not episode_dir.exists():
        print(f"  ERROR: Directory not found: {episode_dir}")
        return 0, 3
    
    success = 0
    failed = 0
    
    for i in range(1, 4):
        text_file = episode_dir / f'segment{i}.txt'
        output_file = episode_dir / f'segment{i}.mp3'
        
        if not text_file.exists():
            print(f"  ERROR: Text file not found: {text_file}")
            failed += 1
            continue
        
        # Read text
        with open(text_file, 'r', encoding='utf-8') as f:
            text = f.read()
        
        char_count = len(text)
        word_count = len(text.split())
        print(f"  Segment {i}: {word_count} words, {char_count} chars...", end=' ', flush=True)
        
        try:
            file_size = generate_tts(text, api_key, VOICE_ID, output_file)
            print(f"✓ {file_size / 1024:.1f} KB")
            success += 1
        except Exception as e:
            print(f"✗ ERROR: {e}")
            failed += 1
    
    return success, failed

def main():
    api_key = os.environ.get('ELEVENLABS_API_KEY')
    
    if not api_key:
        print("=" * 70)
        print("ERROR: ELEVENLABS_API_KEY environment variable not set")
        print("=" * 70)
        print()
        print("To get your API key:")
        print("  1. Go to https://elevenlabs.io")
        print("  2. Sign in or create an account")
        print("  3. Click on your profile → API Keys")
        print("  4. Copy your API key")
        print()
        print("Then set it in your environment:")
        print("  export ELEVENLABS_API_KEY='your_api_key_here'")
        print()
        print("Or add it to your .env file:")
        print("  ELEVENLABS_API_KEY=your_api_key_here")
        print("=" * 70)
        sys.exit(1)
    
    print("=" * 70)
    print("Springbok Radio TTS Generation - Episodes 024-027")
    print("=" * 70)
    print(f"Voice ID: {VOICE_ID} (Rachel)")
    print(f"Model: {MODEL_ID}")
    print(f"API Key: {'*' * 20}{api_key[-4:]}")
    print("=" * 70)
    print()
    
    total_success = 0
    total_failed = 0
    total_chars = 0
    
    for episode in EPISODES:
        print(f"\n📻 Episode {episode}:")
        print("-" * 70)
        
        success, failed = process_episode(episode, api_key)
        total_success += success
        total_failed += failed
        
        # Count total characters for this episode
        for i in range(1, 4):
            text_file = AUDIO_DIR / episode / f'segment{i}.txt'
            if text_file.exists():
                with open(text_file, 'r') as f:
                    total_chars += len(f.read())
    
    print()
    print("=" * 70)
    print(f"✅ COMPLETE: {total_success}/12 segments generated successfully")
    if total_failed > 0:
        print(f"❌ FAILED: {total_failed} segments")
    print(f"📊 Total characters processed: {total_chars:,}")
    print(f"💰 Estimated cost: ~${total_chars / 1000 * 0.006:.2f} (at $0.006/1K chars)")
    print("=" * 70)
    
    # List generated files
    print("\n📁 Generated files:")
    for episode in EPISODES:
        episode_dir = AUDIO_DIR / episode
        if episode_dir.exists():
            mp3_files = sorted(episode_dir.glob('segment*.mp3'))
            for mp3 in mp3_files:
                size_kb = mp3.stat().st_size / 1024
                print(f"   {mp3.name:20s} {size_kb:8.1f} KB")
    
    print()
    
    sys.exit(0 if total_failed == 0 else 1)

if __name__ == '__main__':
    main()
