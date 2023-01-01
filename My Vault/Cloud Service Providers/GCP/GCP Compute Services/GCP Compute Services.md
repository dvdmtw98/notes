### Compute Engine

Allows to deploy scalable, high performance VMs  
Has **Container Mode** which allows to use container images as the OS for the VM

### Bare Metal

Provisioning hardware to run specialized workloads with low latency on Google Cloud  
Allows to install any hypervisor (virtualization software)

### [App Engine](App%20Engine.md)

It is a PaaS serverless offering  
Allows to quickly manage, build and deploy web applications on GCP  
#gcp-compute-service #gcp-serverless-service 

### Cloud GPUs

Add GPUs to your workload for machine learning, scientific computing and 3D visualization  
#gcp-compute-service #gcp-ml-service

### Google Kubernetes Engine (GKE)

Reliable, efficiently and securely deploy and scale containerized applications on [Kubernetes](../../../Tools%20&%20Services/Kubernetes/Kubernetes.md)  
GKE groups multiple Compute Engine resources together to create a cluster which will be used to run the containers  
#gcp-compute-service #gcp-container-service

### Sole-Tenet Nodes

Dedicated Virtual Machines  
Help meet compliance, licensing and management needs by keeping your instances physically separated with dedicated hardware

[Sole-tenant nodes  |  Compute Engine Documentation  |  Google Cloud](https://cloud.google.com/compute/docs/nodes/sole-tenant-nodes)

### Cloud Functions

It is a Function as a Service (FaaS) offering  
Allows to create serverless, single-purpose functions that respond to events  
#gcp-compute-service  #gcp-serverless-service

---

### Google Cloud VMware Engine

Fully managed service that allows to run VMWare Platform in the cloud  
Migrate and run VMware workloads natively on the cloud

### Preemptible VMs

Deploy affordable, short-lived compute instances suitable for batch jobs and fault-tolerant workloads  
This VM can be preempted at any time by GCP if its required for some other tasks
The latest version of this service is called Spot VMs

[Preemptible VM instances  |  Compute Engine Documentation  |  Google Cloud](https://cloud.google.com/compute/docs/instances/preemptible)

### Shielded VMs

Deploy hardened virtual machines on Google Cloud
