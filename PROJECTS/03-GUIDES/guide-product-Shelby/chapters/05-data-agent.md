# Chapter 5: Agent Blueprint #4 - Data Analysis Agent

## Overview

A Data Analysis Agent automates data processing, statistical analysis, visualization generation, and insight extraction from various data sources, making data-driven decision making accessible to non-technical users.

## Agent Profile

**Name**: DataBot
**Primary Function**: Automated data analysis and insight generation
**Key Capabilities**: Data cleaning, statistical analysis, visualization, reporting, trend detection
**Ideal For**: Business analysts, marketers, executives, researchers, startups

## Architecture

```
Data Source → Data Ingestion → Quality Check → Cleaning/Transformation → 
Analysis → Visualization → Insight Generation → Report Delivery
```

## Core Components

### 1. Data Ingestion
- CSV/Excel file uploads
- Database connections (SQL, NoSQL)
- API integrations (Google Analytics, Salesforce, etc.)
- Cloud storage (S3, Google Drive, Dropbox)
- Real-time data streams

### 2. Data Quality Assessment
- Missing value detection
- Outlier identification
- Data type validation
- Consistency checks
- Completeness scoring

### 3. Data Cleaning & Transformation
- Handle missing values
- Remove duplicates
- Standardize formats
- Normalize/scale data
- Feature engineering

### 4. Statistical Analysis
- Descriptive statistics
- Correlation analysis
- Trend analysis
- Segmentation
- Hypothesis testing
- Regression analysis

### 5. Visualization Generation
- Charts (bar, line, pie, scatter)
- Dashboards
- Heat maps
- Time series plots
- Distribution charts
- Custom visualizations

### 6. Insight Generation
- Pattern detection
- Anomaly identification
- Trend analysis
- Predictive insights
- Actionable recommendations
- Natural language summaries

## Setup Instructions

### Step 1: Environment Setup

```bash
mkdir data-agent && cd data-agent
python -m venv venv
source venv/bin/activate

# Core data science libraries
pip install pandas numpy scipy scikit-learn
pip install matplotlib seaborn plotly

# Database connectors
pip install sqlalchemy psycopg2-binary pymysql

# API integrations
pip install requests google-analytics-data

# AI/LLM
pip install openai python-dotenv

# Jupyter for interactive analysis
pip install jupyter notebook
```

### Step 2: API Configuration

Create `.env`:
```env
OPENAI_API_KEY=your_openai_key
DATABASE_URL=postgresql://user:pass@localhost/dbname
GOOGLE_ANALYTICS_CREDENTIALS=path/to/credentials.json
S3_BUCKET=your-bucket-name
AWS_ACCESS_KEY=your_aws_key
AWS_SECRET_KEY=your_aws_secret
```

### Step 3: Core Agent Code

Create `data_agent.py`:

