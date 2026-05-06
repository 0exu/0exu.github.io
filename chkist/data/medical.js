window.CHECKLIST_MEDICAL = [
  {
    id: "med_phase1", icon: "fas fa-clipboard-check", label: "PHASE 1: Engagement Planning & Regulatory Framework", severity: "info",
    children: [
      { id: "med1_scope", label: "Engagement Scope & Authorization", children: [
        { id: "med1_auth", label: "Obtain authorization from healthcare facility/device manufacturer — written consent, RoE" },
        { id: "med1_devices", label: "Document target devices — infusion pumps, ventilators, imaging systems, patient monitors, pacemakers" },
        { id: "med1_safety", label: "Define safety parameters — CRITICAL: patient safety paramount, isolated testing, simulated patients only" },
        { id: "med1_rules", label: "Define testing rules — in-scope devices, prohibited actions, testing windows, emergency procedures" },
        { id: "med1_contacts", label: "Establish emergency contacts — facility CISO, biomedical engineering, clinical staff, device manufacturer" },
      ]},
      { id: "med1_regulatory", label: "Regulatory & Standards Framework", children: [
        { id: "med1_fda", label: "Review FDA guidance — premarket cybersecurity, postmarket management, vulnerability disclosure" },
        { id: "med1_hipaa", label: "Understand HIPAA requirements — PHI protection, minimum necessary, breach notification" },
        { id: "med1_iec80001", label: "Review IEC 80001 — risk management for IT networks incorporating medical devices" },
        { id: "med1_ul2900", label: "Review UL 2900 — cybersecurity for network-connectable medical devices" },
        { id: "med1_nist", label: "Review NIST guidelines — NISTIR 8228, NIST SP 800-53, healthcare cybersecurity framework" },
      ]},
      { id: "med1_env", label: "Test Environment Preparation", children: [
        { id: "med1_isolation", label: "Setup isolated test environment — separate network, no connection to clinical systems" },
        { id: "med1_equipment", label: "Prepare equipment — SDR, protocol analyzers, network taps, test equipment, VMs" },
        { id: "med1_backup", label: "Backup device configurations — firmware, settings, patient data (anonymized)" },
        { id: "med1_recovery", label: "Prepare recovery procedures — known-good firmware, factory reset, manufacturer support contact" },
      ]}
    ]
  },
  {
    id: "med_phase2", icon: "fas fa-info-circle", label: "PHASE 2: Medical Device Intelligence & Asset Discovery", severity: "info",
    children: [
      { id: "med2_inventory", label: "Medical Device Asset Inventory", children: [
        { id: "med2_asset_inv", label: "Inventory all medical devices — make, model, firmware version, serial number, location" },
        { id: "med2_network_map", label: "Map medical device network — segmentation, VLANs, medical device network vs. clinical vs. admin" },
        { id: "med2_lifecycle", label: "Assess device lifecycle — new, supported, EOL, EOS, unsupported firmware versions" },
        { id: "med2_dependencies", label: "Identify device dependencies — connected systems, data flows, integration points" },
        { id: "med2_third_party", label: "Identify third-party components — OS, libraries, SDKs, embedded systems, COTS components" },
      ]},
      { id: "med2_intel", label: "Device Intelligence Gathering", children: [
        { id: "med2_protocols", label: "Identify communication protocols — DICOM, HL7, FHIR, IEEE 11073, proprietary protocols" },
        { id: "med2_docs", label: "Gather documentation — user manuals, service manuals, FCC filings, API documentation" },
        { id: "med2_vulns", label: "Research known vulnerabilities — CVEs, FDA recalls, ICS-CERT advisories, manufacturer bulletins" },
        { id: "med2_firmware", label: "Identify firmware availability — manufacturer updates, public firmware, extraction methods" },
        { id: "med2_certifications", label: "Review device certifications — FDA clearance, CE marking, security certifications" },
      ]},
      { id: "med2_risk", label: "Risk Assessment & Categorization", children: [
        { id: "med2_criticality", label: "Categorize device criticality — life-sustaining, diagnostic, therapeutic, administrative" },
        { id: "med2_phidata", label: "Assess PHI handling — does device store, process, or transmit patient health information" },
        { id: "med2_network_exposure", label: "Assess network exposure — internet-facing, internal-only, air-gapped, wireless" },
        { id: "med2_risk_score", label: "Calculate risk scores — criticality x exposure x vulnerability, prioritization" },
      ]}
    ]
  },
  {
    id: "med_phase3", icon: "fas fa-network-wired", label: "PHASE 3: Medical Network Security & Protocol Assessment", severity: "critical",
    children: [
      { id: "med3_segmentation", label: "Network Segmentation & Access Control", children: [
        { id: "med3_medical_vlan", label: "Test medical network segmentation — dedicated VLAN, isolation from admin/corporate network" },
        { id: "med3_nac", label: "Test NAC enforcement — device authentication, posture checking, quarantine for non-compliant" },
        { id: "med3_firewall", label: "Test firewall rules — device-specific rules, least privilege, protocol filtering" },
        { id: "med3_monitoring", label: "Assess network monitoring — device visibility, traffic analysis, anomaly detection for medical protocols" },
        { id: "med3_wireless_med", label: "Test medical WiFi security — WPA2-Enterprise, device onboarding, isolation, rogue AP detection" },
      ]},
      { id: "med3_dicom", label: "DICOM Protocol Assessment", children: [
        { id: "med3_dicom_enum", label: "Enumerate DICOM servers — AE titles, ports, modalities, supported SOP classes" },
        { id: "med3_dicom_auth", label: "Test DICOM authentication — often none, anonymous access, no encryption by default" },
        { id: "med3_dicom_data", label: "Test DICOM data exposure — PHI in images, study retrieval, patient data in metadata" },
        { id: "med3_dicom_injection", label: "Test DICOM injection — malicious DICOM files, buffer overflow, parser vulnerabilities" },
        { id: "med3_dicom_fuzz", label: "Test DICOM fuzzing — malformed DICOM objects, protocol abuse, edge case testing" },
        { id: "med3_dicom_encrypt", label: "Test DICOM encryption — TLS for DICOM, certificate management, secure transfer" },
      ]},
      { id: "med3_hl7_fhir", label: "HL7/FHIR Protocol Assessment", children: [
        { id: "med3_hl7_enum", label: "Enumerate HL7 interfaces — MLLP ports, message types (ADT, ORM, ORU), sending/receiving applications" },
        { id: "med3_hl7_auth", label: "Test HL7 authentication — message authentication, integrity, replay protection" },
        { id: "med3_hl7_injection", label: "Test HL7 injection — malicious ADT/ORM messages, data manipulation, system disruption" },
        { id: "med3_fhir_api", label: "Test FHIR API — OAuth, SMART on FHIR, data access control, rate limiting" },
        { id: "med3_fhir_data", label: "Test FHIR data access — patient data exposure, authorization bypass, bulk data access" },
      ]},
      { id: "med3_ieee11073", label: "IEEE 11073 & Proprietary Protocol Assessment", children: [
        { id: "med3_ieee_enum", label: "Enumerate IEEE 11073 devices — agent/manager roles, nomenclature codes, data types" },
        { id: "med3_ieee_security", label: "Test IEEE 11073 security — transport security, authentication, data integrity" },
        { id: "med3_proprietary", label: "Analyze proprietary protocols — reverse engineering, protocol documentation, security assessment" },
      ]}
    ]
  },
  {
    id: "med_phase4", icon: "fas fa-heartbeat", label: "PHASE 4: Medical Device Security Testing by Category", severity: "critical",
    children: [
      { id: "med4_infusion", label: "Infusion Pump Security Testing", children: [
        { id: "med4_infusion_auth", label: "Test infusion pump authentication — drug library access, admin mode, user roles" },
        { id: "med4_infusion_dose", label: "Test dose programming security — unauthorized dose modification (SIMULATED ONLY)" },
        { id: "med4_infusion_wireless", label: "Test wireless infusion pump — wireless protocol security, encryption, authentication" },
        { id: "med4_infusion_update", label: "Test firmware update security — integrity check, authentication, rollback protection" },
        { id: "med4_infusion_logs", label: "Test infusion pump logs — event logging, audit trail, log integrity" },
      ]},
      { id: "med4_imaging", label: "Imaging Device Security Testing", children: [
        { id: "med4_imaging_os", label: "Identify imaging device OS — Windows version, patch level, unsupported OS detection" },
        { id: "med4_imaging_services", label: "Test imaging device services — exposed services, default credentials, unnecessary services" },
        { id: "med4_imaging_pacs", label: "Test PACS security — access control, image encryption, data retention, backup security" },
        { id: "med4_imaging_usb", label: "Test imaging device USB ports — unauthorized USB access, malware introduction, data extraction" },
        { id: "med4_imaging_network", label: "Test imaging device network connectivity — segmentation, firewall rules, monitoring" },
      ]},
      { id: "med4_patient_monitors", label: "Patient Monitor & Vital Sign Device Testing", children: [
        { id: "med4_monitor_auth", label: "Test patient monitor authentication — access control, configuration protection" },
        { id: "med4_monitor_data", label: "Test vital sign data integrity — data tampering, alarm manipulation, display spoofing" },
        { id: "med4_monitor_network", label: "Test monitor network communication — data transmission security, EMR integration" },
        { id: "med4_monitor_wireless", label: "Test wireless patient monitors — telemetry security, encryption, signal interference" },
      ]},
      { id: "med4_implantable", label: "Implantable & Wearable Device Assessment", children: [
        { id: "med4_implant_comm", label: "Analyze implant communication — RF protocols, programmer devices, frequency analysis" },
        { id: "med4_implant_auth", label: "Test implant authentication — programmer authorization, proximity requirements" },
        { id: "med4_implant_encrypt", label: "Test implant encryption — communication confidentiality, key management" },
        { id: "med4_implant_dos", label: "Assess DoS susceptibility — battery drain, communication disruption, safety impact" },
      ]},
      { id: "med4_iomt", label: "IoMT & Connected Health Device Testing", children: [
        { id: "med4_iomt_auth", label: "Test IoMT device authentication — default credentials, weak auth, hardcoded passwords" },
        { id: "med4_iomt_firmware", label: "Test IoMT firmware security — extraction, analysis, known vulnerabilities, update mechanism" },
        { id: "med4_iomt_cloud", label: "Test IoMT cloud connectivity — API security, data transmission, cloud storage security" },
        { id: "med4_iomt_bluetooth", label: "Test IoMT Bluetooth security — pairing, encryption, data exposure, GATT enumeration" },
      ]}
    ]
  },
  {
    id: "med_phase5", icon: "fas fa-microchip", label: "PHASE 5: Firmware Analysis & Embedded System Security", severity: "critical",
    children: [
      { id: "med5_extract", label: "Firmware Extraction", children: [
        { id: "med5_extract_update", label: "Extract from firmware updates — manufacturer downloads, OTA captures, update packages" },
        { id: "med5_extract_jtag", label: "Extract via JTAG/SWD — debug port access, flash memory dump, chip-off if necessary" },
        { id: "med5_extract_uart", label: "Extract via UART — console access, bootloader commands, download mode" },
        { id: "med5_extract_network", label: "Extract via network — TFTP, FTP, HTTP firmware download, update mechanism abuse" },
      ]},
      { id: "med5_analysis", label: "Firmware Analysis", children: [
        { id: "med5_fs", label: "Analyze firmware filesystem — squashfs, cramfs, JFFS2, binwalk extraction, custom formats" },
        { id: "med5_binaries", label: "Analyze binaries — architecture identification, disassembly, decompilation, string analysis" },
        { id: "med5_secrets", label: "Search for secrets — hardcoded credentials, API keys, certificates, encryption keys" },
        { id: "med5_vulns", label: "Identify vulnerabilities — buffer overflows, command injection, insecure crypto, backdoors" },
        { id: "med5_dependencies", label: "Identify third-party components — libraries, SDKs, OS, known CVEs in dependencies" },
      ]},
      { id: "med5_secure_boot", label: "Secure Boot & Update Assessment", children: [
        { id: "med5_boot_auth", label: "Test secure boot — signature verification, chain of trust, root of trust" },
        { id: "med5_update_sign", label: "Test update signing — firmware signature verification, certificate validation" },
        { id: "med5_update_downgrade", label: "Test update downgrade — rollback protection, version checks, old vulnerability reintroduction" },
        { id: "med5_update_mitm", label: "Test update MITM — update server impersonation, modified firmware delivery" },
      ]}
    ]
  },
  {
    id: "med_phase6", icon: "fas fa-exclamation-triangle", label: "PHASE 6: Patient Safety & Clinical Impact Assessment", severity: "critical",
    children: [
      { id: "med6_safety", label: "Patient Safety Impact Analysis", children: [
        { id: "med6_safety_scenarios", label: "Develop safety scenarios — what-if analysis, failure modes, attack trees for patient harm" },
        { id: "med6_safety_network", label: "Test network-based safety impact — device malfunction via network, remote manipulation" },
        { id: "med6_safety_data", label: "Test data integrity impact — altered vitals, incorrect lab results, wrong medication dosing" },
        { id: "med6_safety_availability", label: "Test availability impact — device unavailability, service disruption, clinical workflow impact" },
        { id: "med6_safety_cascade", label: "Test cascade failure impact — one compromised device affecting others, network-wide impact" },
      ]},
      { id: "med6_hipaa", label: "HIPAA & Privacy Assessment", children: [
        { id: "med6_phi_exposure", label: "Assess PHI exposure — patient data in logs, network traffic, device storage, backups" },
        { id: "med6_phi_encryption", label: "Test PHI encryption — at rest on device, in transit over network, in backups" },
        { id: "med6_phi_access", label: "Test PHI access controls — role-based access, minimum necessary, audit logging" },
        { id: "med6_phi_audit", label: "Review audit logging — access tracking, breach detection, log integrity, retention" },
      ]},
      { id: "med6_clinical", label: "Clinical Workflow Impact", children: [
        { id: "med6_workflow_disruption", label: "Assess workflow disruption — device downtime impact on patient care, manual workarounds" },
        { id: "med6_data_integrity", label: "Assess data integrity impact — incorrect data in EMR, lab results, medication orders" },
        { id: "med6_alarm_fatigue", label: "Assess alarm manipulation — false alarms, alarm suppression, clinical response impact" },
        { id: "med6_training", label: "Assess staff training impact — security awareness for clinical staff, incident reporting" },
      ]}
    ]
  },
  {
    id: "med_phase7", icon: "fas fa-shield-alt", label: "PHASE 7: Healthcare Network Security & EMR Integration", severity: "high",
    children: [
      { id: "med7_emr", label: "EMR/EHR System Security", children: [
        { id: "med7_emr_auth", label: "Test EMR authentication — SSO, MFA, role-based access, session management" },
        { id: "med7_emr_api", label: "Test EMR API — FHIR endpoints, data access, authorization, rate limiting" },
        { id: "med7_emr_integration", label: "Test EMR integrations — device data ingestion, lab results, pharmacy orders" },
        { id: "med7_emr_audit", label: "Test EMR audit logging — access logging, data modification tracking, breach detection" },
      ]},
      { id: "med7_clinical_network", label: "Clinical Network Security", children: [
        { id: "med7_clinical_seg", label: "Test clinical network segmentation — separation from corporate, medical device network isolation" },
        { id: "med7_clinical_access", label: "Test clinical network access control — device authentication, user authentication, authorization" },
        { id: "med7_clinical_monitor", label: "Test clinical network monitoring — visibility, anomaly detection, protocol analysis" },
        { id: "med7_clinical_backup", label: "Test clinical data backup — encryption, integrity, recovery, testing" },
      ]},
      { id: "med7_telehealth", label: "Telehealth & Remote Care Security", children: [
        { id: "med7_telehealth_platform", label: "Test telehealth platform — video conferencing security, authentication, encryption" },
        { id: "med7_telehealth_data", label: "Test telehealth data — session recording security, data storage, transmission" },
        { id: "med7_telehealth_device", label: "Test remote monitoring devices — home health devices, wearables, data transmission security" },
      ]}
    ]
  },
  {
    id: "med_phase8", icon: "fas fa-file-export", label: "PHASE 8: Reporting, Remediation & Compliance Mapping", severity: "info",
    children: [
      { id: "med8_report", label: "Comprehensive Security Report", children: [
        { id: "med8_exec", label: "Executive summary — device security posture, patient safety risks, business impact" },
        { id: "med8_network", label: "Network findings — segmentation, protocol security, access control vulnerabilities" },
        { id: "med8_device", label: "Device findings — firmware, authentication, data security, communication vulnerabilities" },
        { id: "med8_safety", label: "Safety impact analysis — potential for patient harm, likelihood, severity, mitigations" },
        { id: "med8_privacy", label: "Privacy findings — PHI exposure, HIPAA compliance, data protection gaps" },
        { id: "med8_clinical", label: "Clinical impact findings — workflow disruption, data integrity, EMR integration" },
      ]},
      { id: "med8_remediation", label: "Remediation & Recommendations", children: [
        { id: "med8_seg", label: "Recommend network improvements — segmentation, monitoring, access control enhancement" },
        { id: "med8_patch", label: "Recommend patching strategy — firmware updates, vulnerability management, EOL device replacement" },
        { id: "med8_compensating", label: "Recommend compensating controls — when patches unavailable, network isolation, monitoring" },
        { id: "med8_procurement", label: "Recommend procurement security — security requirements for new devices, vendor assessment" },
      ]},
      { id: "med8_compliance", label: "Compliance & Standards Mapping", children: [
        { id: "med8_fda_map", label: "Map to FDA guidance — premarket, postmarket, vulnerability disclosure requirements" },
        { id: "med8_hipaa_map", label: "Map to HIPAA — security rule, privacy rule, breach notification requirements" },
        { id: "med8_iec_map", label: "Map to IEC 80001 — risk management, IT network security requirements" },
        { id: "med8_nist_map", label: "Map to NIST guidelines — NISTIR 8228, NIST SP 800-53, healthcare cybersecurity framework" },
      ]}
    ]
  }
];
