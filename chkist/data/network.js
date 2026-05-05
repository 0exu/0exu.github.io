window.CHECKLIST_NETWORK = [
  {
    id: "net_phase1", icon: "fas fa-network-wired", label: "PHASE 1: Network Discovery & Intelligence Gathering", severity: "info",
    children: [
      {
        id: "net1_scope", label: "Scope & Network Intelligence", children: [
          { id: "net_scope_doc", label: "Scope Document — Approved IP ranges, rules of engagement" },
          { id: "net_ip_range", label: "IP Range Identification — CIDR notation, network boundaries" },
          { id: "net_whois", label: "WHOIS Lookup — Network ownership, ASN, registrar" },
          { id: "net_bgp", label: "BGP Analysis — bgp.he.net for route announcements" },
          { id: "net_topology", label: "Network Topology — Firewall, router, switch placement" },
        ]
      },
      {
        id: "net1_host_disc", label: "Host Discovery", children: [
          { id: "net_icmp_sweep", label: "ICMP Sweep — Ping sweep (nmap -sn)" },
          { id: "net_tcp_sweep", label: "TCP SYN Sweep — Common ports for live host detection" },
          { id: "net_arp_sweep", label: "ARP Sweep — Local network host discovery" },
          { id: "net_udp_sweep", label: "UDP Sweep — UDP port probing for live hosts" },
          { id: "net_broadcast", label: "Broadcast Discovery — NetBIOS, mDNS, LLMNR" },
          { id: "net_passive_disc", label: "Passive Discovery — Network traffic observation" },
        ]
      },
      {
        id: "net1_port_scan", label: "Port Scanning & Service Enumeration", children: [
          { id: "net_tcp_scan", label: "Full TCP Scan — Ports 1-65535 on live hosts" },
          { id: "net_udp_scan", label: "UDP Scan — 53, 67, 68, 69, 123, 161, 445, 500" },
          { id: "net_version_scan", label: "Version Detection — nmap -sV for service versions" },
          { id: "net_script_scan", label: "NSE Script Scan — nmap -sC for default enumeration" },
          { id: "net_aggressive_scan", label: "Aggressive Scan — nmap -A for OS, version, scripts" },
          { id: "net_stealth_scan", label: "Stealth Scan — Fragmented packets, decoys" },
          { id: "net_service_enum", label: "Service Enumeration — SMB, FTP, SSH, SMTP, SNMP" },
        ]
      }
    ]
  },
  {
    id: "net_phase2", icon: "fas fa-wrench", label: "PHASE 2: Service-Level Vulnerability Assessment", severity: "low",
    children: [
      {
        id: "net2_smb", label: "SMB/CIFS Assessment", children: [
          { id: "smb_null_session", label: "Null Session — Anonymous SMB share access" },
          { id: "smb_share_enum", label: "Share Enumeration — List all accessible shares" },
          { id: "smb_share_read", label: "Share Read Access — Sensitive file access" },
          { id: "smb_share_write", label: "Share Write Access — Upload files to writable shares" },
          { id: "smb_version", label: "SMB Version — SMBv1 deprecated, SMBv3 vulns" },
          { id: "smb_signing", label: "SMB Signing — Disabled allows relay attacks" },
          { id: "smb_ms17_010", label: "EternalBlue (MS17-010) — SMBv1 RCE" },
          { id: "smb_enum_users", label: "User Enumeration — RID cycling, enumdomusers" },
          { id: "smb_pass_policy", label: "Password Policy — Extracted via null session" },
          { id: "smb_rpc_enum", label: "RPC Enumeration — Users, groups, shares" },
        ]
      },
      {
        id: "net2_ftp", label: "FTP Assessment", children: [
          { id: "ftp_anonymous", label: "Anonymous Login — Test anonymous access" },
          { id: "ftp_write", label: "Write Access — Upload files to FTP" },
          { id: "ftp_bounce", label: "FTP Bounce — Proxy for port scanning" },
          { id: "ftp_brute", label: "Brute-Force — Common credentials" },
          { id: "ftp_cleartext", label: "Cleartext Credentials — FTP transmits in cleartext" },
        ]
      },
      {
        id: "net2_ssh", label: "SSH Assessment", children: [
          { id: "ssh_version", label: "SSH Version — SSHv1 deprecated, SSHv2 vulns" },
          { id: "ssh_auth_methods", label: "Auth Methods — Password, public key, keyboard-interactive" },
          { id: "ssh_brute", label: "SSH Brute-Force — Common credentials" },
          { id: "ssh_user_enum", label: "Username Enumeration — Error message differences" },
          { id: "ssh_weak_algo", label: "Weak Algorithms — Deprecated ciphers, MACs" },
        ]
      },
      {
        id: "net2_snmp", label: "SNMP Assessment", children: [
          { id: "snmp_community", label: "Community String — public, private, common strings" },
          { id: "snmp_v3_enum", label: "SNMPv3 User Enumeration — Auth failure discovery" },
          { id: "snmp_walk", label: "SNMP Walk — Full MIB tree enumeration" },
          { id: "snmp_config", label: "Configuration Extraction — Network config, credentials" },
          { id: "snmp_write", label: "SNMP Write — Modify device configuration" },
        ]
      },
      {
        id: "net2_other", label: "Other Service Assessment", children: [
          { id: "svc_dns_enum", label: "DNS Enumeration — Zone transfer, records, DNSSEC" },
          { id: "svc_smtp_enum", label: "SMTP Enumeration — VRFY, EXPN, RCPT TO" },
          { id: "svc_nfs_enum", label: "NFS Enumeration — Share listing, mount access" },
          { id: "svc_ldap_enum", label: "LDAP Enumeration — Anonymous bind, user/group enum" },
          { id: "svc_rdp_assess", label: "RDP Assessment — NLA, encryption, BlueKeep, DejaBlue" },
          { id: "svc_mssql_enum", label: "MSSQL Enumeration — xp_cmdshell, linked servers" },
          { id: "svc_redis_enum", label: "Redis — No authentication, RDB manipulation" },
        ]
      }
    ]
  },
  {
    id: "net_phase3", icon: "fas fa-chess-rook", label: "PHASE 3: Active Directory Assessment & Attacks", severity: "critical",
    children: [
      {
        id: "net3_ad_enum", label: "Active Directory Enumeration", children: [
          { id: "ad_domain_info", label: "Domain Info — Domain name, functional level, DCs" },
          { id: "ad_user_enum", label: "User Enumeration — Domain users, groups, computers via LDAP" },
          { id: "ad_group_members", label: "Group Membership — Domain Admins, Enterprise Admins" },
          { id: "ad_ou_structure", label: "OU Structure — Organizational Units, GPO links" },
          { id: "ad_bloodhound", label: "BloodHound — Ingestor data for AD path analysis" },
          { id: "ad_acl_enum", label: "ACL Enumeration — Access control lists, ACEs" },
          { id: "ad_gpo_enum", label: "GPO Enumeration — Group Policy Objects" },
          { id: "ad_trust_enum", label: "Trust Relationships — Domain trusts, forest trusts" },
          { id: "ad_spn_enum", label: "SPN Enumeration — Kerberoasting targets" },
        ]
      },
      {
        id: "net3_ad_creds", label: "Credential Attacks & Harvesting", children: [
          { id: "ad_llmnr", label: "LLMNR/NBT-NS Poisoning — Responder for hash capture" },
          { id: "ad_ntlm_relay", label: "NTLM Relay — ntlmrelayx for SMB/HTTP/LDAP relay" },
          { id: "ad_kerberoast", label: "Kerberoasting — TGS for service accounts, offline cracking" },
          { id: "ad_asrep_roast", label: "AS-REP Roasting — No pre-auth users, offline cracking" },
          { id: "ad_password_spray", label: "Password Spraying — Common passwords against all users" },
          { id: "ad_credential_dump", label: "Credential Dumping — LSASS, SAM, DPAPI" },
          { id: "ad_gpp_passwords", label: "GPP Passwords — Group Policy Preferences stored passwords" },
        ]
      },
      {
        id: "net3_ad_exploit", label: "Active Directory Exploitation", children: [
          { id: "ad_adcs_esc1", label: "ADCS ESC1 — User Specified SAN in Certificate Request" },
          { id: "ad_adcs_esc2", label: "ADCS ESC2 — Subordinate Certificate Authority" },
          { id: "ad_adcs_esc3", label: "ADCS ESC3 — Enrollment Agent Template" },
          { id: "ad_adcs_esc4", label: "ADCS ESC4 — Vulnerable Template Access Control" },
          { id: "ad_adcs_esc6", label: "ADCS ESC6 — EDITF_ATTRIBUTESUBJECTALTNAME2" },
          { id: "ad_adcs_esc8", label: "ADCS ESC8 — NTLM Relay to AD CS HTTP" },
          { id: "ad_deleg_unconstrained", label: "Unconstrained Delegation — TGT harvesting" },
          { id: "ad_deleg_constrained", label: "Constrained Delegation — S4U2Self/S4U2Proxy" },
          { id: "ad_deleg_rbc", label: "Resource-Based Constrained Delegation — RBCD" },
          { id: "ad_zerologon", label: "ZeroLogon (CVE-2020-1472) — Netlogon bypass" },
          { id: "ad_no_pac", label: "NoPac (CVE-2021-42278/87) — Domain admin escalation" },
          { id: "ad_printnightmare", label: "PrintNightmare (CVE-2021-34527) — Print Spooler RCE" },
        ]
      },
      {
        id: "net3_ad_persist", label: "AD Persistence & Lateral Movement", children: [
          { id: "ad_dcshadow", label: "DCShadow — Rogue DC for AD modifications" },
          { id: "ad_admin_sd", label: "AdminSDHolder — Persistent backdoor via ACL" },
          { id: "ad_golden_ticket", label: "Golden Ticket — Forge TGT with krbtgt hash" },
          { id: "ad_silver_ticket", label: "Silver Ticket — Forge TGS for specific service" },
          { id: "ad_skeleton_key", label: "Skeleton Key — LSASS patch for universal password" },
          { id: "ad_dcsync", label: "DSync — Replicate domain credentials via DRSR" },
          { id: "ad_sid_history", label: "SID History — Add DA SID to user's SID history" },
        ]
      }
    ]
  },
  {
    id: "net_phase4", icon: "fas fa-bomb", label: "PHASE 4: Exploitation & Access Verification", severity: "critical",
    children: [
      {
        id: "net4_exploit", label: "Exploitation Techniques", children: [
          { id: "exploit_metasploit", label: "Metasploit — Appropriate modules for identified vulns" },
          { id: "exploit_manual", label: "Manual Exploitation — Custom exploits, PoC code" },
          { id: "exploit_web_app", label: "Web App Exploitation — SQLi, XSS, upload vulns" },
          { id: "exploit_service", label: "Service Exploitation — Vulnerable services from enumeration" },
          { id: "exploit_credential", label: "Credential-Based — Use harvested credentials" },
          { id: "exploit_chain", label: "Exploit Chaining — Combine multiple vulnerabilities" },
          { id: "exploit_verify", label: "Verification — Confirm access without disrupting services" },
        ]
      },
      {
        id: "net4_post_exploit", label: "Post-Exploitation", children: [
          { id: "post_priv_check", label: "Privilege Level — whoami, id, system info" },
          { id: "post_priv_esc", label: "Privilege Escalation — Linux (SUID, sudo, kernel) and Windows" },
          { id: "post_credential_dump", label: "Credential Harvesting — Mimikatz, secretsdump, hashdump" },
          { id: "post_persistence", label: "Persistence — Scheduled tasks, services, cron jobs, SSH keys" },
          { id: "post_pivot", label: "Pivoting & Tunneling — Chisel, Ligolo-ng, SSH forwarding" },
          { id: "post_internal_enum", label: "Internal Enumeration — Further enumeration from compromised host" },
          { id: "post_lateral", label: "Lateral Movement — PtH, PtT, RDP, WMI, PsExec" },
        ]
      }
    ]
  },
  {
    id: "net_phase5", icon: "fas fa-wifi", label: "PHASE 5: Wireless Network Assessment", severity: "high",
    children: [
      {
        id: "net5_wifi_enum", label: "Wireless Enumeration", children: [
          { id: "wifi_survey", label: "Wireless Survey — airodump-ng for AP discovery, encryption" },
          { id: "wifi_rogue", label: "Rogue AP Detection — Unauthorized access points" },
          { id: "wifi_wps", label: "WPS Assessment — Pixie Dust, brute-force PIN" },
          { id: "wifi_encryption", label: "Encryption Analysis — WEP, WPA, WPA2, WPA3" },
          { id: "wifi_enterprise", label: "Enterprise 802.1X — PEAP, EAP-TLS, EAP-TTLS" },
        ]
      },
      {
        id: "net5_wifi_attack", label: "Wireless Attacks", children: [
          { id: "wifi_handshake", label: "WPA/WPA2 Handshake — Capture and crack 4-way handshake" },
          { id: "wifi_pmkid", label: "PMKID Attack — Hashcat PMKID capture and cracking" },
          { id: "wifi_eap_creds", label: "EAP Credential Capture — Evil twin for enterprise" },
          { id: "wifi_krack", label: "KRACK — Key reinstallation attack on WPA2" },
          { id: "wifi_deauth", label: "Deauthentication — Force reconnection for handshake" },
          { id: "wifi_evil_twin", label: "Evil Twin — Rogue AP mimicking legitimate network" },
        ]
      }
    ]
  },
  {
    id: "net_phase6", icon: "fas fa-lock", label: "PHASE 6: Network Device & Infrastructure Assessment", severity: "high",
    children: [
      {
        id: "net6_router", label: "Router & Firewall", children: [
          { id: "router_admin_panel", label: "Admin Panel — Default credentials, web interface vulns" },
          { id: "router_config", label: "Configuration Access — TFTP, HTTP config download" },
          { id: "router_acl", label: "ACL Analysis — Access control lists, rule order" },
          { id: "router_nat", label: "NAT Configuration — Port forwarding, DMZ" },
          { id: "router_firmware", label: "Firmware Analysis — Version, known vulns" },
        ]
      },
      {
        id: "net6_switch", label: "Switch Assessment", children: [
          { id: "switch_vlan", label: "VLAN Hopping — Double tagging, DTP negotiation" },
          { id: "switch_arp_spoof", label: "ARP Spoofing — MITM via ARP cache poisoning" },
          { id: "switch_stp", label: "STP Manipulation — Root bridge takeover" },
          { id: "switch_cdp_lldp", label: "CDP/LLDP — Network topology disclosure" },
          { id: "switch_dhcp_spoof", label: "DHCP Spoofing — Rogue DHCP server for MITM" },
        ]
      },
      {
        id: "net6_iot", label: "IoT & OT Devices", children: [
          { id: "iot_default_creds", label: "Default Credentials — Cameras, printers, smart devices" },
          { id: "iot_firmware", label: "Firmware Extraction — Binwalk, firmware analysis" },
          { id: "iot_protocols", label: "IoT Protocols — MQTT, CoAP, Modbus, BACnet" },
          { id: "ot_scada", label: "SCADA/ICS — PLC, HMI, RTU security evaluation" },
        ]
      }
    ]
  },
  {
    id: "net_phase7", icon: "fas fa-clipboard-list", label: "PHASE 7: Post-Engagement & Reporting", severity: "info",
    children: [
      {
        id: "net7_cleanup", label: "Cleanup & Restoration", children: [
          { id: "cleanup_artifacts", label: "Artifact Removal — Uploaded files, accounts, persistence" },
          { id: "cleanup_logs", label: "Log Documentation — All actions taken for audit trail" },
          { id: "cleanup_services", label: "Service Restoration — Stop services, restore configs" },
          { id: "cleanup_access", label: "Access Revocation — Remove granted access" },
        ]
      },
      {
        id: "net7_report", label: "Report & Remediation", children: [
          { id: "net_report_exec", label: "Executive Summary — Risk overview, business impact" },
          { id: "net_report_technical", label: "Technical Report — Findings, evidence, exploitation" },
          { id: "net_report_network_map", label: "Network Diagram — Topology and assets" },
          { id: "net_report_cvss", label: "CVSS Scoring — Severity ratings" },
          { id: "net_report_remediation", label: "Remediation — Specific fixes" },
          { id: "net_report_retest", label: "Retesting — Verify fixes after remediation" },
          { id: "net_report_mitre", label: "MITRE ATT&CK — Tactics and techniques observed" },
        ]
      }
    ]
  }
];