```python
import os
import pandas as pd
import numpy as np
from dotenv import load_dotenv
from openai import OpenAI
import matplotlib.pyplot as plt
import seaborn as sns
from datetime import datetime
import json

load_dotenv()

class DataAnalysisAgent:
    def __init__(self):
        self.client = OpenAI()
        self.model = "gpt-4"
        self.data = None
        self.analysis_results = {}
    
    def load_data(self, source, source_type='file'):
        """Load data from various sources"""
        
        if source_type == 'file':
            if source.endswith('.csv'):
                self.data = pd.read_csv(source)
            elif source.endswith(('.xlsx', '.xls')):
                self.data = pd.read_excel(source)
            elif source.endswith('.json'):
                self.data = pd.read_json(source)
            else:
                raise ValueError("Unsupported file format")
        
        elif source_type == 'sql':
            from sqlalchemy import create_engine
            engine = create_engine(os.getenv('DATABASE_URL'))
            self.data = pd.read_sql_query(source, engine)
        
        elif source_type == 'api':
            # Custom API integration
            import requests
            response = requests.get(source)
            self.data = pd.DataFrame(response.json())
        
        print(f"Loaded data: {self.data.shape[0]} rows, {self.data.shape[1]} columns")
        return self.data
    
    def assess_data_quality(self):
        """Comprehensive data quality assessment"""
        
        if self.data is None:
            return "No data loaded"
        
        quality_report = {
            'total_rows': len(self.data),
            'total_columns': len(self.data.columns),
            'missing_values': {},
            'duplicate_rows': self.data.duplicated().sum(),
            'data_types': {},
            'completeness_score': 0
        }
        
        # Missing values
        for col in self.data.columns:
            missing = self.data[col].isnull().sum()
            missing_pct = (missing / len(self.data)) * 100
            quality_report['missing_values'][col] = {
                'count': int(missing),
                'percentage': round(missing_pct, 2)
            }
        
        # Data types
        for col in self.data.columns:
            quality_report['data_types'][col] = str(self.data[col].dtype)
        
        # Calculate completeness score
        total_cells = self.data.shape[0] * self.data.shape[1]
        missing_cells = self.data.isnull().sum().sum()
        quality_report['completeness_score'] = round(
            ((total_cells - missing_cells) / total_cells) * 100, 2
        )
        
        # Detect outliers (numeric columns)
        quality_report['outliers'] = {}
        for col in self.data.select_dtypes(include=[np.number]).columns:
            Q1 = self.data[col].quantile(0.25)
            Q3 = self.data[col].quantile(0.75)
            IQR = Q3 - Q1
            outliers = ((self.data[col] < (Q1 - 1.5 * IQR)) | 
                       (self.data[col] > (Q3 + 1.5 * IQR))).sum()
            if outliers > 0:
                quality_report['outliers'][col] = int(outliers)
        
        self.analysis_results['quality'] = quality_report
        return quality_report
    
    def clean_data(self, strategies=None):
        """Clean data based on quality assessment"""
        
        if strategies is None:
            strategies = {
                'missing_values': 'drop',  # or 'mean', 'median', 'forward_fill'
                'duplicates': 'remove',
                'outliers': 'cap'
            }
        
        cleaned = self.data.copy()
        
        # Handle missing values
        if strategies['missing_values'] == 'drop':
            cleaned = cleaned.dropna()
        elif strategies['missing_values'] == 'mean':
            cleaned = cleaned.fillna(cleaned.mean(numeric_only=True))
        elif strategies['missing_values'] == 'median':
            cleaned = cleaned.fillna(cleaned.median(numeric_only=True))
        
        # Remove duplicates
        if strategies['duplicates'] == 'remove':
            cleaned = cleaned.drop_duplicates()
        
        # Cap outliers
        if strategies['outliers'] == 'cap':
            for col in cleaned.select_dtypes(include=[np.number]).columns:
                Q1 = cleaned[col].quantile(0.25)
                Q3 = cleaned[col].quantile(0.75)
                IQR = Q3 - Q1
                cleaned[col] = cleaned[col].clip(
                    Q1 - 1.5 * IQR, 
                    Q3 + 1.5 * IQR
                )
        
        self.data = cleaned
        print(f"Cleaned data: {cleaned.shape[0]} rows remaining")
        return cleaned
    
    def generate_descriptive_statistics(self):
        """Generate comprehensive descriptive statistics"""
        
        if self.data is None:
            return "No data loaded"
        
        stats = {
            'numeric_summary': {},
            'categorical_summary': {},
            'correlations': None
        }
        
        # Numeric columns
        numeric_cols = self.data.select_dtypes(include=[np.number]).columns
        for col in numeric_cols:
            stats['numeric_summary'][col] = {
                'mean': round(self.data[col].mean(), 2),
                'median': round(self.data[col].median(), 2),
                'std': round(self.data[col].std(), 2),
                'min': round(self.data[col].min(), 2),
                'max': round(self.data[col].max(), 2),
                'q25': round(self.data[col].quantile(0.25), 2),
                'q75': round(self.data[col].quantile(0.75), 2)
            }
        
        # Categorical columns
        categorical_cols = self.data.select_dtypes(include=['object', 'category']).columns
        for col in categorical_cols:
            stats['categorical_summary'][col] = {
                'unique_values': self.data[col].nunique(),
                'top_values': self.data[col].value_counts().head(5).to_dict()
            }
        
        # Correlation matrix (numeric only)
        if len(numeric_cols) > 1:
            stats['correlations'] = self.data[numeric_cols].corr().round(2).to_dict()
        
        self.analysis_results['descriptive'] = stats
        return stats
    
    def generate_visualizations(self, chart_types=None, save_path='visualizations/'):
        """Generate relevant visualizations"""
        
        import os
        os.makedirs(save_path, exist_ok=True)
        
        if self.data is None:
            return "No data loaded"
        
        visualizations = []
        
        # Time series (if datetime column exists)
        datetime_cols = self.data.select_dtypes(include=['datetime64']).columns
        if len(datetime_cols) > 0 and len(self.data.select_dtypes(include=[np.number]).columns) > 0:
            time_col = datetime_cols[0]
            numeric_col = self.data.select_dtypes(include=[np.number]).columns[0]
            
            plt.figure(figsize=(12, 6))
            plt.plot(self.data[time_col], self.data[numeric_col])
            plt.title(f'{numeric_col} over Time')
            plt.xlabel(time_col)
            plt.ylabel(numeric_col)
            plt.xticks(rotation=45)
            plt.tight_layout()
            
            path = f"{save_path}time_series_{numeric_col}.png"
            plt.savefig(path)
            plt.close()
            visualizations.append(path)
        
        # Distribution plots
        for col in self.data.select_dtypes(include=[np.number]).columns[:5]:
            plt.figure(figsize=(10, 6))
            sns.histplot(data=self.data, x=col, kde=True)
            plt.title(f'Distribution of {col}')
            plt.tight_layout()
            
            path = f"{save_path}distribution_{col}.png"
            plt.savefig(path)
            plt.close()
            visualizations.append(path)
        
        # Correlation heatmap
        numeric_data = self.data.select_dtypes(include=[np.number])
        if numeric_data.shape[1] > 1:
            plt.figure(figsize=(10, 8))
            sns.heatmap(numeric_data.corr(), annot=True, cmap='coolwarm', center=0)
            plt.title('Correlation Heatmap')
            plt.tight_layout()
            
            path = f"{save_path}correlation_heatmap.png"
            plt.savefig(path)
            plt.close()
            visualizations.append(path)
        
        # Categorical bar charts
        for col in self.data.select_dtypes(include=['object', 'category']).columns[:3]:
            if self.data[col].nunique() <= 10:  # Limit to reasonable categories
                plt.figure(figsize=(10, 6))
                self.data[col].value_counts().head(10).plot(kind='bar')
                plt.title(f'Top 10 {col}')
                plt.xticks(rotation=45)
                plt.tight_layout()
                
                path = f"{save_path}bar_{col}.png"
                plt.savefig(path)
                plt.close()
                visualizations.append(path)
        
        return visualizations
    
    def generate_insights(self):
        """Generate natural language insights from analysis"""
        
        # Prepare analysis summary for LLM
        summary = f"""
        Dataset Overview:
        - Rows: {self.data.shape[0]}
        - Columns: {self.data.shape[1]}
        
        Key Statistics:
        {json.dumps(self.analysis_results.get('descriptive', {}), indent=2)}
        
        Data Quality:
        - Completeness: {self.analysis_results.get('quality', {}).get('completeness_score', 'N/A')}%
        - Duplicates: {self.analysis_results.get('quality', {}).get('duplicate_rows', 'N/A')}
        
        Notable Patterns:
        """
        
        # Add pattern detection
        numeric_cols = self.data.select_dtypes(include=[np.number]).columns
        for col in numeric_cols[:3]:
            mean_val = self.data[col].mean()
            std_val = self.data[col].std()
            summary += f"- {col}: Mean={mean_val:.2f}, Std Dev={std_val:.2f}\n"
        
        prompt = f"""
        Based on this data analysis, generate key insights and recommendations:
        
        {summary}
        
        Provide:
        1. Executive Summary (2-3 sentences)
        2. Key Findings (3-5 bullet points)
        3. Notable Patterns or Trends
        4. Potential Concerns or Anomalies
        5. Actionable Recommendations (3-5 items)
        6. Suggested Further Analysis
        
        Write for a business audience (non-technical).
        """
        
        response = self.client.chat.completions.create(
            model=self.model,
            messages=[{"role": "user", "content": prompt}],
            temperature=0.7
        )
        
        insights = response.choices[0].message.content
        self.analysis_results['insights'] = insights
        return insights
    
    def create_report(self, output_format='markdown', save_path='reports/'):
        """Create comprehensive analysis report"""
        
        import os
        os.makedirs(save_path, exist_ok=True)
        
        timestamp = datetime.now().strftime('%Y%m%d_%H%M%S')
        
        if output_format == 'markdown':
            report = f"""# Data Analysis Report
Generated: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}

## Executive Summary
{self.analysis_results.get('insights', 'Insights not generated')}

## Data Quality Assessment
- Total Rows: {self.analysis_results.get('quality', {}).get('total_rows', 'N/A')}
- Total Columns: {self.analysis_results.get('quality', {}).get('total_columns', 'N/A')}
- Completeness Score: {self.analysis_results.get('quality', {}).get('completeness_score', 'N/A')}%
- Duplicate Rows: {self.analysis_results.get('quality', {}).get('duplicate_rows', 'N/A')}

## Descriptive Statistics
{json.dumps(self.analysis_results.get('descriptive', {}), indent=2)}

## Visualizations
Generated in: {save_path}

## Recommendations
See insights section above.

---
*Report generated by Data Analysis Agent*
"""
            
            filename = f"{save_path}report_{timestamp}.md"
            with open(filename, 'w') as f:
                f.write(report)
        
        elif output_format == 'html':
            # Generate HTML report with embedded visualizations
            report = f"""
            <!DOCTYPE html>
            <html>
            <head>
                <title>Data Analysis Report</title>
                <style>
                    body {{ font-family: Arial, sans-serif; margin: 40px; }}
                    h1 {{ color: #333; }}
                    .section {{ margin: 20px 0; }}
                    table {{ border-collapse: collapse; width: 100%; }}
                    th, td {{ border: 1px solid #ddd; padding: 8px; text-align: left; }}
                    th {{ background-color: #4CAF50; color: white; }}
                </style>
            </head>
            <body>
                <h1>Data Analysis Report</h1>
                <p>Generated: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}</p>
                
                <div class="section">
                    <h2>Executive Summary</h2>
                    <p>{self.analysis_results.get('insights', 'N/A')}</p>
                </div>
                
                <div class="section">
                    <h2>Key Metrics</h2>
                    <p>Rows: {self.data.shape[0]} | Columns: {self.data.shape[1]}</p>
                </div>
            </body>
            </html>
            """
            
            filename = f"{save_path}report_{timestamp}.html"
            with open(filename, 'w') as f:
                f.write(report)
        
        print(f"Report saved to: {filename}")
        return filename
    
    def answer_question(self, question):
        """Answer natural language questions about the data"""
        
        # Get data schema and sample
        schema_info = {
            'columns': list(self.data.columns),
            'dtypes': {col: str(dtype) for col, dtype in self.data.dtypes.items()},
            'sample': self.data.head(3).to_dict()
        }
        
        prompt = f"""
        Answer this question about the dataset:
        
        Question: {question}
        
        Dataset Schema:
        {json.dumps(schema_info, indent=2)}
        
        If the question requires calculation or analysis, write Python code using pandas to compute the answer.
        Then provide the final answer in natural language.
        
        Format:
        ```python
        # Your code here
        ```
        
        Answer: [Your natural language answer]
        """
        
        response = self.client.chat.completions.create(
            model=self.model,
            messages=[{"role": "user", "content": prompt}],
            temperature=0.5
        )
        
        return response.choices[0].message.content

# Usage Example
if __name__ == "__main__":
    agent = DataAnalysisAgent()
    
    # Load data
    agent.load_data('sales_data.csv', source_type='file')
    
    # Assess quality
    quality = agent.assess_data_quality()
    print(f"Data Quality Score: {quality['completeness_score']}%")
    
    # Clean data
    agent.clean_data()
    
    # Generate statistics
    stats = agent.generate_descriptive_statistics()
    
    # Create visualizations
    charts = agent.generate_visualizations()
    print(f"Generated {len(charts)} visualizations")
    
    # Generate insights
    insights = agent.generate_insights()
    print(insights)
    
    # Create report
    report_path = agent.create_report()
    
    # Answer questions
    answer = agent.answer_question("What was the total revenue?")
    print(answer)
```

