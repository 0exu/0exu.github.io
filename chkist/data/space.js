window.CHECKLIST_SPACE = [
  {
    id: "space_phase1", icon: "fas fa-clipboard-check", label: "PHASE 1: Engagement Planning & Space System Discovery", severity: "info",
    children: [
      { id: "space1_scope", label: "Engagement Scope & Authorization", children: [
        { id: "space1_auth", label: "Obtain authorization from satellite operator/space agency — written consent, scope, rules" },
        { id: "space1_systems", label: "Document target systems — satellites, ground stations, TT&C links, payloads, user terminals" },
        { id: "space1_safety", label: "Define safety parameters — CRITICAL: no active interference with operations, passive-only testing" },
        { id: "space1_rules", label: "Define testing rules — in-scope systems, prohibited actions, testing windows, ITAR compliance" },
        { id: "space1_contacts", label: "Establish emergency contacts — operator, manufacturer, space agency, regulatory bodies" },
      ]},
      { id: "space1_orbital", label: "Orbital Intelligence Gathering", children: [
        { id: "space1_tle", label: "Gather orbital data — TLE (Two-Line Element), orbit type (LEO/MEO/GEO), coverage, pass times" },
        { id: "space1_catalog", label: "Query satellite catalogs — NORAD ID, CelesTrak, Space-Track, satellite database" },
        { id: "space1_coverage", label: "Map coverage areas — footprint, ground track, visibility windows, overlapping coverage" },
        { id: "space1_constellation", label: "Analyze constellation — multi-satellite systems, inter-satellite links, redundancy" },
      ]},
      { id: "space1_docs", label: "Documentation & Standards Research", children: [
        { id: "space1_ccsds", label: "Review CCSDS standards — packet telemetry, telecommand, space data link protocols" },
        { id: "space1_freq_db", label: "Check frequency databases — ITU filings, national regulators, frequency assignments" },
        { id: "space1_manufacturer", label: "Research manufacturer docs — satellite bus, payload specs, interface documents" },
        { id: "space1_past_incidents", label: "Research past space incidents — anomalies, hijackings, interference events" },
      ]}
    ]
  },
  {
    id: "space_phase2", icon: "fas fa-sitemap", label: "PHASE 2: Space System Architecture Mapping", severity: "info",
    children: [
      { id: "space2_segments", label: "Segment Identification & Mapping", children: [
        { id: "space2_space_seg", label: "Map space segment — satellites, payloads, transponders, inter-satellite links" },
        { id: "space2_ground_seg", label: "Map ground segment — ground stations, mission control, network operations center" },
        { id: "space2_control_seg", label: "Map control segment — TT&C stations, command centers, telemetry processing" },
        { id: "space2_user_seg", label: "Map user segment — user terminals, receivers, applications, data consumers" },
      ]},
      { id: "space2_links", label: "Communication Link Mapping", children: [
        { id: "space2_uplink", label: "Map uplink links — ground-to-satellite, TT&C commands, frequency, modulation, power" },
        { id: "space2_downlink", label: "Map downlink links — satellite-to-ground, telemetry data, payload data, frequency" },
        { id: "space2_isl", label: "Map inter-satellite links — optical/laser, RF, crosslink protocols, constellation routing" },
        { id: "space2_feeder", label: "Map feeder links — gateway to satellite, high-throughput, broadband satellite internet" },
      ]},
      { id: "space2_protocols", label: "Protocol Identification", children: [
        { id: "space2_ttc_proto", label: "Identify TT&C protocols — CCSDS telecommand, telemetry, space data link protocols" },
        { id: "space2_payload_proto", label: "Identify payload protocols — DVB-S2/S2X, SCPC, TDMA, custom data protocols" },
        { id: "space2_network_proto", label: "Identify network protocols — SCPS (Space Communications Protocol Standards), DTN, CFDP" },
        { id: "space2_custom_proto", label: "Identify custom protocols — proprietary protocols, manufacturer-specific, legacy systems" },
      ]},
      { id: "space2_third_party", label: "Third-Party & Supply Chain Mapping", children: [
        { id: "space2_launch", label: "Identify launch providers — launch vehicle, deployment mechanism, ride-share security" },
        { id: "space2_ground_provider", label: "Identify ground segment providers — GSaaS, antenna leasing, network connectivity" },
        { id: "space2_manufacturers", label: "Identify manufacturers — satellite bus, payload, components, software providers" },
        { id: "space2_operators", label: "Identify operators — satellite operator, fleet manager, data resellers" },
      ]}
    ]
  },
  {
    id: "space_phase3", icon: "fas fa-broadcast-tower", label: "PHASE 3: RF Signal & Satellite Link Assessment", severity: "critical",
    children: [
      { id: "space3_ttnc", label: "TT&C Link Security Assessment", children: [
        { id: "space3_ttnc_signal", label: "Analyze TT&C signals — frequency, modulation, bandwidth, signal strength, polarization" },
        { id: "space3_ttnc_auth", label: "Assess TT&C authentication — command authorization, cryptographic protection, key management" },
        { id: "space3_ttnc_encryption", label: "Assess TT&C encryption — link encryption, algorithm strength, key rotation, NSA Suite B" },
        { id: "space3_ttnc_replay", label: "Assess replay protection — command replay susceptibility, timestamp validation, nonce usage" },
        { id: "space3_ttnc_access", label: "Assess TT&C access control — who can send commands, authorization levels, emergency override" },
      ]},
      { id: "space3_payload_link", label: "Payload Data Link Assessment", children: [
        { id: "space3_payload_signal", label: "Analyze payload links — downlink frequencies, data rates, modulation, bandwidth" },
        { id: "space3_payload_access", label: "Assess unauthorized access — signal reception, data decryption, tracking without authorization" },
        { id: "space3_payload_encryption", label: "Assess payload encryption — data confidentiality, key management, algorithm, rotation" },
        { id: "space3_payload_integrity", label: "Assess payload integrity — data integrity verification, tamper detection, error correction" },
      ]},
      { id: "space3_rf_security", label: "RF Security Assessment", children: [
        { id: "space3_jamming", label: "Assess jamming susceptibility — uplink/downlink jamming, anti-jam measures, spread spectrum" },
        { id: "space3_spoofing", label: "Assess spoofing susceptibility — command spoofing, signal forgery, replay attacks" },
        { id: "space3_signal_analysis", label: "Analyze signal characteristics — modulation type, encoding scheme, spread spectrum, FEC" },
        { id: "space3_interference", label: "Assess interference — adjacent channel, co-channel, intermodulation, terrestrial interference" },
      ]},
      { id: "space3_sdr", label: "SDR-Based Assessment", children: [
        { id: "space3_sdr_scan", label: "SDR spectrum scan — HackRF, USRP, wideband scanning, signal identification" },
        { id: "space3_sdr_demod", label: "Signal demodulation — demodulate captured signals, protocol analysis, data extraction" },
        { id: "space3_sdr_record", label: "Signal recording — long-duration recording, pass tracking, signal archiving" },
      ]}
    ]
  },
  {
    id: "space_phase4", icon: "fas fa-server", label: "PHASE 4: Ground Station & Mission Control Assessment", severity: "critical",
    children: [
      { id: "space4_ground", label: "Ground Station Security Assessment", children: [
        { id: "space4_ground_physical", label: "Assess physical security — access control, perimeter, surveillance, secure areas" },
        { id: "space4_ground_network", label: "Test ground station network — segmentation, firewall, monitoring, remote access" },
        { id: "space4_ground_antenna", label: "Test antenna control systems — rotator security, modem access, RF equipment control" },
        { id: "space4_ground_software", label: "Review ground station software — control systems, monitoring, scheduling, data processing" },
        { id: "space4_ground_backup", label: "Review backup systems — redundant ground stations, failover, disaster recovery" },
      ]},
      { id: "space4_mission", label: "Mission Control Security Assessment", children: [
        { id: "space4_mission_auth", label: "Test mission control authentication — operator access, MFA, role-based access, session management" },
        { id: "space4_mission_commands", label: "Test command validation — authorization workflow, dual control, command verification" },
        { id: "space4_mission_data", label: "Test mission data integrity — telemetry validation, data authenticity, tamper detection" },
        { id: "space4_mission_network", label: "Test mission control network — segmentation from corporate, secure communications, monitoring" },
        { id: "space4_mission_logging", label: "Review mission control logging — command logging, operator actions, audit trail, retention" },
      ]},
      { id: "space4_user_seg", label: "User Segment Assessment", children: [
        { id: "space4_user_terminal", label: "Test user terminals — authentication, firmware security, physical security, configuration" },
        { id: "space4_user_data", label: "Test user data security — encryption, access control, privacy, data sharing" },
        { id: "space4_user_api", label: "Test user APIs — satellite imagery API, tracking API, data access, authentication" },
        { id: "space4_user_app", label: "Test user applications — mobile apps, web portals, data visualization, access control" },
      ]},
      { id: "space4_gs_network", label: "Ground Station Network Infrastructure", children: [
        { id: "space4_gs_segmentation", label: "Test network segmentation — TT&C network, payload network, corporate network isolation" },
        { id: "space4_gs_monitoring", label: "Test network monitoring — traffic analysis, anomaly detection, intrusion detection" },
        { id: "space4_gs_remote", label: "Test remote access — VPN security, MFA, bastion hosts, session recording" },
      ]}
    ]
  },
  {
    id: "space_phase5", icon: "fas fa-microchip", label: "PHASE 5: Satellite Firmware & Onboard System Analysis", severity: "critical",
    children: [
      { id: "space5_firmware", label: "Satellite Firmware Analysis", children: [
        { id: "space5_fw_source", label: "Obtain firmware — from spare satellites, simulators, manufacturer, public sources" },
        { id: "space5_fw_extract", label: "Extract firmware — flash memory, EEPROM, boot images, update packages" },
        { id: "space5_fw_re", label: "Reverse engineer firmware — RTOS analysis, flight software, control logic, communication handlers" },
        { id: "space5_fw_crypto", label: "Review cryptographic implementation — onboard encryption, key storage, algorithm strength" },
        { id: "space5_fw_vulns", label: "Identify vulnerabilities — buffer overflows, command injection, backdoors, weak crypto" },
      ]},
      { id: "space5_bus", label: "Satellite Bus System Assessment", children: [
        { id: "space5_adcs", label: "Assess ADCS security — attitude determination, control system, sensor input integrity" },
        { id: "space5_propulsion", label: "Assess propulsion security — thruster command authentication, fuel management, safety interlocks" },
        { id: "space5_power", label: "Assess power system security — solar array control, battery management, power distribution" },
        { id: "space5_thermal", label: "Assess thermal control security — heater commands, temperature monitoring, thermal protection" },
        { id: "space5_obc", label: "Assess onboard computer security — flight software, command processing, fault management" },
      ]},
      { id: "space5_payload_sec", label: "Payload System Security", children: [
        { id: "space5_payload_auth", label: "Test payload command authentication — authorization, verification, command validation" },
        { id: "space5_payload_data", label: "Test payload data security — data handling, storage, transmission, encryption" },
        { id: "space5_payload_config", label: "Test payload configuration — parameter manipulation, mode changes, calibration data" },
      ]},
      { id: "space5_smallsat", label: "CubeSat/SmallSat Assessment", children: [
        { id: "space5_cubesat_sw", label: "Review CubeSat software — COTS components, open-source flight software, limited security" },
        { id: "space5_cubesat_comms", label: "Test CubeSat communications — UHF/VHF, simple protocols, lack of encryption" },
        { id: "space5_cubesat_ground", label: "Test CubeSat ground stations — amateur radio, university ground stations, security posture" },
        { id: "space5_cubesat_launch", label: "Assess launch integration — shared rides, deployment mechanism, separation security" },
      ]}
    ]
  },
  {
    id: "space_phase6", icon: "fas fa-rocket", label: "PHASE 6: Launch Vehicle & Supply Chain Security", severity: "high",
    children: [
      { id: "space6_launch", label: "Launch Vehicle Security", children: [
        { id: "space6_launch_ttc", label: "Assess launch TT&C — range safety, command authentication, telemetry security" },
        { id: "space6_launch_range", label: "Assess range safety — flight termination, safety systems, override capabilities" },
        { id: "space6_launch_payload", label: "Assess payload integration — satellite-to-launch vehicle interface, deployment commands" },
        { id: "space6_launch_ground", label: "Assess launch ground systems — launch control, range network, communication security" },
      ]},
      { id: "space6_supply", label: "Supply Chain Security", children: [
        { id: "space6_components", label: "Assess component security — COTS parts, radiation-hardened components, firmware integrity" },
        { id: "space6_software", label: "Assess software supply chain — flight software development, code review, secure development" },
        { id: "space6_manufacturing", label: "Assess manufacturing security — facility access, personnel screening, tamper detection" },
        { id: "space6_testing", label: "Assess testing environment — environmental testing, qualification, test equipment security" },
      ]},
      { id: "space6_deployment", label: "Deployment & Commissioning", children: [
        { id: "space6_deployment_sec", label: "Assess deployment security — separation mechanisms, deployment commands, post-deployment check" },
        { id: "space6_commissioning", label: "Assess commissioning — initial checkout, system verification, parameter calibration" },
        { id: "space6_key_loading", label: "Assess key loading — cryptographic key injection, key management, key distribution" },
      ]}
    ]
  },
  {
    id: "space_phase7", icon: "fas fa-shield-alt", label: "PHASE 7: Space Debris, Collision & Operational Security", severity: "high",
    children: [
      { id: "space7_debris", label: "Space Debris & Collision Assessment", children: [
        { id: "space7_conjunction", label: "Assess conjunction assessment — collision prediction, tracking accuracy, alert systems" },
        { id: "space7_maneuver", label: "Assess collision avoidance — maneuver commands, trajectory calculation, fuel management" },
        { id: "space7_tracking", label: "Assess space object tracking — SSA (Space Situational Awareness), catalog maintenance, accuracy" },
      ]},
      { id: "space7_operational", label: "Operational Security", children: [
        { id: "space7_ops_procedures", label: "Review operational procedures — command sequencing, verification, dual control, audit" },
        { id: "space7_ops_training", label: "Assess operator training — simulator training, emergency procedures, security awareness" },
        { id: "space7_ops_comm", label: "Assess operational communications — encrypted channels, authentication, out-of-band verification" },
        { id: "space7_ops_emergency", label: "Assess emergency procedures — anomaly response, safe mode, emergency contact, escalation" },
      ]},
      { id: "space7_cyber_physical", label: "Cyber-Physical Security", children: [
        { id: "space7_cp_safety", label: "Assess cyber-physical safety — command impact on physical systems, safety interlocks" },
        { id: "space7_cp_redundancy", label: "Assess redundancy — dual systems, failover, graceful degradation, recovery" },
        { id: "space7_cp_monitoring", label: "Assess monitoring — anomaly detection, health monitoring, trend analysis, alerting" },
      ]}
    ]
  },
  {
    id: "space_phase8", icon: "fas fa-file-export", label: "PHASE 8: Reporting, Compliance & Remediation", severity: "info",
    children: [
      { id: "space8_report", label: "Comprehensive Security Report", children: [
        { id: "space8_exec", label: "Executive summary — space system security posture, operational risks, mission impact" },
        { id: "space8_rf", label: "RF/link findings — TT&C security, payload link vulnerabilities, RF assessment" },
        { id: "space8_ground", label: "Ground segment findings — ground station, mission control, user segment vulnerabilities" },
        { id: "space8_spacecraft", label: "Spacecraft findings — firmware, bus systems, payload, onboard security" },
        { id: "space8_supply", label: "Supply chain findings — launch, manufacturing, components, software supply chain" },
        { id: "space8_safety", label: "Safety assessment — mission criticality, collision risk, operational safety" },
      ]},
      { id: "space8_remediation", label: "Remediation & Recommendations", children: [
        { id: "space8_encryption", label: "Recommend encryption — TT&C encryption, payload encryption, key management improvements" },
        { id: "space8_auth", label: "Recommend authentication — command authentication, operator authentication, multi-factor" },
        { id: "space8_monitoring", label: "Recommend monitoring — anomaly detection, signal monitoring, ground station monitoring" },
        { id: "space8_redundancy", label: "Recommend redundancy — system redundancy, failover capabilities, disaster recovery" },
      ]},
      { id: "space8_compliance", label: "Compliance & Standards Mapping", children: [
        { id: "space8_cns", label: "Map to CNSS — Committee on National Security Systems space security guidance" },
        { id: "space8_nato", label: "Map to NATO STANAG — military space security standards, alliance requirements" },
        { id: "space8_ccsds", label: "Map to CCSDS — space data link security, space packet protocol security" },
        { id: "space8_iso", label: "Map to ISO standards — space system security, operational safety, quality management" },
      ]}
    ]
  }
];
