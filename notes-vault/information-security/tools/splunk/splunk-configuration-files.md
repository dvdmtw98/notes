---
title: Splunk Configuration Files
tags:
  - security
  - splunk
  - siem
  - administration
date: 2026-09-16 21:42:06 +0530
updated: 2026-09-19 18:00:40 +0530
---

Configuration files are the backbone of Splunk administration.  
Changes made via Splunk Web, CLI, Rest API result in config files being updated.  
Some advanced settings in Splunk are only exposed via config files.  

### Config Files Location
All configuration files in Splunk use the `.conf` extension.  
Config files are stored at: `$SPLUNK_HOME/etc`  

For each config file there also is a corresponding spec file and example file.  
The spec file lists all the available options for the config file.  
Spec Files: `*.conf.spec`, Example Files: `*.conf.example`  
These files are located at: `$SPLUNK_HOME/etc/system/README`  

`$SPLUNK_HOME/bin`: Splunk CLI and other executables files.  
`$SPLUNK_HOME/etc`: Splunk configuration files.  
`$SPLUNK_HOME/lib`: Splunk related libraries.  
`$SPLUNK_HOME/var`: Variable length files (Logs, Index buckets, etc.)  

### Config File Structure
Configuration files consist of one or more stanzas (sections).  
Each stanza starts with a header in square brackets.  
Each setting is represented as a attribute-value pair.  
Attributes are case-sensitive.  

### Config Directory Structure

![[splunk-config-directory.png|640]]

`/system`: Contains files that are applicable across Splunk.  
`/app`: Contains files that are specific to a app.  
`/users`: Contains settings for objects are private to a user.  

`/../default`  
Contains files that ship with Splunk.  
These files shouldn’t be modified. They are overwritten on update.  

`/../local`: Modified files from default are placed in this directory.  

### Config File Context
Answers: For what type of operation is Splunk evaluating this configuration.  

#### Global Context
Used for index time activities like inputs, parsing, indexing, etc.  
Independent of app and user.  

#### App/User Context
Search time activities such as reports, macros, etc.  
User-related activities.  

![[splunk-config-files.png|640]]

`props.conf` and `transforms.conf` can be evaluated in either context.  

### Common Config Files

#### inputs.conf
Defines the data that needs to be collected.  

**Input Types**  
Monitor Inputs: Data from files and directories.  
Network Inputs: Data from network sources like Syslog servers.  
Scripted Inputs: Custom script to fetch data.  
Internal Logs: Logs related to Splunk  

**Splunk Components**  
Forwarders: Defines the data that needs to be collected from hosts.  
Indexers: Defines the data coming from other forwarders.  
Search Head: Defines how Splunk collects internal logs.  

#### outputs.conf
Defines where to forward the data.  

**Splunk Components**  
Forwarders: Defines data forwarding to indexers.  
Indexer: Not required. Indexers generally do not forward data.  
Search Head: Defines forwarding for Splunk internal logs.  

#### props.conf
Parsing and Field Extractions  

**Splunk Components**  
Universal Forwarder: Limited processing such as character encoding.  
Indexer/Heavy Forwarder: Event breaks, metadata, timestamp extraction, time zone, data transformation.   
Search Head: Search time field extractions, lookups, etc.  

### Config Precedence
Splunk evaluates config files based on precedence.  

1. Merges settings from each copy of the file.  
2. If no duplicate stanza or common settings, result is union of all files.  
3. If matching  stanza and conflicting attribute values:
	- Use attribute values from files with the highest precedence.  
	- `local` always takes precedence over `default`.  
	- Attribute precedence also exists within a single config file.  

#### Global Context
For app names lexicographical ordering is followed.  
For each all local directories are visited before checking the global directories.  

1. System local directory  
2. App local directories  
3. App default directories  
4. System default directory  

![[splunk-config-global-precedence-1.png]]

![[splunk-config-global-precedence-2.png]]

#### App/User Context
For app names reverse-lexicographical ordering is followed.  
For each app local then default directory is visited before moving on to the next app.  

1. User directories for current user.  
2. App directories for the currently running app: local then default.  
3. App directories for all other apps: local then default.  
4. System directories: local then default.  

![[splunk-config-local-precedence-1.png]]

When a KO is  shared at the global level its metadata file (`.meta`) is updated to include the setting `export = system`.  

![[splunk-config-local-precedence-2.png]]

### Btool
CLI that allows us to check the settings configured on Splunk Enterprise instance.  
