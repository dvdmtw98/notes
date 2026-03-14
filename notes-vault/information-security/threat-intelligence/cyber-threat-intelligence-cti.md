---
title: Cyber Threat Intelligence
aliases:
  - CTI
tags:
  - security
  - threat
  - intelligence
date: 2024-01-28 14:15:56 -0600
updated: 2026-03-09 22:12:39 +0530
---

### Security Intelligence
The process where data is generated and is then collected, processed, analyzed, and disseminated to provide insights into the security stats of information systems.  
e.g. Reviewing Application, IDS/IPS, Firewall logs.

### Cyber Threat Intelligence
Investigation, collection, analysis, and dissemination of information about emerging threats and threat sources to provide data about the external threat landscape.  

Evidence based knowledge about adversaries.  
Includes indicators, tactics, motivations, & actionable insights about adversaries.

**Narrative Report**   
Report generated based on the analysis performed by a analyst.  
Useful at strategic level. Big picture overview of threats. 

**Data Feed**  
List of known bad indicators.  
Provides us with tactical level information. Can be monitored using security tools.  
e.g. IOCs, Domain Names, IP Addresses, Hashes

### Cyber Threat Intel (CTI) Lifecycle

![[cti-lifecycle.png|360]]

#### Planning & Direction (Requirements)
Deciding the objectives and **goals** of the threat intel gathering effort.  
e.g. Systems to be protected, source of data and intel to use, tools and resources required, etc.

#### Collection
Gather the required data from different sources.  
SIEM is used to store the collected data.  

#### Processing
Data collected from different sources use different structures and are not correlated. Normalize the data for later analysis.  

#### Analysis
Derive insights from the information based on the use cases decided during  the planning phase.  
Due to the large volume of data may utilize automated analysis, AI and ML.  
e.g. Defining action plan to avert an attack, strengthening security controls, etc.

#### Dissemination
Publishing information produced by analysts to consumers who need to act on the insights developed.  
Different organizational stakeholders will consume the intelligence in different ways.

**Strategic Intel**  
High-level intel that looks into the organizations threat landscape.  
Information that is useful on the timescale of weeks, and months.  
Often presented as a report to executes or PPT presentation in a large group.

**Operational Intel**  
Looks into the day-to-day priority of managers and specialist.  
Often put out in the form of a checklist.  

**Tactical Intel**  
Real-time decisions made by staff as they encounter different alerts.  
e.g. Alerts/Incidents that are generated when working in a SOC.  

#### Feedback
Use the feedback provided by the various stakeholders to improve the collection, analysis, and dissemination of information by reviewing current inputs and outputs.  

**Lessons Learned**: What went wrong and how can it be improved.  
**Measurable Success**: Metrics for success/failure.  
**Evolving Threat Landscape**: Shifting collection based on current landscape.  

---

### Intelligence Sources
This information is used during the collection & processing phase of the CTI lifecycle to determine which intelligence will be used.

#### Properties

**Timeliness**  
Ensures an intelligence source is up-to-date.  

**Relevancy**  
Ensuring a intelligence source matches its intended use case.  

**Accuracy**  
Ensuring an intelligence source produces effective results.  

**Confidence Level**  
Ensuring an intelligence source produces qualified statements about reliability.  
e.g. Admiralty Scale (Source - A to F, Information Content - 1 to 6)

#### Types

**Proprietary**  
A commercial service offering, where access to updates and research is subject to subscription fee.  
e.g. Fireye

**Closed-Source**  
Data derived from the providers own research and analysis efforts.  
This could include data from honeynets that they operate, information mined from their customers systems.  
e.g. Mandiant  

**Open-Source**  
Data  that’s available without subscription, which may include threat feeds, reputation lists, and malware signature databases.  
e.g. US-CERT, UK NCSC, AT&T Security (OTX), MISP, Spamhaus, VirusTotal  

**Open-Intelligence Intelligence (OSINT)**  
A method of obtaining information a person or organization through public records, websites, and social media.  

---

### Information Sharing and Analysis Center (ISAC)
A not-for-profit group set up to share sector-specific threat intelligence and security best practices amongst its members.  

Critical Infrastructure (ICS, SCADA, Embedded Systems)  
Government (State, Local, Tribal and Territorial Government)  
Healthcare (Patient Records)  
Financial (Prevent frauds and Extortion)  
Aviation (Fraud, Terrorism, Service Disruptions, and Unsafe Operations)