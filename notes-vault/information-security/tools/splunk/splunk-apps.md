---
title: Splunk Apps
tags:
  - security
  - siem
  - splunk
date: 2025-09-18 22:00:01 +0530
updated: 2026-09-06 21:57:11 +0530
---

**Apps** add additional functionality in Splunk (sources, processing options).  
Apps have a UI and allow users to configure various parameters.  

**Add-ons** do not have UI (they run in background).  
Some add-ons are also called **TAs** (Technical Add-ons).

Apps and add-ons are downloaded from Splunkbase.  

Splunk Home: `/opt/splunk`  
App Location: `$SPLUNK_HOME/etc/apps/`  

Config Location: `$SPLUNK_HOME/etc/apps/<app-name>/local/`  
`props.conf`: Rules on parsing data  
`inputs.conf`: Rules on Monitoring data sources  

Each section in the config file is called a **stanza**.  
Best practice before deploying apps is to combine the local config with the default config.  

#### Forwarder Management
Shows the forwarders that communicate with the deployment server.  
Server class are used to create app and forwarders groups.  

Deployment Server: `$SPLUNK_HOME/etc/deployment-apps`  
Cluster Node Manager: `$SPLUNK_HOME/etc/manager-apps`  
Search Head Deployer: `$SPLUNK_HOME/etc/shcluster/apps`

#### Monitoring Console
View topology and performance information about your deployment.  
Contains dashboards that are created using Splunk internal logs.  
Provides insights into search performance, indexing performance, operating system resource usage, license usage, etc.  
