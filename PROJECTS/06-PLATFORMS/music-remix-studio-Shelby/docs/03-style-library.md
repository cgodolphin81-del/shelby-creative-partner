# 🎨 Style Library Specification

## Overview

The Style Library contains 30+ genre/style models that define the sonic characteristics for AI-powered music transformation. Each style includes detailed musical parameters, instrumentation profiles, and production characteristics.

---

## 1. Style Categories

```typescript
enum GenreCategory {
  POP = 'pop',
  ROCK = 'rock',
  METAL = 'metal',
  ELECTRONIC = 'electronic',
  HIP_HOP = 'hiphop',
  RNB_SOUL = 'rnb-soul',
  JAZZ_BLUES = 'jazz-blues',
  COUNTRY_FOLK = 'country-folk',
  CLASSICAL = 'classical',
  LATIN = 'latin',
  REGGAE_DANCEHALL = 'reggae-dancehall',
  AMBIENT_NEW_AGE = 'ambient-new-age',
  WORLD = 'world',
  EXPERIMENTAL = 'experimental'
}
```

---

## 2. Complete Style Library (30+ Genres)

### 2.1 POP

#### Pop - Modern
```typescript
{
  id: 'pop-modern',
  name: 'Modern Pop',
  category: 'pop',
  description: 'Contemporary chart-topping pop with polished production',
  bpm: { min: 100, max: 130, typical: 120 },
  key: { preferred: ['C', 'G', 'D', 'A'], modes: ['major', 'minor'] },
  instrumentation: {
    primary: ['synths', 'vocal-lead', 'drums-programmed', 'bass-synth'],
    secondary: ['guitar-electric', 'piano', 'strings', 'fx'],
    optional: ['guitar-acoustic', 'brass', 'vocal-harmonies']
  },
  production: {
    loudness: -8,           // LUFS
    dynamicRange: 8,        // dB
    stereoWidth: 0.9,       // 0-1
    reverb: 0.5,
    compression: 0.8,
    saturation: 0.3
  },
  characteristics: {
    energy: 0.7,
    danceability: 0.8,
    valence: 0.7,
    acousticness: 0.2,
    instrumentalness: 0.1
  },
  referenceArtists: ['Dua Lipa', 'The Weeknd', 'Taylor Swift', 'Harry Styles']
}
```

#### Pop - Synth Pop
```typescript
{
  id: 'pop-synth',
  name: 'Synth Pop',
  category: 'pop',
  description: '80s-inspired synthesizer-driven pop',
  bpm: { min: 110, max: 130, typical: 120 },
  instrumentation: {
    primary: ['synth-bass', 'synth-lead', 'drum-machine', 'vocal'],
    secondary: ['synth-pad', 'arpeggiator', 'guitar-chorus'],
    signature: ['gated-reverb-drums', 'analog-synths']
  },
  production: {
    loudness: -9,
    dynamicRange: 10,
    reverb: 0.7,
    chorus: 0.6,
    delay: 0.4
  },
  referenceArtists: ['The Weeknd', 'CHVRCHES', 'M83', 'Gunship']
}
```

#### Pop - Indie Pop
```typescript
{
  id: 'pop-indie',
  name: 'Indie Pop',
  category: 'pop',
  description: 'Quirky, lo-fi influenced independent pop',
  bpm: { min: 90, max: 120, typical: 110 },
  instrumentation: {
    primary: ['guitar-electric', 'bass', 'drums', 'vocal'],
    secondary: ['keys', 'synth', 'percussion'],
    signature: ['lo-fi-texture', 'conversational-vocals']
  },
  production: {
    loudness: -11,
    dynamicRange: 12,
    acousticness: 0.4,
    lofi: 0.5
  },
  referenceArtists: ['Clairo', 'Rex Orange County', 'Boy Pablo', 'Cuco']
}
```

---

### 2.2 ROCK

#### Rock - Classic Rock
```typescript
{
  id: 'rock-classic',
  name: 'Classic Rock',
  category: 'rock',
  description: '70s-inspired guitar-driven rock',
  bpm: { min: 100, max: 140, typical: 120 },
  instrumentation: {
    primary: ['guitar-electric-distorted', 'bass', 'drums', 'vocal'],
    secondary: ['guitar-solo', 'organ', 'piano'],
    signature: ['power-chords', 'guitar-solos', 'drum-fills']
  },
  production: {
    loudness: -10,
    dynamicRange: 12,
    guitarTone: 'warm-overdrive',
    drumSound: 'roomy-natural'
  },
  referenceArtists: ['Led Zeppelin', 'AC/DC', 'Queen', 'The Rolling Stones']
}
```

