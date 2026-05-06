window.CHECKLIST_OSINT = [
  {
    id: "osint_phase1", icon: "fas fa-clipboard-check", label: "PHASE 1: Engagement Planning & OPSEC Infrastructure", severity: "info",
    children: [
      { id: "osint1_requirements", label: "Intelligence Requirements Definition", children: [
        { id: "osint1_objectives", label: "Define intelligence requirements — PIR (Priority Intelligence Requirements), specific questions to answer" },
        { id: "osint1_scope", label: "Define scope — individuals, organizations, infrastructure, geographic focus, time period" },
        { id: "osint1_legal", label: "Ensure legal compliance — passive collection only, no unauthorized access, privacy law compliance" },
        { id: "osint1_ethics", label: "Define ethical boundaries — no social engineering, no harassment, data handling guidelines" },
        { id: "osint1_deliverables", label: "Define deliverables — intelligence report format, visualizations, raw data, briefing" },
      ]},
      { id: "osint1_opsec", label: "OPSEC Infrastructure Setup", children: [
        { id: "osint1_vpn", label: "Setup anonymous access — VPN, Tor, Tails, isolated VMs, no personal accounts" },
        { id: "osint1_identities", label: "Create cover identities — realistic personas, social media accounts, email accounts, photos" },
        { id: "osint1_browser", label: "Setup browser profiles — isolated profiles, fingerprint protection, cookie management" },
        { id: "osint1_documentation", label: "Setup documentation tools — screenshot tools, evidence preservation, chain of custody" },
      ]},
      { id: "osint1_tools", label: "Tool Preparation & Automation", children: [
        { id: "osint1_frameworks", label: "Prepare OSINT frameworks — Maltego, SpiderFoot, recon-ng, theHarvester, OSRFramework" },
        { id: "osint1_scripts", label: "Prepare custom scripts — Sherlock, h8mail, photon, gospider, subfinder" },
        { id: "osint1_apis", label: "Setup API access — Shodan, Censys, VirusTotal, HaveIBeenPwned, security APIs" },
        { id: "osint1_workspace", label: "Organize workspace — note-taking, evidence management, link analysis, timeline tools" },
      ]}
    ]
  },
  {
    id: "osint_phase2", icon: "fas fa-globe", label: "PHASE 2: Domain & Infrastructure Intelligence", severity: "high",
    children: [
      { id: "osint2_domain", label: "Domain & DNS Intelligence", children: [
        { id: "osint2_whois", label: "WHOIS analysis — registration details, ownership, contacts, historical WHOIS, privacy services" },
        { id: "osint2_subdomains", label: "Subdomain enumeration — DNS brute-force, certificate transparency, passive DNS, OSINT tools" },
        { id: "osint2_dns_history", label: "DNS history — passive DNS databases, historical records, DNS changes over time" },
        { id: "osint2_reverse_whois", label: "Reverse WHOIS — find all domains by registrant, email, phone, address" },
        { id: "osint2_domain_hijack", label: "Check domain hijack risk — expired domains, DNS takeover, misconfigured records" },
      ]},
      { id: "osint2_ip", label: "IP & Network Intelligence", children: [
        { id: "osint2_ip_range", label: "IP range analysis — ASN, netblocks, IP ownership, BGP announcements, routing" },
        { id: "osint2_shodan", label: "Shodan/Censys scan — exposed services, banners, vulnerabilities, certificates, devices" },
        { id: "osint2_geo", label: "IP geolocation — physical location, ISP, proxy/VPN detection, Tor exit node check" },
        { id: "osint2_reverse_ip", label: "Reverse IP lookup — shared hosting, virtual hosts, co-located services" },
        { id: "osint2_bgp", label: "BGP analysis — routing peers, announcements, hijacking history, RPKI validation" },
      ]},
      { id: "osint2_web", label: "Web Application Intelligence", children: [
        { id: "osint2_tech", label: "Technology fingerprinting — Wappalyzer, BuiltWith, HTTP headers, server signatures" },
        { id: "osint2_archive", label: "Web archive analysis — Wayback Machine, Archive.today, historical content, removed pages" },
        { id: "osint2_certificates", label: "Certificate transparency — crt.sh, Censys certs, new domain discovery, SAN analysis" },
        { id: "osint2_cms", label: "CMS analysis — platform identification, plugins, themes, version, known vulnerabilities" },
        { id: "osint2_js", label: "JavaScript analysis — exposed APIs, hardcoded secrets, source maps, third-party scripts" },
      ]},
      { id: "osint2_cloud", label: "Cloud Infrastructure Intelligence", children: [
        { id: "osint2_s3", label: "Cloud storage discovery — exposed S3 buckets, Azure blobs, GCS buckets, misconfigured ACLs" },
        { id: "osint2_cloud_ips", label: "Cloud IP ranges — AWS, Azure, GCP IP ranges, service discovery, misconfigurations" },
        { id: "osint2_cloud_certs", label: "Cloud certificates — cloud-hosted certificates, domain coverage, expiration" },
      ]}
    ]
  },
  {
    id: "osint_phase3", icon: "fas fa-user", label: "PHASE 3: People Intelligence & Digital Footprint", severity: "high",
    children: [
      { id: "osint3_email", label: "Email Intelligence", children: [
        { id: "osint3_email_format", label: "Email format discovery — pattern analysis, permutations, verification tools" },
        { id: "osint3_email_breach", label: "Email breach check — HaveIBeenPwned, DeHashed, breach data analysis" },
        { id: "osint3_email_header", label: "Email header analysis — sender IP, mail route, SPF/DKIM/DMARC, geolocation" },
        { id: "osint3_email_ownership", label: "Email ownership correlation — linked accounts, social media, forums, services" },
      ]},
      { id: "osint3_username", label: "Username & Identity Correlation", children: [
        { id: "osint3_username_search", label: "Username search — Namechk, Sherlock, Maigret, cross-platform account identification" },
        { id: "osint3_phone", label: "Phone intelligence — carrier lookup, social media association, reverse lookup, messaging apps" },
        { id: "osint3_real_name", label: "Real name research — public records, social networks, news articles, professional profiles" },
        { id: "osint3_pii", label: "PII aggregation — combine data points, build comprehensive profile, data relationships" },
      ]},
      { id: "osint3_image", label: "Image & Multimedia Intelligence", children: [
        { id: "osint3_reverse_image", label: "Reverse image search — Google Images, TinEye, Yandex, PimEyes, facial recognition" },
        { id: "osint3_exif", label: "EXIF data extraction — camera info, GPS coordinates, timestamps, software used" },
        { id: "osint3_geolocation", label: "Image geolocation — landmarks, street signs, weather, shadows, terrain analysis" },
        { id: "osint3_video", label: "Video analysis — frame extraction, metadata, audio transcription, background analysis" },
        { id: "osint3_deepfake", label: "Deepfake detection — artifact analysis, inconsistency detection, verification tools" },
      ]},
      { id: "osint3_social_graph", label: "Social Network Analysis", children: [
        { id: "osint3_connections", label: "Map social connections — followers, friends, connections, mutual associations" },
        { id: "osint3_influence", label: "Assess influence — engagement metrics, follower quality, reach, amplification" },
        { id: "osint3_communities", label: "Identify communities — group memberships, forum participation, professional networks" },
      ]}
    ]
  },
  {
    id: "osint_phase4", icon: "fas fa-comments", label: "PHASE 4: Social Media Intelligence (SOCMINT)", severity: "high",
    children: [
      { id: "osint4_linkedin", label: "LinkedIn & Professional Intelligence", children: [
        { id: "osint4_linkedin_profile", label: "Profile analysis — work history, education, skills, endorsements, recommendations" },
        { id: "osint4_linkedin_org", label: "Organizational intelligence — employee count, org chart, hiring trends, company updates" },
        { id: "osint4_linkedin_search", label: "Advanced search — filtering by role, location, company, technology, tenure" },
        { id: "osint4_linkedin_groups", label: "Group analysis — professional groups, discussions, interests, affiliations" },
      ]},
      { id: "osint4_twitter", label: "Twitter/X Intelligence", children: [
        { id: "osint4_twitter_profile", label: "Profile analysis — bio, location, links, joined date, follower/following ratio" },
        { id: "osint4_twitter_tweets", label: "Tweet analysis — content, timing, engagement, hashtags, mentions, retweets" },
        { id: "osint4_twitter_network", label: "Network analysis — mutual follows, interactions, influence, bot detection" },
        { id: "osint4_twitter_search", label: "Advanced search — operators, date range, location, sentiment, media" },
      ]},
      { id: "osint4_other_social", label: "Other Social Platform Intelligence", children: [
        { id: "osint4_facebook", label: "Facebook analysis — profiles, pages, groups, events, photos, posts, privacy settings" },
        { id: "osint4_instagram", label: "Instagram analysis — posts, stories, locations, tags, followers, engagement, geotags" },
        { id: "osint4_github", label: "GitHub analysis — repositories, contributions, code, commits, organizations, GPG keys" },
        { id: "osint4_discord", label: "Discord analysis — server membership, username history, avatar, ID lookup" },
        { id: "osint4_telegram", label: "Telegram analysis — username lookup, group membership, channel analysis, phone discovery" },
      ]},
      { id: "osint4_forums", label: "Forum & Community Intelligence", children: [
        { id: "osint4_professional", label: "Professional forums — Stack Overflow, Reddit, professional communities, Q&A sites" },
        { id: "osint4_hacking", label: "Underground forums — hacking forums, breach marketplaces, leak sites, dark web" },
        { id: "osint4_niche", label: "Niche communities — hobby forums, special interest groups, local communities" },
        { id: "osint4_sentiment", label: "Sentiment analysis — public perception, employee dissatisfaction, brand mentions" },
      ]}
    ]
  },
  {
    id: "osint_phase5", icon: "fas fa-database", label: "PHASE 5: Data Breach, Document & Dark Web Intelligence", severity: "critical",
    children: [
      { id: "osint5_breach", label: "Data Breach Intelligence", children: [
        { id: "osint5_haveibeenpwned", label: "Check HaveIBeenPwned — exposed emails, passwords, breach details, paste entries" },
        { id: "osint5_dehashed", label: "Search DeHashed — breach data, credentials, PII, addresses, phone numbers" },
        { id: "osint5_pastes", label: "Monitor paste sites — Pastebin, Ghostbin, JustPaste, code repositories, expired pastes" },
        { id: "osint5_breach_forums", label: "Monitor breach forums — leaked credentials, database dumps, ransomware leak sites" },
      ]},
      { id: "osint5_docs", label: "Document & Public Records Intelligence", children: [
        { id: "osint5_public_records", label: "Search public records — property, court, business registration, licenses, permits" },
        { id: "osint5_regulatory", label: "Review regulatory filings — SEC EDGAR, patents, trademarks, lobbying disclosures" },
        { id: "osint5_metadata", label: "Extract metadata — documents, images, PDFs, Office files, exposed via web" },
        { id: "osint5_google_dorks", label: "Advanced search operators — filetype, site, inurl, intitle, cache, related, dork lists" },
        { id: "osint5_job_postings", label: "Analyze job postings — technology stack, infrastructure, security tools, team structure" },
      ]},
      { id: "osint5_geoint", label: "Geospatial Intelligence (GEOINT)", children: [
        { id: "osint5_satellite", label: "Satellite imagery — Google Earth, Sentinel Hub, Maxar, historical imagery" },
        { id: "osint5_mapping", label: "Mapping tools — OpenStreetMap, Google Maps, Bing Maps, Mapillary, street view" },
        { id: "osint5_flight_ship", label: "Flight/ship tracking — FlightRadar24, MarineTraffic, ADS-B, AIS data" },
        { id: "osint5_location_infer", label: "Location inference — combine data points, triangulate positions, movement patterns" },
      ]},
      { id: "osint5_darkweb", label: "Dark Web Intelligence", children: [
        { id: "osint5_tor", label: "Tor network exploration — .onion sites, hidden services, dark web search engines" },
        { id: "osint5_marketplace", label: "Monitor dark marketplaces — product listings, vendor profiles, pricing, reviews" },
        { id: "osint5_leak_sites", label: "Monitor leak sites — ransomware group leak sites, data dumps, extortion demands" },
        { id: "osint5_credential", label: "Dark web credential check — exposed credentials, database dumps, account selling" },
      ]}
    ]
  },
  {
    id: "osint_phase6", icon: "fas fa-code", label: "PHASE 6: Code Repository & Technical Intelligence", severity: "high",
    children: [
      { id: "osint6_github", label: "Code Repository Intelligence", children: [
        { id: "osint6_repo_scan", label: "Scan repositories — exposed secrets, API keys, credentials, tokens, certificates" },
        { id: "osint6_commit_history", label: "Analyze commit history — deleted secrets, code changes, contributor patterns" },
        { id: "osint6_org_intel", label: "Organizational intelligence — repositories, teams, projects, technology stack" },
        { id: "osint6_dependency", label: "Dependency analysis — libraries, frameworks, known vulnerabilities, outdated packages" },
      ]},
      { id: "osint6_api", label: "API & Endpoint Intelligence", children: [
        { id: "osint6_api_enum", label: "Enumerate API endpoints — Swagger/OpenAPI docs, Postman collections, mobile app APIs" },
        { id: "osint6_api_key", label: "Discover API keys — GitHub, JavaScript files, mobile apps, documentation" },
        { id: "osint6_api_docs", label: "Analyze API documentation — endpoints, parameters, authentication, rate limits" },
      ]},
      { id: "osint6_tech_stack", label: "Technology Stack Intelligence", children: [
        { id: "osint6_wappalyzer", label: "Technology identification — web technologies, frameworks, servers, analytics" },
        { id: "osint6_dns_records", label: "DNS record analysis — MX, TXT, SPF, DKIM, DMARC, SRV, CAA records" },
        { id: "osint6_email_sec", label: "Email security analysis — SPF pass/fail, DKIM signing, DMARC policy, email provider" },
        { id: "osint6_cdn", label: "CDN/WAF identification — Cloudflare, Akamai, Fastly, AWS CloudFront, configuration" },
      ]}
    ]
  },
  {
    id: "osint_phase7", icon: "fas fa-brain", label: "PHASE 7: Analysis, Correlation & Intelligence Production", severity: "critical",
    children: [
      { id: "osint7_correlation", label: "Data Correlation & Analysis", children: [
        { id: "osint7_link_analysis", label: "Perform link analysis — Maltego graphs, relationship mapping, entity resolution" },
        { id: "osint7_timeline", label: "Build timelines — event sequencing, activity patterns, behavior analysis" },
        { id: "osint7_pattern", label: "Identify patterns — behavioral patterns, communication patterns, operational patterns" },
        { id: "osint7_gap", label: "Identify intelligence gaps — missing information, unverifiable data, areas needing more collection" },
      ]},
      { id: "osint7_verify", label: "Intelligence Verification", children: [
        { id: "osint7_source", label: "Source validation — assess source reliability, credibility, potential bias" },
        { id: "osint7_cross_ref", label: "Cross-referencing — verify findings across multiple sources, triangulation" },
        { id: "osint7_confidence", label: "Assess confidence levels — high/medium/low confidence, supporting evidence" },
        { id: "osint7_debunk", label: "Identify misinformation — fake profiles, fabricated data, social engineering attempts" },
      ]},
      { id: "osint7_intelligence", label: "Intelligence Production", children: [
        { id: "osint7_assessment", label: "Produce intelligence assessment — analysis, conclusions, confidence levels, alternative views" },
        { id: "osint7_indicators", label: "Develop indicators — warning indicators, predictive analysis, trend analysis" },
        { id: "osint7_actionable", label: "Make intelligence actionable — recommendations, next steps, risk implications" },
      ]}
    ]
  },
  {
    id: "osint_phase8", icon: "fas fa-file-alt", label: "PHASE 8: Reporting, Dissemination & Continuous Monitoring", severity: "info",
    children: [
      { id: "osint8_report", label: "Intelligence Reporting", children: [
        { id: "osint8_exec_summary", label: "Write executive summary — key findings, risk assessment, recommended actions" },
        { id: "osint8_detailed", label: "Write detailed report — methodology, findings, evidence, analysis, sources" },
        { id: "osint8_visualize", label: "Create visualizations — network graphs, timelines, maps, relationship diagrams" },
        { id: "osint8_appendices", label: "Prepare appendices — raw data, tool output, screenshots, technical details" },
      ]},
      { id: "osint8_remediate", label: "Remediation Guidance", children: [
        { id: "osint8_exposed_data", label: "Document exposed data — what was found, where, impact level, remediation steps" },
        { id: "osint8_opsec", label: "Provide OPSEC guidance — reduce digital footprint, improve privacy, remove exposed data" },
        { id: "osint8_monitoring", label: "Setup ongoing monitoring — alerts for new exposures, periodic checks, watchlists" },
      ]},
      { id: "osint8_storage", label: "Intelligence Storage & Management", children: [
        { id: "osint8_repository", label: "Store intelligence securely — encrypted storage, access control, retention policy" },
        { id: "osint8_knowledge_base", label: "Build knowledge base — reusable findings, patterns, techniques, source database" },
        { id: "osint8_lessons", label: "Document lessons learned — methodology improvements, new techniques, tool evaluation" },
      ]}
    ]
  }
];
