window.CHECKLIST_MEDICAL = [
  {
    id: "med_phase1", icon: "fas fa-info-circle", label: "PHASE 1: Medical Device Intelligence & Architecture", severity: "info",
    children: [
      { id: "med1_scope", label: "Engagement Setup", children: [
        { id: "med1_auth", label: "Obtain authorization from healthcare facility/device manufacturer" },
        { id: "med1_devices", label: "Document target devices — infusion pumps, ventilators, imaging, monitors" },
        { id: "med1_safety", label: "Define safety parameters — CRITICAL: patient safety paramount, isolated testing only" },
        { id: "med1_equipment", label: "Prepare equipment — SDR, protocol analyzers, test equipment, isolation tools" },
        { id: "med1_regulatory", label: "Understand regulatory context — FDA guidance, IEC 80001, HIPAA" },
      ]},
      { id: "med1_recon", label: "Device Intelligence", children: [
        { id: "med1_asset_inv", label: "Inventory medical devices — make, model, firmware, network connectivity" },
        { id: "med1_network_map", label: "Map medical device network — segmentation, VLANs, medical network" },
        { id: "med1_protocols", label: "Identify protocols — DICOM, HL7, FHIR, IEEE 11073, proprietary" },
        { id: "med1_docs", label: "Gather documentation — user manuals, service manuals, FCC filings" },
        { id: "med1_vulns", label: "Research known vulnerabilities — CVEs, FDA recalls, ICS-CERT advisories" },
      ]}
    ]
  },
  {
    id: "med_phase2", icon: "fas fa-network-wired", label: "PHASE 2: Medical Network & Protocol Assessment", severity: "critical",
    children: [
      { id: "med2_network", label: "Medical Network Security", children: [
        { id: "med2_segmentation", label: "Test network segmentation — medical network vs. clinical vs. admin" },
        { id: "med2_nac", label: "Test NAC enforcement — device authentication, posture checking" },
        { id: "med2_monitoring", label: "Assess monitoring — medical device visibility, anomaly detection" },
        { id: "med2_wireless", label: "Test medical WiFi — WPA2-Enterprise, device onboarding, isolation" },
        { id: "med2_bluetooth", label: "Test medical Bluetooth — pairing, encryption, data exposure" },
      ]},
      { id: "med2_dicom", label: "DICOM Assessment", children: [
        { id: "med2_dicom_enum", label: "Enumerate DICOM servers — AE titles, ports, modalities" },
        { id: "med2_dicom_auth", label: "Test DICOM authentication — often none, anonymous access" },
        { id: "med2_dicom_data", label: "Test DICOM data exposure — PHI in images, study retrieval" },
        { id: "med2_dicom_injection", label: "Test DICOM injection — malicious DICOM files, buffer overflow" },
        { id: "med2_dicom_fuzz", label: "Test DICOM fuzzing — malformed DICOM objects, protocol abuse" },
      ]},
      { id: "med2_hl7", label: "HL7/FHIR Assessment", children: [
        { id: "med2_hl7_enum", label: "Enumerate HL7 interfaces — MLLP ports, message types" },
        { id: "med2_hl7_auth", label: "Test HL7 authentication — message authentication, integrity" },
        { id: "med2_hl7_injection", label: "Test HL7 injection — malicious ADT/ORM messages" },
        { id: "med2_fhir_auth", label: "Test FHIR API — OAuth, SMART on FHIR, data access control" },
        { id: "med2_fhir_data", label: "Test FHIR data access — patient data exposure, authorization bypass" },
      ]}
    ]
  },
  {
    id: "med_phase3", icon: "fas fa-heartbeat", label: "PHASE 3: Medical Device Security Testing", severity: "critical",
    children: [
      { id: "med3_infusion", label: "Infusion Pump Assessment", children: [
        { id: "med3_infusion_auth", label: "Test infusion pump authentication — drug library access, admin mode" },
        { id: "med3_infusion_dose", label: "Test dose programming — unauthorized dose modification (SIMULATED)" },
        { id: "med3_infusion_wireless", label: "Test wireless infusion pump — wireless protocol security" },
        { id: "med3_infusion_update", label: "Test firmware update — integrity check, authentication" },
      ]},
      { id: "med3_imaging", label: "Imaging Device Assessment", children: [
        { id: "med3_imaging_os", label: "Identify imaging device OS — Windows version, patch level" },
        { id: "med3_imaging_network", label: "Test imaging device network — exposed services, default credentials" },
        { id: "med3_imaging_data", label: "Test imaging data security — PACS access, image encryption" },
        { id: "med3_imaging_usb", label: "Test USB ports — unauthorized USB access, malware introduction" },
      ]},
      { id: "med3_pacemaker", label: "Implantable Device Assessment", children: [
        { id: "med3_pacemaker_comm", label: "Analyze implant communication — RF protocols, programming" },
        { id: "med3_pacemaker_auth", label: "Test implant authentication — programmer authorization" },
        { id: "med3_pacemaker_encryption", label: "Test implant encryption — communication confidentiality" },
        { id: "med3_pacemaker_dos", label: "Assess DoS susceptibility — battery drain, communication disruption" },
      ]},
      { id: "med3_iomt", label: "IoMT Device Assessment", children: [
        { id: "med3_iomt_auth", label: "Test IoMT device authentication — default credentials, weak auth" },
        { id: "med3_iomt_firmware", label: "Test IoMT firmware — extraction, analysis, known vulnerabilities" },
        { id: "med3_iomt_update", label: "Test IoMT update mechanism — security, integrity, authentication" },
        { id: "med3_iomt_data", label: "Test IoMT data security — patient data in transit and at rest" },
      ]}
    ]
  },
  {
    id: "med_phase4", icon: "fas fa-exclamation-triangle", label: "PHASE 4: Safety & Clinical Impact Assessment", severity: "critical",
    children: [
      { id: "med4_safety", label: "Patient Safety Impact", children: [
        { id: "med4_safety_analysis", label: "Perform safety analysis — what-if scenarios, failure modes" },
        { id: "med4_safety_network", label: "Test network-based safety impact — device malfunction via network" },
        { id: "med4_safety_data", label: "Test data integrity impact — altered vitals, incorrect lab results" },
        { id: "med4_safety_availability", label: "Test availability impact — device unavailability, service disruption" },
      ]},
      { id: "med4_hipaa", label: "HIPAA & Privacy Assessment", children: [
        { id: "med4_hipaa_phi", label: "Assess PHI exposure — patient data in logs, network traffic, storage" },
        { id: "med4_hipaa_encryption", label: "Test PHI encryption — at rest and in transit" },
        { id: "med4_hipaa_access", label: "Test PHI access controls — role-based, minimum necessary" },
        { id: "med4_hipaa_audit", label: "Review audit logging — access tracking, breach detection" },
      ]}
    ]
  },
  {
    id: "med_phase5", icon: "fas fa-file-export", label: "PHASE 5: Reporting & Compliance", severity: "info",
    children: [
      { id: "med5_report", label: "Medical Device Security Report", children: [
        { id: "med5_summary", label: "Executive summary — device security posture, patient safety risks" },
        { id: "med5_findings", label: "Vulnerability findings — network, protocol, device, data security" },
        { id: "med5_safety_impact", label: "Safety impact analysis — potential for patient harm, likelihood" },
        { id: "med5_remediation", label: "Remediation — segmentation, patching, monitoring, compensating controls" },
        { id: "med5_compliance", label: "Compliance mapping — FDA guidance, IEC 80001, HIPAA, NIST" },
      ]}
    ]
  }
];
