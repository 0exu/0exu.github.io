window.CHECKLIST_BUGBOUNTY = [
  {
    id: "bb_phase1", icon: "fas fa-search", label: "PHASE 1: Asset Discovery & Horizontal Reconnaissance", severity: "info",
    children: [
      {
        id: "bb1_scope", label: "Scope Analysis & Program Research", children: [
          { id: "bb_scope_read", label: "Read Program Policy — In-scope, out-of-scope, rewards, rules" },
          { id: "bb_wildcard", label: "Wildcard Domain Analysis — *.target.com subdomain scope" },
          { id: "bb_acquisitions", label: "Recent Acquisitions — Newly acquired companies with weaker security" },
          { id: "bb_safe_harbor", label: "Safe Harbor & Legal — Testing boundaries and legal protections" },
          { id: "bb_dup_check", label: "Public Disclosed Reports — HackerOne, Bugcrowd past reports" },
          { id: "bb_priority_assets", label: "High-Value Assets — Production, payment systems, admin panels, APIs" },
        ]
      },
      {
        id: "bb1_asset_disc", label: "Asset Discovery & Enumeration", children: [
          { id: "bb_asn_lookup", label: "ASN Discovery — bgp.he.net, amass intel for network ranges" },
          { id: "bb_reverse_whois", label: "Reverse WHOIS — Organization mapping, shared registrant" },
          { id: "bb_cidr_ranges", label: "CIDR Range Identification — IP ranges owned by organization" },
          { id: "bb_subsidiary", label: "Subsidiary Research — Crunchbase, Wikipedia for owned companies" },
          { id: "bb_favicon_hash", label: "Favicon Hash Matching — Shodan favicon.ico hash for related infra" },
          { id: "bb_censys_certs", label: "Censys Certificate Search — SANs, issuers, relationships" },
          { id: "bb_ip_history", label: "IP History & DNS Changes — SecurityTrails, DNSDB" },
          { id: "bb_cloud_assets", label: "Cloud Asset Discovery — AWS, Azure, GCP resources" },
          { id: "bb_s3_buckets", label: "S3 Bucket Discovery — Enumeration, naming patterns, public access" },
          { id: "bb_github_org", label: "GitHub Organization — Repos, commits, issues, members, secrets" },
        ]
      },
      {
        id: "bb1_subdomain", label: "Deep Subdomain Enumeration", children: [
          { id: "bb_sub_aggregators", label: "Passive Aggregators — Subfinder, Amass, AssetFinder, Chaos" },
          { id: "bb_sub_brute", label: "Active Brute-forcing — MassDNS, Puredns, ShuffleDNS" },
          { id: "bb_sub_permutations", label: "Permutation Fuzzing — AlterDNS, Gotator (dev, staging, api)" },
          { id: "bb_sub_js", label: "JavaScript Source — JS files revealing hidden subdomains" },
          { id: "bb_sub_archive", label: "Archive-Based — Wayback Machine, Common Crawl" },
          { id: "bb_sub_cert_trans", label: "Certificate Transparency — crt.sh, Censys, CT logs" },
          { id: "bb_sub_virustotal", label: "VirusTotal Passive DNS — Historical DNS records" },
          { id: "bb_sub_monitoring", label: "Continuous Monitoring — Alerts for new subdomains (Sublert, Notify)" },
          { id: "bb_sub_alive", label: "Alive Host Filtering — httpx, httprobe for live web services" },
        ]
      },
      {
        id: "bb1_port_service", label: "Port & Service Discovery", children: [
          { id: "bb_port_scan", label: "Full Port Scanning — RustScan, Masscan for all 65535 ports" },
          { id: "bb_service_detect", label: "Service Version — Nmap -sV for service identification" },
          { id: "bb_uncommon_ports", label: "Uncommon Ports — Non-standard ports running web services" },
          { id: "bb_panel_disc", label: "Admin Panel Discovery — :8080, :8443, :9090, :3000" },
          { id: "bb_db_exposed", label: "Exposed Databases — MongoDB, Redis, Elasticsearch, Memcached" },
          { id: "bb_api_disc", label: "API Discovery — Swagger, GraphQL, REST documentation" },
        ]
      }
    ]
  },
  {
    id: "bb_phase2", icon: "fas fa-folder-open", label: "PHASE 2: Content Analysis & Deep Discovery", severity: "low",
    children: [
      {
        id: "bb2_dir_fuzz", label: "Directory & File Discovery", children: [
          { id: "bb_dir_common", label: "Common Directory Fuzzing — ffuf, feroxbuster with SecLists" },
          { id: "bb_dir_recursive", label: "Recursive Fuzzing — Deeper path exploration" },
          { id: "bb_dir_ext", label: "Extension Fuzzing — .bak, .old, .zip, .sql, .config, .env, .swp" },
          { id: "bb_dir_backup", label: "Backup Files — .git/, .svn/, .DS_Store, wp-config.php.bak" },
          { id: "bb_dir_config", label: "Config Exposure — web.config, .htaccess, settings.py" },
          { id: "bb_dir_admin", label: "Admin Panels — /admin, /dashboard, /manager, /console" },
          { id: "bb_dir_api", label: "API Paths — /api/, /graphql/, /v1/, /v2/, /internal/" },
          { id: "bb_dir_debug", label: "Debug/Test Endpoints — /debug, /test, /dev, /staging" },
          { id: "bb_dir_cloud", label: "Cloud Storage — S3, Azure Blobs, GCP buckets" },
        ]
      },
      {
        id: "bb2_param", label: "Parameter Discovery & Analysis", children: [
          { id: "bb_param_extract", label: "Parameter Extraction — Uro, ParamSpider for URL parameters" },
          { id: "bb_param_arjun", label: "Hidden Parameters — Arjun, x8 for unknown parameter discovery" },
          { id: "bb_param_js", label: "JS Parameter Extraction — API parameters from JavaScript" },
          { id: "bb_param_wayback", label: "Wayback Parameters — Historical URLs with parameters" },
          { id: "bb_param_dangerous", label: "Dangerous Parameters — callback, redirect, url, file, path, debug" },
          { id: "bb_param_json", label: "JSON Body Parameters — POST/PUT body parameter analysis" },
          { id: "bb_param_header", label: "Header Parameters — Custom headers, X- headers" },
        ]
      },
      {
        id: "bb2_js_analysis", label: "JavaScript Deep Analysis", children: [
          { id: "bb_js_endpoints", label: "Endpoint Extraction — LinkFinder, JSParser for hidden APIs" },
          { id: "bb_js_secrets", label: "Secret Discovery — API keys, tokens, AWS keys in JS" },
          { id: "bb_js_internal", label: "Internal URLs — Staging URLs, internal API paths in JS" },
          { id: "bb_js_deobfuscate", label: "Deobfuscation — Unminify, decode base64, eval unpacking" },
          { id: "bb_js_source_map", label: "Source Map — .map files revealing original source code" },
          { id: "bb_js_framework", label: "Framework ID — React, Angular, Vue, jQuery versions" },
          { id: "bb_js_deps", label: "Dependencies — Vulnerable npm packages in bundled JS" },
          { id: "bb_js_dom_sinks", label: "DOM Sinks — Dangerous JavaScript sinks for DOM XSS" },
        ]
      },
      {
        id: "bb2_tech_stack", label: "Technology Stack Analysis", children: [
          { id: "bb_tech_wappalyzer", label: "Wappalyzer/BuiltWith — Technologies, frameworks, servers" },
          { id: "bb_tech_cve", label: "CVE Lookup — Known vulnerabilities in identified tech" },
          { id: "bb_tech_cms", label: "CMS Identification — WordPress, Drupal, Joomla version and plugins" },
          { id: "bb_tech_framework", label: "Framework Analysis — Django, Rails, Laravel, Express versions" },
          { id: "bb_tech_server", label: "Web Server — Nginx, Apache, IIS version and configuration" },
          { id: "bb_tech_third_party", label: "Third-Party Services — Analytics, CDN, email, payment gateway" },
        ]
      }
    ]
  },
  {
    id: "bb_phase3", icon: "fas fa-skull-crossbones", label: "PHASE 3: High-Impact Vulnerability Hunting", severity: "critical",
    children: [
      {
        id: "bb3_rce", label: "Remote Code Execution (RCE)", children: [
          { id: "bb_rce_upload", label: "Upload-based RCE — Webshell via file upload, filter bypass" },
          { id: "bb_rce_cmd_inject", label: "Command Injection — OS command injection in parameters, headers" },
          { id: "bb_rce_ssti", label: "Template Injection — SSTI to RCE (Jinja2, Twig, Freemarker)" },
          { id: "bb_rce_deserialize", label: "Deserialization — Java, PHP, Python, .NET to RCE" },
          { id: "bb_rce_sqli", label: "SQLi to RCE — xp_cmdshell, INTO OUTFILE, UDF" },
          { id: "bb_rce_lfi", label: "LFI to RCE — Log poisoning, /proc/self/environ" },
        ]
      },
      {
        id: "bb3_ssrf", label: "Server-Side Request Forgery (SSRF)", children: [
          { id: "bb_ssrf_cloud", label: "Cloud Metadata — AWS, GCP, Azure metadata endpoint" },
          { id: "bb_ssrf_internal", label: "Internal Network — Internal service access, port scanning" },
          { id: "bb_ssrf_blind", label: "Blind SSRF — Out-of-band via DNS/HTTP callbacks" },
          { id: "bb_ssrf_bypass", label: "Filter Bypass — Encoding, DNS rebinding, redirect-based" },
          { id: "bb_ssrf_protocol", label: "Protocol Abuse — file://, gopher://, dict://" },
          { id: "bb_ssrf_webhook", label: "Webhook SSRF — User-controlled callback URLs" },
        ]
      },
      {
        id: "bb3_idor", label: "Insecure Direct Object Reference (IDOR)", children: [
          { id: "bb_idor_numeric", label: "Numeric ID — Sequential ID access to other users' data" },
          { id: "bb_idor_uuid", label: "UUID/GUID — Predictable or leaked identifiers" },
          { id: "bb_idor_api", label: "API Endpoint IDOR — /api/users/{id}, /api/orders/{id}" },
          { id: "bb_idor_hidden", label: "Hidden Parameter IDOR — User-controllable IDs in hidden fields" },
          { id: "bb_idor_export", label: "Export/Download IDOR — File download, CSV export for others' data" },
        ]
      },
      {
        id: "bb3_auth", label: "Authentication & Authorization Bypasses", children: [
          { id: "bb_auth_bypass", label: "Authentication Bypass — SQLi, JWT, OAuth, SSO bypass" },
          { id: "bb_auth_2fa", label: "2FA/MFA Bypass — Code reuse, response manipulation, backup codes" },
          { id: "bb_auth_privesc", label: "Privilege Escalation — Vertical and horizontal access bypass" },
          { id: "bb_auth_jwt", label: "JWT Attacks — alg:none, HS256 confusion, weak secrets, kid injection" },
          { id: "bb_auth_oauth", label: "OAuth — redirect_uri, state param, token leakage" },
          { id: "bb_auth_session", label: "Session Fixation — Session not regenerated on login" },
        ]
      },
      {
        id: "bb3_sqli_xss", label: "SQL Injection & XSS Discovery", children: [
          { id: "bb_sqli_all", label: "SQLi — In-band, blind, time-based, out-of-band on all inputs" },
          { id: "bb_sqli_headers", label: "Header SQLi — User-Agent, Referer, X-Forwarded-For" },
          { id: "bb_sqli_json", label: "JSON Body SQLi — SQL injection in JSON request bodies" },
          { id: "bb_xss_reflected", label: "Reflected XSS — URL parameters, search fields, form inputs" },
          { id: "bb_xss_stored", label: "Stored XSS — Comments, profiles, uploads, user input" },
          { id: "bb_xss_dom", label: "DOM XSS — Client-side JavaScript sinks analysis" },
          { id: "bb_xss_blind", label: "Blind XSS — Admin panels, logs, error reports (XSS Hunter)" },
        ]
      }
    ]
  },
  {
    id: "bb_phase4", icon: "fas fa-rocket", label: "PHASE 4: Advanced & Modern Attack Vectors", severity: "high",
    children: [
      {
        id: "bb4_http_smuggle", label: "HTTP Request Smuggling", children: [
          { id: "bb_smuggle_cl_te", label: "CL.TE Smuggling — Content-Length vs Transfer-Encoding" },
          { id: "bb_smuggle_te_cl", label: "TE.CL Smuggling — Transfer-Encoding vs Content-Length" },
          { id: "bb_smuggle_te_te", label: "TE.TE Smuggling — Obfuscating Transfer-Encoding header" },
          { id: "bb_smuggle_h2", label: "HTTP/2 Smuggling — H2.CL, H2.TE, CL.0 techniques" },
          { id: "bb_smuggle_detect", label: "Detection — Response timing differences, error patterns" },
        ]
      },
      {
        id: "bb4_cache", label: "Web Cache Attacks", children: [
          { id: "bb_cache_poison", label: "Cache Poisoning — Unkeyed headers/parameters" },
          { id: "bb_cache_deception", label: "Cache Deception — Cache sensitive pages under attacker URLs" },
          { id: "bb_cache_key", label: "Cache Key Analysis — What defines a unique cache entry" },
          { id: "bb_cache_bypass", label: "Cache Bypass — Techniques to bypass cached responses" },
        ]
      },
      {
        id: "bb4_graphql", label: "GraphQL Security", children: [
          { id: "bb_graphql_intro", label: "Introspection — Schema via __schema, __type queries" },
          { id: "bb_graphql_auth", label: "Authorization Bypass — Access without proper permissions" },
          { id: "bb_graphql_dos", label: "DoS — Deep queries, alias attacks, batch attacks" },
          { id: "bb_graphql_inject", label: "Injection — SQLi, XSS through GraphQL resolvers" },
          { id: "bb_graphql_batch", label: "Batch Query — Multiple queries in single request for bypass" },
        ]
      },
      {
        id: "bb4_modern", label: "Modern Attack Techniques", children: [
          { id: "bb_proto_pollution", label: "Prototype Pollution — Client/Server-side for code execution" },
          { id: "bb_host_header", label: "Host Header Injection — Password reset poisoning, SSRF" },
          { id: "bb_dns_rebind", label: "DNS Rebinding — SOP bypass via DNS manipulation" },
          { id: "bb_race_condition", label: "Race Conditions — Turbo Intrutor for double spend, limit bypass" },
          { id: "bb_clickjacking", label: "Clickjacking — UI redressing with iframes" },
          { id: "bb_csrf_advanced", label: "Advanced CSRF — JSON body, custom header, SameSite bypass" },
          { id: "bb_open_redirect", label: "Open Redirect — Unvalidated redirect for phishing" },
          { id: "bb_dom_clobber", label: "DOM Clobbering — HTML attributes overriding JS variables" },
        ]
      }
    ]
  },
  {
    id: "bb_phase5", icon: "fas fa-flag", label: "PHASE 5: Subdomain & Infrastructure Takeovers", severity: "high",
    children: [
      {
        id: "bb5_subdomain_to", label: "Subdomain Takeovers", children: [
          { id: "bb_to_cname", label: "CNAME Takeover — Dangling CNAME to unclaimed service" },
          { id: "bb_to_ns", label: "Nameserver Takeover — Custom NS pointing to expired domains" },
          { id: "bb_to_aws", label: "AWS S3/CloudFront — S3 bucket, CloudFront takeover" },
          { id: "bb_to_azure", label: "Azure — Blob, Traffic Manager takeover" },
          { id: "bb_to_github", label: "GitHub Pages — Unclaimed GitHub Pages subdomain" },
          { id: "bb_to_heroku", label: "Heroku/Netlify/Vercel — Unclaimed platform apps" },
          { id: "bb_to_automate", label: "Automated Detection — Subjack, Can-I-Take-Over-XYZ" },
          { id: "bb_to_verify", label: "Verification — Claim resource and confirm control" },
        ]
      },
      {
        id: "bb5_cloud_misconfig", label: "Cloud Misconfiguration", children: [
          { id: "bb_cloud_s3_public", label: "Public S3 Buckets — Listable and readable" },
          { id: "bb_cloud_s3_write", label: "Writable S3 Buckets — Public write access" },
          { id: "bb_cloud_s3_acl", label: "S3 ACL — Overly permissive bucket policies" },
          { id: "bb_cloud_iam", label: "IAM Misconfiguration — Overly permissive roles" },
          { id: "bb_cloud_lambda_env", label: "Lambda Environment Variables — Secrets in env vars" },
          { id: "bb_cloud_metadata", label: "Cloud Metadata — SSRF to cloud metadata endpoints" },
        ]
      }
    ]
  },
  {
    id: "bb_phase6", icon: "fas fa-clipboard-list", label: "PHASE 6: Reporting & Triage Optimization", severity: "info",
    children: [
      {
        id: "bb6_report", label: "Bug Report Writing", children: [
          { id: "bb_report_title", label: "Clear Title — Vulnerability type and location" },
          { id: "bb_report_summary", label: "Executive Summary — Overview and impact" },
          { id: "bb_report_steps", label: "Reproduction Steps — Numbered steps with requests/responses" },
          { id: "bb_report_impact", label: "Impact Assessment — Business impact, data exposure" },
          { id: "bb_report_poc", label: "Proof of Concept — Screenshots, videos, curl commands" },
          { id: "bb_report_cvss", label: "CVSS Scoring — Score with justification" },
          { id: "bb_report_remediation", label: "Remediation — Specific fix recommendations" },
          { id: "bb_report_references", label: "References — CWE, OWASP, similar disclosed reports" },
        ]
      },
      {
        id: "bb6_triage", label: "Triage & Communication", children: [
          { id: "bb_triage_response", label: "Respond Quickly — Answer triage questions promptly" },
          { id: "bb_triage_professional", label: "Professional Communication — Respectful and clear" },
          { id: "bb_triage_dup", label: "Duplicate Handling — Accept gracefully, learn from original" },
          { id: "bb_triage_nfa", label: "N/A Handling — Understand rejection, improve future reports" },
          { id: "bb_triage_public", label: "Public Disclosure — Share knowledge after resolution" },
        ]
      }
    ]
  }
];
