window.CHECKLIST_SECURITY_AUTO = [
  {
    id: "sa_phase1", icon: "fas fa-drafting-compass", label: "PHASE 1: Security Automation Strategy & Architecture", severity: "info",
    children: [
      { id: "sa1_assessment", label: "Current State Assessment", children: [
        { id: "sa1_tools_inv", label: "Inventory security tools — SIEM, EDR, firewall, vulnerability scanner, SOAR" },
        { id: "sa1_processes", label: "Document security processes — manual steps, repetitive tasks, bottlenecks" },
        { id: "sa1_skills", label: "Assess team skills — scripting, API integration, security engineering" },
        { id: "sa1_pain_points", label: "Identify pain points — alert fatigue, slow response, manual triage" },
      ]},
      { id: "sa1_strategy", label: "Automation Strategy", children: [
        { id: "sa1_goals", label: "Define automation goals — reduce MTTR, increase coverage, eliminate manual work" },
        { id: "sa1_roadmap", label: "Create automation roadmap — quick wins, medium-term, long-term projects" },
        { id: "sa1_metrics", label: "Define success metrics — time saved, alerts auto-resolved, coverage percentage" },
        { id: "sa1_platform", label: "Select automation platform — SOAR, custom scripts, orchestration tools" },
      ]}
    ]
  },
  {
    id: "sa_phase2", icon: "fas fa-robot", label: "PHASE 2: SOAR & Orchestration", severity: "critical",
    children: [
      { id: "sa2_soar", label: "SOAR Implementation", children: [
        { id: "sa2_soar_platform", label: "Deploy SOAR platform — Phantom, XSOAR, Tines, Shuffle" },
        { id: "sa2_soar_integrations", label: "Integrate security tools — SIEM, EDR, ticketing, threat intel" },
        { id: "sa2_soar_playbooks", label: "Build SOAR playbooks — phishing triage, IOC enrichment, account lockout" },
        { id: "sa2_soar_testing", label: "Test playbooks — dry runs, edge cases, error handling" },
      ]},
      { id: "sa2_orchestration", label: "Process Orchestration", children: [
        { id: "sa2_triage", label: "Automate alert triage — enrichment, correlation, severity scoring" },
        { id: "sa2_containment", label: "Automate containment — isolate endpoint, block IP, disable account" },
        { id: "sa2_remediation", label: "Automate remediation — kill process, quarantine file, patch system" },
        { id: "sa2_escalation", label: "Automate escalation — notify on-call, create ticket, update status" },
        { id: "sa2_reporting", label: "Automate reporting — incident summary, metrics dashboard, compliance" },
      ]}
    ]
  },
  {
    id: "sa_phase3", icon: "fas fa-code", label: "PHASE 3: Detection Engineering & Automation", severity: "critical",
    children: [
      { id: "sa3_detection", label: "Detection as Code", children: [
        { id: "sa3_sigma_dev", label: "Develop Sigma rules — platform-agnostic detection rules, version control" },
        { id: "sa3_siem_rules", label: "Develop SIEM rules — KQL, SPL, correlation rules, testing framework" },
        { id: "sa3_yara_dev", label: "Develop YARA rules — malware detection, file analysis, threat hunting" },
        { id: "sa3_testing", label: "Test detection rules — Atomic Red Team, Calder, purple team exercises" },
      ]},
      { id: "sa3_pipelines", label: "Detection Pipelines", children: [
        { id: "sa3_ci_cd", label: "Setup detection CI/CD — linting, testing, deployment pipeline" },
        { id: "sa3_version_control", label: "Version control detections — Git, code review, change management" },
        { id: "sa3_monitoring", label: "Monitor detection health — rule performance, false positive rate" },
        { id: "sa3_tuning", label: "Automate rule tuning — FP reduction, threshold adjustment, suppression" },
      ]},
      { id: "sa3_threat_intel", label: "Threat Intel Automation", children: [
        { id: "sa3_ioc_ingest", label: "Automate IOC ingestion — STIX/TAXII, API feeds, deduplication" },
        { id: "sa3_ioc_enrichment", label: "Automate IOC enrichment — reputation, geolocation, WHOIS, malware family" },
        { id: "sa3_ioc_deploy", label: "Automate IOC deployment — SIEM, firewall, EDR, email gateway" },
      ]}
    ]
  },
  {
    id: "sa_phase4", icon: "fas fa-cloud", label: "PHASE 4: Cloud & Infrastructure Security Automation", severity: "high",
    children: [
      { id: "sa4_iac", label: "Infrastructure as Code Security", children: [
        { id: "sa4_iac_scan", label: "Automate IaC scanning — Terraform, CloudFormation, Kubernetes manifests" },
        { id: "sa4_iac_gate", label: "Setup IaC quality gates — blocking misconfigurations in CI/CD" },
        { id: "sa4_compliance", label: "Automate compliance checks — CIS benchmarks, policy as code" },
        { id: "sa4_remediation", label: "Automate IaC remediation — auto-fix misconfigurations, PR generation" },
      ]},
      { id: "sa4_cloud", label: "Cloud Security Automation", children: [
        { id: "sa4_cspm", label: "Automate CSPM — continuous posture monitoring, drift detection" },
        { id: "sa4_iam", label: "Automate IAM — unused permission detection, access review, least privilege" },
        { id: "sa4_secrets", label: "Automate secret rotation — periodic rotation, emergency revocation" },
        { id: "sa4_response", label: "Automate cloud response — isolate instance, snapshot, revoke credentials" },
      ]}
    ]
  },
  {
    id: "sa_phase5", icon: "fas fa-chart-line", label: "PHASE 5: Metrics, Monitoring & Continuous Improvement", severity: "info",
    children: [
      { id: "sa5_metrics", label: "Automation Metrics", children: [
        { id: "sa5_kpi", label: "Track automation KPIs — time saved, tasks automated, error rate" },
        { id: "sa5_coverage", label: "Measure automation coverage — percentage of processes automated" },
        { id: "sa5_efficiency", label: "Measure efficiency — MTTR reduction, alert fatigue reduction" },
        { id: "sa5_dashboard", label: "Build automation dashboard — real-time metrics, trend analysis" },
      ]},
      { id: "sa5_improvement", label: "Continuous Improvement", children: [
        { id: "sa5_feedback", label: "Collect feedback — analyst feedback, usability, false positive rate" },
        { id: "sa5_review", label: "Regular review — quarterly automation assessment, new opportunities" },
        { id: "sa5_documentation", label: "Document automations — playbooks, procedures, troubleshooting guides" },
        { id: "sa5_training", label: "Train team — automation tools, scripting, incident response workflows" },
      ]}
    ]
  }
];
