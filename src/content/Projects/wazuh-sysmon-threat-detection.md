---
title: "Wazuh and Sysmon Endpoint Threat Detection Lab"
description: "A hands-on security monitoring lab using Wazuh and Sysmon to collect, investigate and analyse Windows endpoint telemetry."
category: "Cybersecurity"
date: 2026-08-19
featured: true
tags:
  - Wazuh
  - Sysmon
  - SIEM
  - Windows
  - Threat Detection
status: "Completed"
---

# Wazuh and Sysmon Endpoint Threat Detection Lab

## Overview

This project involved building a security monitoring environment using Wazuh and Sysmon to collect and analyse endpoint security telemetry from a Windows system.

The lab provided practical experience with endpoint monitoring, SIEM operations, event analysis and threat detection.

## Objective

The main objectives of the lab were to:

- Deploy a Wazuh SIEM environment.
- Configure a Windows endpoint for monitoring.
- Install and configure Sysmon.
- Connect the Windows endpoint to the Wazuh server.
- Collect Windows and Sysmon security events.
- Investigate endpoint activity through the Wazuh dashboard.
- Develop practical experience with security monitoring and threat detection.

## Lab Environment

The environment included:

- Wazuh Manager
- Windows endpoint
- Wazuh Agent
- Sysmon
- Wireshark
- Virtual machines

## Tools Used

### Wazuh

Used as the central security monitoring and SIEM platform for collecting and analysing endpoint events.

### Sysmon

Used to provide detailed Windows system telemetry, including process activity and other security-relevant events.

### Wireshark

Used for network traffic inspection and analysis during the lab.

## Implementation

The lab involved installing and configuring the Wazuh environment, deploying the Wazuh agent to the Windows endpoint and configuring Sysmon to generate detailed endpoint telemetry.

The endpoint was then connected to the Wazuh Manager so that security events could be centrally collected and investigated.

## Security Monitoring

Once the environment was operational, endpoint events were examined through the Wazuh dashboard.

This provided visibility into Windows activity and demonstrated how endpoint telemetry can support security monitoring and investigation.

## Skills Developed

Through this project, I developed practical experience in:

- SIEM deployment
- Endpoint monitoring
- Windows security telemetry
- Sysmon
- Wazuh
- Security event analysis
- Network traffic analysis
- Threat detection
- Security investigation
- Virtualised security lab environments

## Lessons Learned

This project strengthened my understanding of how endpoint telemetry is collected and analysed within a SIEM environment.

It also demonstrated the importance of detailed endpoint visibility when investigating potentially suspicious system behaviour.

## Future Improvements

Future development of the lab will include:

- Additional attack simulations
- Custom Wazuh detection rules
- More detailed Sysmon event analysis
- Incident response scenarios
- Detection engineering exercises
- Automated log analysis using Python
- Mapping detections to MITRE ATT&CK