window.CHECKLIST_RED = [
  {
    id: "red_phase1", icon: "fas fa-cogs", label: "PHASE 1: Preparation & Weaponization", severity: "info",
    children: [
      {
        id: "red1_infra", label: "Infrastructure Setup", children: [
          { id: "red_c2_setup", label: "C2 Infrastructure — Cobalt Strike, Havoc, Sliver deployment" },
          { id: "red_redirectors", label: "Redirectors — Domain fronting, CDN redirectors, reverse proxies" },
          { id: "red_comms_profile", label: "Communication Profiles — Malleable C2, custom beacon profiles" },
          { id: "red_fallback", label: "Fallback C2 — Secondary communication channels for resilience" },
          { id: "red_opsec", label: "OpSec Review — Infrastructure anonymity, operational security" },
        ]
      },
      {
        id: "red1_weapon", label: "Payload Development & Weaponization", children: [
          { id: "red_pay_custom", label: "Custom Payload — EDR-evasive payload development" },
          { id: "red_pay_shellcode", label: "Shellcode Generation — Custom shellcode with encryption" },
          { id: "red_pay_obfuscate", label: "Obfuscation — String encryption, control flow obfuscation" },
          { id: "red_pay_signing", label: "Code Signing — Certificates for payload trust" },
          { id: "red_macro_doc", label: "Document/LNK Payload — Malicious macros, shortcut exploits" },
          { id: "red_pay_iso", label: "ISO/IMG Payload — Disk image-based initial access" },
        ]
      },
      {
        id: "red1_recon", label: "Target Reconnaissance", children: [
          { id: "red_recon_osint", label: "OSINT Gathering — Employee info, technology stack, infrastructure" },
          { id: "red_recon_email", label: "Email Analysis — Email format, security controls, DKIM/SPF" },
          { id: "red_recon_external", label: "External Attack Surface — Public-facing assets, vulnerabilities" },
          { id: "red_recon_social", label: "Social Engineering Prep — Pretexting, persona development" },
        ]
      }
    ]
  },
  {
    id: "red_phase2", icon: "fas fa-door-open", label: "PHASE 2: Initial Access", severity: "critical",
    children: [
      {
        id: "red2_phishing", label: "Spearphishing & Social Engineering", children: [
          { id: "red_phish_spear", label: "Spearphishing — Targeted emails with malicious attachments/links" },
          { id: "red_phish_pretext", label: "Pretexting — Fabricated scenarios for credential harvesting" },
          { id: "red_phish_clone", label: "Credential Harvesting — Clone login pages, SSO portals" },
          { id: "red_phish_vishing", label: "Vishing — Voice-based social engineering" },
          { id: "red_phish_smishing", label: "Smishing — SMS-based phishing attacks" },
        ]
      },
      {
        id: "red2_exploit", label: "External Exploitation", children: [
          { id: "red_exploit_ext", label: "External-Facing Apps — Exploitation of public web applications" },
          { id: "red_exploit_vpn", label: "VPN Exploitation — Vulnerable VPN appliances (Pulse, Fortinet)" },
          { id: "red_exploit_exchange", label: "Exchange Server — ProxyLogon, ProxyShell exploitation" },
          { id: "red_exploit_firewall", label: "Firewall Exploitation — Vulnerable firewall/edge devices" },
          { id: "red_exploit_zero_day", label: "Zero-Day Exploitation — Previously unknown vulnerabilities" },
        ]
      },
      {
        id: "red2_physical", label: "Physical Access", children: [
          { id: "red_phys_rfid", label: "RFID Cloning — Badge cloning and duplication" },
          { id: "red_phys_lock", label: "Lockpicking — Physical lock bypass" },
          { id: "red_phys_hid", label: "HID Attacks — USB rubber ducky, BadUSB, Bash Bunny" },
          { id: "red_phys_tailgate", label: "Tailgating — Unauthorized physical entry" },
          { id: "red_phys_drop", label: "USB Drop — Infected USB drives in public areas" },
        ]
      },
      {
        id: "red2_cloud", label: "Cloud Initial Access", children: [
          { id: "red_cloud_misconfig", label: "Misconfigured Identity — Overly permissive IAM roles" },
          { id: "red_cloud_bucket", label: "Cloud Buckets — Public S3, Azure Blob, GCP storage" },
          { id: "red_cloud_phish", label: "Cloud Phishing — OAuth consent phishing for cloud accounts" },
          { id: "red_cloud_key", label: "Exposed Keys — API keys, secrets in public repositories" },
        ]
      }
    ]
  },
  {
    id: "red_phase3", icon: "fas fa-flag-checkered", label: "PHASE 3: Post-Exploitation", severity: "critical",
    children: [
      {
        id: "red3_persist", label: "Persistence Mechanisms", children: [
          { id: "red_persist_wmi", label: "WMI Persistence — WMI event subscription persistence" },
          { id: "red_persist_com", label: "COM Hijacking — COM object hijacking for persistence" },
          { id: "red_persist_sched", label: "Scheduled Tasks — Task scheduler persistence" },
          { id: "red_persist_service", label: "Service Creation — Malicious Windows service" },
          { id: "red_persist_startup", label: "Startup Folder — Startup script/link persistence" },
          { id: "red_persist_registry", label: "Registry Run Keys — Registry-based persistence" },
          { id: "red_persist_dll", label: "DLL Side-Loading — DLL hijacking for persistence" },
        ]
      },
      {
        id: "red3_privesc", label: "Privilege Escalation", children: [
          { id: "red_priv_token", label: "Token Impersonation — SeImpersonatePrivilege, Potato attacks" },
          { id: "red_priv_kernel", label: "Kernel Exploits — Unpatched kernel vulnerabilities" },
          { id: "red_priv_uac", label: "UAC Bypass — AutoElevate, COM interface bypass" },
          { id: "red_priv_service", label: "Service Exploitation — Writable service paths, unquoted" },
          { id: "red_priv_scheduled", label: "Scheduled Task — Writable task binary exploitation" },
          { id: "red_priv_always_install", label: "AlwaysInstallElevated — MSI installer privilege escalation" },
        ]
      },
      {
        id: "red3_evade", label: "EDR Evasion", children: [
          { id: "red_evade_unhook", label: "EDR Unhooking — Restore original NTDLL functions" },
          { id: "red_evade_syscall", label: "Syscall Obfuscation — Direct/indirect syscalls, Hell's Gate" },
          { id: "red_evade_amsi", label: "AMSI Bypass — Anti-malware scan interface bypass" },
          { id: "red_evade_etw", label: "ETW Patch — Event Tracing for Windows patching" },
          { id: "red_evade_inject", label: "Process Injection — Thread hijacking, PPID spoofing" },
          { id: "red_evade_sleep", label: "Sleep Obfuscation — Encrypted sleep, inline sleep patching" },
        ]
      },
      {
        id: "red3_creds", label: "Credential Access", children: [
          { id: "red_creds_lsass", label: "LSASS Dump — Mimikatz, ProcDump for credential extraction" },
          { id: "red_creds_dpapi", label: "DPAPI — Data Protection API credential extraction" },
          { id: "red_creds_browser", label: "Browser Credentials — Chrome, Firefox, Edge credential theft" },
          { id: "red_creds_sam", label: "SAM Database — Local credential hash extraction" },
          { id: "red_creds_ntds", label: "NTDS.dit — Domain controller credential extraction" },
          { id: "red_creds_keylog", label: "Keylogging — Keystroke capture for credential harvesting" },
        ]
      }
    ]
  },
  {
    id: "red_phase4", icon: "fas fa-arrows-alt-h", label: "PHASE 4: Lateral Movement & AD Exploitation", severity: "high",
    children: [
      {
        id: "red4_lateral", label: "Lateral Movement Techniques", children: [
          { id: "red_lat_pth", label: "Pass-the-Hash — NTLM hash reuse for authentication" },
          { id: "red_lat_ptt", label: "Pass-the-Ticket — Kerberos ticket reuse" },
          { id: "red_lat_psexec", label: "PsExec — Remote service execution" },
          { id: "red_lat_wmi", label: "WMI — Remote WMI execution" },
          { id: "red_lat_rdp", label: "RDP — Remote desktop lateral movement" },
          { id: "red_lat_winrm", label: "WinRM — Windows Remote Management execution" },
          { id: "red_lat_smb", label: "SMB — Remote file execution via SMB" },
          { id: "red_lat_dcom", label: "DCOM — Distributed COM for remote execution" },
        ]
      },
      {
        id: "red4_pivot", label: "Network Pivoting & Tunneling", children: [
          { id: "red_pivot_chisel", label: "Chisel — Fast TCP/UDP tunnel with SOCKS proxy" },
          { id: "red_pivot_ligolo", label: "Ligolo-ng — Advanced tunneling and pivoting" },
          { id: "red_pivot_ssh", label: "SSH Tunneling — Dynamic port forwarding" },
          { id: "red_pivot_socks", label: "SOCKS Proxy — Proxychains for traffic routing" },
          { id: "red_pivot_multi_hop", label: "Multi-hop Pivoting — Chained pivots through multiple hosts" },
        ]
      },
      {
        id: "red4_ad_abuse", label: "Active Directory Abuse", children: [
          { id: "red_ad_gpo", label: "GPO Abuse — Group Policy modification for privilege escalation" },
          { id: "red_ad_acl", label: "ACL Abuse — Access control list modification" },
          { id: "red_ad_delegation", label: "Delegation Abuse — Unconstrained/constrained/RBC delegation" },
          { id: "red_ad_adcs", label: "ADCS Abuse — Certificate Services exploitation" },
          { id: "red_ad_dcsync", label: "DSync — Credential replication via DRSR protocol" },
          { id: "red_ad_golden", label: "Golden Ticket — Forge TGT with krbtgt hash" },
          { id: "red_ad_silver", label: "Silver Ticket — Forge TGS for specific services" },
        ]
      }
    ]
  },
  {
    id: "red_phase5", icon: "fas fa-flag-checkered", label: "PHASE 5: Actions on Objectives", severity: "high",
    children: [
      {
        id: "red5_exfil", label: "Data Exfiltration", children: [
          { id: "red_exfil_covert", label: "Covert Channels — DNS, ICMP, HTTPS for data exfiltration" },
          { id: "red_exfil_stego", label: "Steganography — Hide data in images, audio files" },
          { id: "red_exfil_cloud", label: "Cloud Exfiltration — Transfer data via cloud storage" },
          { id: "red_exfil_size", label: "Data Volume Assessment — Estimate exfiltration time and size" },
        ]
      },
      {
        id: "red5_impact", label: "Impact Simulation", children: [
          { id: "red_impact_ransom", label: "Ransomware Simulation — Encryption simulation without damage" },
          { id: "red_impact_wiper", label: "Wiper Simulation — Data destruction simulation" },
          { id: "red_impact_dos", label: "DoS Simulation — Service disruption simulation" },
          { id: "red_impact_deface", label: "Defacement Simulation — Web page modification" },
        ]
      },
      {
        id: "red5_cleanup", label: "Artifact Cleanup", children: [
          { id: "red_clean_logs", label: "Log Cleanup — Event log, application log modification" },
          { id: "red_clean_files", label: "File Cleanup — Remove dropped tools, scripts, payloads" },
          { id: "red_clean_accounts", label: "Account Cleanup — Remove created accounts and access" },
          { id: "red_clean_persist", label: "Persistence Cleanup — Remove persistence mechanisms" },
          { id: "red_clean_registry", label: "Registry Cleanup — Remove registry modifications" },
          { id: "red_clean_network", label: "Network Cleanup — Close tunnels, remove redirects" },
        ]
      }
    ]
  },
  {
    id: "red_phase6", icon: "fas fa-clipboard-list", label: "PHASE 6: Reporting & Debrief", severity: "info",
    children: [
      {
        id: "red6_report", label: "Red Team Report", children: [
          { id: "red6_exec_summary", label: "Executive Summary — Campaign overview, key findings" },
          { id: "red6_timeline", label: "Attack Timeline — Chronological attack narrative" },
          { id: "red6_ttps", label: "TTP Documentation — Techniques used with MITRE mapping" },
          { id: "red6_detection_gaps", label: "Detection Gaps — What was and wasn't detected by blue team" },
          { id: "red6_recommendations", label: "Recommendations — Specific improvements for detection and prevention" },
        ]
      }
    ]
  }
];
