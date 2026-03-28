# Shelby Travels Website — Deployment Checklist

**Created:** March 28, 2026  
**Status:** Building

---

## ✅ Completed

- [x] Website structure created (`website-shelby-travels/`)
- [x] Homepage (`index.html`) with episode and guide listings
- [x] CSS stylesheet (`css/style.css`)
- [x] JavaScript (`js/main.js`)
- [x] Episode 001 page created (template)

---

## 🔄 In Progress

- [ ] Create remaining 6 episode pages (002-007)
- [ ] Create 6 travel guide pages (Bali, Japan, Vietnam, Iceland, Morocco, Thailand)
- [ ] Create resources page (placeholder for affiliate links)
- [ ] Create about page

---

## ⏳ Next Steps

### Step 1: Complete Content Pages
- Convert all 7 Springbok Radio episodes to HTML
- Convert 6 travel guides to HTML
- Create resources and about pages

### Step 2: Deploy to GitHub Pages
1. Initialize Git repository
2. Create GitHub repository (if not exists)
3. Push code to GitHub
4. Enable GitHub Pages in settings
5. Get live URL

### Step 3: Affiliate Signups
1. Use live URL for affiliate applications
2. Apply to: Booking.com, GetYourGuide, SafetyWing, Airalo, Amazon
3. Get affiliate IDs
4. Update links in guides
5. Deploy updated site

---

## 📁 File Structure

```
website-shelby-travels/
├── index.html          ✅ Homepage
├── css/
│   └── style.css       ✅ Stylesheet
├── js/
│   └── main.js         ✅ Scripts
├── episodes/
│   ├── 001-danakil-depression.html ✅ Created
│   ├── 002-erta-ale-volcano.html   ⏳ Pending
│   ├── 003-salar-de-uyuni.html     ⏳ Pending
│   ├── 004-serengeti.html          ⏳ Pending
│   ├── 005-petra.html              ⏳ Pending
│   ├── 006-danakil-revisited.html  ⏳ Pending
│   └── 007-socotra-island.html     ⏳ Pending
├── guides/
│   ├── bali.html                 ⏳ Pending
│   ├── japan.html                ⏳ Pending
│   ├── vietnam.html              ⏳ Pending
│   ├── iceland.html              ⏳ Pending
│   ├── morocco.html              ⏳ Pending
│   └── thailand.html             ⏳ Pending
├── resources/
│   └── index.html                ⏳ Pending
├── about/
│   └── index.html                ⏳ Pending
└── README.md                     ✅ Created
```

---

## 🚀 Deployment Commands

```bash
# Navigate to website folder
cd /mnt/data/openclaw/workspace/.openclaw/workspace/website-shelby-travels

# Initialize Git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial Shelby Travels website deployment"

# Add remote (replace with your GitHub repo)
git remote add origin https://github.com/charmallan-dot/shelby-travels.git

# Push
git push -u origin main

# Enable GitHub Pages:
# 1. Go to repo settings
# 2. Pages section
# 3. Source: Deploy from branch: main
# 4. Save
# 5. Get URL: https://charmallan-dot.github.io/shelby-travels
```

---

## 📊 Content Summary

### Episodes (7 total, ~60K words):
1. The Danakil Depression (8,400 words) ✅ HTML created
2. Erta Ale Volcano (9,800 words)
3. Salar de Uyuni (6,500 words)
4. Serengeti Migration (4,500 words)
5. The Lost City of Petra (8,500 words)
6. Danakil Revisited (9,200 words)
7. Socotra Island (8,700 words)

### Travel Guides (6 total, ~107K words):
1. Bali (14,200 words)
2. Japan (17,100 words)
3. Vietnam (18,300 words)
4. Iceland (17,100 words)
5. Morocco (20,100 words)
6. Thailand (20,300 words)

---

**Last Updated:** March 28, 2026
