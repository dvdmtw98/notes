---
tags:
  - gcp
  - cloud
  - billing
title: Pricing Tiers Overview
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

GCP offers various pricing schemes that vary per service. Broadly there are 7 types of pricing

**Free Trial**  
A risk free trial period, with specific limitations  
On sign-up to GCP we get 90 days free and $300 Free Credit  
At end of trail have to upgrade to a paid Billing account to continue using GCP  
Has some limitations on services : Can't add GPU to VM, Can't use Windows Images, etc.

**Free Tier**  
Services that have minimum monthly limits for free use  
Services like : App, Engine, Compute Engine, Cloud Storage, BigQuery support this tier

**On Demand**  
Pay for resources using a consumption based model (Pay for what we use)  
Ideal for short-term, spiky, unpredictable workloads

**Committed Use Discounts (CUDs)**  
A lower price than on-demand for agreeing to a 1 year or 3 year contract  
This pricing tier is available for Compute Resources (vCPU, Memory, GPU, SSDs)  
Ideal for workloads that have predictable workload needs

**Sustained Use Discount (SUD)**  
Automatic discounts for running specific Compute resources for a significant portion of the billing month  
This pricing tier is applicable to specific Compute Resources (vCPU, Memory, GPU)  
Pay only for the number of minutes that the instance is used  
GKE and Compute Engine uses this pricing automatically  
Not available for App Engine Flexible Environment and Dataflow

**Flat-Rate Pricing**  
Prefer a stable cost for queries rather than paying on-demand pricing (Only BigQuery)  
To enable this feature we need to use BigQuery Reservations

**Preemptible VM Instances**  
Instances with deep savings but at the cost of being interrupted  
They can be alive for no longer than 24 hours  
They can be preempted by GCP with a 30 sec notice

**Sole-Tenant Node Pricing**  
Sole-Tenant Node (Single tenant virtual machine) is a physical Compute Engine server that is dedicated to hosting only our projects VM instance  
SUD discounts are applicable by CUD discount is not applicable for this service
