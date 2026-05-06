window.CHECKLIST_VULN_RESEARCH = [
  {
    id: "vr_phase1", icon: "fas fa-microscope", label: "PHASE 1: Target Selection, Threat Modeling & Reconnaissance", severity: "info",
    children: [
      { id: "vr1_target", label: "Target Selection & Prioritization", children: [
        { id: "vr1_software", label: "Select target software — widely deployed, security-critical, internet-facing, under-researched" },
        { id: "vr1_impact", label: "Assess impact potential — RCE, privilege escalation, data exposure, denial of service" },
        { id: "vr1_patch_history", label: "Review patch history — vulnerability patterns, recurring classes, rushed fixes" },
        { id: "vr1_attack_surface", label: "Map attack surface — parsers, network services, user input, file formats, protocols" },
        { id: "vr1_competitive", label: "Check existing research — public CVEs, bug bounty reports, previous work, gaps" },
      ]},
      { id: "vr1_threat_model", label: "Threat Modeling & Attack Surface Analysis", children: [
        { id: "vr1_stride", label: "Apply STRIDE model — Spoofing, Tampering, Repudiation, Information Disclosure, DoS, Elevation" },
        { id: "vr1_data_flow", label: "Create data flow diagrams — trust boundaries, data sources, processing, storage, output" },
        { id: "vr1_attack_tree", label: "Build attack trees — potential attack paths, goal decomposition, feasibility assessment" },
        { id: "vr1_assets", label: "Identify valuable assets — sensitive data, cryptographic keys, configuration, credentials" },
        { id: "vr1_trust", label: "Analyze trust boundaries — input validation, authentication, authorization, privilege levels" },
      ]},
      { id: "vr1_env", label: "Research Environment Setup", children: [
        { id: "vr1_vm", label: "Setup isolated VM — snapshot capability, debugging tools, network isolation, clean baseline" },
        { id: "vr1_symbols", label: "Obtain debug symbols — PDB files, DWARF, vendor-provided debugging info, public symbols" },
        { id: "vr1_versions", label: "Collect software versions — current, previous versions, oldest supported, beta/dev builds" },
        { id: "vr1_toolchain", label: "Prepare toolchain — Ghidra, IDA Pro, radare2, GDB, WinDbg, AFL++, libFuzzer" },
        { id: "vr1_source", label: "Obtain source code — open source, leaked source, decompiled code, vendor cooperation" },
      ]}
    ]
  },
  {
    id: "vr_phase2", icon: "fas fa-code", label: "PHASE 2: Source Code Review & Binary Analysis", severity: "critical",
    children: [
      { id: "vr2_source", label: "Source Code Vulnerability Analysis", children: [
        { id: "vr2_dangerous", label: "Identify dangerous functions — strcpy, sprintf, system, eval, exec, gets, scanf" },
        { id: "vr2_input", label: "Analyze input handling — parsing, deserialization, encoding, validation, sanitization" },
        { id: "vr2_memory", label: "Review memory management — malloc/free patterns, use-after-free potential, double free" },
        { id: "vr2_crypto", label: "Review cryptography — weak algorithms, custom crypto, key management, random number generation" },
        { id: "vr2_auth", label: "Review authentication — bypass conditions, race conditions, timing attacks, logic flaws" },
        { id: "vr2_taint", label: "Perform taint analysis — user input to sensitive function flow, data propagation tracking" },
        { id: "vr2_concurrency", label: "Review concurrency — race conditions, deadlocks, TOCTOU, lock ordering, atomicity" },
      ]},
      { id: "vr2_binary", label: "Binary Analysis (No Source Available)", children: [
        { id: "vr2_decompile", label: "Decompile binary — Ghidra/IDA decompilation, pseudo-code review, function identification" },
        { id: "vr2_disasm", label: "Manual disassembly — critical function analysis, control flow review, instruction analysis" },
        { id: "vr2_strings", label: "Extract and analyze strings — error messages, paths, URLs, commands, debug info" },
        { id: "vr2_imports", label: "Analyze imports/exports — API usage, dangerous function calls, library dependencies" },
        { id: "vr2_cfg", label: "Build control flow graph — function relationships, execution paths, decision points" },
        { id: "vr2_data_flow", label: "Analyze data flow — input propagation, transformation, output, storage" },
      ]},
      { id: "vr2_patch_diff", label: "Patch Diffing & Vulnerability Inference", children: [
        { id: "vr2_binary_diff", label: "Binary diffing — bindiff, Diaphora, DarunGrim, compare patched vs. unpatched" },
        { id: "vr2_source_diff", label: "Source diffing — git diff, version control changes, commit messages, PR descriptions" },
        { id: "vr2_patch_analysis", label: "Analyze the patch — what changed, why, what vulnerability it fixes, root cause" },
        { id: "vr2_unpatched", label: "Check for unpatched variants — similar code paths, related functions, incomplete fixes" },
        { id: "vr2_n_day", label: "Develop n-day exploit — understand the fix, develop bypass, test against patched version" },
      ]},
      { id: "vr2_sast", label: "Automated Static Analysis", children: [
        { id: "vr2_sast_tools", label: "Run SAST tools — CodeQL, Semgrep, Coverity, Fortify, custom rules" },
        { id: "vr2_taint_analysis", label: "Automated taint analysis — CodeQL queries, custom taint tracking, data flow analysis" },
        { id: "vr2_pattern", label: "Pattern matching — regex-based scanning, AST analysis, known vulnerability patterns" },
        { id: "vr2_triage", label: "Triage SAST results — false positive elimination, priority ranking, manual verification" },
      ]}
    ]
  },
  {
    id: "vr_phase3", icon: "fas fa-virus", label: "PHASE 3: Fuzzing Strategy, Setup & Execution", severity: "critical",
    children: [
      { id: "vr3_strategy", label: "Fuzzing Strategy & Approach Selection", children: [
        { id: "vr3_approach", label: "Select fuzzing approach — coverage-guided, grammar-based, mutation-based, generation-based" },
        { id: "vr3_target_selection", label: "Select fuzzing targets — parsers, decoders, network services, file handlers, APIs" },
        { id: "vr3_harness", label: "Develop fuzzing harness — input interface, crash detection, coverage collection, reproducibility" },
        { id: "vr3_instrumentation", label: "Instrument target — compile with sanitizers, coverage instrumentation, debug symbols" },
        { id: "vr3_infrastructure", label: "Setup fuzzing infrastructure — distributed fuzzing, cloud instances, resource allocation" },
      ]},
      { id: "vr3_corpus", label: "Corpus Development & Optimization", children: [
        { id: "vr3_seed", label: "Seed corpus — valid inputs, file format samples, protocol examples, real-world data" },
        { id: "vr3_minimize", label: "Minimize corpus — afl-cmin, libFuzzer merge, remove redundant test cases, coverage-based" },
        { id: "vr3_dict", label: "Build dictionary — keywords, magic bytes, protocol markers, file format tokens, structure markers" },
        { id: "vr3_expand", label: "Expand corpus — edge case inputs, boundary values, malformed data, known crash triggers" },
      ]},
      { id: "vr3_execution", label: "Fuzzing Campaign Execution", children: [
        { id: "vr3_run", label: "Run fuzzing campaigns — parallel instances, distributed fuzzing, AFL++, libFuzzer, Honggfuzz" },
        { id: "vr3_monitor", label: "Monitor campaigns — crash rate, coverage growth, unique crashes, queue growth, performance" },
        { id: "vr3_sanitizers", label: "Use sanitizers — ASan (memory), MSan (uninitialized), UBSan (undefined behavior), TSan (thread)" },
        { id: "vr3_crash", label: "Collect crashes — crash dumps, stack traces, input files, reproduction steps, triage" },
        { id: "vr3_adaptive", label: "Adaptive fuzzing — adjust strategy based on results, focus on uncovered areas, custom mutations" },
      ]},
      { id: "vr3_triage", label: "Crash Triage & Analysis", children: [
        { id: "vr3_dedup", label: "Deduplicate crashes — group by stack trace, crash type, root cause, unique crash identification" },
        { id: "vr3_classify", label: "Classify severity — exploitable, potentially exploitable, denial of service, false positive" },
        { id: "vr3_root_cause", label: "Identify root cause — exact code path, trigger condition, memory corruption type, impact" },
        { id: "vr3_exploitability", label: "Assess exploitability — control over IP, data control, code execution potential, reliability" },
        { id: "vr3_minimize_crash", label: "Minimize crash input — reduce to smallest reproducer, isolate trigger, simplify test case" },
      ]}
    ]
  },
  {
    id: "vr_phase4", icon: "fas fa-bug", label: "PHASE 4: Vulnerability Analysis & Proof of Concept Development", severity: "critical",
    children: [
      { id: "vr4_analysis", label: "Deep Vulnerability Analysis", children: [
        { id: "vr4_root_cause", label: "Root cause analysis — exact code path, trigger condition, data flow, memory state" },
        { id: "vr4_reproducible", label: "Create reproducible PoC — minimal input that triggers the vulnerability, deterministic" },
        { id: "vr4_crash_state", label: "Analyze crash state — register values, stack trace, heap layout, memory corruption pattern" },
        { id: "vr4_impact", label: "Determine impact — arbitrary read, arbitrary write, code execution, info leak, DoS" },
        { id: "vr4_conditions", label: "Identify conditions — required state, environment dependencies, timing, race conditions" },
      ]},
      { id: "vr4_overflow", label: "Buffer Overflow Exploitation", children: [
        { id: "vr4_stack_bof", label: "Stack buffer overflow — buffer to return address, EIP/RIP control, shellcode, ROP" },
        { id: "vr4_heap_bof", label: "Heap buffer overflow — chunk metadata, unlink attacks, fastbin, tcache, unsorted bin" },
        { id: "vr4_integer", label: "Integer overflow — signedness, wraparound, truncation, size calculation bypass" },
        { id: "vr4_format_str", label: "Format string — %n write, arbitrary read/write, info leak, GOT overwrite" },
        { id: "vr4_off_by_one", label: "Off-by-one — null byte overflow, one-byte overwrite, heap metadata corruption" },
      ]},
      { id: "vr4_memory", label: "Memory Corruption Exploitation", children: [
        { id: "vr4_uaf", label: "Use-after-free — freed memory reuse, vtable hijacking, type confusion, object reuse" },
        { id: "vr4_double_free", label: "Double free — multiple free, heap corruption, fastbin attack, tcache poisoning" },
        { id: "vr4_race", label: "Race condition — TOCTOU, lock-free bugs, concurrent access, atomicity violation" },
        { id: "vr4_oob", label: "Out-of-bounds — read/write OOB, array index manipulation, heap overflow, stack overflow" },
      ]},
      { id: "vr4_bypass", label: "Mitigation Bypass & Exploit Reliability", children: [
        { id: "vr4_aslr", label: "Bypass ASLR — info leaks, partial overwrites, brute-force, BROP, JIT spray" },
        { id: "vr4_dep", label: "Bypass DEP/NX — ROP chains, ret2libc, JIT spraying, return-oriented programming" },
        { id: "vr4_canary", label: "Bypass stack canary — leak, brute-force, thread-local storage, format string" },
        { id: "vr4_cfg", label: "Bypass CFG/CET — Control Flow Guard, Shadow Stack, indirect call hijacking" },
        { id: "vr4_reliability", label: "Improve exploit reliability — handle edge cases, environmental dependencies, one-shot vs. reliable" },
        { id: "vr4_automation", label: "Automate exploitation — one-click PoC, repeatable exploit, target version handling" },
      ]}
    ]
  },
  {
    id: "vr_phase5", icon: "fas fa-file-medical", label: "PHASE 5: Responsible Disclosure & CVE Process", severity: "high",
    children: [
      { id: "vr5_vendor", label: "Vendor Communication", children: [
        { id: "vr5_contact", label: "Contact vendor — security team, bug bounty program, CERT/CC, security@ email" },
        { id: "vr5_responsiveness", label: "Assess vendor responsiveness — acknowledgment timeline, communication quality, cooperation" },
        { id: "vr5_escalation", label: "Escalate if needed — management contact, public disclosure timeline, CERT coordination" },
        { id: "vr5_negotiate", label: "Negotiate timeline — 90-day standard, extension for complex fixes, coordinated disclosure" },
      ]},
      { id: "vr5_report", label: "Vulnerability Report Preparation", children: [
        { id: "vr5_description", label: "Write vulnerability description — clear, concise, technical detail, impact assessment" },
        { id: "vr5_poc", label: "Prepare PoC — reproducible proof of concept, minimal test case, exploitation demonstration" },
        { id: "vr5_impact", label: "Document impact — severity, affected versions, attack vector, prerequisites, business impact" },
        { id: "vr5_remediation", label: "Provide remediation guidance — recommended fix, workarounds, mitigation strategies" },
        { id: "vr5_timeline", label: "Document timeline — discovery date, vendor notification, fix date, disclosure date" },
      ]},
      { id: "vr5_patch", label: "Patch Testing & Verification", children: [
        { id: "vr5_test_patch", label: "Test vendor patch — verify fix addresses vulnerability, no regression, no bypass" },
        { id: "vr5_bypass_check", label: "Check for bypass — alternative attack paths, incomplete fix, related vulnerabilities" },
        { id: "vr5_regression", label: "Test for regression — functionality impact, performance impact, compatibility" },
        { id: "vr5_feedback", label: "Provide feedback to vendor — patch quality, additional findings, recommendations" },
      ]}
    ]
  },
  {
    id: "vr_phase6", icon: "fas fa-globe", label: "PHASE 6: Public Disclosure & Community Contribution", severity: "high",
    children: [
      { id: "vr6_cve", label: "CVE Assignment & Publication", children: [
        { id: "vr6_request", label: "Request CVE — MITRE CNA, vendor-assigned, GitHub Security Lab, bug bounty platform" },
        { id: "vr6_cvss", label: "Assign CVSS score — base score, temporal, environmental, vector string, justification" },
        { id: "vr6_advisory", label: "Publish security advisory — affected versions, impact, remediation, timeline, credits" },
        { id: "vr6_database", label: "Update vulnerability databases — NVD, CVE Details, Vulners, OpenCVE" },
      ]},
      { id: "vr6_writeup", label: "Technical Writeup & Publication", children: [
        { id: "vr6_blog", label: "Write technical blog post — vulnerability details, exploitation, proof of concept, lessons" },
        { id: "vr6_talk", label: "Prepare conference talk — Black Hat, DEF CON, REcon, technical deep dive" },
        { id: "vr6_video", label: "Create video demonstration — PoC execution, exploitation walkthrough, impact demonstration" },
        { id: "vr6_whitepaper", label: "Write whitepaper — comprehensive analysis, methodology, findings, recommendations" },
      ]},
      { id: "vr6_community", label: "Community Engagement", children: [
        { id: "vr6_tools", label: "Release tools — exploit code (responsible), detection rules, fuzzing harnesses, analysis scripts" },
        { id: "vr6_rules", label: "Publish detection rules — Sigma, YARA, Snort, Suricata, SIEM rules for the vulnerability" },
        { id: "vr6_mitre", label: "Update MITRE ATT&CK — new techniques, CAPEC entries, CWE mappings, knowledge base" },
        { id: "vr6_mentorship", label: "Mentor others — share methodology, help new researchers, answer questions" },
      ]}
    ]
  },
  {
    id: "vr_phase7", icon: "fas fa-project-diagram", label: "PHASE 7: Exploit Framework Development & Weaponization Research", severity: "critical",
    children: [
      { id: "vr7_framework", label: "Exploit Framework Development", children: [
        { id: "vr7_metasploit", label: "Develop Metasploit module — exploit module, payload compatibility, target selection" },
        { id: "vr7_custom", label: "Develop custom exploit framework — modular design, target support, payload integration" },
        { id: "vr7_poc_framework", label: "Build PoC framework — reproducible, configurable, documentation, testing" },
        { id: "vr7_reliability", label: "Improve exploit reliability — error handling, fallback, environment detection, cleanup" },
      ]},
      { id: "vr7_weaponization", label: "Weaponization Research (Authorized Only)", children: [
        { id: "vr7_delivery", label: "Research delivery mechanisms — exploit chain, social engineering, supply chain, physical" },
        { id: "vr7_chain", label: "Develop exploit chains — multiple vulnerabilities chained, defense bypass, reliable execution" },
        { id: "vr7_evasion", label: "Research detection evasion — signature evasion, behavioral evasion, network evasion" },
        { id: "vr7_opsec", label: "Assess operational security — attribution prevention, detection avoidance, cleanup" },
      ]},
      { id: "vr7_testing", label: "Exploit Testing & Validation", children: [
        { id: "vr7_lab_test", label: "Test in lab environment — controlled testing, multiple configurations, version compatibility" },
        { id: "vr7_evaluate", label: "Evaluate effectiveness — success rate, reliability, detection rate, operational impact" },
        { id: "vr7_document", label: "Document exploit — prerequisites, execution, expected results, limitations, detection" },
      ]}
    ]
  },
  {
    id: "vr_phase8", icon: "fas fa-chart-line", label: "PHASE 8: Research Program Maturity & Continuous Improvement", severity: "info",
    children: [
      { id: "vr8_knowledge", label: "Knowledge Management", children: [
        { id: "vr8_notes", label: "Maintain research notes — observations, hypotheses, techniques, tools, findings" },
        { id: "vr8_database", label: "Build vulnerability database — past findings, patterns, techniques, exploitation methods" },
        { id: "vr8_scripts", label: "Maintain script library — automation, analysis, fuzzing, exploitation, detection" },
        { id: "vr8_templates", label: "Create templates — report templates, PoC templates, disclosure templates" },
      ]},
      { id: "vr8_skill", label: "Skill Development & Research", children: [
        { id: "vr8_new_techniques", label: "Learn new techniques — exploitation methods, analysis tools, fuzzing approaches" },
        { id: "vr8_research", label: "Consume research — papers, blog posts, conference talks, vulnerability disclosures" },
        { id: "vr8_practice", label: "Practice — CTF challenges, exploit development exercises, vulnerable applications" },
        { id: "vr8_collaborate", label: "Collaborate — peer review, joint research, knowledge sharing, mentorship" },
      ]},
      { id: "vr8_program", label: "Research Program Management", children: [
        { id: "vr8_pipeline", label: "Manage research pipeline — target selection, active research, disclosure, publication" },
        { id: "vr8_metrics", label: "Track research metrics — vulnerabilities found, CVEs assigned, impact, recognition" },
        { id: "vr8_roadmap", label: "Plan research roadmap — future targets, skill development, tool development, conferences" },
        { id: "vr8_ethics", label: "Maintain ethical standards — responsible disclosure, legal compliance, professional conduct" },
      ]}
    ]
  }
];
