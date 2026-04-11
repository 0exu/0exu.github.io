// --- PARALLAX SCROLL EFFECT ---
function initParallax() {
    const shapes = document.querySelectorAll('.parallax-shape');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        shapes.forEach(shape => {
            const speed = shape.getAttribute('data-speed') || 0.5;
            shape.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// --- SPLASH PARALLAX ---
function initSplashParallax() {
    const splash = document.querySelector('.splash-section');
    const splashLogo = document.querySelector('.splash-logo');
    if (!splash || !splashLogo) return;

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const opacity = 1 - (scrolled / 500);
        const scale = 1 + (scrolled / 1000);
        
        if (scrolled < 600) {
            splashLogo.style.transform = `scale(${scale})`;
            splashLogo.style.opacity = opacity;
            splash.style.pointerEvents = 'auto';
        } else {
            splash.style.pointerEvents = 'none';
        }
    }, { passive: true });
}

// --- ENTRANCE ANIMATIONS ---
function initEntranceAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    document.querySelectorAll('.parallax-item').forEach(el => observer.observe(el));
}

// --- DYNAMIC GREETING ---
function initDynamicGreeting() {
    const greetingEl = document.getElementById('greeting-text');
    if (!greetingEl) return;

    const hour = new Date().getHours();
    let welcome = "Good Night";
    if (hour < 12) welcome = "Good Morning";
    else if (hour < 18) welcome = "Good Afternoon";
    else welcome = "Good Evening";

    greetingEl.textContent = `${welcome}, Guest.`;
}

// --- SYSTEM METRICS ---
function initSystemMetrics() {
    const cpuBar = document.getElementById('cpu-bar');
    const cpuVal = document.getElementById('cpu-val');
    const netBar = document.getElementById('net-bar');
    const netVal = document.getElementById('net-val');

    if (!cpuBar || !netBar) return;

    setInterval(() => {
        const cpu = Math.floor(Math.random() * 30) + 20; // 20-50%
        const net = Math.floor(Math.random() * 500) + 100; // 100-600 KB/s
        
        cpuBar.style.width = `${cpu}%`;
        cpuVal.textContent = `${cpu}%`;
        
        netBar.style.width = `${Math.min(100, net/6)}%`;
        netVal.textContent = `${net} KB/s`;
    }, 3000);
}

// --- TERMINAL TYPING ANIMATION ---
function initTerminalTyping() {
    const terminal = document.getElementById('terminal-log');
    if (!terminal) return;
    
    const lines = [
        "> Initializing kernel...",
        "> Loading security modules...",
        "> Establishing encrypted tunnel...",
        "> Network: SECURE",
        "> Firewall: ACTIVE",
        "> root@0warn:~# _"
    ];
    
    let lineIdx = 0;
    terminal.innerHTML = '';

    function typeLine() {
        if (lineIdx < lines.length) {
            const p = document.createElement('p');
            terminal.appendChild(p);
            
            let charIdx = 0;
            const currentLine = lines[lineIdx];
            
            function typeChar() {
                if (charIdx < currentLine.length) {
                    p.textContent += currentLine[charIdx];
                    charIdx++;
                    setTimeout(typeChar, 30);
                } else {
                    lineIdx++;
                    setTimeout(typeLine, 400);
                }
            }
            typeChar();
        }
    }
    typeLine();
}

// --- CLOCK ---
function updateClock() {
    const clockEl = document.getElementById('clock');
    if (!clockEl) return;
    const now = new Date();
    clockEl.textContent = now.toLocaleTimeString([], { hour12: false });
}
setInterval(updateClock, 1000);

// --- IP FETCHING ---
async function fetchIP() {
    const ipEl = document.getElementById('ip');
    if (!ipEl) return;
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        ipEl.textContent = data.ip;
    } catch (error) {
        ipEl.textContent = "OFFLINE";
    }
}

// --- MOBILE MENU ---
function initMobileMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    if (!menuToggle || !navMenu) return;

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const icon = menuToggle.querySelector('i');
        if (icon) {
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        }
    });
}

// --- FOOTER REVEAL ---
function initFooterReveal() {
    const footer = document.querySelector('footer');
    if (!footer) return;

    window.addEventListener('scroll', () => {
        const scrollPosition = window.innerHeight + window.pageYOffset;
        const pageHeight = document.documentElement.scrollHeight;
        
        // Show footer when within 10px of the bottom
        if (scrollPosition >= pageHeight - 10) {
            footer.classList.add('visible');
        } else {
            footer.classList.remove('visible');
        }
    }, { passive: true });
}

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    initParallax();
    initSplashParallax();
    initEntranceAnimations();
    initDynamicGreeting();
    initSystemMetrics();
    initTerminalTyping();
    initMobileMenu();
    initFooterReveal();
    updateClock();
    fetchIP();
});
