---
title: XSOAR Playbooks
tags:
  - security
  - soar
  - orchestration
date: 2026-05-31 23:01:43 +0530
updated: 2026-05-31 23:38:31 +0530
---

**Integration command** name are in **lower space with dashes** between them.
Automation scripts names use **title case** (XSOAR has some build-in ones).
Built-in command names use **camel case** format.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/P5OqIrhQ5zk?si=oY9hU3VThZfrTPbH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

**Contexts** stores the **output** from the various tasks in the playbook.
Mapping: Add information from playbook into the incident.  

![[xsoar-playbook.png|600]]

**Indicator extractions** and enrichment can be performed on **outputs** from playbook.  
Default is **not** to perform any enrichment.  
**Using** parameter allows us to use a specific instance of an integration in the task.

XSOAR Lists allows us to create static multi-valued objects that can be referenced across playbooks.  

![[xsoar-list.png|500]]

Debug uses real data to run tasks. Tasks that shouldn’t be run can be disabled.

![[xsoar-playbook-2.png|600]]

[Palo Alto Networks - Work Plan](https://docs-cortex.paloaltonetworks.com/r/Cortex-XSOAR/6.11/Cortex-XSOAR-Administrator-Guide/Work-Plan)

The **Set** task allows us to build our own value.

**Data Collection** tasks allows us to create a survey which the user as to fill out.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/795E42gz8M8?si=jUO5gdX3_YOR1PtY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

#### Sub-Playbooks

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/sPp5PXgFg1A?si=nqH9pE7FBkMmUb0e" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

When creating sub-playbooks we have to define inputs and outputs.  
Inputs are values required to use the sub-playbook.  
Outputs are values returned after the execution.  

![[xsoar-sub-playbooks.png|600]]

Sub-playbooks have there own private context by default. Can be changed not recommended.