#### Rock - Alternative Rock
```typescript
{
  id: 'rock-alternative',
  name: 'Alternative Rock',
  category: 'rock',
  description: '90s-2000s alternative and grunge-influenced rock',
  bpm: { min: 90, max: 140, typical: 120 },
  instrumentation: {
    primary: ['guitar-distorted', 'bass-prominent', 'drums', 'vocal'],
    secondary: ['guitar-clean', 'synth', 'noise'],
    signature: ['quiet-loud-dynamics', 'angst-vocals']
  },
  production: {
    loudness: -9,
    dynamicRange: 14,
    guitarTexture: 'grungy',
    vocalTreatment: 'raw'
  },
  referenceArtists: ['Nirvana', 'Radiohead', 'Foo Fighters', 'The Strokes']
}
```

#### Rock - Pop Punk
```typescript
{
  id: 'rock-pop-punk',
  name: 'Pop Punk',
  category: 'rock',
  description: 'High-energy punk-influenced pop rock',
  bpm: { min: 140, max: 180, typical: 160 },
  instrumentation: {
    primary: ['guitar-power-chords', 'bass', 'drums-fast', 'vocal'],
    secondary: ['guitar-lead', 'backing-vocals'],
    signature: ['palm-muting', 'gang-vocals', 'fast-tempo']
  },
  production: {
    loudness: -7,
    dynamicRange: 10,
    guitarTone: 'bright-punchy',
    vocalStyle: 'energetic'
  },
  referenceArtists: ['Blink-182', 'Green Day', 'Paramore', 'Sum 41']
}
```

---

### 2.3 METAL

#### Metal - Heavy Metal
```typescript
{
  id: 'metal-heavy',
  name: 'Heavy Metal',
  category: 'metal',
  description: 'Classic heavy metal with powerful riffs and solos',
  bpm: { min: 120, max: 180, typical: 150 },
  key: { preferred: ['E', 'A', 'D', 'Em', 'Am'], modes: ['minor', 'phrygian'] },
  instrumentation: {
    primary: ['guitar-heavily-distorted', 'bass', 'drums', 'vocal-powerful'],
    secondary: ['guitar-solo', 'double-bass'],
    signature: ['power-chords', 'guitar-harmonies', 'shredding']
  },
  production: {
    loudness: -6,
    dynamicRange: 10,
    guitarTone: 'high-gain',
    drumSound: 'punchy',
    vocalTreatment: 'reverb-delay'
  },
  characteristics: {
    energy: 0.9,
    aggression: 0.8,
    instrumentalness: 0.3
  },
  referenceArtists: ['Iron Maiden', 'Judas Priest', 'Black Sabbath', 'Metallica']
}
```

#### Metal - Metalcore
```typescript
{
  id: 'metal-metalcore',
  name: 'Metalcore',
  category: 'metal',
  description: 'Metallic hardcore with breakdowns and screams',
  bpm: { min: 140, max: 220, typical: 180 },
  instrumentation: {
    primary: ['guitar-djent', 'bass', 'drums', 'vocal-scream'],
    secondary: ['guitar-clean', 'vocal-clean', 'synth'],
    signature: ['breakdowns', 'squealies', 'blast-beats']
  },
  production: {
    loudness: -5,
    dynamicRange: 8,
    guitarTuning: 'drop-c',
    drumTriggering: true
  },
  referenceArtists: ['As I Lay Dying', 'Killswitch Engage', 'Architects', 'Parkway Drive']
}
```

#### Metal - Progressive Metal
```typescript
{
  id: 'metal-progressive',
  name: 'Progressive Metal',
  category: 'metal',
  description: 'Complex, technical metal with odd time signatures',
  bpm: { min: 80, max: 200, typical: 140 },
  instrumentation: {
    primary: ['guitar-technical', 'bass-prominent', 'drums-technical', 'vocal'],
    secondary: ['keys', 'synth', 'orchestral'],
    signature: ['odd-meters', 'polyrhythms', 'extended-solos']
  },
  production: {
    loudness: -8,
    dynamicRange: 14,
    clarity: 'high',
    separation: 'excellent'
  },
  referenceArtists: ['Dream Theater', 'Tool', 'Opeth', 'Meshuggah']
}
```

---

### 2.4 ELECTRONIC

