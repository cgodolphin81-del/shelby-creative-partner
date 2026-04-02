#!/usr/bin/env python3
"""
Split Episode 022 into 3 balanced segments for TTS generation
Total: ~3,200 words of story content
Each segment: ~1,000-1,200 words
"""

import re

def read_episode():
    with open('/mnt/data/openclaw/workspace/.openclaw/workspace/SHELBY/identity/stories/022-machu-picchu.md', 'r') as f:
        return f.read()

def split_by_acts(text):
    """Split the episode by ACT markers"""
    # Find all ACT markers
    acts = re.split(r'\n(## ACT [IVX]+:.+?\n)', text)
    
    segments = []
    # Reconstruct with markers
    for i in range(1, len(acts), 2):
        marker = acts[i].strip()
        content = acts[i + 1] if i + 1 < len(acts) else ""
        segments.append(f"{marker}\n{content}")
    
    return segments

def count_words(text):
    return len(text.split())

# Read and split
text = read_episode()
segments = split_by_acts(text)

# Write segments
for i, segment in enumerate(segments, 1):
    word_count = count_words(segment)
    output_file = f'/mnt/data/openclaw/workspace/.openclaw/workspace/SHELBY/audio/022-machu-picchu/segment-{i}.txt'
    with open(output_file, 'w') as f:
        f.write(segment)
    print(f"Segment {i}: {word_count} words -> {output_file}")

print(f"\nTotal segments: {len(segments)}")
print(f"Total words: {sum(count_words(s) for s in segments)}")
