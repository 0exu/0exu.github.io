window.CHECKLIST_OSINT = [
  {
    id: "osint_phase1", icon: "fas fa-search", label: "PHASE 1: Target Profiling & Intelligence Gathering", severity: "info",
    children: [
      { id: "osint1_scope", label: "Engagement Planning", children: [
        { id: "osint1_objectives", label: "Define intelligence requirements — what information is needed" },
        { id: "osint1_legal", label: "Ensure legal compliance — passive collection only, no unauthorized access" },
        { id: "osint1_scope_targets", label: "Define targets — individuals, organizations, infrastructure" },
        { id: "osint1_opsec", label: "Establish OPSEC — anonymous infrastructure, attribution prevention" },
      ]},
      { id: "osint1_infra", label: "Collection Infrastructure", children: [
        { id: "osint1_vpn", label: "Setup anonymous access — VPN, Tor, VMs, throwaway accounts" },
        { id: "osint1_tools", label: "Prepare OSINT tools — Maltego, SpiderFoot, recon-ng, theHarvester" },
        { id: "osint1_documentation", label: "Setup documentation — evidence preservation, screenshot tools" },
      ]}
    ]
  },
  {
    id: "osint_phase2", icon: "fas fa-globe", label: "PHASE 2: Infrastructure & Technical Reconnaissance", severity: "high",
    children: [
      { id: "osint2_dns", label: "DNS Intelligence", children: [
        { id: "osint2_whois", label: "WHOIS analysis — registration, ownership, contacts, history" },
        { id: "osint2_subdomains", label: "Subdomain enumeration — DNS, brute-force, certificate transparency" },
        { id: "osint2_dns_history", label: "DNS history — passive DNS, historical records, changes" },
        { id: "osint2_reverse_dns", label: "Reverse DNS — IP to domain, shared hosting, virtual hosts" },
      ]},
      { id: "osint2_ip", label: "IP & Network Intelligence", children: [
        { id: "osint2_ip_range", label: "IP range analysis — ASN, netblocks, ownership" },
        { id: "osint2_shodan", label: "Shodan/Censys — exposed services, banners, vulnerabilities" },
        { id: "osint2_geolocation", label: "IP geolocation — physical location, ISP, proxy detection" },
        { id: "osint2_bgp", label: "BGP analysis — routing, peers, announcements, hijacking" },
      ]},
      { id: "osint2_web", label: "Web Intelligence", children: [
        { id: "osint2_tech", label: "Technology fingerprinting — Wappalyzer, BuiltWith, HTTP headers" },
        { id: "osint2_archive", label: "Web archive analysis — Wayback Machine, historical content" },
        { id: "osint2_certificates", label: "Certificate transparency — crt.sh, Censys, new domains" },
        { id: "osint2_cms", label: "CMS analysis — plugins, themes, version identification" },
      ]}
    ]
  },
  {
    id: "osint_phase3", icon: "fas fa-user", label: "PHASE 3: People & Social Media Intelligence", severity: "high",
    children: [
      { id: "osint3_people", label: "People Intelligence", children: [
        { id: "osint3_email", label: "Email intelligence — format discovery, breach data, pattern analysis" },
        { id: "osint3_username", label: "Username search — Namechk, Sherlock, cross-platform identification" },
        { id: "osint3_phone", label: "Phone intelligence — carrier lookup, social media, reverse lookup" },
        { id: "osint3_real_name", label: "Real name research — public records, social networks, news" },
        { id: "osint3_image", label: "Image analysis — reverse image search, EXIF data, geolocation" },
      ]},
      { id: "osint3_social", label: "Social Media Intelligence (SOCMINT)", children: [
        { id: "osint3_linkedin", label: "LinkedIn analysis — employees, org chart, skills, connections" },
        { id: "osint3_twitter", label: "Twitter/X analysis — tweets, followers, lists, mentions" },
        { id: "osint3_facebook", label: "Facebook analysis — profiles, groups, posts, photos" },
        { id: "osint3_instagram", label: "Instagram analysis — posts, locations, connections, tags" },
        { id: "osint3_forums", label: "Forum analysis — professional forums, hacking forums, Q&A sites" },
        { id: "osint3_sentiment", label: "Sentiment analysis — public perception, employee dissatisfaction" },
      ]}
    ]
  },
  {
    id: "osint_phase4", icon: "fas fa-database", label: "PHASE 4: Data Breach & Document Intelligence", severity: "high",
    children: [
      { id: "osint4_breach", label: "Breach Intelligence", children: [
        { id: "osint4_haveibeenpwned", label: "Check HaveIBeenPwned — exposed email addresses, passwords" },
        { id: "osint4_dehashed", label: "Search DeHashed — breach data, credentials, PII" },
        { id: "osint4_pastes", label: "Monitor paste sites — Pastebin, Ghostbin, code repositories" },
        { id: "osint4_darknet", label: "Dark web monitoring — breach forums, marketplaces, leak sites" },
      ]},
      { id: "osint4_docs", label: "Document Intelligence", children: [
        { id: "osint4_public_records", label: "Search public records — property, court, business registration" },
        { id: "osint4_filings", label: "Review regulatory filings — SEC, patents, trademarks" },
        { id: "osint4_metadata", label: "Extract metadata — documents, images, PDFs, Office files" },
        { id: "osint4_google_dorks", label: "Advanced search — Google dorks, filetype, site, inurl queries" },
        { id: "osint4_geoint", label: "Geolocation intelligence — imagery analysis, satellite, mapping" },
      ]}
    ]
  },
  {
    id: "osint_phase5", icon: "fas fa-file-alt", label: "PHASE 5: Analysis, Reporting & Dissemination", severity: "info",
    children: [
      { id: "osint5_analysis", label: "Intelligence Analysis", children: [
        { id: "osint5_correlate", label: "Correlate findings — link data points, build relationships" },
        { id: "osint5_link_analysis", label: "Perform link analysis — Maltego graphs, relationship mapping" },
        { id: "osint5_verify", label: "Verify intelligence — source validation, cross-referencing" },
        { id: "osint5_assess", label: "Assess reliability — confidence levels, source credibility" },
      ]},
      { id: "osint5_report", label: "Reporting & Dissemination", children: [
        { id: "osint5_report_doc", label: "Write intelligence report — executive summary, detailed findings" },
        { id: "osint5_visualize", label: "Create visualizations — timelines, network graphs, maps" },
        { id: "osint5_remediate", label: "Provide remediation guidance — exposed data, recommended actions" },
        { id: "osint5_monitoring", label: "Setup ongoing monitoring — alerts, periodic checks, watchlists" },
      ]}
    ]
  }
];