#### Electronic - EDM
```typescript
{
  id: 'electronic-edm',
  name: 'EDM',
  category: 'electronic',
  description: 'High-energy electronic dance music with drops',
  bpm: { min: 126, max: 132, typical: 128 },
  instrumentation: {
    primary: ['synth-lead', 'kick-4-on-floor', 'bass-808', 'fx'],
    secondary: ['synth-pluck', 'vocal-chops', 'riser', 'white-noise'],
    signature: ['build-ups', 'drops', 'breakdowns']
  },
  structure: {
    intro: 16,
    build: 16,
    drop: 32,
    break: 16,
    build2: 16,
    drop2: 32,
    outro: 16
  },
  production: {
    loudness: -5,
    dynamicRange: 6,
    sidechain: 0.8,
    stereoWidth: 1.0
  },
  referenceArtists: ['Martin Garrix', 'Calvin Harris', 'David Guetta', 'Skrillex']
}
```

#### Electronic - House
```typescript
{
  id: 'electronic-house',
  name: 'House',
  category: 'electronic',
  description: 'Four-on-the-floor house music with soulful elements',
  bpm: { min: 118, max: 130, typical: 124 },
  instrumentation: {
    primary: ['kick-4-on-floor', 'hihat', 'clap', 'bass-house'],
    secondary: ['piano-house', 'organ', 'vocal-soulful', 'strings'],
    signature: ['groovy-bassline', 'soulful-vocals']
  },
  production: {
    loudness: -7,
    dynamicRange: 8,
    groove: 0.8,
    warmth: 0.6
  },
  referenceArtists: ['Daft Punk', 'Disclosure', 'Duke Dumont', 'Fisher']
}
```

#### Electronic - Techno
```typescript
{
  id: 'electronic-techno',
  name: 'Techno',
  category: 'electronic',
  description: 'Hypnotic, repetitive techno for underground clubs',
  bpm: { min: 125, max: 140, typical: 132 },
  instrumentation: {
    primary: ['kick-hard', 'hihat-roll', 'percussion', 'bass-sub'],
    secondary: ['synth-minimal', 'acid-303', 'industrial-fx'],
    signature: ['repetitive-groove', 'hypnotic', 'dark']
  },
  production: {
    loudness: -6,
    dynamicRange: 8,
    minimalism: 0.7,
    darkness: 0.6
  },
  referenceArtists: ['Charlotte de Witte', 'Adam Beyer', 'Amelie Lens', 'Richie Hawtin']
}
```

#### Electronic - Drum & Bass
```typescript
{
  id: 'electronic-dnb',
  name: 'Drum & Bass',
  category: 'electronic',
  description: 'Fast breakbeats with heavy bass',
  bpm: { min: 160, max: 180, typical: 174 },
  instrumentation: {
    primary: ['breakbeat', 'bass-reese', 'sub-bass', 'atmosphere'],
    secondary: ['vocal-samples', 'fx', 'piano'],
    signature: ['amen-break', 'reese-bass', 'fast-tempo']
  },
  production: {
    loudness: -6,
    dynamicRange: 8,
    bassWeight: 0.9,
    breakbeatComplexity: 0.8
  },
  referenceArtists: ['Netsky', 'Hospital Records', 'Andy C', 'Pendulum']
}
```

#### Electronic - Trance
```typescript
{
  id: 'electronic-trance',
  name: 'Trance',
  category: 'electronic',
  description: 'Uplifting trance with melodic leads and breakdowns',
  bpm: { min: 128, max: 140, typical: 138 },
  instrumentation: {
    primary: ['synth-lead', 'kick-4-on-floor', 'bass-driving', 'pad'],
    secondary: ['arp', 'vocal-ethereal', 'strings', 'piano'],
    signature: ['euphoric-melodies', 'long-breakdowns', 'build-ups']
  },
  production: {
    loudness: -6,
    dynamicRange: 10,
    euphoria: 0.8,
    reverb: 0.7
  },
  referenceArtists: ['Armin van Buuren', 'Tiësto', 'Above & Beyond', 'Ferry Corsten']
}
```

#### Electronic - Dubstep
```typescript
{
  id: 'electronic-dubstep',
  name: 'Dubstep',
  category: 'electronic',
  description: 'Heavy bass music with wobbles and drops',
  bpm: { min: 138, max: 142, typical: 140 },
  instrumentation: {
    primary: ['kick-snap', 'bass-wobble', 'sub-bass', 'fx'],
    secondary: ['vocal-chops', 'synth-grime', 'percussion'],
    signature: ['half-time', 'bass-drops', 'wobble-bass']
  },
  production: {
    loudness: -5,
    dynamicRange: 7,
    bassDistortion: 0.8,
    subWeight: 0.9
  },
  referenceArtists: ['Skrillex', 'Excision', 'Virtual Riot', 'Zeds Dead']
}
```

