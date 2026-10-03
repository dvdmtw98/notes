---
title: Security Operations Center
aliases:
  - SOC
tags:
  - security
  - defense
  - operation
date: 2026-03-04 23:39:09 +0530
updated: 2026-09-19 22:23:30 +0530
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

#### Continuous Monitoring
SIEM: Collects, normalizes, correlates & analysis security events and creates alerts.  
SOAR: Sits on top of SIEM and automates the response.  

#### Alert Triage and Investigation  
**Triage:** Validate and prioritize alerts to determine whether they are legitimate threats or false positives.  
**Investigation:** Enrich the alert with additional context, investigate related events, determine the scope and impact, and decide whether escalation is required.

#### Incident Response Coordination
Confirmed threat, initiate incident response workflow.  

#### Metrics and Reporting  
Mean Time to Detect (MTTD): Time taken by SOC to detect incident.  
Mean Time to Respond (MTTR): Time to respond to confirmed incident.    
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

### Continuous Monitoring
The ongoing collection, analysis, and interpretation of security-relevant data from across the environment to maintain awareness of the current security state at all times.  

#### Network Data
Gives visibility into traffic patterns, connection attempts, protocol usage, and data flows across environment.  

Firewall Logs: Shows allowed and denied connections.  
IDS and IPS Logs: Detect know attack signatures and anomalous traffic patterns.  
NetFlow Data: Gives traffic volume and flow metadata without packet capture.  
DNS Logs: Critical. Almost every attack involves DNS.  

Cloud: VPC Flow Logs, Azure Network Watcher Logs, etc.  
No traditional perimeter.  So, East-west traffic between workloads is monitored.  
Unexpected egress connections.  

#### Endpoint Monitoring
Gives visibility into what is happening on individual devices, workstations, servers, and cloud instances.  
e.g.) Windows Security Event Logs & Linux Syslog  
Contains authentication events, privilege use, process creation, file access, and config changes.  

EDR solutions add much more granular telemetry.  
They provide: process execution trees, Parent-child process relationships, file system changes, registry modifications, and network connections.  
EDR solutions also use behavioral analytics and machine learning to flag suspicious process behavior.  

#### Cloud Data
AWS CloudTrail: Logs every API call made in AWS environment.  

Azure Audit Logs & Azure AD Sign-In Logs  
AWS GuardDuty or Microsoft Defender for Cloud  

#### Application Monitoring
Captures security-relevant events from web applications, APIs, databases, and internal services.  

Web App Logs: Authentication events, input validation failure, error codes, etc.  
Database Audit Logs: Captures who queried what data.  
WAF Logs: Captures attack attempts that never made it to the application.  
Containers: Pod Logs & Custer Events.  

#### Identity Data
Most information monitoring domain.  
AD Authentication Logs, MFA events, Privilege escalation, Account creation and modification.  

PAM Logs: Captures privileged accounts activity.  
Federation Logs: Authentication events across connected applications.  

### Shift Handover
Structured transfer of operational awareness, active workload, and contextual knowledge from one analyst team to the next at the end of a shift.  
When it breaks down effect gets duplicated and SLOs will degrade.  
Should be present in both document and verbal format.  

#### Shift Summary  
High level overview of what happened during the shift.  
New rule deployment, monitoring source that went offline, change in staff coverage.  

#### Active Case Status Section  
Every open case is documented with enough context for an incoming analyst to continue the investigation without any verbal explanation.  

#### Watch Items  
Things the incoming team needs to keep eyes on that have not risen to the level of a formal case yet.  
