# 🔧 OpenClaw Skills Testing Checklist
**Prepared for:** Charmaine Frost  
**Test Date:** Monday, March 23, 2026 (or next available computer time)  
**Estimated Time:** 3-4 hours total  

---

## 📦 PRE-TESTING SETUP (15 minutes)

### **Step 1: Fresh OpenClaw Installation**
- [ ] Uninstall any existing OpenClaw installation (if needed)
- [ ] Download latest OpenClaw version
- [ ] Install on clean system
- [ ] Verify installation completes without errors
- [ ] Note: OpenClaw version number _______________

### **Step 2: Workspace Setup**
- [ ] Copy workspace folder to OpenClaw directory
- [ ] Verify all files are present (check file count)
- [ ] Open OpenClaw, verify no error messages on startup
- [ ] Note: Any startup errors _________________________

### **Step 3: Skills Verification**
- [ ] Type `/help` in OpenClaw
- [ ] Verify all 13 skills appear in help menu
- [ ] Count: ____ / 13 skills showing
- [ ] Note: Any missing skills _________________________

### **Step 4: Prepare Test Environment**
- [ ] Open text editor (for copying test commands)
- [ ] Open bug tracking spreadsheet (template below)
- [ ] Have camera/screenshot tool ready
- [ ] Note start time: _________

---

## 🧪 PHASE 1: BASIC FUNCTIONALITY TESTING (90 minutes)

**Test each skill individually. Expected time: 5-7 minutes per skill**

### **Skill 1: tts-narrator**
**Command:** `/tts-narrator` or `/tts`

**Test Cases:**
- [ ] **Basic Test:** Convert simple text to speech
  - Input: "Hello, this is a test."
  - Expected: Audio file generated
  - Result: ☐ Pass ☐ Fail ☐ Error (describe: ___________)
  
- [ ] **Long Text Test:** Convert paragraph to speech
  - Input: 100+ word paragraph
  - Expected: Full audio file, no truncation
  - Result: ☐ Pass ☐ Fail ☐ Error
  
- [ ] **Edge Case:** Empty input
  - Input: (nothing)
  - Expected: Helpful error message
  - Result: ☐ Pass ☐ Fail ☐ Error
  
- [ ] **Edge Case:** Special characters
  - Input: "Test! @#$% ^&*()"
  - Expected: Handles gracefully
  - Result: ☐ Pass ☐ Fail ☐ Error

**Notes:** _______________________________________________

**Rating:** ⭐⭐⭐⭐⭐ (5 = perfect, 1 = broken)

---

### **Skill 2: lip-sync-auto**
**Command:** `/lip-sync-auto` or `/lipsync`

**Test Cases:**
- [ ] **Basic Test:** Auto lip-sync a short video
  - Input: Short video file + audio
  - Expected: Lip-synced video output
  - Result: ☐ Pass ☐ Fail ☐ Error
  
- [ ] **File Format Test:** Different video formats
  - Input: MP4, MOV, AVI (test 1-2)
  - Expected: Processes correctly
  - Result: ☐ Pass ☐ Fail ☐ Error
  
- [ ] **Edge Case:** No video provided
  - Input: (no file)
  - Expected: Clear instructions on what's needed
  - Result: ☐ Pass ☐ Fail ☐ Error

**Notes:** _______________________________________________

**Rating:** ⭐⭐⭐⭐⭐

---

### **Skill 3: script-writer**
**Command:** `/script-writer` or `/script`

**Test Cases:**
- [ ] **Basic Test:** Generate viral TikTok script
  - Input: "Write a viral TikTok script about productivity"
  - Expected: Complete script with hook, body, CTA
  - Result: ☐ Pass ☐ Fail ☐ Error
  
- [ ] **Platform Test:** Different platforms
  - Input: "Write a YouTube script about AI"
  - Expected: Platform-appropriate format
  - Result: ☐ Pass ☐ Fail ☐ Error
  
- [ ] **Length Test:** Different video lengths
  - Input: "Write a 60-second Instagram Reel script"
  - Expected: Appropriately timed script
  - Result: ☐ Pass ☐ Fail ☐ Error
  
- [ ] **Edge Case:** Vague input
  - Input: "Write a script"
  - Expected: Asks clarifying questions
  - Result: ☐ Pass ☐ Fail ☐ Error

**Notes:** _______________________________________________

**Rating:** ⭐⭐⭐⭐⭐

---

### **Skill 4: recipe-generator**
**Command:** `/recipe-generator` or `/recipe`

**Test Cases:**
- [ ] **Basic Test:** Generate recipe from ingredients
  - Input: "I have chicken, rice, and broccoli"
  - Expected: Complete recipe with instructions
  - Result: ☐ Pass ☐ Fail ☐ Error
  
