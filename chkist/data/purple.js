window.CHECKLIST_PURPLE = [
  {
    id: "purp_phase1", icon: "fas fa-clipboard", label: "PHASE 1: Planning & Threat Modeling", severity: "info",
    children: [
      {
        id: "purp1_scope", label: "Engagement Scoping", children: [
          { id: "purp_scope_doc", label: "Scope Document — In-scope systems, rules of engagement" },
          { id: "purp_scope_stakeholder", label: "Stakeholder Alignment — Red team, blue team, management" },
          { id: "purp_scope_goals", label: "Exercise Goals — Specific objectives and success criteria" },
          { id: "purp_scope_timeline", label: "Timeline — Schedule, duration, coordination windows" },
        ]
      },
      {
        id: "purp1_threat", label: "Threat Modeling & APT Emulation", children: [
          { id: "purp_threat_apt", label: "APT Selection — Target threat actor group for emulation" },
          { id: "purp_threat_ttp", label: "TTP Selection — MITRE ATT&CK techniques to test" },
          { id: "purp_threat_scenario", label: "Scenario Design — Realistic attack scenario development" },
          { id: "purp_threat_intel", label: "Threat Intelligence — IOC, TTP research on selected threat" },
        ]
      },
      {
        id: "purp1_baseline", label: "Detection Baseline Assessment", children: [
          { id: "purp_baseline_coverage", label: "Coverage Assessment — Current detection capability mapping" },
          { id: "purp_baseline_logging", label: "Logging Assessment — Log source availability and quality" },
          { id: "purp_baseline_tools", label: "Tool Assessment — SIEM, EDR, NDR capabilities review" },
        ]
      }
    ]
  },
  {
    id: "purp_phase2", icon: "fas fa-handshake", label: "PHASE 2: Joint Execution & Validation", severity: "high",
    children: [
      {
        id: "purp2_red_exec", label: "Red Team Execution", children: [
          { id: "purp_red_ttp_exec", label: "TTP Execution — Red team executes specific techniques" },
          { id: "purp_red_document", label: "Action Documentation — Detailed logging of every action taken" },
          { id: "purp_red_timing", label: "Timing Coordination — Scheduled execution windows" },
          { id: "purp_red_variations", label: "Technique Variations — Multiple implementations of same TTP" },
        ]
      },
      {
        id: "purp2_blue_obs", label: "Blue Team Observation", children: [
          { id: "purp_blue_realtime", label: "Real-Time Monitoring — Blue team observes during execution" },
          { id: "purp_blue_alerts", label: "Alert Review — Identify which alerts fired" },
          { id: "purp_blue_visibility", label: "Visibility Check — What data sources captured the activity" },
          { id: "purp_blue_investigate", label: "Investigation — Blue team investigates observed activity" },
        ]
      },
      {
        id: "purp2_gap", label: "Gap Identification", children: [
          { id: "purp_gap_detection", label: "Detection Gaps — TTPs that generated no alerts" },
          { id: "purp_gap_visibility", label: "Visibility Gaps — TTPs with no log coverage" },
          { id: "purp_gap_process", label: "Process Gaps — Missing investigation or response procedures" },
          { id: "purp_gap_tool", label: "Tool Gaps — Security tool limitations identified" },
        ]
      },
      {
        id: "purp2_verify", label: "Security Control Verification", children: [
          { id: "purp_verify_prevent", label: "Prevention Controls — Did security tools block the attack" },
          { id: "purp_verify_detect", label: "Detection Controls — Did SIEM/EDR alert on the activity" },
          { id: "purp_verify_respond", label: "Response Controls — Was automated response triggered" },
          { id: "purp_verify_recover", label: "Recovery Controls — Can the organization recover from this" },
        ]
      }
    ]
  },
  {
    id: "purp_phase3", icon: "fas fa-wrench", label: "PHASE 3: Remediation & Detection Tuning", severity: "critical",
    children: [
      {
        id: "purp3_detect_tune", label: "Detection Tuning", children: [
          { id: "purp_siem_new", label: "New SIEM Rules — Create detection rules for identified gaps" },
          { id: "purp_siem_threshold", label: "Threshold Adjustment — Tune alert thresholds for accuracy" },
          { id: "purp_siem_correlation", label: "Correlation Rules — Multi-event detection for complex attacks" },
          { id: "purp_edr_policy", label: "EDR Policy Update — Enhanced detection and blocking policies" },
          { id: "purp_yara_new", label: "New YARA Rules — Custom rules for identified malware/techniques" },
          { id: "purp_sigma_new", label: "New Sigma Rules — SIEM detection rules for log sources" },
        ]
      },
      {
        id: "purp3_hardening", label: "Security Hardening", children: [
          { id: "purp_hard_config", label: "Configuration Fix — Correct misconfigurations exploited" },
          { id: "purp_hard_patch", label: "Patching — Apply missing patches for exploited vulnerabilities" },
          { id: "purp_hard_architect", label: "Architecture Improvement — Structural security changes" },
          { id: "purp_hard_policy", label: "Policy Implementation — New security policies and procedures" },
        ]
      },
      {
        id: "purp3_playbook", label: "Playbook & Procedure Updates", children: [
          { id: "purp_play_ir", label: "IR Playbook Update — Update incident response procedures" },
          { id: "purp_play_hunt", label: "Hunting Playbook — New threat hunting procedures" },
          { id: "purp_play_escalation", label: "Escalation Procedures — Update severity and escalation paths" },
        ]
      }
    ]
  },
  {
    id: "purp_phase4", icon: "fas fa-chart-bar", label: "PHASE 4: Metrics & Posture Assessment", severity: "info",
    children: [
      {
        id: "purp4_report", label: "Reporting & Documentation", children: [
          { id: "purp_report_tech", label: "Technical Report — Detailed findings for security teams" },
          { id: "purp_report_exec", label: "Executive Report — Business risk overview for leadership" },
          { id: "purp_report_mitre", label: "MITRE ATT&CK Coverage — Techniques tested vs detected" },
          { id: "purp_report_before_after", label: "Before/After Comparison — Improvement measurement" },
        ]
      },
      {
        id: "purp4_metrics", label: "Metrics & Scoring", children: [
          { id: "purp_maturity", label: "Maturity Scoring — Security posture maturity assessment" },
          { id: "purp_detection_rate", label: "Detection Rate — Percentage of TTPs detected" },
          { id: "purp_prevention_rate", label: "Prevention Rate — Percentage of TTPs blocked" },
          { id: "purp_trend", label: "Trend Analysis — Tracking improvement over time" },
        ]
      },
      {
        id: "purp4_roadmap", label: "Strategic Roadmap", children: [
          { id: "purp_roadmap_short", label: "Short-Term Actions — Quick wins and immediate improvements" },
          { id: "purp_roadmap_medium", label: "Medium-Term Goals — 3-6 month security improvements" },
          { id: "purp_roadmap_long", label: "Long-Term Strategy — 6-12+ month security program goals" },
          { id: "purp_roadmap_budget", label: "Budget Recommendations — Resource and tool investment needs" },
          { id: "purp_roadmap_training", label: "Training Plan — Team skill development requirements" },
        ]
      }
    ]
  },
  {
    id: "purp_phase5", icon: "fas fa-sync-alt", label: "PHASE 5: Continuous Purple Teaming", severity: "info",
    children: [
      {
        id: "purp5_automate", label: "Automated Validation", children: [
          { id: "purp_auto_breach", label: "Breach & Attack Simulation — BAS tool deployment and testing" },
          { id: "purp_auto_caldera", label: "MITRE Caldera — Automated adversary emulation" },
          { id: "purp_auto_safe", label: "Safe Testing — Non-destructive attack simulation" },
          { id: "purp_auto_continuous", label: "Continuous Testing — Automated validation on schedule" },
        ]
      },
      {
        id: "purp5_cycle", label: "Purple Team Cycle", children: [
          { id: "purp_cycle_frequency", label: "Exercise Frequency — Regular purple team scheduling" },
          { id: "purp_cycle_new_ttp", label: "New TTP Testing — Continuously add new techniques" },
          { id: "purp_cycle_retro", label: "Retrospective — Review lessons from each exercise" },
          { id: "purp_cycle_improve", label: "Continuous Improvement — Iterate on findings and fixes" },
        ]
      }
    ]
  }
];
