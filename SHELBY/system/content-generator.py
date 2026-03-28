#!/usr/bin/env python3
"""
Shelby's Content Generator
Generates HTML pages from markdown stories and guides.
"""

import os
from pathlib import Path
from datetime import datetime

WORKSPACE = Path("/mnt/data/openclaw/workspace/.openclaw/workspace")
SHELBY = WORKSPACE / "SHELBY"
WEBSITE = WORKSPACE / "website-shelby-travels"

def get_next_episode_number():
    """Find the next episode number to create"""
    episodes_dir = WEBSITE / "episodes"
    if not episodes_dir.exists():
        return 1
    
    existing = [f for f in episodes_dir.glob("*.html") if f.stem.startswith("0")]
    if not existing:
        return 1
    
    numbers = [int(f.stem.split("-")[0]) for f in existing]
    return max(numbers) + 1

def create_episode_html(ep_num, title, word_count, duration, content):
    """Create HTML page for an episode"""
    html = f'''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Episode {ep_num:03d}: {title} — Shelby Travels</title>
    <meta name="description" content="{content[:160]}...">
    <link rel="stylesheet" href="../css/style.css">
    <style>
        .episode-page {{ max-width: 800px; margin: 0 auto; padding: 40px 20px; background: white; }}
        .episode-header {{ margin-bottom: 40px; padding-bottom: 20px; border-bottom: 2px solid #eee; }}
        .episode-meta {{ color: #666; font-size: 0.9rem; margin-bottom: 20px; }}
        .episode-content {{ font-size: 1.1rem; line-height: 1.8; }}
        .episode-content h1, .episode-content h2, .episode-content h3 {{ color: #667eea; margin: 30px 0 15px; }}
        .episode-content p {{ margin-bottom: 20px; }}
        .episode-nav {{ margin-top: 60px; padding-top: 30px; border-top: 2px solid #eee; display: flex; justify-content: space-between; }}
        .episode-nav a {{ color: #667eea; text-decoration: none; font-weight: 600; }}
    </style>
</head>
<body>
    <header class="site-header">
        <div class="container">
            <h1 class="site-title"><a href="../index.html" style="color: white; text-decoration: none;">🤖 Shelby Travels</a></h1>
            <p class="site-tagline">Stories from the Edge of the World</p>
        </div>
    </header>

    <main class="episode-page">
        <nav class="container" style="margin-bottom: 20px;">
            <a href="../index.html" style="color: #667eea; text-decoration: none;">← Back to Episodes</a>
        </nav>

        <article class="episode-content">
            <header class="episode-header">
                <h1>Episode {ep_num:03d}: {title}</h1>
                <p class="episode-meta">
                    <strong>Duration:</strong> ~{duration} min read ({word_count:,} words) <br>
                    <strong>Generated:</strong> {datetime.now().strftime("%Y-%m-%d")}
                </p>
            </header>

            <div class="content-body">
                {content}
            </div>

            <hr>
            <p><strong>EPISODE {ep_num:03d} COMPLETE</strong></p>
        </article>

        <nav class="episode-nav">
            <a href="{f"{ep_num-1:03d}" if ep_num > 1 else "index"}.html">← Previous</a>
            <a href="../index.html">Back to All Episodes</a>
        </nav>
    </main>

    <footer class="site-footer">
        <div class="container">
            <p>&copy; 2026 Shelby Travels. All rights reserved.</p>
        </div>
    </footer>
</body>
</html>
'''
    return html

def main():
    print("🤖 Shelby Content Generator")
    print("=" * 40)
    
    # Check what markdown stories exist
    stories_dir = SHELBY / "creative_stories" / "stories"
    if not stories_dir.exists():
        print("❌ No stories directory found")
        return
    
    stories = list(stories_dir.glob("*.md"))
    print(f"📚 Found {len(stories)} markdown stories")
    
    for story in stories:
        print(f"  - {story.name}")
    
    print("\n✅ Content generator ready")
    print("Call with: python3 content-generator.py --generate-all")

if __name__ == "__main__":
    main()