---

### 2.5 HIP HOP / RAP

#### Hip Hop - Trap
```typescript
{
  id: 'hiphop-trap',
  name: 'Trap',
  category: 'hiphop',
  description: 'Modern trap with 808s and hi-hat rolls',
  bpm: { min: 130, max: 170, typical: 140 },
  instrumentation: {
    primary: ['808-kick', '808-bass', 'hihat-rolls', 'snare'],
    secondary: ['synth-dark', 'vocal-rap', 'fx', 'bells'],
    signature: ['triplet-hihats', '808-slides', 'dark-mood']
  },
  production: {
    loudness: -6,
    dynamicRange: 8,
    bassBoost: 0.8,
    atmosphere: 'dark'
  },
  referenceArtists: ['Migos', 'Future', 'Travis Scott', 'Young Thug']
}
```

#### Hip Hop - Boom Bap
```typescript
{
  id: 'hiphop-boom-bap',
  name: 'Boom Bap',
  category: 'hiphop',
  description: 'Classic 90s hip hop with sampled beats',
  bpm: { min: 85, max: 100, typical: 92 },
  instrumentation: {
    primary: ['kick-punchy', 'snare-crisp', 'bass-sampled', 'vocal-rap'],
    secondary: ['sample-chops', 'scratch', 'piano', 'strings'],
    signature: ['sampled-drums', 'vinyl-crackle', 'jazz-samples']
  },
  production: {
    loudness: -10,
    dynamicRange: 12,
    vinylEmulation: 0.6,
    sampleTexture: 'warm'
  },
  referenceArtists: ['Nas', 'Wu-Tang Clan', 'A Tribe Called Quest', 'Gang Starr']
}
```

#### Hip Hop - Drill
```typescript
{
  id: 'hiphop-drill',
  name: 'Drill',
  category: 'hiphop',
  description: 'UK/NY drill with sliding 808s and dark melodies',
  bpm: { min: 140, max: 150, typical: 144 },
  instrumentation: {
    primary: ['808-slide', 'kick', 'hihat', 'snare'],
    secondary: ['melody-dark', 'bass-sub', 'vocal-rap'],
    signature: ['sliding-808', 'minor-melodies', 'aggressive']
  },
  production: {
    loudness: -5,
    dynamicRange: 7,
    darkness: 0.9,
    aggression: 0.8
  },
  referenceArtists: ['Pop Smoke', 'Central Cee', 'Fivio Foreign', 'King Von']
}
```

---

### 2.6 R&B / SOUL

#### R&B - Contemporary R&B
```typescript
{
  id: 'rnb-contemporary',
  name: 'Contemporary R&B',
  category: 'rnb-soul',
  description: 'Modern R&B with smooth vocals and trap-influenced beats',
  bpm: { min: 90, max: 120, typical: 105 },
  instrumentation: {
    primary: ['vocal-smooth', '808', 'keys', 'drums-trap'],
    secondary: ['guitar-clean', 'synth-pad', 'vocal-harmonies'],
    signature: ['smooth-vocals', 'emotional', 'atmospheric']
  },
  production: {
    loudness: -8,
    dynamicRange: 10,
    vocalProminence: 0.9,
    atmosphere: 'smooth'
  },
  referenceArtists: ['The Weeknd', 'SZA', 'Daniel Caesar', 'H.E.R.']
}
```

#### R&B - Neo Soul
```typescript
{
  id: 'rnb-neo-soul',
  name: 'Neo Soul',
  category: 'rnb-soul',
  description: 'Soulful, jazhy R&B with live instrumentation',
  bpm: { min: 70, max: 95, typical: 85 },
  instrumentation: {
    primary: ['vocal-soulful', 'keys-rhodes', 'bass-live', 'drums-live'],
    secondary: ['guitar-clean', 'horns', 'strings', 'percussion'],
    signature: ['live-feel', 'jazzy-chords', 'organic']
  },
  production: {
    loudness: -12,
    dynamicRange: 14,
    acousticness: 0.7,
    warmth: 0.8
  },
  referenceArtists: ['Erykah Badu', 'D\'Angelo', 'Maxwell', 'Lauryn Hill']
}
```

---

### 2.7 JAZZ / BLUES

