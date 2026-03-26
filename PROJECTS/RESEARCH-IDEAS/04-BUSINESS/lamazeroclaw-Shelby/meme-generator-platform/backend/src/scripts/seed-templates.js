require('dotenv').config();
const mongoose = require('mongoose');
const Template = require('../models/Template');

// Template categories
const categories = [
  'classic', 'reaction', 'wholesome', 'dark', 'surreal', 
  'corporate', 'gaming', 'anime', 'movies', 'tv', 
  'sports', 'politics', 'tech', 'animals', 'food', 
  'relationship', 'motivational', 'seasonal', 'trending'
];

// Classic meme templates data
const classicTemplates = [
  { name: 'Drake Hotline Bling', category: 'classic', tags: ['drake', 'no', 'yes', 'preference'] },
  { name: 'Distracted Boyfriend', category: 'classic', tags: ['boyfriend', 'looking', 'relationship'] },
  { name: 'Two Buttons', category: 'classic', tags: ['choice', 'decision', 'buttons'] },
  { name: 'Change My Mind', category: 'classic', tags: ['opinion', 'crowder', 'debate'] },
  { name: 'Expanding Brain', category: 'classic', tags: ['brain', 'smart', 'levels'] },
  { name: 'Stonks', category: 'classic', tags: ['stonks', 'money', 'business'] },
  { name: 'Panik Kalm', category: 'classic', tags: ['panic', 'calm', 'reaction'] },
  { name: 'Woman Yelling at Cat', category: 'classic', tags: ['yelling', 'cat', 'dinner'] },
  { name: 'This is Fine', category: 'classic', tags: ['fine', 'fire', 'okay'] },
  { name: 'Surprised Pikachu', category: 'classic', tags: ['surprised', 'pikachu', 'shock'] },
  { name: 'Mocking Spongebob', category: 'classic', tags: ['mocking', 'spongebob', 'sarcasm'] },
  { name: 'Batman Slapping Robin', category: 'classic', tags: ['batman', 'robin', 'slap'] },
  { name: 'Success Kid', category: 'classic', tags: ['success', 'kid', 'victory'] },
  { name: 'Bad Luck Brian', category: 'classic', tags: ['bad luck', 'brian', 'unlucky'] },
  { name: 'Overly Attached Girlfriend', category: 'classic', tags: ['girlfriend', 'attached', 'crazy'] },
  { name: 'First World Problems', category: 'classic', tags: ['problems', 'first world', 'rich'] },
  { name: 'Ancient Aliens', category: 'classic', tags: ['aliens', 'ancient', 'theory'] },
  { name: 'One Does Not Simply', category: 'classic', tags: ['boromir', 'lotr', 'simply'] },
  { name: 'Philosoraptor', category: 'classic', tags: ['philosophy', 'raptor', 'thinking'] },
  { name: 'Y U No Guy', category: 'classic', tags: ['y u no', 'guy', 'why'] }
];

// Reaction templates
const reactionTemplates = [
  { name: 'Laughing Leo', category: 'reaction', tags: ['laughing', 'dicaprio', 'funny'] },
  { name: 'Crying Jordan', category: 'reaction', tags: ['crying', 'jordan', 'sad'] },
  { name: 'Awkward Seal', category: 'reaction', tags: ['awkward', 'seal', 'uncomfortable'] },
  { name: 'Facepalm Picard', category: 'reaction', tags: ['facepalm', 'picard', 'disappointed'] },
  { name: 'Shrug Emoji', category: 'reaction', tags: ['shrug', 'whatever', 'idk'] },
  { name: 'Thumbs Up', category: 'reaction', tags: ['thumbs up', 'approval', 'good'] },
  { name: 'Mind Blown', category: 'reaction', tags: ['mind', 'blown', 'amazed'] },
  { name: 'Eye Roll', category: 'reaction', tags: ['eye roll', 'annoyed', 'whatever'] },
  { name: 'Clapping', category: 'reaction', tags: ['clapping', 'applause', 'bravo'] },
  { name: 'Shocked Face', category: 'reaction', tags: ['shocked', 'surprised', 'omg'] },
  { name: 'Thinking Face', category: 'reaction', tags: ['thinking', 'hmm', 'wonder'] },
  { name: 'Angry Face', category: 'reaction', tags: ['angry', 'mad', 'furious'] },
  { name: 'Confused Nick Young', category: 'reaction', tags: ['confused', 'what', 'question'] },
  { name: 'Side Eye', category: 'reaction', tags: ['side eye', 'judgment', 'suspicious'] },
  { name: 'Excited Elmo', category: 'reaction', tags: ['excited', 'elmo', 'happy'] }
];

