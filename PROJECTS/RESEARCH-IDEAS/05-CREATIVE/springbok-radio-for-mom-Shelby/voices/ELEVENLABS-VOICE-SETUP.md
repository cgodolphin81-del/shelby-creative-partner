# AI Voice Setup Guide
## ElevenLabs Period-Accurate Voices for Springbok Radio

**Created for:** Springbok Radio for Mom  
**Platform:** ElevenLabs (elevenlabs.io)  
**Goal:** Create authentic 1950s-60s South African radio voices

---

## WHY ELEVENLABS?

**Advantages:**
- ✅ Highest quality AI voice synthesis available
- ✅ Fine control over accent, age, and emotion
- ✅ Voice cloning option (if Charmaine wants to use her own voice)
- ✅ Consistent character voices across episodes
- ✅ Relatively affordable for this project scope

**Pricing (as of 2024):**
- Free tier: 10,000 characters/month (good for testing)
- Starter: $5/month (30,000 characters)
- Creator: $22/month (100,000 characters) ← **Recommended for this project**
- Pro: $99/month (500,000 characters)

**Estimated Usage:**
- 10 episodes × ~2,000 words each = ~20,000 words
- With multiple characters and retakes: ~50,000-70,000 characters
- Creator plan should cover the entire project

---

## RECOMMENDED VOICE CONFIGURATIONS

### MAIN CHARACTERS (Recurring Across Episodes)

#### 1. MARGARET HARRIS (Episodes 1 & 10)
**Character:** Warm elderly matriarch, 60s, English South African
**Voice Profile:**
- **Age:** 60-70
- **Gender:** Female
- **Accent:** South African English (cultivated/RP-influenced)
- **Tone:** Warm, gentle, slightly fragile but strong
- **Pace:** Slow, deliberate
- **Recommended ElevenLabs Voice:** "Rachel" or "Dorothy" with stability increased

**Settings:**
```
Stability: 65% (slightly higher for consistency)
Similarity Enhancement: 75%
Style Exaggeration: 15% (keep natural)
```

**Sample Direction:**
> "Imagine a grandmother speaking to her family. Warm, loving, with the weight of years but the lightness of joy. Slightly breathy on emotional moments."

---

#### 2. DAVID HARRIS (Episodes 1 & 10)
**Character:** Successful businessman, 35-37, returning son
**Voice Profile:**
- **Age:** 35-40
- **Gender:** Male
- **Accent:** South African English (modern, less accent than older generation)
- **Tone:** Regretful, seeking redemption, warm
- **Pace:** Medium, faster when emotional

**Settings:**
```
Stability: 60%
Similarity Enhancement: 70%
Style Exaggeration: 20%
```

---

#### 3. TANT GEESIE (Episodes 7 & 9)
**Character:** Elderly Afrikaans matriarch, 70s
**Voice Profile:**
- **Age:** 70+
- **Gender:** Female
- **Accent:** Afrikaans-influenced English
- **Tone:** Wise, warm, authoritative but loving
- **Pace:** Slow, deliberate, pauses for wisdom

**Settings:**
```
Stability: 70% (very consistent)
Similarity Enhancement: 80%
Style Exaggeration: 10% (natural delivery)
```

**Note:** If ElevenLabs doesn't have good Afrikaans accent, use a gentle European accent and add slight pronunciation adjustments in post.

---

#### 4. ANNOUNCER (All Episodes)
**Character:** Classic Springbok Radio announcer
**Voice Profile:**
- **Age:** 40-50
- **Gender:** Male
- **Accent:** British RP or cultivated South African
- **Tone:** Authoritative, warm, theatrical
- **Pace:** Measured, dramatic pauses

**Settings:**
```
Stability: 75% (very consistent)
Similarity Enhancement: 85%
Style Exaggeration: 30% (more theatrical)
```

**Recommended Voice:** "Adam" or "Antoni" with British accent settings

**Sample Script:**
> "Springbok Radio presents... [dramatic pause] ...a story of love, family, and the courage to come home."

---

### EPISODE-SPECIFIC VOICES