#### Jazz - Smooth Jazz
```typescript
{
  id: 'jazz-smooth',
  name: 'Smooth Jazz',
  category: 'jazz-blues',
  description: 'Polished, radio-friendly jazz fusion',
  bpm: { min: 80, max: 110, typical: 95 },
  instrumentation: {
    primary: ['sax-smooth', 'keys', 'bass-fretless', 'drums-soft'],
    secondary: ['guitar-clean', 'synth-pad', 'percussion'],
    signature: ['melodic-sax', 'polished', 'relaxing']
  },
  production: {
    loudness: -10,
    dynamicRange: 12,
    polish: 0.8,
    smoothness: 0.9
  },
  referenceArtists: ['Kenny G', 'Dave Koz', 'Boney James', 'Fourplay']
}
```

#### Jazz - Bebop
```typescript
{
  id: 'jazz-bebop',
  name: 'Bebop',
  category: 'jazz-blues',
  description: 'Fast, complex traditional jazz with improvisation',
  bpm: { min: 150, max: 220, typical: 180 },
  instrumentation: {
    primary: ['sax-alto', 'trumpet', 'piano', 'bass-upright', 'drums'],
    secondary: ['trombone', 'guitar'],
    signature: ['fast-tempo', 'complex-harmony', 'improvisation']
  },
  production: {
    loudness: -14,
    dynamicRange: 16,
    acousticness: 0.95,
    liveFeel: 0.8
  },
  referenceArtists: ['Charlie Parker', 'Dizzy Gillespie', 'Thelonious Monk', 'Bud Powell']
}
```

#### Blues - Electric Blues
```typescript
{
  id: 'blues-electric',
  name: 'Electric Blues',
  category: 'jazz-blues',
  description: 'Guitar-driven blues with soulful vocals',
  bpm: { min: 60, max: 100, typical: 80 },
  instrumentation: {
    primary: ['guitar-blues', 'vocal-soulful', 'bass', 'drums', 'harmonica'],
    secondary: ['keys', 'organ'],
    signature: ['12-bar-blues', 'guitar-solos', 'emotional']
  },
  production: {
    loudness: -11,
    dynamicRange: 14,
    guitarTone: 'tube-warm',
    roomSound: 'live'
  },
  referenceArtists: ['B.B. King', 'Stevie Ray Vaughan', 'Eric Clapton', 'Buddy Guy']
}
```

---

### 2.8 COUNTRY / FOLK

#### Country - Modern Country
```typescript
{
  id: 'country-modern',
  name: 'Modern Country',
  category: 'country-folk',
  description: 'Contemporary country with pop production',
  bpm: { min: 90, max: 130, typical: 110 },
  instrumentation: {
    primary: ['vocal', 'guitar-acoustic', 'guitar-electric', 'drums', 'bass'],
    secondary: ['banjo', 'fiddle', 'mandolin', 'keys'],
    signature: ['storytelling', 'twang', 'anthemic']
  },
  production: {
    loudness: -7,
    dynamicRange: 10,
    polish: 0.7,
    twang: 0.5
  },
  referenceArtists: ['Luke Combs', 'Morgan Wallen', 'Carrie Underwood', 'Kane Brown']
}
```

#### Folk - Indie Folk
```typescript
{
  id: 'folk-indie',
  name: 'Indie Folk',
  category: 'country-folk',
  description: 'Intimate, acoustic-driven folk music',
  bpm: { min: 70, max: 100, typical: 85 },
  instrumentation: {
    primary: ['vocal-intimate', 'guitar-acoustic', 'strings'],
    secondary: ['banjo', 'mandolin', 'light-percussion', 'keys'],
    signature: ['storytelling', 'organic', 'intimate']
  },
  production: {
    loudness: -13,
    dynamicRange: 14,
    acousticness: 0.9,
    intimacy: 0.8
  },
  referenceArtists: ['Bon Iver', 'Fleet Foxes', 'The Lumineers', 'Iron & Wine']
}
```

---

### 2.9 CLASSICAL

#### Classical - Orchestral
```typescript
{
  id: 'classical-orchestral',
  name: 'Orchestral',
  category: 'classical',
  description: 'Full orchestral arrangements',
  bpm: { min: 60, max: 160, typical: 100 },
  instrumentation: {
    primary: ['strings', 'brass', 'woodwinds', 'percussion'],
    secondary: ['harp', 'piano', 'choir'],
    signature: ['dynamic', 'cinematic', 'expressive']
  },
  production: {
    loudness: -16,
    dynamicRange: 20,
    acousticness: 1.0,
    hallReverb: 0.7
  },
  referenceArtists: ['Hans Zimmer', 'John Williams', 'Ludovico Einaudi', 'Max Richter']
}
```

