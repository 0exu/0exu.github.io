window.CHECKLIST_SPACE = [
  {
    id: "space_phase1", icon: "fas fa-satellite", label: "PHASE 1: Space System Architecture Mapping", severity: "info",
    children: [
      { id: "space1_scope", label: "Engagement Setup", children: [
        { id: "space1_auth", label: "Obtain authorization from satellite operator/space agency" },
        { id: "space1_systems", label: "Document target systems — satellites, ground stations, TT&C, payloads" },
        { id: "space1_safety", label: "Define safety parameters — CRITICAL: no active interference with operations" },
        { id: "space1_equipment", label: "Prepare equipment — SDR (HackRF, USRP), satellite modem, protocol analyzers" },
        { id: "space1_orbital", label: "Gather orbital data — TLE, orbit type, coverage, pass times" },
      ]},
      { id: "space1_architecture", label: "Architecture Analysis", children: [
        { id: "space1_segment_map", label: "Map system segments — space, ground, user, control segments" },
        { id: "space1_ground_stations", label: "Identify ground stations — locations, network connectivity, access" },
        { id: "space1_links", label: "Map communication links — TT&C, payload data, inter-satellite" },
        { id: "space1_protocols", label: "Identify protocols — CCSDS, DVB-S2, SCPC, TDMA, custom" },
        { id: "space1_freq", label: "Map frequency bands — L, S, C, X, Ku, Ka bands in use" },
        { id: "space1_third_party", label: "Identify third parties — launch providers, ground segment providers" },
      ]}
    ]
  },
  {
    id: "space_phase2", icon: "fas fa-broadcast-tower", label: "PHASE 2: RF & Satellite Link Assessment", severity: "critical",
    children: [
      { id: "space2_ttnc", label: "TT&C Link Assessment", children: [
        { id: "space2_ttnc_enum", label: "Enumerate TT&C signals — frequency, modulation, bandwidth" },
        { id: "space2_ttnc_auth", label: "Test TT&C authentication — command authorization, cryptographic protection" },
        { id: "space2_ttnc_encryption", label: "Test TT&C encryption — link encryption, key management" },
        { id: "space2_ttnc_replay", label: "Assess replay susceptibility — command replay, timestamp validation" },
      ]},
      { id: "space2_payload", label: "Payload Data Link Assessment", children: [
        { id: "space2_payload_enum", label: "Enumerate payload links — downlink frequencies, data rates" },
        { id: "space2_payload_access", label: "Test payload data access — unauthorized reception, signal tracking" },
        { id: "space2_payload_encryption", label: "Test payload encryption — data confidentiality, key rotation" },
      ]},
      { id: "space2_rf", label: "RF Security Assessment", children: [
        { id: "space2_jamming", label: "Assess jamming susceptibility — uplink/downlink, anti-jam measures" },
        { id: "space2_spoofing", label: "Assess spoofing susceptibility — command spoofing, signal forgery" },
        { id: "space2_signal", label: "Analyze signal characteristics — modulation, encoding, spread spectrum" },
        { id: "space2_interference", label: "Test interference — adjacent channel, co-channel, intermodulation" },
      ]}
    ]
  },
  {
    id: "space_phase3", icon: "fas fa-server", label: "PHASE 3: Ground Segment Assessment", severity: "critical",
    children: [
      { id: "space3_ground", label: "Ground Station Security", children: [
        { id: "space3_ground_physical", label: "Assess ground station physical security — access control, perimeter" },
        { id: "space3_ground_network", label: "Test ground station network — segmentation, firewall, monitoring" },
        { id: "space3_ground_antenna", label: "Test antenna control systems — rotator, modem, RF equipment" },
        { id: "space3_ground_software", label: "Review ground station software — control systems, monitoring" },
      ]},
      { id: "space3_mission", label: "Mission Control Assessment", children: [
        { id: "space3_mission_auth", label: "Test mission control authentication — operator access, MFA" },
        { id: "space3_mission_commands", label: "Test command validation — authorization, verification, dual control" },
        { id: "space3_mission_data", label: "Test mission data integrity — telemetry, telemetry validation" },
        { id: "space3_mission_backup", label: "Review backup systems — redundancy, failover, disaster recovery" },
      ]},
      { id: "space3_user", label: "User Segment Assessment", children: [
        { id: "space3_user_terminal", label: "Test user terminals — authentication, firmware, physical security" },
        { id: "space3_user_data", label: "Test user data security — encryption, access control, privacy" },
        { id: "space3_user_api", label: "Test user APIs — satellite imagery, tracking, data access" },
      ]}
    ]
  },
  {
    id: "space_phase4", icon: "fas fa-microchip", label: "PHASE 4: Satellite Firmware & Onboard Security", severity: "critical",
    children: [
      { id: "space4_firmware", label: "Satellite Firmware Analysis", children: [
        { id: "space4_fw_extract", label: "Extract satellite firmware — if access available, from spares or sims" },
        { id: "space4_fw_re", label: "Reverse engineer firmware — flight software, RTOS, control logic" },
        { id: "space4_fw_comm", label: "Analyze onboard communication — bus protocols, IPC, data handling" },
        { id: "space4_fw_crypto", label: "Review cryptographic implementation — onboard encryption, key storage" },
      ]},
      { id: "space4_adiacs", label: "ADCS & Payload Security", children: [
        { id: "space4_adcs", label: "Assess ADCS security — attitude determination, control system protection" },
        { id: "space4_propulsion", label: "Assess propulsion security — thruster command authentication" },
        { id: "space4_power", label: "Assess power system security — solar array, battery management" },
        { id: "space4_payload_sec", label: "Assess payload security — sensor access, data handling, command auth" },
      ]},
      { id: "space4_cubesat", label: "CubeSat/SmallSat Assessment", children: [
        { id: "space4_cubesat_sw", label: "Review CubeSat software — typically COTS components, limited security" },
        { id: "space4_cubesat_comms", label: "Test CubeSat communications — UHF/VHF, simple protocols" },
        { id: "space4_cubesat_launch", label: "Assess launch integration security — shared rides, deployment" },
      ]}
    ]
  },
  {
    id: "space_phase5", icon: "fas fa-file-export", label: "PHASE 5: Reporting & Compliance", severity: "info",
    children: [
      { id: "space5_report", label: "Space Security Report", children: [
        { id: "space5_summary", label: "Executive summary — space system security posture" },
        { id: "space5_findings", label: "Vulnerability findings — RF, ground, satellite, user segment" },
        { id: "space5_safety", label: "Safety and operational impact — mission criticality, collision risk" },
        { id: "space5_remediation", label: "Remediation — encryption, authentication, redundancy" },
        { id: "space5_compliance", label: "Compliance mapping — CNSS, NATO STANAG, CCSDS standards" },
      ]}
    ]
  }
];