## Prompt Templates

### Data Exploration Request
```
Analyze this dataset and provide insights on:

Focus Areas: {areas_of_interest}
Business Context: {context}
Key Questions: {questions}

Deliverables:
1. Data quality assessment
2. Key statistics and metrics
3. Visualizations (specify types)
4. Insights and patterns
5. Recommendations

Audience: {technical|business|executive}
```

### Specific Analysis Request
```
Perform {analysis_type} analysis on this dataset:

Variables of Interest: {variables}
Hypothesis to Test: {hypothesis}
Confidence Level: {confidence_level}
Method: {statistical_method}

Provide:
- Methodology explanation
- Results with statistics
- Interpretation
- Business implications
- Limitations
```

### Dashboard Requirements
```
Create a dashboard with these requirements:

Key Metrics: {metrics_list}
Dimensions: {dimensions}
Update Frequency: {frequency}
Audience: {audience}
Format: {interactive|static}

Include:
- Summary KPIs at top
- Trend charts
- Breakdown by {dimension}
- Filters for {filters}
- Export capability
```

## Advanced Features

### 1. Automated Anomaly Detection
```python
def detect_anomalies(self, method='isolation_forest'):
    """Detect anomalies in the data"""
    from sklearn.ensemble import IsolationForest
    
    numeric_data = self.data.select_dtypes(include=[np.number])
    
    if method == 'isolation_forest':
        iso_forest = IsolationForest(contamination=0.1, random_state=42)
        predictions = iso_forest.fit_predict(numeric_data)
        
        anomalies = self.data[predictions == -1]
        
        return {
            'anomaly_count': len(anomalies),
            'anomaly_percentage': round(len(anomalies) / len(self.data) * 100, 2),
            'anomalies': anomalies,
            'indices': self.data[predictions == -1].index.tolist()
        }
```

