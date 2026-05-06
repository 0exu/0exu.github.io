window.CHECKLIST_GRC = [
  {
    id: "grc_phase1", icon: "fas fa-clipboard-list", label: "PHASE 1: Governance Framework & Policy Development", severity: "info",
    children: [
      { id: "grc1_framework", label: "Framework Selection & Alignment", children: [
        { id: "grc1_nist_csf", label: "Implement NIST CSF — Identify, Protect, Detect, Respond, Recover" },
        { id: "grc1_iso27001", label: "Align with ISO 27001 — ISMS scope, risk treatment, SoA" },
        { id: "grc1_cis", label: "Implement CIS Controls — IG1, IG2, IG3 implementation groups" },
        { id: "grc1_mapping", label: "Map multiple frameworks — unified controls, cross-references" },
      ]},
      { id: "grc1_policy", label: "Policy Development", children: [
        { id: "grc1_infosec_policy", label: "Write information security policy — scope, objectives, authority" },
        { id: "grc1_access_policy", label: "Write access control policy — provisioning, review, revocation" },
        { id: "grc1_data_policy", label: "Write data classification policy — categories, handling, retention" },
        { id: "grc1_remote_policy", label: "Write remote work policy — VPN, MFA, endpoint security" },
        { id: "grc1_incident_policy", label: "Write incident response policy — classification, escalation, reporting" },
        { id: "grc1_acceptable_use", label: "Write acceptable use policy — system usage, restrictions, monitoring" },
      ]},
      { id: "grc1_organization", label: "Organizational Governance", children: [
        { id: "grc1_steering", label: "Establish security steering committee — membership, cadence, authority" },
        { id: "grc1_roles", label: "Define security roles — CISO, security team, data owners, custodians" },
        { id: "grc1_third_party", label: "Establish third-party governance — vendor risk, contracts, SLAs" },
      ]}
    ]
  },
  {
    id: "grc_phase2", icon: "fas fa-balance-scale", label: "PHASE 2: Risk Assessment & Management", severity: "critical",
    children: [
      { id: "grc2_identify", label: "Risk Identification", children: [
        { id: "grc2_asset_inv", label: "Build asset inventory — hardware, software, data, people, processes" },
        { id: "grc2_threat_id", label: "Identify threats — threat modeling, threat intelligence, historical data" },
        { id: "grc2_vuln_id", label: "Identify vulnerabilities — scanning, pen testing, assessment findings" },
        { id: "grc2_impact", label: "Assess impact — financial, operational, reputational, regulatory" },
      ]},
      { id: "grc2_analysis", label: "Risk Analysis & Evaluation", children: [
        { id: "grc2_likelihood", label: "Assess likelihood — threat frequency, vulnerability exploitability" },
        { id: "grc2_risk_calc", label: "Calculate risk — likelihood × impact, inherent vs. residual risk" },
        { id: "grc2_risk_register", label: "Maintain risk register — documented risks, owners, treatment plans" },
        { id: "grc2_risk_appetite", label: "Define risk appetite — acceptable risk levels, tolerance thresholds" },
      ]},
      { id: "grc2_treatment", label: "Risk Treatment", children: [
        { id: "grc2_mitigate", label: "Risk mitigation — controls implementation, risk reduction" },
        { id: "grc2_transfer", label: "Risk transfer — insurance, contracts, outsourcing" },
        { id: "grc2_accept", label: "Risk acceptance — documented, approved, time-limited" },
        { id: "grc2_avoid", label: "Risk avoidance — discontinue activity, change approach" },
        { id: "grc2_monitor", label: "Monitor treatment effectiveness — control testing, key risk indicators" },
      ]}
    ]
  },
  {
    id: "grc_phase3", icon: "fas fa-check-double", label: "PHASE 3: Compliance & Audit Readiness", severity: "critical",
    children: [
      { id: "grc3_regulatory", label: "Regulatory Compliance", children: [
        { id: "grc3_gdpr", label: "GDPR compliance — data mapping, consent, DPO, breach notification" },
        { id: "grc3_hipaa", label: "HIPAA compliance — PHI handling, BAAs, security rule, privacy rule" },
        { id: "grc3_pci", label: "PCI DSS compliance — card data, network segmentation, assessment" },
        { id: "grc3_sox", label: "SOX compliance — financial controls, ITGC, audit trails" },
        { id: "grc3_state", label: "State privacy laws — CCPA, CPRA, state-specific requirements" },
      ]},
      { id: "grc3_audit", label: "Audit Preparation", children: [
        { id: "grc3_soc2", label: "SOC 2 readiness — trust services criteria, evidence collection" },
        { id: "grc3_evidence", label: "Prepare evidence — policies, logs, screenshots, procedures" },
        { id: "grc3_gap_analysis", label: "Conduct gap analysis — pre-assessment, remediation plan" },
        { id: "grc3_internal_audit", label: "Conduct internal audits — self-assessment, readiness checks" },
      ]},
      { id: "grc3_monitoring", label: "Continuous Compliance", children: [
        { id: "grc3_automation", label: "Automate compliance — Drata, Vanta, Continuous monitoring tools" },
        { id: "grc3_reporting", label: "Generate compliance reports — dashboards, executive summaries" },
        { id: "grc3_changes", label: "Monitor regulatory changes — new laws, updated standards" },
      ]}
    ]
  },
  {
    id: "grc_phase4", icon: "fas fa-handshake", label: "PHASE 4: Vendor & Third-Party Risk Management", severity: "high",
    children: [
      { id: "grc4_assessment", label: "Vendor Risk Assessment", children: [
        { id: "grc4_inventory", label: "Build vendor inventory — all third parties, service providers" },
        { id: "grc4_classify", label: "Classify vendors — critical, high, medium, low risk" },
        { id: "grc4_questionnaire", label: "Send security questionnaires — SIG, CAIQ, custom assessments" },
        { id: "grc4_review", label: "Review vendor evidence — SOC 2 reports, penetration tests, certifications" },
      ]},
      { id: "grc4_contract", label: "Contract & SLA Security", children: [
        { id: "grc4_security_clause", label: "Include security clauses — data protection, breach notification" },
        { id: "grc4_right_audit", label: "Include right-to-audit clauses — assessment rights, frequency" },
        { id: "grc4_data_handling", label: "Define data handling — processing, storage, transfer, deletion" },
        { id: "grc4_termination", label: "Define termination procedures — data return, deletion, transition" },
      ]},
      { id: "grc4_monitoring", label: "Ongoing Vendor Monitoring", children: [
        { id: "grc4_monitoring_tools", label: "Monitor vendor security — SecurityScorecard, BitSight, RiskRecon" },
        { id: "grc4_periodic_review", label: "Conduct periodic reviews — annual reassessment, trigger-based" },
        { id: "grc4_incident_response", label: "Define vendor incident response — notification, coordination" },
      ]}
    ]
  },
  {
    id: "grc_phase5", icon: "fas fa-graduation-cap", label: "PHASE 5: Security Awareness & Training", severity: "info",
    children: [
      { id: "grc5_awareness", label: "Security Awareness Program", children: [
        { id: "grc5_curriculum", label: "Develop training curriculum — phishing, passwords, data handling" },
        { id: "grc5_phishing", label: "Run phishing simulations — periodic tests, targeted campaigns" },
        { id: "grc5_role_based", label: "Provide role-based training — developers, admins, executives" },
        { id: "grc5_metrics", label: "Track training metrics — completion rates, click rates, improvement" },
      ]},
      { id: "grc5_reporting", label: "GRC Reporting & Metrics", children: [
        { id: "grc5_kpi", label: "Define GRC KPIs — risk reduction, compliance rate, audit findings" },
        { id: "grc5_dashboard", label: "Build GRC dashboard — risk heatmap, compliance status, trends" },
        { id: "grc5_exec_report", label: "Prepare executive reports — board-level summaries, risk posture" },
        { id: "grc5_continuous", label: "Continuous improvement — lessons learned, program maturity" },
      ]}
    ]
  }
];
