---
tags: [gcp, cloud, compute]
---

It is a Platform as a Service (PaaS) offering  
Allows to quickly deploy and scale web-applications without having to manage the underlying infrastructure

### Features

Supports multiple programming languages ([Node.js](../../../Software%20Engineering/Programming%20Languages/Node.js/Node.js.md), Java, [Python](../../../Software%20Engineering/Programming%20Languages/Python/Python.md), PHP, [C#](../../../Software%20Engineering/Programming%20Languages/C%20Sharp/C%20Sharp.md))  
Allows user to bring own language runtime (achieved using custom containers)

Provides robust monitoring and diagnostics:

* Cloud Monitoring and Cloud Logging
* Cloud Debugger and Error Reporting

**Application Versioning**  
Allows to create different environments (staging, production, development)

**Traffic Splitting**  
Route incoming traffic to different app versions, A/B test and incremental feature rollout

**Application Security**  
Define access rules with App Engine Firewall, uses SSL/TLS certificates by default

---

### Environments

App Engine has two types of environments: **Flexible** and **Standard**  
Both can be simultaneously used by the application  
App Engine is well suited for applications designed using the microservice architecture

| Standard Environment                                    | Flexible Environment                                |
| ------------------------------------------------------- | --------------------------------------------------- |
| Serverless Compute                                      | Fully Managed Containers                            |
| Starts in Seconds                                       | Starts in Minutes                                   |
| Runs in Sandboxed Environment                           | Runs with Docker Containers on Compute Engine (VMs) |
| Designed for rapid scaling (sudden traffic spikes)      | Designed for predicable and consistent traffic      |
| Supports specific language versions, not custom runtime | Supports any language version and custom runtime    |
| Can scale to zero instances                             | Must have at least one instance running             |
| Pricing based on hours used                             | Pricing based on vCPUs, Memory and Disk             |
| Cannot use SSH to debug                                 | Can use SSH to debug                                |
| No background processes                                 | Can have background processes                       |
