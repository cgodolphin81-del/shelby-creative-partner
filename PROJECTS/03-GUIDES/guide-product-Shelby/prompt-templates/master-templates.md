# Master Prompt Templates Collection

## Table of Contents
1. Research Agent Prompts
2. Content Creation Prompts
3. Customer Support Prompts
4. Data Analysis Prompts
5. Social Media Prompts
6. General Agent Prompts

---

## 1. Research Agent Prompts

### 1.1 Basic Research Query
```
You are an expert research assistant. Research the following topic thoroughly:

**Topic:** {topic}
**Specific Questions:** {questions}
**Desired Depth:** {shallow|medium|deep}
**Time Period:** {date_range}
**Source Preferences:** {academic|news|industry|all}

**Provide a comprehensive report with:**
1. Executive Summary (2-3 paragraphs)
2. Key Findings (bullet points with evidence)
3. Important Statistics and Data Points
4. Different Perspectives (if applicable)
5. Sources and Citations (with URLs)
6. Areas for Further Research

**Quality Criteria:**
- Use only credible, verified sources
- Note any conflicts or disagreements between sources
- Indicate confidence level for each claim
- Prioritize recent information (last 2 years)
```

### 1.2 Fact-Checking Request
```
Please verify the following claim with rigorous fact-checking:

**Claim:** "{claim}"
**Context:** {where_claim_was_made}
**Required Confidence Level:** {high|medium|low}

**Search Strategy:**
1. Search for primary sources
2. Check fact-checking websites (Snopes, PolitiFact, etc.)
3. Look for expert consensus
4. Find original data/studies if referenced

**Provide:**
- Verdict: [True/False/Misleading/Unverified/Partially True]
- Confidence Level: [0-100%]
- Evidence Summary: [Key evidence supporting verdict]
- Source Quality Assessment: [Credibility of sources used]
- Context/Nuance: [Important qualifications]
- Sources Consulted: [Full citations with URLs]
```

### 1.3 Comparative Analysis
```
Compare and contrast the following items comprehensively:

**Topic:** {topic}
**Items to Compare:** {item1}, {item2}, {item3}
**Comparison Criteria:** {criteria_list}
**Target Audience:** {audience}

**Create a detailed comparison including:**
1. Overview of Each Item
   - Description
   - Key Features
   - Target Use Cases

2. Side-by-Side Comparison Table
   - Feature-by-feature breakdown
   - Pros and Cons for each

3. Performance Metrics (if applicable)
   - Quantitative data
   - Benchmark results

4. Cost-Benefit Analysis
   - Pricing comparison
   - Value proposition

5. Use Case Recommendations
   - Best for X scenario
   - Best for Y scenario

6. Expert Opinions and Reviews
   - Industry consensus
   - User feedback summary

7. Final Recommendation
   - Overall winner
   - Runner-up
   - When to choose each option
```

### 1.4 Literature Review
```
Conduct a literature review on the following topic:

**Research Question:** {question}
**Field:** {field_of_study}
**Time Period:** {years}
**Types of Sources:** {peer-reviewed|all|specific_journals}

**Methodology:**
1. Search academic databases (Google Scholar, PubMed, arXiv, etc.)
2. Identify key papers and authors
3. Extract main findings and methodologies
4. Note contradictions and debates in the field

**Deliverable Structure:**
1. Introduction
   - Background and context
   - Importance of topic
   - Scope of review

2. Thematic Organization
   - Group studies by theme/approach
   - Synthesize findings within themes

3. Methodological Approaches
   - Common methods used
   - Strengths and limitations

4. Key Findings
   - Consensus areas
   - Ongoing debates
   - Gaps in literature

5. Future Research Directions
   - Unanswered questions
   - Emerging areas

6. References
   - Full citations in {APA|MLA|Chicago} format
   - Annotated bibliography (optional)
```

### 1.5 Market Research
```
Conduct comprehensive market research:

**Market:** {market_name}
**Geographic Scope:** {region/country}
**Time Horizon:** {current|forecast_years}

**Research Areas:**
1. Market Size and Growth
   - Current market value
   - Historical growth rates
   - Future projections
   - Key drivers

2. Market Segmentation
   - By product/service type
   - By customer segment
   - By geography
   - By distribution channel

3. Competitive Landscape
   - Major players and market share
   - Competitive strategies
   - Barriers to entry
   - Substitute products

4. Customer Analysis
   - Target demographics
   - Buying behavior
   - Pain points and needs
   - Decision factors

5. Trends and Opportunities
   - Emerging trends
   - Technological disruptions
   - Regulatory changes
   - Growth opportunities

6. Risks and Challenges
   - Market risks
   - Competitive threats
   - External factors

**Output:** Detailed market research report with data, charts, and actionable insights
```

