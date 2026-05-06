window.CHECKLIST_INCIDENT_RESPONSE = [
  {
    id: "ir_phase1", icon: "fas fa-clipboard-check", label: "PHASE 1: Preparation & Readiness", severity: "critical",
    children: [
      { id: "ir1_plan", label: "Incident Response Plan", children: [
        { id: "ir1_policy", label: "Document IR policy — scope, objectives, authority, legal basis" },
        { id: "ir1_team", label: "Define IR team — roles, responsibilities, contact list, alternates" },
        { id: "ir1_playbooks", label: "Create IR playbooks — malware, phishing, ransomware, data breach, insider threat" },
        { id: "ir1_escalation", label: "Define escalation paths — when to notify management, legal, PR, law enforcement" },
        { id: "ir1_classification", label: "Define incident classification — severity levels, response timeframes" },
      ]},
      { id: "ir1_tools", label: "IR Tooling & Infrastructure", children: [
        { id: "ir1_forensics", label: "Prepare forensics toolkit — Kape, Velociraptor, FTK, Autopsy, Wireshark" },
        { id: "ir1_edr", label: "Deploy EDR on all endpoints — CrowdStrike, SentinelOne, Defender for Endpoint" },
        { id: "ir1_siems", label: "Ensure SIEM coverage — log collection, retention, correlation rules" },
        { id: "ir1_comm", label: "Setup secure communication — encrypted channels, out-of-band communication" },
        { id: "ir1_imaging", label: "Prepare disk imaging tools — dd, FTK Imager, Guymager, write blockers" },
        { id: "ir1_evidence", label: "Prepare evidence storage — chain of custody forms, secure storage" },
      ]},
      { id: "ir1_training", label: "Training & Exercises", children: [
        { id: "ir1_tabletop", label: "Conduct tabletop exercises — scenario-based team coordination practice" },
        { id: "ir1_red_blue", label: "Run red team exercises — test detection and response capabilities" },
        { id: "ir1_simulations", label: "Run breach simulations — simulated ransomware, data exfiltration" },
        { id: "ir1_after_action", label: "Document lessons learned — after-action reports, process improvements" },
      ]}
    ]
  },
  {
    id: "ir_phase2", icon: "fas fa-bell", label: "PHASE 2: Detection & Analysis", severity: "critical",
    children: [
      { id: "ir2_detection", label: "Incident Detection", children: [
        { id: "ir2_alert_triage", label: "Triage security alerts — validate, prioritize, categorize" },
        { id: "ir2_anomaly", label: "Investigate anomalies — unusual logins, data transfers, process execution" },
        { id: "ir2_user_report", label: "Handle user reports — phishing emails, suspicious activity, system issues" },
        { id: "ir2_external", label: "Process external notifications — vendor alerts, law enforcement, CERT" },
        { id: "ir2_threshold", label: "Determine incident threshold — is this a security incident or false positive?" },
      ]},
      { id: "ir2_analysis", label: "Incident Analysis", children: [
        { id: "ir2_scope", label: "Determine scope — affected systems, users, data, time range" },
        { id: "ir2_timeline", label: "Build incident timeline — first compromise, lateral movement, data access" },
        { id: "ir2_ioc_extract", label: "Extract IOCs — malware hashes, IPs, domains, file paths, registry keys" },
        { id: "ir2_ttp_map", label: "Map TTPs — MITRE ATT&CK technique identification" },
        { id: "ir2_root_cause", label: "Identify root cause — initial access vector, exploited vulnerability" },
        { id: "ir2_severity", label: "Assess severity — impact on confidentiality, integrity, availability" },
        { id: "ir2_data_impact", label: "Assess data impact — types of data accessed, volume, sensitivity" },
      ]},
      { id: "ir2_forensics", label: "Digital Forensics", children: [
        { id: "ir2_memory", label: "Capture volatile memory — RAM dump for credential extraction, process analysis" },
        { id: "ir2_disk", label: "Create forensic disk images — bit-by-bit copy with hash verification" },
        { id: "ir2_network", label: "Collect network captures — PCAP files, NetFlow, proxy logs" },
        { id: "ir2_logs", label: "Collect relevant logs — Windows Event, application, security, cloud audit" },
        { id: "ir2_chain", label: "Maintain chain of custody — documentation, hash verification, access control" },
        { id: "ir2_artifacts", label: "Analyze forensic artifacts — prefetch, shimcache, amcache, browser history" },
      ]}
    ]
  },
  {
    id: "ir_phase3", icon: "fas fa-fire-extinguisher", label: "PHASE 3: Containment & Eradication", severity: "critical",
    children: [
      { id: "ir3_short_term", label: "Short-Term Containment", children: [
        { id: "ir3_isolate", label: "Isolate affected systems — network segmentation, disable accounts" },
        { id: "ir3_block_ioc", label: "Block IOCs — firewall rules, DNS sinkhole, email filtering" },
        { id: "ir3_kill_process", label: "Terminate malicious processes — kill, quarantine, disable scheduled tasks" },
        { id: "ir3_revoke_access", label: "Revoke compromised access — password resets, token revocation, session kill" },
        { id: "ir3_monitor", label: "Monitor for re-infection — watch for attacker returning via alternate access" },
      ]},
      { id: "ir3_long_term", label: "Long-Term Containment", children: [
        { id: "ir3_patching", label: "Patch vulnerabilities — apply security updates, configuration changes" },
        { id: "ir3_network_seg", label: "Implement network segmentation — isolate compromised network segments" },
        { id: "ir3_access_review", label: "Review access controls — remove unnecessary permissions, enforce MFA" },
        { id: "ir3_temp_systems", label: "Deploy temporary systems — maintain operations during remediation" },
      ]},
      { id: "ir3_eradication", label: "Eradication", children: [
        { id: "ir3_malware_removal", label: "Remove malware — clean infected systems, delete malicious files" },
        { id: "ir3_backdoor_remove", label: "Remove persistence — backdoors, webshells, rogue accounts, scheduled tasks" },
        { id: "ir3_config_restore", label: "Restore configurations — default settings, security baselines" },
        { id: "ir3_verify_clean", label: "Verify eradication — rescan, monitor for indicators of compromise" },
      ]}
    ]
  },
  {
    id: "ir_phase4", icon: "fas fa-tools", label: "PHASE 4: Recovery & Restoration", severity: "high",
    children: [
      { id: "ir4_restore", label: "System Recovery", children: [
        { id: "ir4_reimage", label: "Reimage affected systems — clean OS install from known-good media" },
        { id: "ir4_restore_backup", label: "Restore from backups — verify backup integrity before restoration" },
        { id: "ir4_data_restore", label: "Restore data — validated data recovery, integrity verification" },
        { id: "ir4_hardening", label: "Harden recovered systems — security baselines, patching, monitoring" },
      ]},
      { id: "ir4_validation", label: "Recovery Validation", children: [
        { id: "ir4_scan", label: "Scan restored systems — vulnerability scan, malware scan, configuration audit" },
        { id: "ir4_monitor", label: "Enhanced monitoring — increased alerting, behavioral analysis for 30-90 days" },
        { id: "ir4_functional_test", label: "Functional testing — verify applications and services operating correctly" },
        { id: "ir4_user_access", label: "Restore user access — controlled re-enrollment, credential verification" },
      ]}
    ]
  },
  {
    id: "ir_phase5", icon: "fas fa-file-alt", label: "PHASE 5: Post-Incident & Lessons Learned", severity: "high",
    children: [
      { id: "ir5_report", label: "Incident Report", children: [
        { id: "ir5_summary", label: "Write incident summary — timeline, impact, root cause, response effectiveness" },
        { id: "ir5_evidence", label: "Document evidence — artifacts collected, analysis performed, findings" },
        { id: "ir5_ioc", label: "Compile IOCs — indicators for sharing with community and detection tools" },
        { id: "ir5_ttp", label: "Document TTPs — attacker techniques, tools, procedures used" },
      ]},
      { id: "ir5_lessons", label: "Lessons Learned", children: [
        { id: "ir5_retro", label: "Conduct retrospective — what worked, what didn't, what to improve" },
        { id: "ir5_gaps", label: "Identify gaps — detection gaps, tool gaps, process gaps, knowledge gap" },
        { id: "ir5_improvements", label: "Define improvements — updated playbooks, new tools, additional training" },
        { id: "ir5_update_plan", label: "Update IR plan — incorporate lessons learned, revise procedures" },
      ]},
      { id: "ir5_legal", label: "Legal & Regulatory", children: [
        { id: "ir5_notification", label: "Determine notification requirements — regulatory, customer, partner" },
        { id: "ir5_breach_law", label: "Assess breach notification laws — GDPR, HIPAA, state-specific requirements" },
        { id: "ir5_law_enforcement", label: "Coordinate with law enforcement — FBI, Secret Service, local authorities" },
        { id: "ir5_preserve", label: "Preserve evidence for litigation — chain of custody, forensic integrity" },
      ]}
    ]
  }
];
