window.CHECKLIST_CTF = [
  {
    id: "ctf_phase1", icon: "fas fa-tools", label: "PHASE 1: Preparation & Environment Setup", severity: "info",
    children: [
      {
        id: "ctf1_tools", label: "Tool Preparation", children: [
          { id: "ctf_scripting", label: "Pwntools — Rapid exploit scripting framework" },
          { id: "ctf_env", label: "Environment — Docker containers, version management" },
          { id: "ctf_gdb_plugins", label: "GDB Plugins — pwndbg, gef, peda for binary debugging" },
          { id: "ctf_ghidra_ida", label: "Disassemblers — Ghidra, IDA Free for binary analysis" },
          { id: "ctf_cyberchef", label: "CyberChef — Data encoding/decoding, transformation" },
        ]
      },
      {
        id: "ctf1_recon", label: "Challenge Reconnaissance", children: [
          { id: "ctf_recon_service", label: "Service Discovery — Port scanning, service identification" },
          { id: "ctf_recon_files", label: "File Analysis — Downloaded binary/file type identification" },
          { id: "ctf_recon_source", label: "Source Code Review — Provided source code analysis" },
        ]
      }
    ]
  },
  {
    id: "ctf_phase2", icon: "fas fa-laptop-code", label: "PHASE 2: Binary Exploitation (Pwn)", severity: "critical",
    children: [
      {
        id: "ctf2_stack", label: "Stack Exploitation", children: [
          { id: "ctf_stack_basic", label: "Basic Buffer Overflow — Overwrite return address" },
          { id: "ctf_stack_canary", label: "Stack Canary — Canary bypass (leak, overwrite, brute-force)" },
          { id: "ctf_stack_rop", label: "ROP Chains — Return-Oriented Programming for DEP bypass" },
          { id: "ctf_stack_ret2libc", label: "ret2libc — Return to libc functions for code execution" },
          { id: "ctf_stack_srop", label: "SROP — Sigreturn-Oriented Programming" },
          { id: "ctf_stack_ret2dl", label: "ret2dlresolve — Dynamic linker exploitation" },
        ]
      },
      {
        id: "ctf2_heap", label: "Heap Exploitation", children: [
          { id: "ctf_heap_uaf", label: "Use-After-Free — Access freed memory for code execution" },
          { id: "ctf_heap_tcache", label: "Tcache Poisoning — Manipulate tcache entries" },
          { id: "ctf_heap_fastbin", label: "Fastbin Attack — Fastbin double-free, poisoning" },
          { id: "ctf_heap_unsorted", label: "Unsorted Bin Attack — Unsorted bin exploitation" },
          { id: "ctf_heap_house", label: "House of X — House of Spirit, Force, Lore, Orange, etc." },
          { id: "ctf_heap_offbynull", label: "Off-by-Null — Null byte overflow on heap" },
        ]
      },
      {
        id: "ctf2_fmt", label: "Format String & Other", children: [
          { id: "ctf_fmt_read", label: "Format String Read — Arbitrary memory read via %x, %p" },
          { id: "ctf_fmt_write", label: "Format String Write — Arbitrary write via %n" },
          { id: "ctf_fmt_leak", label: "Stack/Canary Leak — Information disclosure via format strings" },
          { id: "ctf_int_overflow", label: "Integer Overflow — Wraparound for buffer overflow" },
        ]
      },
      {
        id: "ctf2_kernel", label: "Kernel Exploitation", children: [
          { id: "ctf_kernel_uaf", label: "Kernel UAF — Use-after-free in kernel space" },
          { id: "ctf_kernel_smep", label: "SMEP/SMAP Bypass — Kernel protection bypass" },
          { id: "ctf_kernel_ret2usr", label: "ret2usr — Return to user-space from kernel" },
          { id: "ctf_kernel_rop", label: "Kernel ROP — ROP chains in kernel space" },
        ]
      },
      {
        id: "ctf2_sandbox", label: "Sandbox Escape", children: [
          { id: "ctf_seccomp", label: "Seccomp Bypass — Syscall filter evasion" },
          { id: "ctf_docker_escape", label: "Docker Escape — Container breakout techniques" },
          { id: "ctf_qemu_escape", label: "QEMU Escape — Virtual machine escape" },
        ]
      }
    ]
  },
  {
    id: "ctf_phase3", icon: "fas fa-cogs", label: "PHASE 3: Reverse Engineering", severity: "high",
    children: [
      {
        id: "ctf3_static", label: "Static Reverse Engineering", children: [
          { id: "ctf3_strings", label: "String Analysis — Identify key strings, flags, passwords" },
          { id: "ctf3_cfg", label: "Control Flow Graph — Function flow and logic analysis" },
          { id: "ctf3_crypto", label: "Crypto Recognition — Identify encryption/hashing algorithms" },
          { id: "ctf3_unpack", label: "Unpacking — Manual and automated unpacking" },
          { id: "ctf3_vm_reverse", label: "Custom VM Reversing — Virtual machine instruction set" },
          { id: "ctf3_obfuscated", label: "Obfuscated Code — De-obfuscation and simplification" },
        ]
      },
      {
        id: "ctf3_dynamic", label: "Dynamic Reverse Engineering", children: [
          { id: "ctf3_debug", label: "Debugging — Step-through execution, breakpoint analysis" },
          { id: "ctf3_patch", label: "Binary Patching — Modify binary to bypass checks" },
          { id: "ctf3_hook", label: "Function Hooking — Frida, LD_PRELOAD for runtime hooking" },
        ]
      },
      {
        id: "ctf3_automated", label: "Automated Analysis", children: [
          { id: "ctf3_angr", label: "Symbolic Execution — Angr for path exploration" },
          { id: "ctf3_z3", label: "Constraint Solving — Z3/SMT solver for constraint satisfaction" },
          { id: "ctf3_manticore", label: "Manticore — Symbolic execution engine" },
        ]
      }
    ]
  },
  {
    id: "ctf_phase4", icon: "fas fa-key", label: "PHASE 4: Cryptography", severity: "high",
    children: [
      {
        id: "ctf4_rsa", label: "RSA Attacks", children: [
          { id: "ctf4_rsa_wiener", label: "Wiener's Attack — Small private exponent" },
          { id: "ctf4_rsa_copper", label: "Coppersmith's Attack — Small roots of polynomial" },
          { id: "ctf4_rsa_broadcast", label: "Broadcast Attack — Same message, multiple keys" },
          { id: "ctf4_rsa_common", label: "Common Modulus — Shared modulus, different exponents" },
          { id: "ctf4_rsa_fermat", label: "Fermat's Factorization — Close prime factors" },
          { id: "ctf4_rsa_padding", label: "Padding Oracle — RSA padding oracle attacks" },
        ]
      },
      {
        id: "ctf4_aes", label: "AES & Symmetric Crypto", children: [
          { id: "ctf4_aes_padding", label: "Padding Oracle — CBC padding oracle for decryption" },
          { id: "ctf4_aes_bitflip", label: "Bit-Flipping — CBC ciphertext bit manipulation" },
          { id: "ctf4_aes_ecb", label: "ECB Mode — Pattern analysis, byte-at-a-time decryption" },
          { id: "ctf4_aes_gcm", label: "GCM Issues — Nonce reuse, tag forgery" },
          { id: "ctf4_aes_ctr", label: "CTR Mode — Nonce reuse, keystream recovery" },
        ]
      },
      {
        id: "ctf4_ecc", label: "Elliptic Curve Cryptography", children: [
          { id: "ctf4_ecc_nonce", label: "ECDSA Nonce Reuse — Private key recovery" },
          { id: "ctf4_ecc_invalid", label: "Invalid Curve Attack — Weak curve exploitation" },
          { id: "ctf4_ecc_scha", label: "Smart's Attack — Anomalous curve DLP" },
        ]
      },
      {
        id: "ctf4_lattice", label: "Lattice-Based Attacks", children: [
          { id: "ctf4_lattice_lll", label: "LLL Algorithm — Lattice reduction for cryptanalysis" },
          { id: "ctf4_lattice_hidden", label: "Hidden Number Problem — Partial nonce recovery" },
          { id: "ctf4_lattice_cvp", label: "Closest Vector Problem — CVP for crypto attacks" },
        ]
      },
      {
        id: "ctf4_misc", label: "Miscellaneous Crypto", children: [
          { id: "ctf4_hash", label: "Hash Attacks — Length extension, collision, preimage" },
          { id: "ctf4_xor", label: "XOR Analysis — Single/multi-byte XOR, known plaintext" },
          { id: "ctf4_classical", label: "Classical Ciphers — Caesar, Vigenere, substitution" },
          { id: "ctf4_rng", label: "Weak RNG — PRNG prediction, state recovery" },
        ]
      }
    ]
  },
  {
    id: "ctf_phase5", icon: "fas fa-user-secret", label: "PHASE 5: Forensics & Steganography", severity: "low",
    children: [
      {
        id: "ctf5_memory", label: "Memory Forensics", children: [
          { id: "ctf5_volatility", label: "Volatility 3 — Memory analysis, process listing, plugins" },
          { id: "ctf5_strings_mem", label: "String Extraction — Flag search in memory dump" },
          { id: "ctf5_dump_proc", label: "Process Dump — Extract files from memory" },
        ]
      },
      {
        id: "ctf5_pcap", label: "Network Forensics (PCAP)", children: [
          { id: "ctf5_pcap_analyze", label: "PCAP Analysis — Wireshark/tshark for traffic inspection" },
          { id: "ctf5_pcar_extract", label: "File Extraction — Extract files from PCAP streams" },
          { id: "ctf5_pcap_http", label: "HTTP Analysis — Reconstruct HTTP sessions, file downloads" },
          { id: "ctf5_pcar_dns", label: "DNS Analysis — DNS queries, tunneling, exfiltration" },
        ]
      },
      {
        id: "ctf5_stego", label: "Steganography", children: [
          { id: "ctf5_stego_lsb", label: "LSB Steganography — Least significant bit analysis" },
          { id: "ctf5_stego_metadata", label: "Metadata Analysis — EXIF, comments, hidden data" },
          { id: "ctf5_stego_frequency", label: "Frequency Domain — FFT analysis for hidden data" },
          { id: "ctf5_stego_audio", label: "Audio Steganography — Spectrogram analysis, hidden messages" },
          { id: "ctf5_stego_tools", label: "Stego Tools — steghide, zsteg, stegsolve, binwalk" },
        ]
      },
      {
        id: "ctf5_disk", label: "Disk Forensics", children: [
          { id: "ctf5_disk_image", label: "Disk Imaging — dd, FTK Imager for disk analysis" },
          { id: "ctf5_disk_carve", label: "File Carving — scalpel, foremost for file recovery" },
          { id: "ctf5_disk_artifacts", label: "File System Artifacts — MFT, journal, deleted files" },
        ]
      }
    ]
  },
  {
    id: "ctf_phase6", icon: "fas fa-network-wired", label: "PHASE 6: Web Exploitation", severity: "high",
    children: [
      {
        id: "ctf6_web_basic", label: "Basic Web Challenges", children: [
          { id: "ctf6_web_sqli", label: "SQL Injection — Login bypass, data extraction, blind SQLi" },
          { id: "ctf6_web_xss", label: "XSS — Reflected, stored, DOM-based flag exfiltration" },
          { id: "ctf6_web_ssrf", label: "SSRF — Internal service access, file:// protocol" },
          { id: "ctf6_web_lfi", label: "LFI/RFI — File inclusion for flag reading" },
          { id: "ctf6_web_upload", label: "File Upload — Webshell, bypass filters" },
        ]
      },
      {
        id: "ctf6_web_adv", label: "Advanced Web Challenges", children: [
          { id: "ctf6_web_ssti", label: "SSTI — Template injection for RCE" },
          { id: "ctf6_web_deserialize", label: "Deserialization — PHP, Python, Java object injection" },
          { id: "ctf6_web_xxe", label: "XXE — File disclosure, SSRF via XML" },
          { id: "ctf6_web_jwt", label: "JWT Attacks — alg:none, weak secret, kid injection" },
          { id: "ctf6_web_proto", label: "PHP Deserialization — PHP object injection, __wakeup, __destruct" },
        ]
      }
    ]
  },
  {
    id: "ctf_phase7", icon: "fas fa-flag", label: "PHASE 7: Miscellaneous & OSINT", severity: "low",
    children: [
      {
        id: "ctf7_misc", label: "Miscellaneous Challenges", children: [
          { id: "ctf7_misc_encoding", label: "Encoding — Base64, hex, binary, custom encoding" },
          { id: "ctf7_misc_programming", label: "Programming — Automation challenges, API interaction" },
          { id: "ctf7_misc_quiz", label: "Quiz/Trivia — Security knowledge questions" },
          { id: "ctf7_misc_blockchain", label: "Blockchain — Smart contract analysis, transaction analysis" },
        ]
      },
      {
        id: "ctf7_osint", label: "OSINT Challenges", children: [
          { id: "ctf7_osint_search", label: "Search Engine — Google dorking, advanced search" },
          { id: "ctf7_osint_social", label: "Social Media — Profile analysis, photo analysis" },
          { id: "ctf7_osint_geo", label: "Geolocation — Image location identification" },
          { id: "ctf7_osint_domain", label: "Domain Research — WHOIS, DNS, historical records" },
        ]
      }
    ]
  }
];
