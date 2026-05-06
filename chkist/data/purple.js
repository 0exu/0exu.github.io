window.CHECKLIST_PURPLE = [
  {
    id: "purp_phase1", icon: "fas fa-clipboard", label: "PHASE 1: Program Design & Threat Intelligence Preparation", severity: "info",
    children: [
      { id: "purp1_program", label: "Purple Team Program Design", children: [
        { id: "purp1_charter", label: "Define purple team charter — mission, scope, objectives, success criteria, frequency" },
        { id: "purp1_governance", label: "Establish governance — management sponsorship, budget, resource allocation, reporting" },
        { id: "purp1_team", label: "Form purple team — red team operators, blue team analysts, facilitator, stakeholders" },
        { id: "purp1_tools", label: "Select tools — attack simulation (Caldera, Atomic Red Team), SIEM, EDR, collaboration platform" },
        { id: "purp1_rules", label: "Define rules of engagement — in-scope systems, testing windows, safety controls, abort criteria" },
      ]},
      { id: "purp1_threat", label: "Threat Intelligence & APT Selection", children: [
        { id: "purp1_apt_research", label: "Research relevant threat actors — industry-specific, geographic, technology-targeting" },
        { id: "purp1_ttp_selection", label: "Select TTPs for testing — MITRE ATT&CK techniques, sub-techniques, procedures" },
        { id: "purp1_scenario_design", label: "Design attack scenarios — realistic kill chains, multi-stage attacks, objective-based" },
        { id: "purp1_ioc_prep", label: "Prepare threat intelligence — IOCs, malware samples, infrastructure details, campaign data" },
      ]},
      { id: "purp1_baseline", label: "Detection Baseline Assessment", children: [
        { id: "purp1_coverage_map", label: "Map current detection coverage — ATT&CK techniques covered, data sources, detection rules" },
        { id: "purp1_logging_audit", label: "Audit logging — log source availability, quality, retention, parsing, field extraction" },
        { id: "purp1_tool_assessment", label: "Assess security tools — SIEM, EDR, NDR, firewall, proxy capabilities and limitations" },
        { id: "purp1_gap_id", label: "Identify initial gaps — techniques with no detection, blind spots, data source gaps" },
      ]}
    ]
  },
  {
    id: "purp_phase2", icon: "fas fa-handshake", label: "PHASE 2: Collaborative Planning & Attack Scenario Design", severity: "high",
    children: [
      { id: "purp2_scenarios", label: "Attack Scenario Development", children: [
        { id: "purp2_kill_chain", label: "Design full kill chain scenarios — initial access to impact, realistic TTP progression" },
        { id: "purp2_technique_breakdown", label: "Break down techniques — specific implementation, expected behavior, log generation" },
        { id: "purp2_variations", label: "Design technique variations — multiple implementations of same technique, detection testing" },
        { id: "purp2_safe_execution", label: "Plan safe execution — non-destructive, no data modification, rollback procedures" },
        { id: "purp2_dependencies", label: "Identify prerequisites — required tools, system access, configuration, network access" },
      ]},
      { id: "purp2_blue_prep", label: "Blue Team Preparation", children: [
        { id: "purp2_blue_brief", label: "Brief blue team — objectives, timeframe, communication plan, what NOT to expect" },
        { id: "purp2_blue_visibility", label: "Assess blue team visibility — current dashboards, alerts, log sources, monitoring coverage" },
        { id: "purp2_blue_tools", label: "Verify blue team tools — SIEM queries, EDR policies, alert rules, dashboard availability" },
        { id: "purp2_blue_baseline", label: "Establish baseline — normal activity patterns, expected alerts, baseline noise level" },
      ]},
      { id: "purp2_coordination", label: "Exercise Coordination", children: [
        { id: "purp2_comm_channel", label: "Setup communication — separate channels for red/blue, facilitator, real-time coordination" },
        { id: "purp2_schedule", label: "Coordinate schedule — execution windows, blue team observation times, debrief sessions" },
        { id: "purp2_documentation", label: "Setup documentation — action logging, observation notes, evidence collection, scoring" },
      ]}
    ]
  },
  {
    id: "purp_phase3", icon: "fas fa-bolt", label: "PHASE 3: Joint Execution & Real-Time Validation", severity: "critical",
    children: [
      { id: "purp3_red_exec", label: "Red Team TTP Execution", children: [
        { id: "purp3_ttp_run", label: "Execute TTPs — red team performs specific techniques, documented step-by-step" },
        { id: "purp3_timing", label: "Coordinate timing — scheduled execution, blue team notification level (blind, partially informed, fully informed)" },
        { id: "purp3_evidence", label: "Capture red team evidence — commands executed, tools used, timestamps, system changes" },
        { id: "purp3_safety", label: "Monitor safety — abort if production impact, unexpected behavior, system instability" },
      ]},
      { id: "purp3_blue_obs", label: "Blue Team Observation & Detection", children: [
        { id: "purp3_blue_realtime", label: "Real-time observation — blue team monitors during execution, notes observations" },
        { id: "purp3_alert_capture", label: "Capture alerts — which alerts fired, which didn't, alert timing, alert quality" },
        { id: "purp3_visibility_check", label: "Check visibility — what data sources captured the activity, what was missed" },
        { id: "purp3_investigation", label: "Blue team investigation — how would blue team detect this naturally, investigation path" },
      ]},
      { id: "purp3_gap_id", label: "Real-Time Gap Identification", children: [
        { id: "purp3_detection_gap", label: "Identify detection gaps — TTPs that generated no alerts, no log coverage" },
        { id: "purp3_visibility_gap", label: "Identify visibility gaps — data sources not collecting relevant telemetry" },
        { id: "purp3_process_gap", label: "Identify process gaps — missing investigation procedures, unclear escalation" },
        { id: "purp3_tool_gap", label: "Identify tool gaps — security tool limitations, missing capabilities, configuration issues" },
        { id: "purp3_immediate_fix", label: "Identify immediate fixes — quick wins, configuration changes, rule tuning possible during exercise" },
      ]},
      { id: "purp3_verify", label: "Security Control Verification", children: [
        { id: "purp3_prevent", label: "Test prevention controls — did security tools block, quarantine, or prevent the attack" },
        { id: "purp3_detect", label: "Test detection controls — did SIEM/EDR/NDR alert, what was the alert quality" },
        { id: "purp3_respond", label: "Test response controls — was automated response triggered, manual response procedures" },
        { id: "purp3_recover", label: "Test recovery controls — can the organization recover, backup restoration, system rebuild" },
      ]}
    ]
  },
  {
    id: "purp_phase4", icon: "fas fa-wrench", label: "PHASE 4: Detection Engineering & Remediation", severity: "critical",
    children: [
      { id: "purp4_detection", label: "Detection Rule Development", children: [
        { id: "purp4_sigma", label: "Create Sigma rules — platform-agnostic detection rules for identified gaps" },
        { id: "purp4_siem", label: "Create SIEM rules — KQL, SPL, correlation rules, alert thresholds" },
        { id: "purp4_edr", label: "Create EDR rules — behavioral detection, IOC matching, process tree rules" },
        { id: "purp4_yara", label: "Create YARA rules — malware detection, file-based indicators, memory scanning" },
        { id: "purp4_nta", label: "Create NTA rules — network-based detection, protocol anomaly, traffic patterns" },
      ]},
      { id: "purp4_tuning", label: "Detection Tuning & Optimization", children: [
        { id: "purp4_fp_reduction", label: "Reduce false positives — threshold adjustment, exclusion rules, context enrichment" },
        { id: "purp4_correlation", label: "Improve correlation — multi-event detection, attack chain correlation, context building" },
        { id: "purp4_enrichment", label: "Add enrichment — threat intel feeds, asset context, user context, geolocation" },
        { id: "purp4_prioritization", label: "Improve prioritization — severity scoring, risk-based alerting, alert grouping" },
      ]},
      { id: "purp4_hardening", label: "Security Control Hardening", children: [
        { id: "purp4_config_fix", label: "Fix misconfigurations — correct settings exploited during exercise, harden configurations" },
        { id: "purp4_patch", label: "Apply patches — missing patches for exploited vulnerabilities, emergency patching" },
        { id: "purp4_architecture", label: "Improve architecture — structural security changes, segmentation, access control" },
        { id: "purp4_policy", label: "Implement new policies — security policies, procedures, standards based on findings" },
      ]},
      { id: "purp4_playbook", label: "Playbook & Procedure Updates", children: [
        { id: "purp4_ir_playbook", label: "Update IR playbooks — new procedures based on exercise findings" },
        { id: "purp4_hunt_playbook", label: "Create hunting playbooks — new threat hunting procedures for identified TTPs" },
        { id: "purp4_escalation", label: "Update escalation procedures — severity classification, notification paths, response times" },
      ]}
    ]
  },
  {
    id: "purp_phase5", icon: "fas fa-chart-bar", label: "PHASE 5: Debrief, Metrics & Posture Assessment", severity: "info",
    children: [
      { id: "purp5_debrief", label: "Post-Exercise Debrief", children: [
        { id: "purp5_hot_wash", label: "Conduct hot wash — immediate debrief, initial findings, observations, reactions" },
        { id: "purp5_formal_debrief", label: "Conduct formal debrief — detailed analysis, all stakeholders, comprehensive findings" },
        { id: "purp5_red_feedback", label: "Red team feedback — what worked, what was detected, evasion success/failure" },
        { id: "purp5_blue_feedback", label: "Blue team feedback — detection experience, investigation challenges, tool limitations" },
      ]},
      { id: "purp5_metrics", label: "Metrics & Scoring", children: [
        { id: "purp5_detection_rate", label: "Calculate detection rate — percentage of TTPs detected, by category, by data source" },
        { id: "purp5_prevention_rate", label: "Calculate prevention rate — percentage of TTPs blocked, by control type" },
        { id: "purp5_time_metrics", label: "Measure time metrics — time to detect, time to investigate, time to respond" },
        { id: "purp5_maturity", label: "Assess maturity — security posture maturity, improvement from previous exercises" },
        { id: "purp5_mitre_coverage", label: "Update ATT&CK coverage — techniques tested vs. detected, coverage percentage" },
      ]},
      { id: "purp5_reporting", label: "Reporting & Documentation", children: [
        { id: "purp5_technical_report", label: "Write technical report — detailed findings, TTPs executed, detection results, gaps" },
        { id: "purp5_exec_report", label: "Write executive report — business risk, overall posture, investment recommendations" },
        { id: "purp5_before_after", label: "Create before/after comparison — improvement measurement, trend analysis" },
        { id: "purp5_recommendations", label: "Document recommendations — prioritized actions, resource needs, timeline" },
      ]}
    ]
  },
  {
    id: "purp_phase6", icon: "fas fa-route", label: "PHASE 6: Strategic Roadmap & Capability Development", severity: "high",
    children: [
      { id: "purp6_roadmap", label: "Strategic Improvement Roadmap", children: [
        { id: "purp6_short_term", label: "Short-term actions (0-3 months) — quick wins, configuration fixes, rule tuning" },
        { id: "purp6_medium_term", label: "Medium-term goals (3-6 months) — tool deployment, process improvement, training" },
        { id: "purp6_long_term", label: "Long-term strategy (6-12+ months) — architecture changes, program maturity, automation" },
        { id: "purp6_budget", label: "Budget recommendations — tool investment, training budget, resource needs, justification" },
      ]},
      { id: "purp6_training", label: "Team Capability Development", children: [
        { id: "purp6_red_training", label: "Red team training — new techniques, tool proficiency, ATT&CK framework, C2 frameworks" },
        { id: "purp6_blue_training", label: "Blue team training — detection engineering, threat hunting, forensic analysis, SIEM skills" },
        { id: "purp6_cross_training", label: "Cross-training — red team learns detection, blue team learns offense, shared understanding" },
        { id: "purp6_certifications", label: "Certification planning — relevant certifications, skill development, career progression" },
      ]},
      { id: "purp6_technology", label: "Technology & Tool Assessment", children: [
        { id: "purp6_tool_gap", label: "Identify tool gaps — missing capabilities, tool limitations, replacement candidates" },
        { id: "purp6_integration", label: "Improve integrations — tool interoperability, data sharing, automated workflows" },
        { id: "purp6_automation", label: "Plan automation — SOAR, automated detection, response playbooks, continuous validation" },
      ]}
    ]
  },
  {
    id: "purp_phase7", icon: "fas fa-robot", label: "PHASE 7: Automation & Continuous Validation", severity: "high",
    children: [
      { id: "purp7_bas", label: "Breach & Attack Simulation", children: [
        { id: "purp7_bas_deploy", label: "Deploy BAS tools — Continuous automated attack simulation, detection validation" },
        { id: "purp7_bas_schedule", label: "Schedule BAS runs — regular simulation, coverage testing, trend analysis" },
        { id: "purp7_bas_reporting", label: "Configure BAS reporting — dashboards, alerts, trend reports, executive summaries" },
      ]},
      { id: "purp7_caldera", label: "MITRE Caldera Automation", children: [
        { id: "purp7_caldera_deploy", label: "Deploy MITRE Caldera — adversary emulation platform, automated TTP execution" },
        { id: "purp7_caldera_profiles", label: "Configure adversary profiles — APT emulation, custom scenarios, ability selection" },
        { id: "purp7_caldera_integration", label: "Integrate with detection — automated detection validation, result collection, gap reporting" },
      ]},
      { id: "purp7_continuous", label: "Continuous Purple Teaming", children: [
        { id: "purp7_frequency", label: "Define exercise frequency — regular purple team schedule, campaign-based, continuous" },
        { id: "purp7_new_ttp", label: "Add new TTPs — continuously expand technique coverage, new threats, emerging TTPs" },
        { id: "purp7_retro", label: "Regular retrospectives — review lessons, update procedures, improve methodology" },
        { id: "purp7_community", label: "Engage community — share findings, collaborate with peers, contribute to open source" },
      ]}
    ]
  },
  {
    id: "purp_phase8", icon: "fas fa-trophy", label: "PHASE 8: Program Maturity Assessment & Evolution", severity: "info",
    children: [
      { id: "purp8_maturity", label: "Purple Team Maturity Assessment", children: [
        { id: "purp8_level", label: "Assess maturity level — initial, developing, defined, managed, optimizing" },
        { id: "purp8_benchmark", label: "Industry benchmarking — peer comparison, best practices, maturity models" },
        { id: "purp8_trend", label: "Track improvement trends — detection rate over time, prevention rate, maturity progression" },
        { id: "purp8_goals", label: "Set improvement goals — target detection rate, coverage percentage, response time" },
      ]},
      { id: "purp8_expansion", label: "Program Expansion", children: [
        { id: "purp8_scope_expansion", label: "Expand scope — additional systems, new environments, cloud, OT, IoT" },
        { id: "purp8_frequency_increase", label: "Increase frequency — from quarterly to monthly, continuous validation integration" },
        { id: "purp8_team_growth", label: "Grow the team — additional members, specialized roles, dedicated purple team function" },
      ]},
      { id: "purp8_value", label: "Value Demonstration & ROI", children: [
        { id: "purp8_roi", label: "Calculate ROI — cost avoidance, incident prevention, detection improvement value" },
        { id: "purp8_stakeholder", label: "Demonstrate value to stakeholders — metrics, case studies, incident prevention stories" },
        { id: "purp8_best_practices", label: "Document best practices — methodology, lessons learned, reusable templates, frameworks" },
      ]}
    ]
  }
];
