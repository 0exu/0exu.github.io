window.CHECKLIST_SOC_ANALYST = [
  {
    id: "soc_phase1", icon: "fas fa-desktop", label: "PHASE 1: SOC Environment & Tool Familiarity", severity: "info",
    children: [
      {
        id: "soc1_siem", label: "SIEM Proficiency", children: [
          { id: "soc1_siem_platform", label: "SIEM Platform — Splunk, QRadar, Sentinel, ELK familiarity" },
          { id: "soc1_siem_queries", label: "Query Language — SPL, KQL, AQL for log searching" },
          { id: "soc1_siem_dashboards", label: "Dashboards — Create and use monitoring dashboards" },
          { id: "soc1_siem_alerts", label: "Alert Rules — Understand existing alert rule logic" },
        ]
      },
      {
        id: "soc1_edr", label: "EDR & Endpoint Tools", children: [
          { id: "soc1_edr_platform", label: "EDR Platform — CrowdStrike, Defender, SentinelOne, Carbon Black" },
          { id: "soc1_edr_query", label: "Endpoint Queries — Process, file, registry, network queries" },
          { id: "soc1_edr_response", label: "Response Actions — Isolate, kill process, quarantine, collect" },
        ]
      },
      {
        id: "soc1_network", label: "Network Analysis Tools", children: [
          { id: "soc1_network_pcap", label: "PCAP Analysis — Wireshark, Zeek, tcpdump for traffic analysis" },
          { id: "soc1_network_flow", label: "NetFlow Analysis — Network traffic flow monitoring" },
          { id: "soc1_network_ids", label: "IDS/IPS — Snort, Suricata rule understanding and alert review" },
          { id: "soc1_network_proxy", label: "Proxy Logs — Web proxy, DNS, firewall log analysis" },
        ]
      },
      {
        id: "soc1_threat_intel", label: "Threat Intelligence Sources", children: [
          { id: "soc1_ti_platform", label: "TI Platform — MISP, ThreatConnect, OpenCTI for IOC management" },
          { id: "soc1_ti_feeds", label: "Intel Feeds — OTX, AbuseIPDB, AlienVault for threat data" },
          { id: "soc1_ti_mitre", label: "MITRE ATT&CK — Technique and TTP reference" },
          { id: "soc1_ti_reports", label: "Threat Reports — Vendor and industry threat intelligence reports" },
        ]
      }
    ]
  },
  {
    id: "soc_phase2", icon: "fas fa-bell", label: "PHASE 2: Alert Triage & Initial Assessment", severity: "critical",
    children: [
      {
        id: "soc2_alert_review", label: "Alert Review", children: [
          { id: "soc2_alert_details", label: "Alert Details — Source, destination, timestamp, rule triggered" },
          { id: "soc2_alert_severity", label: "Severity Assessment — Critical, high, medium, low classification" },
          { id: "soc2_alert_context", label: "Context Gathering — Asset info, user identity, related alerts" },
          { id: "soc2_alert_frequency", label: "Frequency Check — First occurrence or recurring pattern" },
          { id: "soc2_alert_fp_check", label: "False Positive Check — Known FP, whitelisted, benign activity" },
        ]
      },
      {
        id: "soc2_triage", label: "Triage Decision Making", children: [
          { id: "soc2_triage_dismiss", label: "Dismiss — False positive, documented benign activity" },
          { id: "soc2_triage_escalate", label: "Escalate — True positive requiring senior analyst or IR team" },
          { id: "soc2_triage_monitor", label: "Monitor — Suspicious but not confirmed, watch for more indicators" },
          { id: "soc2_triage_investigate", label: "Investigate — Requires deeper analysis before decision" },
        ]
      },
      {
        id: "soc2_common_alerts", label: "Common Alert Types", children: [
          { id: "soc2_alert_malware", label: "Malware Detection — AV/EDR malware alerts" },
          { id: "soc2_alert_brute", label: "Brute Force — Multiple failed login attempts" },
          { id: "soc2_alert_phishing", label: "Phishing — Reported or detected phishing emails" },
          { id: "soc2_alert_lateral", label: "Lateral Movement — Unusual internal network traffic" },
          { id: "soc2_alert_priv_esc", label: "Privilege Escalation — Unusual privilege changes" },
          { id: "soc2_alert_data_exfil", label: "Data Exfiltration — Unusual outbound data transfer" },
          { id: "soc2_alert_c2", label: "C2 Communication — Beaconing, known C2 IPs/domains" },
          { id: "soc2_alert_anomaly", label: "Anomalous Behavior — Deviation from baseline behavior" },
        ]
      }
    ]
  },
  {
    id: "soc_phase3", icon: "fas fa-search", label: "PHASE 3: Incident Investigation & Analysis", severity: "critical",
    children: [
      {
        id: "soc3_endpoint_inv", label: "Endpoint Investigation", children: [
          { id: "soc3_endpoint_process", label: "Process Analysis — Process tree, parent-child relationships" },
          { id: "soc3_endpoint_file", label: "File Analysis — Created, modified, deleted files" },
          { id: "soc3_endpoint_registry", label: "Registry Analysis — Modified registry keys and values" },
          { id: "soc3_endpoint_network", label: "Network Connections — Outbound connections from endpoint" },
          { id: "soc3_endpoint_persistence", label: "Persistence — Autoruns, scheduled tasks, services" },
          { id: "soc3_endpoint_command", label: "Command Execution — PowerShell, cmd.exe commands run" },
        ]
      },
      {
        id: "soc3_network_inv", label: "Network Investigation", children: [
          { id: "soc3_network_traffic", label: "Traffic Analysis — Volume, protocols, destinations" },
          { id: "soc3_network_dns", label: "DNS Analysis — Queries, responses, suspicious domains" },
          { id: "soc3_network_proxy", label: "Proxy Analysis — URLs, user agents, content categories" },
          { id: "soc3_network_firewall", label: "Firewall Logs — Allowed/blocked connections, rule hits" },
          { id: "soc3_network_pcap", label: "Packet Capture — Deep packet inspection for suspicious content" },
          { id: "soc3_network_beacon", label: "Beacon Detection — Periodic C2 communication patterns" },
        ]
      },
      {
        id: "soc3_identity_inv", label: "Identity & Account Investigation", children: [
          { id: "soc3_identity_login", label: "Login Analysis — Successful and failed logins" },
          { id: "soc3_identity_impossible", label: "Impossible Travel — Logins from geographically distant locations" },
          { id: "soc3_identity_privilege", label: "Privilege Changes — Role, group, permission modifications" },
          { id: "soc3_identity_lateral", label: "Lateral Movement — Account usage across multiple systems" },
          { id: "soc3_identity_service", label: "Service Accounts — Unusual service account activity" },
        ]
      },
      {
        id: "soc3_email_inv", label: "Email Investigation", children: [
          { id: "soc3_email_header", label: "Email Headers — Full header analysis for spoofing, relay path" },
          { id: "soc3_email_attachment", label: "Attachment Analysis — File type, hash, sandbox results" },
          { id: "soc3_email_url", label: "URL Analysis — Embedded links, redirect chains, landing pages" },
          { id: "soc3_email_sender", label: "Sender Analysis — Spoofed domains, lookalike addresses" },
          { id: "soc3_email_scope", label: "Scope Determination — How many users received the email" },
        ]
      }
    ]
  },
  {
    id: "soc_phase4", icon: "fas fa-shield-virus", label: "PHASE 4: Threat Hunting & Proactive Detection", severity: "high",
    children: [
      {
        id: "soc4_hunt_hypothesis", label: "Hypothesis-Driven Hunting", children: [
          { id: "soc4_hunt_mitre", label: "MITRE-Based — Hunt for specific ATT&CK techniques" },
          { id: "soc4_hunt_ioc", label: "IOC-Based — Search for known indicators of compromise" },
          { id: "soc4_hunt_behavior", label: "Behavioral — Hunt for anomalous behavior patterns" },
          { id: "soc4_hunt_ttp", label: "TTP-Based — Hunt for specific attacker techniques" },
        ]
      },
      {
        id: "soc4_hunt_techniques", label: "Hunting Techniques", children: [
          { id: "soc4_hunt_longtail", label: "Long Tail Analysis — Rare or unusual events" },
          { id: "soc4_hunt_clustering", label: "Clustering — Group similar events to find patterns" },
          { id: "soc4_hunt_stack", label: "Data Stacking — Count and rank values to find outliers" },
          { id: "soc4_hunt_anomaly", label: "Anomaly Detection — Statistical anomalies in data" },
          { id: "soc4_hunt_chaining", label: "Event Chaining — Link multiple low-severity events" },
          { id: "soc4_hunt_lolbins", label: "LOLBin Detection — Living-off-the-land binary usage" },
        ]
      },
      {
        id: "soc4_hunt_sources", label: "Data Sources for Hunting", children: [
          { id: "soc4_hunt_sysmon", label: "Sysmon Logs — Process creation, network connections, file events" },
          { id: "soc4_hunt_powershell", label: "PowerShell Logs — Script blocks, module loading, transcription" },
          { id: "soc4_hunt_dns", label: "DNS Logs — Query analysis for suspicious domains" },
          { id: "soc4_hunt_proxy", label: "Proxy Logs — Web traffic analysis" },
          { id: "soc4_hunt_auth", label: "Authentication Logs — Logon events, ticket requests" },
        ]
      }
    ]
  },
  {
    id: "soc_phase5", icon: "fas fa-exclamation-triangle", label: "PHASE 5: Incident Response & Escalation", severity: "critical",
    children: [
      {
        id: "soc5_response", label: "Immediate Response Actions", children: [
          { id: "soc5_response_contain", label: "Containment — Isolate affected endpoint from network" },
          { id: "soc5_response_disable", label: "Account Disable — Disable compromised user accounts" },
          { id: "soc5_response_block", label: "Block IOCs — Firewall, DNS, proxy blocking of malicious IOCs" },
          { id: "soc5_response_quarantine", label: "File Quarantine — Quarantine malicious files via EDR" },
          { id: "soc5_response_kill", label: "Kill Process — Terminate malicious processes" },
        ]
      },
      {
        id: "soc5_escalation", label: "Escalation Procedures", children: [
          { id: "soc5_escalate_tier2", label: "Tier 2 Escalation — Complex incidents requiring deeper analysis" },
          { id: "soc5_escalate_ir", label: "IR Team Escalation — Confirmed breach requiring incident response" },
          { id: "soc5_escalate_mgmt", label: "Management Escalation — High-impact incidents requiring leadership" },
          { id: "soc5_escalate_legal", label: "Legal Escalation — Incidents with legal or regulatory implications" },
          { id: "soc5_escalate_external", label: "External Escalation — Law enforcement, CERT, vendor notification" },
        ]
      },
      {
        id: "soc5_documentation", label: "Incident Documentation", children: [
          { id: "soc5_doc_timeline", label: "Timeline — Chronological event documentation" },
          { id: "soc5_doc_evidence", label: "Evidence Preservation — Screenshots, log exports, PCAP" },
          { id: "soc5_doc_ticket", label: "Ticket Notes — Detailed investigation notes in ticketing system" },
          { id: "soc5_doc_ioc", label: "IOC Documentation — All identified indicators of compromise" },
          { id: "soc5_doc_scope", label: "Scope Assessment — Affected systems, users, data extent" },
        ]
      }
    ]
  },
  {
    id: "soc_phase6", icon: "fas fa-chart-line", label: "PHASE 6: Detection Engineering & Improvement", severity: "high",
    children: [
      {
        id: "soc6_detection", label: "Detection Rule Development", children: [
          { id: "soc6_detect_siem", label: "SIEM Rules — Create new detection rules for identified gaps" },
          { id: "soc6_detect_sigma", label: "Sigma Rules — Log-agnostic detection rule development" },
          { id: "soc6_detect_yara", label: "YARA Rules — File and memory pattern detection rules" },
          { id: "soc6_detect_correlation", label: "Correlation Rules — Multi-event detection logic" },
          { id: "soc6_detect_tuning", label: "Rule Tuning — Reduce false positives, improve accuracy" },
        ]
      },
      {
        id: "soc6_improvement", label: "Process Improvement", children: [
          { id: "soc6_improve_playbook", label: "Playbook Creation — Document response procedures" },
          { id: "soc6_improve_automation", label: "Automation — SOAR playbooks for repetitive tasks" },
          { id: "soc6_improve_dashboard", label: "Dashboard Updates — New visualizations for monitoring" },
          { id: "soc6_improve_metrics", label: "Metrics Tracking — MTTD, MTTR, FP rate monitoring" },
          { id: "soc6_improve_coverage", label: "Coverage Assessment — Map detections to MITRE ATT&CK" },
        ]
      }
    ]
  },
  {
    id: "soc_phase7", icon: "fas fa-graduation-cap", label: "PHASE 7: Continuous Learning & Skill Development", severity: "info",
    children: [
      {
        id: "soc7_learning", label: "Skill Development", children: [
          { id: "soc7_learn_certifications", label: "Certifications — CompTIA CySA+, GCIH, GCFA, BTL1, etc." },
          { id: "soc7_learn_labs", label: "Lab Practice — Build home lab, practice incident scenarios" },
          { id: "soc7_learn_ctf", label: "CTFs & Challenges — Blue team CTFs, defensive challenges" },
          { id: "soc7_learn_community", label: "Community — Infosec Twitter, Discord, conferences, blogs" },
        ]
      },
      {
        id: "soc7_tools", label: "Tool Mastery", children: [
          { id: "soc7_tools_siem", label: "SIEM Mastery — Advanced query development and dashboard creation" },
          { id: "soc7_tools_scripting", label: "Scripting — Python, PowerShell, Bash for automation" },
          { id: "soc7_tools_analysis", label: "Analysis Tools — Volatility, Wireshark, YARA, CyberChef" },
          { id: "soc7_tools_threat_intel", label: "Threat Intel Tools — MISP, OpenCTI, MITRE ATT&CK Navigator" },
        ]
      }
    ]
  }
];