- [ ] **Dietary Test:** Specific dietary requirements
  - Input: "Vegan pasta recipe"
  - Expected: Appropriate recipe
  - Result: ☐ Pass ☐ Fail ☐ Error
  
- [ ] **Edge Case:** Unusual ingredients
  - Input: "Recipe with durian and anchovies"
  - Expected: Creative but usable recipe
  - Result: ☐ Pass ☐ Fail ☐ Error

**Notes:** _______________________________________________

**Rating:** ⭐⭐⭐⭐⭐

---

### **Skill 5: niche-finder**
**Command:** `/niche-finder` or `/niche`

**Test Cases:**
- [ ] **Basic Test:** Find profitable niches
  - Input: "Find profitable niches in fitness"
  - Expected: List of niches with metrics
  - Result: ☐ Pass ☐ Fail ☐ Error
  
- [ ] **Platform Test:** Different platforms
  - Input: "Etsy niches for digital products"
  - Expected: Platform-specific niches
  - Result: ☐ Pass ☐ Fail ☐ Error
  
- [ ] **Competition Test:** Competition analysis
  - Input: "Low competition niches in tech"
  - Expected: Niches with competition data
  - Result: ☐ Pass ☐ Fail ☐ Error

**Notes:** _______________________________________________

**Rating:** ⭐⭐⭐⭐⭐

---

### **Skill 6: design-generator**
**Command:** `/design-generator` or `/design`

**Test Cases:**
- [ ] **Basic Test:** Generate design from prompt
  - Input: "Create a logo for a coffee shop"
  - Expected: Design output or image prompt
  - Result: ☐ Pass ☐ Fail ☐ Error
  
- [ ] **Style Test:** Different design styles
  - Input: "Minimalist poster design for tech conference"
  - Expected: Style-appropriate design
  - Result: ☐ Pass ☐ Fail ☐ Error
  
- [ ] **Edge Case:** Vague input
  - Input: "Make a design"
  - Expected: Asks for more details
  - Result: ☐ Pass ☐ Fail ☐ Error

**Notes:** _______________________________________________

**Rating:** ⭐⭐⭐⭐⭐

---

### **Skill 7: qr-generator**
**Command:** `/qr-generator` or `/qr`

**Test Cases:**
- [ ] **Basic Test:** Generate QR code from URL
  - Input: "https://example.com"
  - Expected: QR code image generated
  - Result: ☐ Pass ☐ Fail ☐ Error
  
- [ ] **Text Test:** QR from plain text
  - Input: "Contact: John, 555-1234"
  - Expected: QR code with text data
  - Result: ☐ Pass ☐ Fail ☐ Error
  
- [ ] **Edge Case:** Invalid URL
  - Input: "not-a-valid-url"
  - Expected: Error message or correction
  - Result: ☐ Pass ☐ Fail ☐ Error

**Notes:** _______________________________________________

**Rating:** ⭐⭐⭐⭐⭐

---

### **Skill 8: currency-convert**
**Command:** `/currency-convert` or `/currency`

**Test Cases:**
- [ ] **Basic Test:** Convert common currencies
  - Input: "100 USD to GBP"
  - Expected: Accurate conversion with rate
  - Result: ☐ Pass ☐ Fail ☐ Error
  
- [ ] **Multi-Currency Test:** Multiple conversions
  - Input: "Convert 500 EUR to USD, GBP, JPY"
  - Expected: All conversions shown
  - Result: ☐ Pass ☐ Fail ☐ Error
  
- [ ] **Edge Case:** Unknown currency
  - Input: "100 XYZ to USD"
  - Expected: Helpful error message
  - Result: ☐ Pass ☐ Fail ☐ Error

**Notes:** _______________________________________________

**Rating:** ⭐⭐⭐⭐⭐

---

### **Skill 9: url-shortener**
**Command:** `/url-shortener` or `/shorten`

**Test Cases:**
- [ ] **Basic Test:** Shorten long URL
  - Input: Long URL (50+ characters)
  - Expected: Shortened URL provided
  - Result: ☐ Pass ☐ Fail ☐ Error
  
- [ ] **Edge Case:** Already short URL
  - Input: "https://bit.ly/abc"
  - Expected: Notes it's already short or re-shortens
  - Result: ☐ Pass ☐ Fail ☐ Error
  
- [ ] **Edge Case:** Invalid URL
  - Input: "not-a-url"
  - Expected: Error message
  - Result: ☐ Pass ☐ Fail ☐ Error

**Notes:** _______________________________________________

**Rating:** ⭐⭐⭐⭐⭐

---

### **Skill 10: council-of-advisors** ⭐ (PRIORITY TEST)
**Command:** `/council-of-advisors` or `/council`