#### Classical - Piano Solo
```typescript
{
  id: 'classical-piano',
  name: 'Piano Solo',
  category: 'classical',
  description: 'Solo piano compositions',
  bpm: { min: 50, max: 140, typical: 80 },
  instrumentation: {
    primary: ['piano'],
    signature: ['expressive', 'intimate', 'melodic']
  },
  production: {
    loudness: -18,
    dynamicRange: 22,
    acousticness: 1.0,
    pianoTone: 'warm'
  },
  referenceArtists: ['Frédéric Chopin', 'Ludovico Einaudi', 'Yiruma', 'Max Richter']
}
```

---

### 2.10 LATIN

#### Latin - Reggaeton
```typescript
{
  id: 'latin-reggaeton',
  name: 'Reggaeton',
  category: 'latin',
  description: 'Puerto Rican urban music with dembow rhythm',
  bpm: { min: 90, max: 100, typical: 95 },
  instrumentation: {
    primary: ['dembow-drum', '808-bass', 'synth', 'vocal'],
    secondary: ['percu', 'fx', 'vocal-adlibs'],
    signature: ['dembow-rhythm', 'urban', 'danceable']
  },
  production: {
    loudness: -5,
    dynamicRange: 7,
    bassWeight: 0.8,
    rhythm: 'dembow'
  },
  referenceArtists: ['Bad Bunny', 'Daddy Yankee', 'J Balvin', 'Karol G']
}
```

#### Latin - Salsa
```typescript
{
  id: 'latin-salsa',
  name: 'Salsa',
  category: 'latin',
  description: 'Traditional Afro-Cuban salsa',
  bpm: { min: 160, max: 220, typical: 190 },
  instrumentation: {
    primary: ['congas', 'timbales', 'bass', 'piano', 'horns', 'vocal'],
    secondary: ['bongos', 'guira', 'tres', 'strings'],
    signature: ['clave-rhythm', 'montuno', 'horn-sections']
  },
  production: {
    loudness: -9,
    dynamicRange: 12,
    percussionProminence: 0.9,
    liveFeel: 0.8
  },
  referenceArtists: ['Celia Cruz', 'Héctor Lavoe', 'Marc Anthony', 'Gilberto Santa Rosa']
}
```

#### Latin - Latin Pop
```typescript
{
  id: 'latin-pop',
  name: 'Latin Pop',
  category: 'latin',
  description: 'Pop music with Latin influences',
  bpm: { min: 100, max: 130, typical: 115 },
  instrumentation: {
    primary: ['vocal', 'guitar-acoustic', 'drums', 'bass', 'synth'],
    secondary: ['percu-latin', 'strings', 'brass'],
    signature: ['romantic', 'melodic', 'rhythmic']
  },
  production: {
    loudness: -7,
    dynamicRange: 9,
    polish: 0.8,
    warmth: 0.6
  },
  referenceArtists: ['Shakira', 'Enrique Iglesias', 'Ricky Martin', 'Juanes']
}
```

---

### 2.11 REGGAE / DANCEHALL

#### Reggae - Roots Reggae
```typescript
{
  id: 'reggae-roots',
  name: 'Roots Reggae',
  category: 'reggae-dancehall',
  description: 'Traditional Jamaican reggae',
  bpm: { min: 70, max: 90, typical: 80 },
  instrumentation: {
    primary: ['drums-one-drop', 'bass-prominent', 'guitar-skank', 'keys', 'vocal'],
    secondary: ['horns', 'percussion', 'backing-vocals'],
    signature: ['one-drop', 'offbeat-guitar', 'conscious-lyrics']
  },
  production: {
    loudness: -12,
    dynamicRange: 14,
    bassWeight: 0.8,
    reverb: 0.5
  },
  referenceArtists: ['Bob Marley', 'Peter Tosh', 'Bunny Wailer', 'Burning Spear']
}
```

#### Dancehall
```typescript
{
  id: 'dancehall',
  name: 'Dancehall',
  category: 'reggae-dancehall',
  description: 'Modern Jamaican dancehall',
  bpm: { min: 100, max: 115, typical: 105 },
  instrumentation: {
    primary: ['drums-digital', 'bass-808', 'synth', 'vocal-toasting'],
    secondary: ['fx', 'airhorn', 'siren'],
    signature: ['riddim', 'toasting', 'digital-production']
  },
  production: {
    loudness: -6,
    dynamicRange: 8,
    bassWeight: 0.9,
    digital: 0.8
  },
  referenceArtists: ['Sean Paul', 'Shabba Ranks', 'Vybz Kartel', 'Popcaan']
}
```