### 2. Predictive Analytics
```python
def build_prediction_model(self, target_column, model_type='random_forest'):
    """Build predictive model"""
    from sklearn.model_selection import train_test_split
    from sklearn.ensemble import RandomForestRegressor
    from sklearn.metrics import mean_squared_error, r2_score
    
    # Prepare data
    X = self.data.drop(columns=[target_column])
    y = self.data[target_column]
    
    # Handle categorical variables
    X = pd.get_dummies(X, drop_first=True)
    
    # Split data
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=42
    )
    
    # Train model
    model = RandomForestRegressor(n_estimators=100, random_state=42)
    model.fit(X_train, y_train)
    
    # Evaluate
    y_pred = model.predict(X_test)
    
    results = {
        'model': model,
        'rmse': np.sqrt(mean_squared_error(y_test, y_pred)),
        'r2': r2_score(y_test, y_pred),
        'feature_importance': dict(zip(X.columns, model.feature_importances_))
    }
    
    return results
```

### 3. Natural Language to SQL
```python
def nl_to_sql(self, question, table_schema):
    """Convert natural language question to SQL query"""
    
    prompt = f"""
    Convert this question to a SQL query:
    
    Question: {question}
    
    Table Schema:
    {table_schema}
    
    Provide only the SQL query, no explanation.
    Use best practices and optimize for readability.
    """
    
    response = self.client.chat.completions.create(
        model=self.model,
        messages=[{"role": "user", "content": prompt}],
        temperature=0.3
    )
    
    sql_query = response.choices[0].message.content
    
    # Execute query
    from sqlalchemy import create_engine
    engine = create_engine(os.getenv('DATABASE_URL'))
    result = pd.read_sql_query(sql_query, engine)
    
    return {
        'sql': sql_query,
        'result': result
    }
```

