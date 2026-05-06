window.CHECKLIST_THREAT_HUNTING = [
  {
    id: "th_phase1", icon: "fas fa-lightbulb", label: "PHASE 1: Hypothesis Development & Planning", severity: "critical",
    children: [
      { id: "th1_hypothesis", label: "Hypothesis Generation", children: [
        { id: "th1_ttp_based", label: "TTP-based hypotheses — MITRE ATT&CK techniques not detected by current rules" },
        { id: "th1_intel_based", label: "Threat intel-based — IOCs, campaigns, actor TTPs relevant to organization" },
        { id: "th1_anomaly_based", label: "Anomaly-based — statistical outliers, behavioral anomalies in logs" },
        { id: "th1_risk_based", label: "Risk-based — high-value assets, crown jewels, known vulnerable systems" },
        { id: "th1_scenario", label: "Scenario-based — what-if analysis, assumed breach, attacker simulation" },
      ]},
      { id: "th1_scope", label: "Hunt Scope Definition", children: [
        { id: "th1_data_sources", label: "Identify data sources — EDR, SIEM, network logs, endpoint telemetry" },
        { id: "th1_timeframe", label: "Define timeframe — lookback period, frequency, duration" },
        { id: "th1_targets", label: "Define targets — endpoints, servers, cloud workloads, users" },
        { id: "th1_success", label: "Define success criteria — what constitutes a meaningful finding" },
      ]}
    ]
  },
  {
    id: "th_phase2", icon: "fas fa-database", label: "PHASE 2: Data Collection & Environment Setup", severity: "high",
    children: [
      { id: "th2_data", label: "Data Collection", children: [
        { id: "th2_edr_data", label: "Collect EDR telemetry — process creation, network connections, file operations" },
        { id: "th2_network_data", label: "Collect network data — NetFlow, DNS queries, HTTP logs, proxy logs" },
        { id: "th2_identity_data", label: "Collect identity data — authentication logs, AD events, token usage" },
        { id: "th2_cloud_data", label: "Collect cloud data — CloudTrail, Azure Activity, GCP Audit Logs" },
        { id: "th2_endpoint_data", label: "Collect endpoint data — registry changes, service creation, scheduled tasks" },
        { id: "th2_email_data", label: "Collect email data — headers, attachments, links, sender reputation" },
      ]},
      { id: "th2_platform", label: "Hunting Platform Setup", children: [
        { id: "th2_siem_query", label: "Setup SIEM queries — KQL, SPL, Lucene for log analysis" },
        { id: "th2_notebooks", label: "Setup Jupyter notebooks — Python, pandas, matplotlib for analysis" },
        { id: "th2_zeek", label: "Deploy Zeek/Bro — network protocol analysis, anomaly detection" },
        { id: "th2_hunt_platform", label: "Use hunt platforms — Velociraptor, GRR, Kape for endpoint collection" },
      ]}
    ]
  },
  {
    id: "th_phase3", icon: "fas fa-search", label: "PHASE 3: Investigation & Analysis", severity: "critical",
    children: [
      { id: "th3_techniques", label: "Hunting Techniques", children: [
        { id: "th3_query", label: "Query-driven hunting — targeted log queries for specific indicators" },
        { id: "th3_clustering", label: "Clustering analysis — group similar events, identify outliers" },
        { id: "th3_chaining", label: "Event chaining — link related events across time and systems" },
        { id: "th3_stack_pivot", label: "Stack counting/pivoting — aggregate data, pivot from findings" },
        { id: "th3_baselines", label: "Baseline comparison — compare against normal behavior patterns" },
        { id: "th3_graph", label: "Graph analysis — relationship mapping, network graph of connections" },
      ]},
      { id: "th3_attacker_behaviors", label: "Attacker Behavior Hunting", children: [
        { id: "th3_lolbas", label: "Hunt LOLBAS usage — Living Off The Land Binaries abuse" },
        { id: "th3_persistence", label: "Hunt persistence — unusual registry keys, scheduled tasks, services" },
        { id: "th3_lateral", label: "Hunt lateral movement — PsExec, WMI, RDP, pass-the-hash patterns" },
        { id: "th3_credential", label: "Hunt credential access — LSASS access, Mimikatz, credential dumping" },
        { id: "th3_c2", label: "Hunt C2 communication — beaconing, DNS tunneling, unusual outbound traffic" },
        { id: "th3_defense_evasion", label: "Hunt defense evasion — process injection, AMSI bypass, log clearing" },
        { id: "th3_exfil", label: "Hunt data exfiltration — large transfers, encrypted channels, DNS exfil" },
      ]},
      { id: "th3_investigation", label: "Investigation Methodology", children: [
        { id: "th3_triage", label: "Triage findings — validate, prioritize, dismiss false positives" },
        { id: "th3_deep_dive", label: "Deep dive analysis — full context, timeline reconstruction, impact assessment" },
        { id: "th3_correlation", label: "Cross-correlate — endpoint, network, identity, cloud data" },
        { id: "th3_document", label: "Document process — methodology, queries, findings, next steps" },
      ]}
    ]
  },
  {
    id: "th_phase4", icon: "fas fa-code-branch", label: "PHASE 4: Detection Engineering & Automation", severity: "high",
    children: [
      { id: "th4_detection", label: "Detection Engineering", children: [
        { id: "th4_sigma", label: "Create Sigma rules — platform-agnostic detection rules" },
        { id: "th4_yara", label: "Create YARA rules — malware detection, file-based indicators" },
        { id: "th4_siem_rules", label: "Create SIEM detection rules — KQL, SPL, correlation rules" },
        { id: "th4_edr_rules", label: "Create EDR detection rules — behavioral, IOC-based, custom detections" },
        { id: "th4_test_rules", label: "Test detection rules — purple team, atomic red team, adversary simulation" },
      ]},
      { id: "th4_automation", label: "Hunt Automation", children: [
        { id: "th4_soar", label: "Implement SOAR playbooks — automate response to confirmed findings" },
        { id: "th4_scheduled_hunts", label: "Schedule recurring hunts — automated queries, periodic analysis" },
        { id: "th4_ml_detection", label: "Explore ML detection — anomaly detection, behavioral models" },
        { id: "th4_feeds", label: "Automate feed integration — threat intel, IOC matching, alert enrichment" },
      ]}
    ]
  },
  {
    id: "th_phase5", icon: "fas fa-chart-bar", label: "PHASE 5: Reporting & Program Maturity", severity: "info",
    children: [
      { id: "th5_reporting", label: "Hunt Reporting", children: [
        { id: "th5_findings", label: "Document hunt findings — confirmed threats, suspicious activity, false positives" },
        { id: "th5_metrics", label: "Track metrics — hunts conducted, findings rate, time to detect" },
        { id: "th5_coverage", label: "Map coverage — MITRE ATT&CK techniques covered by hunting" },
        { id: "th5_gaps", label: "Identify gaps — blind spots, data gaps, tool gaps" },
      ]},
      { id: "th5_maturity", label: "Program Development", children: [
        { id: "th5_knowledge_base", label: "Build knowledge base — documented hunts, techniques, playbooks" },
        { id: "th5_training", label: "Train hunters — techniques, tools, methodology, ATT&CK framework" },
        { id: "th5_community", label: "Engage community — share findings, collaborate, attend conferences" },
        { id: "th5_review", label: "Regular review — quarterly program assessment, strategy adjustment" },
      ]}
    ]
  }
];
