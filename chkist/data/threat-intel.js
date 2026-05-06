window.CHECKLIST_THREAT_INTEL = [
  {
    id: "ti_phase1", icon: "fas fa-bullseye", label: "PHASE 1: Requirements & Collection Planning", severity: "info",
    children: [
      { id: "ti1_requirements", label: "Intelligence Requirements", children: [
        { id: "ti1_pir", label: "Define Priority Intelligence Requirements (PIRs) — decision-maker needs" },
        { id: "ti1_eef", label: "Identify Essential Elements of Information (EEIs) — supporting PIRs" },
        { id: "ti1_stakeholders", label: "Map stakeholders — SOC, IR, CISO, executives, threat hunters" },
        { id: "ti1_scope", label: "Define scope — industry, geography, threat actors, TTPs" },
        { id: "ti1_classification", label: "Establish classification levels — unclassified, TLP:RED/AMBER/GREEN" },
      ]},
      { id: "ti1_collection", label: "Collection Strategy", children: [
        { id: "ti1_sources", label: "Identify intelligence sources — open, commercial, technical, human" },
        { id: "ti1_feeds", label: "Select threat feeds — STIX/TAXII, ISACs, vendor feeds, government alerts" },
        { id: "ti1_tools", label: "Deploy collection tools — MISP, OpenCTI, Yeti, Anomali" },
        { id: "ti1_automation", label: "Automate collection — scheduled feeds, API integrations, RSS monitoring" },
      ]}
    ]
  },
  {
    id: "ti_phase2", icon: "fas fa-search", label: "PHASE 2: Tactical Threat Intelligence", severity: "critical",
    children: [
      { id: "ti2_ioc", label: "IOC Collection & Management", children: [
        { id: "ti2_ioc_collection", label: "Collect IOCs — malware hashes, IPs, domains, URLs, email addresses" },
        { id: "ti2_ioc_validation", label: "Validate IOCs — false positive rate, context, relevance" },
        { id: "ti2_ioc_enrichment", label: "Enrich IOCs — geolocation, WHOIS, ASN, reputation scores" },
        { id: "ti2_ioc_dedup", label: "Deduplicate IOCs — merge, correlate, remove stale indicators" },
        { id: "ti2_ioc_distribution", label: "Distribute IOCs — SIEM integration, firewall rules, EDR blocklists" },
        { id: "ti2_ioc_lifecycle", label: "Manage IOC lifecycle — creation, active, expired, archived" },
      ]},
      { id: "ti2_ttp", label: "TTP Analysis", children: [
        { id: "ti2_ttp_mapping", label: "Map TTPs to MITRE ATT&CK — techniques, tactics, procedures" },
        { id: "ti2_ttp_tracking", label: "Track threat actor TTP evolution — changes over time, new techniques" },
        { id: "ti2_ttp_detection", label: "Create detection rules — Sigma, YARA, Snort, Suricata for TTPs" },
        { id: "ti2_ttp_hunting", label: "Develop hunting hypotheses — based on TTP patterns and anomalies" },
      ]},
      { id: "ti2_malware", label: "Malware Intelligence", children: [
        { id: "ti2_malware_samples", label: "Collect malware samples — malware repositories, honeypots, submissions" },
        { id: "ti2_malware_analysis", label: "Static/dynamic analysis — behavioral analysis, string extraction, unpacking" },
        { id: "ti2_malware_signatures", label: "Create YARA rules — pattern matching, family classification" },
        { id: "ti2_malware_infra", label: "Map malware infrastructure — C2 servers, droppers, DGA domains" },
      ]}
    ]
  },
  {
    id: "ti_phase3", icon: "fas fa-users", label: "PHASE 3: Strategic Threat Intelligence", severity: "high",
    children: [
      { id: "ti3_actors", label: "Threat Actor Profiling", children: [
        { id: "ti3_actor_id", label: "Identify threat actors — APTs, cybercriminals, hacktivists, insiders" },
        { id: "ti3_actor_motivation", label: "Analyze motivation — financial, espionage, ideological, disruption" },
        { id: "ti3_actor_capability", label: "Assess capabilities — tools, resources, sophistication, persistence" },
        { id: "ti3_actor_targeting", label: "Track targeting patterns — industries, regions, technologies" },
        { id: "ti3_actor_attribution", label: "Perform attribution — infrastructure overlap, TTP similarity, language" },
      ]},
      { id: "ti3_campaigns", label: "Campaign Tracking", children: [
        { id: "ti3_campaign_detect", label: "Detect active campaigns — correlated IOCs, shared infrastructure" },
        { id: "ti3_campaign_timeline", label: "Build campaign timeline — initial access, progression, objectives" },
        { id: "ti3_campaign_impact", label: "Assess campaign impact — data stolen, systems affected, financial loss" },
        { id: "ti3_campaign_correlation", label: "Correlate campaigns — link to known threat actors, infrastructure" },
      ]},
      { id: "ti3_strategic", label: "Strategic Analysis", children: [
        { id: "ti3_trends", label: "Analyze threat trends — emerging techniques, new vulnerabilities, tool evolution" },
        { id: "ti3_forecasting", label: "Threat forecasting — predictive analysis, scenario planning" },
        { id: "ti3_risk_intel", label: "Intelligence-driven risk assessment — context for business risk decisions" },
        { id: "ti3_exec_briefs", label: "Prepare executive briefs — strategic summaries, actionable recommendations" },
      ]}
    ]
  },
  {
    id: "ti_phase4", icon: "fas fa-globe", label: "PHASE 4: OSINT & Dark Web Intelligence", severity: "high",
    children: [
      { id: "ti4_osint", label: "OSINT Collection", children: [
        { id: "ti4_osint_social", label: "Monitor social media — Twitter/X, Telegram, Reddit, forums" },
        { id: "ti4_osint_paste", label: "Monitor paste sites — Pastebin, Ghostbin, private pastes" },
        { id: "ti4_osint_github", label: "Monitor code repositories — leaked credentials, exploit code" },
        { id: "ti4_osint_cert", label: "Monitor certificate transparency — new domains targeting organization" },
        { id: "ti4_osint_darknet", label: "Monitor dark web forums — BreachForums, XSS, RaidForums" },
      ]},
      { id: "ti4_breach", label: "Breach Intelligence", children: [
        { id: "ti4_breach_monitor", label: "Monitor breach data — HaveIBeenPwned, DeHashed, breach notifications" },
        { id: "ti4_breach_credentials", label: "Check employee credentials — exposed passwords, hashes" },
        { id: "ti4_breach_brand", label: "Monitor brand exposure — impersonation, phishing domains, fake apps" },
        { id: "ti4_breach_response", label: "Respond to breaches — forced password resets, MFA enrollment" },
      ]}
    ]
  },
  {
    id: "ti_phase5", icon: "fas fa-chart-line", label: "PHASE 5: Intelligence Dissemination & Feedback", severity: "info",
    children: [
      { id: "ti5_dissemination", label: "Intelligence Dissemination", children: [
        { id: "ti5_reports", label: "Produce intelligence reports — tactical, operational, strategic" },
        { id: "ti5_alerts", label: "Issue threat alerts — time-sensitive, actionable intelligence" },
        { id: "ti5_feeds_soc", label: "Feed SOC — IOCs to SIEM, EDR, firewall, email gateway" },
        { id: "ti5_feeds_hunt", label: "Feed hunters — TTPs, hypotheses, detection opportunities" },
        { id: "ti5_sharing", label: "Share with community — ISACs, peer organizations, government agencies" },
      ]},
      { id: "ti5_feedback", label: "Program Feedback & Improvement", children: [
        { id: "ti5_feedback_loop", label: "Collect feedback — usefulness, timeliness, actionability ratings" },
        { id: "ti5_metrics", label: "Track metrics — IOC hit rate, time to detect, false positive rate" },
        { id: "ti5_relevance", label: "Assess relevance — intelligence consumed, actions taken, decisions informed" },
        { id: "ti5_improvement", label: "Continuous improvement — refine collection, analysis, dissemination" },
      ]}
    ]
  },
  {
    id: "ti_phase6", icon: "fas fa-cogs", label: "PHASE 6: Platform & Infrastructure Management", severity: "info",
    children: [
      { id: "ti6_platform", label: "Intelligence Platform Management", children: [
        { id: "ti6_misp", label: "Manage MISP — event creation, sharing groups, taxonomy" },
        { id: "ti6_opencti", label: "Manage OpenCTI — knowledge graph, connectors, workflows" },
        { id: "ti6_stix", label: "Work with STIX/TAXII — standardized sharing, indicator format" },
        { id: "ti6_api_integrations", label: "Manage API integrations — feed sources, enrichment services" },
        { id: "ti6_data_quality", label: "Ensure data quality — accuracy, completeness, timeliness, consistency" },
      ]}
    ]
  }
];
