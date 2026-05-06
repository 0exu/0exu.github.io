window.CHECKLIST_SECURITY_AUTO = [
  {
    id: "sa_phase1", icon: "fas fa-drafting-compass", label: "PHASE 1: Assessment, Strategy & Platform Selection", severity: "info",
    children: [
      { id: "sa1_current", label: "Current State Assessment", children: [
        { id: "sa1_tools_inv", label: "Inventory all security tools — SIEM, EDR, firewall, vulnerability scanner, SOAR, ticketing" },
        { id: "sa1_process_map", label: "Map security processes — manual steps, repetitive tasks, bottlenecks, handoffs" },
        { id: "sa1_skills", label: "Assess team skills — scripting, API integration, security engineering, DevOps" },
        { id: "sa1_pain_points", label: "Identify pain points — alert fatigue, slow MTTR, manual triage, tool sprawl" },
        { id: "sa1_data_sources", label: "Catalog data sources — log sources, APIs, databases, feeds, integrations" },
      ]},
      { id: "sa1_strategy", label: "Automation Strategy Development", children: [
        { id: "sa1_goals", label: "Define automation goals — reduce MTTR, increase coverage, eliminate manual work, consistency" },
        { id: "sa1_roadmap", label: "Create automation roadmap — quick wins, medium-term, long-term, prioritization" },
        { id: "sa1_metrics", label: "Define success metrics — time saved, alerts auto-resolved, coverage %, error rate" },
        { id: "sa1_roi", label: "Calculate ROI — cost savings, efficiency gains, risk reduction, investment justification" },
      ]},
      { id: "sa1_platform", label: "Platform & Tool Selection", children: [
        { id: "sa1_soar", label: "Evaluate SOAR platforms — Phantom, XSOAR, Tines, Shuffle, Swimlane, D3" },
        { id: "sa1_scripting", label: "Choose scripting languages — Python, PowerShell, Bash, Go for automation" },
        { id: "sa1_orchestration", label: "Evaluate orchestration tools — Ansible, Terraform, Kubernetes, Airflow" },
        { id: "sa1_integration", label: "Assess integration capabilities — APIs, webhooks, SDKs, native connectors" },
      ]}
    ]
  },
  {
    id: "sa_phase2", icon: "fas fa-robot", label: "PHASE 2: SOAR Platform Implementation & Playbook Development", severity: "critical",
    children: [
      { id: "sa2_deploy", label: "SOAR Platform Deployment", children: [
        { id: "sa2_install", label: "Deploy SOAR platform — installation, configuration, high availability, scaling" },
        { id: "sa2_connectors", label: "Configure connectors — SIEM, EDR, firewall, ticketing, threat intel, email" },
        { id: "sa2_credentials", label: "Manage credentials — secure storage, service accounts, API keys, rotation" },
        { id: "sa2_testing", label: "Test connectivity — endpoint reachability, authentication, API rate limits" },
      ]},
      { id: "sa2_playbooks", label: "Playbook Development", children: [
        { id: "sa2_phishing", label: "Build phishing triage playbook — email analysis, IOC extraction, credential reset, quarantine" },
        { id: "sa2_malware", label: "Build malware response playbook — file analysis, IOC enrichment, containment, remediation" },
        { id: "sa2_account", label: "Build account compromise playbook — detection, verification, lockout, notification" },
        { id: "sa2_vuln", label: "Build vulnerability response playbook — scanning, prioritization, patching, verification" },
        { id: "sa2_error_handling", label: "Implement error handling — retry logic, fallback procedures, notification on failure" },
      ]},
      { id: "sa2_orchestration", label: "Process Orchestration", children: [
        { id: "sa2_triage_auto", label: "Automate alert triage — enrichment, correlation, severity scoring, false positive filtering" },
        { id: "sa2_contain_auto", label: "Automate containment — isolate endpoint, block IP, disable account, quarantine file" },
        { id: "sa2_remediate_auto", label: "Automate remediation — kill process, quarantine file, patch system, restore backup" },
        { id: "sa2_escalate_auto", label: "Automate escalation — notify on-call, create ticket, update status, SLA tracking" },
        { id: "sa2_report_auto", label: "Automate reporting — incident summary, metrics, compliance reports, executive dashboards" },
      ]}
    ]
  },
  {
    id: "sa_phase3", icon: "fas fa-code", label: "PHASE 3: Detection Engineering as Code & Pipeline", severity: "critical",
    children: [
      { id: "sa3_detection", label: "Detection as Code Development", children: [
        { id: "sa3_sigma", label: "Develop Sigma rules — platform-agnostic, version-controlled, tested, documented" },
        { id: "sa3_siem", label: "Develop SIEM rules — KQL, SPL, Lucene, correlation rules, testing framework" },
        { id: "sa3_yara", label: "Develop YARA rules — malware detection, file analysis, memory scanning, threat hunting" },
        { id: "sa3_snort_suricata", label: "Develop IDS rules — Snort, Suricata, network-based detection, protocol analysis" },
        { id: "sa3_testing", label: "Test detection rules — Atomic Red Team, Caldera, purple team exercises, validation" },
      ]},
      { id: "sa3_pipeline", label: "Detection Pipeline Automation", children: [
        { id: "sa3_cicd", label: "Setup detection CI/CD — linting, unit testing, integration testing, deployment pipeline" },
        { id: "sa3_version_control", label: "Version control — Git, PR review, change management, rollback capability" },
        { id: "sa3_quality_gates", label: "Implement quality gates — syntax check, false positive test, performance test, documentation check" },
        { id: "sa3_monitoring", label: "Monitor detection health — rule performance, FP rate, coverage, execution time" },
        { id: "sa3_tuning_auto", label: "Automate rule tuning — FP reduction, threshold adjustment, suppression rules, alert grouping" },
      ]},
      { id: "sa3_threat_intel", label: "Threat Intelligence Automation", children: [
        { id: "sa3_ioc_ingest", label: "Automate IOC ingestion — STIX/TAXII, API feeds, commercial feeds, deduplication" },
        { id: "sa3_ioc_enrich", label: "Automate IOC enrichment — reputation check, geolocation, WHOIS, malware family, context" },
        { id: "sa3_ioc_deploy", label: "Automate IOC deployment — SIEM rules, firewall blocks, EDR alerts, email gateway" },
        { id: "sa3_ioc_expire", label: "Automate IOC lifecycle — expiration, removal, TTL management, staleness detection" },
      ]}
    ]
  },
  {
    id: "sa_phase4", icon: "fas fa-plug", label: "PHASE 4: API Integration & Tool Orchestration", severity: "high",
    children: [
      { id: "sa4_api", label: "API Integration Development", children: [
        { id: "sa4_api_discovery", label: "Discover available APIs — vendor documentation, Swagger/OpenAPI, SDK availability" },
        { id: "sa4_api_auth", label: "Implement API authentication — OAuth, API keys, certificates, token management" },
        { id: "sa4_rate_limit", label: "Handle rate limiting — throttling, queuing, backoff strategies, error handling" },
        { id: "sa4_error", label: "Implement error handling — retry logic, circuit breaker, fallback, logging" },
      ]},
      { id: "sa4_integrations", label: "Key Tool Integrations", children: [
        { id: "sa4_ticketing", label: "Integrate ticketing — ServiceNow, Jira, Freshservice, auto-create, update, close tickets" },
        { id: "sa4_communication", label: "Integrate communication — Slack, Teams, email, PagerDuty, automated notifications" },
        { id: "sa4_threat_intel", label: "Integrate threat intel — MISP, VirusTotal, AlienVault OTX, commercial feeds" },
        { id: "sa4_cmdb", label: "Integrate CMDB — asset enrichment, ownership lookup, criticality assessment" },
        { id: "sa4_identity", label: "Integrate identity — Active Directory, Okta, Azure AD, account management" },
      ]},
      { id: "sa4_custom", label: "Custom Integration Development", children: [
        { id: "sa4_custom_api", label: "Build custom API connectors — REST, GraphQL, SOAP, gRPC, legacy protocols" },
        { id: "sa4_webhook", label: "Implement webhook handlers — event-driven automation, real-time triggers, validation" },
        { id: "sa4_database", label: "Integrate databases — SQL, NoSQL, data enrichment, lookup tables, historical data" },
      ]}
    ]
  },
  {
    id: "sa_phase5", icon: "fas fa-cloud", label: "PHASE 5: Cloud & Infrastructure Security Automation", severity: "high",
    children: [
      { id: "sa5_iac", label: "Infrastructure as Code Security", children: [
        { id: "sa5_iac_scan", label: "Automate IaC scanning — Terraform, CloudFormation, K8s manifests, pre-commit hooks" },
        { id: "sa5_iac_gate", label: "Setup IaC quality gates — blocking misconfigurations in CI/CD, policy as code" },
        { id: "sa5_compliance_auto", label: "Automate compliance checks — CIS benchmarks, regulatory checks, policy as code" },
        { id: "sa5_remediate_auto", label: "Automate IaC remediation — auto-fix misconfigurations, PR generation, approval workflow" },
      ]},
      { id: "sa5_cloud_sec", label: "Cloud Security Automation", children: [
        { id: "sa5_cspm_auto", label: "Automate CSPM — continuous posture monitoring, drift detection, auto-remediation" },
        { id: "sa5_iam_auto", label: "Automate IAM — unused permission detection, access review, least privilege enforcement" },
        { id: "sa5_secrets_auto", label: "Automate secret rotation — periodic rotation, emergency revocation, credential scanning" },
        { id: "sa5_cloud_response", label: "Automate cloud response — isolate instance, snapshot, revoke credentials, block IP" },
      ]},
      { id: "sa5_container_sec", label: "Container Security Automation", children: [
        { id: "sa5_image_scan", label: "Automate image scanning — pre-deployment scan, CVE detection, policy enforcement" },
        { id: "sa5_runtime_auto", label: "Automate runtime protection — anomaly detection, policy violation response, auto-quarantine" },
        { id: "sa5_k8s_auto", label: "Automate K8s security — network policy enforcement, pod security standards, admission control" },
      ]}
    ]
  },
  {
    id: "sa_phase6", icon: "fas fa-project-diagram", label: "PHASE 6: Vulnerability Management & Patch Automation", severity: "high",
    children: [
      { id: "sa6_scanning", label: "Vulnerability Scanning Automation", children: [
        { id: "sa6_scan_schedule", label: "Automate scan scheduling — continuous scanning, asset discovery, coverage tracking" },
        { id: "sa6_scan_types", label: "Automate scan types — authenticated, unauthenticated, web app, container, cloud" },
        { id: "sa6_scan_cred", label: "Manage scan credentials — secure storage, rotation, privilege levels, scope" },
        { id: "sa6_scan_dedup", label: "Deduplicate findings — cross-scanner dedup, false positive filtering, risk scoring" },
      ]},
      { id: "sa6_prioritization", label: "Vulnerability Prioritization", children: [
        { id: "sa6_risk_score", label: "Automate risk scoring — CVSS, EPSS, threat intel, asset criticality, exploitability" },
        { id: "sa6_context", label: "Add context — asset ownership, business impact, exposure, compliance requirement" },
        { id: "sa6_ticket_auto", label: "Automate ticket creation — prioritized tickets, assignment, SLA, escalation" },
      ]},
      { id: "sa6_patching", label: "Patch Management Automation", children: [
        { id: "sa6_patch_deploy", label: "Automate patch deployment — critical patches, maintenance windows, testing, rollback" },
        { id: "sa6_patch_verify", label: "Automate patch verification — post-patch scanning, compliance check, reporting" },
        { id: "sa6_patch_report", label: "Automate patch reporting — compliance metrics, overdue patches, trend analysis" },
      ]}
    ]
  },
  {
    id: "sa_phase7", icon: "fas fa-vial", label: "PHASE 7: Testing, Validation & Quality Assurance", severity: "critical",
    children: [
      { id: "sa7_testing", label: "Automation Testing Framework", children: [
        { id: "sa7_unit", label: "Unit testing — individual function testing, mock data, edge cases" },
        { id: "sa7_integration", label: "Integration testing — end-to-end workflows, multi-tool interactions, API testing" },
        { id: "sa7_load", label: "Load testing — concurrent executions, API rate limits, timeout handling, scalability" },
        { id: "sa7_chaos", label: "Chaos testing — failure injection, service degradation, recovery testing" },
      ]},
      { id: "sa7_validation", label: "Detection Validation", children: [
        { id: "sa7_atomic", label: "Validate with Atomic Red Team — technique-by-technique, automated execution, result collection" },
        { id: "sa7_bas", label: "Validate with BAS tools — continuous attack simulation, detection measurement, reporting" },
        { id: "sa7_purple", label: "Validate with purple team — collaborative testing, real-time validation, gap identification" },
        { id: "sa7_coverage", label: "Track detection coverage — ATT&CK mapping, gap analysis, improvement tracking" },
      ]},
      { id: "sa7_monitoring", label: "Automation Health Monitoring", children: [
        { id: "sa7_execution", label: "Monitor execution — success/failure rate, execution time, resource usage, errors" },
        { id: "sa7_alerting", label: "Alert on failures — notification on automation failure, retry, escalation" },
        { id: "sa7_logging", label: "Centralize logging — structured logging, correlation IDs, audit trail, retention" },
        { id: "sa7_dashboard", label: "Build health dashboard — real-time status, metrics, trends, SLA tracking" },
      ]}
    ]
  },
  {
    id: "sa_phase8", icon: "fas fa-chart-line", label: "PHASE 8: Metrics, Optimization & Program Maturity", severity: "info",
    children: [
      { id: "sa8_metrics", label: "Automation Metrics & KPIs", children: [
        { id: "sa8_time_saved", label: "Track time saved — manual hours eliminated, analyst time freed, efficiency gain" },
        { id: "sa8_auto_rate", label: "Track automation rate — percentage of processes automated, coverage by category" },
        { id: "sa8_error_rate", label: "Track error rate — automation failures, false positives, manual intervention required" },
        { id: "sa8_mttr", label: "Track MTTR improvement — before/after automation, response time reduction" },
        { id: "sa8_roi", label: "Calculate ROI — cost savings, efficiency gains, risk reduction, value delivered" },
      ]},
      { id: "sa8_optimization", label: "Continuous Optimization", children: [
        { id: "sa8_feedback", label: "Collect feedback — analyst feedback, usability assessment, improvement suggestions" },
        { id: "sa8_review", label: "Regular review — quarterly automation assessment, new opportunities, deprecated automations" },
        { id: "sa8_refactor", label: "Refactor automations — code cleanup, performance optimization, standardization" },
        { id: "sa8_documentation", label: "Maintain documentation — playbooks, procedures, troubleshooting guides, architecture" },
      ]},
      { id: "sa8_program", label: "Program Maturity & Growth", children: [
        { id: "sa8_training", label: "Train team — automation tools, scripting, incident response workflows, best practices" },
        { id: "sa8_community", label: "Engage community — open source contributions, conferences, knowledge sharing" },
        { id: "sa8_roadmap", label: "Maintain roadmap — future automation opportunities, technology evaluation, investment planning" },
        { id: "sa8_maturity", label: "Assess maturity — automation maturity model, benchmarking, improvement targets" },
      ]}
    ]
  }
];
