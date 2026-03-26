/* ============================================
   Your Life as a Movie Trailer - Backend Server
   Node.js + Express
   ============================================ */

const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Create necessary directories
const dirs = ['uploads', 'outputs', 'temp'];
dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
});

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        const uniqueName = `${uuidv4()}${path.extname(file.originalname)}`;
        cb(null, uniqueName);
    }
});

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 10 * 1024 * 1024 // 10MB max
    },
    fileFilter: (req, file, cb) => {
        const allowedTypes = /jpeg|jpg|png|gif|webp|heic/;
        const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = allowedTypes.test(file.mimetype);
        
        if (extname && mimetype) {
            cb(null, true);
        } else {
            cb(new Error('Only image files are allowed'));
        }
    }
});

// In-memory storage for trailers (use database in production)
const trailers = new Map();

// ============================================
// API Routes
// ============================================

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Upload photos
app.post('/api/upload', upload.array('photos', 10), (req, res) => {
    try {
        if (!req.files || req.files.length === 0) {
            return res.status(400).json({ error: 'No files uploaded' });
        }
        
        const uploadedFiles = req.files.map(file => ({
            id: uuidv4(),
            filename: file.filename,
            originalName: file.originalname,
            path: file.path,
            size: file.size,
            mimetype: file.mimetype
        }));
        
        res.json({
            success: true,
            files: uploadedFiles,
            count: uploadedFiles.length
        });
    } catch (error) {
        console.error('Upload error:', error);
        res.status(500).json({ error: 'Upload failed', message: error.message });
    }
});

// Generate trailer
app.post('/api/generate', async (req, res) => {
    try {
        const { photoIds, style, tier = 'free' } = req.body;
        
        if (!photoIds || !style) {
            return res.status(400).json({ error: 'Missing required fields' });
        }
        
        // Create trailer record
        const trailerId = uuidv4();
        const trailer = {
            id: trailerId,
            photoIds,
            style,
            tier,
            status: 'processing',
            progress: 0,
            createdAt: new Date(),
            steps: [
                { name: 'Analyzing photos', status: 'pending' },
                { name: 'Generating voiceover', status: 'pending' },
                { name: 'Selecting music', status: 'pending' },
                { name: 'Assembling video', status: 'pending' },
                { name: 'Finalizing', status: 'pending' }
            ]
        };
        
        trailers.set(trailerId, trailer);
        
        // Start async generation (in production, use a job queue)
        processTrailer(trailerId).catch(err => {
            console.error('Generation error:', err);
            trailer.status = 'failed';
            trailer.error = err.message;
        });
        
        res.json({
            success: true,
            trailerId,
            status: 'processing',
            message: 'Trailer generation started'
        });
    } catch (error) {
        console.error('Generate error:', error);
        res.status(500).json({ error: 'Generation failed', message: error.message });
    }
});

// Get trailer status
app.get('/api/trailer/:id', (req, res) => {
    const trailer = trailers.get(req.params.id);
    
    if (!trailer) {
        return res.status(404).json({ error: 'Trailer not found' });
    }
    
    res.json({
        success: true,
        trailer: {
            id: trailer.id,
            status: trailer.status,
            progress: trailer.progress,
            steps: trailer.steps,
            downloadUrl: trailer.downloadUrl,
            error: trailer.error
        }
    });
});

// Download trailer
app.get('/api/trailer/:id/download', (req, res) => {
    const trailer = trailers.get(req.params.id);
    
    if (!trailer) {
        return res.status(404).json({ error: 'Trailer not found' });
    }
    
    if (trailer.status !== 'completed') {
        return res.status(400).json({ error: 'Trailer not ready' });
    }
    
    res.download(trailer.outputPath);
});

// Create payment session (Stripe integration stub)
app.post('/api/payment/create', (req, res) => {
    const { trailerId, tier } = req.body;
    
    // In production, create Stripe Checkout session here
    const prices = {
        hd: 1900, // $19 in cents
        '4k': 4900 // $49 in cents
    };
    
    res.json({
        success: true,
        sessionId: 'sess_' + uuidv4(),
        amount: prices[tier],
        message: 'In production, this would redirect to Stripe Checkout'
    });
});

// Stripe webhook (stub)
app.post('/api/webhook/stripe', express.raw({ type: 'application/json' }), (req, res) => {
    // In production, verify webhook signature and handle events
    const event = req.body;
    console.log('Stripe webhook:', event.type);
    
    res.json({ received: true });
});

// ============================================
// Voice Scripts (AI Narrator Templates)
// ============================================

const voiceScripts = {
    epic: {
        voice: 'Adam',
        script: `In a world where ordinary moments become extraordinary memories... 
        One story stands above the rest. 
        Witness the journey. Feel the emotion. Experience the legend. 
        This summer... your life becomes cinema.`,
        tone: 'deep, authoritative, dramatic'
    },
    romantic: {
        voice: 'Rachel',
        script: `Some love stories are written in the stars. 
        Others are captured in fleeting moments... a glance, a touch, a smile. 
        This is the story of two hearts finding their way home. 
        A tale of love... of you.`,
        tone: 'warm, soft, emotional'
    },
    funny: {
        voice: 'Antoni',
        script: `They said it couldn't be done. 
        They said you were crazy. 
        Well, look who's laughing now! 
        Get ready for the most unexpectedly amazing story ever told. 
        Starring... you!`,
        tone: 'witty, lighthearted, comedic'
    },
    nostalgic: {
        voice: 'Rachel',
        script: `Some memories fade with time. 
        Others... become legends. 
        Journey back to where it all began. 
        To the moments that shaped us. 
        To the memories that live forever.`,
        tone: 'sentimental, warm, vintage'
    },
    action: {
        voice: 'Adam',
        script: `One person. 
        Countless adventures. 
        Against all odds... they never backed down. 
        This is not just a story. 
        This is a legend in the making. 
        Your life... as an action epic.`,
        tone: 'intense, dramatic, high-energy'
    }
};

