// Power Vault - Professional Power-User Logic
const tools = [
  {
    name: "defender",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/BASH_LOGO_WITHOUT_BACKGROUND.png/250px-BASH_LOGO_WITHOUT_BACKGROUND.png",
    desc: "Advanced system hardening and security auditing script for Linux environments.",
    category: "security",
    gitlab: true,
  },
  {
    name: "harekrishna",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/BASH_LOGO_WITHOUT_BACKGROUND.png/250px-BASH_LOGO_WITHOUT_BACKGROUND.png",
    desc: "Secure automation engine for devops workflows and repetitive task management.",
    category: "bash",
    gitlab: true,
  },
  {
    name: "mahakal",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/BASH_LOGO_WITHOUT_BACKGROUND.png/250px-BASH_LOGO_WITHOUT_BACKGROUND.png",
    desc: "Comprehensive penetration testing framework for various attack vectors.",
    category: "bash",
    gitlab: true,
  },
  {
    name: "stegdetector",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Python.svg",
    desc: "Steganography analysis tool to detect hidden data in images and files.",
    category: "python",
    gitlab: true,
  },
  {
    name: "once",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Python.svg",
    desc: "A minimalist, high-speed typing performance and accuracy analyzer.",
    category: "python",
    gitlab: true,
  },
  {
    name: "crck",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Python.svg",
    desc: "Multi-threaded cryptographic hash identification and recovery tool.",
    category: "python",
    gitlab: true,
  },
  {
    name: "keyldctor",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Python.svg",
    desc: "Heuristic-based scanner to identify unauthorized input interception.",
    category: "security",
    gitlab: true,
  },
  {
    name: "wscan",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Python.svg",
    desc: "Vulnerability scanner for web applications identifying OWASP Top 10.",
    category: "python",
    gitlab: true,
  },
  {
    name: "genotp",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/C_LANGUAGE_WITHOUT_BACKGROUND.png/250px-C_LANGUAGE_WITHOUT_BACKGROUND.png",
    desc: "Cryptographically secure one-time password generation utility.",
    category: "security",
    gitlab: true,
  },
  {
    name: "dirfuzz",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Python.svg",
    desc: "High-speed web directory and file discovery tool using dictionary attacks.",
    category: "python",
    gitlab: true,
  },
  {
    name: "secfile",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Python.svg",
    desc: "Secure file encryption utility using military-grade AES algorithms.",
    category: "security",
    gitlab: true,
  },
  {
    name: "passcck",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Python.svg",
    desc: "Advanced password entropy analyzer and strength validator.",
    category: "security",
    gitlab: true,
  },
  {
    name: "numinfo",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Python.svg",
    desc: "OSINT tool for gathering detailed information from mobile numbers.",
    category: "python",
    gitlab: true,
  },
  {
    name: "wemine",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Python.svg",
    desc: "Scalable web spider for automated data extraction and site mapping.",
    category: "python",
    gitlab: true,
  },
  {
    name: "wesore",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Python.svg",
    desc: "Advanced search engine scraping tool using custom dork patterns.",
    category: "python",
    gitlab: true,
  },
  {
    name: "0scam-browse",
    img: "../back/js-logo.png",
    desc: "A web-based interface for repository management and browsing.",
    category: "python",
    gitlab: true,
  },
  {
    name: "openeye",
    img: "https://static.vecteezy.com/system/resources/previews/012/697/296/original/3d-golang-programming-language-logo-free-png.png",
    desc: "Fast, concurrent asset discovery tool for large attack surfaces.",
    category: "golang",
    gitlab: true,
  },
  {
    name: "vedhara",
    img: "https://static.vecteezy.com/system/resources/previews/012/697/296/original/3d-golang-programming-language-logo-free-png.png",
    desc: "Next-gen distributed penetration testing orchestration engine.",
    category: "golang",
    gitlab: true,
  },
  {
    name: "procut",
    img: "https://static.vecteezy.com/system/resources/previews/012/697/296/original/3d-golang-programming-language-logo-free-png.png",
    desc: "High-performance string and data processing utility in Go.",
    category: "golang",
    gitlab: true,
  },
  {
    name: "vc0nf",
    img: "../back/vim.png",
    desc: "Optimized Vim configuration for lightning-fast development workflows.",
    category: "vim",
    gitlab: true,
  },
  {
    name: "nvim",
    img: "../back/nvim.png",
    desc: "My personalized, highly-optimized Neovim configuration for maximum productivity.",
    category: "lua",
    gitlab: true,
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const grid = document.getElementById("tools-grid");
  const search = document.getElementById("project-search");
  const pills = document.querySelectorAll(".filter-pill");
  const countEl = document.getElementById("node-count");

  let currentFilter = "all";
  let searchQuery = "";

  function renderTools() {
    grid.innerHTML = "";
    const filtered = tools.filter((t) => {
      let matchesFilter =
        currentFilter === "all" || t.category === currentFilter;

      // GitLab/GitHub Specific Filtering
      if (currentFilter === "gitlab") matchesFilter = t.gitlab;

      const matchesSearch =
        t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.desc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesFilter && matchesSearch;
    });

    if (countEl) countEl.textContent = filtered.length;

    filtered.forEach((t) => {
      const card = document.createElement("div");
      card.className = "tool-card scroll-reveal show";

      const gitlabUrl = `https://gitlab.com/0warn/${t.name}`;

      let actionButtons = "";
      if (t.gitlab) {
        actionButtons = `
                    <a href="${gitlabUrl}" class="action-btn gitlab-btn" target="_blank"><i class="fab fa-gitlab"></i> GITLAB</a>
                    <div class="migration-hint">Primary Repository</div>
                `;
      }

      card.innerHTML = `
                <div class="card-header">
                    <img src="${t.img}" alt="${t.name}">
                    <span class="category-tag">${t.category.toUpperCase()}</span>
                </div>
                <div class="card-body">
                    <h3>${t.name.replace(/-/g, "‑")}</h3>
                    <p class="card-desc">${t.desc}</p>
                </div>
                <div class="card-actions">
                    ${actionButtons}
                    <button onclick="copyClone('${t.name}', this, ${t.gitlab})" class="action-btn btn-clone">CLONE</button>
                </div>
            `;
      grid.appendChild(card);

      // Add 3D Tilt Effect
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        card.style.setProperty("--x", `${x}%`);
        card.style.setProperty("--y", `${y}%`);

        const rotateX = (y - 50) / 15;
        const rotateY = (x - 50) / -15;
        card.style.transform = `translateY(-10px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = `translateY(0) rotateX(0) rotateY(0)`;
      });
    });
  }

  // Event Listeners
  search?.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    renderTools();
  });

  pills.forEach((pill) => {
    pill.addEventListener("click", () => {
      pills.forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");
      currentFilter = pill.dataset.filter;
      renderTools();
    });
  });

  // Hotkeys
  document.addEventListener("keydown", (e) => {
    if (e.key === "/" && document.activeElement !== search) {
      e.preventDefault();
      search?.focus();
    }
  });

  renderTools();
});

// GLOBAL UTILS
window.copyClone = function (repoName, btn, isGitLab) {
  const baseUrl = isGitLab ? "gitlab.com/0warn" : "github.com/0warn";
  const cmd = `git clone https://${baseUrl}/${repoName}.git`;
  navigator.clipboard.writeText(cmd).then(() => {
    const originalText = btn.innerHTML;
    btn.innerText = "COPIED!";
    btn.style.boxShadow = "var(--shadow-pressed)";
    btn.style.color = "var(--accent-glow)";
    setTimeout(() => {
      btn.innerHTML = originalText;
      btn.style.boxShadow = "";
      btn.style.color = "";
    }, 2000);
  });
};
