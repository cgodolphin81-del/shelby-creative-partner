#!/usr/bin/env python3
"""
On-Page SEO Optimizer
Analyzes and optimizes content for target keywords
"""

import json
import re
from pathlib import Path
from datetime import datetime

class OnPageOptimizer:
    def __init__(self):
        self.stop_words = {
            'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for',
            'of', 'with', 'by', 'from', 'as', 'is', 'was', 'are', 'were', 'been',
            'be', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could'
        }
    
    def analyze_content(self, content: str, target_keyword: str) -> dict:
        """Analyze content for SEO optimization"""
        
        analysis = {
            'timestamp': datetime.now().isoformat(),
            'target_keyword': target_keyword,
            'metrics': {},
            'issues': [],
            'recommendations': [],
            'score': 0
        }
        
        # Word count
        word_count = len(content.split())
        analysis['metrics']['word_count'] = word_count
        
        if word_count < 1500:
            analysis['issues'].append(f"Content too short ({word_count} words). Target: 1500+")
        elif word_count > 3000:
            analysis['recommendations'].append("Consider breaking into multiple articles")
        
        # Keyword density
        keyword_count = len(re.findall(rf'\b{re.escape(target_keyword)}\b', content, re.IGNORECASE))
        density = (keyword_count / word_count) * 100 if word_count > 0 else 0
        analysis['metrics']['keyword_density'] = round(density, 2)
        
        if density < 0.5:
            analysis['issues'].append(f"Keyword density too low ({density}%). Target: 1-2%")
        elif density > 3:
            analysis['issues'].append(f"Keyword density too high ({density}%). Risk of keyword stuffing")
        
        # Check keyword in title (first line or h1)
        first_lines = content.split('\n')[:3]
        title_text = ' '.join(first_lines).lower()
        if target_keyword.lower() in title_text:
            analysis['metrics']['keyword_in_title'] = True
        else:
            analysis['issues'].append("Target keyword not found in title/H1")
            analysis['recommendations'].append("Add keyword to the beginning of your title")
        
        # Check keyword in first paragraph
        first_paragraph = content.split('\n\n')[0] if '\n\n' in content else content[:500]
        if target_keyword.lower() in first_paragraph.lower():
            analysis['metrics']['keyword_in_first_paragraph'] = True
        else:
            analysis['issues'].append("Target keyword not in first 100 words")
        
        # Check heading structure
        headings = re.findall(r'^#{1,6}\s+(.+)$', content, re.MULTILINE)
        analysis['metrics']['heading_count'] = len(headings)
        
        h2_keywords = sum(1 for h in headings if h.startswith('##') and target_keyword.lower() in h.lower())
        if h2_keywords < 2:
            analysis['recommendations'].append("Include keyword in 2-3 H2 headings")
        
        # Generate meta description suggestion
        first_500_chars = content[:500].replace('\n', ' ').strip()
        meta_desc = f"{first_500_chars}..." if len(first_500_chars) > 150 else first_500_chars
        if len(meta_desc) > 160:
            meta_desc = meta_desc[:157] + "..."
        analysis['recommendations'].append(f"Suggested meta description: {meta_desc}")
        
        # Calculate SEO score
        score = 100
        score -= len(analysis['issues']) * 10
        score += len([r for r in analysis['recommendations'] if 'Suggested' not in r]) * 5
        analysis['score'] = max(0, min(100, score))
        
        return analysis
    
    def generate_schema(self, article_data: dict) -> dict:
        """Generate FAQ schema markup"""
        
        schema = {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": article_data.get('title', ''),
            "description": article_data.get('meta_description', ''),
            "author": {
                "@type": "Organization",
                "name": article_data.get('author', 'Site Team')
            },
            "datePublished": article_data.get('publish_date', datetime.now().isoformat()),
            "mainEntity": {
                "@type": "FAQPage",
                "mainEntity": []
            }
        }
        
        # Add FAQ questions
        for i, faq in enumerate(article_data.get('faq', []), 1):
            schema['mainEntity']['mainEntity'].append({
                "@type": "Question",
                "name": faq.get('question', f'Question {i}'),
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.get('answer', '')
                }
            })
        
        return schema
    
    def optimize_internal_links(self, content: str, site_structure: dict) -> str:
        """Suggest internal linking opportunities"""
        
        optimized = content
        link_suggestions = []
        
        # Find potential anchor texts
        for page_name, keywords in site_structure.items():
            for keyword in keywords:
                pattern = rf'\b{re.escape(keyword)}\b'
                matches = list(re.finditer(pattern, content, re.IGNORECASE))
                
                # Suggest linking first occurrence
                if matches and f"[{keyword}](/{page_name})" not in content:
                    link_suggestions.append({
                        'anchor': keyword,
                        'target': f"/{page_name}",
                        'context': content[matches[0].start()-20:matches[0].end()+20]
                    })
        
        # Limit to 5 suggestions
        link_suggestions = link_suggestions[:5]
        
        print("\n📌 Internal Link Suggestions:")
        for suggestion in link_suggestions:
            print(f"  • Link '{suggestion['anchor']}' → {suggestion['target']}")
            print(f"    Context: ...{suggestion['context']}...")
            print()
        
        return optimized
    
    def save_report(self, analysis: dict, output_path: str):
        """Save analysis report"""
        
        output_file = Path(output_path)
        output_file.parent.mkdir(parents=True, exist_ok=True)
        
        with open(output_file, 'w') as f:
            json.dump(analysis, f, indent=2)
        
        print(f"✓ Report saved to: {output_file}")


def main():
    """Main execution"""
    print("=== On-Page SEO Optimizer ===\n")
    
    optimizer = OnPageOptimizer()
    
    # Get input
    print("Enter target keyword:")
    keyword = input("> ").strip()
    
    print("\nEnter content (paste text, then Ctrl+D on empty line):")
    content_lines = []
    while True:
        try:
            line = input()
            content_lines.append(line)
        except EOFError:
            break
    
    content = '\n'.join(content_lines)
    
    # Analyze
    print("\n🔍 Analyzing content...\n")
    analysis = optimizer.analyze_content(content, keyword)
    
    # Display results
    print(f"\n{'='*50}")
    print(f"SEO Score: {analysis['score']}/100")
    print(f"{'='*50}\n")
    
    print("📊 Metrics:")
    for metric, value in analysis['metrics'].items():
        print(f"  • {metric.replace('_', ' ').title()}: {value}")
    
    if analysis['issues']:
        print("\n⚠️  Issues Found:")
        for issue in analysis['issues']:
            print(f"  ❌ {issue}")
    
    if analysis['recommendations']:
        print("\n💡 Recommendations:")
        for rec in analysis['recommendations']:
            print(f"  ✓ {rec}")
    
    # Save report
    output_path = f"./seo-reports/{keyword.replace(' ', '-')}-analysis.json"
    optimizer.save_report(analysis, output_path)


if __name__ == '__main__':
    main()
