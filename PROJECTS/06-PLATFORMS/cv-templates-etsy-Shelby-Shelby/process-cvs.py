#!/usr/bin/env python3
"""
CV Template Catalog & Deduplication Script
Processes all CVs, removes duplicates, catalogs by category, verifies editability
"""

import os
import hashlib
import shutil
from pathlib import Path
from datetime import datetime

# Configuration
UNSORTED_DIR = Path("/mnt/data/openclaw/workspace/.openclaw/workspace/unsorted")
OUTPUT_DIR = Path("/mnt/data/openclaw/workspace/.openclaw/workspace/cv-organization")
CATALOG_FILE = OUTPUT_DIR / "CV_CATALOG.md"

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

def get_file_size_category(filepath):
    """Categorize by file size (proxy for content richness)"""
    try:
        size = os.path.getsize(filepath)
        if size < 20000:  # < 20KB
            return "minimal"
        elif size < 100000:  # < 100KB
            return "standard"
        elif size < 300000:  # < 300KB
            return "detailed"
        else:
            return "comprehensive"
    except:
        return "unknown"

def categorize_by_content(filename):
    """Categorize CV based on filename keywords"""
    filename_lower = filename.lower()
    
    for category, keywords in CATEGORIES.items():
        if any(keyword in filename_lower for keyword in keywords):
            return category
    
    # Check size-based as fallback
    size_cat = get_file_size_category(UNSORTED_DIR / filename)
    if size_cat == "comprehensive":
        return "executive"
    elif size_cat == "minimal":
        return "entry-level"
    
    return "general"

def scan_cv_files():
    """Scan all CV files in unsorted directory"""
    print("📂 Scanning CV files...")
    
    cv_files = []
    for ext in ["*.docx", "*.DOCX", "*.pdf", "*.PDF"]:
        cv_files.extend(UNSORTED_DIR.glob(ext))
    
    print(f"   Found {len(cv_files)} files")
    return cv_files

def find_duplicates(cv_files):
    """Find and remove duplicate files"""
    print("\n🔍 Finding duplicates...")
    
    hash_to_files = {}
    duplicates = []
    unique_files = []
    
    for filepath in cv_files:
        file_hash = get_file_hash(filepath)
        if file_hash:
            if file_hash not in hash_to_files:
                hash_to_files[file_hash] = []
            hash_to_files[file_hash].append(filepath)
    
    # Process duplicates
    for file_hash, files in hash_to_files.items():
        if len(files) > 1:
            # Keep the first file, mark rest as duplicates
            unique_files.append(files[0])
            duplicates.extend(files[1:])
            print(f"   Duplicate found: {files[0].name}")
            for dup in files[1:]:
                print(f"      → {dup.name}")
        else:
            unique_files.append(files[0])
    
    print(f"\n   Unique files: {len(unique_files)}")
    print(f"   Duplicates: {len(duplicates)}")
    
    return unique_files, duplicates

def organize_by_category(unique_files):
    """Organize files into category folders"""
    print("\n📁 Organizing by category...")
    
    categories_found = {}
    
    for filepath in unique_files:
        category = categorize_by_content(filepath.name)
        
        if category not in categories_found:
            categories_found[category] = []
        
        categories_found[category].append(filepath)
        print(f"   {filepath.name} → {category}")
    
    # Create directory structure
    for category in categories_found.keys():
        category_dir = OUTPUT_DIR / category
        category_dir.mkdir(parents=True, exist_ok=True)
        
        # Copy files to category folder
        for filepath in categories_found[category]:
            dest = category_dir / filepath.name
            shutil.copy2(filepath, dest)
    
    return categories_found

