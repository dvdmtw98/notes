---
title: Monitoring and Observability
tags:
  - security
  - defense
  - monitoring
date: 2025-08-31 11:32:56 +0530
updated: 2025-08-31 14:22:55 +0530
---

### Monitoring
Watching about known conditions using predefined checks, thresholds, and alerts.  
Used to detect **when** something breaks or deviates from normal behavior.  
We know the problems in advance and monitor metrics related to these problems.  

E.g. Alert when CPU usage > 90% for 10 minutes.  

### Observability
The ability to understand what is happening within the system using telemetry data.  
It allows us to infer the internal state of the system by looking at the output.  
Observability helps us to learn “**Why** something happened”.  
We do not know the problems in advance so perform exploratory analysis.  

E.g. Why CPU suddenly spiked: Malicious process? Memory leak? Traffic surge?  

Observability tools are generally not configured out-of-the-box for meeting auditing and compliance requirements.   

---

### Telemetry

**High Cardinality**: Lot of unique values.  
**Dense**: Data collected frequently (High Volume).  
**Continuous**: Collected in real-time or near real-time.  

#### Metrics
Numerical measurements collected at regular intervals, often aggregated over time. 
They are generally measurements about the health of a system.

#### Events
Discrete occurrences that represent a significant change or action within the system.  

#### Logs
Immutable, time-stamped records of discrete events across applications and infrastructure.  
They can be unstructured or semi-structured.  

#### Traces
Records of the journey of a request as it traverses through various services in a distributed system.  

---

### SIEM (Security Information and Event Management)
SIEM collect, aggregate and analyze security data from various sources.  
Monitors for threats using rules and correlation.  
SIEM also provides observability but only for security events.  

SIEM lack instrumentation capabilities that are required to collect rich telemetry data from the each component of the system.  
Instrumentation is the process of embedding special code into systems to generate telemetry in a format that can use be used for analysis.  

SIEM come with predefined dashboards and reports for auditing.  
It also stores the information in a manner that meets regulatory requirements.  

### SOAR (Security Orchestration, Automation, and Response)
SOAR platforms build upon SIEM capabilities by integrating automation and orchestration to streamline the incident response process.  
SOAR can integrate with other security tools and processes and work together.  
They can trigger Playbooks responding to specific types of incidents.  
