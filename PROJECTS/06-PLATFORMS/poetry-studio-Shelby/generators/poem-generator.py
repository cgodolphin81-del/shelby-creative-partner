#!/usr/bin/env python3
"""
AI Poetry Generator
Supports: Haiku, Sonnet, Free Verse, Rap
Uses AI prompts for authentic style generation
"""

import json
from datetime import datetime

# ============================================
# AI PROMPTS FOR EACH POETRY STYLE
# ============================================

POEM_PROMPTS = {
    "haiku": {
        "system": "You are a haiku master. Write traditional 5-7-5 syllable haiku.",
        "user": """Write a haiku about: {topic}

Requirements:
- Line 1: 5 syllables
- Line 2: 7 syllables  
- Line 3: 5 syllables
- Include nature imagery
- Capture a single moment
- No rhyme required

Format:
Line 1
Line 2
Line 3""",
        "examples": [
            "Cherry blossoms fall / Dancing on the spring breeze now / Pink snow covers grass",
            "Old pond, still and deep / A frog jumps in, water sounds / Silence returns again",
            "Winter moon so bright / My shadow walks beside me / Two souls on the path"
        ]
    },
    
    "sonnet": {
        "system": "You are a Shakespearean sonnet poet. Write in iambic pentameter with ABAB CDCD EFEF GG rhyme scheme.",
        "user": """Write a Shakespearean sonnet about: {topic}

Requirements:
- 14 lines total
- Iambic pentameter (10 syllables per line, unstressed-stressed pattern)
- Rhyme scheme: ABAB CDCD EFEF GG
- Three quatrains + one couplet
- Elevated, romantic language
- Volta (turn) at line 13

Structure:
Quatrain 1 (ABAB): Introduce theme
Quatrain 2 (CDCD): Develop theme  
Quatrain 3 (EFEF): Complicate/contrast
Couplet (GG): Resolution/insight""",
        "examples": [
            "Shall I compare thee to a summer's day? / Thou art more lovely and more temperate...",
            "Let me not to the marriage of true minds / Admit impediments. Love is not love..."
        ]
    },
    
    "free_verse": {
        "system": "You are a contemporary free verse poet. Write expressive, unrhymed poetry with vivid imagery.",
        "user": """Write a free verse poem about: {topic}

Requirements:
- No fixed meter or rhyme scheme
- Use enjambment (line breaks for emphasis)
- Include sensory details (sight, sound, touch, smell, taste)
- Create emotional resonance
- 12-24 lines
- Contemporary voice

Techniques to use:
- Metaphor and simile
- Concrete imagery
- White space for pacing
- Unexpected line breaks""",
        "examples": [
            "The Red Wheelbarrow by William Carlos Williams",
            "This Is Just To Say by William Carlos Williams",
            "Contemporary poets: Ocean Vuong, Ada Limón, Ross Gay"
        ]
    },
    
    "rap": {
        "system": "You are a skilled rapper and lyricist. Write authentic hip-hop verses with flow and wordplay.",
        "user": """Write a rap verse about: {topic}

Requirements:
- 16-24 bars (lines)
- AABB or ABAB rhyme scheme
- Internal rhymes and multis
- Wordplay, metaphors, punchlines
- Strong rhythm and flow
- Hook/chorus (4-8 lines, repeatable)
- Authentic voice

Structure:
- Intro (2 bars, set the mood)
- Verse 1 (16 bars, tell the story)
- Hook (4-8 bars, main message)
- Verse 2 (16 bars, deepen/contrast)
- Outro (2 bars, fade out)

Flow tips:
- Vary syllable counts for rhythm
- Use alliteration and assonance
- End rhymes should land hard
- Include ad-libs in parentheses""",
        "examples": [
            "Kendrick Lamar: storytelling, social commentary",
            "J. Cole: introspective, personal",
            "Noname: poetic, jazz-influenced"
        ]
    }
}

# ============================================
# TOPIC SUGGESTIONS
# ============================================

