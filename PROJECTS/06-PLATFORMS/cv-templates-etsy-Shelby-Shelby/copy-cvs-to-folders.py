#!/usr/bin/env python3
"""
CV File Copy Script
Copies unique CV files to organized category folders
"""

import os
import hashlib
import shutil
from pathlib import Path
from datetime import datetime

# Configuration
UNSORTED_DIR = Path("/mnt/data/openclaw/workspace/.openclaw/workspace/unsorted")
OUTPUT_DIR = Path("/mnt/data/openclaw/workspace/.openclaw/workspace/cv-organization")

# Categories based on keywords
CATEGORIES = {
    "executive": ["executive", "senior", "director", "vp", "chief", "head of", "manager"],
    "entry-level": ["entry", "junior", "graduate", "student", "intern", "assistant"],
    "creative": ["creative", "designer", "artist", "marketing", "social media"],
    "technical": ["developer", "engineer", "it", "software", "technical", "data", "devops"],
    "academic": ["academic", "research", "phd", "professor", "lecturer", "education"],
    "healthcare": ["nurse", "doctor", "medical", "healthcare", "clinical"],
    "business": ["business", "finance", "accounting", "sales", "consulting"],
    "trades": ["technician", "trade", "construction", "electrician", "mechanic"],
    "general": []  # Default category
}

def get_file_hash(filepath):
    """Calculate MD5 hash of file content"""
    hash_md5 = hashlib.md5()
    try:
        with open(filepath, "rb") as f:
            for chunk in iter(lambda: f.read(4096), b""):
                hash_md5.update(chunk)
        return hash_md5.hexdigest()
    except Exception as e:
        print(f"Error hashing {filepath}: {e}")
        return None

def categorize_by_content(filename):
    """Categorize CV based on filename keywords"""
    filename_lower = filename.lower()
    
    for category, keywords in CATEGORIES.items():
        if any(keyword in filename_lower for keyword in keywords):
            return category
    
    # Check size-based as fallback
    try:
        size = os.path.getsize(UNSORTED_DIR / filename)
        if size > 200000:  # > 200KB
            return "executive"
        elif size < 25000:  # < 25KB
            return "entry-level"
    except:
        pass
    
    return "general"

def main():
    """Main execution"""
    print("=" * 60)
    print("📂 CV File Copy Script")
    print("=" * 60)
    
    # Ensure output directories exist
    for category in CATEGORIES.keys():
        (OUTPUT_DIR / category).mkdir(parents=True, exist_ok=True)
    
    # Find all .docx and .DOCX files
    cv_files = []
    for ext in ["*.docx", "*.DOCX"]:
        cv_files.extend(UNSORTED_DIR.glob(ext))
    
    print(f"\n🔍 Found {len(cv_files)} CV files")
    
    # Find duplicates
    hash_to_files = {}
    duplicates = []
    unique_files = []
    
    for filepath in cv_files:
        file_hash = get_file_hash(filepath)
        if file_hash:
            if file_hash not in hash_to_files:
                hash_to_files[file_hash] = []
            hash_to_files[file_hash].append(filepath)
    
    for file_hash, files in hash_to_files.items():
        if len(files) > 1:
            unique_files.append(files[0])
            duplicates.extend(files[1:])
        else:
            unique_files.append(files[0])
    
    print(f"   Unique files: {len(unique_files)}")
    print(f"   Duplicates: {len(duplicates)}")
    
    # Copy files to category folders
    print("\n📁 Copying files to categories...")
    
    files_copied = {"executive": 0, "entry-level": 0, "creative": 0, "technical": 0, "general": 0}
    
    for filepath in unique_files:
        category = categorize_by_content(filepath.name)
        dest = OUTPUT_DIR / category / filepath.name
        shutil.copy2(filepath, dest)
        files_copied[category] += 1
        print(f"   {filepath.name} → {category}")
    
    # Summary
    print("\n" + "=" * 60)
    print("✅ COPY COMPLETE!")
    print("=" * 60)
    print(f"\n📊 Results:")
    print(f"   Total files copied: {len(unique_files)}")
    print(f"   By category:")
    for category, count in files_copied.items():
        if count > 0:
            print(f"      - {category.title()}: {count}")
    print(f"\n📁 Output directory: {OUTPUT_DIR}")
    print("\n🎯 Next steps:")
    print("   1. Verify files opened in Word/Google Docs")
    print("   2. Check text is editable (not images)")
    print("   3. Select 15-20 best for Etsy launch")
    print("   4. Create preview images")
    print("=" * 60)

if __name__ == "__main__":
    main()
