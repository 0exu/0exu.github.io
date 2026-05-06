window.CHECKLIST_AUTOMOTIVE = [
  {
    id: "auto_phase1", icon: "fas fa-info-circle", label: "PHASE 1: Engagement Planning & Rules of Engagement", severity: "info",
    children: [
      { id: "auto1_scope", label: "Engagement Scope Definition", children: [
        { id: "auto1_auth", label: "Obtain written authorization from manufacturer/owner — signed RoE document" },
        { id: "auto1_vehicles", label: "Document target vehicles — make, model, year, trim, VIN, firmware versions" },
        { id: "auto1_safety", label: "Define safety parameters — CRITICAL: stationary testing only, no driving, emergency stop procedures" },
        { id: "auto1_rules", label: "Define rules of engagement — in-scope ECUs, prohibited actions, testing windows" },
        { id: "auto1_contacts", label: "Establish emergency contacts — vehicle owner, manufacturer security team, safety officer" },
      ]},
      { id: "auto1_env", label: "Test Environment Preparation", children: [
        { id: "auto1_garage", label: "Setup isolated test environment — garage, dyno, or test track with no public road access" },
        { id: "auto1_network_iso", label: "Isolate vehicle networks — prevent any external connectivity during testing" },
        { id: "auto1_equipment", label: "Prepare equipment — CAN bus tools (SocketCAN, CANalyzer), OBD-II adapters, SDR, logic analyzers" },
        { id: "auto1_backup", label: "Backup ECU firmware — create full backups before any modification" },
        { id: "auto1_recovery", label: "Prepare recovery procedures — known-good firmware images, reflashing tools" },
      ]},
      { id: "auto1_docs", label: "Documentation & Intelligence Gathering", children: [
        { id: "auto1_service_manuals", label: "Gather service manuals — wiring diagrams, connector pinouts, diagnostic procedures" },
        { id: "auto1_can_db", label: "Obtain CAN databases — DBC files, signal definitions, message ID mappings" },
        { id: "auto1_fcc_filings", label: "Review FCC filings — RF transmitters, antennas, frequency bands used" },
        { id: "auto1_recalls", label: "Research recalls and TSBs — known vulnerabilities, manufacturer bulletins" },
        { id: "auto1_cve", label: "Search for known CVEs — vehicle-specific vulnerabilities, aftermarket component CVEs" },
      ]}
    ]
  },
  {
    id: "auto_phase2", icon: "fas fa-sitemap", label: "PHASE 2: Vehicle Architecture Mapping & ECU Enumeration", severity: "info",
    children: [
      { id: "auto2_ecu_map", label: "ECU Enumeration & Mapping", children: [
        { id: "auto2_ecu_powertrain", label: "Enumerate powertrain ECUs — ECM, TCM, ABS, ESP, transmission control" },
        { id: "auto2_ecu_body", label: "Enumerate body ECUs — BCM, door modules, seat controls, climate, lighting" },
        { id: "auto2_ecu_chassis", label: "Enumerate chassis ECUs — steering, suspension, brake control, tire pressure" },
        { id: "auto2_ecu_infotainment", label: "Enumerate infotainment ECUs — head unit, amplifier, display, navigation" },
        { id: "auto2_ecu_adas", label: "Enumerate ADAS ECUs — radar, camera, ultrasonic sensors, LIDAR, autopilot" },
        { id: "auto2_ecu_gateway", label: "Identify gateway ECU — central routing, firewall between bus segments" },
      ]},
      { id: "auto2_bus_map", label: "Vehicle Bus Network Mapping", children: [
        { id: "auto2_can_hs", label: "Map high-speed CAN — powertrain, chassis, 500kbps, OBD-II pins 6/14" },
        { id: "auto2_can_ls", label: "Map low-speed CAN — body, comfort, 125kbps, fault-tolerant" },
        { id: "auto2_lin", label: "Map LIN buses — windows, mirrors, wipers, single-wire, master-slave" },
        { id: "auto2_flexray", label: "Map FlexRay — drive-by-wire, steering, deterministic time-triggered" },
        { id: "auto2_most", label: "Map MOST bus — multimedia, optical fiber, ring topology" },
        { id: "auto2_eth", label: "Map Automotive Ethernet — 100BASE-T1, 1000BASE-T1, ADAS cameras, infotainment" },
      ]},
      { id: "auto2_external", label: "External Attack Surface Mapping", children: [
        { id: "auto2_bt", label: "Map Bluetooth interfaces — hands-free, media streaming, keyless entry" },
        { id: "auto2_wifi", label: "Map WiFi interfaces — hotspot, OTA updates, diagnostic WiFi" },
        { id: "auto2_cellular", label: "Map cellular interfaces — eCall, telematics, remote services, 4G/5G modem" },
        { id: "auto2_usb", label: "Map USB ports — charging, media, diagnostic, OTA update ports" },
        { id: "auto2_tpms", label: "Map TPMS sensors — frequency (315/433 MHz), protocol, sensor IDs" },
        { id: "auto2_keyless", label: "Map keyless entry system — frequency, protocol, rolling code implementation" },
      ]}
    ]
  },
  {
    id: "auto_phase3", icon: "fas fa-network-wired", label: "PHASE 3: In-Vehicle Network Assessment", severity: "critical",
    children: [
      { id: "auto3_can_sniff", label: "CAN Bus Passive Analysis", children: [
        { id: "auto3_can_capture", label: "Capture CAN traffic — message IDs, DLC, data bytes, frequency analysis" },
        { id: "auto3_can_reverse", label: "Reverse engineer CAN signals — DBC file creation, signal mapping, bit-level analysis" },
        { id: "auto3_can_classification", label: "Classify CAN messages — periodic, event-driven, diagnostic, multi-frame" },
        { id: "auto3_can_critical", label: "Identify critical messages — braking, steering, acceleration, airbag deployment" },
        { id: "auto3_can_diag", label: "Analyze diagnostic traffic — UDS services, session control, security access" },
      ]},
      { id: "auto3_can_attack", label: "CAN Bus Active Testing", children: [
        { id: "auto3_can_inject", label: "Test message injection — spoof sensor data, actuator commands (STATIONARY)" },
        { id: "auto3_can_replay", label: "Test replay attacks — capture and replay critical messages, timing analysis" },
        { id: "auto3_can_fuzz", label: "Test CAN fuzzing — malformed frames, invalid DLC, boundary values, DoS" },
        { id: "auto3_can_dos", label: "Test CAN bus DoS — bus-off attacks, message flooding, priority inversion" },
        { id: "auto3_can_uds", label: "Test UDS diagnostic services — 0x10 session, 0x27 security access, 0x31 routine control" },
      ]},
      { id: "auto3_other_buses", label: "Other Bus Protocol Assessment", children: [
        { id: "auto3_lin_test", label: "LIN bus testing — master frame injection, slave response manipulation" },
        { id: "auto3_flexray_test", label: "FlexRay testing — slot allocation manipulation, static/dynamic segment attacks" },
        { id: "auto3_most_test", label: "MOST bus testing — optical signal injection, control channel manipulation" },
        { id: "auto3_eth_test", label: "Automotive Ethernet testing — SOME/IP fuzzing, DoIP attacks, service discovery abuse" },
        { id: "auto3_obd2_test", label: "OBD-II testing — standard PIDs, manufacturer-specific modes, diagnostic session abuse" },
      ]},
      { id: "auto3_gateway", label: "Gateway & Segmentation Assessment", children: [
        { id: "auto3_gw_filter", label: "Test gateway message filtering — allowed/blocked message IDs, routing rules" },
        { id: "auto3_gw_bypass", label: "Test gateway bypass — direct physical access to critical bus segments" },
        { id: "auto3_gw_dos", label: "Test gateway DoS — message storm generation, queue exhaustion" },
        { id: "auto3_gw_secoc", label: "Test SecOC implementation — message authentication, freshness values, MAC verification" },
      ]}
    ]
  },
  {
    id: "auto_phase4", icon: "fas fa-broadcast-tower", label: "PHASE 4: Wireless & RF Attack Surface Testing", severity: "critical",
    children: [
      { id: "auto4_keyless", label: "Keyless Entry & Immobilizer Testing", children: [
        { id: "auto4_relay", label: "Test relay attack — amplify key fob signal from house to vehicle, measure distance" },
        { id: "auto4_rolljam", label: "Test roll jam attack — capture rolling codes, delay transmission, replay" },
        { id: "auto4_crypto_key", label: "Analyze key fob cryptography — AES, HITAG, KeeLoq, proprietary algorithms" },
        { id: "auto4_immobilizer", label: "Test immobilizer system — transponder cloning, ECU communication bypass" },
        { id: "auto4_digital_key", label: "Test digital key systems — BLE, UWB, NFC, CCC Digital Key specification" },
      ]},
      { id: "auto4_tpms", label: "TPMS Security Assessment", children: [
        { id: "auto4_tpms_spoof", label: "Test TPMS spoofing — forge sensor messages, fake pressure/temperature readings" },
        { id: "auto4_tpms_replay", label: "Test TPMS replay — capture and replay valid sensor transmissions" },
        { id: "auto4_tpms_dos", label: "Test TPMS DoS — signal jamming, sensor battery drain attacks" },
        { id: "auto4_tpms_crypto", label: "Analyze TPMS security — rolling codes, encryption, message authentication" },
      ]},
      { id: "auto4_rds_gnss", label: "RDS, GNSS & RF Testing", children: [
        { id: "auto4_rds", label: "Test RDS/TMC injection — traffic info manipulation, station name spoofing" },
        { id: "auto4_gnss_spoof", label: "Test GNSS spoofing — GPS/GLONASS/Galileo signal manipulation, navigation disruption" },
        { id: "auto4_gnss_jam", label: "Assess GNSS jamming impact — ADAS degradation, navigation failure" },
        { id: "auto4_sdr_scan", label: "SDR spectrum scan — identify all RF emissions from vehicle, undocumented transmitters" },
      ]},
      { id: "auto4_infotainment", label: "Infotainment & Wireless Interfaces", children: [
        { id: "auto4_bt_scan", label: "Bluetooth security scan — service enumeration, pairing vulnerability, PBAP/HFP/MAP exposure" },
        { id: "auto4_wifi_scan", label: "WiFi security assessment — WPS, weak PSK, captive portal bypass, AP isolation" },
        { id: "auto4_cellular", label: "Cellular modem assessment — eCall security, SMS command injection, baseband vulnerabilities" },
        { id: "auto4_usb_attack", label: "USB attack surface — malicious USB device, BadUSB, charging port data access" },
      ]}
    ]
  },
  {
    id: "auto_phase5", icon: "fas fa-mobile-alt", label: "PHASE 5: Telematics, Companion App & Cloud API Testing", severity: "critical",
    children: [
      { id: "auto5_telematics", label: "Telematics System Assessment", children: [
        { id: "auto5_tele_enum", label: "Enumerate telematics services — OnStar, BMW ConnectedDrive, Mercedes me, Tesla API" },
        { id: "auto5_tele_auth", label: "Test telematics authentication — token management, session handling, OAuth flow" },
        { id: "auto5_tele_commands", label: "Test remote commands — unlock, start, climate control, location tracking" },
        { id: "auto5_tele_data", label: "Test telematics data exposure — location history, driving patterns, vehicle diagnostics" },
        { id: "auto5_tele_api", label: "Test telematics API — rate limiting, authorization bypass, parameter manipulation" },
      ]},
      { id: "auto5_app", label: "Companion Mobile App Testing", children: [
        { id: "auto5_app_re", label: "Reverse engineer mobile app — API endpoints, authentication tokens, hardcoded secrets" },
        { id: "auto5_app_traffic", label: "Intercept app traffic — MITM proxy, API call analysis, certificate pinning bypass" },
        { id: "auto5_app_storage", label: "Test app local storage — plaintext tokens, sensitive data in logs, keychain access" },
        { id: "auto5_app_auth", label: "Test app authentication — biometric bypass, token replay, session fixation" },
        { id: "auto5_app_share", label: "Test vehicle sharing features — digital key sharing, access revocation, permission escalation" },
      ]},
      { id: "auto5_cloud", label: "Cloud Backend & API Assessment", children: [
        { id: "auto5_cloud_api", label: "Test vehicle cloud API — REST/GraphQL endpoints, authentication, authorization" },
        { id: "auto5_cloud_data", label: "Test cloud data exposure — user data, vehicle telemetry, location data, diagnostics" },
        { id: "auto5_cloud_auth", label: "Test cloud authentication — JWT validation, OAuth flows, token refresh" },
        { id: "auto5_cloud_mqtt", label: "Test MQTT/IoT protocols — message broker access, topic subscription, command injection" },
      ]}
    ]
  },
  {
    id: "auto_phase6", icon: "fas fa-microchip", label: "PHASE 6: ECU Firmware Extraction & Reverse Engineering", severity: "critical",
    children: [
      { id: "auto6_extract", label: "Firmware Extraction Methods", children: [
        { id: "auto6_jtag", label: "JTAG/SWD extraction — debug port access, memory dump, flash readout" },
        { id: "auto6_bootloader", label: "Bootloader extraction — UART console, download mode, factory debug" },
        { id: "auto6_diag_extract", label: "Diagnostic extraction — UDS readMemoryByAddress, flash readout via OBD-II" },
        { id: "auto6_chip_off", label: "Chip-off extraction — desolder flash chip, external programmer readout" },
        { id: "auto6_ota_capture", label: "OTA update capture — intercept firmware updates, extract payload" },
      ]},
      { id: "auto6_analysis", label: "Firmware Analysis", children: [
        { id: "auto6_fs", label: "Analyze firmware filesystem — squashfs, JFFS2, custom formats, binwalk extraction" },
        { id: "auto6_binaries", label: "Analyze binaries — architecture identification, disassembly, decompilation" },
        { id: "auto6_secrets", label: "Search for secrets — hardcoded keys, passwords, certificates, API tokens" },
        { id: "auto6_comm_protocols", label: "Analyze communication protocols — custom protocols, encryption, authentication" },
        { id: "auto6_vulns", label: "Identify vulnerabilities — buffer overflows, format strings, command injection, insecure crypto" },
      ]},
      { id: "auto6_bootloader_sec", label: "Bootloader & Secure Boot Assessment", children: [
        { id: "auto6_boot_auth", label: "Test bootloader authentication — signature verification, certificate validation" },
        { id: "auto6_boot_secure", label: "Test secure boot — chain of trust, root of trust, key provisioning" },
        { id: "auto6_boot_recovery", label: "Test recovery mode — unauthorized firmware flashing, debug mode activation" },
        { id: "auto6_boot_debug", label: "Test debug interfaces — UART shell, factory mode, engineering backdoor" },
      ]}
    ]
  },
  {
    id: "auto_phase7", icon: "fas fa-robot", label: "PHASE 7: ADAS & Autonomous System Security", severity: "critical",
    children: [
      { id: "auto7_camera", label: "Camera & Vision System Testing", children: [
        { id: "auto7_cam_spoof", label: "Test camera spoofing — projected images, adversarial patterns, optical attacks" },
        { id: "auto7_cam_laser", label: "Test camera blinding — laser照射, sensor saturation, temporary blindness" },
        { id: "auto7_cam_data", label: "Test camera data stream — raw video access, frame manipulation, timestamp spoofing" },
      ]},
      { id: "auto7_radar_lidar", label: "Radar & LIDAR Testing", children: [
        { id: "auto7_radar_spoof", label: "Test radar spoofing — false object generation, range manipulation, Doppler shift" },
        { id: "auto7_radar_jam", label: "Test radar jamming — signal interference, noise injection, detection degradation" },
        { id: "auto7_lidar_spoof", label: "Test LIDAR spoofing — phantom object creation, distance manipulation, pulse timing" },
        { id: "auto7_lidar_jam", label: "Test LIDAR jamming — ambient light interference, laser noise injection" },
      ]},
      { id: "auto7_ultrasonic", label: "Ultrasonic Sensor Testing", children: [
        { id: "auto7_us_spoof", label: "Test ultrasonic spoofing — fake echo generation, distance manipulation" },
        { id: "auto7_us_jam", label: "Test ultrasonic jamming — continuous wave interference, sensor saturation" },
      ]},
      { id: "auto7_decision", label: "ADAS Decision System Testing", children: [
        { id: "auto7_sensor_fusion", label: "Test sensor fusion — conflicting sensor data, decision logic manipulation" },
        { id: "auto7_ml_model", label: "Test ML model robustness — adversarial inputs, model poisoning, evasion" },
        { id: "auto7_override", label: "Test safety override — driver intervention detection, fail-safe mechanisms" },
      ]}
    ]
  },
  {
    id: "auto_phase8", icon: "fas fa-file-export", label: "PHASE 8: Reporting, Remediation & Compliance", severity: "info",
    children: [
      { id: "auto8_report", label: "Comprehensive Security Report", children: [
        { id: "auto8_exec", label: "Executive summary — vehicle security posture, safety implications, risk rating" },
        { id: "auto8_network", label: "Network findings — CAN bus, gateway, bus segmentation vulnerabilities" },
        { id: "auto8_wireless", label: "Wireless findings — keyless, TPMS, Bluetooth, WiFi, cellular vulnerabilities" },
        { id: "auto8_firmware", label: "Firmware findings — ECU vulnerabilities, bootloader, secure boot, OTA" },
        { id: "auto8_cloud", label: "Cloud/telematics findings — API, app, backend, data exposure vulnerabilities" },
        { id: "auto8_adas", label: "ADAS findings — sensor attacks, spoofing, ML model vulnerabilities" },
      ]},
      { id: "auto8_remediation", label: "Remediation & Recommendations", children: [
        { id: "auto8_secoc", label: "Recommend SecOC implementation — message authentication, freshness values" },
        { id: "auto8_seg", label: "Recommend network segmentation — critical bus isolation, gateway hardening" },
        { id: "auto8_crypto", label: "Recommend cryptographic improvements — key management, secure boot, OTA signing" },
        { id: "auto8_monitoring", label: "Recommend IDS/monitoring — CAN bus IDS, anomaly detection, security logging" },
      ]},
      { id: "auto8_compliance", label: "Compliance & Standards Mapping", children: [
        { id: "auto8_iso21434", label: "Map to ISO/SAE 21434 — road vehicle cybersecurity engineering standard" },
        { id: "auto8_unr155", label: "Map to UN R155/WP.29 — cybersecurity management system requirements" },
        { id: "auto8_iso26262", label: "Map to ISO 26262 — functional safety, security-safety interaction" },
        { id: "auto8_autoisar", label: "Map to AutoSAR — secure communication, crypto stack, secure boot" },
      ]}
    ]
  }
];
