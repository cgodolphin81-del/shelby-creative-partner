/* ========================================
   Infinite Compliment Machine
   Analytics & Tracking
   ======================================== */

// Simple analytics tracker
window.trackEvent = function(eventName, data = {}) {
    const eventData = {
        event: eventName,
        data: data,
        timestamp: new Date().toISOString(),
        url: window.location.href,
        referrer: document.referrer,
        userAgent: navigator.userAgent,
        screenResolution: `${screen.width}x${screen.height}`,
        viewportSize: `${window.innerWidth}x${window.innerHeight}`
    };

    // Store locally for now
    const events = JSON.parse(localStorage.getItem('complimentMachine_events') || '[]');
    events.push(eventData);
    
    // Keep last 100 events
    if (events.length > 100) {
        events.shift();
    }
    
    localStorage.setItem('complimentMachine_events', JSON.stringify(events));

    // Log to console in development
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        console.log('📊 Analytics Event:', eventName, data);
    }

    // Send to analytics endpoint (uncomment in production)
    // sendToAnalytics(eventData);
};

// Send analytics to server (placeholder for production)
function sendToAnalytics(eventData) {
    // Example: Send to Google Analytics, Plausible, or custom endpoint
    // fetch('/api/analytics', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(eventData)
    // }).catch(err => console.error('Analytics error:', err));
}

// Track page visibility (for engagement metrics)
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
        trackEvent('page_visible', { 
            hiddenDuration: document.hiddenStart ? Date.now() - document.hiddenStart : 0 
        });
    } else {
        document.hiddenStart = Date.now();
        trackEvent('page_hidden', {});
    }
});

// Track before unload (for session duration)
let sessionStart = Date.now();
window.addEventListener('beforeunload', () => {
    const sessionDuration = Date.now() - sessionStart;
    trackEvent('session_end', { sessionDuration });
    
    // Save to localStorage for next session
    const sessions = JSON.parse(localStorage.getItem('complimentMachine_sessions') || '[]');
    sessions.push({
        start: sessionStart,
        end: Date.now(),
        duration: sessionDuration
    });
    
    // Keep last 50 sessions
    if (sessions.length > 50) {
        sessions.shift();
    }
    
    localStorage.setItem('complimentMachine_sessions', JSON.stringify(sessions));
});

// Track scroll depth
let maxScrollDepth = 0;
let scrollTracked = false;

window.addEventListener('scroll', () => {
    const scrollDepth = Math.round(
        ((window.scrollY + window.innerHeight) / document.documentElement.scrollHeight) * 100
    );
    
    if (scrollDepth > maxScrollDepth) {
        maxScrollDepth = scrollDepth;
        
        // Track at 25%, 50%, 75%, 100%
        if (scrollDepth >= 25 && scrollDepth < 50 && maxScrollDepth < 25) {
            trackEvent('scroll_25', {});
        } else if (scrollDepth >= 50 && scrollDepth < 75 && maxScrollDepth < 50) {
            trackEvent('scroll_50', {});
        } else if (scrollDepth >= 75 && scrollDepth < 100 && maxScrollDepth < 75) {
            trackEvent('scroll_75', {});
        } else if (scrollDepth >= 100 && !scrollTracked) {
            trackEvent('scroll_100', {});
            scrollTracked = true;
        }
    }
});

// Track clicks on important elements
document.addEventListener('click', (e) => {
    const target = e.target;
    
    // Track button clicks
    if (target.tagName === 'BUTTON' || target.closest('button')) {
        const button = target.closest('button');
        const buttonText = button.textContent.trim().substring(0, 50);
        const buttonId = button.id || 'unnamed';
        
        trackEvent('button_click', {
            buttonId,
            buttonText,
            buttonClass: button.className
        });
    }
    
    // Track link clicks
    if (target.tagName === 'A' || target.closest('a')) {
        const link = target.closest('a');
        trackEvent('link_click', {
            href: link.href,
            text: link.textContent.trim().substring(0, 50)
        });
    }
});

// Track form interactions
document.addEventListener('submit', (e) => {
    if (e.target.tagName === 'FORM') {
        trackEvent('form_submit', {
            formId: e.target.id || 'unnamed',
            formClass: e.target.className
        });
    }
});

// Generate simple analytics report (for debugging/development)
window.getAnalyticsReport = function() {
    const events = JSON.parse(localStorage.getItem('complimentMachine_events') || '[]');
    const sessions = JSON.parse(localStorage.getItem('complimentMachine_sessions') || '[]');
    const visits = parseInt(localStorage.getItem('complimentMachine_visits') || '0');
    
    const eventCounts = {};
    events.forEach(event => {
        eventCounts[event.event] = (eventCounts[event.event] || 0) + 1;
    });
    
    const avgSessionDuration = sessions.length > 0 
        ? Math.round(sessions.reduce((sum, s) => sum + s.duration, 0) / sessions.length / 1000)
        : 0;
    
    return {
        totalVisits: visits,
        totalSessions: sessions.length,
        avgSessionDuration: `${avgSessionDuration}s`,
        totalEvents: events.length,
        eventBreakdown: eventCounts,
        lastEvent: events[events.length - 1] || null
    };
};

// Console command for developers
console.log('📊 Analytics loaded. Use window.getAnalyticsReport() to see stats.');

// Optional: Integrate with Google Analytics (uncomment and add your ID)
/*
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'GA_MEASUREMENT_ID');
*/

// Optional: Integrate with Plausible Analytics (uncomment and add your domain)
/*
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
*/

// Optional: Integrate with Fathom Analytics (uncomment and add your code)
/*
<script src="https://cdn.usefathom.com/script.js" data-site="YOUR_CODE" defer></script>
*/
