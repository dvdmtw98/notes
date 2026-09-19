---
title: Security Operations Center
aliases:
  - SOC
tags:
  - security
  - defense
  - operation
date: 2026-03-04 23:39:09 +0530
updated: 2026-09-19 19:50:40 +0530
---

Centralized team and technology environment dedicated to monitoring, detecting, analyzing, and responding to security threats around the clock.  
SOC shifts an organization’s security posture from reactive to a proactive.  
MITRE ATT&CK Framework is the SOCs reference for mapping observed behavior to real-world adversary tactics and techniques.  

### SOC Types

Internal SOC: Large organizations. Tight control on data flow.  
Managed SOC: MSSP remotely monitors their client environment.  
Hybrid SOC: Inhouse Tier 1 & 2, Outsource after hours monitoring.  

Each type is a tradeoffs between cost, control and coverage.

### SOC Functions

**Continuous Monitoring**  
SIEM Platform. It collects, correlates and alerts.  
SOAR: Sits on top of SIEM and automates the response.  

**Alert Triage and Investigation**  

**Incident Response Coordination**  
Confirmed threat, initiate incident response workflow.  

**Metrics and Reporting**  
Mean Time to Detect (MTTD): Time taken by SOC to detect incident.  
Mean Time to Respond (MTTD): Time to respond to confirmed incident.    
Mean Time to Remediate: Time to fully resolve the incident.  

### SOC Roles

#### Tier 1
Alert Triage and Monitoring.  
First line of response. Uses SIEM heavily.  
Looks at an alert. Gather enough context and sets a severity level.  
Processes a high volume of alerts every shift and is prone to alert fatigue.  

#### Tier 2
Incident Investigation and Analysis.  
Perform deeper log correlation in the SIEM.  
Pivoting into tools like EDR for additional telemetry.  
Looking at network traffic to trace lateral movement.  
Determine if contained or something that needs Tier 3 involvement.  

#### Tier 3
Threat Hunting and Advanced Investigation.  
Building hypotheses based on threat intelligence.  
Running queries across historical data in the SIEM.  
Looking for attacker patterns that are not detected by detection rules.  
In many organization includes Detection Engineering (writing and tuning) correlation rules.  

#### SOC Manager  
The operational leader of the team.  
Handles resource allocation. Tracks performance metrics.  
Escalation point when an incident rises to leadership levels.  
Bridges gap between technical team and executive stakeholders.  

#### Threat Intelligence Analyst
Focused on the external threat landscape.  
With threat intelligence a SOC is able to reach to external indicators.  

#### Incident Responder
Owns the containment, eradication, and recovery process.  
In small organizations before by Tier 1 and Tier 2 team.  

### SOC Workflows
A defined sequence of steps the SOC follows to move from detecting a potential threat all the way through to resolving it.  

Detection: SIEM correlation rules  
Triage: Initial assessment of the alert  
Playbook: A human-readable step-by-step guide on how to respond to incident.  
Runbook: Automated playbook into a SOAR platform.  
Escalation: Tier 1 or Tier 2 analyst determines incident is beyond their scope.  
Case Management Platform: Single source of truth for every investigation, action taken, artifact collected, and decision made.  