---

### 2.12 AMBIENT / NEW AGE

#### Ambient - Atmospheric
```typescript
{
  id: 'ambient-atmospheric',
  name: 'Atmospheric Ambient',
  category: 'ambient-new-age',
  description: 'Ethereal, spacious ambient soundscapes',
  bpm: { min: 0, max: 60, typical: 0 },  // Free time
  instrumentation: {
    primary: ['synth-pad', 'drone', 'texture'],
    secondary: ['piano', 'strings', 'field-recordings'],
    signature: ['ethereal', 'spacious', 'meditative']
  },
  production: {
    loudness: -20,
    dynamicRange: 18,
    reverb: 0.9,
    space: 0.95
  },
  referenceArtists: ['Brian Eno', 'Aphex Twin (ambient)', 'Stars of the Lid', 'William Basinski']
}
```

#### New Age - Meditation
```typescript
{
  id: 'newage-meditation',
  name: 'Meditation',
  category: 'ambient-new-age',
  description: 'Calming music for relaxation and meditation',
  bpm: { min: 40, max: 60, typical: 50 },
  instrumentation: {
    primary: ['singing-bowls', 'flute', 'soft-synth', 'nature-sounds'],
    secondary: ['piano', 'strings', 'bells'],
    signature: ['calming', 'healing', 'peaceful']
  },
  production: {
    loudness: -22,
    dynamicRange: 16,
    softness: 0.9,
    natureBlend: 0.5
  },
  referenceArtists: ['Deva Premal', 'Liquid Mind', 'Karunesh', 'Anugama']
}
```

---

### 2.13 WORLD

#### World - Afrobeat
```typescript
{
  id: 'world-afrobeat',
  name: 'Afrobeat',
  category: 'world',
  description: 'West African Afrobeat and Afropop',
  bpm: { min: 100, max: 130, typical: 115 },
  instrumentation: {
    primary: ['drums-afro', 'bass', 'guitar', 'keys', 'vocal', 'percu'],
    secondary: ['horns', 'talking-drum', 'shekere'],
    signature: ['polyrhythmic', 'groovy', 'uplifting']
  },
  production: {
    loudness: -7,
    dynamicRange: 10,
    percussionProminence: 0.8,
    warmth: 0.7
  },
  referenceArtists: ['Fela Kuti', 'Burna Boy', 'Wizkid', 'Davido']
}
```

#### World - K-Pop
```typescript
{
  id: 'world-kpop',
  name: 'K-Pop',
  category: 'world',
  description: 'Korean pop with high production value',
  bpm: { min: 100, max: 140, typical: 125 },
  instrumentation: {
    primary: ['synth', 'drums-programmed', 'bass', 'vocal-group'],
    secondary: ['rap', 'dance-break', 'fx', 'strings'],
    signature: ['catchy-hooks', 'dance-breaks', 'polished']
  },
  production: {
    loudness: -5,
    dynamicRange: 8,
    polish: 0.95,
    energy: 0.9
  },
  referenceArtists: ['BTS', 'BLACKPINK', 'TWICE', 'Stray Kids']
}
```

---

### 2.14 EXPERIMENTAL

#### Experimental - Glitch
```typescript
{
  id: 'experimental-glitch',
  name: 'Glitch',
  category: 'experimental',
  description: 'Digital errors as musical elements',
  bpm: { min: 80, max: 160, typical: 120 },
  instrumentation: {
    primary: ['glitches', 'clicks', 'cuts', 'digital-fx'],
    secondary: ['ambient', 'beats', 'noise'],
    signature: ['stutter', 'digital-artifacts', 'unpredictable']
  },
  production: {
    loudness: -12,
    dynamicRange: 16,
    chaos: 0.7,
    digital: 1.0
  },
  referenceArtists: ['Autechre', 'Aphex Twin', 'Squarepusher', 'Alva Noto']
}
```

#### Experimental - Lo-Fi Hip Hop
```typescript
{
  id: 'experimental-lofi',
  name: 'Lo-Fi Hip Hop',
  category: 'experimental',
  description: 'Chill, nostalgic beats for studying/relaxing',
  bpm: { min: 70, max: 90, typical: 80 },
  instrumentation: {
    primary: ['drums-lofi', 'bass', 'keys-jazzy', 'samples'],
    secondary: ['vinyl-crackle', 'tape-saturation', 'ambient'],
    signature: ['nostalgic', 'chill', 'imperfect']
  },
  production: {
    loudness: -14,
    dynamicRange: 12,
    vinylEmulation: 0.8,
    warmth: 0.9
  },
  referenceArtists: ['J Dilla', 'Nujabes', 'Chillhop Music', 'Lofi Girl']
}
```

