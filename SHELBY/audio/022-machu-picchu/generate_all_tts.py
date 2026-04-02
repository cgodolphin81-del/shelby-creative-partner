#!/usr/bin/env python3
"""
Generate TTS audio for all 3 segments of Episode 022
Splits long text into chunks under 4000 characters each
Uses ElevenLabs API directly
"""

import os
import re
import requests
from datetime import datetime

# ============================================
# CONFIGURATION
# ============================================

ELEVENLABS_API_KEY = os.getenv("ELEVENLABS_API_KEY", "")
ELEVENLABS_BASE_URL = "https://api.elevenlabs.io/v1"
ELEVENLABS_MODEL = "eleven_monolingual_v1"

# Warm storytelling voice
VOICE_ID = "EXAVITQu4vr4xnSDxMaL"  # Sarah - Warm Narrator
VOICE_SETTINGS = {
    "stability": 0.75,
    "similarity_boost": 0.75,
    "style": 0.15,
    "use_speaker_boost": True
}

OUTPUT_DIR = "/mnt/data/openclaw/workspace/.openclaw/workspace/SHELBY/audio/022-machu-picchu"
INPUT_DIR = "/mnt/data/openclaw/workspace/.openclaw/workspace/SHELBY/identity/stories"

# ============================================
# HELPER FUNCTIONS
# ============================================

def read_episode():
    """Read the full episode file"""
    with open(f"{INPUT_DIR}/022-machu-picchu.md", 'r') as f:
        return f.read()

def split_by_acts(text):
    """Split episode into 3 acts"""
    acts = re.split(r'\n(## ACT [IVX]+:.+?\n)', text)
    segments = []
    for i in range(1, len(acts), 2):
        marker = acts[i].strip()
        content = acts[i + 1] if i + 1 < len(acts) else ""
        segments.append(f"{marker}\n{content}")
    return segments

def split_into_chunks(text, max_chars=4000):
    """Split text into chunks that fit under TTS limit"""
    chunks = []
    current_chunk = ""
    
    # Split by paragraphs first
    paragraphs = text.split('\n\n')
    
    for para in paragraphs:
        if len(current_chunk) + len(para) + 2 <= max_chars:
            current_chunk += para + "\n\n"
        else:
            if current_chunk:
                chunks.append(current_chunk.strip())
            current_chunk = para + "\n\n"
    
    if current_chunk.strip():
        chunks.append(current_chunk.strip())
    
    return chunks

def text_to_speech_chunk(text, output_path):
    """Generate TTS for a single chunk"""
    if not ELEVENLABS_API_KEY:
        print(f"⚠️  ELEVENLABS_API_KEY not set. Skipping: {output_path}")
        return False, 0
    
    url = f"{ELEVENLABS_BASE_URL}/text-to-speech/{VOICE_ID}"
    headers = {
        "xi-api-key": ELEVENLABS_API_KEY,
        "Content-Type": "application/json"
    }
    
    payload = {
        "text": text,
        "model_id": ELEVENLABS_MODEL,
        "voice_settings": VOICE_SETTINGS
    }
    
    try:
        response = requests.post(url, json=payload, headers=headers, timeout=300)
        
        if response.status_code == 200:
            with open(output_path, 'wb') as f:
                f.write(response.content)
            return True, len(text.split()) * 0.4 / 60  # est. duration in minutes
        else:
            print(f"❌ Error {response.status_code}: {response.text[:200]}")
            return False, 0
    except Exception as e:
        print(f"❌ Exception: {str(e)}")
        return False, 0

def combine_audio_files(input_files, output_file):
    """Combine multiple MP3 files using ffmpeg"""
    import subprocess
    
    # Create file list for ffmpeg
    list_file = f"{OUTPUT_DIR}/combine_list.txt"
    with open(list_file, 'w') as f:
        for file in input_files:
            f.write(f"file '{file}'\n")
    
    # Combine with ffmpeg
    cmd = [
        'ffmpeg', '-y', '-f', 'concat', '-safe', '0',
        '-i', list_file, '-c', 'copy', output_file
    ]
    
    try:
        subprocess.run(cmd, check=True, capture_output=True)
        print(f"✅ Combined: {output_file}")
        return True
    except subprocess.CalledProcessError as e:
        print(f"❌ FFmpeg error: {e.stderr.decode()}")
        return False
    except FileNotFoundError:
        print("❌ FFmpeg not found. Cannot combine files.")
        return False