**Test Cases:**
- [ ] **Basic Test:** Get advice from council
  - Input: "What should I launch first?"
  - Expected: Multi-perspective advice from 5 advisors
  - Result: ☐ Pass ☐ Fail ☐ Error
  
- [ ] **Specific Advisor Test:** Single advisor
  - Input: "Victoria, what's the pricing strategy?"
  - Expected: Victoria-specific response
  - Result: ☐ Pass ☐ Fail ☐ Error
  
- [ ] **Complex Question Test:** Multi-faceted question
  - Input: "How do I balance growth with profitability?"
  - Expected: All advisors weigh in
  - Result: ☐ Pass ☐ Fail ☐ Error
  
- [ ] **Edge Case:** Off-topic question
  - Input: "What's the weather?"
  - Expected: Redirects to business topics or handles gracefully
  - Result: ☐ Pass ☐ Fail ☐ Error

**Notes:** _______________________________________________

**Rating:** ⭐⭐⭐⭐⭐

**CRITICAL:** This is your KEY differentiator. Must work flawlessly!

---

### **Skill 11: avatar-animator**
**Command:** `/avatar-animator` or `/avatar`

**Test Cases:**
- [ ] **Basic Test:** Animate avatar from image
  - Input: Avatar image file
  - Expected: Animated version created
  - Result: ☐ Pass ☐ Fail ☐ Error
  
- [ ] **Edge Case:** No image provided
  - Input: (no file)
  - Expected: Instructions on image requirements
  - Result: ☐ Pass ☐ Fail ☐ Error

**Notes:** _______________________________________________

**Rating:** ⭐⭐⭐⭐⭐

---

### **Skill 12: posting-scheduler**
**Command:** `/posting-scheduler` or `/schedule`

**Test Cases:**
- [ ] **Basic Test:** Create posting schedule
  - Input: "Create a weekly posting schedule for Instagram"
  - Expected: Detailed schedule with times
  - Result: ☐ Pass ☐ Fail ☐ Error
  
- [ ] **Platform Test:** Different platforms
  - Input: "TikTok posting schedule"
  - Expected: Platform-specific schedule
  - Result: ☐ Pass ☐ Fail ☐ Error
  
- [ ] **Edge Case:** Vague input
  - Input: "Schedule posts"
  - Expected: Asks for platform/details
  - Result: ☐ Pass ☐ Fail ☐ Error

**Notes:** _______________________________________________

**Rating:** ⭐⭐⭐⭐⭐

---

### **Skill 13: caption-generator**
**Command:** `/caption-generator` or `/caption`

**Test Cases:**
- [ ] **Basic Test:** Generate caption for post
  - Input: "Instagram caption for coffee shop photo"
  - Expected: Engaging caption with hashtags
  - Result: ☐ Pass ☐ Fail ☐ Error
  
- [ ] **Platform Test:** Different platforms
  - Input: "LinkedIn caption for business post"
  - Expected: Platform-appropriate tone
  - Result: ☐ Pass ☐ Fail ☐ Error
  
- [ ] **Style Test:** Different tones
  - Input: "Funny TikTok caption about Monday"
  - Expected: Tone-appropriate caption
  - Result: ☐ Pass ☐ Fail ☐ Error

**Notes:** _______________________________________________

**Rating:** ⭐⭐⭐⭐⭐

---

## 📊 PHASE 1 SUMMARY

**Skills Tested:** _____ / 13  
**Passing:** _____ / 13  
**Failing:** _____ / 13  
**Average Rating:** _____ / 5 ⭐

**Critical Issues (must fix before launch):**
1. _______________________________________________
2. _______________________________________________
3. _______________________________________________

**Minor Issues (can fix post-launch):**
1. _______________________________________________
2. _______________________________________________
3. _______________________________________________

---

## 🔗 PHASE 2: INTEGRATION TESTING (60 minutes)

**Test skills working together**

### **Integration Test 1: Content Creation Workflow**
- [ ] Use `/script-writer` to create a TikTok script
- [ ] Use `/tts-narrator` to convert script to audio
- [ ] Use `/caption-generator` to create post caption
- [ ] **Expected:** Seamless workflow, compatible outputs
- [ ] **Result:** ☐ Pass ☐ Fail ☐ Error

**Notes:** _______________________________________________

---

### **Integration Test 2: Business Strategy Workflow**
- [ ] Use `/council-of-advisors` to get business advice
- [ ] Use `/niche-finder` to research recommended niches
- [ ] Use `/posting-scheduler` to plan content for niche
- [ ] **Expected:** Coherent strategy across all outputs
- [ ] **Result:** ☐ Pass ☐ Fail ☐ Error

**Notes:** _______________________________________________