---

## 2. Content Creation Prompts

### 2.1 Blog Post Creation
```
Write a comprehensive blog post with these specifications:

**Topic:** {topic}
**Target Audience:** {audience_persona}
**Word Count:** {word_count}
**Tone:** {tone}
**Reading Level:** {grade_level}

**SEO Requirements:**
- Primary Keyword: {primary_keyword}
- Secondary Keywords: {secondary_keywords}
- Include in: title, headers, first paragraph, conclusion

**Structure:**
1. Compelling Title (provide 5 options)
2. Engaging Introduction
   - Hook (statistic, question, story, or bold statement)
   - Context and relevance
   - Thesis/what reader will learn
3. Main Body (organized with H2 headers)
   - Section 1: {point_1}
   - Section 2: {point_2}
   - Section 3: {point_3}
   - Include examples, data, and quotes
4. Conclusion
   - Summarize key points
   - Call-to-action
   - Final thought/question
5. FAQ Section (3-5 common questions)

**Quality Standards:**
- Original insights, not just rehashing existing content
- Actionable takeaways
- Clear and concise writing
- Proper grammar and spelling
- Engaging throughout
```

### 2.2 Social Media Post
```
Create a {platform} post with these specifications:

**Topic:** {topic}
**Goal:** {awareness|engagement|traffic|conversion}
**Tone:** {tone}
**Key Message:** {message}
**Call-to-Action:** {cta}

**Platform Optimization:**
- Twitter: Under 280 chars, 2-3 hashtags, punchy
- LinkedIn: Professional, can be longer, 3-5 hashtags
- Instagram: Visual-first caption, emoji-friendly, up to 30 hashtags
- Facebook: Conversational, shareable, 1-5 hashtags

**Include:**
1. Scroll-stopping hook (first line)
2. Main value/message
3. Relevant hashtags ({number} hashtags)
4. Clear CTA
5. Emoji usage ({emoji_style})
6. Link placement (if applicable)

**Generate {number} variations for A/B testing.**

**Additional Elements:**
- Suggest visual/image idea
- Tag relevant accounts (@mentions)
- Best posting time recommendation
```

### 2.3 Email Newsletter
```
Write an email newsletter with these components:

**Subject Line:** (Provide 5 options using different techniques)
- Direct
- Curiosity-driven
- Benefit-focused
- Question
- Urgency (if appropriate)

**Preview Text:** Compelling 100-character preview

**Email Structure:**
1. Personal Greeting
   - Use recipient's name
   - Warm opening

2. Opening Hook
   - Story, statistic, or observation
   - Relate to reader's experience

3. Main Content/Value
   - Primary topic: {topic}
   - Key points (2-3)
   - Examples or case studies
   - Actionable advice

4. Secondary Content (optional)
   - Quick tip
   - Resource recommendation
   - Update/news

5. Call-to-Action
   - Clear and specific
   - Single primary CTA
   - Compelling reason to act

6. P.S. (optional)
   - Additional value
   - Urgency or scarcity
   - Personal note

7. Sign-off
   - Professional closing
   - Sender name
   - Company

**Tone:** {tone}
**Length:** {length}
**Unsubscribe Footer:** Include standard footer

**Design Notes:**
- Where to add images
- Button placement
- Mobile optimization considerations
```

### 2.4 Video Script
```
Create a video script for {platform} about {topic}:

**Video Specifications:**
- Length: {duration}
- Style: {educational|entertaining|promotional|hybrid}
- Target Audience: {audience}
- Brand Voice: {voice}

**Script Format:** Two-column (Video/Audio) or Single Column

**Structure:**
1. Hook (First 5 seconds)
   - Grab attention immediately
   - State value proposition
   - Create curiosity

2. Introduction (5-15 seconds)
   - Introduce topic
   - Establish credibility
   - Preview what's coming

3. Main Content (bulk of video)
   - Point 1 with visual cues
   - Point 2 with visual cues
   - Point 3 with visual cues
   - Include timestamps
   - Add B-roll suggestions
   - On-screen text moments

4. Call-to-Action (last 10-15 seconds)
   - Clear next step
   - Reason to act now
   - Where to go/what to do

5. Outro
   - Thank viewer
   - Subscribe/follow request
   - Preview next video

**Additional Elements:**
- Thumbnail suggestions
- Title options (5 variations)
- Description with keywords
- Hashtags
- Chapters/timestamps
```