## Integration with OpenClaw

Create skill `data-analysis-skill`:

```markdown
# data-analysis-skill SKILL.md

## Commands
- `data load <file>` - Load dataset
- `data quality` - Assess data quality
- `data clean` - Clean data
- `data stats` - Generate statistics
- `data visualize` - Create visualizations
- `data insights` - Generate insights
- `data report` - Create full report
- `data ask <question>` - Ask about data

## Configuration
```yaml
default_visualization_format: png
report_format: markdown
auto_clean: false
outlier_method: iqr
```

## Supported Formats
- CSV, Excel, JSON
- SQL databases
- Google Analytics
- Salesforce
- REST APIs
```

## Best Practices

### Data Quality
1. Always assess quality before analysis
2. Document cleaning steps
3. Preserve original data
4. Validate assumptions
5. Check for bias

### Analysis
1. Start with exploratory analysis
2. Use appropriate statistical methods
3. Validate findings with multiple approaches
4. Consider confounding variables
5. Test statistical significance

### Visualization
1. Choose appropriate chart types
2. Use clear labels and titles
3. Avoid chart junk
4. Use color purposefully
5. Ensure accessibility

### Reporting
1. Know your audience
2. Lead with key insights
3. Provide context
4. Include limitations
5. Make actionable recommendations

## Common Pitfalls and Solutions

### Pitfall: Correlation vs Causation
**Solution**: Clearly distinguish between correlation and causation, use controlled experiments when possible

### Pitfall: Overfitting
**Solution**: Use cross-validation, keep models simple, test on holdout data

### Pitfall: Selection Bias
**Solution**: Ensure representative samples, document selection criteria, test for bias

### Pitfall: Misleading Visualizations
**Solution**: Use appropriate scales, start axes at zero when appropriate, avoid 3D effects

## Metrics and KPIs

Track:
- Analysis turnaround time
- Insight accuracy (validated by humans)
- User satisfaction
- Report usage metrics
- Decision impact
- Data quality scores

---

**Next Chapter**: Agent Blueprint #5 - Social Media Manager Agent
