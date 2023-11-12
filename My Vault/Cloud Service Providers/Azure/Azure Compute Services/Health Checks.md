---
tags: [azure, cloud, alert, metric]
---

**Health Checks** forms input for Health Monitoring, Availability Monitoring, Performance Monitoring and SLA Monitoring

**Green**: All monitored systems are functioning as expected  
**Yellow**: Partial health with some affected systems  
**Red**: Application is non-functional or stopped

### Health Check Elements

**Health Check Endpoint**: The check performed by our application through the endpoint  
**Result Interpreter**: The system calling and interpreting the health checks

The different probes exposed by the Compute Services can be used to check the Health status of the Services  
Containers Services support Liveness Probes and Readiness Probes

### Types of Analysis

**Hot Analysis**: Time-critical analysis about current state of system (Health Check)  
**Warm Analysis**: Data leading up to health event  
**Cold Analysis**: Load term analysis to determine overall trends

---

[Azure](../Azure.md)
