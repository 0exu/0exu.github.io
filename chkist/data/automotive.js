window.CHECKLIST_AUTOMOTIVE = [
  {
    id: "auto_phase1", icon: "fas fa-info-circle", label: "PHASE 1: Vehicle Intelligence & Architecture Mapping", severity: "info",
    children: [
      { id: "auto1_scope", label: "Engagement Setup", children: [
        { id: "auto1_auth", label: "Obtain authorization from manufacturer/owner — written consent required" },
        { id: "auto1_vehicles", label: "Document target vehicles — make, model, year, trim, VIN" },
        { id: "auto1_safety", label: "Define safety parameters — CRITICAL: no driving during testing, stationary only" },
        { id: "auto1_equipment", label: "Prepare equipment — CAN bus tools, OBD-II adapters, SDR, laptop" },
        { id: "auto1_environment", label: "Setup test environment — garage, dyno, test track, isolated network" },
      ]},
      { id: "auto1_recon", label: "Vehicle Architecture Analysis", children: [
        { id: "auto1_ecu_enum", label: "Enumerate ECUs — powertrain, body, chassis, infotainment, ADAS" },
        { id: "auto1_network_map", label: "Map vehicle networks — CAN, LIN, FlexRay, MOST, Automotive Ethernet" },
        { id: "auto1_external", label: "Map external attack surface — Bluetooth, WiFi, cellular, USB, TPMS" },
        { id: "auto1_telematics", label: "Identify telematics systems — OnStar, BMW ConnectedDrive, Tesla API" },
        { id: "auto1_docs", label: "Gather documentation — service manuals, CAN databases, DBC files" },
        { id: "auto1_firmware", label: "Identify firmware versions — ECU firmware, infotainment, gateway" },
      ]}
    ]
  },
  {
    id: "auto_phase2", icon: "fas fa-network-wired", label: "PHASE 2: In-Vehicle Network Assessment", severity: "critical",
    children: [
      { id: "auto2_can", label: "CAN Bus Assessment", children: [
        { id: "auto2_can_enum", label: "Enumerate CAN buses — high-speed, low-speed, powertrain, body" },
        { id: "auto2_can_sniff", label: "Sniff CAN traffic — message IDs, data length, frequency analysis" },
        { id: "auto2_can_reverse", label: "Reverse engineer CAN messages — DBC file creation, signal mapping" },
        { id: "auto2_can_inject", label: "Test CAN injection — spoof messages, replay attacks, DoS (STATIONARY)" },
        { id: "auto2_can_fuzz", label: "Test CAN fuzzing — malformed messages, boundary values" },
        { id: "auto2_can_seg", label: "Test CAN segmentation — gateway filtering, critical bus isolation" },
      ]},
      { id: "auto2_other_buses", label: "Other Vehicle Bus Assessment", children: [
        { id: "auto2_lin", label: "LIN bus assessment — master/slave communication, message injection" },
        { id: "auto2_flexray", label: "FlexRay assessment — deterministic communication, slot allocation" },
        { id: "auto2_most", label: "MOST bus assessment — multimedia network, optical fiber" },
        { id: "auto2_eth", label: "Automotive Ethernet — SOME/IP, DoIP, service discovery, routing" },
        { id: "auto2_obd2", label: "OBD-II assessment — standard PIDs, manufacturer-specific, diagnostic services" },
      ]},
      { id: "auto2_gateway", label: "Gateway & Bridge Assessment", children: [
        { id: "auto2_gw_filter", label: "Test gateway filtering — message filtering between bus segments" },
        { id: "auto2_gw_bypass", label: "Test gateway bypass — direct access to critical buses" },
        { id: "auto2_gw_dos", label: "Test gateway DoS — bus flooding, message storms" },
      ]}
    ]
  },
  {
    id: "auto_phase3", icon: "fas fa-broadcast-tower", label: "PHASE 3: Wireless & External Interface Testing", severity: "critical",
    children: [
      { id: "auto3_keyless", label: "Keyless Entry & Immobilizer", children: [
        { id: "auto3_keyless_relay", label: "Test relay attack — amplify key fob signal for unauthorized entry" },
        { id: "auto3_keyless_rolljam", label: "Test roll jam attack — capture and delay rolling code" },
        { id: "auto3_keyless_crypto", label: "Test crypto strength — key fob encryption, authentication" },
        { id: "auto3_immobilizer", label: "Test immobilizer bypass — transponder cloning, ECU communication" },
      ]},
      { id: "auto3_tpms", label: "TPMS Assessment", children: [
        { id: "auto3_tpms_spoof", label: "Test TPMS spoofing — fake sensor messages, pressure manipulation" },
        { id: "auto3_tpms_crypto", label: "Test TPMS authentication — message integrity, replay protection" },
      ]},
      { id: "auto3_infotainment", label: "Infotainment & Telematics", children: [
        { id: "auto3_bt", label: "Bluetooth assessment — pairing, PBAP, HFP, MAP, vulnerability scanning" },
        { id: "auto3_wifi", label: "WiFi assessment — hotspot security, WPS, captive portal" },
        { id: "auto3_cellular", label: "Cellular assessment — eCall, emergency call, remote services" },
        { id: "auto3_usb", label: "USB assessment — malicious USB, charge-only port enforcement" },
        { id: "auto3_app", label: "Test companion app — API authentication, token management, remote control" },
      ]},
      { id: "auto3_sdr", label: "SDR & RF Assessment", children: [
        { id: "auto3_rds", label: "Test RDS/TMC — radio data system injection, traffic info manipulation" },
        { id: "auto3_gnss", label: "Test GNSS spoofing — GPS/GLONASS signal manipulation" },
        { id: "auto3_digital_key", label: "Test digital key — NFC, UWB, BLE digital key security" },
      ]}
    ]
  },
  {
    id: "auto_phase4", icon: "fas fa-car", label: "PHASE 4: ECU & Firmware Security", severity: "critical",
    children: [
      { id: "auto4_ecu", label: "ECU Security Assessment", children: [
        { id: "auto4_ecu_firmware", label: "Extract ECU firmware — JTAG, bootloader, diagnostic interface" },
        { id: "auto4_ecu_re", label: "Reverse engineer ECU firmware — control logic, communication handlers" },
        { id: "auto4_ecu_diag", label: "Test diagnostic services — UDS (ISO 14229), security access, programming" },
        { id: "auto4_ecu_bootloader", label: "Test bootloader security — authentication, firmware validation" },
        { id: "auto4_ecu_crypto", label: "Test ECU cryptographic keys — SecOC, message authentication" },
      ]},
      { id: "auto4_update", label: "OTA Update Assessment", children: [
        { id: "auto4_ota_sign", label: "Test OTA signature verification — firmware signing, certificate validation" },
        { id: "auto4_ota_encryption", label: "Test OTA encryption — download integrity, confidentiality" },
        { id: "auto4_ota_downgrade", label: "Test OTA downgrade — rollback protection, version checks" },
        { id: "auto4_ota_mitm", label: "Test OTA MITM — update server impersonation, modified firmware" },
      ]}
    ]
  },
  {
    id: "auto_phase5", icon: "fas fa-file-export", label: "PHASE 5: Reporting & Compliance", severity: "info",
    children: [
      { id: "auto5_report", label: "Automotive Security Report", children: [
        { id: "auto5_summary", label: "Executive summary — vehicle security posture, safety implications" },
        { id: "auto5_findings", label: "Vulnerability findings — network, wireless, ECU, firmware" },
        { id: "auto5_safety", label: "Safety impact analysis — potential for safety-critical effects" },
        { id: "auto5_remediation", label: "Remediation — architectural improvements, security controls" },
        { id: "auto5_compliance", label: "Compliance mapping — ISO/SAE 21434, UN R155, WP.29" },
      ]}
    ]
  }
];
