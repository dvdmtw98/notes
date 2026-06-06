---
title: XSOAR Incident Type
tags:
  - security
  - orchestration
  - soar
date: 2026-05-31 22:54:56 +0530
updated: 2026-05-31 23:01:00 +0530
---

It is a **category/classification** to tell the SOAR the type of security incident it is dealing with.  
XSOAR comes with an out-of-the-box incidents and provides the ability to create custom incident types.  

![[xsoar-custom-incident-type.png|500]]

It controls the **default playbook** that is executed when an incident occurs.
**Custom Layouts** can be created for each Incident Type.
Allows us to configure **postprocessing scripts**. They are scripts that execute right before an incident is closed.
Can configure an **SLA** for the incident (Incident open to close time).
Also controls the **field extraction** rules.

![[xsoar-incident-extraction-fields.png|500]]

**Inline Field Extraction**: Playbook will not execute until the extraction and enrichment process has not completed.  
**Out of band**: Extraction and enrichment will happen in parallel to playbook execution.
**None**: No indicator extraction required.

![[xsoar-incident-extraction-fields-2.png|500]]

**Extraction from specific indicators** recommend option. It reduces false positives.

[Working with Incident Types \| Cortex XSOAR](https://xsoar.pan.dev/docs/incidents/incident-types)
