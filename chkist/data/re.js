window.CHECKLIST_RE = [
  {
    id: "re_phase1", icon: "fas fa-tools", label: "PHASE 1: Environment Setup & Target Identification", severity: "info",
    children: [
      { id: "re1_lab", label: "Analysis Laboratory Setup", children: [
        { id: "re1_vm", label: "Setup isolated VMs — clean snapshots, network isolation, shared folders disabled" },
        { id: "re1_windows", label: "Windows analysis VM — multiple versions (Win7-11), debugging tools, analysis utilities" },
        { id: "re1_linux", label: "Linux analysis VM — multiple distros, GDB, radare2, ELF analysis tools" },
        { id: "re1_macos", label: "macOS analysis VM — Xcode tools, lldb, Mach-O analysis, iOS simulator" },
        { id: "re1_mobile", label: "Mobile analysis environment — Android emulator, iOS simulator, Frida, Objection" },
      ]},
      { id: "re1_tools", label: "Tool Suite Preparation", children: [
        { id: "re1_disasm", label: "Disassemblers — IDA Pro, Ghidra, Binary Ninja, radare2, Hopper" },
        { id: "re1_debug", label: "Debuggers — x64dbg/IDA debugger, GDB (pwndbg/gef), WinDbg, lldb" },
        { id: "re1_dynamic", label: "Dynamic analysis — Process Monitor, Process Explorer, API Monitor, strace, ltrace" },
        { id: "re1_hex", label: "Hex editors — 010 Editor, HxD, hexyl, for binary structure analysis" },
        { id: "re1_python", label: "Python environment — capstone, keystone, unicorn, angr, pwntools, frida-tools" },
      ]},
      { id: "re1_target", label: "Target File Identification", children: [
        { id: "re1_hash", label: "Calculate file hashes — MD5, SHA1, SHA256, for identification and verification" },
        { id: "re1_magic", label: "Identify file type — magic bytes, file command, Detect It Easy, PEiD" },
        { id: "re1_arch", label: "Determine architecture — x86, x64, ARM, ARM64, MIPS, endianness" },
        { id: "re1_format", label: "Identify file format — PE, ELF, Mach-O, .NET, Java/.dex, WebAssembly, script" },
        { id: "re1_size", label: "Note file size — compare with expected, unusually large/small, packed indicator" },
      ]}
    ]
  },
  {
    id: "re_phase2", icon: "fas fa-file-archive", label: "PHASE 2: Packing, Obfuscation & Initial Analysis", severity: "high",
    children: [
      { id: "re2_entropy", label: "Entropy & Packing Analysis", children: [
        { id: "re2_entropy_calc", label: "Calculate entropy — per-section entropy, high entropy indicates packing/encryption" },
        { id: "re2_packer_id", label: "Identify packer — UPX, ASPack, Themida, VMProtect, MPRESS, custom packer" },
        { id: "re2_section_analysis", label: "Analyze PE/ELF sections — names, sizes, characteristics, unusual sections" },
        { id: "re2_overlay", label: "Check for overlay data — appended data, additional payloads, resource sections" },
      ]},
      { id: "re2_unpack", label: "Unpacking & Depacking", children: [
        { id: "re2_auto_unpack", label: "Automated unpacking — UPX -d, Unpacker tools, generic unpackers" },
        { id: "re2_manual_unpack", label: "Manual unpacking — OEP finding, IAT reconstruction, dump and fix" },
        { id: "re2_memory_dump", label: "Memory dumping — Scylla, Process Dump, manual memory extraction at OEP" },
        { id: "re2_iat_rebuild", label: "Rebuild import table — IAT finding, API resolution, import reconstruction" },
        { id: "re2_vm_unpack", label: "VM-protected unpacking — VMProtect, Themida, custom VM analysis" },
      ]},
      { id: "re2_obfuscation", label: "Obfuscation Analysis", children: [
        { id: "re2_cfg_flatten", label: "Control flow flattening — identify flattened CFG, deobfuscation strategies" },
        { id: "re2_string_enc", label: "String encryption — identify encrypted strings, decryption routine, automatic extraction" },
        { id: "re2_anti_re", label: "Anti-reversing techniques — debugger detection, VM detection, timing checks, integrity checks" },
        { id: "re2_code_obfuscation", label: "Code obfuscation — dead code insertion, instruction substitution, opaque predicates" },
        { id: "re2_api_evasion", label: "API obfuscation — API hashing, indirect calls, dynamic resolution, syscalls" },
      ]},
      { id: "re2_quick_analysis", label: "Quick Initial Analysis", children: [
        { id: "re2_strings", label: "Extract strings — ASCII, Unicode, encoded strings, interesting patterns" },
        { id: "re2_imports", label: "Analyze imports — imported functions, DLLs, capabilities inference" },
        { id: "re2_exports", label: "Analyze exports — exported functions, entry points, DLL interfaces" },
        { id: "re2_resources", label: "Analyze resources — embedded files, icons, manifests, version info" },
        { id: "re2_signatures", label: "Check digital signatures — valid, expired, revoked, self-signed, unsigned" },
      ]}
    ]
  },
  {
    id: "re_phase3", icon: "fas fa-microscope", label: "PHASE 3: Static Analysis & Code Understanding", severity: "critical",
    children: [
      { id: "re3_cfg", label: "Control Flow & Program Structure", children: [
        { id: "re3_cfg_graph", label: "Build control flow graph — function-level, program-level, identify key paths" },
        { id: "re3_functions", label: "Identify functions — entry point, library functions, user-defined, compiler-generated" },
        { id: "re3_xref", label: "Analyze cross-references — code and data xrefs, function call relationships" },
        { id: "re3_call_graph", label: "Build call graph — function hierarchy, call tree, dependencies" },
        { id: "re3_dead_code", label: "Identify dead code — unreachable functions, dead paths, junk code" },
      ]},
      { id: "re3_data_struct", label: "Data Structure & Type Analysis", children: [
        { id: "re3_structs", label: "Identify structures — member types, offsets, nested structures, structure reconstruction" },
        { id: "re3_arrays", label: "Analyze arrays — bounds, element types, access patterns, buffer sizes" },
        { id: "re3_pointers", label: "Analyze pointers — types, dereferencing, arithmetic, function pointers" },
        { id: "re3_globals", label: "Analyze global variables — data section, constants, configuration data" },
        { id: "re3_stack", label: "Analyze stack frames — local variables, saved registers, prologue/epilogue" },
        { id: "re3_vtable", label: "Identify virtual tables — C++ classes, virtual functions, RTTI, type info" },
      ]},
      { id: "re3_crypto_id", label: "Cryptographic Algorithm Identification", children: [
        { id: "re3_algo_id", label: "Identify algorithms — AES, DES, RSA, SHA, MD5, ChaCha20, custom crypto" },
        { id: "re3_constants", label: "Recognize constants — magic numbers, S-boxes, IVs, round constants" },
        { id: "re3_key_sched", label: "Analyze key schedule — key expansion, round key generation, key derivation" },
        { id: "re3_custom_crypto", label: "Identify custom cryptography — proprietary algorithms, weaknesses, patterns" },
        { id: "re3_encoding", label: "Identify encoding schemes — Base64, hex, XOR, ROT, custom encoding" },
      ]},
      { id: "re3_api_deep", label: "API & Library Deep Analysis", children: [
        { id: "re3_import_deep", label: "Deep import analysis — imported functions categorized by capability" },
        { id: "re3_dynamic_api", label: "Dynamic API resolution — GetProcAddress, LoadLibrary, API hashing, hash tables" },
        { id: "re3_third_party", label: "Identify third-party libraries — OpenSSL, libcurl, zlib, JSON libraries" },
        { id: "re3_runtime", label: "Identify runtime libraries — MSVCRT, libc, compiler runtime, language runtime" },
      ]}
    ]
  },
  {
    id: "re_phase4", icon: "fas fa-bug", label: "PHASE 4: Dynamic Analysis & Interactive Debugging", severity: "critical",
    children: [
      { id: "re4_debug", label: "Interactive Debugging", children: [
        { id: "re4_bp", label: "Set breakpoints — software, hardware, memory, conditional, trace breakpoints" },
        { id: "re4_step", label: "Step through code — step into, step over, step out, run to cursor" },
        { id: "re4_regs", label: "Monitor registers — general purpose, flags, instruction pointer, stack pointer" },
        { id: "re4_mem_inspect", label: "Inspect memory — read/write memory, memory maps, search for patterns" },
        { id: "re4_patch", label: "Runtime patching — modify instructions, change data, bypass checks, force branches" },
        { id: "re4_trace", label: "Trace execution — instruction trace, API call trace, data flow trace" },
      ]},
      { id: "re4_behavior", label: "Behavioral Analysis", children: [
        { id: "re4_proc_mon", label: "Process monitoring — Process Monitor, file system, registry, network activity" },
        { id: "re4_api_mon", label: "API monitoring — API call logging, parameter tracking, return value analysis" },
        { id: "re4_network_mon", label: "Network monitoring — Wireshark, TCPView, DNS queries, HTTP requests" },
        { id: "re4_file_activity", label: "File system activity — file creation, modification, deletion, encryption" },
        { id: "re4_registry_activity", label: "Registry activity — key creation, modification, persistence mechanisms" },
      ]},
      { id: "re4_memory", label: "Memory Analysis & Extraction", children: [
        { id: "re4_heap", label: "Heap analysis — allocations, structures, decrypted data, strings" },
        { id: "re4_stack_mem", label: "Stack analysis — local variables, return addresses, function arguments" },
        { id: "re4_decrypted", label: "Extract decrypted data — runtime strings, keys, configuration, decrypted payloads" },
        { id: "re4_injected", label: "Detect injected code — process injection, DLL injection, shellcode in memory" },
        { id: "re4_dump_payload", label: "Dump decrypted payloads — staged malware, dropped files, extracted resources" },
      ]},
      { id: "re4_anti_debug", label: "Anti-Debugging Bypass", children: [
        { id: "re4_isdebuggerpresent", label: "Bypass IsDebuggerPresent — PEB manipulation, patching, hooking" },
        { id: "re4_ntglobalflag", label: "Bypass NtGlobalFlag — PEB patching, flag clearing" },
        { id: "re4_timing", label: "Bypass timing checks — RDTSC, GetTickCount, QueryPerformanceCounter hooking" },
        { id: "re4_vm_detect", label: "Bypass VM detection — MAC address, registry, CPU features, driver checks" },
        { id: "re4_integrity", label: "Bypass integrity checks — checksum bypass, hash check bypass, self-modification" },
      ]}
    ]
  },
  {
    id: "re_phase5", icon: "fas fa-bomb", label: "PHASE 5: Vulnerability Research & Exploit Development", severity: "critical",
    children: [
      { id: "re5_overflow", label: "Buffer Overflow Analysis", children: [
        { id: "re5_stack_bof", label: "Stack buffer overflow — buffer to return address, EIP/RIP control, shellcode execution" },
        { id: "re5_heap_bof", label: "Heap buffer overflow — chunk metadata corruption, unlink attacks, fastbin attacks" },
        { id: "re5_integer", label: "Integer overflow — signedness issues, wraparound, truncation, size calculation" },
        { id: "re5_format_str", label: "Format string vulnerability — %n write, arbitrary read/write, info leak" },
        { id: "re5_off_by_one", label: "Off-by-one — null byte overflow, one-byte overwrite, heap metadata corruption" },
      ]},
      { id: "re5_memory_corr", label: "Memory Corruption & Advanced Bugs", children: [
        { id: "re5_uaf", label: "Use-after-free — freed memory reuse, vtable hijacking, type confusion" },
        { id: "re5_double_free", label: "Double free — multiple free on same pointer, heap corruption" },
        { id: "re5_race", label: "Race conditions — TOCTOU, lock-free bugs, concurrent access vulnerabilities" },
        { id: "re5_type_confusion", label: "Type confusion — incorrect type casting, vtable corruption, object reuse" },
        { id: "re5_oob", label: "Out-of-bounds — read/write OOB, array index manipulation, heap overflow" },
      ]},
      { id: "re5_bypass", label: "Mitigation Bypass", children: [
        { id: "re5_aslr", label: "ASLR bypass — info leaks, partial overwrites, brute-force, BROP" },
        { id: "re5_dep_nx", label: "DEP/NX bypass — ROP, ret2libc, JIT spraying, return-oriented programming" },
        { id: "re5_canary", label: "Stack canary bypass — overwrite, leak, brute-force, thread-local storage" },
        { id: "re5_cfg_cet", label: "CFG/CET bypass — Control Flow Guard, Shadow Stack, indirect call hijacking" },
        { id: "re5_rop", label: "ROP chain construction — gadget finding, chain building, ropgadget, ROPGadget" },
      ]},
      { id: "re5_fuzzing", label: "Fuzzing for Vulnerability Discovery", children: [
        { id: "re5_afl", label: "AFL++ fuzzing — instrumented binary, corpus seed, dictionary, distributed fuzzing" },
        { id: "re5_libfuzzer", label: "libFuzzer — in-process fuzzing, sanitizer integration, coverage-guided" },
        { id: "re5_boofuzz", label: "Boofuzz — network protocol fuzzing, stateful fuzzing, custom protocols" },
        { id: "re5_crash_triage", label: "Crash triage — deduplication, classification, root cause analysis, exploitability" },
      ]}
    ]
  },
  {
    id: "re_phase6", icon: "fas fa-network-wired", label: "PHASE 6: Network Protocol & Communication Reverse Engineering", severity: "high",
    children: [
      { id: "re6_protocol", label: "Protocol Reverse Engineering", children: [
        { id: "re6_capture", label: "Capture network traffic — Wireshark, tcpdump, proxy, man-in-the-middle" },
        { id: "re6_dissect", label: "Dissect protocol — message format, field identification, structure analysis" },
        { id: "re6_state_machine", label: "Reconstruct state machine — protocol states, transitions, handshake, session management" },
        { id: "re6_crypto_proto", label: "Analyze protocol cryptography — encryption, authentication, key exchange, certificates" },
      ]},
      { id: "re6_api_re", label: "API & Service Reverse Engineering", children: [
        { id: "re6_api_enum", label: "Enumerate API endpoints — URL patterns, HTTP methods, parameters, authentication" },
        { id: "re6_api_auth", label: "Analyze API authentication — tokens, signatures, OAuth, custom auth" },
        { id: "re6_api_proto", label: "Analyze API protocol — REST, GraphQL, gRPC, SOAP, custom protocols" },
        { id: "re6_api_fuzz", label: "Fuzz API endpoints — parameter manipulation, injection, boundary testing" },
      ]},
      { id: "re6_custom_protocol", label: "Custom/Binary Protocol Analysis", children: [
        { id: "re6_binary_proto", label: "Analyze binary protocol — message framing, header structure, payload format" },
        { id: "re6_proto_crypto", label: "Analyze custom crypto — encryption algorithm, key derivation, authentication" },
        { id: "re6_proto_replay", label: "Test protocol replay — message replay, modification, injection" },
      ]}
    ]
  },
  {
    id: "re_phase7", icon: "fas fa-mobile-alt", label: "PHASE 7: Mobile, IoT & Embedded Reverse Engineering", severity: "high",
    children: [
      { id: "re7_android", label: "Android Application RE", children: [
        { id: "re7_apk_decompile", label: "Decompile APK — JADX, apktool, dex2jar, smali analysis" },
        { id: "re7_native_lib", label: "Analyze native libraries — .so files, JNI, ARM/ARM64, NEON instructions" },
        { id: "re7_frida", label: "Frida instrumentation — hooking, tracing, bypassing, dynamic analysis" },
        { id: "re7_android_crypto", label: "Analyze Android crypto — KeyStore, SharedPreferences, encrypted storage" },
      ]},
      { id: "re7_ios", label: "iOS Application RE", children: [
        { id: "re7_ipa_extract", label: "Extract IPA — decryption, class-dump, Hopper/IDA analysis" },
        { id: "re7_objc", label: "Analyze Objective-C — method lists, class structures, message sending" },
        { id: "re7_swift", label: "Analyze Swift — mangling, type metadata, protocol conformance" },
        { id: "re7_ios_frida", label: "Frida on iOS — hooking, tracing, jailbreak detection bypass" },
      ]},
      { id: "re7_iot_embedded", label: "IoT & Embedded RE", children: [
        { id: "re7_firmware_extract", label: "Extract firmware — binwalk, firmware-mod-kit, squashfs, JFFS2" },
        { id: "re7_arch", label: "Analyze embedded architecture — MIPS, ARM, PowerPC, RISC-V, endianness" },
        { id: "re7_rtos", label: "Analyze RTOS — FreeRTOS, VxWorks, ThreadX, task scheduling, IPC" },
        { id: "re7_hardware", label: "Hardware interface analysis — UART, JTAG, SPI, I2C, debug ports" },
      ]}
    ]
  },
  {
    id: "re_phase8", icon: "fas fa-file-alt", label: "PHASE 8: Documentation, Reporting & Knowledge Management", severity: "info",
    children: [
      { id: "re8_report", label: "Analysis Documentation", children: [
        { id: "re8_summary", label: "Write analysis summary — binary type, purpose, architecture, key findings" },
        { id: "re8_structure", label: "Document structure — functions, data structures, control flow, key algorithms" },
        { id: "re8_crypto_findings", label: "Document cryptography — algorithms identified, keys found, weaknesses" },
        { id: "re8_vuln_findings", label: "Document vulnerabilities — bugs found, exploitability, impact, PoC" },
        { id: "re8_ioc", label: "Document IOCs — network indicators, file indicators, behavior patterns" },
      ]},
      { id: "re8_database", label: "Analysis Database Management", children: [
        { id: "re8_renamed", label: "Document renamed functions — all renamed and typed functions, rationale" },
        { id: "re8_idb_export", label: "Export analysis database — IDB, Ghidra project, annotated binary, sharing" },
        { id: "re8_signatures", label: "Create signatures — FLIRT signatures, function matching, library identification" },
        { id: "re8_notes", label: "Maintain analysis notes — observations, hypotheses, dead ends, breakthroughs" },
      ]},
      { id: "re8_knowledge", label: "Knowledge Management", children: [
        { id: "re8_techniques", label: "Document techniques — reversing techniques used, tools, workflows" },
        { id: "re8_patterns", label: "Document patterns — common patterns, anti-patterns, compiler artifacts" },
        { id: "re8_reusable", label: "Create reusable scripts — IDAPython, Ghidra scripts, radare2 scripts, automation" },
        { id: "re8_learnings", label: "Capture learnings — new techniques, tool discoveries, methodology improvements" },
      ]}
    ]
  }
];
