#!/bin/bash

# Knowledge Base Search Script
# Usage: ./search.sh <keyword>

if [ -z "$1" ]; then
    echo "🔍 Knowledge Base Search"
    echo "Usage: ./search.sh <keyword>"
    echo ""
    echo "Examples:"
    echo "  ./search.sh healthcare"
    echo "  ./search.sh \"AI agency\""
    echo "  ./search.sh \"\$100K\""
    echo ""
    exit 1
fi

KEYWORD="$1"
KB_DIR="/mnt/data/openclaw/workspace/.openclaw/workspace/KNOWLEDGE-BASE"

echo "🔍 Searching for: $KEYWORD"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Search in markdown files
grep -ri --include="*.md" --color=always "$KEYWORD" "$KB_DIR" | head -50

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "💡 Tip: Refine your search with more specific terms"
echo "📁 Browse: cd $KB_DIR"