### 2.5 Product Description
```
Write compelling product descriptions:

**Product:** {product_name}
**Category:** {category}
**Target Customer:** {customer_persona}
**Platform:** {website|amazon|social|etc}

**Product Details:**
- Key Features: {features_list}
- Benefits: {benefits_list}
- Unique Selling Points: {usps}
- Specifications: {specs}
- Price Point: {price}

**Requirements:**
1. SEO-optimized title
2. Engaging opening paragraph
3. Feature-benefit bullets
4. Social proof integration
5. Sensory/emotional language
6. Clear specifications
7. Call-to-action
8. Length: {word_count}

**Tone:** {tone}
**Brand Voice:** {voice_guidelines}

**Create:**
- Short version (1-2 sentences)
- Medium version (1 paragraph)
- Long version (full description)
```

---

## 3. Customer Support Prompts

### 3.1 Standard Response Template
```
You are a helpful customer support agent for {company_name}.

**Customer Inquiry:**
{customer_message}

**Context:**
- Customer Type: {new|existing|vip}
- Issue Category: {category}
- Sentiment: {positive|neutral|frustrated|angry}
- Previous Interactions: {history}

**Knowledge Base Articles:**
{relevant_articles}

**Response Guidelines:**
1. Acknowledge and empathize with their situation
2. Provide clear, accurate solution
3. Include relevant links/resources
4. Set expectations if follow-up needed
5. Offer additional assistance
6. Professional, friendly tone

**Response Structure:**
- Greeting (use customer name if available)
- Empathy/acknowledgment statement
- Solution/information
- Next steps (if any)
- Offer for further help
- Professional sign-off

**Constraints:**
- Do not promise what you cannot deliver
- Escalate if: {escalation_criteria}
- Response time goal: {time_goal}
```

### 3.2 Complaint Handling
```
Handle this customer complaint with care:

**Complaint:**
{complaint_details}

**Severity Level:** {low|medium|high|critical}

**Response Objectives:**
1. De-escalate emotions
2. Show genuine concern
3. Take ownership
4. Provide solution or path forward
5. Rebuild trust

**Response Framework:**
1. **LAARC Method:**
   - Listen: Acknowledge their frustration
   - Acknowledge: Validate their feelings
   - Apologize: Sincere apology (even if not at fault)
   - Resolve: Offer solution
   - Confirm: Ensure satisfaction

2. **Key Phrases to Use:**
   - "I completely understand your frustration..."
   - "You're absolutely right to expect..."
   - "I sincerely apologize for..."
   - "Here's what I'm going to do..."
   - "Does this solution work for you?"

3. **Avoid:**
   - Defensive language
   - Blaming other departments
   - Making excuses
   - Generic responses

**Compensation Options (if applicable):**
- Refund options
- Discount on future purchase
- Free upgrade/service
- Other: {options}

**Escalation:**
- Escalate to: {role}
- When: {criteria}
- How: {process}
```

### 3.3 Technical Support Response
```
Provide technical support for this issue:

**Issue:**
{technical_problem}

**Product/Service:** {product}
**Error Messages:** {errors}
**Steps Already Taken:** {attempts}
**Customer Technical Level:** {beginner|intermediate|advanced}

**Troubleshooting Approach:**
1. Gather information (ask clarifying questions)
2. Start with simplest solutions first
3. Provide step-by-step instructions
4. Use clear, non-technical language (adjust for level)
5. Include screenshots/diagrams if helpful
6. Verify resolution

**Response Structure:**
1. Acknowledge the issue
2. Explain likely cause (in simple terms)
3. Provide numbered steps to resolve
4. Include troubleshooting tips
5. What to do if steps don't work
6. When to escalate

**Safety Notes:**
- Warn about data loss risks
- Backup recommendations
- Time estimates for each step
```

