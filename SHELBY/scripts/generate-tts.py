#!/usr/bin/env python3
"""Generate TTS audio files for Springbok Radio episodes using ElevenLabs."""

import os
import sys
from pathlib import Path
from elevenlabs import ElevenLabs, Voice, VoiceSettings

# Configuration
ELEVENLABS_API_KEY = os.environ.get('ELEVENLABS_API_KEY', '')
VOICE_ID = os.environ.get('ELEVENLABS_VOICE_ID', 'Rachel')  # Default voice
OUTPUT_FORMAT = 'mp3_44100_128'  # High quality MP3

def get_voice_id(voice_name_or_id):
    """Convert voice name to voice ID if needed."""
    # Common voice names and their IDs
    voice_map = {
        'Rachel': '21m00Tcm4TlvDq8ikWAM',
        'Adam': 'pNInz6obpgDQGcFmaJgB',
        'Charlotte': 'XB0fDUnXU5powFXDhCwa',
        'Josh': 'TxGEqnHWrfWFTfGW9XjX',
    }
    return voice_map.get(voice_name_or_id, voice_name_or_id)

def generate_tts(text_file, output_file, api_key, voice_id):
    """Generate TTS audio from text file."""
    
    if not api_key:
        print(f"  ERROR: ELEVENLABS_API_KEY not set")
        return False
    
    # Read text
    with open(text_file, 'r', encoding='utf-8') as f:
        text = f.read()
    
    # Count characters
    char_count = len(text)
    print(f"  Processing {char_count} characters...")
    
    try:
        # Initialize client
        client = ElevenLabs(api_key=api_key)
        
        # Generate audio
        audio = client.text_to_speech.convert(
            text=text,
            voice_id=get_voice_id(voice_id),
            model_id='eleven_multilingual_v2',
            output_format=OUTPUT_FORMAT,
            voice_settings=VoiceSettings(
                stability=0.5,
                similarity_boost=0.75,
                style=0.0,
                use_speaker_boost=True
            )
        )
        
        # Save to file
        with open(output_file, 'wb') as f:
            for chunk in audio:
                f.write(chunk)
        
        # Get file size
        file_size = os.path.getsize(output_file)
        print(f"  Generated: {output_file} ({file_size / 1024:.1f} KB)")
        return True
        
    except Exception as e:
        print(f"  ERROR: {e}")
        return False

def process_episode(episode_name, audio_dir, api_key, voice_id):
    """Process all segments for an episode."""
    
    audio_path = Path(audio_dir)
    if not audio_path.exists():
        print(f"Directory not found: {audio_path}")
        return 0, 3
    
    success = 0
    failed = 0
    
    for i in range(1, 4):
        text_file = audio_path / f'segment{i}.txt'
        output_file = audio_path / f'segment{i}.mp3'
        
        if not text_file.exists():
            print(f"  Text file not found: {text_file}")
            failed += 1
            continue
        
        print(f"Segment {i}:")
        if generate_tts(text_file, output_file, api_key, voice_id):
            success += 1
        else:
            failed += 1
    
    return success, failed

def main():
    if not ELEVENLABS_API_KEY:
        print("ERROR: ELEVENLABS_API_KEY environment variable not set")
        print("Please set it: export ELEVENLABS_API_KEY='your_key_here'")
        sys.exit(1)
    
    base_dir = Path('/mnt/data/openclaw/workspace/.openclaw/workspace/SHELBY')
    audio_base = base_dir / 'audio'
    
    episodes = [
        ('024-ha-long-bay', 'audio/024-ha-long-bay'),
        ('025-kyoto', 'audio/025-kyoto'),
        ('026-iceland', 'audio/026-iceland'),
        ('027-petra', 'audio/027-petra'),
    ]
    
    total_success = 0
    total_failed = 0
    
    print("=" * 60)
    print("Springbok Radio TTS Generation")
    print("=" * 60)
    print(f"Voice: {VOICE_ID}")
    print(f"API Key: {'*' * 20}{ELEVENLABS_API_KEY[-4:]}")
    print("=" * 60)
    
    for episode_name, audio_path in episodes:
        print(f"\nEpisode {episode_name}:")
        success, failed = process_episode(episode_name, audio_base / audio_path, ELEVENLABS_API_KEY, VOICE_ID)
        total_success += success
        total_failed += failed
    
    print("\n" + "=" * 60)
    print(f"COMPLETE: {total_success} succeeded, {total_failed} failed")
    print("=" * 60)
    
    sys.exit(0 if total_failed == 0 else 1)

if __name__ == '__main__':
    main()