---

### **Integration Test 3: Visual Content Workflow**
- [ ] Use `/design-generator` to create design concept
- [ ] Use `/qr-generator` to add QR code to design
- [ ] Use `/caption-generator` to create post copy
- [ ] **Expected:** All elements work together
- [ ] **Result:** ☐ Pass ☐ Fail ☐ Error

**Notes:** _______________________________________________

---

## 📊 PHASE 2 SUMMARY

**Integration Tests:** _____ / 3  
**Passing:** _____ / 3  
**Failing:** _____ / 3  

**Integration Issues:**
1. _______________________________________________
2. _______________________________________________
3. _______________________________________________

---

## 🐛 BUG TRACKING TEMPLATE

**Copy this for each bug found:**

```
BUG #___
Skill: _______________
Severity: ☐ Critical ☐ High ☐ Medium ☐ Low
Description: _______________________________________________
Steps to Reproduce:
1. _______________________________________________
2. _______________________________________________
3. _______________________________________________
Expected Result: _______________________________________________
Actual Result: _______________________________________________
Screenshot: ☐ Yes ☐ No (file: ___________)
Workaround: _______________________________________________
Status: ☐ Open ☐ In Progress ☐ Fixed ☐ Won't Fix
```

---

## ✅ GO/NO-GO DECISION MATRIX

**Before launching to beta testers, verify:**

### **Must Have (All Required):**
- [ ] All 13 skills load without errors
- [ ] Council of Advisors works flawlessly
- [ ] No critical bugs (data loss, crashes)
- [ ] Error messages are helpful
- [ ] Skills produce expected outputs

### **Should Have (Strongly Recommended):**
- [ ] All edge cases handled gracefully
- [ ] Integration tests pass
- [ ] Documentation is clear
- [ ] Average skill rating ≥ 4/5 ⭐

### **Nice to Have (Can Add Later):**
- [ ] All optional features working
- [ ] Performance optimized
- [ ] All integrations tested
- [ ] Perfect 5/5 ⭐ ratings

---

## 📋 PHASE 3: CUSTOMER EXPERIENCE TESTING (30 minutes)

**Go through as a customer would**

- [ ] **First Impression:** Open OpenClaw, what do you see?
  - Is it clear how to get help? ☐ Yes ☐ No
  - Are skills easy to discover? ☐ Yes ☐ No
  - Notes: _______________________________________________

- [ ] **Onboarding:** Follow the quick start guide
  - Is it clear? ☐ Yes ☐ No
  - Can you complete in 15 minutes? ☐ Yes ☐ No
  - Notes: _______________________________________________

- [ ] **Documentation:** Review skill documentation
  - Is it easy to understand? ☐ Yes ☐ No
  - Are examples helpful? ☐ Yes ☐ No
  - Notes: _______________________________________________

- [ ] **Support Path:** What if you get stuck?
  - Is help easy to find? ☐ Yes ☐ No
  - Are error messages helpful? ☐ Yes ☐ No
  - Notes: _______________________________________________

---

## 🎯 FINAL RECOMMENDATION

**Based on all testing:**

☐ **READY FOR BETA LAUNCH** (All must-haves pass)
☐ **READY WITH MINOR FIXES** (1-3 small issues, can fix during beta)
☐ **NEEDS WORK** (Critical issues, fix before any launch)

**Reasoning:** _______________________________________________

**Recommended Next Step:** _______________________________________________

---

## 📝 TESTER NOTES

**Overall Impressions:**
_______________________________________________
_______________________________________________
_______________________________________________

**Biggest Strengths:**
1. _______________________________________________
2. _______________________________________________
3. _______________________________________________

**Biggest Weaknesses:**
1. _______________________________________________
2. _______________________________________________
3. _______________________________________________

**Must Fix Before Public Launch:**
1. _______________________________________________
2. _______________________________________________
3. _______________________________________________

**Nice to Have (Future Updates):**
1. _______________________________________________
2. _______________________________________________
3. _______________________________________________

---

## ✅ TESTING COMPLETION

**Test Completed By:** Charmaine Frost  
**Date:** _______________  
**Start Time:** _________  
**End Time:** _________  
**Total Time:** _________ hours  

**Ready for Beta Launch?** ☐ Yes ☐ No  
**Ready for Public Launch?** ☐ Yes ☐ No  
**Needs Additional Work?** ☐ Yes ☐ No  

**Signature:** _________________________

---

**Good luck with testing, Charmaine!** 🦞💪🚀

**Remember:** Finding bugs NOW is a GOOD thing. Better to find them in testing than after launch!

**File Location:** `/mnt/data/openclaw/workspace/.openclaw/workspace/OPENCLAW-TESTING-CHECKLIST.md`
