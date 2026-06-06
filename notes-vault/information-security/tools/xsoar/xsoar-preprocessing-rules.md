---
title: XSOAR Preprocessing Rules
tags:
  - security
  - orchestration
  - soar
date: 2026-05-31 22:58:27 +0530
updated: 2026-05-31 23:01:25 +0530
---

Happens after Classification and Mapping but before an Incident is created.  
They allow us to write logic like: drop incidents that need not be analyzed, update incidents that are not closed when more alerts for the same IP is received.  

![[xsoar-preprocessing-rule.png|560]]

![[xsoar-preprocessing-rule-2.png|560]]

Rules are **executed** top to bottom (**order matters**).
Once a rule is triggered the flow stop no further rules will be executed.

![[xsoar-preprocessing-menu.png|640]]

To test preprocessing rules **events/alerts** have to be present in **investigate** state.  

Close: Prevent Playbook execution  
Drop: Prevent incidents from being created (filtering)  

[Pre-processing Rules \| Cortex XSOAR](https://xsoar.pan.dev/docs/incidents/incident-pre-processing)
