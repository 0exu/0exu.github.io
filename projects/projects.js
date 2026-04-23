// Power Vault - Professional Power-User Logic
const tools = [
  {
    name: "defender",
    img: "../back/bash.png",
    desc: "Advanced system hardening and security auditing script for Linux environments.",
    category: "bash",
    gitlab: true,
  },
  {
    name: "pautopsy",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Python.svg",
    desc: "This is an implementation of autopsy in python wrapper that's why it's name i put pautopsy. But the thing is, it's backend is sleuthkit, so, it is just a skin for autopsy gui (java version) for stability & versatile use in daily forensic.",
    category: "python",
    gitlab: true,
  },
  {
    name: "harekrishna",
    img: "../back/bash.png",
    desc: "Secure your network with tor anonymity and mac number randomizer.",
    category: "bash",
    gitlab: true,
  },
  {
    name: "mahakal",
    img: "../back/bash.png",
    desc: "Comprehensive security auditing framework for various environments with post-audit analysis and reconnaissance phases.",
    category: "bash",
    gitlab: true,
  },
  {
    name: "stegdetector",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Python.svg",
    desc: "Steganography analysis tool to detect hidden data in images and files with machine learning.",
    category: "python",
    gitlab: true,
  },
  {
    name: "once",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Python.svg",
    desc: "A gui based recon tool build with python. Now cli avaliable also.",
    category: "python",
    gitlab: true,
  },
  {
    name: "crck",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Python.svg",
    desc: "Multi-threaded cryptographic hash identification & recovery tool.",
    category: "python",
    gitlab: true,
  },
  {
    name: "keyldctor",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Python.svg",
    desc: "Heuristic-based scanner to identify unauthorized input interception in your system by respecting user privacy.",
    category: "python",
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
    category: "C",
    gitlab: true,
  },
  {
    name: "dirfuzz",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Python.svg",
    desc: "High-speed web directory and file discovery tool using dictionary-based checks.",
    category: "python",
    gitlab: true,
  },
  {
    name: "secfile",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Python.svg",
    desc: "Secure file encryption utility using military-grade AES algorithms.",
    category: "python",
    gitlab: true,
  },
  {
    name: "passcck",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Python.svg",
    desc: "Advanced password entropy analyzer and strength validator with havebeenipawned check.",
    category: "python",
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
    desc: "Scalable web spider for automated data extraction and site mapping web-crawler.",
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
    desc: "An extension pack for secure user from scam links and websites.",
    category: "javascript",
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
    desc: "A research on search engine and a restricted search engine not-maintained now.",
    category: "golang",
    gitlab: true,
  },
  {
    name: "procut",
    img: "https://static.vecteezy.com/system/resources/previews/012/697/296/original/3d-golang-programming-language-logo-free-png.png",
    desc: "Fast and simple usage base hash cracker.",
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
  const gitlabBtn = document.getElementById("gitlab-filter");
  const countEl = document.getElementById("node-count");

  let searchQuery = "";

  function renderTools() {
    console.log("Rendering tools, primary repository text should be gone.");
    if (!grid) return;
    grid.innerHTML = "";

    const filtered = tools.filter((t) => {
      // Search Filter
      const matchesSearch =
        t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.desc.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesSearch;
    });

    if (countEl) countEl.textContent = filtered.length;

    filtered.forEach((t) => {
      const card = document.createElement("div");
      card.className = "tool-card show";

      const gitlabUrl = `https://gitlab.com/0warn/${t.name}`;

      let actionButtons = "";
      if (t.gitlab) {
        actionButtons = `
                    <a href="${gitlabUrl}" class="action-btn gitlab-btn" target="_blank"><i class="fab fa-gitlab"></i> GITLAB</a>
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

  gitlabBtn?.addEventListener("click", () => {
    window.open("https://gitlab.com/0warn", "_blank");
  });

  // Hotkeys
  document.addEventListener("keydown", (e) => {
    if (e.key === "/" && document.activeElement !== search) {
      e.preventDefault();
      search?.focus();
    }
  });

  // Initial render
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