---

## 3. Style Transfer Parameters

### 3.1 Intensity Control

```typescript
interface StyleTransferIntensity {
  // 0.0 = no change, 1.0 = full transformation
  overall: number;
  
  // Per-aspect control
  timbre: number;      // Tonal characteristics
  rhythm: number;      // Groove and timing
  harmony: number;     // Chord progressions
  instrumentation: number;  // Instrument selection
  production: number;  // Mixing/mastering style
}
```

### 3.2 Style Blending

```typescript
interface StyleBlend {
  styles: Array<{
    styleId: string;
    weight: number;   // 0-1, all weights sum to 1
  }>;
  
  // Example: 70% EDM + 30% Classical
  blend: [
    { styleId: 'electronic-edm', weight: 0.7 },
    { styleId: 'classical-orchestral', weight: 0.3 }
  ]
}
```

---

## 4. Style API

### 4.1 List All Styles

```typescript
GET /api/v1/styles

Response:
{
  "styles": [
    {
      "id": "pop-modern",
      "name": "Modern Pop",
      "category": "pop",
      "description": "Contemporary chart-topping pop...",
      "bpm": { "min": 100, "max": 130, "typical": 120 },
      "preview": "https://cdn.../pop-modern-preview.mp3",
      "popularity": 0.95
    },
    // ... all 30+ styles
  ],
  "categories": ["pop", "rock", "metal", ...],
  "total": 32
}
```

### 4.2 Get Style Details

```typescript
GET /api/v1/styles/:styleId

Response:
{
  "id": "metal-heavy",
  "name": "Heavy Metal",
  "category": "metal",
  "description": "...",
  "bpm": { ... },
  "key": { ... },
  "instrumentation": { ... },
  "production": { ... },
  "characteristics": { ... },
  "referenceArtists": [...],
  "audioExamples": [
    { "name": "Example 1", "url": "https://cdn.../example1.mp3" },
    { "name": "Example 2", "url": "https://cdn.../example2.mp3" }
  ],
  "compatibleWith": ["rock-classic", "rock-alternative"],
  "incompatibleWith": ["ambient-atmospheric", "classical-piano"]
}
```

### 4.3 Search Styles

```typescript
GET /api/v1/styles/search?q=energetic&category=electronic

Response:
{
  "results": [...],
  "filters": {
    "bpm": { "min": 120, "max": 180 },
    "energy": { "min": 0.7, "max": 1.0 },
    "categories": ["electronic", "metal"]
  }
}
```

---

## 5. Style Recommendations

### 5.1 Based on Input Analysis

```typescript
interface StyleRecommendation {
  inputFeatures: AudioFeatures;
  recommendations: Array<{
    styleId: string;
    matchScore: number;    // 0-1
    reasoning: string;
    transformation: {
      tempoChange: number;
      keyChange?: string;
      intensityNeeded: number;
    };
  }>;
}

function recommendStyles(features: AudioFeatures): StyleRecommendation {
  // Match based on:
  // - Tempo compatibility
  // - Key/mode compatibility
  // - Energy level
  // - Instrumentation similarity
  // - User preferences/history
  
  return {
    inputFeatures: features,
    recommendations: [
      {
        styleId: 'rock-alternative',
        matchScore: 0.87,
        reasoning: 'Similar energy level and tempo range',
        transformation: {
          tempoChange: 10,
          intensityNeeded: 0.6
        }
      }
    ]
  };
}
```

---

## 6. Style Model Training

### 6.1 Training Data Requirements

```typescript
interface TrainingDataset {
  styleId: string;
  tracks: {
    count: number;        // Minimum 1000 tracks
    duration: number;     // Total hours
    sources: string[];    // Licensed sources
    quality: 'studio' | 'live' | 'mixed';
  };
  annotations: {
    structure: boolean;   // Section labels
    stems: boolean;       // Separated stems available
    metadata: boolean;    // BPM, key, etc.
  };
}
```

### 6.2 Model Updates

```typescript
interface ModelVersion {
  styleId: string;
  version: string;        // SemVer
  releaseDate: Date;
  changes: string[];
  performance: {
    qualityImprovement: number;  // % vs previous
    speedImprovement: number;    // % faster
  };
  downloadUrl: string;
}
```

---

*Version: 1.0.0*
*Last Updated: March 2026*
