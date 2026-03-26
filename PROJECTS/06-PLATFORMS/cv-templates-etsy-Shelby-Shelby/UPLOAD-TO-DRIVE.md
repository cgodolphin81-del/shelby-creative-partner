# Google Drive Upload Guide

**Folder Structure Created:**

```
AI Content Empire - Books & Guides (1_16AbUjDxXy8eel4DvQyDH2jOzawPqwj)
├── CV Templates - Etsy Launch (18QIJ4voTZ6uGkmlWIsvq4lGuwjJ_H77I)
├── Authority Site Network (1ZIsxtlSc8osu_qALaoAUclKl5lc3v0S0)
└── The Infinite Walk - Episode Guides (1GBP4STu9HQwBEjYpQBFNRKdR4OSAJmBi)
```

---

## Files to Upload

### CV Templates (Etsy Launch - Tuesday)
- `/completed-ready-to-launch/digital-products/cv-templates-etsy/`

### Authority Site Network
- `/completed-ready-to-launch/digital-products/authority-site-network/`
- `/completed-ready-to-launch/digital-products/authority-site-blueprint/`
- `/completed-ready-to-launch/digital-products/ai-authority-site-builder/`

### The Infinite Walk
- Convert episodes to PDF
- Upload production guides
- Upload AI prompt collections

---

## Upload Method

Use Maton API Gateway to upload files:

```bash
export MATON_API_KEY="E4zd9ymR4ThCZdZntoV3hBt2E-jJYXIA..."

# Create Google Doc from text
curl -X POST \
  -H "Authorization: Bearer $MATON_API_KEY" \
  -H "Content-Type: application/vnd.google-apps.document" \
  "https://gateway.maton.ai/google-drive/drive/v3/files" \
  -d @document.md
```

---

## Status

- [x] Main folder created
- [x] CV Templates folder created
- [x] Authority Site Network folder created
- [x] Infinite Walk folder created
- [ ] Upload CV Templates
- [ ] Upload Authority Site guides
- [ ] Upload Infinite Walk episode compilations
