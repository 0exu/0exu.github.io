// --- SYSTEM OVERLAY & LOADER ---
window.addEventListener('load', () => {
    const overlay = document.getElementById('system-overlay');
    if (!overlay) return;

    // Check if on root or index.html
    const isHome = window.location.pathname === '/' || window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/');
    const hasSeenLoader = sessionStorage.getItem('hasSeenLoader');

    if (isHome && !hasSeenLoader) {
        setTimeout(() => {
            overlay.classList.add('fade-out');
            initTerminalTyping();
            sessionStorage.setItem('hasSeenLoader', 'true');
        }, 1500);
    } else {
        // Skip animation for subpages or if already seen
        overlay.style.display = 'none';
        // For subpages, we might still want to trigger any terminal animations if they exist
        initTerminalTyping(); 
    }
    
    // Fetch Cyber News
    fetchCyberNews();
});

// --- FETCH CYBER NEWS ---
async function fetchCyberNews() {
    const feedEl = document.getElementById('cyber-news-feed');
    if (!feedEl) return;
    try {
        const rssUrl = 'https://feeds.feedburner.com/TheHackersNews';
        const proxyUrl = 'https://api.codetabs.com/v1/proxy/?quest=' + rssUrl;
        const response = await fetch(proxyUrl);
        const data = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, 'text/xml');
        const items = xmlDoc.querySelectorAll('item');
        feedEl.innerHTML = '';
        Array.from(items).slice(0, 3).forEach(item => {
            const title = item.querySelector('title').textContent;
            const link = item.querySelector('link').textContent;
            const p = document.createElement('p');
            p.className = 'news-feed-item';
            p.innerHTML = `<a href="${link}" target="_blank">> ${title.slice(0, 45)}...</a>`;
            feedEl.appendChild(p);
        });
    } catch (e) {
        feedEl.innerHTML = '<p style="color:#f44">> FEED_OFFLINE</p>';
    }
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
            p.className = "typing-text";
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

// --- MOUSE REACTIVE BENTO ITEMS & CARDS ---
function initTiltEffect() {
    const tiltElements = document.querySelectorAll('.bento-item, .tool-card, .news-card, .fun-card, .nav-a, .nav-clock-btn');
    tiltElements.forEach(item => {
        item.addEventListener('mousemove', e => {
            const rect = item.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            item.style.setProperty('--x', `${x}%`);
            item.style.setProperty('--y', `${y}%`);
            
            // Tilt effect
            const rotateX = (y - 50) / 10;
            const rotateY = (x - 50) / -10;
            item.style.transform = `translateY(-5px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        item.addEventListener('mouseleave', () => {
            item.style.transform = `translateY(0) rotateX(0) rotateY(0)`;
        });
    });
}
initTiltEffect();

// Scroll Animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('show');
    });
}, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));

// --- OPTIMIZED PARTICLE BACKGROUND ---
const canvas = document.getElementById('particleCanvas');
if (canvas) {
    const ctx = canvas.getContext('2d', { desynchronized: true });
    let particlesArray = [];
    const colors = ['#00ffff', '#ff00ff', '#00ff00', '#ffffff'];

    function setCanvasSize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    class Particle {
        constructor() { this.reset(); }
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 1.2 + 0.1;
            this.speedX = Math.random() * 0.4 - 0.2;
            this.speedY = Math.random() * 0.4 - 0.2;
            this.color = colors[Math.floor(Math.random() * colors.length)];
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset();
        }
        draw() {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, 6.28);
            ctx.fill();
        }
    }

    function initParticles() {
        particlesArray = [];
        const numberOfParticles = (canvas.width * canvas.height) / 50000;
        for (let i = 0; i < numberOfParticles; i++) particlesArray.push(new Particle());
    }

    function animateParticles() {
        if (document.hidden) {
            setTimeout(() => requestAnimationFrame(animateParticles), 500);
            return;
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.globalAlpha = 0.4;
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            particlesArray[i].draw();
        }
        requestAnimationFrame(animateParticles);
    }

    window.addEventListener('resize', () => {
        setCanvasSize();
        initParticles();
    }, { passive: true });

    setCanvasSize();
    initParticles();
    animateParticles();
}

// Optimized Clock
let lastTime = "";
function updateClock() {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${h}:${m}:${s}`;
    
    if (timeString !== lastTime) {
        const clockEl = document.getElementById('clock');
        if (clockEl) clockEl.textContent = timeString;
        lastTime = timeString;
    }
}
setInterval(updateClock, 1000);

// IP Fetching
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
fetchIP();

document.addEventListener('contextmenu', e => e.preventDefault());

// Scroll Reveal Intersection Observer
function initScrollReveal() {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.scroll-reveal').forEach(el => {
        observer.observe(el);
    });
}

// Parallax Effects
function initParallax() {
    const bgLayer = document.getElementById('bg-parallax');
    const heroLogo = document.querySelector('.hero-logo-container');
    
    let ticking = false;

    function updateParallax() {
        const scrolled = window.pageYOffset;
        
        if (bgLayer) {
            bgLayer.style.transform = `translate3d(0, ${scrolled * 0.4}px, 0)`;
        }
        
        if (heroLogo) {
            heroLogo.style.transform = `translate3d(0, ${scrolled * 0.15}px, 0)`;
        }
        
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }, { passive: true });
}

// Theme Toggle Logic
function initThemeToggle() {
    const toggleBtn = document.getElementById('theme-toggle');
    const root = document.documentElement;
    const icon = toggleBtn ? toggleBtn.querySelector('i') : null;

    if (!toggleBtn || !root || !icon) return;

    // Check local storage or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;

    if (savedTheme === 'light' || (!savedTheme && systemPrefersLight)) {
        root.setAttribute('data-theme', 'light');
        icon.classList.replace('fa-moon', 'fa-sun');
    } else {
        root.setAttribute('data-theme', 'dark');
        icon.classList.replace('fa-sun', 'fa-moon');
    }

    toggleBtn.addEventListener('click', () => {
        const currentTheme = root.getAttribute('data-theme');
        if (currentTheme === 'dark') {
            root.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            icon.classList.replace('fa-moon', 'fa-sun');
        } else {
            root.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            icon.classList.replace('fa-sun', 'fa-moon');
        }
    });
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    initScrollReveal();
    initParallax();
    initThemeToggle();
});

const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => navMenu.classList.toggle('nav-active'));
}