#### Episode 2: Mrs. Van Der Merwe's Garden
- **ELSIE:** Elderly Afrikaans woman (similar to Tant Geesie)
- **PIETER:** Young boy (use "Josh" or similar youthful voice, pitch up slightly)
- **MRS. THOMPSON:** Middle-aged English woman (stern then warm)
- **CONSTABLE KRUGER:** Middle-aged Afrikaans man (friendly authority)

#### Episode 3: The Last Train to Durban
- **CATHERINE:** Young woman, 28 (use "Rachel" or "Bella")
- **MICHAEL:** Young man, 32 (use "Josh" or "Arnold")
- **MRS. BOTHA:** Chatty elderly woman (use comedic timing)
- **CONDUCTOR:** Friendly older man

#### Episode 4: Uncle Piet's Secret
- **UNCLE PIET:** Elderly Afrikaans man, lovable rogue
  - **Key:** Warm, slightly mischievous, never mean
  - **Voice:** "Adam" with lower pitch, more warmth
- **TANT ANNA:** His sister, practical (similar to Margaret but sharper)
- **FRANCOIS:** Teenage boy (16)
- **OOM SJAAL:** Elderly man, Piet's friend (deeper voice)

#### Episode 5: The Voice on the Wireless
- **SARAH:** Middle-aged widow (similar to Margaret, more fragile)
- **HENRY'S VOICE:** Needs special treatment
  - **Technique:** Record with normal voice, then add radio filter in post
  - **EQ:** Cut highs above 5kHz, boost mids at 1-3kHz
  - **Add:** Slight reverb, telephone/radio filter effect

#### Episode 6: Tea at Four O'Clock
- **ARTHUR:** Elderly shy man (68)
- **GLADYS:** Elderly warm woman (65)
- **MRS. PATEL:** Middle-aged Indian-South African woman (tea room owner)
  - **Note:** Handle accent respectfully, not caricature

#### Episode 7: The Children's Hour
- **GRANDMA ELIZABETH:** Wise storyteller (65)
- **LITTLE JOHNNY:** 8-year-old boy
  - **Technique:** Use youthful voice, pitch up 10-15%
- **LITTLE SUSIE:** 6-year-old girl
  - **Technique:** Use youthful female voice, pitch up slightly
- **MOTHER (HELEN):** Middle-aged woman (tired but loving)

#### Episode 8: Dr. Elizabeth's House Call
- **DR. ELIZABETH NDLOVU:** Black South African woman, 35
  - **Note:** This is sensitive - consider using a real voice actor if possible
  - **If using AI:** Use warm, professional female voice, avoid accent stereotypes
- **NURSE THANDIWE:** Young Black woman, 28
- **MRS. KRUGER:** White Afrikaner woman, 60
- **MR. KRUGER:** White Afrikaner man, 65 (gruff but learning)
- **LITTLE PIETER:** 8-year-old boy (sick, weak voice)

#### Episode 9: The Recipe Box
- **TANT GEESIE:** (see above)
- **MARIA:** Young woman, 25 (newly married)
- **LITTLE ANNA:** 5-year-old girl
- **MRS. JOOSTE:** Elderly neighbor (similar to Tant Geesie)

---

## STEP-BY-STEP SETUP

### Step 1: Create ElevenLabs Account
1. Go to elevenlabs.io
2. Sign up for free account
3. Upgrade to Creator plan ($22/month)
4. Cancel after project completion (or keep for future projects)

### Step 2: Voice Selection
1. Go to VoiceLab
2. Browse pre-made voices
3. Test each voice with sample script from your episodes
4. Save favorites with descriptive names

### Step 3: Generate Dialogue
1. Copy script dialogue for one character
2. Paste into text-to-speech box
3. Select appropriate voice
4. Adjust settings (stability, similarity, style)
5. Click "Generate"
6. Download as MP3
7. **Name files systematically:** `Ep01_Margaret_Scene1.mp3`

### Step 4: Voice Direction Tips
**For Best Results:**
- Break long speeches into shorter segments
- Add `[pause]` markers in text for dramatic moments
- Use SSML tags if needed: `<break time="1s"/>`
- Generate multiple takes and choose the best
- Keep a "voice Bible" document with settings for each character