# ============================================
# MAIN
# ============================================

def main():
    print("=" * 70)
    print("SPRINGBOK RADIO EPISODE 022: MACHU PICCHU")
    print("TTS Audio Generation")
    print("=" * 70)
    print()
    
    # Check API key
    if not ELEVENLABS_API_KEY:
        print("⚠️  WARNING: ELEVENLABS_API_KEY is not set!")
        print("   Set it with: export ELEVENLABS_API_KEY=your-key")
        print("   Or add to .env file")
        print()
        print("Generating placeholder segment files instead...")
        print()
    
    # Read and split episode
    print("📖 Reading episode...")
    episode_text = read_episode()
    total_words = len(episode_text.split())
    print(f"   Total: {total_words:,} words")
    print()
    
    print("✂️  Splitting into 3 acts...")
    acts = split_by_acts(episode_text)
    for i, act in enumerate(acts, 1):
        words = len(act.split())
        print(f"   Act {i}: {words:,} words")
    print()
    
    # Process each act
    results = []
    
    for act_num, act_text in enumerate(acts, 1):
        print(f"\n{'=' * 70}")
        print(f"PROCESSING ACT {act_num}")
        print(f"{'=' * 70}")
        
        # Split into chunks
        chunks = split_into_chunks(act_text)
        print(f"   Split into {len(chunks)} chunks")
        
        # Generate TTS for each chunk
        chunk_files = []
        total_duration = 0
        
        for chunk_num, chunk_text in enumerate(chunks, 1):
            chunk_file = f"{OUTPUT_DIR}/022-machu-picchu-part{act_num}-chunk{chunk_num}.mp3"
            print(f"   Generating chunk {chunk_num}... ({len(chunk_text)} chars)")
            
            if ELEVENLABS_API_KEY:
                success, duration = text_to_speech_chunk(chunk_text, chunk_file)
                if success:
                    chunk_files.append(chunk_file)
                    total_duration += duration
            else:
                # Create empty placeholder
                with open(chunk_file, 'w') as f:
                    f.write(f"# Placeholder for chunk {chunk_num}\n")
                chunk_files.append(chunk_file)
        
        # Combine chunks
        output_file = f"{OUTPUT_DIR}/022-machu-picchu-part{act_num}.mp3"
        
        if ELEVENLABS_API_KEY and len(chunk_files) > 1:
            combine_audio_files(chunk_files, output_file)
        elif ELEVENLABS_API_KEY and len(chunk_files) == 1:
            os.rename(chunk_files[0], output_file)
            print(f"✅ Saved: {output_file}")
        else:
            # Create placeholder
            with open(output_file, 'w') as f:
                f.write(f"# Placeholder for Part {act_num}\n")
                f.write(f"# Chunks: {chunk_files}\n")
            print(f"⚠️  Created placeholder: {output_file}")
        
        results.append({
            "part": act_num,
            "file": output_file,
            "chunks": len(chunks),
            "duration": total_duration
        })
    
    # Summary
    print(f"\n{'=' * 70}")
    print("GENERATION COMPLETE")
    print(f"{'=' * 70}")
    print()
    
    for result in results:
        print(f"Part {result['part']}: {result['file']}")
        print(f"   Chunks: {result['chunks']} | Duration: ~{result['duration']:.1f} min")
    
    print()
    if ELEVENLABS_API_KEY:
        print("🎉 All audio files generated!")
    else:
        print("⚠️  Placeholders created. Set ELEVENLABS_API_KEY to generate real audio.")

if __name__ == "__main__":
    main()
