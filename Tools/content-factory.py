#!/usr/bin/env python3
"""
AI Content Factory - Standalone CLI Tool
Combines TTS + Script + Lip-Sync for automated video creation
Perfect for TikTok, Reels, YouTube Shorts

Usage:
    python content-factory.py --topic "3 productivity hacks" --platform tiktok
"""

import argparse
import subprocess
import json
import os
from datetime import datetime

# Configuration
OUTPUT_DIR = "./output"
SCRIPT_MODEL = "mistral:7b-instruct"
TTS_VOICE = "en-US-AriaNeural"

def generate_script(topic, platform, length):
    """Generate viral script using local LLM"""
    prompt = f"""Write a viral {platform} script about: {topic}
    
Requirements:
- Platform: {platform}
- Length: {length}
- Hook in first 3 seconds
- Include visual cues
- Add CTA at end
- Format as JSON

Output ONLY valid JSON."""

    result = subprocess.run(
        ["ollama", "run", SCRIPT_MODEL, prompt],
        capture_output=True,
        text=True
    )
    
    try:
        script = json.loads(result.stdout)
        return script
    except:
        # Fallback to plain text
        return {"script": result.stdout, "scenes": []}

def generate_voiceover(script_text, output_file):
    """Generate voiceover using Edge TTS"""
    subprocess.run([
        "edge-tts",
        "--text", script_text,
        "--voice", TTS_VOICE,
        "--write-media", output_file
    ])
    return output_file

def create_caption_file(script_text, output_file):
    """Create SRT caption file"""
    lines = script_text.split('.')
    with open(output_file, 'w') as f:
        for i, line in enumerate(lines):
            start = i * 3000  # 3 seconds per line
            end = start + 2500
            f.write(f"{i+1}\n")
            f.write(f"00:00:{start//1000:02d},{start%1000:03d} --> 00:00:{end//1000:02d},{end%1000:03d}\n")
            f.write(f"{line.strip()}.\n\n")
    return output_file

def main():
    parser = argparse.ArgumentParser(description="AI Content Factory")
    parser.add_argument("--topic", required=True, help="Video topic")
    parser.add_argument("--platform", default="tiktok", choices=["tiktok", "instagram", "youtube"])
    parser.add_argument("--length", default="60 seconds")
    parser.add_argument("--output", default=OUTPUT_DIR)
    
    args = parser.parse_args()
    
    # Create output directory
    os.makedirs(args.output, exist_ok=True)
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    base_name = f"{args.platform}_{timestamp}"
    
    print(f"🎬 AI Content Factory")
    print(f"Topic: {args.topic}")
    print(f"Platform: {args.platform}")
    print(f"Length: {args.length}")
    print("-" * 50)
    
    # Step 1: Generate Script
    print("✍️  Step 1/4: Generating script...")
    script = generate_script(args.topic, args.platform, args.length)
    script_text = script.get("script", str(script))
    script_file = f"{args.output}/{base_name}_script.json"
    with open(script_file, 'w') as f:
        json.dump(script, f, indent=2)
    print(f"✅ Script saved: {script_file}")
    
    # Step 2: Generate Voiceover
    print("🎙️  Step 2/4: Generating voiceover...")
    audio_file = f"{args.output}/{base_name}_audio.mp3"
    generate_voiceover(script_text, audio_file)
    print(f"✅ Audio saved: {audio_file}")
    
    # Step 3: Generate Captions
    print("📝 Step 3/4: Generating captions...")
    caption_file = f"{args.output}/{base_name}.srt"
    create_caption_file(script_text, caption_file)
    print(f"✅ Captions saved: {caption_file}")
    
    # Step 4: Instructions for Lip-Sync
    print("🎭 Step 4/4: Preparing for lip-sync...")
    print("\n📋 NEXT STEPS:")
    print(f"1. Upload {audio_file} to LipSync.pro")
    print("2. Add your avatar video or image")
    print("3. Download synced video")
    print(f"4. Add captions: {caption_file}")
    print("\n🎯 Your video is ready to post!")
    
    # Summary
    print("\n" + "=" * 50)
    print("📦 OUTPUT FILES:")
    print(f"  Script:   {script_file}")
    print(f"  Audio:    {audio_file}")
    print(f"  Captions: {caption_file}")
    print("=" * 50)
    print("✅ Content generation complete!")

if __name__ == "__main__":
    main()
