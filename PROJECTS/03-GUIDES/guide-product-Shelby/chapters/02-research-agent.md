# Chapter 2: Agent Blueprint #1 - Personal Research Assistant

## Overview

A Personal Research Assistant agent automates information gathering, synthesis, and summarization. It can research topics across multiple sources, fact-check claims, and deliver concise briefings.

## Agent Profile

**Name**: ResearchBot
**Primary Function**: Automated research and information synthesis
**Key Capabilities**: Web search, content extraction, summarization, fact-checking
**Ideal For**: Students, researchers, analysts, content creators

## Architecture

```
User Query → Intent Classification → Search Strategy → Multi-Source Gathering → 
Synthesis → Fact-Checking → Summary Generation → Delivery
```

## Core Components

### 1. Query Understanding
- Parse user questions for intent and scope
- Identify key topics, entities, and constraints
- Determine depth and breadth of research needed

### 2. Search Strategy
- Select appropriate search engines and databases
- Generate effective search queries
- Plan multi-step research paths

### 3. Information Gathering
- Web search APIs (Google, Bing, Brave)
- Academic databases (Google Scholar, arXiv)
- News sources and RSS feeds
- Social media monitoring

### 4. Content Processing
- Extract readable content from web pages
- Remove ads, navigation, and boilerplate
- Identify key claims and evidence
- Extract quotes, statistics, and data points

### 5. Synthesis Engine
- Cluster similar information from multiple sources
- Identify consensus and disagreements
- Detect bias and perspective differences
- Create coherent narratives from fragmented data

### 6. Quality Assurance
- Cross-reference facts across sources
- Check source credibility and recency
- Flag uncertain or conflicting information
- Cite all sources properly

## Setup Instructions

### Step 1: Environment Setup

```bash
# Create project directory
mkdir research-agent && cd research-agent

# Initialize Python environment
python -m venv venv
source venv/bin/activate  # Linux/Mac
# or: venv\Scripts\activate  # Windows

# Install dependencies
pip install openai requests beautifulsoup4 newspaper3k
pip install python-dotenv langchain duckduckgo-search
```

### Step 2: API Configuration

Create `.env` file:
```env
OPENAI_API_KEY=your_openai_key
SERPER_API_KEY=your_serper_key  # Google Search API
# Alternative: BRAVE_API_KEY=your_brave_key
```

### Step 3: Core Agent Code

Create `research_agent.py`:

```python
import os
from dotenv import load_dotenv
from langchain.agents import initialize_agent, Tool
from langchain.llms import OpenAI
from langchain.utilities import SerperAPI
import requests
from bs4 import BeautifulSoup

load_dotenv()

class ResearchAgent:
    def __init__(self):
        self.llm = OpenAI(temperature=0.7, model="gpt-4")
        self.search = SerperAPI()
        
        tools = [
            Tool(
                name="Search",
                func=self.search.run,
                description="Search Google for current information"
            ),
            Tool(
                name="Extract Content",
                func=self.extract_content,
                description="Extract readable text from a URL"
            ),
            Tool(
                name="Summarize",
                func=self.summarize_text,
                description="Summarize a piece of text"
            )
        ]
        
        self.agent = initialize_agent(
            tools, 
            self.llm, 
            agent="zero-shot-react-description",
            verbose=True
        )
    
    def extract_content(self, url):
        """Extract main content from webpage"""
        try:
            response = requests.get(url, timeout=10)
            soup = BeautifulSoup(response.content, 'html.parser')
            
            # Remove script and style elements
            for script in soup(['script', 'style']):
                script.decompose()
            
            text = soup.get_text()
            lines = (line.strip() for line in text.splitlines())
            chunks = (phrase.strip() for line in lines for phrase in line.split("  "))
            text = '\n'.join(chunk for chunk in chunks if chunk)
            
            return text[:5000]  # Limit length
        except Exception as e:
            return f"Error extracting content: {str(e)}"
    
    def summarize_text(self, text, max_length=500):
        """Summarize text using LLM"""
        prompt = f"Summarize the following text in {max_length} words or less:\n\n{text}"
        return self.llm(prompt)
    
    def research(self, query, num_sources=5, depth="medium"):
        """
        Conduct comprehensive research on a topic
        
        Args:
            query: Research question or topic
            num_sources: Number of sources to consult
            depth: "shallow", "medium", or "deep"
        """
        # Step 1: Initial search
        search_results = self.search.run(query)
        
        # Step 2: Extract and process top results
        findings = []
        urls = self.parse_search_results(search_results)[:num_sources]
        
        for url in urls:
            content = self.extract_content(url)
            summary = self.summarize_text(content, max_length=300)
            findings.append({
                'url': url,
                'summary': summary,
                'content': content
            })
        
        # Step 3: Synthesize findings
        synthesis_prompt = f"""
        Based on the following research findings about "{query}", 
        create a comprehensive summary that:
        1. Identifies key themes and consensus
        2. Notes any disagreements or controversies
        3. Highlights important facts and statistics
        4. Lists all sources used
        
        Findings:
        {findings}
        """
        
        final_report = self.llm(synthesis_prompt)
        
        return {
            'query': query,
            'sources': urls,
            'findings': findings,
            'report': final_report
        }
    
    def parse_search_results(self, search_text):
        """Extract URLs from search results"""
        import re
        urls = re.findall(r'https?://[^\s"]+', search_text)
        return urls

# Usage
if __name__ == "__main__":
    agent = ResearchAgent()
    result = agent.research("latest developments in quantum computing 2024")
    print(result['report'])
```