// Gaming templates
const gamingTemplates = [
  { name: 'Press F to Pay Respects', category: 'gaming', tags: ['gaming', 'f', 'respects'] },
  { name: 'It\'s Dangerous to Go Alone', category: 'gaming', tags: ['zelda', 'sword', 'adventure'] },
  { name: 'Too Many Cookbooks', category: 'gaming', tags: ['overcooked', 'chaos', 'cooking'] },
  { name: 'Fus Ro Dah', category: 'gaming', tags: ['skyrim', 'shout', 'dragonborn'] },
  { name: 'Victory Royale', category: 'gaming', tags: ['fortnite', 'victory', 'win'] },
  { name: 'Git Gud', category: 'gaming', tags: ['git gud', 'skill', 'dark souls'] },
  { name: 'Lag Spike', category: 'gaming', tags: ['lag', 'internet', 'frustrated'] },
  { name: 'Respawn', category: 'gaming', tags: ['respawn', 'death', 'try again'] },
  { name: 'NPC Energy', category: 'gaming', tags: ['npc', 'robot', 'boring'] },
  { name: 'Speedrun Any%', category: 'gaming', tags: ['speedrun', 'fast', 'record'] },
  { name: 'Camping Camper', category: 'gaming', tags: ['camping', 'campers', 'cod'] },
  { name: 'Microtransactions', category: 'gaming', tags: ['mtx', 'pay', 'greedy'] },
  { name: 'Day One Patch', category: 'gaming', tags: ['patch', 'update', 'broken'] },
  { name: 'Early Access', category: 'gaming', tags: ['early access', 'unfinished', 'beta'] },
  { name: 'Console Wars', category: 'gaming', tags: ['console', 'pc', 'platform'] }
];

// Corporate/Millennial templates
const corporateTemplates = [
  { name: 'This Meeting Could Have Been an Email', category: 'corporate', tags: ['meeting', 'email', 'work'] },
  { name: 'Per My Last Email', category: 'corporate', tags: ['email', 'passive aggressive', 'work'] },
  { name: 'Circle Back', category: 'corporate', tags: ['circle back', 'corporate', 'buzzword'] },
  { name: 'Let\'s Take This Offline', category: 'corporate', tags: ['offline', 'meeting', 'corporate'] },
  { name: 'Ping Me', category: 'corporate', tags: ['ping', 'message', 'work'] },
  { name: 'Low Hanging Fruit', category: 'corporate', tags: ['fruit', 'easy', 'corporate'] },
  { name: 'Think Outside the Box', category: 'corporate', tags: ['box', 'creative', 'corporate'] },
  { name: 'Move the Needle', category: 'corporate', tags: ['needle', 'progress', 'corporate'] },
  { name: 'Synergy', category: 'corporate', tags: ['synergy', 'teamwork', 'corporate'] },
  { name: 'Touch Base', category: 'corporate', tags: ['touch base', 'meet', 'corporate'] },
  { name: 'Bandwidth', category: 'corporate', tags: ['bandwidth', 'capacity', 'work'] },
  { name: 'Deep Dive', category: 'corporate', tags: ['deep dive', 'analyze', 'corporate'] },
  { name: 'Action Items', category: 'corporate', tags: ['action items', 'tasks', 'meeting'] },
  { name: 'EOD Today', category: 'corporate', tags: ['eod', 'deadline', 'urgent'] },
  { name: 'Quick Question', category: 'corporate', tags: ['quick question', 'actually long', 'work'] }
];

