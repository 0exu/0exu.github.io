// CYBER LAB v3 - MASSIVE TERMINAL UPGRADE
(function() {
    "use strict";

    const START_TIME = Date.now();
    let terminalHistory = [];
    let historyIndex = -1;
    let currentDir = "/root/0warn";

    document.addEventListener('DOMContentLoaded', function() {
        initHUD();
        initPasswordChecker();
        const input = document.getElementById('console-input');
        const body = document.getElementById('terminal-body');
        if(body && input) body.addEventListener('click', () => input.focus());

        // 3D Tilt for cards
        document.querySelectorAll('.fun-card').forEach(card => {
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
    });

    function initHUD() {
        const updateHUD = () => {
            const uptime = Math.floor((Date.now() - START_TIME) / 1000);
            const m = Math.floor(uptime / 60);
            const s = uptime % 60;
            if (document.getElementById('uptime')) document.getElementById('uptime').innerText = `${m}m ${s}s`;
            if (document.getElementById('scr-w')) document.getElementById('scr-w').innerText = `${window.innerWidth}x${window.innerHeight}`;
            if (document.getElementById('ping')) document.getElementById('ping').innerText = `${Math.floor(Math.random() * 8) + 4}ms`;
        };
        setInterval(updateHUD, 1000);
        updateHUD();
    }

    function print(text, color = "#00ffaa", delay = 0) {
        const output = document.getElementById('console-output');
        if(!output) return;
        const p = document.createElement('p');
        p.style.color = color;
        p.style.marginBottom = "8px";
        p.innerHTML = text;
        if (delay > 0) {
            setTimeout(() => { output.appendChild(p); output.scrollTop = output.scrollHeight; }, delay);
        } else {
            output.appendChild(p);
            output.scrollTop = output.scrollHeight;
        }
    }

    window.handleTerminalSubmit = function(event) {
        if (event) { event.preventDefault(); event.stopPropagation(); }
        const input = document.getElementById('console-input');
        const output = document.getElementById('console-output');
        const val = input.value.trim();
        if (!val) return false;

        terminalHistory.unshift(val);
        const parts = val.split(/\s+/);
        const cmd = parts[0].toLowerCase();
        const args = parts.slice(1);
        
        print(`root@0warn:${currentDir}# ${val}`, "#fff");

        switch(cmd) {
            case 'help':
                print("--- [ 0warn_sh v3.0 Help ] ---", "#0ff");
                print("SYS  : neofetch, clear, uptime, date, uname, whoami, exit");
                print("NET  : ping, ip, nmap, nslookup, traffic, wifi, traceroute");
                print("FILE : ls, cd, cat, pwd, mkdir, rm, touch");
                print("CYBER: scan, hack, decrypt, firewall, ssh, overload, ddos");
                print("FUN  : matrix, joke, fortune, quote, weather, secret");
                print("UTIL : history, json, base64, crypto, social, calc");
                break;

            case 'neofetch':
                print("<pre style='color:#f0f'>   _Warn_   OS: 0warnOS 3.0 (Rolling)\n  ( o.o )   Host: CyberLab-Grid-Node\n   > ^ <    Kernel: 6.1.0-custom-x86_64\n            Uptime: " + Math.floor((Date.now() - START_TIME)/1000) + "s\n            Shell: 0warn-bash\n            Resolution: " + window.innerWidth + "x" + window.innerHeight + "\n            Theme: Liquid Glass 3D</pre>");
                break;

            case 'ls':
                print("drwxr-xr-x  bin", "#55f");
                print("drwxr-xr-x  logs", "#55f");
                print("-rw-r--r--  manifest.json", "#0ff");
                print("-rw-r--r--  vault_key.enc", "#f00");
                print("-rwxr-xr-x  exploit.py", "#0f0");
                break;

            case 'pwd': print(currentDir); break;
            case 'cd': 
                if(!args[0] || args[0] === "~") currentDir = "/root/0warn";
                else if(args[0] === "..") currentDir = "/root";
                else print(`err: directory not found: ${args[0]}`, "#f44");
                break;

            case 'cat':
                if(args[0] === "manifest.json") print('{"version": "3.0.0", "author": "0warn", "status": "experimental"}', "#fff");
                else if(args[0]) print(`err: permission denied for ${args[0]}`, "#f44");
                else print("usage: cat <filename>", "#888");
                break;

            case 'nmap':
                print("Starting Nmap 7.93 ( https://nmap.org ) at " + new Date().toISOString(), "#ff0");
                print("Nmap scan report for 127.0.0.1", "#ff0", 500);
                print("PORT     STATE SERVICE", "#ff0", 1000);
                print("22/tcp   open  ssh", "#0f0", 1200);
                print("80/tcp   open  http", "#0f0", 1400);
                print("443/tcp  open  https", "#0f0", 1600);
                break;

            case 'ping':
                print(`PING ${args[0] || '127.0.0.1'} (127.0.0.1) 56(84) bytes of data.`);
                for(let i=1; i<=4; i++) print(`64 bytes from ${args[0] || '127.0.0.1'}: icmp_seq=${i} ttl=64 time=${(Math.random()*2).toFixed(3)} ms`, "#00ffaa", i*300);
                break;

            case 'hack':
                print("INITIATING EXPLOIT SEQUENCE...", "#f00");
                print("[####------] 40% - INJECTING PAYLOAD", "#f00", 500);
                print("[########--] 80% - BYPASSING KERNEL", "#f00", 1000);
                print("[##########] 100% - ACCESS_GRANTED", "#0f0", 1500);
                break;

            case 'decrypt':
                print("SEARCHING FOR CIPHER KEYS...", "#ff0");
                setTimeout(() => print("DECRYPTED_VAL: 'Keep Securing the Future'", "#0f0"), 1000);
                break;

            case 'matrix':
                print("SYSTEM OVERRIDE DETECTED", "#0f0");
                for(let i=0; i<10; i++) print("010110101100101011010101101010110101", "#0f0", i*100);
                break;

            case 'weather':
                print("Location: Cyber_Lab_Grid", "#0ff");
                print("Status: STORM_LEVEL_4 (Packet Rain)", "#fff");
                print("Temp: 42°C (CPU Core)", "#f44");
                break;

            case 'quote':
                const quotes = [
                    "One person's 'crazy' is another person's 'reality'.",
                    "The quieter you become, the more you are able to hear.",
                    "Privacy is not an option, and it shouldn't be the price we accept for just getting on the Internet."
                ];
                print(`"${quotes[Math.floor(Math.random() * quotes.length)]}"`, "#f0f");
                break;

            case 'calc':
                try { print(`${args.join(' ')} = ${eval(args.join(' '))}`, "#fff"); }
                catch(e) { print("err: invalid expression", "#f44"); }
                break;

            case 'social':
            case 'socials':
                print("CHANNELS_OPEN:", "#0ff");
                print("- GitHub: <a href='https://github.com/0warn' target='_blank' style='color:#0f0'>github.com/0warn</a>");
                print("- Lab: <a href='#' style='color:#0f0'>0warn.github.io/funthing</a>");
                break;

            case 'ip':
                print("ADDR_LOCAL: 127.0.0.1");
                (async () => {
                    try {
                        const r = await fetch('https://api.ipify.org?format=json');
                        const d = await r.json();
                        print(`ADDR_EXTERN: ${d.ip}`, "#0ff");
                    } catch(e) { print("ADDR_EXTERN: [REDACTED]", "#f44"); }
                })();
                break;

            case 'clear': output.innerHTML = ''; break;
            case 'whoami': print("operator_0warn"); break;
            case 'date': print(new Date().toString()); break;
            case 'exit': print("LOGOUT...", "#f00"); setTimeout(() => window.location.href = '../', 800); break;
            default: print(`err: command not found: '${cmd}'`, "#f44");
        }

        input.value = '';
        historyIndex = -1;
        return false;
    };

    document.addEventListener('keydown', (e) => {
        const input = document.getElementById('console-input');
        if (!input || document.activeElement !== input) return;
        if (e.key === 'ArrowUp') {
            if (historyIndex < terminalHistory.length - 1) { historyIndex++; input.value = terminalHistory[historyIndex]; }
            e.preventDefault();
        } else if (e.key === 'ArrowDown') {
            if (historyIndex > 0) { historyIndex--; input.value = terminalHistory[historyIndex]; }
            else { historyIndex = -1; input.value = ''; }
            e.preventDefault();
        }
    });

    // PASSWORD & TOOLS
    function initPasswordChecker() {
        const p = document.getElementById('pwd-input');
        const b = document.getElementById('pwd-strength-bar');
        const f = document.getElementById('pwd-feedback');
        if (!p || !b || !f) return;
        p.addEventListener('input', () => {
            const v = p.value;
            if (!v) { b.className = ''; f.innerText = 'Strength: --'; return; }
            let s = 0; if (v.length > 8) s++; if (/[A-Z]/.test(v) && /[0-9]/.test(v)) s++; if (/[^A-Za-z0-9]/.test(v)) s++;
            b.className = (s <= 1) ? 'weak' : (s === 2) ? 'medium' : 'strong';
            f.innerText = (s <= 1) ? 'VULNERABLE' : (s === 2) ? 'MODERATE' : 'SECURE';
        });
    }

    window.copyToClipboard = (id, btn) => {
        const el = document.getElementById(id);
        if (!el || !el.value) return;
        navigator.clipboard.writeText(el.value).then(() => {
            const old = btn.innerHTML; btn.innerHTML = '<i class="fas fa-check"></i>';
            setTimeout(() => btn.innerHTML = old, 2000);
        });
    };

    window.togglePasswordVisibility = () => {
        const i = document.getElementById('pwd-input');
        const t = document.getElementById('pass-toggle');
        if (i && t) {
            if (i.type === "password") { i.type = "text"; t.innerHTML = '<i class="fas fa-eye-slash"></i>'; }
            else { i.type = "password"; t.innerHTML = '<i class="fas fa-eye"></i>'; }
        }
    };

    window.cipher = (t) => {
        const i = document.getElementById('crypto-input');
        const v = i.value.trim(); if (!v) return;
        try {
            let r = '';
            if (t === 'b64-enc') r = btoa(unescape(encodeURIComponent(v)));
            else if (t === 'b64-dec') r = decodeURIComponent(escape(atob(v)));
            else if (t === 'uri-enc') r = encodeURIComponent(v);
            else if (t === 'uri-dec') r = decodeURIComponent(v);
            else if (t === 'rev') r = v.split('').reverse().join('');
            i.value = r;
        } catch(e) { alert('CIPHER_ERROR'); }
    };

    window.formatJSON = (m) => {
        const i = document.getElementById('json-input');
        if (!i || !i.value.trim()) return;
        try { const o = JSON.parse(i.value); i.value = (m === 'minify') ? JSON.stringify(o) : JSON.stringify(o, null, 4); }
        catch(e) { alert('JSON_ERROR'); }
    };

    window.generatePass = () => {
        const c = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#$%^&*";
        let r = ""; for (let i = 0; i < 16; i++) r += c.charAt(Math.floor(Math.random() * c.length));
        const p = document.getElementById('pwd-input');
        if (p) { p.value = r; p.dispatchEvent(new Event('input')); }
    };

})();