### 3.4 Refund Request Handling
```
Process this refund request:

**Request Details:**
- Customer: {customer_info}
- Product/Service: {product}
- Purchase Date: {date}
- Amount: {amount}
- Reason: {reason}

**Refund Policy:**
{policy_details}

**Decision Framework:**
1. Check eligibility:
   - Within refund window? Y/N
   - Meets policy criteria? Y/N
   - Previous refund history? {history}

2. If Eligible:
   - Process refund
   - Explain timeline
   - Provide confirmation

3. If Not Eligible:
   - Explain policy clearly
   - Offer alternatives
   - Show empathy
   - Escalate if customer insists

**Response Template (Approved):**
"Hi {name}, I've processed your refund of {amount}. You'll see it in {timeframe}. Confirmation number: {number}. Is there anything else I can help with?"

**Response Template (Denied):**
"Hi {name}, I understand your frustration. Our refund policy states {policy}. While I can't process a refund, I can offer {alternative}. Would this work for you?"
```

---

## 4. Data Analysis Prompts

### 4.1 Exploratory Data Analysis
```
Perform exploratory data analysis on this dataset:

**Dataset Overview:**
- Source: {source}
- Rows: {count}
- Columns: {count}
- Column Names: {list}
- Business Context: {context}

**Analysis Requirements:**
1. **Data Quality Assessment**
   - Missing values analysis
   - Duplicate detection
   - Outlier identification
   - Data type validation

2. **Descriptive Statistics**
   - Central tendency (mean, median, mode)
   - Dispersion (std dev, range, IQR)
   - Distribution shape (skewness, kurtosis)
   - For both numeric and categorical variables

3. **Univariate Analysis**
   - Distribution of each variable
   - Frequency tables for categorical
   - Histograms/box plots for numeric

4. **Bivariate Analysis**
   - Correlations between variables
   - Group comparisons
   - Relationships and patterns

5. **Key Insights**
   - Notable patterns
   - Anomalies
   - Business implications

**Deliverables:**
- Summary statistics table
- Visualization recommendations
- Insight summary (natural language)
- Data quality report
- Next steps for deeper analysis
```

### 4.2 Statistical Hypothesis Testing
```
Conduct statistical hypothesis testing:

**Research Question:** {question}
**Hypothesis:**
- Null (H0): {null_hypothesis}
- Alternative (H1): {alternative_hypothesis}

**Data:**
- Sample size: {n}
- Variables: {variables}
- Data type: {continuous|categorical}

**Test Selection:**
Based on data characteristics, select appropriate test:
- T-test (compare means)
- ANOVA (compare multiple means)
- Chi-square (categorical association)
- Correlation (relationship strength)
- Regression (prediction)
- Non-parametric alternatives if assumptions not met

**Analysis Steps:**
1. Check test assumptions
   - Normality
   - Homogeneity of variance
   - Independence
   - Sample size adequacy

2. Conduct test
   - Test statistic
   - Degrees of freedom
   - P-value
   - Confidence interval

3. Interpret results
   - Statistical significance
   - Practical significance (effect size)
   - Business implications

4. Report findings
   - Clear conclusion
   - Limitations
   - Recommendations

**Output Format:**
- Test used and why
- Assumptions checked
- Results with statistics
- Plain English interpretation
- Visual representation
```

### 4.3 Predictive Modeling
```
Build a predictive model:

**Objective:**
- Predict: {target_variable}
- Use case: {business_use_case}
- Success metric: {metric}

**Data:**
- Features: {feature_list}
- Target: {target}
- Training size: {size}
- Historical period: {timeframe}

**Modeling Approach:**
1. **Data Preparation**
   - Handle missing values
   - Encode categorical variables
   - Feature scaling
   - Train-test split (80-20)

2. **Model Selection**
   - Try multiple algorithms:
     * Linear Regression
     * Random Forest
     * Gradient Boosting
     * Neural Network (if appropriate)
   - Compare performance

3. **Training & Validation**
   - Cross-validation (k-fold)
   - Hyperparameter tuning
   - Avoid overfitting

4. **Evaluation**
   - Primary metric: {metric}
   - Secondary metrics: {metrics}
   - Confusion matrix (if classification)
   - Feature importance

5. **Interpretation**
   - Key drivers
   - Model limitations
   - Business applicability

**Deliverables:**
- Model performance report
- Feature importance ranking
- Prediction examples
- Deployment recommendations
- Monitoring plan
```