TOPIC_CATEGORIES = {
    "love": ["first love", "lost love", "self-love", "unrequited love", "long-distance love"],
    "nature": ["ocean waves", "mountain sunrise", "forest rain", "desert night", "city garden"],
    "life": ["growing up", "finding purpose", "overcoming fear", "new beginnings", "letting go"],
    "seasons": ["spring renewal", "summer heat", "autumn change", "winter silence"],
    "emotions": ["hope", "grief", "joy", "anger", "peace", "longing"],
    "people": ["mother", "father", "friend", "stranger", "hero", "teacher"],
    "places": ["home", "childhood street", "airport goodbye", "coffee shop", "rooftop at dusk"],
    "abstract": ["time", "memory", "dreams", "silence", "freedom", "truth"]
}

def get_random_topic():
    """Generate a random poetry topic"""
    import random
    category = random.choice(list(TOPIC_CATEGORIES.keys()))
    topic = random.choice(TOPIC_CATEGORIES[category])
    return category, topic

def generate_poem_prompt(style, topic=None):
    """Generate the full prompt for AI poem generation"""
    if style not in POEM_PROMPTS:
        raise ValueError(f"Unknown style: {style}. Choose from: {list(POEM_PROMPTS.keys())}")
    
    if not topic:
        _, topic = get_random_topic()
    
    prompt_data = POEM_PROMPTS[style]
    user_prompt = prompt_data["user"].format(topic=topic)
    
    return {
        "system": prompt_data["system"],
        "user": user_prompt,
        "style": style,
        "topic": topic,
        "timestamp": datetime.now().isoformat()
    }

def count_syllables(text):
    """Simple syllable counter (approximation)"""
    text = text.lower().strip()
    vowels = "aeiouy"
    count = 0
    prev_vowel = False
    
    for char in text:
        is_vowel = char in vowels
        if is_vowel and not prev_vowel:
            count += 1
        prev_vowel = is_vowel
    
    # Handle silent e
    if text.endswith('e') and count > 1:
        count -= 1
    
    return max(1, count)

def validate_haiku(lines):
    """Validate haiku syllable structure"""
    if len(lines) != 3:
        return False, "Haiku must have exactly 3 lines"
    
    syllables = [count_syllables(line) for line in lines]
    expected = [5, 7, 5]
    
    if syllables != expected:
        return False, f"Syllable count: {syllables}, expected {expected}"
    
    return True, "Valid haiku!"

def save_poem(poem, style, topic, filename=None):
    """Save poem to file"""
    if not filename:
        filename = f"poem_{style}_{datetime.now().strftime('%Y%m%d_%H%M%S')}.txt"
    
    filepath = f"/mnt/data/openclaw/workspace/.openclaw/workspace/poetry-studio/generators/output/{filename}"
    
    content = f"""
╔═══════════════════════════════════════════════════════════╗
║                    AI POETRY STUDIO                        ║
╚═══════════════════════════════════════════════════════════╝

Style: {style.upper()}
Topic: {topic}
Generated: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}

─────────────────────────────────────────────────────────────

{poem}

─────────────────────────────────────────────────────────────

© AI Poetry Studio | poetry-studio.com
"""
    
    with open(filepath, 'w') as f:
        f.write(content)
    
    return filepath

# ============================================
# MAIN USAGE
# ============================================

if __name__ == "__main__":
    import sys
    
    print("""
╔═══════════════════════════════════════════════════════════╗
║              🎭 AI POETRY STUDIO - Generator              ║
╚═══════════════════════════════════════════════════════════╝

Available styles: haiku, sonnet, free_verse, rap

Usage:
  python poem-generator.py <style> [topic]
  
Examples:
  python poem-generator.py haiku "cherry blossoms"
  python poem-generator.py sonnet "eternal love"
  python poem-generator.py free_verse "city rain"
  python poem-generator.py rap "overcoming struggles"
  python poem-generator.py haiku  # random topic
    """)
    
    if len(sys.argv) < 2:
        # Show example prompts
        print("\n📝 Example Prompts Ready to Use:\n")
        for style in POEM_PROMPTS:
            prompt = generate_poem_prompt(style, "example topic")
            print(f"\n{style.upper()}:")
            print(f"  System: {prompt['system'][:80]}...")
            print(f"  Topic: {prompt['topic']}")
    else:
        style = sys.argv[1]
        topic = sys.argv[2] if len(sys.argv) > 2 else None
        
        prompt = generate_poem_prompt(style, topic)
        print(f"\n🎯 Generated Prompt for {style.upper()}:")
        print(f"   Topic: {prompt['topic']}")
        print(f"\n📤 Send to AI with these parameters:")
        print(json.dumps(prompt, indent=2))