### Step 5: Post-Processing
**After generating all voices:**
1. Import into audio editor (Audacity, Reaper, etc.)
2. Apply vintage broadcast EQ (see Production Guide)
3. Add slapback delay (75-150ms)
4. Normalize levels
5. Export as WAV for mastering

---

## ALTERNATIVE AI VOICE PLATFORMS

### If ElevenLabs Doesn't Work Out:

#### 1. **Play.ht**
- Good quality, lower cost
- Less natural than ElevenLabs
- Good for secondary characters

#### 2. **Murf.ai**
- Professional quality
- Good accent options
- More expensive

#### 3. **Descript (Overdub)**
- Can clone your own voice
- Good for narrator/announcer
- Requires training time

#### 4. **Amazon Polly**
- Very affordable
- Lower quality than ElevenLabs
- Good for testing

---

## HUMAN VOICE ACTOR OPTION

**If budget allows, consider:**
- Local South African voice actors (authentic accents)
- Voice acting students (affordable, enthusiastic)
- Community theater actors (dramatic experience)
- **Fiverr/Upwork:** Search "South African voice actor"

**Benefits:**
- Authentic accents and pronunciation
- Emotional nuance AI can't match
- Supporting real artists
- Unique, irreplaceable performances

**Estimated Cost:**
- R500-R2000 per episode (local talent)
- $50-$200 per episode (international)
- Total: R5,000-R20,000 ($300-$1,200) for all 10 episodes

---

## VOICE CLONING OPTION

**If Charmaine wants to narrate:**

### ElevenLabs Instant Voice Cloning
1. Record 1-5 minutes of clean speech
2. Upload to VoiceLab
3. AI creates voice clone in minutes
4. Use for narrator or specific characters

**Requirements:**
- Quiet recording environment
- Good microphone (USB mic is fine)
- Clear, consistent delivery
- No background noise

**Ethical Note:** Only clone voices with permission. Don't clone deceased family members without careful consideration.

---

## QUALITY CONTROL CHECKLIST

Before finalizing voices:

- [ ] All character voices are distinct and recognizable
- [ ] Accents are respectful and authentic (not caricatures)
- [ ] Emotional delivery matches scene requirements
- [ ] Volume levels are consistent across all recordings
- [ ] No audio artifacts, clicks, or glitches
- [ ] Pacing feels natural (not rushed or robotic)
- [ ] Pauses are appropriate for radio drama format
- [ ] Character ages sound appropriate
- [ ] Gender presentation matches character descriptions
- [ ] All dialogue is clearly intelligible

---

## TROUBLESHOOTING

### Problem: Voice sounds too robotic
**Solution:** Increase "Style Exaggeration" to 20-30%, reduce "Stability" to 50-60%

### Problem: Accent isn't right
**Solution:** Try different base voice, add phonetic spelling for tricky words

### Problem: Emotional moments fall flat
**Solution:** Break into smaller segments, add direction notes in text

### Problem: Voices sound too similar
**Solution:** Adjust pitch in post-production, choose more distinct base voices

### Problem: Budget is too tight
**Solution:** Use free tier for testing, upgrade for one month, work intensively

---

## RECOMMENDED WORKFLOW

**Week 1:** Voice selection and testing
- Test all main character voices
- Generate sample scenes
- Get feedback from Charmaine

**Week 2-3:** Generate all dialogue
- Work episode by episode
- Organize files meticulously
- Quality check each recording

**Week 4:** Post-processing
- Apply vintage effects
- Normalize levels
- Prepare for sound effects integration

---

## FINAL NOTES

**Remember:**
- The goal is **emotional authenticity**, not technical perfection
- Mom will forgive minor imperfections if the love comes through
- This is a **gift**, not a commercial product
- Have fun with it! The joy will come through in the voices

**Contact Charmaine for:**
- Voice preferences (which voices does she like?)
- Accent authenticity check (does this sound like home?)
- Emotional tone (warmer? more dramatic?)
- Budget decisions (AI vs. human actors)

---

*For Mom - because every voice tells a story, and every story deserves to be heard.* 🎙️❤️
