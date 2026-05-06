window.CHECKLIST_CLOUD_SECURITY = [
  {
    id: "cs_phase1", icon: "fas fa-drafting-compass", label: "PHASE 1: Cloud Architecture & Design Review", severity: "info",
    children: [
      { id: "cs1_scope", label: "Engagement Setup", children: [
        { id: "cs1_auth", label: "Obtain authorization for cloud security architecture review" },
        { id: "cs1_clouds", label: "Identify cloud platforms — AWS, Azure, GCP, multi-cloud" },
        { id: "cs1_docs", label: "Gather architecture docs — diagrams, IaC, deployment configs" },
        { id: "cs1_compliance", label: "Identify compliance requirements — SOC 2, HIPAA, PCI DSS, FedRAMP" },
      ]},
      { id: "cs1_design", label: "Architecture Assessment", children: [
        { id: "cs1_zero_trust", label: "Assess zero trust implementation — identity-centric, least privilege" },
        { id: "cs1_network", label: "Review network design — VPC, subnets, security groups, NACLs" },
        { id: "cs1_identity", label: "Review identity architecture — SSO, MFA, federation, PAM" },
        { id: "cs1_data", label: "Review data architecture — classification, encryption, lifecycle" },
        { id: "cs1_resilience", label: "Review resilience — multi-AZ, multi-region, backup, DR" },
        { id: "cs1_costs", label: "Review cost controls — budget alerts, resource limits, auto-scaling" },
      ]}
    ]
  },
  {
    id: "cs_phase2", icon: "fas fa-shield-alt", label: "PHASE 2: Cloud Security Posture Management", severity: "critical",
    children: [
      { id: "cs2_cspm", label: "CSPM Assessment", children: [
        { id: "cs2_cspm_scan", label: "Run CSPM scans — Wiz, Prisma Cloud, Prowler, ScoutSuite" },
        { id: "cs2_public_exposure", label: "Check public exposure — S3, RDS, storage accounts, open ports" },
        { id: "cs2_iam_review", label: "Review IAM policies — overly permissive, wildcard, unused permissions" },
        { id: "cs2_encryption", label: "Verify encryption — at rest, in transit, key management" },
        { id: "cs2_logging", label: "Verify logging — CloudTrail, Activity Log, Audit Log enabled" },
        { id: "cs2_network_sec", label: "Review network security — flow logs, WAF, firewall rules" },
      ]},
      { id: "cs2_compliance", label: "Compliance Assessment", children: [
        { id: "cs2_cis", label: "Check CIS benchmarks — cloud-specific CIS controls" },
        { id: "cs2_framework", label: "Map to frameworks — Well-Architected, NIST CSF, CSA CCM" },
        { id: "cs2_audit", label: "Review audit readiness — evidence collection, policy documentation" },
      ]},
      { id: "cs2_workload", label: "Workload Protection", children: [
        { id: "cs2_cwpp", label: "Review CWPP — runtime protection, vulnerability scanning" },
        { id: "cs2_container", label: "Assess container security — image scanning, runtime policies" },
        { id: "cs2_serverless", label: "Assess serverless security — function permissions, event sources" },
      ]}
    ]
  },
  {
    id: "cs_phase3", icon: "fas fa-user-shield", label: "PHASE 3: Cloud Identity & Access Architecture", severity: "critical",
    children: [
      { id: "cs3_iam", label: "Identity Architecture", children: [
        { id: "cs3_sso", label: "Review SSO implementation — SAML, OIDC, conditional access" },
        { id: "cs3_mfa", label: "Review MFA enforcement — all users, admins, break-glass accounts" },
        { id: "cs3_pam", label: "Review privileged access — just-in-time, approval workflow, session recording" },
        { id: "cs3_federation", label: "Review federation — trust relationships, SSO, cross-account" },
        { id: "cs3_lifecycle", label: "Review identity lifecycle — provisioning, deprovisioning, access review" },
      ]},
      { id: "cs3_secrets", label: "Secrets Architecture", children: [
        { id: "cs3_vault", label: "Review secrets management — HashiCorp Vault, AWS SM, Azure KV" },
        { id: "cs3_rotation", label: "Review secret rotation — automated, frequency, emergency revocation" },
        { id: "cs3_hardcoded", label: "Scan for hardcoded secrets — repos, configs, environment variables" },
      ]}
    ]
  },
  {
    id: "cs_phase4", icon: "fas fa-file-code", label: "PHASE 4: Infrastructure as Code & CI/CD Security", severity: "high",
    children: [
      { id: "cs4_iac", label: "IaC Security", children: [
        { id: "cs4_terraform", label: "Scan Terraform — checkov, tfsec, terrascan for misconfigurations" },
        { id: "cs4_cloudformation", label: "Scan CloudFormation — cfn_nag, cfn-lint for security issues" },
        { id: "cs4_iac_state", label: "Review IaC state files — encryption, access control, remote storage" },
        { id: "cs4_iac_drift", label: "Check configuration drift — IaC vs. actual deployed state" },
      ]},
      { id: "cs4_pipeline", label: "CI/CD Security", children: [
        { id: "cs4_pipeline_iam", label: "Review pipeline IAM — least privilege, temporary credentials" },
        { id: "cs4_pipeline_secrets", label: "Review pipeline secrets — masked, encrypted, not in logs" },
        { id: "cs4_pipeline_artifacts", label: "Review pipeline artifacts — signing, integrity, access control" },
      ]}
    ]
  },
  {
    id: "cs_phase5", icon: "fas fa-chart-line", label: "PHASE 5: Cloud Monitoring & Incident Readiness", severity: "high",
    children: [
      { id: "cs5_monitoring", label: "Cloud Monitoring", children: [
        { id: "cs5_cloudtrail", label: "Verify CloudTrail — all regions, management and data events" },
        { id: "cs5_guardduty", label: "Review GuardDuty — enabled, findings reviewed, response plan" },
        { id: "cs5_config", label: "Review Config — rules, compliance tracking, remediation" },
        { id: "cs5_alerting", label: "Review alerting — critical events, escalation, response automation" },
      ]},
      { id: "cs5_ir", label: "Cloud Incident Readiness", children: [
        { id: "cs5_ir_plan", label: "Review cloud IR plan — account isolation, snapshot, forensic tools" },
        { id: "cs5_ir_automation", label: "Review IR automation — SOAR, Lambda functions, playbook execution" },
        { id: "cs5_ir_training", label: "Review IR training — cloud-specific scenarios, tabletop exercises" },
      ]}
    ]
  }
];
