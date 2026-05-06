window.CHECKLIST_CLOUD_SECURITY = [
  {
    id: "cs_phase1", icon: "fas fa-drafting-compass", label: "PHASE 1: Cloud Engagement & Architecture Discovery", severity: "info",
    children: [
      { id: "cs1_scope", label: "Engagement Scope & Authorization", children: [
        { id: "cs1_auth", label: "Obtain authorization for cloud security assessment — written consent, scope definition" },
        { id: "cs1_clouds", label: "Identify all cloud platforms — AWS, Azure, GCP, OCI, multi-cloud, hybrid" },
        { id: "cs1_accounts", label: "Inventory cloud accounts — root accounts, IAM users, federated identities, SSO" },
        { id: "cs1_compliance", label: "Identify compliance requirements — SOC 2, HIPAA, PCI DSS, FedRAMP, ISO 27017" },
        { id: "cs1_contracts", label: "Review cloud contracts — shared responsibility model, SLA, data residency" },
      ]},
      { id: "cs1_discovery", label: "Cloud Asset Discovery", children: [
        { id: "cs1_resource_inv", label: "Inventory all resources — compute, storage, network, database, serverless" },
        { id: "cs1_region_scan", label: "Scan all regions — including unused regions, default regions, global services" },
        { id: "cs1_shadow_cloud", label: "Discover shadow cloud — unauthorized accounts, developer sandboxes, free tiers" },
        { id: "cs1_third_party", label: "Identify third-party integrations — SaaS, PaaS, marketplace apps, connectors" },
      ]},
      { id: "cs1_arch", label: "Architecture & Design Review", children: [
        { id: "cs1_diagrams", label: "Review architecture diagrams — network topology, data flows, trust boundaries" },
        { id: "cs1_iac_review", label: "Review IaC — Terraform, CloudFormation, ARM templates, Pulumi configs" },
        { id: "cs1_design_patterns", label: "Evaluate design patterns — well-architected framework, design patterns, anti-patterns" },
        { id: "cs1_resilience", label: "Assess resilience design — multi-AZ, multi-region, backup, DR, failover" },
      ]}
    ]
  },
  {
    id: "cs_phase2", icon: "fas fa-user-shield", label: "PHASE 2: Identity & Access Management Assessment", severity: "critical",
    children: [
      { id: "cs2_iam_policy", label: "IAM Policy Analysis", children: [
        { id: "cs2_policy_audit", label: "Audit IAM policies — overly permissive, wildcard (*), resource-level permissions" },
        { id: "cs2_inline", label: "Review inline policies — embedded in users/roles, hard to track, consolidate" },
        { id: "cs2_cross_account", label: "Review cross-account trust — assume role policies, external IDs, condition keys" },
        { id: "cs2_boundary", label: "Review permission boundaries — SCPs, permission boundaries, organization policies" },
        { id: "cs2_unused", label: "Identify unused permissions — access analyzer, unused policy detection, right-sizing" },
      ]},
      { id: "cs2_credentials", label: "Credential & Key Management", children: [
        { id: "cs2_access_keys", label: "Audit access keys — rotation, age, unused keys, hardcoded in code/configs" },
        { id: "cs2_root_account", label: "Secure root accounts — MFA, no daily use, access keys disabled, monitoring" },
        { id: "cs2_service_accounts", label: "Audit service accounts — workload identity, instance profiles, managed identities" },
        { id: "cs2_api_keys", label: "Audit API keys — public exposure, unrestricted, no rotation, logging" },
        { id: "cs2_secrets", label: "Scan for hardcoded secrets — repos, configs, env vars, CI/CD pipelines, logs" },
      ]},
      { id: "cs2_sso_fed", label: "SSO & Federation Security", children: [
        { id: "cs2_sso_config", label: "Review SSO configuration — SAML, OIDC, SCIM, conditional access, MFA" },
        { id: "cs2_federation", label: "Review federation trust — IdP trust, SAML assertion validation, attribute mapping" },
        { id: "cs2_provisioning", label: "Review identity lifecycle — automated provisioning, deprovisioning, access reviews" },
        { id: "cs2_breakglass", label: "Secure break-glass accounts — monitored, MFA, documented, tested periodically" },
      ]}
    ]
  },
  {
    id: "cs_phase3", icon: "fas fa-network-wired", label: "PHASE 3: Network Security & Segmentation", severity: "critical",
    children: [
      { id: "cs3_vpc", label: "VPC & Network Architecture", children: [
        { id: "cs3_vpc_design", label: "Review VPC design — CIDR allocation, subnet design, routing tables, NAT" },
        { id: "cs3_security_groups", label: "Audit security groups — open ports, 0.0.0.0/0 rules, unused rules, documentation" },
        { id: "cs3_nacl", label: "Review NACLs — stateless rules, deny rules, default ACL hardening" },
        { id: "cs3_vpc_peering", label: "Audit VPC peering — transitive peering, routing loops, cross-VPC access" },
        { id: "cs3_vpc_endpoints", label: "Review VPC endpoints — interface endpoints, gateway endpoints, policy restrictions" },
      ]},
      { id: "cs3_public", label: "Public Exposure Assessment", children: [
        { id: "cs3_elb", label: "Audit load balancers — public-facing, SSL/TLS config, WAF attachment, logging" },
        { id: "cs3_storage_public", label: "Check public storage — S3 buckets, Blob containers, GCS buckets, ACLs" },
        { id: "cs3_db_public", label: "Check public databases — RDS, Cosmos DB, Cloud SQL, public IP assignment" },
        { id: "cs3_ec2_public", label: "Check public instances — direct internet access, elastic IPs, security groups" },
        { id: "cs3_dns", label: "Audit DNS configuration — Route 53, DNS records, zone transfers, DNSSEC" },
      ]},
      { id: "cs3_traffic", label: "Traffic Monitoring & Control", children: [
        { id: "cs3_flow_logs", label: "Enable VPC Flow Logs — all VPCs, all subnets, retention, analysis" },
        { id: "cs3_traffic_mirror", label: "Deploy Traffic Mirroring — IDS/IPS inspection, packet capture, forensics" },
        { id: "cs3_transit", label: "Review Transit Gateway — hub-and-spoke, segmentation, route propagation" },
        { id: "cs3_waf", label: "Deploy and tune WAF — managed rules, custom rules, rate limiting, bot management" },
      ]}
    ]
  },
  {
    id: "cs_phase4", icon: "fas fa-database", label: "PHASE 4: Data Security & Encryption", severity: "critical",
    children: [
      { id: "cs4_classification", label: "Data Classification & Discovery", children: [
        { id: "cs4_discovery", label: "Run data discovery — Macie, Purview, DLP Scanner, sensitive data identification" },
        { id: "cs4_classification", label: "Implement data classification — public, internal, confidential, restricted, automated tagging" },
        { id: "cs4_dlp", label: "Deploy DLP — data loss prevention, egress monitoring, content inspection, blocking" },
        { id: "cs4_data_map", label: "Create data flow map — data at rest, in transit, in use, cross-border transfers" },
      ]},
      { id: "cs4_encryption", label: "Encryption Assessment", children: [
        { id: "cs4_at_rest", label: "Verify encryption at rest — EBS, RDS, S3, Blob, Cloud Storage, KMS integration" },
        { id: "cs4_in_transit", label: "Verify encryption in transit — TLS 1.2+, certificate management, HSTS, perfect forward secrecy" },
        { id: "cs4_kms", label: "Review KMS — key rotation, key policies, access control, audit logging, BYOK" },
        { id: "cs4_client_side", label: "Evaluate client-side encryption — application-level encryption, field-level encryption" },
        { id: "cs4_key_lifecycle", label: "Review key lifecycle — creation, rotation, revocation, destruction, key hierarchy" },
      ]},
      { id: "cs4_backup", label: "Backup & Data Protection", children: [
        { id: "cs4_backup_enc", label: "Verify backup encryption — encrypted backups, key separation from production" },
        { id: "cs4_backup_isolation", label: "Isolate backups — immutable backups, air-gapped, separate account/subscription" },
        { id: "cs4_backup_test", label: "Test backup restoration — periodic restore tests, RTO/RPO validation" },
        { id: "cs4_versioning", label: "Enable versioning — S3 versioning, object lock, WORM storage, retention policies" },
      ]}
    ]
  },
  {
    id: "cs_phase5", icon: "fas fa-box-open", label: "PHASE 5: Container, Kubernetes & Serverless Security", severity: "critical",
    children: [
      { id: "cs5_container", label: "Container Security", children: [
        { id: "cs5_image_scan", label: "Scan container images — vulnerability scanning, CVE database, base image updates" },
        { id: "cs5_registry", label: "Secure container registry — access control, image signing, content trust, scanning" },
        { id: "cs5_runtime", label: "Deploy runtime protection — Falco, AppArmor, seccomp, capability restrictions" },
        { id: "cs5_dockerfile", label: "Review Dockerfiles — non-root user, minimal base, multi-stage, no secrets" },
        { id: "cs5_sbom", label: "Generate SBOM — Software Bill of Materials, dependency tracking, license compliance" },
      ]},
      { id: "cs5_k8s", label: "Kubernetes Security", children: [
        { id: "cs5_k8s_hardening", label: "Harden K8s cluster — CIS benchmarks, RBAC, pod security standards, network policies" },
        { id: "cs5_k8s_secrets", label: "Secure K8s secrets — external secrets manager, sealed secrets, no env var secrets" },
        { id: "cs5_k8s_audit", label: "Enable audit logging — API server audit, control plane logging, log retention" },
        { id: "cs5_k8s_network", label: "Implement network policies — deny-all default, namespace isolation, egress control" },
        { id: "cs5_k8s_admission", label: "Deploy admission controllers — OPA/Gatekeeper, Kyverno, image policy webhook" },
      ]},
      { id: "cs5_serverless", label: "Serverless Security", children: [
        { id: "cs5_lambda_perms", label: "Review Lambda permissions — least privilege, no wildcard, resource-level constraints" },
        { id: "cs5_lambda_deps", label: "Audit Lambda dependencies — vulnerable libraries, outdated runtimes, layer security" },
        { id: "cs5_lambda_env", label: "Secure Lambda environment — no secrets in env vars, encryption, VPC attachment" },
        { id: "cs5_event_sources", label: "Review event sources — trigger validation, event injection, source authentication" },
        { id: "cs5_api_gateway", label: "Secure API Gateway — authentication, rate limiting, request validation, WAF" },
      ]}
    ]
  },
  {
    id: "cs_phase6", icon: "fas fa-file-code", label: "PHASE 6: Infrastructure as Code & CI/CD Security", severity: "high",
    children: [
      { id: "cs6_iac_scan", label: "IaC Security Scanning", children: [
        { id: "cs6_terraform_scan", label: "Scan Terraform — checkov, tfsec, terrascan, policy as code, drift detection" },
        { id: "cs6_cf_scan", label: "Scan CloudFormation — cfn_nag, cfn-lint, custom rules, parameter validation" },
        { id: "cs6_k8s_manifest", label: "Scan K8s manifests — kube-score, kube-linter, kubesec, pod security standards" },
        { id: "cs6_iac_state", label: "Secure IaC state files — encryption, access control, remote backend, locking" },
      ]},
      { id: "cs6_pipeline", label: "CI/CD Pipeline Security", children: [
        { id: "cs6_pipeline_iam", label: "Audit pipeline IAM — least privilege, temporary credentials, OIDC federation" },
        { id: "cs6_pipeline_secrets", label: "Secure pipeline secrets — masked variables, encrypted, no logs, secret scanning" },
        { id: "cs6_pipeline_deps", label: "Audit pipeline dependencies — supply chain security, dependency pinning, SBOM" },
        { id: "cs6_pipeline_sign", label: "Implement artifact signing — Sigstore/cosign, provenance attestation, SLSA" },
        { id: "cs6_pipeline_approval", label: "Implement approval gates — manual approval for production, code review, security review" },
      ]},
      { id: "cs6_supply_chain", label: "Software Supply Chain Security", children: [
        { id: "cs6_slsa", label: "Implement SLSA framework — build provenance, integrity verification, supply chain levels" },
        { id: "cs6_sourcerepo", label: "Secure source repositories — branch protection, code review, secret scanning, signed commits" },
        { id: "cs6_dependency", label: "Audit dependencies — dependency review, known CVEs, license compliance, updates" },
      ]}
    ]
  },
  {
    id: "cs_phase7", icon: "fas fa-shield-alt", label: "PHASE 7: Cloud Security Posture & Compliance Management", severity: "high",
    children: [
      { id: "cs7_cspm", label: "CSPM Assessment & Remediation", children: [
        { id: "cs7_cspm_scan", label: "Run CSPM scans — Wiz, Prisma Cloud, Prowler, ScoutSuite, cloud-native tools" },
        { id: "cs7_misconfig", label: "Remediate misconfigurations — public storage, open security groups, unencrypted resources" },
        { id: "cs7_drift", label: "Monitor configuration drift — IaC vs. actual, auto-remediation, alerting" },
        { id: "cs7_benchmarks", label: "Check CIS benchmarks — cloud-specific CIS controls, scoring, remediation" },
      ]},
      { id: "cs7_compliance", label: "Compliance Framework Mapping", children: [
        { id: "cs7_well_architected", label: "Review Well-Architected — security pillar, operational excellence, reliability" },
        { id: "cs7_nist_csf", label: "Map to NIST CSF — Identify, Protect, Detect, Respond, Recover in cloud context" },
        { id: "cs7_csa_ccm", label: "Map to CSA CCM — Cloud Controls Matrix, domain-by-domain assessment" },
        { id: "cs7_audit_evidence", label: "Prepare audit evidence — automated evidence collection, policy docs, screenshots" },
      ]},
      { id: "cs7_governance", label: "Cloud Governance & Policy", children: [
        { id: "cs7_org_policy", label: "Implement org policies — SCPs, Azure Policy, GCP org policies, guardrails" },
        { id: "cs7_tagging", label: "Enforce tagging strategy — cost allocation, ownership, environment, compliance" },
        { id: "cs7_cost_security", label: "Review cost security — budget alerts, anomaly detection, resource limits, auto-shutdown" },
      ]}
    ]
  },
  {
    id: "cs_phase8", icon: "fas fa-chart-line", label: "PHASE 8: Cloud Monitoring, Detection & Incident Response", severity: "critical",
    children: [
      { id: "cs8_monitoring", label: "Cloud Monitoring & Alerting", children: [
        { id: "cs8_cloudtrail", label: "Verify CloudTrail — all regions, management events, data events, log file validation" },
        { id: "cs8_guardduty", label: "Review GuardDuty — enabled, findings reviewed, suppression rules, response plan" },
        { id: "cs8_config", label: "Review Config rules — compliance rules, remediation actions, resource change tracking" },
        { id: "cs8_custom_metrics", label: "Create custom metrics — application-specific, business logic, anomaly detection" },
        { id: "cs8_log_analytics", label: "Deploy log analytics — CloudWatch Logs Insights, Log Analytics, BigQuery logging" },
      ]},
      { id: "cs8_detection", label: "Cloud-Native Detection", children: [
        { id: "cs8_iam_detection", label: "Detect IAM anomalies — privilege escalation, unusual API calls, policy changes" },
        { id: "cs8_storage_detection", label: "Detect storage anomalies — unusual access patterns, data exfiltration, permission changes" },
        { id: "cs8_compute_detection", label: "Detect compute anomalies — crypto mining, unusual instances, lateral movement" },
        { id: "cs8_network_detection", label: "Detect network anomalies — unusual egress, port scanning, DNS tunneling" },
      ]},
      { id: "cs8_ir", label: "Cloud Incident Response", children: [
        { id: "cs8_ir_plan", label: "Develop cloud IR plan — account isolation, snapshot, forensic tools, evidence preservation" },
        { id: "cs8_ir_automation", label: "Automate cloud IR — Lambda/SOAR functions, auto-isolation, credential rotation" },
        { id: "cs8_ir_training", label: "Train team on cloud IR — cloud-specific scenarios, tabletop exercises, runbooks" },
        { id: "cs8_ir_forensics", label: "Prepare cloud forensics — snapshot preservation, memory capture, log collection tools" },
      ]}
    ]
  }
];
