---
title: XSOAR Classifier and Mapper
tags:
  - security
  - orchestration
  - soar
date: 2026-05-31 22:57:08 +0530
updated: 2026-05-31 23:01:14 +0530
---

### Incident Classifier
Classifier is the component that determines which Incident Type an incoming alert should use.  
Raw alert → Classifier → Incident Type → Playbook  

![[xsoar-classifier.png|600]]

### Incident Mapper
Used to convert fields in the alert to XSOAR fields.  
Mappers allow us to also **transform** data as it's brought into the Incident.  
Mapping is **required** for fields that need to be shown in the **Layout**.  

![[xsoar-mapper.png|600]]

![[xsoar-field-transformer.png|380]]

All fields need no be mapped. Unmapped fields are difficult to use in the Playbook.  
Unmapped fields are added to labels in the incident.  
These fields cannot be searched.  

[Classification and Mapping \| Cortex XSOAR](https://xsoar.pan.dev/docs/incidents/incident-classification-mapping)