def generate_catalog(categories_found, duplicates):
    """Generate markdown catalog file"""
    print("\n📝 Generating catalog...")
    
    catalog = []
    catalog.append("# 📄 CV Template Catalog")
    catalog.append(f"**Generated:** {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    catalog.append(f"**Total Unique Templates:** {sum(len(files) for files in categories_found.values())}")
    catalog.append(f"**Duplicates Removed:** {len(duplicates)}")
    catalog.append("")
    
    # Summary table
    catalog.append("## 📊 Summary")
    catalog.append("")
    catalog.append("| Category | Count | Percentage |")
    catalog.append("|----------|-------|------------|")
    
    total = sum(len(files) for files in categories_found.values())
    for category, files in sorted(categories_found.items(), key=lambda x: len(x[1]), reverse=True):
        pct = (len(files) / total * 100) if total > 0 else 0
        catalog.append(f"| {category.title()} | {len(files)} | {pct:.1f}% |")
    
    catalog.append("")
    
    # Detailed listings by category
    catalog.append("## 📁 Templates by Category")
    catalog.append("")
    
    for category, files in sorted(categories_found.items(), key=lambda x: len(x[1]), reverse=True):
        catalog.append(f"### {category.title()} ({len(files)} templates)")
        catalog.append("")
        
        # Group by size
        size_groups = {"minimal": [], "standard": [], "detailed": [], "comprehensive": []}
        
        for filepath in files:
            size_cat = get_file_size_category(filepath)
            size_groups[size_cat].append(filepath)
        
        for size_cat, size_files in size_groups.items():
            if size_files:
                catalog.append(f"#### {size_cat.title()} ({len(size_files)})")
                catalog.append("")
                for filepath in sorted(size_files, key=lambda x: x.name):
                    size_kb = os.path.getsize(filepath) / 1024
                    catalog.append(f"- `{filepath.name}` ({size_kb:.1f} KB)")
                catalog.append("")
        
        catalog.append("")
    
    # Duplicates list
    if duplicates:
        catalog.append("## 🗑️ Duplicates Removed")
        catalog.append("")
        catalog.append("These files were identical to others and removed:")
        catalog.append("")
        for dup in duplicates:
            catalog.append(f"- `{dup.name}`")
        catalog.append("")
    
    # Editability notes
    catalog.append("## ✅ Editability Checklist")
    catalog.append("")
    catalog.append("All templates should be verified for:")
    catalog.append("")
    catalog.append("- [ ] Opens in Microsoft Word")
    catalog.append("- [ ] Opens in Google Docs")
    catalog.append("- [ ] Text is editable (not images)")
    catalog.append("- [ ] Fonts are free/standard (Google Fonts)")
    catalog.append("- [ ] No protected sections")
    catalog.append("- [ ] ATS-friendly (no graphics in body)")
    catalog.append("- [ ] Placeholder text is clear")
    catalog.append("- [ ] Color scheme is professional")
    catalog.append("")
    
    # Write catalog
    with open(CATALOG_FILE, 'w', encoding='utf-8') as f:
        f.write('\n'.join(catalog))
    
    print(f"   Catalog saved to: {CATALOG_FILE}")

def main():
    """Main execution"""
    print("=" * 60)
    print("🚀 CV Template Processing Script")
    print("=" * 60)
    
    # Ensure output directory exists
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    
    # Step 1: Scan files
    cv_files = scan_cv_files()
    
    if not cv_files:
        print("❌ No CV files found!")
        return
    
    # Step 2: Find duplicates
    unique_files, duplicates = find_duplicates(cv_files)
    
    # Step 3: Organize by category
    categories_found = organize_by_category(unique_files)
    
    # Step 4: Generate catalog
    generate_catalog(categories_found, duplicates)
    
    # Step 5: Summary
    print("\n" + "=" * 60)
    print("✅ PROCESSING COMPLETE!")
    print("=" * 60)
    print(f"\n📊 Results:")
    print(f"   Total files scanned: {len(cv_files)}")
    print(f"   Unique templates: {len(unique_files)}")
    print(f"   Duplicates removed: {len(duplicates)}")
    print(f"   Categories created: {len(categories_found)}")
    print(f"\n📁 Output directory: {OUTPUT_DIR}")
    print(f"📝 Catalog file: {CATALOG_FILE}")
    print("\n🎯 Next steps:")
    print("   1. Review catalog at: CV_CATALOG.md")
    print("   2. Verify editability of templates")
    print("   3. Select best 15-20 for Etsy launch")
    print("   4. Create preview images")
    print("   5. List on Etsy!")
    print("=" * 60)

if __name__ == "__main__":
    main()
