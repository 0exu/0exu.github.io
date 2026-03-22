// Power Vault - Professional Power-User Logic
const tools = [
  { name: 'LINUX-DEFENDER', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/BASH_LOGO_WITHOUT_BACKGROUND.png/250px-BASH_LOGO_WITHOUT_BACKGROUND.png', desc: 'Advanced system hardening and security auditing script for Linux environments.', category: 'bash' },
  { name: 'Hare-Krishna', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/BASH_LOGO_WITHOUT_BACKGROUND.png/250px-BASH_LOGO_WITHOUT_BACKGROUND.png', desc: 'Secure automation engine for devops workflows and repetitive task management.', category: 'bash' },
  { name: 'SUDARSHAN', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/BASH_LOGO_WITHOUT_BACKGROUND.png/250px-BASH_LOGO_WITHOUT_BACKGROUND.png', desc: 'Real-time threat monitoring and network traffic analysis tool.', category: 'security' },
  { name: 'Mahakal-Framework', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/BASH_LOGO_WITHOUT_BACKGROUND.png/250px-BASH_LOGO_WITHOUT_BACKGROUND.png', desc: 'Comprehensive penetration testing framework for various attack vectors.', category: 'security' },
  { name: 'STEG-Detector', img: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Python.svg', desc: 'Steganography analysis tool to detect hidden data in images and files.', category: 'python' },
  { name: 'ONE-Type', img: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Python.svg', desc: 'A minimalist, high-speed typing performance and accuracy analyzer.', category: 'python' },
  { name: 'HASH-Cracker', img: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Python.svg', desc: 'Multi-threaded cryptographic hash identification and recovery tool.', category: 'security' },
  { name: 'KEYLOGGER-Detector', img: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Python.svg', desc: 'Heuristic-based scanner to identify unauthorized input interception.', category: 'security' },
  { name: 'WEB-Scanner', img: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Python.svg', desc: 'Vulnerability scanner for web applications identifying OWASP Top 10.', category: 'python' },
  { name: 'PORT-Scanner', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/C_LANGUAGE_WITHOUT_BACKGROUND.png/250px-C_LANGUAGE_WITHOUT_BACKGROUND.png', desc: 'Ultra-fast low-level network port discovery and service identifier.', category: 'security' },
  { name: 'genotp', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/C_LANGUAGE_WITHOUT_BACKGROUND.png/250px-C_LANGUAGE_WITHOUT_BACKGROUND.png', desc: 'Cryptographically secure one-time password generation utility.', category: 'security' },
  { name: 'DIR-Fuzz', img: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Python.svg', desc: 'High-speed web directory and file discovery tool using dictionary attacks.', category: 'python' },
  { name: 'SEC-File', img: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Python.svg', desc: 'Secure file encryption utility using military-grade AES algorithms.', category: 'security' },
  { name: 'PSSWD-Checker', img: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Python.svg', desc: 'Advanced password entropy analyzer and strength validator.', category: 'security' },
  { name: 'NUM-Info', img: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Python.svg', desc: 'OSINT tool for gathering detailed information from mobile numbers.', category: 'python' },
  { name: 'AUTOMATED-nmap', img: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Python.svg', desc: 'Automated network mapping and vulnerability scanning orchestrator.', category: 'security' },
  { name: 'MAL-Analyzer', img: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Python.svg', desc: 'Static and dynamic analysis engine for suspicious binary files.', category: 'security' },
  { name: 'WEB-CRAWLER', img: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Python.svg', desc: 'Scalable web spider for automated data extraction and site mapping.', category: 'python' },
  { name: 'WEB-Dorker', img: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Python.svg', desc: 'Advanced search engine scraping tool using custom dork patterns.', category: 'security' },
  { name: '0scam', img: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Python.svg', desc: 'Social engineering awareness and simulation tool for security researchers.', category: 'security' },
  { name: '0scam-browse', img: '../back/js-logo.png', desc: 'A web-based interface for repository management and browsing.', category: 'python' },
  { name: 'OPEN-Eye', img: 'https://static.vecteezy.com/system/resources/previews/012/697/296/original/3d-golang-programming-language-logo-free-png.png', desc: 'Fast, concurrent asset discovery tool for large attack surfaces.', category: 'golang' },
  { name: 'VEDHARA', img: 'https://static.vecteezy.com/system/resources/previews/012/697/296/original/3d-golang-programming-language-logo-free-png.png', desc: 'Next-gen distributed penetration testing orchestration engine.', category: 'golang' },
  { name: 'procut', img: 'https://static.vecteezy.com/system/resources/previews/012/697/296/original/3d-golang-programming-language-logo-free-png.png', desc: 'High-performance string and data processing utility in Go.', category: 'golang' },
  { name: '.vim', img: '../back/vim.png', desc: 'Optimized Vim configuration for lightning-fast development workflows.', category: 'bash' },
  { name: 'nvc0nf', img: '../back/nvim.png', desc: 'My personalized, highly-optimized Neovim configuration for maximum productivity.', category: 'python' },
  { name: 'wallpapers-forme', img: '../back/wall.png', desc: 'Curated collection of high-definition cyber and minimalist wallpapers.', category: 'bash' },
  { name: 'Pen_Test', img: '../back/pen.png', desc: 'A collection of checklists and custom scripts for professional penetration tests.', category: 'security' },
];

document.addEventListener('DOMContentLoaded', function() {
    const grid = document.getElementById('tools-grid');
    const search = document.getElementById('project-search');
    const pills = document.querySelectorAll('.filter-pill');
    const countEl = document.getElementById('node-count');

    let currentFilter = 'all';
    let searchQuery = '';

    function renderTools() {
        grid.innerHTML = '';
        const filtered = tools.filter(t => {
            const matchesFilter = currentFilter === 'all' || t.category === currentFilter;
            const matchesSearch = t.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                t.desc.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesFilter && matchesSearch;
        });

        if (countEl) countEl.textContent = filtered.length;

        filtered.forEach(t => {
            const card = document.createElement('div');
            card.className = 'tool-card scroll-reveal show';
            card.innerHTML = `
                <div class="card-header">
                    <img src="${t.img}" alt="${t.name}">
                    <span class="category-tag">${t.category.toUpperCase()}</span>
                </div>
                <div class="card-body">
                    <h3>${t.name.replace(/-/g, '‑')}</h3>
                    <p class="card-desc">${t.desc}</p>
                </div>
                <div class="card-actions">
                    <a href="https://github.com/0warn/${t.name}" class="action-btn" target="_blank">RESOURCES</a>
                    <button onclick="copyClone('${t.name}', this)" class="action-btn btn-clone">CLONE</button>
                </div>
            `;
            grid.appendChild(card);

            // Add 3D Tilt Effect
            card.addEventListener('mousemove', e => {
                const rect = card.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;
                card.style.setProperty('--x', `${x}%`);
                card.style.setProperty('--y', `${y}%`);
                
                const rotateX = (y - 50) / 10;
                const rotateY = (x - 50) / -10;
                card.style.transform = `translateY(-10px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = `translateY(0) rotateX(0) rotateY(0)`;
            });
        });
    }

    // Event Listeners
    search?.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        renderTools();
    });

    pills.forEach(pill => {
        pill.addEventListener('click', () => {
            pills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            currentFilter = pill.dataset.filter;
            renderTools();
        });
    });

    // Hotkeys
    document.addEventListener('keydown', (e) => {
        if (e.key === '/' && document.activeElement !== search) {
            e.preventDefault();
            search?.focus();
        }
    });

    renderTools();
});

// GLOBAL UTILS
window.copyClone = function(repoName, btn) {
    const cmd = `git clone https://github.com/0warn/${repoName}.git`;
    navigator.clipboard.writeText(cmd).then(() => {
        const originalText = btn.innerText;
        btn.innerText = 'COPIED!';
        btn.style.borderColor = '#0f0';
        btn.style.color = '#0f0';
        setTimeout(() => {
            btn.innerText = originalText;
            btn.style.borderColor = '';
            btn.style.color = '';
        }, 2000);
    });
};
