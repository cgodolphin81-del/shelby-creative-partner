/* ============================================
   Your Life as a Movie Trailer - Main Script
   ============================================ */

// State Management
const state = {
    photos: [],
    selectedStyle: null,
    generationProgress: 0,
    selectedDownload: null,
    trailerId: null
};

// Style configurations
const styles = {
    epic: {
        name: 'Epic',
        emoji: '🎬',
        description: 'Blockbuster drama with deep authoritative voiceover and orchestral score. Think Marvel meets your memories.',
        voice: 'Adam',
        music: 'Epic Orchestral',
        script: 'In a world... where moments matter... one story will change everything.'
    },
    romantic: {
        name: 'Romantic',
        emoji: '💕',
        description: 'Warm and emotional narration with gentle piano melodies. Your love story deserves the big screen.',
        voice: 'Rachel',
        music: 'Gentle Piano',
        script: 'Some love stories are meant to be told. This is yours.'
    },
    funny: {
        name: 'Funny',
        emoji: '😂',
        description: 'Lighthearted comedy with witty narration and upbeat tunes. Because life\'s too short to be serious.',
        voice: 'Antoni',
        music: 'Upbeat Comedy',
        script: 'They said it couldn\'t be done. They were wrong. This is the story of... well, you.'
    },
    nostalgic: {
        name: 'Nostalgic',
        emoji: '📼',
        description: 'Vintage warmth with sentimental narration and classic melodies. Journey through your greatest memories.',
        voice: 'Rachel',
        music: 'Vintage Warm',
        script: 'Some memories fade. Others become legends. These... are your legends.'
    },
    action: {
        name: 'Action',
        emoji: '⚡',
        description: 'High-energy intensity with dramatic delivery and epic drums. Your life as an action movie.',
        voice: 'Adam',
        music: 'Epic Drums',
        script: 'One person. Countless adventures. This summer... witness the legend.'
    }
};

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    initUploadZone();
    initFileInput();
    initNavigation();
});

// Smooth scroll navigation
function initNavigation() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Upload Zone - Drag & Drop
function initUploadZone() {
    const dropzone = document.getElementById('dropzone');
    
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropzone.addEventListener(eventName, preventDefaults, false);
    });
    
    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }
    
    ['dragenter', 'dragover'].forEach(eventName => {
        dropzone.addEventListener(eventName, () => dropzone.classList.add('dragover'), false);
    });
    
    ['dragleave', 'drop'].forEach(eventName => {
        dropzone.addEventListener(eventName, () => dropzone.classList.remove('dragover'), false);
    });
    
    dropzone.addEventListener('drop', handleDrop, false);
}

function handleDrop(e) {
    const dt = e.dataTransfer;
    const files = dt.files;
    handleFiles(files);
}

function initFileInput() {
    const fileInput = document.getElementById('fileInput');
    fileInput.addEventListener('change', (e) => {
        handleFiles(e.target.files);
    });
}

function handleFiles(files) {
    const validFiles = Array.from(files).filter(file => {
        // Validate file type
        if (!file.type.startsWith('image/')) {
            alert(`${file.name} is not an image file.`);
            return false;
        }
        // Validate file size (10MB max)
        if (file.size > 10 * 1024 * 1024) {
            alert(`${file.name} exceeds 10MB limit.`);
            return false;
        }
        return true;
    });
    
    // Check if we have room for more photos
    const remainingSlots = 10 - state.photos.length;
    const filesToAdd = validFiles.slice(0, remainingSlots);
    
    if (validFiles.length > remainingSlots) {
        alert(`Only ${remainingSlots} more photos can be added (max 10).`);
    }
    
    filesToAdd.forEach(file => {
        const reader = new FileReader();
        reader.onload = (e) => {
            state.photos.push({
                file: file,
                preview: e.target.result,
                name: file.name
            });
            updatePhotoPreview();
            updateUploadProgress();
        };
        reader.readAsDataURL(file);
    });
}

function updatePhotoPreview() {
    const previewContainer = document.getElementById('photoPreview');
    previewContainer.innerHTML = state.photos.map((photo, index) => `
        <div style="position: relative;">
            <img src="${photo.preview}" alt="${photo.name}">
            <button onclick="removePhoto(${index})" style="position: absolute; top: -8px; right: -8px; background: #ef4444; color: white; border: none; border-radius: 50%; width: 24px; height: 24px; cursor: pointer; font-size: 14px;">×</button>
        </div>
    `).join('');
}

function removePhoto(index) {
    state.photos.splice(index, 1);
    updatePhotoPreview();
    updateUploadProgress();
}

