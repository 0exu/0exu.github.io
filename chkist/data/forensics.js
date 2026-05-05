window.CHECKLIST_FORENSICS = [
  {
    id: "df_phase1", icon: "fas fa-box-open", label: "PHASE 1: Scene Security & Evidence Collection", severity: "info",
    children: [
      {
        id: "df1_scene", label: "Scene Documentation & Preservation", children: [
          { id: "df_scene_photo", label: "Scene Photography — Overall and detailed photos of evidence" },
          { id: "df_scene_sketch", label: "Scene Sketch — Diagram of device placement and connections" },
          { id: "df_scene_notes", label: "Scene Notes — Detailed notes of observations and actions" },
          { id: "df_scene_chain", label: "Chain of Custody — Documentation of evidence handling" },
          { id: "df_scene_securing", label: "Scene Security — Restrict access to the investigation area" },
        ]
      },
      {
        id: "df1_evidence", label: "Evidence Identification & Collection", children: [
          { id: "df_evidence_device", label: "Device Identification — Computers, phones, drives, USB devices" },
          { id: "df_evidence_volatile", label: "Volatile Evidence — RAM, network connections, running processes" },
          { id: "df_evidence_cloud", label: "Cloud Evidence — Cloud storage, email, SaaS accounts" },
          { id: "df_evidence_network", label: "Network Evidence — Router logs, firewall logs, PCAP" },
          { id: "df_evidence_physical", label: "Physical Evidence — Notes, documents, storage media" },
        ]
      },
      {
        id: "df1_write_block", label: "Write Protection & Imaging", children: [
          { id: "df_writeblock_hw", label: "Hardware Write-Blockers — Tableau, WiebeTech write-blocker verification" },
          { id: "df_writeblock_sw", label: "Software Write-Blockers — Registry settings, mount options" },
          { id: "df_image_physical", label: "Physical Imaging — Bit-for-bit disk image (FTK, Guymager, dd)" },
          { id: "df_image_logical", label: "Logical Imaging — File-level copy for targeted acquisition" },
          { id: "df_image_verify", label: "Image Verification — Hash verification (MD5, SHA-256)" },
          { id: "df_image_multiple", label: "Multiple Copies — Working copy vs evidence copy separation" },
        ]
      }
    ]
  },
  {
    id: "df_phase2", icon: "fas fa-vial", label: "PHASE 2: Volatile Memory Analysis", severity: "high",
    children: [
      {
        id: "df2_capture", label: "Memory Acquisition", children: [
          { id: "df_capture_win", label: "Windows Memory — WinPMEM, DumpIt, FTK Imager" },
          { id: "df_capture_linux", label: "Linux Memory — LiME, fmem for kernel module acquisition" },
          { id: "df_capture_mac", label: "macOS Memory — OSXPMEM for Mac memory acquisition" },
          { id: "df_capture_verify", label: "Acquisition Verification — Hash of memory dump" },
        ]
      },
      {
        id: "df2_process", label: "Process Analysis", children: [
          { id: "df_proc_list", label: "Process Listing — All running processes (pslist, pstree)" },
          { id: "df_proc_hidden", label: "Hidden Processes — DKOM detection, unlinked processes" },
          { id: "df_proc_cmdline", label: "Command Line — Process command-line arguments" },
          { id: "df_proc_dll", label: "Loaded DLLs — DLLs loaded by each process" },
          { id: "df_proc_handles", label: "Handles — Open handles for files, registry, mutexes" },
          { id: "df_proc_injected", label: "Injected Code — Process injection, hollowing detection" },
        ]
      },
      {
        id: "df2_network", label: "Network Connection Analysis", children: [
          { id: "df_net_conn", label: "Network Connections — Active and historical connections" },
          { id: "df_net_sockets", label: "Socket Analysis — Open sockets, listening ports" },
          { id: "df_net_dns", label: "DNS Cache — Cached DNS entries for resolved domains" },
          { id: "df_net_arp", label: "ARP Cache — ARP table entries" },
        ]
      },
      {
        id: "df2_artifacts", label: "Memory Artifacts", children: [
          { id: "df_artifact_cred", label: "Credentials — Passwords, hashes, tokens in memory" },
          { id: "df_artifact_clipboard", label: "Clipboard Content — Copied text, screenshots" },
          { id: "df_artifact_cmd_history", label: "Command History — PowerShell, cmd.exe command history" },
          { id: "df_artifact_browser", label: "Browser Data — URLs, cookies, passwords in memory" },
          { id: "df_artifact_crypto", label: "Crypto Keys — Encryption keys in memory" },
        ]
      }
    ]
  },
  {
    id: "df_phase3", icon: "fas fa-microscope", label: "PHASE 3: Disk & File System Analysis", severity: "high",
    children: [
      {
        id: "df3_ntfs", label: "NTFS Analysis", children: [
          { id: "df_mft_analysis", label: "MFT Analysis — Master File Table, file records, attributes" },
          { id: "df_usnjrnl", label: "$UsnJrnl — USN Journal for file activity timeline" },
          { id: "df_sdr", label: "$Secure — Security descriptor stream for permissions" },
          { id: "df_logfile", label: "$LogFile — Transaction log for file system changes" },
        ]
      },
      {
        id: "df3_recovery", label: "File Recovery & Carving", children: [
          { id: "df_deleted", label: "Deleted File Recovery — MFT entry analysis, data recovery" },
          { id: "df_carving", label: "File Carving — scalpel, foremost for unallocated space carving" },
          { id: "df_slack", label: "Slack Space — File slack and RAM slack analysis" },
          { id: "df_unallocated", label: "Unallocated Space — Analysis of unallocated disk regions" },
        ]
      },
      {
        id: "df3_partition", label: "Partition & Volume Analysis", children: [
          { id: "df_part_table", label: "Partition Table — MBR, GPT analysis for partition info" },
          { id: "df_part_hidden", label: "Hidden Partitions — Undetected or hidden partition discovery" },
          { id: "df_part_encrypted", label: "Encrypted Volumes — BitLocker, VeraCrypt, FileVault detection" },
          { id: "df_part_vmfs", label: "Virtual Disk — VMDK, VDI, VHDX analysis for VM evidence" },
        ]
      }
    ]
  },
  {
    id: "df_phase4", icon: "fas fa-clipboard-list", label: "PHASE 4: OS & User Artifact Analysis", severity: "critical",
    children: [
      {
        id: "df4_execution", label: "Program Execution Artifacts", children: [
          { id: "df_exec_prefetch", label: "Prefetch — Execution timestamps, run count, file path" },
          { id: "df_exec_shimcache", label: "Shimcache/AppCompatCache — Application execution history" },
          { id: "df_exec_amcache", label: "Amcache.hve — Installed programs, execution evidence" },
          { id: "df_exec_userassist", label: "UserAssist — GUI program execution tracking" },
          { id: "df_exec_mru", label: "MRU Lists — Most Recently Used files and programs" },
          { id: "df_exec_bam", label: "Background Activity Monitor — BAM service execution records" },
        ]
      },
      {
        id: "df4_file_access", label: "File Access Evidence", children: [
          { id: "df_access_lnk", label: "LNK Files — Shortcut files for folder/file access history" },
          { id: "df_access_shellbag", label: "ShellBags — Folder browsing history and preferences" },
          { id: "df_access_jump", label: "Jump Lists — Recent file access per application" },
          { id: "df_access_thumbcache", label: "Thumbnail Cache — Image thumbnails for file evidence" },
          { id: "df_access_recent", label: "Recent Files — Windows Recent folder and registry entries" },
        ]
      },
      {
        id: "df4_registry", label: "Registry Analysis", children: [
          { id: "df_reg_system", label: "SYSTEM Hive — Services, drivers, USB devices, timezone" },
          { id: "df_reg_software", label: "SOFTWARE Hive — Installed programs, OS version, patches" },
          { id: "df_reg_ntuser", label: "NTUSER.DAT — User preferences, activity, MRU lists" },
          { id: "df_reg_sam", label: "SAM Hive — Local user accounts, password hashes" },
          { id: "df_reg_security", label: "SECURITY Hive — Logon events, policy settings" },
          { id: "df_reg_usb", label: "USB Device History — Connected USB devices and timestamps" },
        ]
      },
      {
        id: "df4_event_log", label: "Windows Event Log Analysis", children: [
          { id: "df_ev_security", label: "Security Log — Logon events, privilege use, policy changes" },
          { id: "df_ev_system", label: "System Log — Service events, driver loading, system errors" },
          { id: "df_ev_application", label: "Application Log — Application events, crashes, errors" },
          { id: "df_ev_powershell", label: "PowerShell Log — Script execution, module loading" },
          { id: "df_ev_sysmon", label: "Sysmon Log — Process creation, network connections, file events" },
          { id: "df_ev_cleared", label: "Cleared Log Detection — Identify cleared or tampered logs" },
        ]
      },
      {
        id: "df4_persist", label: "Persistence Artifacts", children: [
          { id: "df_persist_run", label: "Run Keys — Registry Run, RunOnce, RunOnceEx" },
          { id: "df_persist_service", label: "Services — Suspicious or unknown Windows services" },
          { id: "df_persist_sched", label: "Scheduled Tasks — Task scheduler entries" },
          { id: "df_persist_startup", label: "Startup Items — Startup folder, WMI events" },
          { id: "df_persist_browser", label: "Browser Extensions — Malicious browser extensions" },
        ]
      }
    ]
  },
  {
    id: "df_phase5", icon: "fas fa-network-wired", label: "PHASE 5: Application & Cloud Forensics", severity: "high",
    children: [
      {
        id: "df5_browser", label: "Browser Forensics", children: [
          { id: "df_browser_history", label: "Browsing History — Visited URLs, search queries" },
          { id: "df_browser_cookies", label: "Cookies — Session cookies, tracking data" },
          { id: "df_browser_downloads", label: "Download History — Downloaded files and locations" },
          { id: "df_browser_saved", label: "Saved Passwords — Stored credentials" },
          { id: "df_browser_cache", label: "Browser Cache — Cached web content" },
          { id: "df_browser_extensions", label: "Extensions — Installed browser extensions" },
        ]
      },
      {
        id: "df5_email", label: "Email Forensics", children: [
          { id: "df_email_header", label: "Header Analysis — Full email header examination" },
          { id: "df_email_body", label: "Body Analysis — Email content, HTML, attachments" },
          { id: "df_email_attach", label: "Attachment Analysis — Malware, suspicious attachments" },
          { id: "df_email_recover", label: "Email Recovery — Deleted email recovery" },
          { id: "df_email_pst", label: "PST/OST Analysis — Outlook data file examination" },
        ]
      },
      {
        id: "df5_comms", label: "Communication Artifacts", children: [
          { id: "df_comms_chat", label: "Chat Logs — Skype, Teams, Slack, Discord evidence" },
          { id: "df_comms_sms", label: "SMS/MMS — Mobile text message extraction" },
          { id: "df_comms_call", label: "Call Logs — Phone call history and recordings" },
          { id: "df_comms_social", label: "Social Media — Social app data and messages" },
        ]
      },
      {
        id: "df5_cloud", label: "Cloud Forensics", children: [
          { id: "df_cloud_onedrive", label: "OneDrive — Local cache, sync history, deleted files" },
          { id: "df_cloud_dropbox", label: "Dropbox — Local cache, sync artifacts" },
          { id: "df_cloud_google", label: "Google Drive — Local sync, cached files" },
          { id: "df_cloud_aws", label: "AWS Artifacts — AWS CLI config, credentials, logs" },
          { id: "df_cloud_azure", label: "Azure Artifacts — Azure CLI, portal activity" },
        ]
      }
    ]
  },
  {
    id: "df_phase6", icon: "fas fa-chart-bar", label: "PHASE 6: Timeline, Reporting & Expert Testimony", severity: "info",
    children: [
      {
        id: "df6_timeline", label: "Timeline Construction", children: [
          { id: "df_timeline_super", label: "Super Timeline — Multi-source event correlation" },
          { id: "df_timeline_log2timeline", label: "log2timeline/Plaso — Automated timeline generation" },
          { id: "df_timeline_correlation", label: "Event Correlation — Link events across multiple sources" },
          { id: "df_timeline_gap", label: "Gap Analysis — Identify missing or tampered time periods" },
        ]
      },
      {
        id: "df6_report", label: "Forensic Reporting", children: [
          { id: "df_report_summary", label: "Executive Summary — Key findings and conclusions" },
          { id: "df_report_methodology", label: "Methodology — Tools, techniques, and procedures used" },
          { id: "df_report_findings", label: "Detailed Findings — Evidence analysis results" },
          { id: "df_report_timeline", label: "Timeline Report — Chronological event presentation" },
          { id: "df_report_appendices", label: "Appendices — Tool output, screenshots, hash values" },
        ]
      },
      {
        id: "df6_testimony", label: "Expert Witness Preparation", children: [
          { id: "df_expert_report", label: "Expert Report — Formal expert witness report" },
          { id: "df_expert_dep", label: "Deposition Preparation — Anticipate opposing counsel questions" },
          { id: "df_expert_court", label: "Court Testimony — Present findings clearly to jury/judge" },
          { id: "df_expert_chain", label: "Chain of Custody Verification — Prove evidence integrity" },
        ]
      }
    ]
  }
];
