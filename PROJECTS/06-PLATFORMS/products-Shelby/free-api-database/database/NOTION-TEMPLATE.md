# Notion Database Template

## How to Import This Database

### Option 1: Manual Setup (Recommended)

1. **Create a new database in Notion:**
   - Click "+ New Page" → Select "Table" → "New Database"
   - Name it "Free AI API Database"

2. **Add the following properties:**

| Property Name | Type | Configuration |
|--------------|------|---------------|
| Name | Title | Default |
| Category | Select | Options: TEXT, IMAGE, AUDIO, VIDEO, CODE, AUTOMATION, DATA, VECTOR, INFRASTRUCTURE, COMMUNICATION |
| Subcategory | Multi-select | See CATEGORIZATION.md for full list |
| Description | Text | - |
| Endpoint | URL | - |
| Rate Limit | Text | - |
| Auth Type | Select | Options: API Key, OAuth, None, Self-hosted |
| Pricing | Select | Options: Free, Freemium, Trial, Pay-per-use, Subscription |
| Affiliate Link | URL | - |
| Use Cases | Text | - |
| Status | Select | Options: Active, Beta, Deprecated, Limited |
| Tags | Multi-select | Custom tags |
| Added Date | Date | - |
| Last Verified | Date | - |
| Documentation | URL | - |
| Notes | Text | - |

3. **Import the CSV data:**
   - Go to your database
   - Click "..." → "Import" → "CSV"
   - Upload `apis-full.csv` from the database folder
   - Map the columns to your properties

### Option 2: Duplicate Template

A Notion template link will be provided after purchase. Click the link and select "Duplicate" to add to your workspace.

---

## Database Views to Create

### 1. 📊 All APIs (Default Table View)
- Show all properties
- Sort by: Category (ascending), then Name (ascending)
- Filter: None

### 2. 🆓 Free APIs Only
- Filter: Pricing = Free
- Sort: Name (ascending)

### 3. 💎 Freemium APIs
- Filter: Pricing = Freemium
- Sort: Name (ascending)

### 4. 📝 Text APIs
- Filter: Category = TEXT
- Group by: Subcategory

### 5. 🖼️ Image APIs
- Filter: Category = IMAGE
- Group by: Subcategory

### 6. 🎵 Audio APIs
- Filter: Category = AUDIO
- Group by: Subcategory

### 7. 🎬 Video APIs
- Filter: Category = VIDEO
- Group by: Subcategory

### 8. 💻 Code APIs
- Filter: Category = CODE
- Group by: Subcategory

### 9. ⚡ Automation APIs
- Filter: Category = AUTOMATION
- Group by: Subcategory

### 10. 🔍 Data APIs
- Filter: Category = DATA
- Group by: Subcategory

### 11. 🧮 Vector APIs
- Filter: Category = VECTOR
- Group by: Subcategory

### 12. 🖥️ Infrastructure APIs
- Filter: Category = INFRASTRUCTURE
- Group by: Subcategory

### 13. 💬 Communication APIs
- Filter: Category = COMMUNICATION
- Group by: Subcategory

### 14. ✅ Production Ready
- Filter: Status = Active AND Tags contains "production"
- Sort: Name (ascending)

### 15. 🔥 High Rate Limits
- Filter: Rate Limit contains "1000" OR "Unlimited" OR "5000"
- Sort: Rate Limit (descending)

### 16. 💰 With Affiliate Programs
- Filter: Affiliate Link is not empty
- Sort: Category (ascending)

### 17. 📅 Recently Added
- Sort: Added Date (descending)
- Limit: 20 items

### 18. ⚠️ Needs Verification
- Filter: Last Verified is before [1 month ago]
- Sort: Last Verified (ascending)

---

## Database Icons

Assign icons to each category for visual organization:

| Category | Icon |
|----------|------|
| TEXT | 📝 |
| IMAGE | 🖼️ |
| AUDIO | 🎵 |
| VIDEO | 🎬 |
| CODE | 💻 |
| AUTOMATION | ⚡ |
| DATA | 🔍 |
| VECTOR | 🧮 |
| INFRASTRUCTURE | 🖥️ |
| COMMUNICATION | 💬 |

---

## Templates for New Entries

Create a database template for adding new APIs:

### Template: New API Entry

**Properties to fill:**
- [ ] Name
- [ ] Category (select one)
- [ ] Subcategory (select all that apply)
- [ ] Description (2-3 sentences)
- [ ] Endpoint (URL)
- [ ] Rate Limit (e.g., "100 requests/minute")
- [ ] Auth Type
- [ ] Pricing
- [ ] Affiliate Link (if available)
- [ ] Use Cases (comma-separated)
- [ ] Status
- [ ] Tags
- [ ] Added Date (today)
- [ ] Last Verified (today)
- [ ] Documentation (URL)
- [ ] Notes

**Verification Checklist:**
- [ ] API endpoint is accessible
- [ ] Rate limits are accurate
- [ ] Pricing information is current
- [ ] Documentation link works
- [ ] Affiliate link is valid (if applicable)

---

## Advanced Notion Features

### 1. Related Databases

Create related databases for:
- **API Providers** - Company information, contact details
- **Affiliate Programs** - Commission rates, payment terms
- **Verification Log** - Track verification history

### 2. Rollups

Use rollups to calculate:
- Count of APIs per category
- Count of free vs. paid APIs
- Average rate limits by category

### 3. Formulas

Example formulas for calculated properties:

**Days Since Verification:**
```
dateBetween(now(), prop("Last Verified"), "days")
```

**Verification Status:**
```
if(dateBetween(now(), prop("Last Verified"), "days") < 30, "✅ Current", if(dateBetween(now(), prop("Last Verified"), "days") < 90, "⚠️ Aging", "❌ Outdated"))
```

**Has Affiliate:**
```
if(empty(prop("Affiliate Link")), "❌ No", "✅ Yes")
```

### 4. Automations

Set up Notion automations for:
- Send reminder when "Last Verified" is > 30 days
- Notify when new API is added
- Weekly summary of database changes

---

## Sharing & Permissions

### For Team Collaboration:

1. **Database Access:**
   - Full Access: Database owner
   - Can Edit: Team members who verify APIs
   - Can Comment: Reviewers
   - Can View: Customers (if sharing)

2. **Page Sharing:**
   - Share specific views with different audiences
   - Use "Publish to web" for public views (careful with affiliate links)

---

## Export Options

### Regular Exports:
- **CSV:** For backup and external analysis
- **PDF:** For sharing static reports
- **Markdown:** For documentation

### Export Schedule:
- Weekly: CSV backup
- Monthly: PDF report
- Quarterly: Full archive

---

## Tips for Notion Optimization

1. **Use icons consistently** - Makes scanning easier
2. **Color-code categories** - Visual organization
3. **Keep descriptions concise** - 2-3 sentences max
4. **Update regularly** - Set calendar reminders
5. **Use templates** - Consistency in entries
6. **Create filtered views** - Quick access to subsets
7. **Link related pages** - Connect APIs to use cases
8. **Archive, don't delete** - Keep history of deprecated APIs

---

*Template Version: 1.0*
*Compatible with: Notion Free, Plus, Business plans*