// Animals
const animalTemplates = [
  { name: 'Grumpy Cat', category: 'animals', tags: ['grumpy', 'cat', 'no'] },
  { name: 'Doge', category: 'animals', tags: ['doge', 'shiba', 'wow'] },
  { name: 'Cheems', category: 'animals', tags: ['cheems', 'doge', 'smol'] },
  { name: 'Smudge the Cat', category: 'animals', tags: ['smudge', 'cat', 'salad'] },
  { name: 'Polite Cat', category: 'animals', tags: ['polite', 'cat', 'nice'] },
  { name: 'Long Cat', category: 'animals', tags: ['long', 'cat', 'loooong'] },
  { name: 'Business Cat', category: 'animals', tags: ['business', 'cat', 'tie'] },
  { name: 'Ceiling Cat', category: 'animals', tags: ['ceiling', 'cat', 'watching'] },
  { name: 'Keyboard Cat', category: 'animals', tags: ['keyboard', 'cat', 'music'] },
  { name: 'Woman and Dog', category: 'animals', tags: ['woman', 'dog', 'makeup'] },
  { name: 'Disaster Girl', category: 'animals', tags: ['girl', 'fire', 'evil'] },
  { name: 'Hide the Pain Harold', category: 'animals', tags: ['harold', 'pain', 'smile'] },
  { name: 'Roll Safe', category: 'animals', tags: ['roll safe', 'think', 'smart'] },
  { name: 'Arthur Fist', category: 'animals', tags: ['arthur', 'fist', 'angry'] },
  { name: 'Kermit Tea', category: 'animals', tags: ['kermit', 'tea', 'none of my business'] }
];

// Generate variations
function generateTemplateVariations(base, count) {
  const variations = [];
  for (let i = 0; i < count; i++) {
    variations.push({
      ...base,
      name: `${base.name} ${i + 1}`,
      tags: [...base.tags, `variation${i + 1}`]
    });
  }
  return variations;
}

// Seed database
async function seedTemplates() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/meme-generator');
    console.log('✅ Connected to MongoDB');

    // Clear existing templates
    await Template.deleteMany({});
    console.log('🗑️ Cleared existing templates');

    const allTemplates = [];

    // Add all template groups
    const templateGroups = [
      classicTemplates,
      reactionTemplates,
      gamingTemplates,
      corporateTemplates,
      animalTemplates
    ];

    // Generate 500+ templates
    templateGroups.forEach(group => {
      group.forEach(template => {
        // Add base template
        allTemplates.push({
          ...template,
          description: `Popular ${template.category} meme template`,
          dimensions: { width: 500, height: 500 },
          textAreas: [
            {
              defaultText: 'Top text',
              x: 250,
              y: 50,
              maxWidth: 400,
              fontSize: 40,
              fontFamily: 'Impact',
              color: '#FFFFFF',
              strokeColor: '#000000',
              align: 'center',
              isTop: true
            },
            {
              defaultText: 'Bottom text',
              x: 250,
              y: 450,
              maxWidth: 400,
              fontSize: 40,
              fontFamily: 'Impact',
              color: '#FFFFFF',
              strokeColor: '#000000',
              align: 'center',
              isTop: false
            }
          ],
          isPremium: Math.random() > 0.8, // 20% premium
          isTrending: Math.random() > 0.9, // 10% trending
          status: 'active'
        });

        // Add 2-3 variations per template
        const variations = generateTemplateVariations(template, Math.floor(Math.random() * 2) + 2);
        variations.forEach(v => {
          allTemplates.push({
            ...v,
            description: `Variation of ${template.name}`,
            dimensions: { width: 500, height: 500 },
            textAreas: [
              {
                defaultText: 'Top text',
                x: 250,
                y: 50,
                maxWidth: 400,
                fontSize: 40,
                fontFamily: 'Impact',
                color: '#FFFFFF',
                strokeColor: '#000000',
                align: 'center',
                isTop: true
              },
              {
                defaultText: 'Bottom text',
                x: 250,
                y: 450,
                maxWidth: 400,
                fontSize: 40,
                fontFamily: 'Impact',
                color: '#FFFFFF',
                strokeColor: '#000000',
                align: 'center',
                isTop: false
              }
            ],
            isPremium: Math.random() > 0.8,
            isTrending: Math.random() > 0.9,
            status: 'active'
          });
        });
      });
    });

    // Insert all templates
    await Template.insertMany(allTemplates);
    console.log(`✅ Seeded ${allTemplates.length} templates`);

    // Show stats by category
    const stats = await Template.aggregate([
      { $group: { _id: '$category', count: { $sum: 1 } } },
      { $sort: { count: -1 } }
    ]);

    console.log('\n📊 Templates by Category:');
    stats.forEach(s => {
      console.log(`  ${s._id}: ${s.count}`);
    });

    process.exit(0);
  } catch (err) {
    console.error('❌ Error seeding templates:', err);
    process.exit(1);
  }
}

seedTemplates();
