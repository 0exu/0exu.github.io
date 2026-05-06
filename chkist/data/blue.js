window.CHECKLIST_BLUE = [
  {
    id: "blue_phase1", icon: "fas fa-shield-alt", label: "PHASE 1: Asset Inventory & Security Baseline", severity: "info",
    children: [
      { id: "blue1_assets", label: "Asset Discovery & Inventory", children: [
        { id: "blue1_hw_inv", label: "Hardware inventory — servers, workstations, network devices, IoT, mobile" },
        { id: "blue1_sw_inv", label: "Software inventory — OS, applications, databases, middleware, libraries" },
        { id: "blue1_cloud_inv", label: "Cloud asset inventory — VMs, containers, serverless, storage, databases" },
        { id: "blue1_data_inv", label: "Data inventory — classification, storage locations, data flows, ownership" },
        { id: "blue1_shadow_it", label: "Shadow IT discovery — unauthorized apps, services, cloud accounts" },
        { id: "blue1_cmdb", label: "Maintain CMDB — configuration management database, asset lifecycle" },
      ]},
      { id: "blue1_baseline", label: "Security Baseline Establishment", children: [
        { id: "blue1_cis", label: "Apply CIS Benchmarks — OS, application, network device hardening" },
        { id: "blue1_stig", label: "Apply DISA STIGs — DoD security configuration requirements" },
        { id: "blue1_patch_level", label: "Verify patch levels — OS patches, application updates, firmware versions" },
        { id: "blue1_config_baseline", label: "Establish configuration baseline — known-good state, drift detection" },
        { id: "blue1_crypto_baseline", label: "Verify cryptographic baseline — TLS versions, cipher suites, certificate validity" },
      ]},
      { id: "blue1_iam_baseline", label: "Identity & Access Baseline", children: [
        { id: "blue1_mfa", label: "Verify MFA enforcement — all users, admins, service accounts, break-glass" },
        { id: "blue1_password_policy", label: "Review password policy — complexity, expiration, breach checking" },
        { id: "blue1_privileged", label: "Audit privileged accounts — admin groups, service accounts, delegation" },
        { id: "blue1_orphaned", label: "Identify orphaned accounts — departed employees, unused service accounts" },
        { id: "blue1_excessive", label: "Identify excessive permissions — over-provisioned, unused rights, wildcard" },
      ]}
    ]
  },
  {
    id: "blue_phase2", icon: "fas fa-lock", label: "PHASE 2: Network Hardening & Perimeter Defense", severity: "critical",
    children: [
      { id: "blue2_seg", label: "Network Segmentation & Zero Trust", children: [
        { id: "blue2_microseg", label: "Implement micro-segmentation — workload-level isolation, east-west controls" },
        { id: "blue2_vlan", label: "Design VLAN architecture — management, user, server, DMZ, guest separation" },
        { id: "blue2_zerotrust", label: "Deploy Zero Trust — identity-centric, least privilege, continuous verification" },
        { id: "blue2_nac", label: "Deploy NAC — device authentication, posture assessment, network access control" },
        { id: "blue2_dmz", label: "Harden DMZ — public-facing services, reverse proxy, WAF, bastion hosts" },
      ]},
      { id: "blue2_firewall", label: "Firewall & Perimeter Hardening", children: [
        { id: "blue2_egress", label: "Implement egress filtering — allow-list outbound traffic, DNS-only by default" },
        { id: "blue2_ingress", label: "Implement ingress filtering — deny all inbound, explicit allow rules" },
        { id: "blue2_rule_review", label: "Review firewall rules — remove stale rules, consolidate, document rationale" },
        { id: "blue2_ngfw", label: "Deploy NGFW features — IPS, application control, URL filtering, sandboxing" },
        { id: "blue2_default_deny", label: "Enforce default deny — implicit deny at end of ACL, explicit logging" },
      ]},
      { id: "blue2_dns_email", label: "DNS & Email Security", children: [
        { id: "blue2_dns_filter", label: "Deploy DNS filtering — RPZ, DNS sinkhole, DoH/DoT, DNSSEC validation" },
        { id: "blue2_email_sec", label: "Harden email security — SPF, DKIM, DMARC, anti-phishing, attachment sandboxing" },
        { id: "blue2_tls_inspect", label: "Deploy TLS inspection — decrypt/re-encrypt for content inspection" },
        { id: "blue2_dmarc_enforce", label: "Enforce DMARC policy — p=reject, rua/ruf reporting, subdomain policy" },
      ]},
      { id: "blue2_wireless", label: "Wireless Network Security", children: [
        { id: "blue2_wpa3", label: "Enforce WPA3/Enterprise — 802.1X authentication, certificate-based auth" },
        { id: "blue2_guest_wifi", label: "Secure guest WiFi — isolated VLAN, captive portal, bandwidth limits" },
        { id: "blue2_rogue_ap", label: "Deploy rogue AP detection — WIDS/WIPS, unauthorized device alerting" },
        { id: "blue2_wifi_monitor", label: "Monitor wireless traffic — protocol analysis, deauthentication attack detection" },
      ]}
    ]
  },
  {
    id: "blue_phase3", icon: "fas fa-laptop-code", label: "PHASE 3: Endpoint Hardening & Protection", severity: "high",
    children: [
      { id: "blue3_edr", label: "Endpoint Detection & Response", children: [
        { id: "blue3_edr_deploy", label: "Deploy EDR on all endpoints — CrowdStrike, SentinelOne, Defender for Endpoint" },
        { id: "blue3_edr_policy", label: "Configure EDR policies — behavioral blocking, detection tuning, response automation" },
        { id: "blue3_edr_coverage", label: "Verify EDR coverage — 100% endpoint deployment, health monitoring, gap remediation" },
        { id: "blue3_edr_response", label: "Configure automated response — isolate, kill process, quarantine, collect artifacts" },
      ]},
      { id: "blue3_hardening", label: "Endpoint Hardening", children: [
        { id: "blue3_gpo", label: "Harden via GPO — security baselines, account policies, audit policies" },
        { id: "blue3_applocker", label: "Deploy AppLocker/WDAC — application allowlisting, script restrictions" },
        { id: "blue3_disk_enc", label: "Enforce disk encryption — BitLocker, FileVault, LUKS with key escrow" },
        { id: "blue3_usb", label: "Implement USB control — device control policies, read-only allowlist, auditing" },
        { id: "blue3_asr", label: "Deploy Attack Surface Reduction — Windows ASR rules, AMSI, SmartScreen" },
      ]},
      { id: "blue3_patch", label: "Vulnerability & Patch Management", children: [
        { id: "blue3_vuln_scan", label: "Run vulnerability scans — authenticated, unauthenticated, credentialed" },
        { id: "blue3_patch_deploy", label: "Deploy patches — WSUS, SCCM, Intune, automatic approval for critical" },
        { id: "blue3_zero_day", label: "Zero-day response plan — temporary mitigations, virtual patching, monitoring" },
        { id: "blue3_eol", label: "Track EOL/EOS assets — unsupported OS, deprecated software, replacement planning" },
      ]}
    ]
  },
  {
    id: "blue_phase4", icon: "fas fa-eye", label: "PHASE 4: Logging, Monitoring & Visibility", severity: "critical",
    children: [
      { id: "blue4_logging", label: "Comprehensive Logging Strategy", children: [
        { id: "blue4_sysmon", label: "Deploy Sysmon — process creation, network connections, file creation, registry" },
        { id: "blue4_auditd", label: "Deploy auditd (Linux) — syscall auditing, file integrity, user activity" },
        { id: "blue4_powershell", label: "Enable PowerShell logging — script block, module, transcription, constrained language mode" },
        { id: "blue4_dns_log", label: "Enable DNS logging — query/response logging, DNS server debug logging" },
        { id: "blue4_proxy_log", label: "Collect proxy logs — URL, user, category, bandwidth, SSL inspection results" },
        { id: "blue4_netflow", label: "Collect NetFlow/IPFIX — traffic metadata, conversation analysis, anomaly detection" },
      ]},
      { id: "blue4_siem", label: "SIEM & Centralized Monitoring", children: [
        { id: "blue4_siem_deploy", label: "Deploy SIEM — Splunk, Sentinel, ELK, QRadar with proper architecture" },
        { id: "blue4_siem_ingest", label: "Configure log ingestion — all sources, proper parsing, field extraction" },
        { id: "blue4_siem_retention", label: "Define retention policy — hot/warm/cold storage, compliance requirements" },
        { id: "blue4_siem_dashboard", label: "Build monitoring dashboards — real-time visibility, KPI tracking, alert status" },
        { id: "blue4_siem_nta", label: "Deploy NTA/NDR — network traffic analysis, behavioral anomaly detection" },
      ]},
      { id: "blue4_alerting", label: "Alert Management & Triage", children: [
        { id: "blue4_alert_rules", label: "Create alert rules — critical events, anomaly detection, threat correlation" },
        { id: "blue4_alert_tuning", label: "Tune alert thresholds — reduce noise, eliminate false positives, adjust sensitivity" },
        { id: "blue4_alert_escalation", label: "Define escalation paths — SOC L1/L2/L3, IR team, management notification" },
        { id: "blue4_alert_fatigue", label: "Combat alert fatigue — correlation, suppression, prioritization, automation" },
      ]}
    ]
  },
  {
    id: "blue_phase5", icon: "fas fa-crosshairs", label: "PHASE 5: Threat Intelligence & Threat Hunting", severity: "high",
    children: [
      { id: "blue5_ti", label: "Threat Intelligence Program", children: [
        { id: "blue5_ti_feeds", label: "Subscribe to threat feeds — MISP, AlienVault OTX, commercial feeds, ISACs" },
        { id: "blue5_ti_ttp", label: "Track adversary TTPs — MITRE ATT&CK, threat actor profiles, campaign analysis" },
        { id: "blue5_ti_ioc", label: "Ingest and deploy IOCs — automated IOC matching, SIEM rules, firewall blocks" },
        { id: "blue5_ti_context", label: "Provide contextual intelligence — industry-specific threats, geographic relevance" },
      ]},
      { id: "blue5_hunt", label: "Proactive Threat Hunting", children: [
        { id: "blue5_hunt_hypothesis", label: "Develop hunt hypotheses — ATT&CK-based, anomaly-based, intel-driven" },
        { id: "blue5_hunt_lolbas", label: "Hunt LOLBAS abuse — certutil, bitsadmin, mshta, regsvr32, powershell" },
        { id: "blue5_hunt_persistence", label: "Hunt persistence mechanisms — scheduled tasks, services, WMI, registry run keys" },
        { id: "blue5_hunt_lateral", label: "Hunt lateral movement — PsExec, WMI remoting, pass-the-hash, RDP anomalies" },
        { id: "blue5_hunt_c2", label: "Hunt C2 communications — beaconing patterns, DNS tunneling, JA3 fingerprinting" },
        { id: "blue5_hunt_exfil", label: "Hunt data exfiltration — large transfers, steganography, cloud upload anomalies" },
      ]},
      { id: "blue5_deception", label: "Deception Technology", children: [
        { id: "blue5_honeypot", label: "Deploy honeypots — Cowrie, Kippo, Conpot, custom decoy systems" },
        { id: "blue5_honeytoken", label: "Deploy honeytokens — fake credentials, documents, API keys, database entries" },
        { id: "blue5_honeyaccount", label: "Deploy honey accounts — decoy AD accounts, cloud accounts with alerting" },
        { id: "blue5_canary", label: "Deploy canary devices — canarytokens, AWS canary tokens, network decoys" },
      ]}
    ]
  },
  {
    id: "blue_phase6", icon: "fas fa-bell", label: "PHASE 6: Detection Engineering & Rule Development", severity: "critical",
    children: [
      { id: "blue6_rules", label: "Detection Rule Development", children: [
        { id: "blue6_sigma", label: "Develop Sigma rules — platform-agnostic, version-controlled, tested detections" },
        { id: "blue6_siem_custom", label: "Develop custom SIEM rules — KQL, SPL, Lucene, correlation rules" },
        { id: "blue6_yara", label: "Develop YARA rules — malware detection, file-based indicators, memory scanning" },
        { id: "blue6_edr_custom", label: "Develop custom EDR rules — behavioral detection, IOC matching, process tree" },
      ]},
      { id: "blue6_testing", label: "Detection Testing & Validation", children: [
        { id: "blue6_atomic", label: "Test with Atomic Red Team — technique-by-technique validation" },
        { id: "blue6_caldera", label: "Test with MITRE Caldera — adversary emulation, automated TTP execution" },
        { id: "blue6_bas", label: "Deploy BAS tools — Breach and Attack Simulation, continuous validation" },
        { id: "blue6_coverage", label: "Measure detection coverage — ATT&CK mapping, gap analysis, prioritization" },
      ]},
      { id: "blue6_pipeline", label: "Detection as Code Pipeline", children: [
        { id: "blue6_cicd", label: "Setup detection CI/CD — linting, testing, deployment, rollback capabilities" },
        { id: "blue6_version_control", label: "Version control detections — Git, PR review, change management, documentation" },
        { id: "blue6_quality", label: "Implement detection quality gates — unit testing, false positive testing, performance" },
      ]}
    ]
  },
  {
    id: "blue_phase7", icon: "fas fa-medkit", label: "PHASE 7: Incident Response & Forensics", severity: "critical",
    children: [
      { id: "blue7_ir_prep", label: "Incident Response Preparation", children: [
        { id: "blue7_ir_plan", label: "Maintain IR plan — documented procedures, roles, escalation, contact lists" },
        { id: "blue7_playbooks", label: "Maintain IR playbooks — malware, phishing, ransomware, data breach, insider threat" },
        { id: "blue7_toolkit", label: "Maintain forensic toolkit — KAPE, Velociraptor, FTK Imager, Wireshark, Volatility" },
        { id: "blue7_comm", label: "Setup secure communication — encrypted channels, out-of-band, incident war room" },
      ]},
      { id: "blue7_triage", label: "Incident Triage & Response", children: [
        { id: "blue7_detect", label: "Detect and validate — alert triage, false positive elimination, severity assessment" },
        { id: "blue7_scope", label: "Scope the incident — affected systems, users, data, timeline, attack vector" },
        { id: "blue7_contain", label: "Contain the threat — network isolation, account suspension, IOC blocking" },
        { id: "blue7_eradicate", label: "Eradicate the threat — malware removal, persistence cleanup, vulnerability patching" },
        { id: "blue7_recover", label: "Recover operations — clean restore, enhanced monitoring, functional verification" },
      ]},
      { id: "blue7_forensics", label: "Digital Forensics & Evidence", children: [
        { id: "blue7_memory", label: "Capture volatile memory — RAM dump, process list, network connections, registry" },
        { id: "blue7_disk", label: "Create forensic images — bit-by-bit copy, hash verification, write blockers" },
        { id: "blue7_artifacts", label: "Analyze forensic artifacts — prefetch, shimcache, amcache, LNK files, jumplists" },
        { id: "blue7_timeline", label: "Build forensic timeline — super timeline, event correlation, attack reconstruction" },
        { id: "blue7_chain", label: "Maintain chain of custody — documentation, hash verification, access control, legal hold" },
      ]}
    ]
  },
  {
    id: "blue_phase8", icon: "fas fa-chart-bar", label: "PHASE 8: Metrics, Improvement & Security Program", severity: "info",
    children: [
      { id: "blue8_metrics", label: "Security Metrics & KPIs", children: [
        { id: "blue8_mttd", label: "Track MTTD — Mean Time to Detect, target <1 hour for critical" },
        { id: "blue8_mttc", label: "Track MTTC — Mean Time to Contain, target <4 hours for critical" },
        { id: "blue8_mttr", label: "Track MTTR — Mean Time to Respond/Recover, target <24 hours for critical" },
        { id: "blue8_fp_rate", label: "Track false positive rate — detection accuracy, rule tuning effectiveness" },
        { id: "blue8_coverage", label: "Track detection coverage — ATT&CK technique coverage, data source coverage" },
      ]},
      { id: "blue8_program", label: "Security Program Maturity", children: [
        { id: "blue8_tabletop", label: "Conduct tabletop exercises — scenario-based, cross-functional, leadership involvement" },
        { id: "blue8_red_team", label: "Engage red team — adversary simulation, detection testing, control validation" },
        { id: "blue8_purple", label: "Run purple team exercises — collaborative detection tuning, gap remediation" },
        { id: "blue8_training", label: "Continuous team training — certifications, conferences, hands-on labs, CTF" },
        { id: "blue8_automation", label: "Implement SOAR — automated triage, enrichment, containment, escalation" },
      ]},
      { id: "blue8_compliance", label: "Compliance & Audit Readiness", children: [
        { id: "blue8_audit_prep", label: "Maintain audit readiness — evidence collection, policy documentation, control testing" },
        { id: "blue8_risk_assess", label: "Conduct risk assessments — annual, change-triggered, threat-based" },
        { id: "blue8_policy_review", label: "Review security policies — annual update, regulatory changes, incident lessons" },
      ]}
    ]
  }
];
