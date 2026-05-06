window.CHECKLIST_VULN_RESEARCH = [
  {
    id: "vr_phase1", icon: "fas fa-microscope", label: "PHASE 1: Target Selection & Reconnaissance", severity: "info",
    children: [
      { id: "vr1_target", label: "Target Selection", children: [
        { id: "vr1_software", label: "Select target software — widely deployed, security-critical, under-researched" },
        { id: "vr1_criticality", label: "Assess impact potential — RCE, privilege escalation, data exposure" },
        { id: "vr1_patch_history", label: "Review patch history — patterns, recurring vulnerability classes" },
        { id: "vr1_attack_surface", label: "Map attack surface — parsers, network services, user input processing" },
        { id: "vr1_competitive", label: "Check existing research — public CVEs, bug bounty reports, previous work" },
      ]},
      { id: "vr1_setup", label: "Research Environment Setup", children: [
        { id: "vr1_vm", label: "Setup isolated VM — snapshot capability, debugging tools, network isolation" },
        { id: "vr1_symbols", label: "Obtain debug symbols — PDB files, DWARF, vendor-provided debugging info" },
        { id: "vr1_versions", label: "Collect software versions — current, previous, oldest supported" },
        { id: "vr1_toolchain", label: "Prepare toolchain — Ghidra, IDA Pro, radare2, GDB, WinDbg" },
      ]}
    ]
  },
  {
    id: "vr_phase2", icon: "fas fa-code", label: "PHASE 2: Source Code Review & Binary Analysis", severity: "critical",
    children: [
      { id: "vr2_source", label: "Source Code Analysis", children: [
        { id: "vr2_dangerous_funcs", label: "Identify dangerous functions — strcpy, sprintf, system, eval, exec" },
        { id: "vr2_input_handling", label: "Analyze input handling — parsing, deserialization, encoding" },
        { id: "vr2_memory_mgmt", label: "Review memory management — malloc/free patterns, use-after-free potential" },
        { id: "vr2_crypto", label: "Review cryptographic implementation — weak algorithms, custom crypto" },
        { id: "vr2_auth", label: "Review authentication logic — bypass conditions, race conditions" },
        { id: "vr2_taint", label: "Perform taint analysis — user input to sensitive function flow" },
      ]},
      { id: "vr2_binary", label: "Binary Analysis (No Source)", children: [
        { id: "vr2_decompile", label: "Decompile binary — Ghidra/IDA decompilation, pseudo-code review" },
        { id: "vr2_disasm", label: "Manual disassembly — critical function analysis, control flow review" },
        { id: "vr2_strings", label: "Extract and analyze strings — error messages, paths, URLs, commands" },
        { id: "vr2_imports", label: "Analyze imports/exports — API usage, dangerous function calls" },
        { id: "vr2_cfg", label: "Build control flow graph — function relationships, execution paths" },
      ]},
      { id: "vr2_patch_diff", label: "Patch Diffing", children: [
        { id: "vr2_patch_binary", label: "Binary diffing — bindiff, Diaphora, DarunGrim for patch comparison" },
        { id: "vr2_patch_source", label: "Source diffing — git diff, version control changes between releases" },
        { id: "vr2_patch_analysis", label: "Analyze patch — what changed, why, what vulnerability it fixes" },
        { id: "vr2_patch_revert", label: "Revert patch — apply old code to new version for exploitation research" },
      ]}
    ]
  },
  {
    id: "vr_phase3", icon: "fas fa-virus", label: "PHASE 3: Fuzzing & Vulnerability Discovery", severity: "critical",
    children: [
      { id: "vr3_fuzzing", label: "Fuzzing Setup", children: [
        { id: "vr3_fuzz_selection", label: "Select fuzzing approach — coverage-guided, grammar-based, mutation-based" },
        { id: "vr3_afl", label: "Configure AFL++ — instrumented binary, corpus seed, dictionary" },
        { id: "vr3_libfuzzer", label: "Configure libFuzzer — in-process fuzzing, sanitizer integration" },
        { id: "vr3_boofuzz", label: "Configure Boofuzz — network protocol fuzzing, stateful fuzzing" },
        { id: "vr3_custom", label: "Develop custom fuzzer — protocol-specific, API-specific, state machine" },
      ]},
      { id: "vr3_corpus", label: "Corpus Development", children: [
        { id: "vr3_corpus_seed", label: "Seed corpus — valid inputs, edge cases, known crash triggers" },
        { id: "vr3_corpus_minimization", label: "Minimize corpus — afl-cmin, remove redundant test cases" },
        { id: "vr3_corpus_dict", label: "Build dictionary — keywords, magic bytes, protocol markers" },
      ]},
      { id: "vr3_execution", label: "Fuzzing Execution", children: [
        { id: "vr3_run", label: "Run fuzzing campaigns — parallel instances, distributed fuzzing" },
        { id: "vr3_monitor", label: "Monitor fuzzing — crash rate, coverage, unique crashes, queue growth" },
        { id: "vr3_triage", label: "Triage crashes — deduplicate, classify severity, identify root cause" },
        { id: "vr3_sanitizers", label: "Use sanitizers — ASan, MSan, UBSan, TSan for enhanced detection" },
      ]}
    ]
  },
  {
    id: "vr_phase4", icon: "fas fa-bug", label: "PHASE 4: Exploit Development & Proof of Concept", severity: "critical",
    children: [
      { id: "vr4_analysis", label: "Vulnerability Analysis", children: [
        { id: "vr4_root_cause", label: "Root cause analysis — exact code path, trigger condition, impact" },
        { id: "vr4_reproducible", label: "Create reproducible PoC — minimal input that triggers the vulnerability" },
        { id: "vr4_crash_analysis", label: "Analyze crash — register state, stack trace, heap layout, ASLR" },
        { id: "vr4_exploitability", label: "Assess exploitability — control over instruction pointer, data, code execution" },
      ]},
      { id: "vr4_exploit", label: "Exploit Development", children: [
        { id: "vr4_exploit_type", label: "Develop exploit — buffer overflow, UAF, type confusion, race condition" },
        { id: "vr4_bypass_aslr", label: "Bypass ASLR — information leak, partial overwrite, brute force" },
        { id: "vr4_bypass_dep", label: "Bypass DEP/NX — ROP chains, JIT spraying, return-to-libc" },
        { id: "vr4_bypass_cfi", label: "Bypass CFI — type confusion, vtable corruption, indirect call hijacking" },
        { id: "vr4_reliability", label: "Improve reliability — handle edge cases, environmental dependencies" },
        { id: "vr4_automation", label: "Automate exploitation — one-click PoC, repeatable exploit" },
      ]}
    ]
  },
  {
    id: "vr_phase5", icon: "fas fa-file-medical", label: "PHASE 5: Disclosure & CVE Assignment", severity: "high",
    children: [
      { id: "vr5_responsible", label: "Responsible Disclosure", children: [
        { id: "vr5_vendor", label: "Contact vendor — security team, bug bounty program, CERT" },
        { id: "vr5_report", label: "Write vulnerability report — description, PoC, impact, remediation" },
        { id: "vr5_timeline", label: "Agree on disclosure timeline — 90-day standard, coordinated release" },
        { id: "vr5_patch_test", label: "Test vendor patch — verify fix, check for bypass, regression testing" },
      ]},
      { id: "vr5_cve", label: "CVE & Publication", children: [
        { id: "vr5_cve_request", label: "Request CVE — MITRE, CNA, vendor-assigned identifier" },
        { id: "vr5_cvss", label: "Assign CVSS score — base, temporal, environmental metrics" },
        { id: "vr5_writeup", label: "Write public disclosure — technical blog post, conference talk" },
        { id: "vr5_advisory", label: "Publish advisory — security notice, affected versions, mitigation" },
      ]}
    ]
  }
];