// ============================================
// Music Selection (Mood-based Tracks)
// ============================================

const musicTracks = {
    epic: {
        title: 'Rise of Heroes',
        genre: 'Orchestral Cinematic',
        tempo: 'Moderate to Fast',
        instruments: ['Strings', 'Brass', 'Percussion', 'Choir'],
        mood: 'Epic, Triumphant, Dramatic',
        duration: '2:30'
    },
    romantic: {
        title: 'Endless Love',
        genre: 'Piano & Strings',
        tempo: 'Slow',
        instruments: ['Piano', 'Violin', 'Cello', 'Soft Pads'],
        mood: 'Warm, Emotional, Tender',
        duration: '2:00'
    },
    funny: {
        title: 'Comedy Chase',
        genre: 'Upbeat Comedy',
        tempo: 'Fast',
        instruments: ['Pizzicato Strings', 'Woodwinds', 'Light Percussion'],
        mood: 'Playful, Lighthearted, Quirky',
        duration: '1:45'
    },
    nostalgic: {
        title: 'Yesterday\'s Dreams',
        genre: 'Vintage Warm',
        tempo: 'Slow to Moderate',
        instruments: ['Acoustic Guitar', 'Piano', 'Warm Strings', 'Vinyl Crackle'],
        mood: 'Sentimental, Warm, Reflective',
        duration: '2:15'
    },
    action: {
        title: 'Adrenaline Rush',
        genre: 'Epic Action',
        tempo: 'Fast',
        instruments: ['Heavy Drums', 'Electric Guitar', 'Synth Bass', 'Brass'],
        mood: 'Intense, Thrilling, High-Energy',
        duration: '2:45'
    }
};

// ============================================
// Video Processing (FFmpeg Pipeline)
// ============================================

async function processTrailer(trailerId) {
    const trailer = trailers.get(trailerId);
    if (!trailer) return;
    
    try {
        // Step 1: Analyze photos
        trailer.steps[0].status = 'processing';
        trailer.progress = 10;
        await sleep(1000);
        trailer.steps[0].status = 'completed';
        
        // Step 2: Generate voiceover
        trailer.steps[1].status = 'processing';
        trailer.progress = 30;
        const voiceoverPath = await generateVoiceover(trailer.style, trailerId);
        trailer.steps[1].status = 'completed';
        
        // Step 3: Select music
        trailer.steps[2].status = 'processing';
        trailer.progress = 50;
        const musicPath = await selectMusic(trailer.style, trailerId);
        trailer.steps[2].status = 'completed';
        
        // Step 4: Assemble video
        trailer.steps[3].status = 'processing';
        trailer.progress = 70;
        const outputPath = await assembleVideo(trailer, voiceoverPath, musicPath);
        trailer.steps[3].status = 'completed';
        
        // Step 5: Finalize
        trailer.steps[4].status = 'processing';
        trailer.progress = 90;
        
        // Add watermark for free tier
        if (trailer.tier === 'free') {
            await addWatermark(outputPath);
        }
        
        trailer.outputPath = outputPath;
        trailer.downloadUrl = `/api/trailer/${trailerId}/download`;
        trailer.steps[4].status = 'completed';
        trailer.progress = 100;
        trailer.status = 'completed';
        
        console.log(`Trailer ${trailerId} completed successfully`);
    } catch (error) {
        console.error(`Trailer ${trailerId} failed:`, error);
        trailer.status = 'failed';
        trailer.error = error.message;
        throw error;
    }
}

async function generateVoiceover(style, trailerId) {
    // In production: Call ElevenLabs API
    const script = voiceScripts[style]?.script || voiceScripts.epic.script;
    console.log(`Generating voiceover for style: ${style}`);
    console.log(`Script: ${script}`);
    
    // Simulate API call delay
    await sleep(2000);
    
    // Return path to generated audio (stub)
    return `temp/voiceover_${trailerId}.mp3`;
}

async function selectMusic(style, trailerId) {
    // In production: Call Suno/Udio API or select from library
    const track = musicTracks[style] || musicTracks.epic;
    console.log(`Selecting music: ${track.title}`);
    
    // Simulate API call delay
    await sleep(1500);
    
    // Return path to music file (stub)
    return `temp/music_${trailerId}.mp3`;
}

async function assembleVideo(trailer, voiceoverPath, musicPath) {
    // In production: Use fluent-ffmpeg to combine photos, voice, music
    console.log(`Assembling video with ${trailer.photoIds.length} photos`);
    
    // Simulate processing delay
    await sleep(3000);
    
    // Return path to output video (stub)
    const outputPath = `outputs/trailer_${trailer.id}.mp4`;
    
    // Create empty file as placeholder
    fs.writeFileSync(outputPath, '');
    
    return outputPath;
}

async function addWatermark(videoPath) {
    // In production: Use FFmpeg to add watermark overlay
    console.log(`Adding watermark to: ${videoPath}`);
    await sleep(1000);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// ============================================
// Start Server
// ============================================

app.listen(PORT, () => {
    console.log(`🎬 MovieTrailer Server running on http://localhost:${PORT}`);
    console.log(`📁 Upload directory: ${path.resolve('uploads')}`);
    console.log(`📁 Output directory: ${path.resolve('outputs')}`);
});

module.exports = app;