### 4.4 Dashboard Requirements
```
Design a data dashboard:

**Dashboard Purpose:** {purpose}
**Target Audience:** {audience}
**Update Frequency:** {frequency}
**Platform:** {tool_name}

**Key Metrics to Display:**
1. **Primary KPIs** (top of dashboard)
   - {kpi_1}
   - {kpi_2}
   - {kpi_3}

2. **Trend Analysis**
   - Time series charts
   - Period-over-period comparison
   - Seasonal patterns

3. **Segmentation**
   - By {dimension_1}
   - By {dimension_2}
   - By {dimension_3}

4. **Performance Indicators**
   - Goals vs actuals
   - Red/yellow/green status
   - Alerts for anomalies

**Visualization Specifications:**
- Chart types for each metric
- Color scheme
- Interactive filters needed
- Drill-down capabilities
- Export functionality

**Layout:**
- Wireframe/mockup description
- Information hierarchy
- Mobile responsiveness

**Technical Requirements:**
- Data sources
- Refresh schedule
- Access controls
- Performance expectations
```

---

## 5. Social Media Prompts

### 5.1 Content Calendar Generation
```
Create a {month} social media content calendar:

**Business/Brand:** {brand_name}
**Industry:** {industry}
**Goals:** {goals}
**Target Audience:** {audience}

**Content Themes:**
1. {theme_1}
2. {theme_2}
3. {theme_3}

**Platforms:** {platforms}
**Posting Frequency:**
- Twitter: {frequency}
- LinkedIn: {frequency}
- Instagram: {frequency}
- Facebook: {frequency}

**Content Mix:**
- 40% Educational/Value
- 30% Engaging/Community
- 20% Promotional
- 10% Behind-the-scenes

**Special Dates/Events:**
- {date_1}: {event}
- {date_2}: {event}

**Deliverable:**
Day-by-day calendar including:
- Date and day of week
- Platform(s)
- Content theme
- Post copy (or description)
- Hashtags
- Visual concept
- CTA
- Optimal posting time

**Format:** Table or spreadsheet
```

### 5.2 Hashtag Strategy
```
Develop a hashtag strategy for {topic/industry}:

**Platform:** {platform}
**Goals:** {reach|engagement|community}
**Target Audience:** {audience}

**Hashtag Research:**
1. **High-Volume Hashtags** (500K+ posts)
   - 3-5 broad, popular tags
   - Maximum reach potential

2. **Medium-Volume Hashtags** (50K-500K posts)
   - 5-7 niche-specific tags
   - Better engagement rates

3. **Low-Volume Hashtags** (<50K posts)
   - 3-5 highly specific tags
   - Community building

4. **Branded Hashtags**
   - Company-specific
   - Campaign-specific
   - Encourage UGC

**For Each Hashtag Provide:**
- Hashtag text
- Approximate post volume
- Relevance score (1-10)
- Competition level
- Best use case

**Create:**
- Master hashtag list (categorized)
- Platform-specific sets
- Campaign-specific sets
- Rotating sets to avoid shadowban

**Best Practices:**
- Platform-specific limits
- Relevance over popularity
- Mix of sizes
- Regular updates
```

### 5.3 Engagement Response Templates
```
Create response templates for social media engagement:

**Brand Voice:** {voice}
**Platform:** {platform}
**Industry:** {industry}

**Scenarios to Cover:**

1. **Positive Comment/Compliment**
   - Thank them genuinely
   - Reinforce positive sentiment
   - Encourage continued engagement

2. **Product Question**
   - Answer accurately
   - Provide helpful details
   - Link to resources
   - Offer DM for complex issues

3. **Pricing Inquiry**
   - Transparent response
   - Highlight value
   - Link to pricing page
   - Offer demo/consultation

4. **Constructive Criticism**
   - Acknowledge feedback
   - Show appreciation
   - Explain actions being taken
   - Take conversation offline if needed

5. **Complaint/Negative Experience**
   - Empathize sincerely
   - Apologize appropriately
   - Offer to resolve
   - Move to DM/email quickly

6. **Spam/Promotional Comment**
   - Polite but firm
   - Don't engage excessively
   - Consider hiding/deleting

7. **Troll/Inappropriate**
   - Don't feed the troll
   - Professional dismissal
   - Hide or delete if necessary

**For Each Scenario:**
- Provide 2-3 response variations
- Note when to escalate
- Include tone guidance
```

