/* ========================================
   Infinite Compliment Machine
   Main Application Logic
   ======================================== */

class ComplimentMachine {
    constructor() {
        this.state = {
            name: '',
            mood: null,
            interests: [],
            currentCompliment: '',
            complimentHistory: [],
            visitCount: this.getVisitCount()
        };
        
        this.elements = {};
        this.init();
    }

    init() {
        this.cacheElements();
        this.bindEvents();
        this.trackVisit();
        this.showStep('step-name');
        
        // Increment visit count
        this.state.visitCount++;
        localStorage.setItem('complimentMachine_visits', this.state.visitCount);
    }

    cacheElements() {
        // Steps
        this.elements.steps = {
            name: document.getElementById('step-name'),
            mood: document.getElementById('step-mood'),
            interests: document.getElementById('step-interests'),
            compliment: document.getElementById('step-compliment')
        };

        // Inputs
        this.elements.nameInput = document.getElementById('name-input');
        this.elements.nameSubmit = document.getElementById('name-submit');
        this.elements.interestsSkip = document.getElementById('interests-skip');

        // Compliment display
        this.elements.complimentName = document.getElementById('compliment-name');
        this.elements.complimentText = document.getElementById('compliment-text');
        this.elements.newCompliment = document.getElementById('new-compliment');
        this.elements.shareCompliment = document.getElementById('share-compliment');

        // Modals
        this.elements.emailModal = document.getElementById('email-modal');
        this.elements.emailModalClose = document.getElementById('email-modal-close');
        this.elements.emailForm = document.getElementById('email-form');
        this.elements.emailInput = document.getElementById('email-input');
        
        this.elements.shareModal = document.getElementById('share-modal');
        this.elements.shareModalClose = document.getElementById('share-modal-close');
        this.elements.shareComplimentText = document.getElementById('share-compliment-text');
        this.elements.shareTwitter = document.getElementById('share-twitter');
        this.elements.shareFacebook = document.getElementById('share-facebook');
        this.elements.copyLink = document.getElementById('copy-link');

        // Footer
        this.elements.dailyCompliments = document.getElementById('daily-compliments');

        // Mood and interest buttons
        this.elements.moodBtns = document.querySelectorAll('.mood-btn');
        this.elements.interestBtns = document.querySelectorAll('.interest-btn');
    }

