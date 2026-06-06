---
title: XSOAR
tags:
  - security
  - orchestration
  - soar
  - index
date: 2026-05-30 23:09:06 +0530
updated: 2026-06-01 23:38:11 +0530
---

### Table of Content

- [[xsoar-incident-type|Incident Type]]
- [[xsoar-incident-fields|Incident Fields]]
- [[xsoar-classifier-and-mapper|Incident Classifier and Mapper]]
- [[xsoar-preprocessing-rules|Preprocessing Rules]]
- [[xsoar-incident-layout|Incident Layout]]
- [[xsoar-playbooks|Playbooks]]

### SLA Timers
Times can be defined at the Incident Level.  
The timer starts when the Incident is created.  

We can also create timers inside playbooks that can be started, stopped, and paused as required.  
These are Incident Fields that we have to define.  
They do not start automatically and have to be controlled via our Playbooks.  
A stopped timer cannot be restarted with resetting a value.  