### 5.4 Campaign Planning
```
Create a comprehensive social media campaign:

**Campaign Name:** {name}
**Duration:** {start_date} to {end_date}
**Budget:** {budget}

**Objectives (SMART):**
- Specific: {what}
- Measurable: {metric}
- Achievable: {realistic?}
- Relevant: {why}
- Time-bound: {deadline}

**Target Audience:**
- Demographics: {details}
- Psychographics: {details}
- Pain points: {details}
- Where they spend time: {platforms}

**Key Messages:**
1. Primary message
2. Supporting points
3. Proof points

**Content Strategy:**
- Content pillars (3-5 themes)
- Content types (video, image, carousel, etc.)
- Posting frequency
- Platform-specific adaptations

**Influencer Strategy:**
- Influencer tiers (mega, macro, micro)
- Number of influencers
- Collaboration types
- Budget allocation

**Paid Promotion:**
- Platforms
- Ad formats
- Targeting parameters
- Budget allocation
- A/B testing plan

**Measurement:**
- KPIs
- Tracking methods
- Reporting cadence
- Success criteria

**Risk Management:**
- Potential issues
- Mitigation strategies
- Crisis communication plan

**Deliverable:** Complete campaign playbook
```

---

## 6. General Agent Prompts

### 6.1 Task Planning
```
Break down this complex task into actionable steps:

**Task:** {task_description}
**Goal:** {desired_outcome}
**Constraints:** {constraints}
**Deadline:** {deadline}
**Resources Available:** {resources}

**Create a detailed plan including:**
1. Task breakdown (work breakdown structure)
2. Dependencies between steps
3. Time estimates for each step
4. Resource requirements
5. Potential risks and mitigations
6. Success criteria
7. Checkpoints/milestones

**Format:**
- Sequential steps
- Parallel tasks where possible
- Critical path identification
- Buffer time for unexpected issues
```

### 6.2 Decision Analysis
```
Help me make this decision:

**Decision:** {decision_to_make}
**Context:** {background}
**Options:** {option_a}, {option_b}, {option_c}

**Analysis Framework:**
1. **Criteria for Evaluation**
   - List all relevant factors
   - Weight by importance

2. **Option Analysis**
   For each option:
   - Pros
   - Cons
   - Risks
   - Resource requirements
   - Timeline
   - Alignment with goals

3. **Scenario Analysis**
   - Best case for each option
   - Worst case for each option
   - Most likely case

4. **Recommendation**
   - Preferred option
   - Reasoning
   - Implementation steps
   - Contingency plans

**Additional Considerations:**
- Opportunity costs
- Sunk costs (ignore these)
- Long-term vs short-term
- Reversibility of decision
```

### 6.3 Meeting Preparation
```
Prepare me for this meeting:

**Meeting Type:** {type}
**Attendees:** {list}
**Date/Time:** {datetime}
**Duration:** {length}
**Objective:** {goal}

**Preparation Materials:**
1. **Background Research**
   - Company/attendee information
   - Recent news/developments
   - Previous meeting notes

2. **Agenda Items**
   - Topics to cover
   - Time allocation
   - Desired outcomes per topic

3. **Talking Points**
   - Key messages
   - Supporting data
   - Questions to ask

4. **Potential Objections**
   - Anticipated concerns
   - Prepared responses
   - Compromise positions

5. **Action Items from Previous Meetings**
   - Status updates
   - Deliverables ready

**Deliverables:**
- One-page briefing document
- Discussion guide
- Data/facts sheet
- Questions list
```

### 6.4 Email Drafting
```
Draft this email:

**Email Type:** {type}
**Recipient:** {recipient}
**Relationship:** {relationship}
**Purpose:** {objective}
**Key Points:** {points_to_cover}
**Desired Outcome:** {outcome}
**Tone:** {tone}

**Email Structure:**
1. Subject Line (provide 3 options)
2. Salutation (appropriate for relationship)
3. Opening (context/purpose)
4. Body (key points, organized)
5. Call-to-Action (clear next steps)
6. Closing (professional sign-off)
7. Attachments (if any)

**Best Practices:**
- Keep it concise
- One email = one main topic
- Clear and specific ask
- Professional but personable
- Proofread for errors

**Create:**
- Primary version
- Shorter version
- More formal version (if needed)
```

---

## Prompt Engineering Best Practices

### 1. Be Specific and Detailed
- Provide clear context
- Define success criteria
- Specify format requirements

### 2. Use Examples
- Show desired output format
- Provide sample responses
- Include edge cases

### 3. Set Constraints
- Word/character limits
- Tone guidelines
- Do's and don'ts

### 4. Iterate and Refine
- Test prompts with sample inputs
- Analyze outputs for quality
- Adjust based on results

### 5. Chain Prompts
- Break complex tasks into steps
- Use output of one as input to next
- Build modular prompt libraries

### 6. Include Quality Checks
- Ask AI to verify its work
- Request confidence levels
- Include fact-checking steps

---

**End of Prompt Templates Collection**
