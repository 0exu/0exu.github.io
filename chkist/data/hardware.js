window.CHECKLIST_HARDWARE = [
  {
    id: "hw_phase1", icon: "fas fa-map", label: "PHASE 1: Reconnaissance & Intelligence Gathering", severity: "info",
    children: [
      {
        id: "hw1_fcc", label: "Regulatory & Public Records", children: [
          { id: "hw_fcc_id", label: "FCC ID Lookup — Filings, photos, internal component details" },
          { id: "hw_fcc_photos", label: "FCC Internal Photos — PCB layout, component placement" },
          { id: "hw_certifications", label: "Certification Records — CE, FCC, IC filings for technical details" },
        ]
      },
      {
        id: "hw1_components", label: "Component Identification", children: [
          { id: "hw_datasheet_soc", label: "SoC Datasheet — Main processor specs, pinout, interfaces" },
          { id: "hw_datasheet_flash", label: "Flash Memory Datasheet — Type, size, interface, pinout" },
          { id: "hw_datasheet_ram", label: "RAM Datasheet — Type, size, speed, interface" },
          { id: "hw_id_chips", label: "IC Identification — Chip marking analysis, part number lookup" },
          { id: "hw_id_wireless", label: "Wireless Module Identification — WiFi, Bluetooth, Zigbee chips" },
          { id: "hw_id_sensors", label: "Sensor Identification — Accelerometer, gyroscope, temperature" },
        ]
      },
      {
        id: "hw1_research", label: "Community & Prior Research", children: [
          { id: "hw_teardowns", label: "Existing Teardowns — Community teardowns and known vulns" },
          { id: "hw_firmware_dl", label: "Firmware Downloads — Vendor website, update servers" },
          { id: "hw_exploit_db", label: "Exploit Database — CVEs, advisories for this device/model" },
          { id: "hw_forum_research", label: "Forum Research — XDA, Reddit, specialized hardware forums" },
        ]
      }
    ]
  },
  {
    id: "hw_phase2", icon: "fas fa-microscope", label: "PHASE 2: Physical Analysis & Teardown", severity: "low",
    children: [
      {
        id: "hw2_pcb", label: "PCB Mapping & Analysis", children: [
          { id: "hw_pcb_layers", label: "PCB Layers — Single-sided, double-sided, multi-layer identification" },
          { id: "hw_pcb_tracing", label: "Trace Tracing — Follow PCB traces to identify connections" },
          { id: "hw_pcb_components", label: "Component Mapping — Label all components on PCB" },
          { id: "hw_pcb_testpoints", label: "Test Points — Identify labeled and unlabeled test points" },
          { id: "hw_pcb_connectors", label: "Connector Identification — UART, JTAG, SPI, I2C, USB headers" },
        ]
      },
      {
        id: "hw2_power", label: "Power Analysis", children: [
          { id: "hw_voltage_rails", label: "Voltage Rail Identification — 3.3V, 5V, 1.8V, 1.2V rails" },
          { id: "hw_thermal", label: "Thermal Analysis — Hot spots, hidden ICs via thermal camera" },
          { id: "hw_power_profiling", label: "Power Profiling — Current consumption patterns" },
          { id: "hw_power_injection", label: "Power Injection — External power for debugging" },
        ]
      },
      {
        id: "hw2_debug_ports", label: "Debug Port Identification", children: [
          { id: "hw_uart_detect", label: "UART Detection — TX, RX, GND identification with multimeter" },
          { id: "hw_jtag_detect", label: "JTAG Detection — TCK, TMS, TDI, TDO, GND pin identification" },
          { id: "hw_spi_detect", label: "SPI Detection — MOSI, MISO, SCLK, CS identification" },
          { id: "hw_i2c_detect", label: "I2C Detection — SDA, SCL identification on PCB" },
          { id: "hw_swd_detect", label: "SWD Detection — ARM Serial Wire Debug (SWCLK, SWDIO)" },
        ]
      }
    ]
  },
  {
    id: "hw_phase3", icon: "fas fa-bolt", label: "PHASE 3: Bus Analysis & Communication Interception", severity: "high",
    children: [
      {
        id: "hw3_uart", label: "UART Analysis", children: [
          { id: "hw_uart_baud", label: "Baud Rate Discovery — Common rates: 9600, 115200, 57600" },
          { id: "hw_uart_shell", label: "UART Shell Access — Login prompt, root shell via serial" },
          { id: "hw_uart_boot", label: "Boot Log Analysis — Bootloader messages, kernel boot" },
          { id: "hw_uart_interrupt", label: "Boot Interrupt — U-Boot interruption for environment access" },
          { id: "hw_uart_logic", label: "Logic Analyzer — Saleae, DSLogic for UART signal analysis" },
        ]
      },
      {
        id: "hw3_jtag", label: "JTAG Analysis", children: [
          { id: "hw_jtagulator", label: "JTAGulator — Automated JTAG pin identification" },
          { id: "hw_jtag_openocd", label: "OpenOCD — JTAG adapter setup and connection" },
          { id: "hw_jtag_dump", label: "Memory Dump — Full flash memory extraction via JTAG" },
          { id: "hw_jtag_debug", label: "Live Debugging — Register inspection, breakpoint setting" },
          { id: "hw_jtag_boundary", label: "Boundary Scan — JTAG boundary scan testing" },
        ]
      },
      {
        id: "hw3_spi", label: "SPI Flash Analysis", children: [
          { id: "hw_spi_clip", label: "SOIC Clip Connection — Non-destructive flash connection" },
          { id: "hw_spi_flashrom", label: "flashrom — Flash memory reading and writing" },
          { id: "hw_spi_dump", label: "Full Flash Dump — Complete firmware extraction" },
          { id: "hw_spi_write", label: "Flash Writing — Modified firmware flashing" },
          { id: "hw_spi_sniff", label: "SPI Sniffing — Bus traffic interception during operation" },
        ]
      },
      {
        id: "hw3_i2c", label: "I2C Bus Analysis", children: [
          { id: "hw_i2c_scan", label: "I2C Address Scan — Discover devices on I2C bus" },
          { id: "hw_i2c_sniff", label: "I2C Sniffing — Bus traffic interception" },
          { id: "hw_i2c_sensors", label: "Sensor Communication — Temperature, motion, environmental data" },
          { id: "hw_i2c_eeprom", label: "EEPROM Access — Configuration data from I2C EEPROM" },
        ]
      },
      {
        id: "hw3_swd", label: "SWD (ARM Debug) Analysis", children: [
          { id: "hw_swd_connection", label: "SWD Connection — ST-Link, J-Link adapter setup" },
          { id: "hw_swd_memory", label: "Memory Access — ARM core memory read/write" },
          { id: "hw_swd_flash", label: "Flash Programming — ARM firmware programming via SWD" },
          { id: "hw_swd_debug", label: "ARM Debugging — GDB connection, breakpoint, stepping" },
        ]
      }
    ]
  },
  {
    id: "hw_phase4", icon: "fas fa-hdd", label: "PHASE 4: Firmware Extraction & Analysis", severity: "critical",
    children: [
      {
        id: "hw4_extract", label: "Firmware Extraction", children: [
          { id: "hw_extract_flashrom", label: "flashrom Extraction — Direct flash chip reading" },
          { id: "hw_extract_uart", label: "UART Extraction — dd, cat /dev/mtd for flash partition dump" },
          { id: "hw_extract_jtag", label: "JTAG Extraction — Memory dump via JTAG adapter" },
          { id: "hw_extract_spi", label: "SPI Extraction — SOIC clip + flashrom for chip reading" },
          { id: "hw_extract_sd", label: "SD Card Extraction — Direct SD card imaging" },
          { id: "hw_extract_network", label: "Network Extraction — TFTP, HTTP firmware download" },
        ]
      },
      {
        id: "hw4_unpack", label: "Firmware Unpacking & Analysis", children: [
          { id: "hw_binwalk", label: "Binwalk — Firmware unpacking, file system extraction" },
          { id: "hw_filesystem", label: "File System Reconstruction — SquashFS, JFFS2, UBIFS analysis" },
          { id: "hw_secrets", label: "Hardcoded Secrets — Credentials, API keys, certificates" },
          { id: "hw_logic_re", label: "Binary Reverse Engineering — Ghidra/IDA for firmware binaries" },
          { id: "hw_kernel", label: "Kernel Analysis — Kernel version, modules, configuration" },
          { id: "hw_bootloader", label: "Bootloader Analysis — U-Boot configuration, environment" },
          { id: "hw_encryption", label: "Firmware Encryption — Identify and decrypt encrypted firmware" },
        ]
      },
      {
        id: "hw4_emulation", label: "Firmware Emulation", children: [
          { id: "hw_qemu", label: "QEMU Emulation — Full system emulation of firmware" },
          { id: "hw_firmadyne", label: "Firmadyne — Automated firmware emulation framework" },
          { id: "hw_firmware_analysis", label: "Firmware Analysis Toolkit — Automated emulation setup" },
          { id: "hw_userland", label: "Userland Emulation — chroot for user-space binary analysis" },
        ]
      }
    ]
  },
  {
    id: "hw_phase5", icon: "fas fa-bolt", label: "PHASE 5: Advanced Hardware Attacks", severity: "critical",
    children: [
      {
        id: "hw5_glitch", label: "Fault Injection & Glitching", children: [
          { id: "hw_glitch_voltage", label: "Voltage Glitching — Vcc manipulation for fault injection" },
          { id: "hw_glitch_clock", label: "Clock Glitching — Clock signal manipulation" },
          { id: "hw_glitch_chipwhisperer", label: "ChipWhisperer — Voltage/clock glitching platform" },
          { id: "hw_glitch_bypass", label: "Bypass Attacks — Skip authentication, signature verification" },
          { id: "hw_glitch_rowhammer", label: "Rowhammer — DRAM bit flip exploitation" },
        ]
      },
      {
        id: "hw5_sca", label: "Side-Channel Analysis", children: [
          { id: "hw_sca_power", label: "Power Analysis — Simple Power Analysis (SPA), DPA" },
          { id: "hw_sca_em", label: "EM Analysis — Electromagnetic emanation analysis" },
          { id: "hw_sca_timing", label: "Timing Analysis — Execution time variations" },
          { id: "hw_sca_key_recovery", label: "Key Recovery — Cryptographic key extraction via SCA" },
        ]
      },
      {
        id: "hw5_advanced", label: "Advanced Hardware Techniques", children: [
          { id: "hw_logic_sniff", label: "Logic Sniffing — High-speed bus protocol analysis" },
          { id: "hw_fuzz_hardware", label: "Hardware Fuzzing — Protocol fuzzing via hardware interface" },
          { id: "hw_rf_analysis", label: "RF Analysis — Wireless signal analysis, replay attacks" },
          { id: "hw_nfc_rfid", label: "NFC/RFID Cloning — Card cloning, relay attacks" },
          { id: "hw_jailbreak", label: "Jailbreak/Root — Device-specific jailbreak techniques" },
        ]
      }
    ]
  },
  {
    id: "hw_phase6", icon: "fas fa-clipboard-list", label: "PHASE 6: Documentation & Reporting", severity: "info",
    children: [
      {
        id: "hw6_report", label: "Hardware Analysis Report", children: [
          { id: "hw6_report_summary", label: "Summary — Device, components, key findings" },
          { id: "hw6_report_pcb", label: "PCB Documentation — Annotated PCB photos, trace maps" },
          { id: "hw6_report_firmware", label: "Firmware Analysis — Unpacked contents, vulnerabilities" },
          { id: "hw6_report_vulns", label: "Vulnerabilities — Hardware and firmware security issues" },
          { id: "hw6_report_mitre", label: "MITRE ATT&CK — Hardware attack technique mapping" },
        ]
      }
    ]
  }
];
