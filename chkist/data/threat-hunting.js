window.CHECKLIST_THREAT_HUNTING = [
  {
    id: "th_phase1", icon: "fas fa-lightbulb", label: "PHASE 1: Hypothesis Development & Threat Modeling", severity: "critical",
    children: [
      { id: "th1_ttp", label: "TTP-Based Hypothesis Generation", children: [
        { id: "th1_mitre_gaps", label: "Identify undetected ATT&CK techniques — techniques with no current detection rules" },
        { id: "th1_apt_emulation", label: "Hypothesize APT techniques — threat actors targeting your industry, known TTPs" },
        { id: "th1_technique_variations", label: "Consider technique variations — known TTPs implemented differently, novel approaches" },
        { id: "th1_attack_path", label: "Hypothesize attack paths — kill chain analysis, lateral movement paths, privilege escalation" },
        { id: "th1_defense_evasion", label: "Focus on defense evasion — techniques designed to bypass current security controls" },
      ]},
      { id: "th1_intel", label: "Threat Intelligence-Driven Hypotheses", children: [
        { id: "th1_campaign", label: "Active campaign analysis — current campaigns targeting your industry, IOCs, TTPs" },
        { id: "th1_actor", label: "Threat actor profiling — actor motivations, capabilities, targeting patterns, infrastructure" },
        { id: "th1_ioc_matching", label: "IOC-based hunting — recent IOC feeds, dark web monitoring, breach data, leak sites" },
        { id: "th1_vuln_exploit", label: "Vulnerability exploitation — newly disclosed CVEs, actively exploited vulnerabilities, zero-days" },
        { id: "th1_trend", label: "Industry threat trends — emerging threats, new techniques, industry-specific campaigns" },
      ]},
      { id: "th1_risk", label: "Risk & Asset-Driven Hypotheses", children: [
        { id: "th1_crown_jewels", label: "Protect crown jewels — critical assets, sensitive data, high-value targets, key systems" },
        { id: "th1_vulnerable", label: "Focus on vulnerable assets — unpatched systems, EOL software, known vulnerabilities" },
        { id: "th1_high_value_users", label: "Focus on high-value users — executives, admins, finance, R&D, targeted individuals" },
        { id: "th1_exposed", label: "Focus on exposed assets — internet-facing systems, public IPs, cloud resources" },
      ]},
      { id: "th1_anomaly", label: "Anomaly & Data-Driven Hypotheses", children: [
        { id: "th1_statistical", label: "Statistical anomalies — outliers in log data, volume changes, timing patterns" },
        { id: "th1_baseline_deviation", label: "Baseline deviation — changes from normal behavior, new processes, unusual connections" },
        { id: "th1_rare_events", label: "Rare event analysis — uncommon processes, infrequent connections, unusual data transfers" },
        { id: "th1_long_tail", label: "Long-tail analysis — infrequent but significant events, low-and-slow attacks" },
      ]}
    ]
  },
  {
    id: "th_phase2", icon: "fas fa-database", label: "PHASE 2: Data Engineering & Collection Infrastructure", severity: "high",
    children: [
      { id: "th2_data_sources", label: "Data Source Identification & Collection", children: [
        { id: "th2_edr_telemetry", label: "Collect EDR telemetry — process creation, network connections, file operations, registry" },
        { id: "th2_network_telemetry", label: "Collect network data — NetFlow, DNS queries, HTTP logs, proxy logs, PCAP" },
        { id: "th2_identity_telemetry", label: "Collect identity data — authentication logs, AD events, token usage, Kerberos tickets" },
        { id: "th2_cloud_telemetry", label: "Collect cloud data — CloudTrail, Azure Activity, GCP Audit, container logs" },
        { id: "th2_endpoint_telemetry", label: "Collect endpoint data — registry changes, service creation, scheduled tasks, WMI" },
        { id: "th2_email_telemetry", label: "Collect email data — headers, attachments, links, sender reputation, phishing indicators" },
      ]},
      { id: "th2_platform", label: "Hunting Platform & Tool Setup", children: [
        { id: "th2_siem_query", label: "Setup SIEM queries — KQL (Sentinel), SPL (Splunk), Lucene (ELK), custom queries" },
        { id: "th2_notebooks", label: "Setup Jupyter notebooks — Python, pandas, matplotlib, scikit-learn for analysis" },
        { id: "th2_zeek", label: "Deploy Zeek — network protocol analysis, connection logs, DNS logs, file extraction" },
        { id: "th2_velociraptor", label: "Deploy Velociraptor/GRR — endpoint collection, artifact queries, live response" },
        { id: "th2_data_lake", label: "Build data lake — centralized storage, indexed, searchable, retention management" },
      ]},
      { id: "th2_data_quality", label: "Data Quality & Validation", children: [
        { id: "th2_completeness", label: "Validate data completeness — log source coverage, event volume, gap identification" },
        { id: "th2_accuracy", label: "Validate data accuracy — field parsing, timestamp accuracy, normalization, deduplication" },
        { id: "th2_freshness", label: "Validate data freshness — ingestion latency, real-time vs. batch, alerting on delays" },
        { id: "th2_enrichment", label: "Implement enrichment — asset context, user context, threat intel, geolocation, reputation" },
      ]}
    ]
  },
  {
    id: "th_phase3", icon: "fas fa-search", label: "PHASE 3: Investigation Techniques & Analysis Methods", severity: "critical",
    children: [
      { id: "th3_query", label: "Query-Driven Hunting Techniques", children: [
        { id: "th3_targeted_query", label: "Targeted queries — specific indicators, known IOCs, signature-based detection" },
        { id: "th3_aggregation", label: "Aggregation queries — group by, count, frequency analysis, statistical queries" },
        { id: "th3_join", label: "Join queries — cross-source correlation, endpoint + network, identity + process" },
        { id: "th3_time_series", label: "Time series analysis — temporal patterns, seasonality, trend analysis, anomaly over time" },
        { id: "th3_regex", label: "Regex-based hunting — pattern matching, command-line analysis, URL patterns, file paths" },
      ]},
      { id: "th3_behavioral", label: "Behavioral Hunting Techniques", children: [
        { id: "th3_process_tree", label: "Process tree analysis — parent-child relationships, unusual spawning, LOLBAS chains" },
        { id: "th3_network_behavior", label: "Network behavior analysis — connection patterns, protocol usage, data transfer patterns" },
        { id: "th3_user_behavior", label: "User behavior analysis — login patterns, access patterns, privilege usage, anomalies" },
        { id: "th3_file_behavior", label: "File behavior analysis — creation patterns, modification, execution, deletion patterns" },
      ]},
      { id: "th3_advanced", label: "Advanced Analytical Techniques", children: [
        { id: "th3_clustering", label: "Clustering analysis — group similar events, identify outliers, K-means, DBSCAN" },
        { id: "th3_chaining", label: "Event chaining — link related events across time and systems, attack chain reconstruction" },
        { id: "th3_stack_pivot", label: "Stack counting/pivoting — aggregate data, pivot from findings, drill-down analysis" },
        { id: "th3_graph", label: "Graph analysis — relationship mapping, network graphs, entity resolution, centrality" },
        { id: "th3_ml", label: "Machine learning — anomaly detection, classification, clustering, supervised/unsupervised" },
      ]}
    ]
  },
  {
    id: "th_phase4", icon: "fas fa-crosshairs", label: "PHASE 4: Attacker Behavior Hunting by ATT&CK Tactic", severity: "critical",
    children: [
      { id: "th4_initial_access", label: "Initial Access Hunting", children: [
        { id: "th4_phishing", label: "Hunt phishing — malicious attachments, link clicks, credential harvesting, macro execution" },
        { id: "th4_exploit", label: "Hunt exploitation — exploit execution, vulnerability abuse, drive-by downloads" },
        { id: "th4_valid_accounts", label: "Hunt valid account abuse — credential stuffing, password spray, purchased credentials" },
        { id: "th4_supply_chain", label: "Hunt supply chain attacks — compromised software, trusted relationship abuse" },
      ]},
      { id: "th4_execution_persistence", label: "Execution & Persistence Hunting", children: [
        { id: "th4_lolbas", label: "Hunt LOLBAS abuse — certutil, bitsadmin, mshta, regsvr32, powershell, wmic, rundll32" },
        { id: "th4_persistence", label: "Hunt persistence — registry run keys, scheduled tasks, services, WMI, startup folders" },
        { id: "th4_scripting", label: "Hunt script execution — PowerShell, VBScript, JavaScript, Python, Bash abuse" },
        { id: "th4_interactive", label: "Hunt interactive execution — remote execution tools, PsExec, SSH, RDP, WinRM" },
      ]},
      { id: "th4_credential_lateral", label: "Credential Access & Lateral Movement Hunting", children: [
        { id: "th4_lsass", label: "Hunt LSASS access — Mimikatz, credential dumping, token manipulation, pass-the-hash" },
        { id: "th4_kerberos", label: "Hunt Kerberos abuse — Golden Ticket, Silver Ticket, Kerberoasting, AS-REP Roasting" },
        { id: "th4_lateral", label: "Hunt lateral movement — PsExec, WMI, RDP, SMB, admin shares, remote services" },
        { id: "th4_pivoting", label: "Hunt network pivoting — port forwarding, SOCKS proxy, tunneling, SSH tunneling" },
      ]},
      { id: "th4_defense_exfil", label: "Defense Evasion & Exfiltration Hunting", children: [
        { id: "th4_process_injection", label: "Hunt process injection — DLL injection, APC, thread hijacking, reflective loading" },
        { id: "th4_log_tampering", label: "Hunt log tampering — event log clearing, audit policy changes, logging disable" },
        { id: "th4_c2", label: "Hunt C2 communications — beaconing patterns, DNS tunneling, JA3 fingerprinting, encrypted channels" },
        { id: "th4_exfil", label: "Hunt data exfiltration — large transfers, encrypted channels, DNS exfil, cloud upload, steganography" },
      ]}
    ]
  },
  {
    id: "th_phase5", icon: "fas fa-search-plus", label: "PHASE 5: Deep Investigation & Forensic Analysis", severity: "critical",
    children: [
      { id: "th5_triage", label: "Finding Triage & Validation", children: [
        { id: "th5_validate", label: "Validate findings — confirm true positive, eliminate false positive, gather context" },
        { id: "th5_severity", label: "Assess severity — impact, scope, data at risk, business criticality" },
        { id: "th5_context", label: "Gather context — asset ownership, user role, business function, normal behavior" },
        { id: "th5_prioritize", label: "Prioritize findings — risk-based prioritization, immediate action vs. monitoring" },
      ]},
      { id: "th5_investigation", label: "Deep Investigation Methodology", children: [
        { id: "th5_timeline", label: "Build timeline — event sequencing, activity reconstruction, first compromise identification" },
        { id: "th5_scope", label: "Determine scope — affected systems, users, data, time range, attack progression" },
        { id: "th5_pivot", label: "Pivot from findings — use findings to discover related activity, expand investigation" },
        { id: "th5_correlate", label: "Cross-correlate data — endpoint + network + identity + cloud, multi-source correlation" },
        { id: "th5_reconstruct", label: "Reconstruct attack — full attack chain, entry point, progression, objective" },
      ]},
      { id: "th5_documentation", label: "Investigation Documentation", children: [
        { id: "th5_queries", label: "Document queries — hunt queries used, results, false positives, refinements" },
        { id: "th5_methodology", label: "Document methodology — approach, techniques, tools, data sources, process" },
        { id: "th5_findings", label: "Document findings — confirmed threats, suspicious activity, false positives, context" },
        { id: "th5_next_steps", label: "Define next steps — escalation, detection engineering, additional hunts, remediation" },
      ]}
    ]
  },
  {
    id: "th_phase6", icon: "fas fa-code-branch", label: "PHASE 6: Detection Engineering & Rule Development", severity: "high",
    children: [
      { id: "th6_rule_dev", label: "Detection Rule Development from Hunts", children: [
        { id: "th6_sigma", label: "Convert hunts to Sigma rules — platform-agnostic, version-controlled, tested" },
        { id: "th6_siem", label: "Create SIEM detection rules — KQL, SPL, correlation rules, alert thresholds" },
        { id: "th6_edr", label: "Create EDR detection rules — behavioral detection, IOC matching, process tree rules" },
        { id: "th6_yara", label: "Create YARA rules — malware detection, file-based indicators, memory scanning rules" },
        { id: "th6_nta", label: "Create NTA detection rules — network-based detection, protocol anomaly, traffic patterns" },
      ]},
      { id: "th6_testing", label: "Detection Testing & Validation", children: [
        { id: "th6_atomic", label: "Test with Atomic Red Team — technique-by-technique validation, expected results" },
        { id: "th6_caldera", label: "Test with MITRE Caldera — adversary emulation, automated TTP execution" },
        { id: "th6_bas", label: "Test with BAS tools — Breach and Attack Simulation, continuous validation" },
        { id: "th6_purple", label: "Purple team testing — collaborative validation, real-time testing, gap identification" },
      ]},
      { id: "th6_automation", label: "Hunt Automation & Integration", children: [
        { id: "th6_soar", label: "Implement SOAR playbooks — automate response to confirmed hunt findings" },
        { id: "th6_scheduled", label: "Schedule recurring hunts — automated queries, periodic analysis, trend tracking" },
        { id: "th6_ml_detection", label: "Explore ML detection — anomaly detection models, behavioral analysis, predictive" },
        { id: "th6_feed_integration", label: "Automate feed integration — threat intel, IOC matching, alert enrichment, deduplication" },
      ]}
    ]
  },
  {
    id: "th_phase7", icon: "fas fa-chart-bar", label: "PHASE 7: Hunt Reporting, Metrics & Coverage Analysis", severity: "info",
    children: [
      { id: "th7_reporting", label: "Hunt Reporting & Communication", children: [
        { id: "th7_hunt_report", label: "Write hunt report — hypothesis, methodology, findings, recommendations, lessons learned" },
        { id: "th7_visualize", label: "Create visualizations — attack timelines, network graphs, statistical charts, heatmaps" },
        { id: "th7_exec_summary", label: "Prepare executive summary — risk assessment, business impact, recommended actions" },
        { id: "th7_knowledge_base", label: "Update knowledge base — documented hunts, techniques, queries, patterns" },
      ]},
      { id: "th7_metrics", label: "Hunt Metrics & KPIs", children: [
        { id: "th7_hunts_conducted", label: "Track hunts conducted — number, frequency, hypothesis types, data sources used" },
        { id: "th7_findings_rate", label: "Track findings rate — confirmed threats, suspicious activity, false positive rate" },
        { id: "th7_time_to_detect", label: "Track time to detect — dwell time reduction, detection improvement over time" },
        { id: "th7_detection_creation", label: "Track detection creation — new rules from hunts, quality, effectiveness" },
      ]},
      { id: "th7_coverage", label: "Coverage Analysis & Gap Identification", children: [
        { id: "th7_mitre_coverage", label: "Map ATT&CK coverage — techniques covered by hunting, gaps, prioritization" },
        { id: "th7_data_coverage", label: "Map data source coverage — log sources used, gaps in telemetry, collection needs" },
        { id: "th7_blind_spots", label: "Identify blind spots — no visibility areas, data gaps, tool gaps, skill gaps" },
        { id: "th7_improvement", label: "Plan improvements — new data sources, tool deployment, training, process changes" },
      ]}
    ]
  },
  {
    id: "th_phase8", icon: "fas fa-sync-alt", label: "PHASE 8: Program Maturity, Training & Community", severity: "info",
    children: [
      { id: "th8_maturity", label: "Threat Hunting Program Maturity", children: [
        { id: "th8_maturity_model", label: "Assess maturity level — reactive, proactive, intelligence-driven, predictive" },
        { id: "th8_process", label: "Mature hunting process — structured methodology, repeatability, documentation, quality" },
        { id: "th8_integration", label: "Improve integration — SOC integration, IR integration, threat intel integration" },
        { id: "th8_automation_maturity", label: "Increase automation — scheduled hunts, automated analysis, ML-assisted hunting" },
      ]},
      { id: "th8_training", label: "Hunter Training & Development", children: [
        { id: "th8_skill_dev", label: "Develop hunter skills — query languages, analysis techniques, ATT&CK framework, tools" },
        { id: "th8_mentorship", label: "Establish mentorship — senior hunters mentoring juniors, knowledge transfer" },
        { id: "th8_exercises", label: "Run training exercises — capture the flag, red team exercises, simulated campaigns" },
        { id: "th8_certifications", label: "Pursue certifications — relevant hunting/analysis certifications, continuous learning" },
      ]},
      { id: "th8_community", label: "Community Engagement & Knowledge Sharing", children: [
        { id: "th8_sharing", label: "Share findings — internal knowledge sharing, community contribution, open source" },
        { id: "th8_conferences", label: "Attend conferences — DEF CON, Black Hat, BlueHat, SANS, local security meetups" },
        { id: "th8_research", label: "Conduct research — publish findings, develop new techniques, contribute to community" },
        { id: "th8_collaboration", label: "Collaborate with peers — ISAC participation, information sharing, joint hunts" },
      ]}
    ]
  }
];
