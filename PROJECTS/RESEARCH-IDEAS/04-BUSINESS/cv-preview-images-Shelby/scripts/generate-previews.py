#!/usr/bin/env python3
"""
CV Preview Image Generator
Generates preview images from CV/resume templates for Etsy listings.

Usage:
    python generate-previews.py --input <template_dir> --output <output_dir> --category <category>

Requirements:
    - Python 3.8+
    - Pillow (PIL)
    - reportlab (for PDF handling)
"""

import os
import sys
import argparse
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
import hashlib

# Configuration
SUPPORTED_FORMATS = ['.docx', '.doc', '.pdf', '.png', '.jpg', '.jpeg']
THUMBNAIL_SIZE = (400, 600)
PREVIEW_SIZE = (800, 1200)
MOCKUP_SIZE = (1200, 1600)
LIFESTYLE_SIZE = (1500, 1500)

class CVPreviewGenerator:
    def __init__(self, input_dir, output_dir, category):
        self.input_dir = Path(input_dir)
        self.output_dir = Path(output_dir)
        self.category = category
        self.generated_count = 0
        
    def generate_thumbnail(self, template_path, output_path):
        """Generate thumbnail preview (400x600)"""
        # Create placeholder thumbnail
        img = Image.new('RGB', THUMBNAIL_SIZE, color='white')
        draw = ImageDraw.Draw(img)
        
        # Add template name
        template_name = template_path.stem
        draw.text((20, 20), f"{self.category.upper()}", fill='#333333')
        draw.text((20, 50), template_name[:30], fill='#666666')
        
        # Add placeholder CV layout
        draw.rectangle([20, 100, 380, 580], outline='#CCCCCC', width=2)
        for i in range(5):
            y = 120 + (i * 80)
            draw.line([(40, y), (360, y)], fill='#EEEEEE', width=3)
        
        img.save(output_path, 'JPEG', quality=85, optimize=True)
        self.generated_count += 1
        return output_path
    
    def generate_preview(self, template_path, output_path):
        """Generate standard preview (800x1200)"""
        img = Image.new('RGB', PREVIEW_SIZE, color='white')
        draw = ImageDraw.Draw(img)
        
        # Add header
        draw.text((40, 40), f"{self.category} CV Template", fill='#222222')
        draw.text((40, 80), template_path.name, fill='#666666')
        
        # Add CV preview area
        draw.rectangle([40, 120, 760, 1160], outline='#DDDDDD', width=2)
        
        # Simulate CV content lines
        for i in range(15):
            y = 160 + (i * 60)
            line_width = 600 - (i % 5) * 50
            draw.line([(80, y), (80 + line_width, y)], fill='#F0F0F0', width=4)
        
        img.save(output_path, 'PNG', optimize=True)
        self.generated_count += 1
        return output_path
    
    def generate_mockup(self, template_path, output_path):
        """Generate full mockup (1200x1600)"""
        img = Image.new('RGB', MOCKUP_SIZE, color='#F5F5F5')
        draw = ImageDraw.Draw(img)
        
        # Add shadow effect
        shadow_offset = 10
        for i in range(shadow_offset):
            alpha = 20 - (i * 2)
            draw.rectangle([100+i, 100+i, 1100-i, 1500-i], 
                          fill=f'rgba(0,0,0,{alpha})')
        
        # Add CV page
        draw.rectangle([100, 100, 1100, 1500], fill='white')
        
        # Add CV content simulation
        draw.text((150, 150), "Professional CV Template", fill='#333333')
        for i in range(20):
            y = 220 + (i * 60)
            draw.line([(150, y), (1050, y)], fill='#F5F5F5', width=3)
        
        img.save(output_path, 'PNG', optimize=True)
        self.generated_count += 1
        return output_path
    
    def generate_lifestyle(self, template_path, output_path):
        """Generate lifestyle mockup (1500x1500)"""
        img = Image.new('RGB', LIFESTYLE_SIZE, color='#E8E8E8')
        draw = ImageDraw.Draw(img)
        
        # Create laptop/screen mockup
        laptop_rect = [200, 300, 1300, 1200]
        draw.rectangle(laptop_rect, fill='#222222', outline='#444444', width=3)
        draw.rectangle([210, 310, 1290, 1190], fill='white')
        
        # Add CV content
        draw.text((250, 350), "Your Professional CV", fill='#333333')
        for i in range(15):
            y = 420 + (i * 50)
            draw.line([(250, y), (1250, y)], fill='#F0F0F0', width=2)
        
        # Add branding
        draw.text((600, 1400), "CV Template Pro", fill='#666666')
        
        img.save(output_path, 'JPEG', quality=90, optimize=True)
        self.generated_count += 1
        return output_path
    
    def process_template(self, template_path):
        """Process a single template and generate all image types"""
        template_name = template_path.stem
        
        # Create category subdirectories
        for subdir in ['thumbnails', 'previews', 'mockups', 'lifestyle']:
            (self.output_dir / subdir).mkdir(parents=True, exist_ok=True)
        
        # Generate all image types
        self.generate_thumbnail(
            template_path,
            self.output_dir / 'thumbnails' / f"{self.category}_{template_name}_thumb.jpg"
        )
        
        self.generate_preview(
            template_path,
            self.output_dir / 'previews' / f"{self.category}_{template_name}_preview.png"
        )
        
        self.generate_mockup(
            template_path,
            self.output_dir / 'mockups' / f"{self.category}_{template_name}_mockup.png"
        )
        
        self.generate_lifestyle(
            template_path,
            self.output_dir / 'lifestyle' / f"{self.category}_{template_name}_lifestyle.jpg"
        )
        
        print(f"  ✓ Generated 4 images for: {template_name}")
    
    def process_all(self):
        """Process all templates in input directory"""
        print(f"\n📸 Generating preview images for category: {self.category.upper()}")
        print(f"Input: {self.input_dir}")
        print(f"Output: {self.output_dir}\n")
        
        # Find all supported files
        templates = []
        for ext in SUPPORTED_FORMATS:
            templates.extend(self.input_dir.glob(f'*{ext}'))
        
        if not templates:
            print(f"⚠️  No templates found in {self.input_dir}")
            return
        
        print(f"Found {len(templates)} templates\n")
        
        # Process each template
        for template in templates:
            try:
                self.process_template(template)
            except Exception as e:
                print(f"  ✗ Error processing {template.name}: {e}")
        
        print(f"\n✅ Generation complete! Created {self.generated_count} images")


def main():
    parser = argparse.ArgumentParser(description='Generate CV preview images')
    parser.add_argument('--input', '-i', required=True, help='Input directory with templates')
    parser.add_argument('--output', '-o', required=True, help='Output directory for images')
    parser.add_argument('--category', '-c', required=True, help='Category name (general, executive, etc.)')
    
    args = parser.parse_args()
    
    generator = CVPreviewGenerator(args.input, args.output, args.category)
    generator.process_all()


if __name__ == '__main__':
    main()