### Step 4: Advanced Features

Add to `research_agent.py`:

```python
def fact_check(self, claim):
    """Verify a specific claim across multiple sources"""
    search_query = f"fact check: {claim}"
    results = self.search.run(search_query)
    
    verification_prompt = f"""
    Based on these search results, verify the following claim:
    Claim: "{claim}"
    
    Search Results: {results}
    
    Provide:
    1. Verdict: True/False/Misleading/Unverified
    2. Confidence level (0-100%)
    3. Evidence supporting the verdict
    4. Sources consulted
    """
    
    return self.llm(verification_prompt)

def compare_perspectives(self, topic, perspectives=[]):
    """Research different viewpoints on a controversial topic"""
    if not perspectives:
        perspectives = ["supporting", "opposing", "neutral"]
    
    research_results = {}
    for perspective in perspectives:
        query = f"{topic} {perspective} arguments"
        research_results[perspective] = self.research(query, num_sources=3)
    
    comparison_prompt = f"""
    Compare these different perspectives on "{topic}":
    {research_results}
    
    Create a balanced analysis that:
    1. Fairly represents each viewpoint
    2. Identifies common ground
    3. Highlights key disagreements
    4. Notes the strength of evidence for each position
    """
    
    return self.llm(comparison_prompt)
```

## Prompt Templates

### Basic Research Query
```
You are an expert research assistant. Research the following topic thoroughly:

Topic: {topic}
Specific Questions: {questions}
Desired Depth: {shallow|medium|deep}
Time Period: {date_range}
Source Preferences: {academic|news|industry|all}

Provide a comprehensive report with:
1. Executive Summary (2-3 paragraphs)
2. Key Findings (bullet points)
3. Important Statistics and Data
4. Different Perspectives (if applicable)
5. Sources and Citations
6. Areas for Further Research
```

### Fact-Checking Request
```
Please verify the following claim:

Claim: "{claim}"
Context: {where_claim_was_made}
Required Confidence: {high|medium|low}

Search multiple sources and provide:
- Verdict with confidence percentage
- Supporting or refuting evidence
- Quality assessment of sources
- Any relevant context or nuances
```

### Comparative Analysis
```
Compare and contrast the following:

Topic: {topic}
Items to Compare: {item1}, {item2}, {item3}
Comparison Criteria: {criteria_list}

Create a detailed comparison including:
- Overview of each item
- Strengths and weaknesses
- Key differences and similarities
- Use cases and recommendations
- Data-driven insights where available
```

## Common Workflows

### Workflow 1: Quick Brief
```
1. User asks question
2. Agent searches 3-5 sources
3. Extracts key points
4. Delivers 1-paragraph summary with sources
Time: 30-60 seconds
```

### Workflow 2: Deep Dive Report
```
1. User requests comprehensive research
2. Agent searches 10-15 sources
3. Extracts and analyzes full content
4. Synthesizes findings
5. Creates structured report (2000+ words)
6. Includes citations and bibliography
Time: 3-5 minutes
```

### Workflow 3: Ongoing Monitoring
```
1. User sets up topic monitoring
2. Agent searches daily/weekly
3. Identifies new developments
4. Sends alert if significant changes
5. Maintains running summary
Time: Automated
```

## Integration with OpenClaw

Create OpenClaw skill `research-skill`:

```markdown
# research-skill SKILL.md

## Commands
- `research query <topic>` - Quick research on topic
- `research deep <topic>` - Comprehensive report
- `research fact-check <claim>` - Verify specific claim
- `research monitor <topic>` - Set up ongoing monitoring
- `research compare <item1> <item2>` - Comparative analysis

## Configuration
```yaml
default_depth: medium
default_sources: 5
cache_results: true
cache_duration: 24h
cite_sources: always
```

## Dependencies
- OpenAI API or compatible LLM
- Search API (Serper, Brave, or Google)
- BeautifulSoup for content extraction
```

## Performance Optimization

### Speed Improvements
- Parallelize searches and content extraction
- Cache frequently researched topics
- Use streaming for long responses
- Implement progressive summarization

### Cost Optimization
- Use smaller models for simple tasks
- Batch similar queries
- Implement smart rate limiting
- Cache and reuse embeddings

### Quality Improvements
- Diversify source types
- Implement source credibility scoring
- Add contradiction detection
- Include confidence intervals

## Common Pitfalls and Solutions

### Problem: Outdated Information
**Solution**: Implement date filtering, prioritize recent sources, add freshness scoring

### Problem: Source Bias
**Solution**: Deliberately seek diverse perspectives, flag potential bias, use fact-checking APIs

### Problem: Information Overload
**Solution**: Progressive summarization, user-controlled depth levels, smart filtering

### Problem: Hallucinated Citations
**Solution**: Verify all URLs before including, use only extracted content, implement citation validation

## Metrics and KPIs

Track these metrics to improve your agent:
- Research completion time
- Source diversity score
- User satisfaction ratings
- Fact-check accuracy
- Query resolution rate
- Cost per research task

## Next Steps

1. Start with the basic implementation
2. Test with simple research queries
3. Gradually add advanced features
4. Integrate with your preferred tools
5. Monitor and optimize performance

---

**Next Chapter**: Agent Blueprint #2 - Content Creation Assistant
