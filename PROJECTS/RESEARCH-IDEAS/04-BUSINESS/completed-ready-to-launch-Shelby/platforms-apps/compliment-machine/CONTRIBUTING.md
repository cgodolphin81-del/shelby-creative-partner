# Contributing to Infinite Compliment Machine 💝

Thank you for wanting to contribute to this project! Every contribution helps spread more kindness in the world.

## 🌟 Ways to Contribute

### 1. Add More Compliments

The heart of this project is the compliment database. We always need more!

**How to add:**
1. Open `js/compliments.js`
2. Add your compliment to the appropriate category:
   - `universal` - Works for anyone
   - `mood.happy`, `mood.tired`, etc. - Mood-specific
   - `interests.art`, `interests.music`, etc. - Interest-specific

**Guidelines for good compliments:**
- ✅ Be genuine and specific
- ✅ Avoid backhanded compliments
- ✅ Keep it positive and uplifting
- ✅ Make it personal but not creepy
- ✅ 1-2 sentences max
- ❌ No romantic/sexual content
- ❌ No appearance-focused comments (unless about smile/energy)
- ❌ No comparisons to others

**Examples:**
```javascript
// Good:
"You make difficult things look effortless."
"Your kindness creates ripples you'll never see."

// Avoid:
"You're pretty for someone who tries so hard." (backhanded)
"You're the most beautiful person ever." (appearance-focused, hyperbolic)
```

### 2. Improve the Design

See something that could look better? Have a design idea?

**How to contribute:**
1. Fork the repository
2. Make your changes in `css/styles.css` or create new components
3. Test on mobile and desktop
4. Submit a pull request

**Design principles:**
- Keep it warm and welcoming
- Maintain accessibility (color contrast, font sizes)
- Mobile-first approach
- Performance matters (keep it light!)

### 3. Add Features

Have an idea for a new feature?

**Good feature ideas:**
- New compliment categories
- Accessibility improvements
- Performance optimizations
- New sharing options
- Language translations
- Theme variations

**Before building:**
1. Check existing issues to see if it's already planned
2. Open an issue to discuss your idea
3. Keep the spirit of the project (simple, kind, no monetization)

### 4. Report Bugs

Found something broken? Let us know!

**When reporting:**
- What browser/device you're using
- Steps to reproduce
- What you expected vs. what happened
- Screenshots if helpful

### 5. Share Feedback

Used the site? Have thoughts?

**We want to hear about:**
- Compliments that really resonated
- Features you'd love to see
- Bugs or issues
- How it made you feel

---

## 🛠 Technical Setup

### Development Environment

```bash
# Clone the repo
git clone https://github.com/yourusername/compliment-machine.git

# Navigate to project
cd compliment-machine

# Open in browser (no build step needed!)
open index.html

# Or use a local server
npx serve .
```

### Testing Checklist

Before submitting, test:
- [ ] Works on Chrome, Firefox, Safari
- [ ] Works on mobile (iOS Safari, Chrome Android)
- [ ] All buttons clickable
- [ ] Compliments generate correctly
- [ ] Share functionality works
- [ ] Email capture works
- [ ] No console errors
- [ ] Performance is good (< 1s load time)

### Code Style

- Use meaningful variable names
- Add comments for complex logic
- Keep functions small and focused
- Follow existing patterns
- No linting errors

---

## 📝 Pull Request Process

1. **Fork** the repository
2. **Create a branch** (`git checkout -b feature/amazing-feature`)
3. **Make your changes**
4. **Test thoroughly**
5. **Commit** with clear messages
6. **Push** to your fork
7. **Open a Pull Request**

**PR Template:**
```markdown
## What does this do?
[Brief description]

## Why is this needed?
[Context/motivation]

## How did you test this?
[Testing steps]

## Screenshots (if applicable)
[Images]

## Checklist
- [ ] Tested on desktop
- [ ] Tested on mobile
- [ ] No console errors
- [ ] Follows project style
```

---

## 🎨 Creating App Icons

If you're adding PWA icons:

1. Create a 512x512 PNG icon
2. Use warm colors (pink, coral, yellow)
3. Include the heart emoji 💝 or sparkle ✨
4. Save as `assets/icon-192.png` and `assets/icon-512.png`

Tools:
- [Figma](https://figma.com) (free)
- [Canva](https://canva.com) (free)
- [PWA Icon Generator](https://realfavicongenerator.net)

---

## 🌍 Translations

Want to translate the site to another language?

1. Create a new folder: `i18n/[language-code]/`
2. Translate `index.html` content
3. Translate compliments in `js/compliments.js`
4. Add language selector to the UI

We'd love to make this accessible to everyone!

---

## 💝 Code of Conduct

This is a kindness project. That applies to contributors too.

**Be:**
- Welcoming to newcomers
- Patient with questions
- Constructive in feedback
- Respectful of differences
- Mindful of the project's purpose

**Not okay:**
- Harassment of any kind
- Discriminatory language
- Aggressive behavior
- Spam or self-promotion
- Anything that goes against the spirit of kindness

---

## 📞 Getting Help

Need help contributing?

- Open an issue with your question
- Check existing issues for similar problems
- Read the code comments
- Ask in the discussions tab

---

## 🙏 Thank You

Every contribution makes this project better and helps spread more kindness. Whether you're adding one compliment or building a major feature, you're part of making the internet a warmer place.

Thank you for being here. 💝

---

**Questions?** Open an issue and we'll help you out!