    bindEvents() {
        // Name submission
        this.elements.nameSubmit.addEventListener('click', () => this.handleNameSubmit());
        this.elements.nameInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.handleNameSubmit();
        });

        // Mood selection
        this.elements.moodBtns.forEach(btn => {
            btn.addEventListener('click', () => this.handleMoodSelect(btn));
        });

        // Interest selection
        this.elements.interestBtns.forEach(btn => {
            btn.addEventListener('click', () => this.handleInterestToggle(btn));
        });

        // Skip interests
        this.elements.interestsSkip.addEventListener('click', () => this.generateCompliment());

        // New compliment
        this.elements.newCompliment.addEventListener('click', () => this.generateCompliment());

        // Share
        this.elements.shareCompliment.addEventListener('click', () => this.showShareModal());

        // Email modal
        this.elements.emailModalClose.addEventListener('click', () => this.hideEmailModal());
        this.elements.emailForm.addEventListener('submit', (e) => this.handleEmailSubmit(e));
        this.elements.dailyCompliments.addEventListener('click', () => this.showEmailModal());

        // Share modal
        this.elements.shareModalClose.addEventListener('click', () => this.hideShareModal());
        this.elements.shareTwitter.addEventListener('click', () => this.shareToTwitter());
        this.elements.shareFacebook.addEventListener('click', () => this.shareToFacebook());
        this.elements.copyLink.addEventListener('click', () => this.copyLink());

        // Close modals on outside click
        window.addEventListener('click', (e) => {
            if (e.target === this.elements.emailModal) this.hideEmailModal();
            if (e.target === this.elements.shareModal) this.hideShareModal();
        });
    }

    showStep(stepId) {
        Object.values(this.elements.steps).forEach(step => {
            step.classList.remove('active');
            step.style.display = 'none';
        });
        
        const activeStep = this.elements.steps[stepId.replace('step-', '')];
        if (activeStep) {
            activeStep.classList.add('active');
            activeStep.style.display = 'flex';
        }
    }

    handleNameSubmit() {
        const name = this.elements.nameInput.value.trim();
        if (!name) {
            this.elements.nameInput.focus();
            return;
        }

        this.state.name = name;
        this.showStep('step-mood');
        
        // Track event
        if (window.trackEvent) {
            window.trackEvent('name_entered', { name: name.substring(0, 1) + '***' });
        }
    }

    handleMoodSelect(btn) {
        this.elements.moodBtns.forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        this.state.mood = btn.dataset.mood;
        
        // Small delay before moving to next step
        setTimeout(() => {
            this.showStep('step-interests');
            
            // Track event
            if (window.trackEvent) {
                window.trackEvent('mood_selected', { mood: this.state.mood });
            }
        }, 300);
    }

    handleInterestToggle(btn) {
        btn.classList.toggle('selected');
        const interest = btn.dataset.interest;
        
        if (this.state.interests.includes(interest)) {
            this.state.interests = this.state.interests.filter(i => i !== interest);
        } else {
            this.state.interests.push(interest);
        }
    }

    generateCompliment() {
        this.showStep('step-compliment');
        this.elements.complimentName.textContent = this.state.name;
        
        // Show loading state
        this.elements.complimentText.innerHTML = '<span class="loading"></span>';
        
        // Generate compliment after short delay for effect
        setTimeout(() => {
            const compliment = this.getPersonalizedCompliment();
            this.state.currentCompliment = compliment;
            this.state.complimentHistory.push(compliment);
            
            // Animate text
            this.animateComplimentText(compliment);
            
            // Trigger confetti
            this.triggerConfetti();
            
            // Track event
            if (window.trackEvent) {
                window.trackEvent('compliment_generated', { 
                    mood: this.state.mood,
                    interests: this.state.interests.length,
                    history_length: this.state.complimentHistory.length
                });
            }
            
            // Show email modal after first compliment
            if (this.state.complimentHistory.length === 1) {
                setTimeout(() => this.showEmailModal(), 3000);
            }
        }, 800);
    }

    getPersonalizedCompliment() {
        const { mood, interests, name } = this.state;
        let compliment;

        // Get base compliment from universal or mood-specific
        let baseCompliments = ComplimentDB.universal;
        if (mood && ComplimentDB.mood[mood]) {
            baseCompliments = ComplimentDB.mood[mood];
        }

        // Get interest-specific compliments
        let interestCompliments = [];
        if (interests.length > 0) {
            interests.forEach(interest => {
                if (ComplimentDB.interests[interest]) {
                    interestCompliments = interestCompliments.concat(ComplimentDB.interests[interest]);
                }
            });
        }

        // Choose compliment type based on state
        const rand = Math.random();
        
        if (interests.length > 0 && rand < 0.4 && interestCompliments.length > 0) {
            // Interest-specific compliment (40% chance if interests selected)
            compliment = this.getRandomCompliment(interestCompliments);
        } else if (mood && rand < 0.7) {
            // Mood-specific compliment (30% chance)
            compliment = this.getRandomCompliment(baseCompliments);
        } else {
            // Universal compliment
            compliment = this.getRandomCompliment(ComplimentDB.universal);
        }

        // Personalize with name occasionally
        if (Math.random() < 0.3 && !compliment.includes(name)) {
            const prefixes = [
                `${name}, `,
                `Hey ${name}, `,
                `${name}, listen: `,
                `Dear ${name}, `
            ];
            compliment = prefixes[Math.floor(Math.random() * prefixes.length)] + compliment.charAt(0).toLowerCase() + compliment.slice(1);
        }

        return compliment;
    }

    getRandomCompliment(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    animateComplimentText(text) {
        this.elements.complimentText.textContent = '';
        let i = 0;
        
        const typeWriter = () => {
            if (i < text.length) {
                this.elements.complimentText.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 30);
            }
        };
        
        typeWriter();
    }

    triggerConfetti() {
        const container = document.getElementById('confetti');
        container.innerHTML = '';
        
        const colors = ['#FF6B9D', '#FF8E72', '#FFD93D', '#B8E8D0', '#E8DFF5'];
        const shapes = ['✨', '💖', '🌟', '💫', '🦋', '🌈', '⭐', '💕'];
        
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                confetti.style.left = Math.random() * 100 + '%';
                confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
                confetti.textContent = shapes[Math.floor(Math.random() * shapes.length)];
                confetti.style.fontSize = (Math.random() * 10 + 10) + 'px';
                confetti.style.animationDelay = (Math.random() * 0.5) + 's';
                container.appendChild(confetti);
                
                // Remove after animation
                setTimeout(() => confetti.remove(), 3000);
            }, i * 30);
        }
    }

    showEmailModal() {
        this.elements.emailModal.classList.add('active');
    }

    hideEmailModal() {
        this.elements.emailModal.classList.remove('active');
    }

    handleEmailSubmit(e) {
        e.preventDefault();
        const email = this.elements.emailInput.value.trim();
        
        if (!email) return;
        
        // In production, this would send to your email service
        console.log('Email captured:', email);
        
        // Track event
        if (window.trackEvent) {
            window.trackEvent('email_subscribed', { subscribed: true });
        }
        
        // Show success message
        this.elements.emailForm.innerHTML = `
            <div style="text-align: center; padding: 2rem;">
                <div style="font-size: 3rem; margin-bottom: 1rem;">💌</div>
                <h3 style="color: var(--primary-pink); margin-bottom: 0.5rem;">You're on the list!</h3>
                <p>Get ready for daily doses of joy!</p>
            </div>
        `;
        
        setTimeout(() => this.hideEmailModal(), 2000);
    }

    showShareModal() {
        this.elements.shareComplimentText.textContent = this.state.currentCompliment;
        this.elements.shareModal.classList.add('active');
        
        // Track event
        if (window.trackEvent) {
            window.trackEvent('share_modal_opened', {});
        }
    }

    hideShareModal() {
        this.elements.shareModal.classList.remove('active');
    }

    shareToTwitter() {
        const text = encodeURIComponent(`Today's compliment: "${this.state.currentCompliment}"`);
        const url = encodeURIComponent(window.location.href);
        const twitterUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
        
        window.open(twitterUrl, '_blank', 'width=600,height=400');
        
        // Track event
        if (window.trackEvent) {
            window.trackEvent('share_twitter', {});
        }
    }

    shareToFacebook() {
        const url = encodeURIComponent(window.location.href);
        const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        
        window.open(facebookUrl, '_blank', 'width=600,height=400');
        
        // Track event
        if (window.trackEvent) {
            window.trackEvent('share_facebook', {});
        }
    }

    copyLink() {
        const url = window.location.href;
        navigator.clipboard.writeText(url).then(() => {
            const originalText = this.elements.copyLink.textContent;
            this.elements.copyLink.textContent = '✓ Copied!';
            setTimeout(() => {
                this.elements.copyLink.textContent = originalText;
            }, 2000);
        });
        
        // Track event
        if (window.trackEvent) {
            window.trackEvent('share_copy_link', {});
        }
    }

    getVisitCount() {
        return parseInt(localStorage.getItem('complimentMachine_visits') || '0');
    }

    trackVisit() {
        // Track first visit vs returning
        const isFirstVisit = this.state.visitCount === 0;
        
        if (window.trackEvent) {
            window.trackEvent('visit', { 
                isFirstVisit,
                visitCount: this.state.visitCount,
                timestamp: new Date().toISOString()
            });
        }
    }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.complimentMachine = new ComplimentMachine();
});
