window.CHECKLIST_GRC = [
  {
    id: "grc_phase1", icon: "fas fa-clipboard-list", label: "PHASE 1: Governance Framework & Organizational Structure", severity: "info",
    children: [
      { id: "grc1_framework", label: "Framework Selection & Alignment", children: [
        { id: "grc1_nist_csf", label: "Implement NIST CSF — Identify, Protect, Detect, Respond, Recover functions" },
        { id: "grc1_iso27001", label: "Align with ISO 27001 — ISMS scope, Statement of Applicability, risk treatment plan" },
        { id: "grc1_cis", label: "Implement CIS Controls — IG1, IG2, IG3 implementation groups, Safeguards" },
        { id: "grc1_mapping", label: "Map multiple frameworks — unified controls, cross-references, gap identification" },
        { id: "grc1_maturity", label: "Assess maturity level — CMMI, current state, target state, improvement roadmap" },
      ]},
      { id: "grc1_organization", label: "Organizational Governance Structure", children: [
        { id: "grc1_steering", label: "Establish security steering committee — charter, membership, cadence, decision authority" },
        { id: "grc1_roles", label: "Define security roles — CISO, security team, data owners, custodians, stewards" },
        { id: "grc1_three_lines", label: "Implement three lines model — operational management, risk/compliance, internal audit" },
        { id: "grc1_reporting", label: "Establish reporting structure — board reporting, KPI dashboards, risk metrics" },
      ]},
      { id: "grc1_charter", label: "Security Charter & Authority", children: [
        { id: "grc1_charter_doc", label: "Draft security charter — mission, scope, authority, responsibilities, accountability" },
        { id: "grc1_budget", label: "Establish security budget — planning, allocation, justification, ROI measurement" },
        { id: "grc1_authority", label: "Define security authority — veto power, enforcement, escalation, sanctions" },
      ]}
    ]
  },
  {
    id: "grc_phase2", icon: "fas fa-file-alt", label: "PHASE 2: Policy Development & Documentation", severity: "high",
    children: [
      { id: "grc2_policies", label: "Core Security Policies", children: [
        { id: "grc2_infosec", label: "Information security policy — scope, objectives, principles, authority, enforcement" },
        { id: "grc2_access", label: "Access control policy — provisioning, review, revocation, least privilege, segregation of duties" },
        { id: "grc2_data", label: "Data classification policy — categories, handling requirements, labeling, retention" },
        { id: "grc2_remote", label: "Remote work policy — VPN, MFA, endpoint security, acceptable use, monitoring" },
        { id: "grc2_acceptable", label: "Acceptable use policy — system usage, restrictions, monitoring, consequences" },
        { id: "grc2_change", label: "Change management policy — approval, testing, rollback, emergency changes" },
      ]},
      { id: "grc2_standards", label: "Security Standards & Procedures", children: [
        { id: "grc2_password_std", label: "Password standard — complexity, length, rotation, breach checking, MFA requirement" },
        { id: "grc2_encryption_std", label: "Encryption standard — algorithms, key lengths, protocols, certificate management" },
        { id: "grc2_network_std", label: "Network security standard — segmentation, firewall rules, wireless, remote access" },
        { id: "grc2_dev_sec_std", label: "Development security standard — SDLC, code review, testing, deployment, secrets management" },
        { id: "grc2_procedures", label: "Write SOPs — step-by-step procedures for security operations, incident response, backups" },
      ]},
      { id: "grc2_review", label: "Policy Review & Maintenance", children: [
        { id: "grc2_review_cycle", label: "Establish review cycle — annual review, trigger-based updates, version control" },
        { id: "grc2_approval", label: "Define approval process — management sign-off, legal review, stakeholder input" },
        { id: "grc2_distribution", label: "Manage policy distribution — accessibility, acknowledgment tracking, training integration" },
      ]}
    ]
  },
  {
    id: "grc_phase3", icon: "fas fa-balance-scale", label: "PHASE 3: Risk Assessment & Management Program", severity: "critical",
    children: [
      { id: "grc3_identify", label: "Risk Identification", children: [
        { id: "grc3_asset_inv", label: "Build asset inventory — hardware, software, data, people, processes, facilities" },
        { id: "grc3_threat_id", label: "Identify threats — threat modeling, threat intelligence, historical data, industry trends" },
        { id: "grc3_vuln_id", label: "Identify vulnerabilities — scanning, pen testing, assessments, audit findings" },
        { id: "grc3_impact", label: "Assess impact — financial, operational, reputational, regulatory, safety" },
        { id: "grc3_business", label: "Conduct business impact analysis — critical processes, dependencies, recovery objectives" },
      ]},
      { id: "grc3_analysis", label: "Risk Analysis & Evaluation", children: [
        { id: "grc3_likelihood", label: "Assess likelihood — threat frequency, vulnerability exploitability, control effectiveness" },
        { id: "grc3_risk_calc", label: "Calculate risk — likelihood x impact, inherent vs. residual risk, risk scoring" },
        { id: "grc3_risk_register", label: "Maintain risk register — documented risks, owners, treatment plans, status tracking" },
        { id: "grc3_appetite", label: "Define risk appetite — acceptable risk levels, tolerance thresholds, board approval" },
        { id: "grc3_heatmap", label: "Create risk heatmap — visual representation, prioritization, trend analysis" },
      ]},
      { id: "grc3_treatment", label: "Risk Treatment & Monitoring", children: [
        { id: "grc3_mitigate", label: "Risk mitigation — controls implementation, risk reduction, compensating controls" },
        { id: "grc3_transfer", label: "Risk transfer — cyber insurance, contracts, outsourcing, indemnification" },
        { id: "grc3_accept", label: "Risk acceptance — documented, approved by management, time-limited, reviewed periodically" },
        { id: "grc3_avoid", label: "Risk avoidance — discontinue activity, change approach, alternative solutions" },
        { id: "grc3_kri", label: "Define KRIs — Key Risk Indicators, thresholds, monitoring, escalation triggers" },
        { id: "grc3_monitor", label: "Monitor treatment effectiveness — control testing, KRI tracking, risk reassessment" },
      ]}
    ]
  },
  {
    id: "grc_phase4", icon: "fas fa-check-double", label: "PHASE 4: Compliance Program & Regulatory Management", severity: "critical",
    children: [
      { id: "grc4_regulatory", label: "Regulatory Compliance Program", children: [
        { id: "grc4_gdpr", label: "GDPR compliance — data mapping, lawful basis, DPO, DPIA, breach notification, data subject rights" },
        { id: "grc4_hipaa", label: "HIPAA compliance — PHI handling, BAAs, security rule, privacy rule, breach notification" },
        { id: "grc4_pci", label: "PCI DSS compliance — card data handling, network segmentation, SAQ, assessment, QSA" },
        { id: "grc4_sox", label: "SOX compliance — financial controls, ITGC, audit trails, change management, access review" },
        { id: "grc4_privacy", label: "Privacy compliance — CCPA/CPRA, state laws, international data transfers, consent management" },
      ]},
      { id: "grc4_audit", label: "Audit Preparation & Management", children: [
        { id: "grc4_soc2", label: "SOC 2 readiness — trust services criteria, evidence collection, Type I and Type II" },
        { id: "grc4_iso27001_audit", label: "ISO 27001 audit — stage 1 and stage 2, surveillance audits, recertification" },
        { id: "grc4_evidence", label: "Prepare audit evidence — policies, logs, screenshots, procedures, training records" },
        { id: "grc4_gap_analysis", label: "Conduct gap analysis — pre-assessment, remediation plan, timeline, resource allocation" },
        { id: "grc4_internal", label: "Conduct internal audits — self-assessment, readiness checks, independent review" },
      ]},
      { id: "grc4_continuous", label: "Continuous Compliance Management", children: [
        { id: "grc4_automation", label: "Automate compliance — Drata, Vanta, Continuous monitoring, evidence automation" },
        { id: "grc4_monitoring", label: "Continuous compliance monitoring — real-time control testing, deviation alerting" },
        { id: "grc4_regulatory_watch", label: "Monitor regulatory changes — new laws, updated standards, industry guidance" },
        { id: "grc4_reporting", label: "Generate compliance reports — dashboards, executive summaries, board reporting" },
      ]}
    ]
  },
  {
    id: "grc_phase5", icon: "fas fa-handshake", label: "PHASE 5: Third-Party & Vendor Risk Management", severity: "high",
    children: [
      { id: "grc5_inventory", label: "Vendor Inventory & Classification", children: [
        { id: "grc5_vendor_inv", label: "Build vendor inventory — all third parties, service providers, SaaS, cloud providers" },
        { id: "grc5_classify", label: "Classify vendors — critical, high, medium, low risk based on data access and impact" },
        { id: "grc5_fourth", label: "Assess fourth-party risk — vendor's vendors, supply chain dependencies" },
        { id: "grc5_concentration", label: "Assess concentration risk — single vendor dependency, geographic concentration" },
      ]},
      { id: "grc5_assessment", label: "Vendor Risk Assessment", children: [
        { id: "grc5_questionnaire", label: "Send security questionnaires — SIG, CAIQ, custom assessments, risk-based depth" },
        { id: "grc5_evidence", label: "Review vendor evidence — SOC 2 reports, pen test results, certifications, policies" },
        { id: "grc5_assessment_tools", label: "Use assessment tools — SecurityScorecard, BitSight, RiskRecon, UpGuard" },
        { id: "grc5_onsite", label: "Conduct onsite assessments — critical vendors, facility inspection, interviews" },
      ]},
      { id: "grc5_contract", label: "Contract & Ongoing Management", children: [
        { id: "grc5_security_clause", label: "Include security clauses — data protection, breach notification, audit rights, encryption" },
        { id: "grc5_sla", label: "Define SLAs — availability, performance, response times, penalties, reporting" },
        { id: "grc5_periodic", label: "Conduct periodic reviews — annual reassessment, trigger-based review, continuous monitoring" },
        { id: "grc5_offboarding", label: "Define vendor offboarding — data return, deletion, transition, contract termination" },
        { id: "grc5_incident", label: "Define vendor incident response — notification timelines, coordination, investigation rights" },
      ]}
    ]
  },
  {
    id: "grc_phase6", icon: "fas fa-graduation-cap", label: "PHASE 6: Security Awareness, Training & Culture", severity: "info",
    children: [
      { id: "grc6_program", label: "Security Awareness Program", children: [
        { id: "grc6_curriculum", label: "Develop training curriculum — phishing, passwords, data handling, social engineering, reporting" },
        { id: "grc6_onboarding", label: "New employee training — security orientation, policy acknowledgment, role-specific training" },
        { id: "grc6_role_based", label: "Provide role-based training — developers, admins, executives, HR, finance, legal" },
        { id: "grc6_ongoing", label: "Ongoing training — quarterly refreshers, security newsletters, awareness campaigns" },
      ]},
      { id: "grc6_phishing", label: "Phishing Simulation Program", children: [
        { id: "grc6_phishing_sim", label: "Run phishing simulations — periodic campaigns, targeted spear-phishing, seasonal themes" },
        { id: "grc6_remediation", label: "Remediate clickers — additional training, coaching, reporting procedures" },
        { id: "grc6_metrics", label: "Track phishing metrics — click rates, report rates, improvement over time" },
        { id: "grc6_positive", label: "Positive reinforcement — reward reporters, gamification, recognition programs" },
      ]},
      { id: "grc6_culture", label: "Security Culture Development", children: [
        { id: "grc6_champions", label: "Build security champions network — department representatives, peer influence" },
        { id: "grc6_communication", label: "Security communication — regular updates, leadership messaging, transparency" },
        { id: "grc6_engagement", label: "Employee engagement — security events, CTF competitions, bug bounty internal" },
        { id: "grc6_survey", label: "Conduct culture surveys — baseline measurement, annual tracking, improvement areas" },
      ]}
    ]
  },
  {
    id: "grc_phase7", icon: "fas fa-exclamation-triangle", label: "PHASE 7: Incident Response Governance & Business Continuity", severity: "critical",
    children: [
      { id: "grc7_ir_gov", label: "Incident Response Governance", children: [
        { id: "grc7_ir_policy", label: "Establish IR policy — authority, scope, classification, escalation, communication" },
        { id: "grc7_ir_team", label: "Define IR team structure — roles, responsibilities, alternates, contact lists, on-call" },
        { id: "grc7_legal", label: "Establish legal framework — engagement with legal counsel, regulatory notification, privilege" },
        { id: "grc7_comm", label: "Define communication plan — internal, external, media, customers, regulators, law enforcement" },
      ]},
      { id: "grc7_bcp", label: "Business Continuity Planning", children: [
        { id: "grc7_bia", label: "Conduct business impact analysis — critical processes, RTO/RPO, dependencies, single points of failure" },
        { id: "grc7_bcp_doc", label: "Develop BCP — recovery strategies, procedures, alternate sites, communication plan" },
        { id: "grc7_dr_plan", label: "Develop disaster recovery plan — IT systems recovery, data restoration, failover procedures" },
        { id: "grc7_testing", label: "Test BCP/DR — tabletop exercises, simulation testing, full-scale drills, lessons learned" },
      ]},
      { id: "grc7_post", label: "Post-Incident Governance", children: [
        { id: "grc7_lessons", label: "Conduct lessons learned — root cause, what worked, what didn't, improvement actions" },
        { id: "grc7_remediation", label: "Track remediation — action items, owners, deadlines, status, verification" },
        { id: "grc7_trend", label: "Analyze incident trends — frequency, types, causes, improvements over time" },
      ]}
    ]
  },
  {
    id: "grc_phase8", icon: "fas fa-chart-bar", label: "PHASE 8: GRC Metrics, Reporting & Continuous Improvement", severity: "info",
    children: [
      { id: "grc8_kpi", label: "GRC KPIs & Metrics", children: [
        { id: "grc8_risk_kpi", label: "Risk KPIs — risk reduction, open risks, treatment completion, KRI breaches" },
        { id: "grc8_compliance_kpi", label: "Compliance KPIs — audit findings, compliance rate, control effectiveness, gaps" },
        { id: "grc8_vendor_kpi", label: "Vendor KPIs — assessment completion, high-risk vendors, remediation status" },
        { id: "grc8_training_kpi", label: "Training KPIs — completion rate, phishing click rate, reporting rate, improvement" },
        { id: "grc8_policy_kpi", label: "Policy KPIs — policy acknowledgment rate, exceptions, review completion" },
      ]},
      { id: "grc8_reporting", label: "GRC Reporting & Dashboards", children: [
        { id: "grc8_dashboard", label: "Build GRC dashboard — risk heatmap, compliance status, audit findings, trends" },
        { id: "grc8_exec_report", label: "Prepare executive reports — board-level summaries, risk posture, investment needs" },
        { id: "grc8_regulatory", label: "Prepare regulatory reports — required filings, compliance certifications, attestations" },
      ]},
      { id: "grc8_improvement", label: "Continuous Improvement Program", children: [
        { id: "grc8_maturity", label: "Assess maturity — annual maturity assessment, benchmarking, improvement roadmap" },
        { id: "grc8_benchmark", label: "Industry benchmarking — peer comparison, best practices, industry standards" },
        { id: "grc8_roadmap", label: "Maintain improvement roadmap — prioritized initiatives, resource planning, milestones" },
        { id: "grc8_feedback", label: "Collect feedback — stakeholder surveys, audit feedback, lessons learned integration" },
      ]}
    ]
  }
];
