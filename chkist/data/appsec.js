window.CHECKLIST_APPSEC = [
  {
    id: "appsec_phase1", icon: "fas fa-drafting-compass", label: "PHASE 1: Threat Modeling & Risk Assessment", severity: "critical",
    children: [
      { id: "appsec1_modeling", label: "Threat Modeling", children: [
        { id: "appsec1_dataflow", label: "Create data flow diagrams — trust boundaries, data movement, entry/exit points" },
        { id: "appsec1_stride", label: "Apply STRIDE analysis — Spoofing, Tampering, Repudiation, Info Disclosure, DoS, Elevation" },
        { id: "appsec1_assets", label: "Identify high-value assets — PII, credentials, financial data, intellectual property" },
        { id: "appsec1_attack_surface", label: "Map attack surface — external APIs, internal services, third-party integrations" },
        { id: "appsec1_dread", label: "Score threats with DREAD — Damage, Reproducibility, Exploitability, Affected users, Discoverability" },
        { id: "appsec1_mitigation", label: "Define mitigations — accepted, mitigated, or transferred risks" },
        { id: "appsec1_assumptions", label: "Document security assumptions — dependencies, environment, user behavior" },
      ]},
      { id: "appsec1_risk", label: "Risk Assessment", children: [
        { id: "appsec1_risk_matrix", label: "Build risk matrix — likelihood vs. impact for each threat" },
        { id: "appsec1_compliance", label: "Identify compliance requirements — OWASP Top 10, PCI DSS, HIPAA, GDPR" },
        { id: "appsec1_third_party", label: "Assess third-party risk — dependencies, SaaS, open source" },
      ]}
    ]
  },
  {
    id: "appsec_phase2", icon: "fas fa-laptop-code", label: "PHASE 2: Secure Code Review & SAST", severity: "critical",
    children: [
      { id: "appsec2_review", label: "Manual Code Review", children: [
        { id: "appsec2_input_validation", label: "Review all input validation — sanitization, allowlisting, type checking" },
        { id: "appsec2_output_encoding", label: "Review output encoding — context-aware encoding for HTML, JS, CSS, URL" },
        { id: "appsec2_auth_code", label: "Review authentication code — password hashing, session management, MFA" },
        { id: "appsec2_crypto_code", label: "Review cryptographic usage — algorithm selection, key management, IV/nonce" },
        { id: "appsec2_error_handling", label: "Review error handling — no stack traces, no sensitive data in errors" },
        { id: "appsec2_logging", label: "Review logging — no sensitive data logged, proper log levels, structured logging" },
        { id: "appsec2_hardcoded", label: "Search for hardcoded secrets — API keys, passwords, connection strings" },
        { id: "appsec2_sql_queries", label: "Review all SQL queries — parameterized queries, ORM usage, stored procedures" },
        { id: "appsec2_deserialization", label: "Review deserialization — safe deserializers, type validation, input filtering" },
        { id: "appsec2_file_ops", label: "Review file operations — path traversal, symlink following, MIME validation" },
        { id: "appsec2_memory", label: "Review memory safety (C/C++) — buffer overflows, use-after-free, format strings" },
      ]},
      { id: "appsec2_sast", label: "SAST Configuration & Analysis", children: [
        { id: "appsec2_sast_tools", label: "Configure SAST tools — SonarQube, Semgrep, CodeQL, Checkmarx" },
        { id: "appsec2_sast_rules", label: "Define custom rules — application-specific security patterns" },
        { id: "appsec2_sast_fp", label: "Tune false positive rate — mark known false positives, suppress noise" },
        { id: "appsec2_sast_gates", label: "Setup quality gates — blocking thresholds for critical/high findings" },
        { id: "appsec2_sast_integration", label: "Integrate SAST in CI/CD — pre-commit hooks, PR checks, scheduled scans" },
      ]}
    ]
  },
  {
    id: "appsec_phase3", icon: "fas fa-robot", label: "PHASE 3: DAST, IAST & Dynamic Testing", severity: "critical",
    children: [
      { id: "appsec3_dast", label: "DAST Configuration & Analysis", children: [
        { id: "appsec3_dast_tools", label: "Configure DAST tools — ZAP, Burp Enterprise, Acunetix, Nikto" },
        { id: "appsec3_dast_auth", label: "Configure authenticated scanning — login sequences, session handling" },
        { id: "appsec3_dast_scope", label: "Define scan scope — in-scope URLs, excluded paths, rate limiting" },
        { id: "appsec3_dast_api", label: "Configure API scanning — OpenAPI/Swagger import, GraphQL introspection" },
        { id: "appsec3_dast_scheduled", label: "Schedule regular DAST scans — nightly, pre-release, on-demand" },
      ]},
      { id: "appsec3_iast", label: "IAST Integration", children: [
        { id: "appsec3_iast_deploy", label: "Deploy IAST sensors — Contrast, Seeker, runtime instrumentation" },
        { id: "appsec3_iast_coverage", label: "Monitor test coverage — code paths exercised during functional tests" },
        { id: "appsec3_iast_results", label: "Analyze IAST results — precise vulnerability location, data flow" },
      ]},
      { id: "appsec3_fuzz", label: "Fuzzing", children: [
        { id: "appsec3_fuzz_api", label: "API fuzzing — AFL++, Boofuzz for HTTP/gRPC endpoints" },
        { id: "appsec3_fuzz_file", label: "File format fuzzing — document processing, image parsing" },
        { id: "appsec3_fuzz_protocol", label: "Protocol fuzzing — custom binary/text protocols" },
      ]}
    ]
  },
  {
    id: "appsec_phase4", icon: "fas fa-shield-alt", label: "PHASE 4: Secure Development Practices", severity: "high",
    children: [
      { id: "appsec4_sdlc", label: "Secure SDLC Integration", children: [
        { id: "appsec4_secure_requirements", label: "Define security requirements — functional and non-functional" },
        { id: "appsec4_design_review", label: "Security design reviews — architecture review board, threat modeling" },
        { id: "appsec4_secure_coding", label: "Secure coding standards — language-specific guidelines, best practices" },
        { id: "appsec4_code_review", label: "Security-focused code review — peer review, checklist-driven" },
        { id: "appsec4_testing", label: "Security testing — unit tests for security controls, integration tests" },
        { id: "appsec4_release", label: "Release security checklist — final scan, sign-off, SBOM generation" },
      ]},
      { id: "appsec4_deps", label: "Dependency & Supply Chain Security", children: [
        { id: "appsec4_sca", label: "Configure SCA tools — Dependabot, Snyk, OWASP Dependency-Check" },
        { id: "appsec4_sbom", label: "Generate SBOM — CycloneDX, SPDX for all releases" },
        { id: "appsec4_license", label: "Review license compliance — incompatible licenses, copyleft requirements" },
        { id: "appsec4_pin", label: "Pin dependencies — exact versions, lockfiles, hash verification" },
        { id: "appsec4_monitor", label: "Monitor vulnerability feeds — NVD, vendor advisories, mailing lists" },
      ]},
      { id: "appsec4_secrets", label: "Secrets Management", children: [
        { id: "appsec4_secrets_scan", label: "Scan for secrets — TruffleHog, Gitleaks, detect-secrets in repos" },
        { id: "appsec4_secrets_vault", label: "Implement secrets vault — HashiCorp Vault, AWS Secrets Manager" },
        { id: "appsec4_secrets_rotation", label: "Define rotation policy — automated rotation, emergency revocation" },
        { id: "appsec4_secrets_pre_commit", label: "Setup pre-commit hooks — block commits containing secrets" },
      ]}
    ]
  },
  {
    id: "appsec_phase5", icon: "fas fa-graduation-cap", label: "PHASE 5: Security Culture & Metrics", severity: "info",
    children: [
      { id: "appsec5_training", label: "Developer Training", children: [
        { id: "appsec5_training_curriculum", label: "Develop security training — OWASP Top 10, secure coding workshops" },
        { id: "appsec5_ctf", label: "Run CTF challenges — application-specific vulnerable labs" },
        { id: "appsec5_champions", label: "Establish security champions — one per team, trained in AppSec" },
        { id: "appsec5_playbooks", label: "Create remediation playbooks — step-by-step fix guides per vulnerability type" },
      ]},
      { id: "appsec5_metrics", label: "Metrics & Reporting", children: [
        { id: "appsec5_kpi", label: "Define KPIs — time to fix, scan coverage, vulnerability density" },
        { id: "appsec5_dashboard", label: "Build security dashboard — real-time metrics, trend analysis" },
        { id: "appsec5_report", label: "Regular reporting — monthly security posture, quarterly risk review" },
        { id: "appsec5_retro", label: "Post-incident retrospectives — lessons learned, process improvements" },
      ]}
    ]
  },
  {
    id: "appsec_phase6", icon: "fas fa-bug", label: "PHASE 6: Vulnerability Management & Bug Bounty", severity: "high",
    children: [
      { id: "appsec6_vuln_mgmt", label: "Vulnerability Management", children: [
        { id: "appsec6_triage", label: "Vulnerability triage — severity scoring, impact assessment, prioritization" },
        { id: "appsec6_sla", label: "Define SLA — critical 7 days, high 30 days, medium 90 days" },
        { id: "appsec6_tracking", label: "Track vulnerabilities — Jira, GitHub Issues, dedicated tracking system" },
        { id: "appsec6_verification", label: "Verify fixes — regression testing, re-scan after remediation" },
      ]},
      { id: "appsec6_bugbounty", label: "Bug Bounty Program", children: [
        { id: "appsec6_scope_bb", label: "Define bug bounty scope — in-scope targets, rules, reward structure" },
        { id: "appsec6_platform", label: "Select platform — HackerOne, Bugcrowd, or self-managed" },
        { id: "appsec6_triage_bb", label: "Setup triage process — validate, deduplicate, prioritize submissions" },
        { id: "appsec6_rewards", label: "Define reward structure — bounty amounts, severity-based payouts" },
      ]}
    ]
  }
];
