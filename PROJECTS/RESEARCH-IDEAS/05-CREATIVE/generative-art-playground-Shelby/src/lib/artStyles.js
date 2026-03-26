// 50+ Art Styles with Prompts for Generative Art Playground
// Each style includes name, description, prompt template, and tags

export const artStyles = [
  {
    id: 'abstract-expressionism',
    name: 'Abstract Expressionism',
    category: 'Modern',
    description: 'Bold, spontaneous brushstrokes with emotional intensity',
    promptTemplate: 'abstract expressionist painting, bold gestural brushstrokes, {subject}, vibrant colors, emotional intensity, dynamic composition, Jackson Pollock style',
    negativePrompt: 'realistic, photographic, detailed, precise',
    tags: ['abstract', 'modern', 'expressive', 'bold'],
    difficulty: 'beginner',
    popularity: 95
  },
  {
    id: 'surrealism',
    name: 'Surrealism',
    category: 'Modern',
    description: 'Dreamlike imagery with unexpected juxtapositions',
    promptTemplate: 'surrealist artwork, dreamlike scene, {subject}, melting objects, impossible geometry, Salvador Dali style, mysterious atmosphere',
    negativePrompt: 'realistic, logical, ordinary, mundane',
    tags: ['surreal', 'dream', 'mysterious', 'fantasy'],
    difficulty: 'intermediate',
    popularity: 98
  },
  {
    id: 'cyberpunk',
    name: 'Cyberpunk',
    category: 'Sci-Fi',
    description: 'High-tech dystopia with neon aesthetics',
    promptTemplate: 'cyberpunk scene, neon lights, {subject}, futuristic city, rain-slicked streets, holographic displays, Blade Runner aesthetic, dark atmosphere',
    negativePrompt: 'natural, pastoral, bright, cheerful',
    tags: ['sci-fi', 'neon', 'futuristic', 'dark'],
    difficulty: 'beginner',
    popularity: 97
  },
  {
    id: 'art-nouveau',
    name: 'Art Nouveau',
    category: 'Classical',
    description: 'Organic flowing lines and natural forms',
    promptTemplate: 'art nouveau style, {subject}, flowing organic lines, natural forms, decorative borders, Alphonse Mucha style, elegant, ornate details',
    negativePrompt: 'geometric, angular, modern, minimal',
    tags: ['classical', 'ornate', 'elegant', 'decorative'],
    difficulty: 'intermediate',
    popularity: 88
  },
  {
    id: 'psychedelic',
    name: 'Psychedelic',
    category: 'Modern',
    description: 'Vibrant colors and swirling patterns',
    promptTemplate: 'psychedelic art, {subject}, vibrant swirling colors, fractal patterns, kaleidoscopic, trippy visuals, 1960s poster style, mind-bending',
    negativePrompt: 'muted, simple, realistic, plain',
    tags: ['psychedelic', 'colorful', 'trippy', 'fractal'],
    difficulty: 'beginner',
    popularity: 92
  },
  {
    id: 'ukiyo-e',
    name: 'Ukiyo-e',
    category: 'Traditional',
    description: 'Japanese woodblock print style',
    promptTemplate: 'ukiyo-e woodblock print, {subject}, Japanese traditional style, flat colors, bold outlines, Hokusai style, serene composition',
    negativePrompt: '3d, realistic, western, photographic',
    tags: ['japanese', 'traditional', 'woodblock', 'serene'],
    difficulty: 'intermediate',
    popularity: 85
  },
  {
    id: 'synthwave',
    name: 'Synthwave',
    category: 'Retro',
    description: '80s retro-futuristic aesthetic',
    promptTemplate: 'synthwave aesthetic, {subject}, retro 80s, neon grid, sunset gradient, palm trees, chrome, Miami Vice colors, nostalgic futurism',
    negativePrompt: 'modern, realistic, dark, muted',
    tags: ['retro', '80s', 'neon', 'nostalgic'],
    difficulty: 'beginner',
    popularity: 94
  },
  {
    id: 'impressionism',
    name: 'Impressionism',
    category: 'Classical',
    description: 'Light and color with visible brushstrokes',
    promptTemplate: 'impressionist painting, {subject}, visible brushstrokes, play of light, soft colors, Monet style, outdoor scene, atmospheric',
    negativePrompt: 'sharp, detailed, photographic, digital',
    tags: ['classical', 'light', 'soft', 'painterly'],
    difficulty: 'intermediate',
    popularity: 87
  },
  {
    id: 'low-poly',
    name: 'Low Poly',
    category: 'Digital',
    description: 'Geometric faceted 3D style',
    promptTemplate: 'low poly art, {subject}, geometric facets, triangular polygons, 3d render, minimalist, clean lines, modern digital art',
    negativePrompt: 'realistic, detailed, organic, smooth',
    tags: ['digital', 'geometric', '3d', 'minimal'],
    difficulty: 'beginner',
    popularity: 90
  },
  {
    id: 'watercolor',
    name: 'Watercolor',
    category: 'Traditional',
    description: 'Soft translucent watercolor painting',
    promptTemplate: 'watercolor painting, {subject}, soft edges, translucent layers, paint bleeding, organic textures, delicate, artistic',
    negativePrompt: 'opaque, sharp, digital, photographic',
    tags: ['traditional', 'soft', 'delicate', 'painterly'],
    difficulty: 'beginner',
    popularity: 91
  },
  {
    id: 'steampunk',
    name: 'Steampunk',
    category: 'Sci-Fi',
    description: 'Victorian-era technology with steam power',
    promptTemplate: 'steampunk design, {subject}, brass gears, Victorian machinery, steam power, clockwork mechanisms, industrial revolution aesthetic, copper and bronze',
    negativePrompt: 'modern, digital, plastic, sleek',
    tags: ['steampunk', 'victorian', 'mechanical', 'retro'],
    difficulty: 'intermediate',
    popularity: 89
  },
  {
    id: 'pop-art',
    name: 'Pop Art',
    category: 'Modern',
    description: 'Bold colors and popular culture imagery',
    promptTemplate: 'pop art style, {subject}, bold flat colors, Andy Warhol style, halftone dots, comic book aesthetic, vibrant, mass culture',
    negativePrompt: 'subtle, realistic, muted, classical',
    tags: ['pop', 'bold', 'colorful', 'modern'],
    difficulty: 'beginner',
    popularity: 86
  },
  {
    id: 'fantasy',
    name: 'Fantasy Art',
    category: 'Fantasy',
    description: 'Magical and mythical imagery',
    promptTemplate: 'fantasy artwork, {subject}, magical atmosphere, ethereal lighting, mystical creatures, enchanted landscape, detailed, epic scale',
    negativePrompt: 'mundane, modern, realistic, ordinary',
    tags: ['fantasy', 'magical', 'epic', 'mythical'],
    difficulty: 'intermediate',
    popularity: 96
  },
  {
    id: 'minimalism',
    name: 'Minimalism',
    category: 'Modern',
    description: 'Simple forms with maximum impact',
    promptTemplate: 'minimalist art, {subject}, simple geometric shapes, limited color palette, clean composition, negative space, modern, elegant',
    negativePrompt: 'complex, detailed, busy, ornate',
    tags: ['minimal', 'simple', 'clean', 'modern'],
    difficulty: 'beginner',
    popularity: 84
  },
  {
    id: 'gothic',
    name: 'Gothic',
    category: 'Classical',
    description: 'Dark romantic medieval aesthetics',
    promptTemplate: 'gothic art, {subject}, dark atmosphere, medieval architecture, dramatic lighting, ornate details, mysterious, romantic darkness',
    negativePrompt: 'bright, cheerful, modern, simple',
    tags: ['gothic', 'dark', 'medieval', 'dramatic'],
    difficulty: 'intermediate',
    popularity: 82
  },
  {
    id: 'pixel-art',
    name: 'Pixel Art',
    category: 'Digital',
    description: 'Retro video game aesthetic',
    promptTemplate: 'pixel art, {subject}, 8-bit style, retro video game, limited color palette, blocky pixels, nostalgic, game sprite',
    negativePrompt: 'smooth, realistic, 3d, photographic',
    tags: ['pixel', 'retro', 'game', '8bit'],
    difficulty: 'beginner',
    popularity: 93
  },
  {
    id: 'cubism',
    name: 'Cubism',
    category: 'Modern',
    description: 'Geometric fragmentation of subjects',
    promptTemplate: 'cubist painting, {subject}, geometric fragmentation, multiple perspectives, Pablo Picasso style, abstract forms, angular shapes',
    negativePrompt: 'realistic, smooth, traditional, photographic',
    tags: ['cubism', 'geometric', 'abstract', 'modern'],
    difficulty: 'advanced',
    popularity: 79
  },
  {
    id: 'anime',
    name: 'Anime',
    category: 'Digital',
    description: 'Japanese animation style',
    promptTemplate: 'anime style, {subject}, Japanese animation, expressive eyes, vibrant colors, cel shaded, detailed background, studio ghibli inspired',
    negativePrompt: 'realistic, western, photographic, 3d',
    tags: ['anime', 'japanese', 'animation', 'colorful'],
    difficulty: 'beginner',
    popularity: 99
  },
  {
    id: 'art-deco',
    name: 'Art Deco',
    category: 'Classical',
    description: 'Geometric luxury of the 1920s-30s',
    promptTemplate: 'art deco style, {subject}, geometric patterns, gold accents, luxurious, 1920s elegance, symmetrical, bold shapes, glamorous',
    negativePrompt: 'organic, rustic, modern, minimal',
    tags: ['deco', 'luxury', 'geometric', 'vintage'],
    difficulty: 'intermediate',
    popularity: 83
  },
  {
    id: 'concept-art',
    name: 'Concept Art',
    category: 'Digital',
    description: 'Professional game and film concept design',
    promptTemplate: 'concept art, {subject}, professional game design, detailed environment, atmospheric lighting, matte painting, cinematic composition',
    negativePrompt: 'amateur, simple, flat, boring',
    tags: ['concept', 'professional', 'cinematic', 'detailed'],
    difficulty: 'advanced',
    popularity: 95
  },
  {
    id: 'vaporwave',
    name: 'Vaporwave',
    category: 'Retro',
    description: 'Internet-age retro aesthetic',
    promptTemplate: 'vaporwave aesthetic, {subject}, pastel colors, classical statues, glitch art, windows 95, tropical sunset, nostalgic internet',
    negativePrompt: 'realistic, modern, serious, dark',
    tags: ['vaporwave', 'retro', 'internet', 'pastel'],
    difficulty: 'beginner',
    popularity: 88
  },
  {
    id: 'biomechanical',
    name: 'Biomechanical',
    category: 'Sci-Fi',
    description: 'Fusion of organic and mechanical',
    promptTemplate: 'biomechanical art, {subject}, H.R. Giger style, fusion of organic and machine, alien technology, dark metallic, intricate details',
    negativePrompt: 'natural, soft, colorful, cheerful',
    tags: ['biomechanical', 'alien', 'dark', 'sci-fi'],
    difficulty: 'advanced',
    popularity: 81
  },
  {
    id: 'stained-glass',
    name: 'Stained Glass',
    category: 'Traditional',
    description: 'Colorful glass window art',
    promptTemplate: 'stained glass window, {subject}, vibrant colored glass, lead outlines, light filtering through, church window, religious art style',
    negativePrompt: 'opaque, realistic, photographic, digital',
    tags: ['stained-glass', 'colorful', 'religious', 'traditional'],
    difficulty: 'intermediate',
    popularity: 77
  },
  {
    id: 'ink-drawing',
    name: 'Ink Drawing',
    category: 'Traditional',
    description: 'Black ink illustrations',
    promptTemplate: 'ink drawing, {subject}, black and white, pen and ink, crosshatching, detailed line work, illustrative, high contrast',
    negativePrompt: 'colorful, painterly, soft, blurry',
    tags: ['ink', 'drawing', 'black-white', 'detailed'],
    difficulty: 'intermediate',
    popularity: 80
  },
  {
    id: 'cosmic',
    name: 'Cosmic Horror',
    category: 'Fantasy',
    description: 'Lovecraftian otherworldly terror',
    promptTemplate: 'cosmic horror, {subject}, Lovecraftian, eldritch beings, tentacles, ancient gods, incomprehensible geometry, dark cosmic scale, terrifying',
    negativePrompt: 'cute, cheerful, human, understandable',
    tags: ['cosmic', 'horror', 'lovecraft', 'dark'],
    difficulty: 'advanced',
    popularity: 85
  },
  {
    id: 'origami',
    name: 'Origami',
    category: 'Traditional',
    description: 'Folded paper art style',
    promptTemplate: 'origami art, {subject}, folded paper, geometric folds, clean edges, paper texture, minimalist, Japanese paper folding',
    negativePrompt: 'realistic, organic, detailed, complex',
    tags: ['origami', 'paper', 'geometric', 'japanese'],
    difficulty: 'beginner',
    popularity: 76
  },
  {
    id: 'neon-noir',
    name: 'Neon Noir',
    category: 'Modern',
    description: 'Dark detective with neon aesthetics',
    promptTemplate: 'neon noir, {subject}, dark detective story, neon signs, rain-slicked streets, shadows and light, mysterious, urban night',
    negativePrompt: 'bright, cheerful, rural, daytime',
    tags: ['noir', 'neon', 'dark', 'urban'],
    difficulty: 'intermediate',
    popularity: 90
  },
  {
    id: 'mandala',
    name: 'Mandala',
    category: 'Traditional',
    description: 'Sacred geometric patterns',
    promptTemplate: 'mandala design, {subject}, sacred geometry, symmetrical patterns, intricate details, spiritual, meditative, circular composition',
    negativePrompt: 'asymmetrical, random, simple, modern',
    tags: ['mandala', 'geometric', 'spiritual', 'symmetrical'],
    difficulty: 'intermediate',
    popularity: 84
  },
  {
    id: 'dieselpunk',
    name: 'Dieselpunk',
    category: 'Sci-Fi',
    description: 'Interwar era industrial aesthetic',
    promptTemplate: 'dieselpunk, {subject}, 1920s-40s technology, diesel engines, industrial machinery, art deco influence, gritty, wartime aesthetic',
    negativePrompt: 'clean, futuristic, magical, organic',
    tags: ['dieselpunk', 'industrial', 'vintage', 'mechanical'],
    difficulty: 'intermediate',
    popularity: 78
  },
  {
    id: 'dreamscape',
    name: 'Dreamscape',
    category: 'Fantasy',
    description: 'Ethereal dream-like landscapes',
    promptTemplate: 'dreamscape, {subject}, ethereal atmosphere, floating islands, soft lighting, surreal landscape, peaceful, otherworldly beauty',
    negativePrompt: 'harsh, realistic, urban, mundane',
    tags: ['dream', 'ethereal', 'fantasy', 'peaceful'],
    difficulty: 'intermediate',
    popularity: 89
  },
  {
    id: 'graffiti',
    name: 'Graffiti',
    category: 'Urban',
    description: 'Street art and spray paint',
    promptTemplate: 'graffiti art, {subject}, street art, spray paint, urban style, bold colors, tags and wildstyle, wall mural, hip hop culture',
    negativePrompt: 'classical, refined, subtle, traditional',
    tags: ['graffiti', 'street', 'urban', 'bold'],
    difficulty: 'beginner',
    popularity: 87
  },
  {
    id: 'celtic',
    name: 'Celtic',
    category: 'Traditional',
    description: 'Ancient Celtic knotwork',
    promptTemplate: 'Celtic art, {subject}, intricate knotwork, interlacing patterns, ancient symbols, illuminated manuscript, ornate, historical',
    negativePrompt: 'modern, simple, geometric, minimal',
    tags: ['celtic', 'knotwork', 'ancient', 'ornate'],
    difficulty: 'advanced',
    popularity: 75
  },
  {
    id: 'space-opera',
    name: 'Space Opera',
    category: 'Sci-Fi',
    description: 'Epic space adventure aesthetics',
    promptTemplate: 'space opera, {subject}, epic space battle, starships, alien worlds, cosmic scale, dramatic lighting, science fiction adventure',
    negativePrompt: 'earthly, mundane, small scale, realistic',
    tags: ['space', 'epic', 'sci-fi', 'adventure'],
    difficulty: 'intermediate',
    popularity: 92
  },
  {
    id: 'chibi',
    name: 'Chibi',
    category: 'Digital',
    description: 'Cute super-deformed characters',
    promptTemplate: 'chibi style, {subject}, cute super-deformed, large head, small body, kawaii, adorable, simplified features, Japanese cute',
    negativePrompt: 'realistic, proportional, serious, detailed',
    tags: ['chibi', 'cute', 'kawaii', 'anime'],
    difficulty: 'beginner',
    popularity: 91
  },
  {
    id: 'baroque',
    name: 'Baroque',
    category: 'Classical',
    description: 'Dramatic ornate 17th century art',
    promptTemplate: 'baroque painting, {subject}, dramatic lighting, ornate details, rich colors, emotional intensity, Caravaggio style, theatrical',
    negativePrompt: 'minimal, modern, simple, flat',
    tags: ['baroque', 'classical', 'dramatic', 'ornate'],
    difficulty: 'advanced',
    popularity: 74
  },
  {
    id: 'glitch-art',
    name: 'Glitch Art',
    category: 'Digital',
    description: 'Digital error aesthetics',
    promptTemplate: 'glitch art, {subject}, digital errors, data corruption, RGB split, pixel sorting, cybernetic distortion, technological decay',
    negativePrompt: 'clean, perfect, traditional, smooth',
    tags: ['glitch', 'digital', 'error', 'cyber'],
    difficulty: 'intermediate',
    popularity: 86
  },
  {
    id: 'fairy-tale',
    name: 'Fairy Tale',
    category: 'Fantasy',
    description: 'Whimsical storybook illustrations',
    promptTemplate: 'fairy tale illustration, {subject}, whimsical, storybook style, magical forest, enchanted, children\'s book, Arthur Rackham style',
    negativePrompt: 'dark, realistic, modern, photographic',
    tags: ['fairy-tale', 'whimsical', 'magical', 'storybook'],
    difficulty: 'beginner',
    popularity: 88
  },
  {
    id: 'afrofuturism',
    name: 'Afrofuturism',
    category: 'Sci-Fi',
    description: 'African diaspora meets technology',
    promptTemplate: 'afrofuturism, {subject}, African culture meets technology, vibrant patterns, cosmic imagery, diaspora aesthetics, futuristic ancestral',
    negativePrompt: 'western, colonial, mundane, historical',
    tags: ['afrofuturism', 'african', 'futuristic', 'cultural'],
    difficulty: 'intermediate',
    popularity: 83
  },
  {
    id: 'noir',
    name: 'Film Noir',
    category: 'Cinematic',
    description: 'Black and white crime drama',
    promptTemplate: 'film noir, {subject}, black and white, dramatic shadows, femme fatale, 1940s detective, high contrast, moody atmosphere',
    negativePrompt: 'colorful, bright, cheerful, modern',
    tags: ['noir', 'black-white', 'detective', 'moody'],
    difficulty: 'intermediate',
    popularity: 81
  },
  {
    id: 'claymation',
    name: 'Claymation',
    category: 'Digital',
    description: 'Stop-motion clay animation style',
    promptTemplate: 'claymation style, {subject}, stop motion, clay texture, handmade feel, Aardman animation, tactile, charming imperfections',
    negativePrompt: 'smooth, digital, perfect, realistic',
    tags: ['claymation', 'stop-motion', 'clay', 'handmade'],
    difficulty: 'beginner',
    popularity: 79
  },
  {
    id: 'bioluminescent',
    name: 'Bioluminescent',
    category: 'Fantasy',
    description: 'Glowing organic life forms',
    promptTemplate: 'bioluminescent art, {subject}, glowing organisms, neon blue and green, deep sea creatures, Avatar inspired, ethereal light, organic glow',
    negativePrompt: 'dark, non-glowing, terrestrial, dull',
    tags: ['bioluminescent', 'glowing', 'organic', 'ethereal'],
    difficulty: 'intermediate',
    popularity: 90
  },
  {
    id: 'western',
    name: 'Western',
    category: 'Cinematic',
    description: 'American frontier aesthetics',
    promptTemplate: 'western art, {subject}, American frontier, cowboys, desert landscape, saloon, sunset, rugged, classic western film',
    negativePrompt: 'modern, urban, futuristic, eastern',
    tags: ['western', 'cowboy', 'frontier', 'americana'],
    difficulty: 'beginner',
    popularity: 77
  },
  {
    id: 'holographic',
    name: 'Holographic',
    category: 'Digital',
    description: 'Iridescent rainbow effects',
    promptTemplate: 'holographic art, {subject}, iridescent colors, rainbow sheen, light refraction, futuristic, shiny, prism effects, pearlescent',
    negativePrompt: 'matte, dull, single color, flat',
    tags: ['holographic', 'iridescent', 'rainbow', 'futuristic'],
    difficulty: 'beginner',
    popularity: 89
  },
  {
    id: 'medieval',
    name: 'Medieval',
    category: 'Historical',
    description: 'Medieval manuscript illumination',
    promptTemplate: 'medieval manuscript, {subject}, illuminated letter, gold leaf, ornate borders, religious iconography, parchment texture, historical',
    negativePrompt: 'modern, digital, photographic, secular',
    tags: ['medieval', 'manuscript', 'historical', 'religious'],
    difficulty: 'advanced',
    popularity: 73
  },
  {
    id: 'crystal',
    name: 'Crystalline',
    category: 'Fantasy',
    description: 'Geometric crystal formations',
    promptTemplate: 'crystalline art, {subject}, geometric crystals, prismatic light, gem facets, refracted light, magical minerals, sparkling',
    negativePrompt: 'organic, soft, dull, opaque',
    tags: ['crystal', 'geometric', 'prismatic', 'magical'],
    difficulty: 'intermediate',
    popularity: 85
  },
  {
    id: 'retro-futurism',
    name: 'Retro-Futurism',
    category: 'Retro',
    description: 'Vintage visions of the future',
    promptTemplate: 'retro-futurism, {subject}, 1950s vision of future, flying cars, atomic age, space age design, vintage sci-fi, optimistic technology',
    negativePrompt: 'modern, realistic, pessimistic, dark',
    tags: ['retro', 'futurism', 'vintage', 'optimistic'],
    difficulty: 'beginner',
    popularity: 87
  },
  {
    id: 'dark-fantasy',
    name: 'Dark Fantasy',
    category: 'Fantasy',
    description: 'Gothic supernatural horror',
    promptTemplate: 'dark fantasy, {subject}, gothic horror, supernatural elements, dark atmosphere, ominous, Berserk style, grim, menacing',
    negativePrompt: 'bright, cheerful, safe, cute',
    tags: ['dark', 'fantasy', 'gothic', 'horror'],
    difficulty: 'advanced',
    popularity: 91
  },
  {
    id: 'pointillism',
    name: 'Pointillism',
    category: 'Classical',
    description: 'Dots of color forming images',
    promptTemplate: 'pointillism painting, {subject}, dots of color, Georges Seurat style, optical mixing, meticulous dots, impressionist technique',
    negativePrompt: 'smooth, blended, brushstrokes, digital',
    tags: ['pointillism', 'dots', 'classical', 'technique'],
    difficulty: 'advanced',
    popularity: 72
  },
  {
    id: 'neon-genesis',
    name: 'Neon Genesis',
    category: 'Anime',
    description: 'Mecha anime aesthetic',
    promptTemplate: 'neon genesis style, {subject}, mecha anime, Evangelion inspired, angular robots, religious symbolism, apocalyptic, 90s anime',
    negativePrompt: 'cute, simple, western, realistic',
    tags: ['mecha', 'anime', 'robots', 'apocalyptic'],
    difficulty: 'advanced',
    popularity: 88
  },
  {
    id: 'encaustic',
    name: 'Encaustic',
    category: 'Traditional',
    description: 'Hot wax painting technique',
    promptTemplate: 'encaustic painting, {subject}, hot wax technique, layered wax, embedded materials, ancient technique, textured surface, luminous',
    negativePrompt: 'flat, digital, smooth, modern',
    tags: ['encaustic', 'wax', 'ancient', 'textured'],
    difficulty: 'advanced',
    popularity: 68
  },
  {
    id: 'lo-fi',
    name: 'Lo-Fi',
    category: 'Digital',
    description: 'Chill nostalgic aesthetics',
    promptTemplate: 'lo-fi aesthetic, {subject}, nostalgic, grainy texture, muted colors, chill vibes, study beats, cozy atmosphere, anime inspired',
    negativePrompt: 'sharp, vibrant, modern, energetic',
    tags: ['lo-fi', 'nostalgic', 'chill', 'cozy'],
    difficulty: 'beginner',
    popularity: 94
  }
];

export const categories = [...new Set(artStyles.map(s => s.category))];
export const tags = [...new Set(artStyles.flatMap(s => s.tags))];

export function getStyleById(id) {
  return artStyles.find(s => s.id === id);
}

export function getStylesByCategory(category) {
  return artStyles.filter(s => s.category === category);
}

export function getStylesByTag(tag) {
  return artStyles.filter(s => s.tags.includes(tag));
}

export function getRandomStyle() {
  return artStyles[Math.floor(Math.random() * artStyles.length)];
}

export function searchStyles(query) {
  const q = query.toLowerCase();
  return artStyles.filter(s => 
    s.name.toLowerCase().includes(q) ||
    s.description.toLowerCase().includes(q) ||
    s.tags.some(t => t.includes(q))
  );
}
