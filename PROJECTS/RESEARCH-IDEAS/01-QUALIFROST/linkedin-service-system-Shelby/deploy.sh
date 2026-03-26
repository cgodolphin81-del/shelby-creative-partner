#!/bin/bash

# LinkedIn Ghostwriting Service - Deployment Script
# Deploys to GitHub Pages

set -e

echo "🚀 Deploying LinkedIn Ghostwriting Service to GitHub Pages..."

# Configuration
REPO_NAME="linkedin-ghostwriting-service"
BRANCH="main"

# Check if git is configured
if ! git config user.name > /dev/null 2>&1; then
    echo "❌ Git user.name not configured. Please run:"
    echo "   git config --global user.name 'Your Name'"
    echo "   git config --global user.email 'your@email.com'"
    exit 1
fi

# Check if we're in the right directory
if [ ! -f "index.html" ]; then
    echo "❌ index.html not found. Please run this script from the project directory."
    exit 1
fi

# Initialize git repo if needed
if [ ! -d ".git" ]; then
    echo "📦 Initializing git repository..."
    git init
    git branch -M $BRANCH
fi

# Add remote if not exists
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "🔗 Please create a repository on GitHub named: $REPO_NAME"
    echo "   Then run:"
    echo "   git remote add origin https://github.com/YOUR_USERNAME/$REPO_NAME.git"
    exit 1
fi

# Add files and commit
echo "📝 Committing files..."
git add .
git commit -m "Deploy LinkedIn Ghostwriting Service - $(date +%Y-%m-%d)"

# Push to GitHub
echo "⬆️  Pushing to GitHub..."
git push -u origin $BRANCH

echo ""
echo "✅ Deployment complete!"
echo ""
echo "📍 Your site will be live at:"
echo "   https://YOUR_USERNAME.github.io/$REPO_NAME/"
echo ""
echo "⚙️  To enable GitHub Pages:"
echo "   1. Go to https://github.com/YOUR_USERNAME/$REPO_NAME/settings/pages"
echo "   2. Select 'Deploy from a branch'"
echo "   3. Choose branch: main, folder: / (root)"
echo "   4. Click Save"
echo ""
echo "🎉 Don't forget to update the Calendly links in index.html!"
