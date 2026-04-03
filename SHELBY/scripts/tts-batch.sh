#!/bin/bash
# Batch TTS generation script for Springbok Radio Episodes 024-027
# Requires: ELEVENLABS_API_KEY environment variable

set -e

BASE_DIR="/mnt/data/openclaw/workspace/.openclaw/workspace/SHELBY"
AUDIO_DIR="$BASE_DIR/audio"

# Voice ID (Rachel - warm, clear narration voice)
VOICE_ID="${ELEVENLABS_VOICE_ID:-21m00Tcm4TlvDq8ikWAM}"

if [ -z "$ELEVENLABS_API_KEY" ]; then
    echo "ERROR: ELEVENLABS_API_KEY environment variable not set"
    echo "Get your API key from: https://elevenlabs.io"
    echo "Then run: export ELEVENLABS_API_KEY='your_key_here'"
    exit 1
fi

echo "========================================"
echo "Springbok Radio TTS Batch Generation"
echo "========================================"
echo "Voice ID: $VOICE_ID"
echo "API Key:  ************${ELEVENLABS_API_KEY: -4}"
echo "========================================"

# Function to generate TTS for a segment
generate_segment() {
    local text_file="$1"
    local output_file="$2"
    
    if [ ! -f "$text_file" ]; then
        echo "  SKIP: Text file not found: $text_file"
        return 1
    fi
    
    local chars=$(wc -c < "$text_file")
    echo "  Processing $chars characters..."
    
    python3 -c "
from elevenlabs import ElevenLabs, VoiceSettings
import sys

client = ElevenLabs(api_key='$ELEVENLABS_API_KEY')

with open('$text_file', 'r') as f:
    text = f.read()

audio = client.text_to_speech.convert(
    text=text,
    voice_id='$VOICE_ID',
    model_id='eleven_multilingual_v2',
    output_format='mp3_44100_128',
    voice_settings=VoiceSettings(
        stability=0.5,
        similarity_boost=0.75,
        style=0.0,
        use_speaker_boost=True
    )
)

with open('$output_file', 'wb') as f:
    for chunk in audio:
        f.write(chunk)

print(f'  Generated: $output_file')
"
}

# Process each episode
for episode in "024-ha-long-bay" "025-kyoto" "026-iceland" "027-petra"; do
    echo ""
    echo "Episode: $episode"
    echo "----------------------------------------"
    
    episode_dir="$AUDIO_DIR/$episode"
    
    for segment in 1 2 3; do
        text_file="$episode_dir/segment${segment}.txt"
        output_file="$episode_dir/segment${segment}.mp3"
        
        echo "Segment $segment:"
        generate_segment "$text_file" "$output_file"
    done
done

echo ""
echo "========================================"
echo "TTS Generation Complete!"
echo "========================================"
echo ""
echo "Generated files:"
find "$AUDIO_DIR"/{024-ha-long-bay,025-kyoto,026-iceland,027-petra} -name "*.mp3" -exec ls -lh {} \;
