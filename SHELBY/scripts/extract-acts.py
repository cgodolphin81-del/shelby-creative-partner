#!/usr/bin/env python3
"""Extract ACT sections from Springbok Radio episode markdown files."""

import re
import sys
from pathlib import Path

def extract_acts(input_file, output_dir):
    """Extract ACT sections from a markdown file."""
    
    with open(input_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find all ACT sections
    act_pattern = r'(## ACT [^\n]+.*?)(?=(## ACT |## EPILOGUE|---\n\n\*\*Audio Segments|\*\*END OF EPISODE|\Z))'
    matches = re.findall(act_pattern, content, re.DOTALL)
    acts = [m[0] if isinstance(m, tuple) else m for m in matches]
    
    output_dir = Path(output_dir)
    output_dir.mkdir(parents=True, exist_ok=True)
    
    for i, act in enumerate(acts, 1):
        # Clean up the text - remove markdown headers but keep content
        text = act
        
        # Remove the ACT header line
        text = re.sub(r'^## ACT [^\n]+\n', '', text, flags=re.MULTILINE)
        
        # Remove chapter headers but keep chapter content
        text = re.sub(r'^### Chapter \d+: [^\n]+\n', '', text, flags=re.MULTILINE)
        
        # Remove bold/italic formatting
        text = re.sub(r'\*\*([^*]+)\*\*', r'\1', text)
        text = re.sub(r'\*([^*]+)\*', r'\1', text)
        
        # Remove image prompts and production notes sections
        text = re.sub(r'---\n\n\*\*Image Prompts.*', '', text, flags=re.DOTALL)
        text = re.sub(r'---\n\n\*\*Production Notes.*', '', text, flags=re.DOTALL)
        text = re.sub(r'---\n\n\*\*END OF EPISODE.*', '', text, flags=re.DOTALL)
        text = re.sub(r'---\n\n\*\*Audio Segments.*', '', text, flags=re.DOTALL)
        
        # Remove sound effect markers
        text = re.sub(r'\*\[Sound[^\]]*\]\*', '', text)
        
        # Clean up multiple blank lines
        text = re.sub(r'\n{3,}', '\n\n', text)
        
        # Write to file
        output_file = output_dir / f'segment{i}.txt'
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(text.strip())
        
        # Count words
        word_count = len(text.split())
        print(f"  Segment {i}: {word_count} words -> {output_file}")
    
    return len(acts)

def main():
    if len(sys.argv) < 3:
        print("Usage: extract-acts.py <input.md> <output_dir>")
        sys.exit(1)
    
    input_file = Path(sys.argv[1])
    output_dir = Path(sys.argv[2])
    
    print(f"Processing: {input_file}")
    num_acts = extract_acts(input_file, output_dir)
    print(f"Extracted {num_acts} segments\n")

if __name__ == '__main__':
    main()
