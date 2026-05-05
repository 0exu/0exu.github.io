window.CHECKLIST_RE = [
  {
    id: "re_phase1", icon: "fas fa-tools", label: "PHASE 1: Environment Setup & File Identification", severity: "info",
    children: [
      {
        id: "re1_env", label: "Analysis Environment", children: [
          { id: "re1_tools", label: "Tool Suite — Ghidra, IDA Pro, Binary Ninja, radare2, x64dbg" },
          { id: "re1_vm", label: "Isolated VM — Clean snapshot, network isolation" },
          { id: "re1_python", label: "Python Environment — capstone, keystone, unicorn, angr" },
          { id: "re1_scripting", label: "Scripting — IDAPython, Ghidra scripts, radare2 scripts" },
          { id: "re1_reference", label: "Reference Materials — Architecture manuals, ABI docs" },
        ]
      },
      {
        id: "re1_file_type", label: "File Type & Format", children: [
          { id: "re1_magic", label: "Magic Bytes — File signature identification" },
          { id: "re1_file_cmd", label: "file Command — Basic type and architecture detection" },
          { id: "re1_die", label: "Detect It Easy — Compiler, packer, language identification" },
          { id: "re1_pe", label: "PE File — Windows executable structure analysis" },
          { id: "re1_elf", label: "ELF File — Linux executable structure analysis" },
          { id: "re1_macho", label: "Mach-O — macOS executable structure" },
          { id: "re1_dotnet", label: ".NET Assembly — CIL/MSIL, metadata, manifest" },
          { id: "re1_java", label: "Java/Android — .class, .dex, .jar, .apk structure" },
          { id: "re1_wasm", label: "WebAssembly — .wasm structure and decompilation" },
        ]
      },
      {
        id: "re1_entropy", label: "Entropy & Packing", children: [
          { id: "re1_entropy_calc", label: "Entropy Calculation — Per-section for packing/encryption" },
          { id: "re1_packer_id", label: "Packer ID — UPX, ASPack, Themida, VMProtect" },
          { id: "re1_stripped", label: "Stripped Binary — Missing symbols, debugging info" },
          { id: "re1_obfuscation", label: "Obfuscation — Control flow flattening, string encryption" },
        ]
      }
    ]
  },
  {
    id: "re_phase2", icon: "fas fa-microscope", label: "PHASE 2: Static Code Analysis", severity: "high",
    children: [
      {
        id: "re2_cfg", label: "Control Flow & Structure", children: [
          { id: "re2_cfg_graph", label: "Control Flow Graph — Function and program-level CFG" },
          { id: "re2_functions", label: "Function Identification — Entry point, library, user-defined" },
          { id: "re2_xref", label: "Cross-Reference — Code and data references between functions" },
          { id: "re2_call_graph", label: "Call Graph — Function call hierarchy and dependencies" },
          { id: "re2_strings", label: "String Analysis — All strings, encoding, usage location" },
          { id: "re2_loops", label: "Loop Analysis — Structures, iterations, termination" },
          { id: "re2_switch", label: "Switch Statements — Jump tables, case analysis" },
        ]
      },
      {
        id: "re2_data_struct", label: "Data Structure & Type Analysis", children: [
          { id: "re2_structs", label: "Structure Identification — Member types, offsets" },
          { id: "re2_arrays", label: "Array Analysis — Bounds, element types, access patterns" },
          { id: "re2_pointers", label: "Pointer Analysis — Types, dereferencing, arithmetic" },
          { id: "re2_globals", label: "Global Variables — Data, constants, configuration" },
          { id: "re2_stack", label: "Stack Frame — Local variables, saved registers, prologue/epilogue" },
          { id: "re2_types", label: "Type Reconstruction — High-level types from assembly" },
          { id: "re2_vtable", label: "Virtual Table — C++ class structures, virtual functions" },
        ]
      },
      {
        id: "re2_crypto", label: "Cryptographic Algorithm Identification", children: [
          { id: "re2_crypto_id", label: "Algorithm ID — AES, DES, RSA, SHA, MD5, custom" },
          { id: "re2_constants", label: "Constant Recognition — Magic numbers, S-boxes, IVs" },
          { id: "re2_key_sched", label: "Key Schedule — Key expansion, round key generation" },
          { id: "re2_custom_crypto", label: "Custom Cryptography — Proprietary algorithms, weaknesses" },
          { id: "re2_encoding", label: "Encoding — Base64, hex, XOR, ROT, custom" },
        ]
      },
      {
        id: "re2_api", label: "API & Library Analysis", children: [
          { id: "re2_imports", label: "Import Analysis — Imported functions, DLLs, shared libraries" },
          { id: "re2_exports", label: "Export Analysis — Exported functions (DLL interfaces)" },
          { id: "re2_dynamic_api", label: "Dynamic API Resolution — GetProcAddress, LoadLibrary, hashing" },
          { id: "re2_third_party", label: "Third-Party Libraries — OpenSSL, libcurl, zlib identification" },
          { id: "re2_stdlib", label: "Standard Library — libc, msvcrt, compiler runtime functions" },
        ]
      }
    ]
  },
  {
    id: "re_phase3", icon: "fas fa-bug", label: "PHASE 3: Dynamic Analysis & Debugging", severity: "high",
    children: [
      {
        id: "re3_debug", label: "Interactive Debugging", children: [
          { id: "re3_x64dbg", label: "x64dbg — Step-through, breakpoints, memory inspection" },
          { id: "re3_gdb", label: "GDB — pwndbg, gef for Linux binaries" },
          { id: "re3_cond_bp", label: "Conditional Breakpoints — Break on specific conditions" },
          { id: "re3_hw_bp", label: "Hardware Breakpoints — Unremovable breakpoints" },
          { id: "re3_mem_bp", label: "Memory Breakpoints — Access/write/execute breakpoints" },
          { id: "re3_patch", label: "Code Patching — Modify instructions at runtime" },
        ]
      },
      {
        id: "re3_memory", label: "Memory Analysis", children: [
          { id: "re3_heap", label: "Heap Analysis — Allocations, structures, decrypted data" },
          { id: "re3_stack_mem", label: "Stack Analysis — Local variables, return addresses" },
          { id: "re3_strings_mem", label: "Runtime Strings — Decoded/decrypted strings in memory" },
          { id: "re3_code_inject", label: "Injected Code — Runtime code injection detection" },
          { id: "re3_shellcode", label: "Shellcode Extraction — From memory, emulation" },
        ]
      },
      {
        id: "re3_fuzzing", label: "Fuzzing & Vulnerability Discovery", children: [
          { id: "re3_fuzz_input", label: "Input Fuzzing — AFL++, libFuzzer for crash discovery" },
          { id: "re3_fuzz_coverage", label: "Coverage Analysis — Code coverage during fuzzing" },
          { id: "re3_fuzz_crash", label: "Crash Analysis — Triage, deduplication, root cause" },
          { id: "re3_fuzz_sanitizer", label: "Sanitizers — ASan, UBSan for bug detection" },
        ]
      }
    ]
  },
  {
    id: "re_phase4", icon: "fas fa-bomb", label: "PHASE 4: Vulnerability Research & Exploit Development", severity: "critical",
    children: [
      {
        id: "re4_overflow", label: "Buffer Overflow Analysis", children: [
          { id: "re4_stack_bof", label: "Stack Buffer Overflow — Buffer to return address overwrite" },
          { id: "re4_heap_bof", label: "Heap Buffer Overflow — Chunk metadata, unlink attacks" },
          { id: "re4_integer", label: "Integer Overflow — Signedness, wraparound, truncation" },
          { id: "re4_format_str", label: "Format String — %n write, arbitrary read, info leak" },
          { id: "re4_off_by_one", label: "Off-by-One — Null byte overflow, one-byte overwrite" },
        ]
      },
      {
        id: "re4_uaf", label: "Use-After-Free & Memory Corruption", children: [
          { id: "re4_uaf_detect", label: "UAF Detection — Freed memory reuse patterns" },
          { id: "re4_double_free", label: "Double Free — Multiple free on same pointer" },
          { id: "re4_heap_spray", label: "Heap Spraying — Control freed memory content" },
          { id: "re4_type_confusion", label: "Type Confusion — Incorrect type casting exploitation" },
        ]
      },
      {
        id: "re4_bypass", label: "Mitigation Bypass", children: [
          { id: "re4_aslr", label: "ASLR Bypass — Info leaks, partial overwrites, brute-force" },
          { id: "re4_dep_nx", label: "DEP/NX Bypass — ROP, ret2libc, JIT spraying" },
          { id: "re4_stack_canary", label: "Stack Canary Bypass — Overwrite, leak, brute-force" },
          { id: "re4_cfg_cet", label: "CFG/CET Bypass — Control Flow Guard, Shadow Stack bypass" },
          { id: "re4_rop_chain", label: "ROP Chain Construction — Gadget finding, chain building" },
        ]
      }
    ]
  },
  {
    id: "re_phase5", icon: "fas fa-chart-bar", label: "PHASE 5: Documentation & Analysis Report", severity: "info",
    children: [
      {
        id: "re5_report", label: "Analysis Documentation", children: [
          { id: "re5_report_summary", label: "Summary — Binary type, purpose, key findings" },
          { id: "re5_report_structure", label: "Structure — Functions, data structures, control flow" },
          { id: "re5_report_crypto", label: "Cryptography — Algorithms, keys, weaknesses found" },
          { id: "re5_report_vulns", label: "Vulnerabilities — Bugs found, exploitability assessment" },
          { id: "re5_report_notes", label: "Renamed Functions — Document all renamed and typed functions" },
          { id: "re5_report_idb", label: "Database Export — Save annotated IDB/database for future reference" },
        ]
      }
    ]
  }
];
