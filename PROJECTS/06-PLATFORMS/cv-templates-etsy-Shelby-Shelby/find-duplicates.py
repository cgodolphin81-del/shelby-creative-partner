#!/usr/bin/env python3
"""
Duplicate CV Detector - Simple Version
Finds duplicates by filename similarity and file size.
"""

import os
from collections import defaultdict
import difflib

def normalize_name(name):
    """Normalize filename for comparison."""
    # Remove common variations
    name = name.lower()
    name = name.replace('.docx', '').replace('.pdf', '').replace('.doc', '')
    name = name.replace(' ', '').replace('_', '')
    name = name.replace('(1)', '').replace('(2)', '').replace('(3)', '')
    name = name.replace('(1)', '').replace('(2)', '').replace('(3)', '')
    return name

def find_duplicates(directory):
    """Find potential duplicates based on name and size."""
    print(f"\n🔍 Scanning {directory} for potential duplicates...\n")
    
    files_by_size = defaultdict(list)
    total_files = 0
    
    for filename in os.listdir(directory):
        if not any(filename.lower().endswith(ext) for ext in ['.pdf', '.docx', '.doc', '.txt']):
            continue
        
        filepath = os.path.join(directory, filename)
        if not os.path.isfile(filepath):
            continue
        
        total_files += 1
        size = os.path.getsize(filepath)
        files_by_size[size].append(filename)
    
    print(f"Total files scanned: {total_files}")
    
    # Look for files with same size (potential duplicates)
    candidates = {size: files for size, files in files_by_size.items() if len(files) > 1}
    
    print(f"Groups with same file size: {len(candidates)}\n")
    
    for size, files in candidates.items():
        # Group by normalized name
        normalized_groups = defaultdict(list)
        for f in files:
            norm = normalize_name(f)
            normalized_groups[norm].append(f)
        
        for norm_name, group_files in normalized_groups.items():
            if len(group_files) > 1:
                print(f"📄 Potential duplicates (same content likely):")
                for f in group_files:
                    filepath = os.path.join(directory, f)
                    print(f"   - {f} ({os.path.getsize(filepath) / 1024:.1f} KB)")
                print()

if __name__ == "__main__":
    unsorted_dir = "unsorted"
    
    if not os.path.exists(unsorted_dir):
        print(f"Error: {unsorted_dir} folder not found")
        exit(1)
    
    find_duplicates(unsorted_dir)
