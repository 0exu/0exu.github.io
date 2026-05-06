window.CHECKLIST_INCIDENT_RESPONSE = [
  {
    id: "ir_phase1", icon: "fas fa-clipboard-check", label: "PHASE 1: IR Program Development & Governance", severity: "info",
    children: [
      { id: "ir1_governance", label: "IR Governance & Authority", children: [
        { id: "ir1_policy", label: "Establish IR policy — scope, objectives, authority, legal basis, management sponsorship" },
        { id: "ir1_charter", label: "Draft IR charter — mission statement, team authority, decision-making power, escalation" },
        { id: "ir1_legal", label: "Engage legal counsel — retention, attorney-client privilege, regulatory obligations" },
        { id: "ir1_budget", label: "Secure IR budget — tools, training, retainer contracts, forensic services, insurance" },
        { id: "ir1_insurance", label: "Review cyber insurance — coverage scope, notification requirements, approved vendors" },
      ]},
      { id: "ir1_team", label: "IR Team Structure & Roles", children: [
        { id: "ir1_core", label: "Define core IR team — IR lead, analysts, forensics, threat hunter, communicator" },
        { id: "ir1_extended", label: "Define extended team — IT, legal, HR, PR, management, law enforcement liaison" },
        { id: "ir1_contacts", label: "Maintain contact lists — team members, alternates, vendors, law enforcement, regulators" },
        { id: "ir1_oncall", label: "Establish on-call rotation — 24/7 coverage, escalation matrix, notification procedures" },
        { id: "ir1_external", label: "Identify external resources — IR retainers, forensic firms, legal counsel, PR agency" },
      ]},
      { id: "ir1_classification", label: "Incident Classification & Severity", children: [
        { id: "ir1_severity", label: "Define severity levels — Sev1-5, criteria for each level, response timeframes" },
        { id: "ir1_categories", label: "Define incident categories — malware, phishing, ransomware, data breach, insider, DDoS" },
        { id: "ir1_threshold", label: "Define incident threshold — what constitutes an incident vs. event, escalation criteria" },
        { id: "ir1_priority", label: "Define prioritization — business impact, data sensitivity, regulatory requirements" },
      ]}
    ]
  },
  {
    id: "ir_phase2", icon: "fas fa-tools", label: "PHASE 2: IR Infrastructure & Tooling", severity: "high",
    children: [
      { id: "ir2_tools", label: "IR Tooling & Platform", children: [
        { id: "ir2_forensics", label: "Prepare forensics toolkit — KAPE, Velociraptor, FTK Imager, Autopsy, Wireshark" },
        { id: "ir2_memory", label: "Prepare memory analysis tools — WinPmem, LiME, Volatility, Rekall" },
        { id: "ir2_imaging", label: "Prepare disk imaging tools — dd, dc3dd, Guymager, write blockers, verified hashes" },
        { id: "ir2_edr", label: "Deploy EDR on all endpoints — coverage verification, health monitoring, response capability" },
        { id: "ir2_siems", label: "Ensure SIEM coverage — log collection, retention period, correlation rules, alerting" },
        { id: "ir2_case_mgmt", label: "Deploy case management — incident tracking, evidence management, timeline, reporting" },
      ]},
      { id: "ir2_infra", label: "IR Infrastructure", children: [
        { id: "ir2_war_room", label: "Establish war room — physical and virtual, secure communication, access control" },
        { id: "ir2_comm", label: "Setup secure communication — encrypted channels, out-of-band, separate from compromised infrastructure" },
        { id: "ir2_evidence", label: "Prepare evidence storage — chain of custody forms, secure storage, access control, retention" },
        { id: "ir2_lab", label: "Maintain forensic lab — isolated network, analysis workstations, reference systems" },
      ]},
      { id: "ir2_playbooks", label: "IR Playbook Development", children: [
        { id: "ir2_malware", label: "Develop malware playbook — detection, containment, eradication, recovery, analysis" },
        { id: "ir2_ransomware", label: "Develop ransomware playbook — identification, containment, decryption, recovery, negotiation" },
        { id: "ir2_phishing", label: "Develop phishing playbook — triage, credential reset, email recall, awareness" },
        { id: "ir2_data_breach", label: "Develop data breach playbook — scoping, notification, containment, forensics, legal" },
        { id: "ir2_insider", label: "Develop insider threat playbook — detection, evidence preservation, HR coordination, legal" },
        { id: "ir2_ddos", label: "Develop DDoS playbook — detection, mitigation, traffic filtering, CDN, ISP coordination" },
      ]}
    ]
  },
  {
    id: "ir_phase3", icon: "fas fa-bell", label: "PHASE 3: Detection, Triage & Initial Analysis", severity: "critical",
    children: [
      { id: "ir3_detection", label: "Incident Detection Sources", children: [
        { id: "ir3_alerts", label: "Process security alerts — SIEM, EDR, IDS/IPS, firewall, cloud monitoring" },
        { id: "ir3_user_report", label: "Handle user reports — phishing emails, suspicious activity, system anomalies" },
        { id: "ir3_external", label: "Process external notifications — vendor alerts, law enforcement, CERT, media" },
        { id: "ir3_hunt", label: "Proactive detection — threat hunting findings, anomaly detection, IOC matching" },
        { id: "ir3_monitoring", label: "Monitor dark web — leaked credentials, company mentions, threat actor forums" },
      ]},
      { id: "ir3_triage", label: "Incident Triage Process", children: [
        { id: "ir3_validate", label: "Validate the alert — confirm true positive, rule out false positive, gather initial data" },
        { id: "ir3_classify", label: "Classify the incident — category, severity level, priority, initial impact assessment" },
        { id: "ir3_scope", label: "Determine initial scope — affected systems, users, data, time range, attack vector" },
        { id: "ir3_contain_decision", label: "Make containment decision — immediate containment vs. monitoring, risk assessment" },
        { id: "ir3_activate", label: "Activate IR team — notify core team, establish war room, begin documentation" },
      ]},
      { id: "ir3_analysis", label: "Initial Incident Analysis", children: [
        { id: "ir3_ioc", label: "Extract initial IOCs — file hashes, IPs, domains, URLs, email headers, registry keys" },
        { id: "ir3_timeline", label: "Build initial timeline — first seen activity, progression, current state" },
        { id: "ir3_mitre", label: "Map to MITRE ATT&CK — identified techniques, TTPs, threat actor attribution" },
        { id: "ir3_impact", label: "Assess initial impact — data accessed, systems compromised, business disruption" },
        { id: "ir3_threat_intel", label: "Correlate with threat intel — known campaigns, actor profiles, IOCs, TTPs" },
      ]}
    ]
  },
  {
    id: "ir_phase4", icon: "fas fa-search", label: "PHASE 4: Deep Investigation & Forensic Analysis", severity: "critical",
    children: [
      { id: "ir4_forensics", label: "Digital Forensics Collection", children: [
        { id: "ir4_memory_dump", label: "Capture volatile memory — RAM dump before any changes, process list, network connections" },
        { id: "ir4_disk_image", label: "Create forensic disk images — bit-by-bit copy, hash verification, write blockers" },
        { id: "ir4_network_capture", label: "Collect network captures — PCAP files, NetFlow, proxy logs, DNS logs" },
        { id: "ir4_log_collection", label: "Collect all relevant logs — Windows Event, application, security, cloud audit, firewall" },
        { id: "ir4_artifacts", label: "Preserve system artifacts — prefetch, shimcache, amcache, LNK files, browser history" },
        { id: "ir4_chain", label: "Maintain chain of custody — documentation, hash verification, access logging, legal hold" },
      ]},
      { id: "ir4_analysis", label: "Forensic Analysis", children: [
        { id: "ir4_memory_analysis", label: "Analyze memory — running processes, injected code, credentials, network connections, keys" },
        { id: "ir4_disk_analysis", label: "Analyze disk images — file system analysis, deleted file recovery, timeline, artifact extraction" },
        { id: "ir4_malware_analysis", label: "Analyze malware — static and dynamic analysis, behavior, C2, persistence, capabilities" },
        { id: "ir4_network_analysis", label: "Analyze network traffic — C2 communication, data exfiltration, lateral movement, scanning" },
        { id: "ir4_log_analysis", label: "Analyze logs — authentication events, privilege escalation, data access, configuration changes" },
      ]},
      { id: "ir4_scoping", label: "Full Incident Scoping", children: [
        { id: "ir4_full_scope", label: "Determine full scope — all affected systems, users, data, time range, entry points" },
        { id: "ir4_lateral", label: "Trace lateral movement — how attacker moved, techniques used, systems accessed" },
        { id: "ir4_data_access", label: "Determine data accessed — types, volume, sensitivity, exfiltration evidence" },
        { id: "ir4_persistence", label: "Identify all persistence — backdoors, webshells, rogue accounts, scheduled tasks, services" },
        { id: "ir4_root_cause", label: "Identify root cause — initial access vector, exploited vulnerability, security gap" },
      ]}
    ]
  },
  {
    id: "ir_phase5", icon: "fas fa-fire-extinguisher", label: "PHASE 5: Containment, Eradication & Recovery", severity: "critical",
    children: [
      { id: "ir5_short_term", label: "Immediate Containment", children: [
        { id: "ir5_isolate", label: "Isolate affected systems — network segmentation, EDR isolation, VLAN quarantine" },
        { id: "ir5_disable_accounts", label: "Disable compromised accounts — password reset, token revocation, session termination" },
        { id: "ir5_block_ioc", label: "Block IOCs — firewall rules, DNS sinkhole, email filtering, proxy blocking" },
        { id: "ir5_kill_processes", label: "Terminate malicious processes — kill, quarantine, disable scheduled tasks and services" },
        { id: "ir5_monitor", label: "Monitor for re-infection — watch for attacker returning via alternate access or persistence" },
      ]},
      { id: "ir5_long_term", label: "Long-Term Containment", children: [
        { id: "ir5_patching", label: "Patch vulnerabilities — apply security updates, configuration changes, compensating controls" },
        { id: "ir5_segment", label: "Implement network segmentation — isolate compromised segments, restrict lateral movement" },
        { id: "ir5_access_review", label: "Review and restrict access — remove unnecessary permissions, enforce MFA, privilege reduction" },
        { id: "ir5_temp_systems", label: "Deploy temporary systems — maintain operations during remediation, clean replacement systems" },
      ]},
      { id: "ir5_eradication", label: "Threat Eradication", children: [
        { id: "ir5_malware_removal", label: "Remove all malware — clean infected systems, delete malicious files, clear temp directories" },
        { id: "ir5_persist_cleanup", label: "Remove all persistence — backdoors, webshells, rogue accounts, scheduled tasks, services" },
        { id: "ir5_config_restore", label: "Restore secure configurations — security baselines, hardened settings, default deny" },
        { id: "ir5_verify_clean", label: "Verify complete eradication — rescan, monitor for IOCs, behavioral analysis, time-based monitoring" },
      ]},
      { id: "ir5_recovery", label: "System Recovery & Restoration", children: [
        { id: "ir5_reimage", label: "Reimage affected systems — clean OS install from known-good media, verified patches" },
        { id: "ir5_restore_data", label: "Restore data from backups — verify backup integrity, validated recovery, integrity checks" },
        { id: "ir5_hardening", label: "Harden recovered systems — security baselines, EDR reinstallation, enhanced monitoring" },
        { id: "ir5_validation", label: "Validate recovery — vulnerability scan, malware scan, functional testing, user acceptance" },
        { id: "ir5_enhanced_monitor", label: "Implement enhanced monitoring — increased alerting, behavioral analysis, 30-90 day watch period" },
      ]}
    ]
  },
  {
    id: "ir_phase6", icon: "fas fa-gavel", label: "PHASE 6: Legal, Regulatory & Communication Management", severity: "high",
    children: [
      { id: "ir6_legal", label: "Legal Assessment & Action", children: [
        { id: "ir6_counsel", label: "Engage legal counsel — attorney-client privilege, advice on obligations, liability assessment" },
        { id: "ir6_liability", label: "Assess legal liability — contractual obligations, regulatory penalties, potential lawsuits" },
        { id: "ir6_preserve", label: "Preserve evidence for litigation — legal hold, chain of custody, forensic integrity" },
        { id: "ir6_law_enforcement", label: "Coordinate with law enforcement — FBI, Secret Service, local authorities, reporting process" },
      ]},
      { id: "ir6_regulatory", label: "Regulatory Notification", children: [
        { id: "ir6_breach_law", label: "Assess breach notification laws — GDPR, HIPAA, state-specific, industry-specific requirements" },
        { id: "ir6_notification", label: "Execute notification — regulatory bodies, affected individuals, customers, partners" },
        { id: "ir6_timeline", label: "Meet notification deadlines — 72 hours (GDPR), state-specific timelines, documented process" },
        { id: "ir6_documentation", label: "Document all notifications — who, when, what, how, acknowledgments, follow-up" },
      ]},
      { id: "ir6_comm", label: "Stakeholder Communication", children: [
        { id: "ir6_internal", label: "Internal communication — executive updates, employee notification, need-to-know basis" },
        { id: "ir6_customer", label: "Customer notification — transparent communication, guidance, support, FAQ" },
        { id: "ir6_media", label: "Media management — press releases, spokesperson, talking points, social media monitoring" },
        { id: "ir6_partner", label: "Partner/vendor notification — affected third parties, coordinated response, information sharing" },
      ]}
    ]
  },
  {
    id: "ir_phase7", icon: "fas fa-chart-line", label: "PHASE 7: Post-Incident Review & Lessons Learned", severity: "high",
    children: [
      { id: "ir7_report", label: "Comprehensive Incident Report", children: [
        { id: "ir7_summary", label: "Write incident summary — timeline, impact, root cause, response effectiveness, cost" },
        { id: "ir7_technical", label: "Document technical findings — IOCs, TTPs, malware analysis, forensic artifacts, evidence" },
        { id: "ir7_ioc_compilation", label: "Compile IOCs for sharing — hashes, IPs, domains, behavior patterns, YARA rules" },
        { id: "ir7_mitre_mapping", label: "Complete MITRE ATT&CK mapping — techniques used, detection gaps, coverage analysis" },
      ]},
      { id: "ir7_retro", label: "Retrospective & Lessons Learned", children: [
        { id: "ir7_meeting", label: "Conduct retrospective meeting — all stakeholders, what worked, what didn't, blameless culture" },
        { id: "ir7_gaps", label: "Identify gaps — detection gaps, tool gaps, process gaps, knowledge gaps, communication gaps" },
        { id: "ir7_improvements", label: "Define improvements — updated playbooks, new tools, additional training, process changes" },
        { id: "ir7_action_items", label: "Create action items — owners, deadlines, tracking, verification, follow-up" },
      ]},
      { id: "ir7_update", label: "Program Improvement", children: [
        { id: "ir7_update_plan", label: "Update IR plan — incorporate lessons learned, revise procedures, add new playbooks" },
        { id: "ir7_update_tools", label: "Update tooling — new tools, configuration changes, integration improvements" },
        { id: "ir7_training", label: "Update training — new scenarios, skill gaps addressed, tabletop exercise updates" },
        { id: "ir7_metrics", label: "Track improvement metrics — MTTR reduction, detection improvement, gap closure rate" },
      ]}
    ]
  },
  {
    id: "ir_phase8", icon: "fas fa-sync-alt", label: "PHASE 8: Continuous Readiness & Program Evolution", severity: "info",
    children: [
      { id: "ir8_exercises", label: "IR Exercises & Simulations", children: [
        { id: "ir8_tabletop", label: "Conduct tabletop exercises — quarterly, scenario-based, cross-functional, leadership involvement" },
        { id: "ir8_simulation", label: "Run breach simulations — simulated ransomware, data exfiltration, insider threat" },
        { id: "ir8_red_team", label: "Engage red team — adversary simulation, detection testing, response capability validation" },
        { id: "ir8_after_action", label: "Document after-action reports — findings, improvements, follow-up tracking" },
      ]},
      { id: "ir8_threat_intel", label: "Threat Intelligence Integration", children: [
        { id: "ir8_ti_feed", label: "Subscribe to threat feeds — ISACs, commercial feeds, open-source, industry-specific" },
        { id: "ir8_actor_profiles", label: "Maintain threat actor profiles — TTPs, targets, tools, infrastructure, motivation" },
        { id: "ir8_campaign_tracking", label: "Track active campaigns — industry-relevant, geographic, technology-specific" },
        { id: "ir8_proactive", label: "Proactive threat hunting — based on latest intel, assumed breach, TTP-focused" },
      ]},
      { id: "ir8_maturity", label: "IR Program Maturity", children: [
        { id: "ir8_assessment", label: "Assess IR maturity — annual assessment, NIST SP 800-61, CMMI, benchmark" },
        { id: "ir8_automation", label: "Increase automation — SOAR playbooks, automated triage, enrichment, containment" },
        { id: "ir8_community", label: "Engage security community — information sharing, ISAC participation, conferences" },
        { id: "ir8_roadmap", label: "Maintain improvement roadmap — prioritized initiatives, resource planning, investment justification" },
      ]}
    ]
  }
];
