window.CHECKLIST_GSOC = [
  {
    id: "gsoc_phase1", icon: "fas fa-shield-alt", label: "PHASE 1: Security Operations Center Infrastructure & Architecture", severity: "info",
    children: [
      {
        id: "gsoc1_siem", label: "SIEM Platform Design & Architecture", children: [
          { id: "siem_vendor_eval", label: "SIEM Vendor Evaluation — Splunk, Sentinel, QRadar, Elastic, Securonix comparison" },
          { id: "siem_capacity_plan", label: "Capacity Planning — EPS/GBD sizing, retention policies, storage architecture" },
          { id: "siem_high_avail", label: "High Availability Configuration — Active-passive clusters, failover, data replication" },
          { id: "siem_data_normalization", label: "Log Normalization & Parsing — CIM compliance, field mapping, regex parsers" },
          { id: "siem_indexing_strategy", label: "Indexing & Search Optimization — Hot/warm/cold tiers, bucket policies, acceleration" },
          { id: "siem_api_integration", label: "API Integration Framework — REST/SOAP connectors, webhooks, syslog forwarding" },
        ]
      },
      {
        id: "gsoc1_network_arch", label: "Network Infrastructure for GSOC", children: [
          { id: "network_segmentation", label: "Network Segmentation — Separate mgmt, prod, DMZ, and forensics VLANs" },
          { id: "redundant_connectivity", label: "Redundant Connectivity — Dual ISP, BGP failover, MPLS backup links" },
          { id: "secure_remote_access", label: "Secure Remote Access — Zero Trust NAC, MFA VPN, bastion hosts" },
          { id: "bandwidth_planning", label: "Bandwidth Planning — Log throughput vs. network capacity, QoS prioritization" },
          { id: "out_of_band_mgmt", label: "Out-of-Band Management — Dedicated console server, serial connectivity" },
        ]
      },
      {
        id: "gsoc1_tools", label: "Core Tooling & Technology Stack", children: [
          { id: "edr_platform", label: "EDR Platform — CrowdStrike, SentinelOne, Defender for Endpoint deployment" },
          { id: "threat_intel_platform", label: "Threat Intelligence Platform — MISP, ThreatConnect, Anomali integration" },
          { id: "ticketing_soar", label: "Ticketing & SOAR — Jira, ServiceNow, TheHive, Shuffle, Cortex XSOAR" },
          { id: "forensics_toolkit", label: "Forensics Toolkit — Autopsy, Volatility, FTK, EnCase licensing" },
          { id: "comms_platforms", label: "Communication Platforms — Secure Slack, Teams, Signal, War Room setup" },
        ]
      },
      {
        id: "gsoc1_facility", label: "Physical Facility & Ergonomics", children: [
          { id: "soc_layout", label: "SOC Floor Layout — Tier 1/2/3 desk arrangement, collaboration zones" },
          { id: "display_walls", label: "Video Wall / Display Systems — Real-time dashboards, threat maps, KPI screens" },
          { id: "environmental_ctrl", label: "Environmental Controls — HVAC, UPS, backup generators, fire suppression" },
          { id: "access_controls", label: "Physical Access Controls — Biometric scanners, keycard zones, visitor logs" },
          { id: "workspace_standards", label: "Workspace Ergonomics — Monitor specs, lighting, noise reduction" },
        ]
      }
    ]
  },
  {
    id: "gsoc_phase2", icon: "fas fa-eye", label: "PHASE 2: Monitoring, Detection & Alert Engineering", severity: "critical",
    children: [
      {
        id: "gsoc2_use_cases", label: "Detection Use Case Development", children: [
          { id: "use_case_framework", label: "Use Case Framework — MITRE ATT&CK mapping, kill chain alignment" },
          { id: "brute_force_detection", label: "Brute Force & Credential Attacks — Failed auth thresholds, impossible travel" },
          { id: "malware_detection", label: "Malware Indicators — Process injection, suspicious registry, file hash correlation" },
          { id: "lateral_movement", label: "Lateral Movement Detection — SMB/RDP anomalous connections, pass-the-hash" },
          { id: "data_exfil_detection", label: "Data Exfiltration Signals — Large outbound transfers, DNS tunneling, USB logs" },
          { id: "priv_escalation", label: "Privilege Escalation — Token manipulation, sudo abuse, UAC bypass attempts" },
          { id: "persistence_mechanisms", label: "Persistence Detection — Registry run keys, scheduled tasks, WMI subscriptions" },
          { id: "c2_communication", label: "C2 Communication Detection — Beaconing patterns, domain generation, JA3/JA3S" },
        ]
      },
      {
        id: "gsoc2_alert_tuning", label: "Alert Tuning & Noise Reduction", children: [
          { id: "baseline_establishment", label: "Behavioral Baseline — Normal traffic patterns, user activity profiles" },
          { id: "false_positive_reduction", label: "False Positive Reduction — Whitelisting, correlation rules, threshold tuning" },
          { id: "suppression_rules", label: "Suppression Rules — Maintenance windows, scanner IPs, expected behavior" },
          { id: "correlation_rules", label: "Correlation Rules — Multi-event logic, time-window aggregation, context enrichment" },
          { id: "severity_scoring", label: "Severity Scoring Model — Risk-based scoring, asset criticality weighting" },
        ]
      },
      {
        id: "gsoc2_log_sources", label: "Log Source Onboarding & Validation", children: [
          { id: "log_source_inventory", label: "Log Source Inventory — Firewall, servers, endpoints, cloud, SaaS" },
          { id: "parser_validation", label: "Parser Validation — Field extraction accuracy, timestamp normalization" },
          { id: "log_quality_checks", label: "Log Quality Monitoring — Gap detection, volume anomalies, parsing failures" },
          { id: "endpoint_logs", label: "Endpoint Log Sources — Sysmon, Windows Event Logs, auditd, macOS unified logs" },
          { id: "cloud_logs", label: "Cloud Log Sources — CloudTrail, Azure Activity, GCP audit, VPC flow logs" },
          { id: "network_logs", label: "Network Log Sources — NetFlow, IDS/IPS, proxy logs, DNS query logs" },
        ]
      },
      {
        id: "gsoc2_24x7", label: "24x7 Monitoring Operations", children: [
          { id: "shift_handover", label: "Shift Handover Procedures — Open incidents, active threats, pending escalations" },
          { id: "escalation_matrix", label: "Escalation Matrix — Tier 1 → 2 → 3 criteria, SLA timers, on-call rotations" },
          { id: "watchlist_mgmt", label: "Watchlist & Hunting Board — VIP users, critical assets, threat actor IOCs" },
          { id: "health_monitoring", label: "SOC Health Monitoring — Tool uptime, log pipeline status, alert latency" },
        ]
      }
    ]
  },
  {
    id: "gsoc_phase3", icon: "fas fa-fire-extinguisher", label: "PHASE 3: Incident Response & Triage Operations", severity: "critical",
    children: [
      {
        id: "gsoc3_triage", label: "Alert Triage & Classification", children: [
          { id: "triage_playbook", label: "Triage Playbook — Initial assessment steps, scoring rubric, classification tree" },
          { id: "alert_enrichment", label: "Automated Enrichment — IP reputation, file hash lookup, domain WHOIS, geo-IP" },
          { id: "contextual_analysis", label: "Contextual Analysis — User role, asset value, time of day, behavioral deviation" },
          { id: "alert_categorization", label: "Alert Categorization — True positive, false positive, informational, benign anomaly" },
          { id: "priority_assignment", label: "Priority Assignment — P1 critical, P2 high, P3 medium, P4 low definitions" },
        ]
      },
      {
        id: "gsoc3_ir_plans", label: "Incident Response Plan Execution", children: [
          { id: "ir_runbooks", label: "IR Runbooks — Per-incident-type step-by-step playbooks with decision trees" },
          { id: "containment_strategy", label: "Containment Strategies — Network isolation, account lockdown, endpoint quarantine" },
          { id: "evidence_preservation", label: "Evidence Preservation — Memory dump, disk imaging, chain of custody documentation" },
          { id: "eradication_steps", label: "Eradication Procedures — Malware removal, patch deployment, credential reset" },
          { id: "recovery_validation", label: "Recovery & Validation — Service restoration verification, monitoring for recurrence" },
        ]
      },
      {
        id: "gsoc3_forensics", label: "Digital Forensics & Analysis", children: [
          { id: "memory_forensics", label: "Memory Forensics — Process enumeration, injected code detection, credential extraction" },
          { id: "disk_forensics", label: "Disk Forensics — Timeline analysis, deleted file recovery, artifact examination" },
          { id: "network_forensics", label: "Network Forensics — PCAP analysis, session reconstruction, flow correlation" },
          { id: "malware_triage", label: "Malware Triage — String analysis, sandbox execution, behavior profiling" },
          { id: "timeline_reconstruction", label: "Timeline Reconstruction — Event correlation across hosts, attack path mapping" },
        ]
      },
      {
        id: "gsoc3_reporting", label: "Incident Reporting & Documentation", children: [
          { id: "incident_reports", label: "Incident Reports — Executive summary, technical details, impact assessment" },
          { id: "lessons_learned", label: "Lessons Learned Reviews — Root cause analysis, process gaps, improvement actions" },
          { id: "regulatory_reporting", label: "Regulatory Notifications — GDPR 72hr, HIPAA breach, PCI-DSS incident reporting" },
          { id: "metrics_tracking", label: "Metrics Tracking — MTTD, MTTR, false positive rate, detection coverage" },
        ]
      }
    ]
  },
  {
    id: "gsoc_phase4", icon: "fas fa-brain", label: "PHASE 4: Threat Intelligence & Proactive Hunting", severity: "high",
    children: [
      {
        id: "gsoc4_threat_intel", label: "Threat Intelligence Operations", children: [
          { id: "intel_collection", label: "Intelligence Collection — Open source, commercial, ISAC feeds, dark web monitoring" },
          { id: "intel_processing", label: "Intelligence Processing — STIX/TAXII ingestion, IOC normalization, confidence scoring" },
          { id: "intel_analysis", label: "Intelligence Analysis — TTP mapping, actor attribution, campaign tracking" },
          { id: "intel_dissemination", label: "Intelligence Dissemination — Alert distribution, briefing reports, threat advisories" },
          { id: "ioc_management", label: "IOC Lifecycle Management — Creation, validation, deployment, expiration" },
        ]
      },
      {
        id: "gsoc4_threat_hunting", label: "Proactive Threat Hunting", children: [
          { id: "hunt_hypotheses", label: "Hypothesis-Driven Hunts — Based on threat intel, anomalies, or new TTPs" },
          { id: "hunt_data_sources", label: "Hunting Data Sources — EDR telemetry, network metadata, authentication logs" },
          { id: "hunt_techniques", label: "Hunting Techniques — Sigma rules, YARA, anomaly detection, statistical analysis" },
          { id: "hunt_automation", label: "Hunt Automation — Scheduled queries, ML-based anomaly detection, continuous validation" },
          { id: "hunt_documentation", label: "Hunt Documentation — Methodology, findings, new detection rules, knowledge sharing" },
        ]
      },
      {
        id: "gsoc4_red_team", label: "Red Team & Purple Team Integration", children: [
          { id: "red_team_coord", label: "Red Team Coordination — Scheduled tests, deconfliction, scenario alignment" },
          { id: "purple_team_exercises", label: "Purple Team Exercises — Real-time detection validation, rule tuning during attacks" },
          { id: "attack_simulation", label: "Attack Simulation — Atomic Red Team, CALDERA, MITRE Engenuity evaluations" },
          { id: "detection_gap_analysis", label: "Detection Gap Analysis — Coverage scoring, blind spot identification, roadmap" },
        ]
      },
      {
        id: "gsoc4_vuln_intel", label: "Vulnerability Intelligence & Tracking", children: [
          { id: "cve_monitoring", label: "CVE Monitoring — New exploit publications, proof-of-concept tracking, exploit maturity" },
          { id: "asset_vuln_mapping", label: "Asset Vulnerability Mapping — CMDB correlation, exploitability scoring, SLA tracking" },
          { id: "zero_day_watch", label: "Zero-Day Watch — Active exploitation indicators, vendor patch timelines, workarounds" },
          { id: "patch_verification", label: "Patch Verification — Post-deployment validation, regression testing, exception tracking" },
        ]
      }
    ]
  },
  {
    id: "gsoc_phase5", icon: "fas fa-robot", label: "PHASE 5: Automation, SOAR & Operational Efficiency", severity: "high",
    children: [
      {
        id: "gsoc5_soar", label: "SOAR Playbook Development", children: [
          { id: "soar_phishing", label: "Phishing Response Playbook — Email quarantine, URL detonation, sender analysis" },
          { id: "soar_account_compromise", label: "Account Compromise Playbook — Password reset, session revocation, MFA enforcement" },
          { id: "soar_malware", label: "Malware Containment Playbook — Host isolation, file quarantine, AV scan orchestration" },
          { id: "soar_dlp", label: "DLP Incident Playbook — Data classification review, user notification, policy enforcement" },
          { id: "soar_vuln_mgmt", label: "Vulnerability Management Playbook — Scan-to-ticket, risk scoring, patch orchestration" },
        ]
      },
      {
        id: "gsoc5_api_integrations", label: "API & Tool Integrations", children: [
          { id: "threat_intel_apis", label: "Threat Intel APIs — VirusTotal, AbuseIPDB, OTX, AlienVault, Shodan" },
          { id: "ticketing_apis", label: "Ticketing APIs — Jira, ServiceNow, TheHive case management automation" },
          { id: "notification_apis", label: "Notification Systems — PagerDuty, Slack, Teams, email, SMS alerts" },
          { id: "enrichment_apis", label: "Enrichment Services — WHOIS, GeoIP, ASN lookup, domain reputation checks" },
        ]
      },
      {
        id: "gsoc5_ml_ops", label: "ML & Advanced Analytics", children: [
          { id: "ueba_deployment", label: "UEBA — User and Entity Behavior Analytics, anomaly baselining, risk scoring" },
          { id: "ml_detection_models", label: "ML Detection Models — Supervised classification, clustering, time-series analysis" },
          { id: "model_tuning", label: "Model Tuning & Retraining — Feedback loops, label accuracy, feature engineering" },
          { id: "drift_monitoring", label: "Drift Monitoring — Model performance degradation, retraining triggers" },
        ]
      },
      {
        id: "gsoc5_efficiency", label: "Operational Efficiency Metrics", children: [
          { id: "sla_tracking", label: "SLA Tracking — Alert response times, case closure rates, escalation adherence" },
          { id: "automation_roi", label: "Automation ROI — Hours saved, analyst capacity increase, manual task reduction" },
          { id: "quality_metrics", label: "Quality Metrics — Analyst accuracy, repeat incident rate, customer satisfaction" },
          { id: "capacity_planning", label: "Capacity Planning — Head-to-alert ratios, shift optimization, workload balancing" },
        ]
      }
    ]
  },
  {
    id: "gsoc_phase6", icon: "fas fa-cloud", label: "PHASE 6: Cloud Security & Hybrid Monitoring", severity: "high",
    children: [
      {
        id: "gsoc6_aws", label: "AWS Security Monitoring", children: [
          { id: "cloudtrail_monitoring", label: "CloudTrail Monitoring — API call logging, unusual API usage, root account alerts" },
          { id: "guardduty_integration", label: "GuardDuty Integration — Finding ingestion, severity mapping, response automation" },
          { id: "s3_protection", label: "S3 Protection — Bucket policy alerts, public access detection, encryption compliance" },
          { id: "iam_monitoring", label: "IAM Anomaly Detection — Privilege escalation, excessive permissions, credential exposure" },
          { id: "vpc_flow_logs", label: "VPC Flow Log Analysis — Traffic patterns, egress monitoring, security group violations" },
        ]
      },
      {
        id: "gsoc6_azure", label: "Azure/GCP Security Monitoring", children: [
          { id: "sentinel_integration", label: "Microsoft Sentinel — Log Analytics workspace, workbook dashboards, hunting queries" },
          { id: "azure_ad_monitoring", label: "Azure AD Monitoring — Sign-in anomalies, conditional access, identity protection" },
          { id: "gcp_scc", label: "GCP Security Command Center — Asset inventory, vulnerability scanning, policy violations" },
          { id: "multi_cloud", label: "Multi-Cloud Correlation — Cross-provider threat detection, unified visibility" },
        ]
      },
      {
        id: "gsoc6_saas", label: "SaaS & Collaboration Platform Security", children: [
          { id: "o365_monitoring", label: "Microsoft 365 — Mailbox audit, SharePoint sharing, Teams admin activities" },
          { id: "gworkspace", label: "Google Workspace — Admin audit log, Drive sharing, app authorization" },
          { id: "salesforce_security", label: "Salesforce — Login history, data export, API usage, permission sets" },
          { id: "slack_monitoring", label: "Slack/Teams — Channel access, file sharing, external collaboration" },
        ]
      },
      {
        id: "gsoc6_cspm", label: "Cloud Security Posture Management", children: [
          { id: "cspm_deploy", label: "CSPM Deployment — Wiz, Prisma Cloud, Lacework for misconfiguration detection" },
          { id: "iac_scanning", label: "IaC Security Scanning — Terraform, CloudFormation pre-deployment security checks" },
          { id: "container_monitoring", label: "Container Security — Image scanning, runtime detection, K8s audit logging" },
          { id: "serverless_monitoring", label: "Serverless Security — Lambda/Functions permissions, invocation monitoring" },
        ]
      }
    ]
  },
  {
    id: "gsoc_phase7", icon: "fas fa-users-cog", label: "PHASE 7: Team Development & Operational Excellence", severity: "info",
    children: [
      {
        id: "gsoc7_training", label: "Analyst Training & Certification", children: [
          { id: "tier1_training", label: "Tier 1 Training — Alert triage, basic forensics, ticket documentation" },
          { id: "tier2_training", label: "Tier 2 Training — Incident handling, threat hunting, malware analysis basics" },
          { id: "tier3_training", label: "Tier 3 Training — Advanced forensics, reverse engineering, threat intel analysis" },
          { id: "certifications", label: "Certifications — GCIA, GCIH, GNFA, CySA+, CEH, CISSP sponsorship" },
          { id: "knowledge_base", label: "Knowledge Base — Wiki maintenance, runbook updates, tribal knowledge capture" },
        ]
      },
      {
        id: "gsoc7_processes", label: "Process Optimization & Documentation", children: [
          { id: "sop_development", label: "SOP Development — Standard operating procedures for all recurring tasks" },
          { id: "playbook_review", label: "Playbook Review Cycle — Quarterly updates, post-incident improvements" },
          { id: "change_mgmt", label: "Change Management — Tool upgrades, rule changes, infrastructure modifications" },
          { id: "quality_assurance", label: "Quality Assurance — Case audits, peer reviews, calibration sessions" },
        ]
      },
      {
        id: "gsoc7_metrics", label: "KPI Dashboards & Reporting", children: [
          { id: "executive_dashboard", label: "Executive Dashboard — Risk posture, incident trends, budget impact" },
          { id: "operational_dashboard", label: "Operational Dashboard — Alert volumes, MTTD/MTTR, coverage metrics" },
          { id: "maturity_assessment", label: "Maturity Assessment — SOC-CMM, CSF alignment, capability scoring" },
          { id: "compliance_reports", label: "Compliance Reports — SOC 2, ISO 27001, PCI-DSS, HIPAA evidence" },
        ]
      },
      {
        id: "gsoc7_communication", label: "Stakeholder Communication", children: [
          { id: "board_reporting", label: "Board Reporting — Cyber risk quantification, investment justification" },
          { id: "cross_team_collab", label: "Cross-Team Collaboration — IT ops, legal, HR, PR coordination" },
          { id: "external_comm", label: "External Communication — Law enforcement, CERTs, vendors, insurance" },
          { id: "shift_briefings", label: "Shift Briefings — Start-of-shift intel briefings, priority alerts, ongoing cases" },
        ]
      }
    ]
  },
  {
    id: "gsoc_phase8", icon: "fas fa-clipboard-check", label: "PHASE 8: Compliance, Audit & Continuous Improvement", severity: "info",
    children: [
      {
        id: "gsoc8_compliance", label: "Regulatory & Compliance Frameworks", children: [
          { id: "gdpr_compliance", label: "GDPR Compliance — Personal data monitoring, breach notification timelines" },
          { id: "hipaa_compliance", label: "HIPAA Compliance — PHI access monitoring, audit logging, risk assessments" },
          { id: "pci_dss", label: "PCI-DSS — Cardholder data monitoring, quarterly scans, annual assessments" },
          { id: "sox_controls", label: "SOX IT Controls — Financial system access, change management, segregation of duties" },
          { id: "nist_framework", label: "NIST CSF Alignment — Identify, Protect, Detect, Respond, Recover mapping" },
        ]
      },
      {
        id: "gsoc8_audit", label: "Internal & External Audits", children: [
          { id: "internal_audit", label: "Internal Audit Preparation — Evidence collection, process walkthroughs" },
          { id: "external_audit", label: "External Audit Support — Third-party assessment coordination, findings response" },
          { id: "penetration_testing", label: "SOC Penetration Testing — Assessing SOC detection capabilities and response" },
          { id: "audit_remediation", label: "Audit Remediation — Finding tracking, action plans, closure verification" },
        ]
      },
      {
        id: "gsoc8_continuous", label: "Continuous Improvement Programs", children: [
          { id: "improvement_roadmap", label: "Improvement Roadmap — Quarterly goals, capability gaps, technology refresh" },
          { id: "benchmarking", label: "Industry Benchmarking — Peer comparisons, maturity scores, staffing ratios" },
          { id: "tool_evaluation", label: "Tool Evaluation & Refresh — Annual vendor reviews, PoC testing, migration planning" },
          { id: "innovation_lab", label: "Innovation Lab — Proof-of-concept testing, emerging tech evaluation, R&D" },
        ]
      },
      {
        id: "gsoc8_retention", label: "Log Retention & Data Governance", children: [
          { id: "retention_policy", label: "Retention Policy — 90-day hot, 1-year warm, 7-year cold storage tiers" },
          { id: "data_classification", label: "Data Classification — PII, PHI, financial data tagging and access controls" },
          { id: "privacy_compliance", label: "Privacy Compliance — Data minimization, right to erasure, consent tracking" },
          { id: "backup_recovery", label: "Backup & Recovery — SOC data backup testing, disaster recovery drills" },
        ]
      }
    ]
  }
];
