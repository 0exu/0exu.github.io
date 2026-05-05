window.CHECKLIST_SOCIAL_ENGINEERING = [
  {
    id: "se_phase1", icon: "fas fa-user-secret", label: "PHASE 1: Intelligence Gathering & Target Profiling", severity: "info",
    children: [
      {
        id: "se1_osint", label: "Open Source Intelligence", children: [
          { id: "se_osint_social", label: "Social Media Profiling — LinkedIn, Facebook, Twitter, Instagram analysis" },
          { id: "se_osint_employee", label: "Employee Research — Roles, responsibilities, relationships, org chart" },
          { id: "se_osint_company", label: "Company Research — News, acquisitions, partnerships, financial reports" },
          { id: "se_osint_tech", label: "Technology Research — Email format, tools, platforms in use" },
          { id: "se_osint_events", label: "Events & Conferences — Upcoming events for pretext opportunities" },
          { id: "se_osint_personal", label: "Personal Information — Hobbies, interests, family, pets for password hints" },
        ]
      },
      {
        id: "se1_target", label: "Target Analysis & Profiling", children: [
          { id: "se_target_hierarchy", label: "Org Hierarchy — Reporting structure, decision makers, gatekeepers" },
          { id: "se_target_psych", label: "Psychological Profiling — Personality types, communication styles" },
          { id: "se_target_weakness", label: "Weakness Identification — Stress points, frustrations, pain areas" },
          { id: "se_target_culture", label: "Corporate Culture — Communication norms, formality, urgency" },
          { id: "se_target_policies", label: "Security Policies — Known procedures, reporting channels" },
        ]
      },
      {
        id: "se1_pretext", label: "Pretext Development", children: [
          { id: "se_pretext_scenario", label: "Scenario Design — Believable context for engagement" },
          { id: "se_pretext_persona", label: "Persona Creation — Identity, background, credibility elements" },
          { id: "se_pretext_backstory", label: "Backstory — Detailed history to support the pretext" },
          { id: "se_pretext_validation", label: "Validation Elements — Fake IDs, websites, documents to support story" },
          { id: "se_pretext_exit", label: "Exit Strategy — How to disengage without raising suspicion" },
        ]
      }
    ]
  },
  {
    id: "se_phase2", icon: "fas fa-envelope-open-text", label: "PHASE 2: Phishing Campaigns & Email Attacks", severity: "high",
    children: [
      {
        id: "se2_email_recon", label: "Email Reconnaissance", children: [
          { id: "se_email_format", label: "Email Format — Discover naming conventions (first.last@, flast@)" },
          { id: "se_email_security", label: "Email Security — SPF, DKIM, DMARC policy analysis" },
          { id: "se_email_client", label: "Email Client — Outlook, Gmail, webmail identification" },
          { id: "se_email_rules", label: "Email Rules — Signature format, disclaimers, internal email patterns" },
        ]
      },
      {
        id: "se2_phish_prep", label: "Phishing Preparation", children: [
          { id: "se_phish_domain", label: "Lookalike Domain — Register similar domain (typosquatting)" },
          { id: "se_phish_server", label: "Mail Server Setup — SMTP configuration for sending" },
          { id: "se_phish_clone", label: "Portal Cloning — Clone login pages, SharePoint, O365 portals" },
          { id: "se_phish_template", label: "Email Template — Professional, contextually appropriate templates" },
          { id: "se_phish_payload", label: "Payload Design — Malicious attachments, credential harvesters" },
          { id: "se_phish_tracking", label: "Tracking Setup — Open/click tracking, credential logging" },
        ]
      },
      {
        id: "se2_phish_exec", label: "Phishing Execution", children: [
          { id: "se_phish_spear", label: "Spear Phishing — Highly targeted emails to specific individuals" },
          { id: "se_phish_whale", label: "Whaling — High-value targets (executives, C-suite)" },
          { id: "se_phish_mass", label: "Mass Phishing — Broad campaign across organization" },
          { id: "se_phish_reply", label: "Reply Exploitation — Hijack email threads for credibility" },
          { id: "se_phish_urgency", label: "Urgency Tactics — Time pressure to bypass rational thinking" },
          { id: "se_phish_followup", label: "Follow-up Emails — Reminder emails for non-responders" },
        ]
      },
      {
        id: "se2_attachment", label: "Malicious Attachment Techniques", children: [
          { id: "se_attach_macro", label: "Macro Documents — Word/Excel with malicious macros" },
          { id: "se_attach_lnk", label: "LNK Files — Shortcut files triggering PowerShell commands" },
          { id: "se_attach_iso", label: "ISO/IMG Files — Disk images bypassing email filters" },
          { id: "se_attach_html", label: "HTML Attachments — Phishing pages as HTML files" },
          { id: "se_attach_zip", label: "Password-Protected Archives — Bypass AV scanning with encrypted zips" },
        ]
      }
    ]
  },
  {
    id: "se_phase3", icon: "fas fa-phone-volume", label: "PHASE 3: Vishing & Phone Attacks", severity: "high",
    children: [
      {
        id: "se3_voice_prep", label: "Voice Attack Preparation", children: [
          { id: "se_voice_number", label: "Caller ID Spoofing — Display trusted phone numbers" },
          { id: "se_voice_script", label: "Call Script — Detailed conversation flow and responses" },
          { id: "se_voice_tone", label: "Tone & Authority — Voice modulation, confidence, urgency" },
          { id: "se_voice_knowledge", label: "Background Knowledge — Internal info to establish credibility" },
        ]
      },
      {
        id: "se3_voice_exec", label: "Vishing Execution", children: [
          { id: "se_voice_it_support", label: "IT Support Pretext — Posing as help desk or IT staff" },
          { id: "se_voice_exec_impersonation", label: "Executive Impersonation — Pretending to be CEO or manager" },
          { id: "se_voice_vendor", label: "Vendor/Partner Pretext — External business relationship claim" },
          { id: "se_voice_urgency", label: "Urgency Creation — Emergency scenarios requiring immediate action" },
          { id: "se_voice_callback", label: "Callback Manipulation — Redirect callback to controlled number" },
          { id: "se_voice_info_gather", label: "Information Gathering — Credentials, internal procedures, data" },
        ]
      },
      {
        id: "se3_voice_advanced", label: "Advanced Voice Techniques", children: [
          { id: "se_voice_ai_deepfake", label: "AI Voice Cloning — Deepfake voice generation for impersonation" },
          { id: "se_voice_hold_music", label: "Hold Music Manipulation — Extended holds to increase urgency" },
          { id: "se_voice_transfer", label: "Call Transfer Manipulation — Redirect to controlled extensions" },
          { id: "se_voice_recording", label: "Call Recording — Capture sensitive verbal information" },
        ]
      }
    ]
  },
  {
    id: "se_phase4", icon: "fas fa-building", label: "PHASE 4: Physical Social Engineering", severity: "critical",
    children: [
      {
        id: "se4_physical_recon", label: "Physical Reconnaissance", children: [
          { id: "se_phys_location", label: "Location Analysis — Building layout, entrances, exits, security" },
          { id: "se_phys_badge", label: "Badge System — RFID type, visual design, access levels" },
          { id: "se_phys_security", label: "Security Personnel — Guard posts, shift patterns, procedures" },
          { id: "se_phys_camera", label: "Camera Placement — CCTV coverage, blind spots" },
          { id: "se_phys_parking", label: "Parking & Loading Docks — Vehicle access, delivery areas" },
        ]
      },
      {
        id: "se4_physical_entry", label: "Physical Access Techniques", children: [
          { id: "se_phys_tailgate", label: "Tailgating/Piggybacking — Following authorized personnel" },
          { id: "se_phys_badge_clone", label: "Badge Cloning — RFID/NFC card duplication (Proxmark3)" },
          { id: "se_phys_pretext_entry", label: "Pretexted Entry — Delivery, contractor, visitor scenarios" },
          { id: "se_phys_lock_pick", label: "Lock Picking — Bypass physical locks" },
          { id: "se_phys_bypass", label: "Security Bypass — Bypass turnstiles, mantraps, access controls" },
        ]
      },
      {
        id: "se4_physical_inside", label: "Inside Physical Operations", children: [
          { id: "se_phys_usb_drop", label: "USB Drops — Infected USB drives in parking lot, lobby, restrooms" },
          { id: "se_phys_network", label: "Network Access — Plug into wall jacks, exposed network ports" },
          { id: "se_phys_wireless", label: "Wireless Access — Rogue AP placement, Wi-Fi pineapple deployment" },
          { id: "se_phys_photo", label: "Photographic Evidence — Whiteboard photos, screen captures" },
          { id: "se_phys_documents", label: "Document Access — Unlocked desks, printed documents, sticky notes" },
          { id: "se_phys_shouldersurf", label: "Shoulder Surfing — Observe passwords and sensitive screens" },
        ]
      },
      {
        id: "se4_physical_cleanup", label: "Physical Cleanup & Exit", children: [
          { id: "se_phys_leave_no_trace", label: "Leave No Trace — Remove all tools, devices, evidence" },
          { id: "se_phys_exit_clean", label: "Clean Exit — Normal departure without raising suspicion" },
          { id: "se_phys_document", label: "Document Evidence — Photograph all accessed areas and findings" },
        ]
      }
    ]
  },
  {
    id: "se_phase5", icon: "fas fa-mask", label: "PHASE 5: Online Social Engineering & Impersonation", severity: "high",
    children: [
      {
        id: "se5_online_persona", label: "Online Persona Creation", children: [
          { id: "se_online_fake_acct", label: "Fake Accounts — LinkedIn, Twitter, Facebook with realistic profiles" },
          { id: "se_online_connection", label: "Connection Building — Friend/accept requests from target employees" },
          { id: "se_online_credibility", label: "Credibility Building — Posts, interactions, network growth" },
          { id: "se_online_impersonate", label: "Impersonation — Fake profiles mimicking real employees" },
        ]
      },
      {
        id: "se5_online_attacks", label: "Online Attack Techniques", children: [
          { id: "se_online_dm", label: "Direct Message Exploitation — LinkedIn/Twitter DMs for info gathering" },
          { id: "se_online_linkedin", label: "LinkedIn Recon — Employee connections, job postings, skills" },
          { id: "se_online_support", label: "IT Support Impersonation — Fake help desk chat/email" },
          { id: "se_online_recruiter", label: "Fake Recruiter — Headhunter pretext for information gathering" },
          { id: "se_online_partner", label: "Fake Partner/Vendor — Business relationship exploitation" },
        ]
      }
    ]
  },
  {
    id: "se_phase6", icon: "fas fa-brain", label: "PHASE 6: Psychological Manipulation Techniques", severity: "critical",
    children: [
      {
        id: "se6_psych_principles", label: "Influence Principles", children: [
          { id: "se_psych_authority", label: "Authority — Impersonating figures of power and expertise" },
          { id: "se_psych_urgency", label: "Urgency — Time pressure to bypass critical thinking" },
          { id: "se_psych_reciprocity", label: "Reciprocity — Give something to receive something in return" },
          { id: "se_psych_social_proof", label: "Social Proof — Others are doing it, so it must be safe" },
          { id: "se_psych_liking", label: "Liking — Build rapport and trust before asking" },
          { id: "se_psych_scarcity", label: "Scarcity — Limited opportunity creates desire to act" },
          { id: "se_psych_fear", label: "Fear — Consequences of not complying" },
        ]
      },
      {
        id: "se6_manipulation", label: "Manipulation Techniques", children: [
          { id: "se_manip_gaslighting", label: "Gaslighting — Making targets doubt their own judgment" },
          { id: "se_manip_emotional", label: "Emotional Manipulation — Appeal to emotions over logic" },
          { id: "se_manip_confusion", label: "Confusion Techniques — Overwhelming with technical jargon" },
          { id: "se_manip_help", label: "Help Me — Exploit desire to assist and be helpful" },
          { id: "se_manip_intimidation", label: "Intimidation — Aggressive tone to force compliance" },
        ]
      }
    ]
  },
  {
    id: "se_phase7", icon: "fas fa-clipboard-check", label: "PHASE 7: Assessment, Reporting & Training", severity: "info",
    children: [
      {
        id: "se7_report", label: "SE Assessment Report", children: [
          { id: "se7_report_summary", label: "Executive Summary — Campaign overview, success rates" },
          { id: "se7_report_metrics", label: "Metrics — Open rates, click rates, credential submissions" },
          { id: "se7_report_findings", label: "Findings — Vulnerable employees, departments, techniques" },
          { id: "se7_report_risk", label: "Risk Assessment — Business impact of successful attacks" },
          { id: "se7_report_recommendations", label: "Recommendations — Security awareness improvements" },
        ]
      },
      {
        id: "se7_training", label: "Awareness & Training", children: [
          { id: "se7_training_program", label: "Training Program — SE awareness curriculum for employees" },
          { id: "se7_training_simulations", label: "Ongoing Simulations — Regular phishing and vishing tests" },
          { id: "se7_training_reporting", label: "Reporting Procedures — How employees should report suspicious activity" },
          { id: "se7_training_policies", label: "Policy Updates — Strengthen SE-related security policies" },
        ]
      }
    ]
  }
];
