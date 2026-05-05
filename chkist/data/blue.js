window.CHECKLIST_BLUE = [
  {
    id: "blue_phase1", icon: "fas fa-shield-alt", label: "PHASE 1: Hardening & Security Hygiene", severity: "info",
    children: [
      {
        id: "blue1_identity", label: "Identity & Access Management", children: [
          { id: "blue_iam_mfa", label: "MFA Enforcement — Multi-factor authentication for all accounts" },
          { id: "blue_iam_conditional", label: "Conditional Access — Risk-based access policies" },
          { id: "blue_iam_tiering", label: "Tiered Administration — Admin account separation and control" },
          { id: "blue_iam_pam", label: "Privileged Access Management — PAM solution deployment" },
          { id: "blue_iam_jit", label: "Just-In-Time Access — Temporary elevated access" },
        ]
      },
      {
        id: "blue1_network", label: "Network Hardening", children: [
          { id: "blue_seg_micro", label: "Micro-segmentation — Network segmentation at workload level" },
          { id: "blue_seg_zerotrust", label: "Zero Trust Architecture — Never trust, always verify" },
          { id: "blue_seg_vlan", label: "VLAN Segmentation — Proper VLAN design and enforcement" },
          { id: "blue_firewall", label: "Firewall Rules — Egress filtering, least-allowlist approach" },
          { id: "blue_dns_security", label: "DNS Security — DNS filtering, DoH/DoT, DNSSEC" },
          { id: "blue_network_monitor", label: "Network Monitoring — NetFlow, sFlow, packet capture" },
        ]
      },
      {
        id: "blue1_endpoint", label: "Endpoint Hardening", children: [
          { id: "blue_endpoint_gpo", label: "GPO Hardening — Group Policy security configurations" },
          { id: "blue_endpoint_applocker", label: "AppLocker/WDAC — Application whitelisting enforcement" },
          { id: "blue_endpoint_patch", label: "Patch Management — Vulnerability and patch lifecycle" },
          { id: "blue_endpoint_disk_enc", label: "Disk Encryption — BitLocker, FileVault, LUKS enforcement" },
          { id: "blue_endpoint_usb", label: "USB Control — Device control policies, USB blocking" },
          { id: "blue_endpoint_hardening", label: "OS Hardening — CIS Benchmarks, STIG compliance" },
        ]
      }
    ]
  },
  {
    id: "blue_phase2", icon: "fas fa-crosshairs", label: "PHASE 2: Threat Hunting", severity: "high",
    children: [
      {
        id: "blue2_hypothesis", label: "Hypothesis-Driven Hunting", children: [
          { id: "blue_hyp_mitre", label: "MITRE ATT&CK — Hypothesis based on known TTPs" },
          { id: "blue_hyp_threat_intel", label: "Threat Intelligence — IOC and TTP-based hunting" },
          { id: "blue_hyp_anomaly", label: "Anomaly Detection — Unusual behavior identification" },
          { id: "blue_hyp_data", label: "Data Analysis — Log correlation and pattern analysis" },
        ]
      },
      {
        id: "blue2_traffic", label: "Network Traffic Analysis", children: [
          { id: "blue_traffic_anomalous", label: "Anomalous Traffic — Unusual protocols, ports, volumes" },
          { id: "blue_traffic_beacon", label: "Beacon Detection — Periodic C2 communication patterns" },
          { id: "blue_traffic_dga", label: "DGA Detection — Domain generation algorithm patterns" },
          { id: "blue_traffic_encrypted", label: "Encrypted Traffic Analysis — TLS fingerprinting, JA3" },
          { id: "blue_traffic_exfil", label: "Exfiltration Detection — Large outbound transfers, DNS exfil" },
        ]
      },
      {
        id: "blue2_ioc_scan", label: "IOC & YARA Scanning", children: [
          { id: "blue_ioc_scan", label: "IOC Scanning — Fleet-wide indicator scanning" },
          { id: "blue_yara_rules", label: "YARA Rules — Custom and community rule deployment" },
          { id: "blue_sigma_rules", label: "Sigma Rules — SIEM detection rule deployment" },
          { id: "blue_lolbins", label: "LOLBin Detection — Living-off-the-land binary usage" },
          { id: "blue_persistence_scan", label: "Persistence Scan — Autoruns, scheduled tasks, services" },
        ]
      },
      {
        id: "blue2_behavior", label: "Behavioral Analysis", children: [
          { id: "blue_behavior_baseline", label: "Behavioral Baseline — Normal activity profiling" },
          { id: "blue_behavior_deviation", label: "Deviation Detection — Anomalous behavior identification" },
          { id: "blue_behavior_user", label: "User Behavior Analytics — UEBA for insider threats" },
          { id: "blue_behavior_process", label: "Process Behavior — Unusual process trees, parent-child" },
        ]
      }
    ]
  },
  {
    id: "blue_phase3", icon: "fas fa-bell", label: "PHASE 3: Detection Engineering", severity: "critical",
    children: [
      {
        id: "blue3_siem", label: "SIEM & Detection Rules", children: [
          { id: "blue_siem_rules", label: "Rule Creation — Custom detection rule development" },
          { id: "blue_siem_tuning", label: "Rule Tuning — Reduce false positives, improve accuracy" },
          { id: "blue_siem_correlation", label: "Correlation Rules — Multi-event correlation for complex attacks" },
          { id: "blue_siem_use_case", label: "Use Case Development — ATT&CK-based use case mapping" },
          { id: "blue_siem_dashboard", label: "Dashboard Creation — Visibility dashboards for SOC" },
        ]
      },
      {
        id: "blue3_edr", label: "EDR & Endpoint Detection", children: [
          { id: "blue_edr_deploy", label: "EDR Deployment — Full endpoint coverage" },
          { id: "blue_edr_policy", label: "Policy Configuration — Behavioral blocking, detection settings" },
          { id: "blue_edr_investigate", label: "Endpoint Investigation — Process trees, timeline analysis" },
          { id: "blue_edr_response", label: "Automated Response — Isolation, kill process, quarantine" },
        ]
      },
      {
        id: "blue3_logging", label: "Deep Visibility & Logging", children: [
          { id: "blue_sysmon", label: "Sysmon Configuration — Comprehensive logging configuration" },
          { id: "blue_auditd", label: "Auditd (Linux) — Comprehensive Linux audit logging" },
          { id: "blue_powershell_log", label: "PowerShell Logging — Script block, module, transcription logging" },
          { id: "blue_dns_log", label: "DNS Logging — Query logging for threat detection" },
          { id: "blue_proxy_log", label: "Proxy Logging — Web proxy logs for URL filtering analysis" },
        ]
      },
      {
        id: "blue3_deception", label: "Deception Technology", children: [
          { id: "blue_honeypot", label: "Honeypots — Decoy systems for attacker engagement" },
          { id: "blue_honeytoken", label: "Honeytokens — Fake credentials, documents, data for detection" },
          { id: "blue_honeyaccount", label: "Honey Accounts — Decoy user accounts for detection" },
          { id: "blue_deception_net", label: "Deception Network — Fake network segments and services" },
        ]
      }
    ]
  },
  {
    id: "blue_phase4", icon: "fas fa-medkit", label: "PHASE 4: Incident Response", severity: "critical",
    children: [
      {
        id: "blue4_triage", label: "Incident Triage", children: [
          { id: "blue_triage_detect", label: "Detection — Alert identification and initial assessment" },
          { id: "blue_triage_scope", label: "Scoping — Determine affected systems, users, data" },
          { id: "blue_triage_severity", label: "Severity Assessment — Impact classification and prioritization" },
          { id: "blue_triage_timeline", label: "Timeline Construction — Attack timeline from first compromise" },
          { id: "blue_triage_evidence", label: "Evidence Preservation — Forensic image, log collection" },
        ]
      },
      {
        id: "blue4_contain", label: "Containment", children: [
          { id: "blue_contain_network", label: "Network Isolation — Network kill-switch, VLAN quarantine" },
          { id: "blue_contain_account", label: "Account Suspension — Disable compromised accounts" },
          { id: "blue_contain_endpoint", label: "Endpoint Isolation — EDR-based network isolation" },
          { id: "blue_contain_block", label: "IOCs Blocking — Firewall, DNS, proxy blocking of IOCs" },
        ]
      },
      {
        id: "blue4_eradicate", label: "Eradication", children: [
          { id: "blue_erad_malware", label: "Malware Removal — Complete malware elimination" },
          { id: "blue_erad_persist", label: "Persistence Cleanup — Remove all persistence mechanisms" },
          { id: "blue_erad_backdoor", label: "Backdoor Removal — Remove unauthorized access points" },
          { id: "blue_erad_patch", label: "Vulnerability Patching — Fix the exploited vulnerability" },
        ]
      },
      {
        id: "blue4_recovery", label: "Recovery", children: [
          { id: "blue_recovery_restore", label: "System Restore — Clean restore from backup" },
          { id: "blue_recovery_hardening", label: "Hardening Implementation — Apply security improvements" },
          { id: "blue_recovery_monitor", label: "Enhanced Monitoring — Increased monitoring post-incident" },
          { id: "blue_recovery_verify", label: "Verification — Confirm threat is fully removed" },
        ]
      },
      {
        id: "blue4_post", label: "Post-Incident Activities", children: [
          { id: "blue_post_rca", label: "Root Cause Analysis — Identify how the breach occurred" },
          { id: "blue_post_lessons", label: "Lessons Learned — What worked, what didn't" },
          { id: "blue_post_playbook", label: "Playbook Updates — Update IR procedures based on findings" },
          { id: "blue_post_report", label: "Incident Report — Comprehensive incident documentation" },
        ]
      }
    ]
  },
  {
    id: "blue_phase5", icon: "fas fa-chart-bar", label: "PHASE 5: Continuous Improvement & Metrics", severity: "info",
    children: [
      {
        id: "blue5_metrics", label: "Security Metrics", children: [
          { id: "blue5_mttc", label: "MTTC — Mean Time to Contain measurement" },
          { id: "blue5_mttd", label: "MTTD — Mean Time to Detect measurement" },
          { id: "blue5_mttf", label: "MTTF — Mean Time to Fix measurement" },
          { id: "blue5_coverage", label: "Detection Coverage — ATT&CK technique coverage assessment" },
          { id: "blue5_fp_rate", label: "False Positive Rate — Detection accuracy tracking" },
        ]
      },
      {
        id: "blue5_program", label: "Security Program Improvement", children: [
          { id: "blue5_tabletop", label: "Tabletop Exercises — Simulated incident response drills" },
          { id: "blue5_red_team", label: "Red Team Exercises — Adversary simulation for testing" },
          { id: "blue5_purple_team", label: "Purple Team — Collaborative detection testing" },
          { id: "blue5_training", label: "Team Training — Skill development and certification" },
          { id: "blue5_automation", label: "Automation — SOAR playbooks, automated response" },
        ]
      }
    ]
  }
];
