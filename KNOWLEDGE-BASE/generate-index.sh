#!/bin/bash

# Knowledge Base Index Generator
# Scans all research projects and creates searchable index

RESEARCH_DIR="/mnt/data/openclaw/workspace/.openclaw/workspace/PROJECTS/RESEARCH-IDEAS"
KB_DIR="/mnt/data/openclaw/workspace/.openclaw/workspace/KNOWLEDGE-BASE"

echo "🔍 Scanning research projects..."

# Create master index
cat > "$KB_DIR/00-INDEX/MASTER-INDEX.md" << 'EOF'
# 📚 Master Index - All 197 Research Projects

**Complete catalog of validated business ideas organized by category**

---

## Quick Navigation

- [🏢 Agencies (61 projects)](#agencies)
- [📚 Courses (3 projects)](#courses)
- [📖 Guides (9 projects)](#guides)
- [💼 Business Models (17 projects)](#business-models)
- [🎨 Creative Projects (116+ projects)](#creative-projects)
- [💻 SaaS Platforms (33 projects)](#saas-platforms)

---

## 🔍 Search Tips

```bash
# Search all projects
grep -r "keyword" KNOWLEDGE-BASE/

# Search by revenue
grep -r "\$100K" KNOWLEDGE-BASE/

# Search by effort
grep -r "Quick Win" KNOWLEDGE-BASE/
```

---

EOF

# Process each category
echo "Processing categories..."

# AGENCIES
echo "## 🏢 Agencies {#agencies}" >> "$KB_DIR/00-INDEX/MASTER-INDEX.md"
echo "" >> "$KB_DIR/00-INDEX/MASTER-INDEX.md"
echo "| Project | Revenue Potential | Effort | Competition |" >> "$KB_DIR/00-INDEX/MASTER-INDEX.md"
echo "|---------|------------------|--------|-------------|" >> "$KB_DIR/00-INDEX/MASTER-INDEX.md"

for project in "$RESEARCH_DIR/01-QUALIFROST"/*; do
    if [ -d "$project" ]; then
        project_name=$(basename "$project")
        # Extract basic info from README if exists
        if [ -f "$project/README.md" ]; then
            echo "- **$project_name** - [View Summary]($KB_DIR/01-AGENCIES/$project_name.md)" >> "$KB_DIR/00-INDEX/MASTER-INDEX.md"
        else
            echo "- **$project_name** - Research available" >> "$KB_DIR/00-INDEX/MASTER-INDEX.md"
        fi
    fi
done

echo "" >> "$KB_DIR/00-INDEX/MASTER-INDEX.md"

# COURSES
echo "## 📚 Courses {#courses}" >> "$KB_DIR/00-INDEX/MASTER-INDEX.md"
echo "" >> "$KB_DIR/00-INDEX/MASTER-INDEX.md"
for project in "$RESEARCH_DIR/02-COURSES"/*; do
    if [ -d "$project" ]; then
        project_name=$(basename "$project")
        echo "- **$project_name** - [View Summary]($KB_DIR/02-COURSES/$project_name.md)" >> "$KB_DIR/00-INDEX/MASTER-INDEX.md"
    fi
done

echo "" >> "$KB_DIR/00-INDEX/MASTER-INDEX.md"

# BUSINESS MODELS
echo "## 💼 Business Models {#business-models}" >> "$KB_DIR/00-INDEX/MASTER-INDEX.md"
echo "" >> "$KB_DIR/00-INDEX/MASTER-INDEX.md"
for project in "$RESEARCH_DIR/04-BUSINESS"/*; do
    if [ -d "$project" ]; then
        project_name=$(basename "$project")
        echo "- **$project_name** - [View Summary]($KB_DIR/04-BUSINESS-MODELS/$project_name.md)" >> "$KB_DIR/00-INDEX/MASTER-INDEX.md"
    fi
done

echo "" >> "$KB_DIR/00-INDEX/MASTER-INDEX.md"

# CREATIVE
echo "## 🎨 Creative Projects {#creative-projects}" >> "$KB_DIR/00-INDEX/MASTER-INDEX.md"
echo "" >> "$KB_DIR/00-INDEX/MASTER-INDEX.md"
echo "_116+ documentary episodes and creative projects_" >> "$KB_DIR/00-INDEX/MASTER-INDEX.md"
echo "" >> "$KB_DIR/00-INDEX/MASTER-INDEX.md"
for project in "$RESEARCH_DIR/05-CREATIVE"/*; do
    if [ -d "$project" ]; then
        project_name=$(basename "$project")
        echo "- **$project_name** - [View Summary]($KB_DIR/05-CREATIVE-PROJECTS/$project_name.md)" >> "$KB_DIR/00-INDEX/MASTER-INDEX.md"
    fi
done

echo "" >> "$KB_DIR/00-INDEX/MASTER-INDEX.md"
echo "---" >> "$KB_DIR/00-INDEX/MASTER-INDEX.md"
echo "" >> "$KB_DIR/00-INDEX/MASTER-INDEX.md"
echo "**Total Projects:** 197+" >> "$KB_DIR/00-INDEX/MASTER-INDEX.md"
echo "**Last Generated:** $(date +%Y-%m-%d)" >> "$KB_DIR/00-INDEX/MASTER-INDEX.md"

echo "✅ Master index created!"