function updateUploadProgress() {
    const count = state.photos.length;
    const progress = (count / 10) * 100;
    
    document.getElementById('photoCount').textContent = count;
    document.getElementById('uploadProgress').style.width = `${progress}%`;
    
    // Enable continue button if we have at least 5 photos
    const continueBtn = document.getElementById('continueToStyle');
    continueBtn.disabled = count < 5;
    continueBtn.textContent = count < 5 ? `Need ${5 - count} more photos` : 'Continue to Style →';
}

// Style Selection
function selectStyle(styleKey) {
    state.selectedStyle = styleKey;
    
    // Update UI
    document.querySelectorAll('.style-option').forEach(opt => {
        opt.classList.remove('selected');
    });
    document.querySelector(`.style-option[data-style="${styleKey}"]`).classList.add('selected');
    
    // Show style info
    const style = styles[styleKey];
    document.getElementById('selectedStyleName').textContent = style.name;
    document.getElementById('selectedStyleDesc').textContent = style.description;
    document.getElementById('selectedStyleInfo').style.display = 'block';
    
    // Enable generate button
    document.getElementById('generateTrailer').disabled = false;
}

function previewStyle(styleKey) {
    const style = styles[styleKey];
    alert(`🎙️ Voice Preview: ${style.name}\n\n"${style.script}"\n\nVoice: ${style.voice}\nMusic: ${style.music}\n\n(In production, this would play an audio sample)`);
}

// Navigation between steps
function goToStep(stepName) {
    document.querySelectorAll('.creator-step').forEach(step => {
        step.classList.remove('active');
    });
    document.getElementById(`step-${stepName}`).classList.add('active');
}

// Generate Trailer
document.getElementById('generateTrailer').addEventListener('click', async () => {
    if (!state.selectedStyle || state.photos.length < 5) {
        alert('Please select a style and upload at least 5 photos.');
        return;
    }
    
    goToStep('generating');
    simulateGeneration();
});

async function simulateGeneration() {
    const steps = [
        'gen-step-1',
        'gen-step-2',
        'gen-step-3',
        'gen-step-4',
        'gen-step-5'
    ];
    
    for (let i = 0; i <= 100; i += 2) {
        state.generationProgress = i;
        document.getElementById('generationProgress').style.width = `${i}%`;
        
        // Update step indicators
        const currentStep = Math.floor((i / 100) * steps.length);
        steps.forEach((step, index) => {
            const el = document.getElementById(step);
            if (index < currentStep) {
                el.classList.add('completed');
                el.textContent = el.textContent.replace('⏳', '✓');
            } else if (index === currentStep) {
                el.classList.add('active');
            } else {
                el.classList.remove('active', 'completed');
            }
        });
        
        await sleep(100);
    }
    
    // Generation complete
    setTimeout(() => {
        state.trailerId = 'trailer_' + Date.now();
        goToStep('preview');
    }, 500);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Download Selection
function selectDownload(tier) {
    state.selectedDownload = tier;
    
    document.querySelectorAll('.download-option').forEach(opt => {
        opt.classList.remove('selected');
    });
    event.target.closest('.download-option').classList.add('selected');
    
    const downloadBtn = document.getElementById('downloadBtn');
    downloadBtn.disabled = false;
    
    if (tier === 'free') {
        downloadBtn.textContent = 'Download Free (Watermarked)';
    } else if (tier === 'hd') {
        downloadBtn.textContent = 'Purchase HD - $19';
    } else if (tier === '4k') {
        downloadBtn.textContent = 'Purchase 4K - $49';
    }
}

document.getElementById('downloadBtn').addEventListener('click', () => {
    if (!state.selectedDownload) {
        alert('Please select a download quality.');
        return;
    }
    
    if (state.selectedDownload === 'free') {
        // Simulate free download
        alert('🎬 Your free watermarked trailer is downloading!\n\n(In production, this would trigger the actual download)');
    } else {
        // Simulate payment flow
        const price = state.selectedDownload === 'hd' ? '$19' : '$49';
        alert(`💳 Redirecting to secure checkout for ${price}...\n\n(In production, this would open Stripe Checkout)`);
    }
});

// Utility: Create trailer data for API
function getTrailerData() {
    return {
        photos: state.photos.map(p => ({ name: p.name, size: p.file.size })),
        style: state.selectedStyle,
        styleConfig: styles[state.selectedStyle],
        photoCount: state.photos.length
    };
}

// Export for debugging
window.MovieTrailerApp = {
    state,
    styles,
    selectStyle,
    previewStyle,
    goToStep,
    getTrailerData
};

console.log('🎬 MovieTrailer MVP loaded successfully!');
