#!/usr/bin/env python3
"""
CV Organization Script
Scans unsorted folder and helps organize CVs into the proper structure.
"""

import os
import shutil
from datetime import datetime

UNSORTED_DIR = "unsorted"
CV_ORG_DIR = "cv-organization"

# Keywords to identify personal CVs
PERSONAL_KEYWORDS = {
    "charmaine": "charmaine",
    "godolphin": "charmaine-godolphin",
    "frost": "charmaine-frost",
    "darren bland": "darren-bland",
    "adrian frost": "adrian-frost",
}

# Keywords to identify templates
TEMPLATE_KEYWORDS = [
    "template", "cv_template", "at-resume", "sample", "free-resume",
    "minimalist", "professional work", "executive resume", "coolfreecv"
]

def identify_cv_type(filename):
    """Determine what category a CV belongs to."""
    filename_lower = filename.lower()
    
    # Check if it's a template
    for keyword in TEMPLATE_KEYWORDS:
        if keyword in filename_lower:
            return "template", None
    
    # Check for personal CVs
    for keyword, folder in PERSONAL_KEYWORDS.items():
        if keyword in filename_lower:
            return "personal", folder
    
    return "other", None

def get_template_subfolder(filename):
    """Determine which template subfolder a file belongs in."""
    filename_lower = filename.lower()
    
    if "executive" in filename_lower:
        return "executive"
    elif any(x in filename_lower for x in ["creative", "minimalist", "twist", "gold", "contemporary"]):
        return "creative"
    elif any(x in filename_lower for x in ["professional", "standard", "classic", "midlevel"]):
        return "professional"
    else:
        return "industry-specific"

def organize_cv(filename):
    """Return the target folder for a CV."""
    cv_type, folder = identify_cv_type(filename)
    
    if cv_type == "template":
        return os.path.join(CV_ORG_DIR, "03-templates", get_template_subfolder(filename))
    elif cv_type == "personal" and folder:
        return os.path.join(CV_ORG_DIR, "02-personal-cvs", folder)
    else:
        return os.path.join(CV_ORG_DIR, "02-personal-cvs", "others")

def scan_unsorted():
    """Scan unsorted folder and print organization recommendations."""
    if not os.path.exists(UNSORTED_DIR):
        print(f"Error: {UNSORTED_DIR} folder not found")
        return
    
    print(f"\n📁 Scanning {UNSORTED_DIR}/\n")
    
    total_files = 0
    by_category = {}
    
    for filename in os.listdir(UNSORTED_DIR):
        if not filename.lower().endswith(('.pdf', '.docx', '.doc')):
            continue
            
        total_files += 1
        target = organize_cv(filename)
        by_category[target] = by_category.get(target, []) + [filename]
    
    # Print summary
    print(f"Total CVs found: {total_files}\n")
    print("📋 Organization Recommendations:\n")
    
    for target, files in sorted(by_category.items()):
        print(f"📂 {target}")
        for f in files[:10]:  # Show first 10
            print(f"   - {f}")
        if len(files) > 10:
            print(f"   ... and {len(files) - 10} more")
        print()
    
    print(f"\nTotal unique categories: {len(by_category)}")

if __name__ == "__main__":
    scan_unsorted()
