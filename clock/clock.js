// Chronos Engine - Premium Logic & Fixed Pin Interaction
document.addEventListener('DOMContentLoaded', () => {
    initDigitalClock();
    loadPins();
});

function initDigitalClock() {
    const displayTime = document.getElementById('display-time');
    const displayDate = document.getElementById('display-date');

    function update() {
        const now = new Date();
        const h = String(now.getHours()).padStart(2, '0');
        const m = String(now.getMinutes()).padStart(2, '0');
        const s = String(now.getSeconds()).padStart(2, '0');

        if (displayTime) displayTime.textContent = `${h}:${m}:${s}`;
        if (displayDate) displayDate.textContent = now.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
    }
    setInterval(update, 1000);
    update();
}

// --- SHORTCUTS ---
document.addEventListener('keydown', (e) => {
    // Ctrl + E to focus search
    if (e.ctrlKey && e.key === 'e') {
        e.preventDefault();
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            searchInput.focus();
            // Visual feedback - temporary glow
            const wrapper = document.querySelector('.animated-border-wrap');
            if (wrapper) {
                wrapper.style.boxShadow = '0 0 30px rgba(0, 247, 255, 0.4)';
                setTimeout(() => wrapper.style.boxShadow = '', 500);
            }
        }
    }
});

// --- SEARCH ENGINE ---
let currentEngine = 'google';
const engines = {
    google: 'https://www.google.com/search?q=',
    duckduckgo: 'https://duckduckgo.com/?q=',
    github: 'https://github.com/search?q=',
    gitlab: 'https://gitlab.com/search?search=',
    yahoo: 'https://search.yahoo.com/search?p=',
    bing: 'https://www.bing.com/search?q='
};

function setEngine(engine, btn) {
    currentEngine = engine;
    document.querySelectorAll('.engine-pill').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('search-input').placeholder = `Querying ${engine.charAt(0).toUpperCase() + engine.slice(1)}...`;
}

function handleSearch(e) {
    if(e) e.preventDefault();
    const input = document.getElementById('search-input');
    const query = input.value.trim();
    if (query) {
        window.open(engines[currentEngine] + encodeURIComponent(query), '_blank');
        input.value = '';
    }
    return false;
}

// --- PINNED VAULT FIXED ---
let pins = JSON.parse(localStorage.getItem('0warn_pins')) || [];

function loadPins() {
    const leftGrid = document.getElementById('pinned-grid-left');
    const rightGrid = document.getElementById('pinned-grid-right');
    const mobileGrid = document.getElementById('pinned-grid-mobile');
    const isSmallScreen = window.innerWidth <= 1100;
    const pinCount = isSmallScreen ? 15 : 16;

    const render = (container, startIdx, count) => {
        if (!container) return;
        container.innerHTML = '';
        for (let i = 0; i < count; i++) {
            const idx = startIdx + i;
            const pin = pins[idx];
            const slot = document.createElement('div');
            
            if (pin) {
                slot.className = 'pin-slot';
                slot.innerHTML = `
                    <a href="${pin.url}" target="_blank" style="text-decoration:none; display:flex; flex-direction:column; align-items:center; width:100%; height:100%; justify-content:center;">
                        <img src="https://www.google.com/s2/favicons?domain=${pin.url}&sz=32" alt="icon">
                        <span>${pin.title}</span>
                    </a>
                    <div class="delete-pin" onclick="deletePin(${idx}, event)"><i class="fas fa-times"></i></div>
                `;
            } else {
                slot.className = 'pin-slot empty';
                slot.innerHTML = `<i class="fas fa-plus" style="opacity:0.2"></i>`;
                slot.onclick = openPinModal; // WHOLE SLOT IS CLICKABLE
            }
            container.appendChild(slot);
        }
    };

    render(leftGrid, 0, pinCount);
    if (!isSmallScreen) {
        render(rightGrid, 16, pinCount);
    } else if (rightGrid) {
        rightGrid.innerHTML = ''; // Ensure right grid is empty on small screens
    }
    render(mobileGrid, 0, 15);
}

// Add event listener for resize to re-render pins
window.addEventListener('resize', loadPins);

window.openPinModal = function() {
    const modal = document.getElementById('pin-modal');
    modal.style.display = 'flex';
    setTimeout(() => modal.classList.add('active'), 10);
};

window.closePinModal = function() {
    const modal = document.getElementById('pin-modal');
    modal.classList.remove('active');
    setTimeout(() => {
        modal.style.display = 'none';
        document.getElementById('pin-title').value = '';
        document.getElementById('pin-url').value = '';
    }, 300);
};

window.savePin = function() {
    const title = document.getElementById('pin-title').value.trim();
    let url = document.getElementById('pin-url').value.trim();
    
    if (!title || !url) return;
    if (!url.startsWith('http')) url = 'https://' + url;
    
    if (pins.length < 32) {
        pins.push({ title, url });
        localStorage.setItem('0warn_pins', JSON.stringify(pins));
        loadPins();
        closePinModal();
    }
};

window.deletePin = function(index, e) {
    if(e) e.stopPropagation();
    pins.splice(index, 1);
    localStorage.setItem('0warn_pins', JSON.stringify(pins));
    loadPins();
};
