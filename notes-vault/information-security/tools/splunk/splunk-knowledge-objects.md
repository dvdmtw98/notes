---
title: Splunk Knowledge Objects
tags:
  - splunk
  - security
  - tool
  - defense
date: 2026-02-19 11:12:49 +0530
updated: 2026-02-19 19:43:06 +0530
---

### Knowledge Objects
Data Interpretation: Fields, Extracted Fields, Calculated Fields  
Data Classification: Event Types, Transactions  
Data Enrichment: Lookups, Workflow Actions  
Data Normalization: Tags, Aliases  
Datasets: Data Models

#### Properties
Searchable: Persistent and can be used across searches.  
Shareable: Can be shared across users.  
Reusable: Persistent and can be used by multiple people or apps.  

#### Permissions
**Private**  
Only creator can use and/or edit the knowledge object.  
Creator and admin will have read/write permissions.  

**App (Current App)**  
Knowledge object in the context of an app.  
Only power and admin roles can share knowledge objects at the app level.  
Without power or admin cannot create shared objects.  
Creator can provide read/write permissions to user and power roles.  
Admin role has read/write permissions.  

**Global**  
Knowledge object persists globally across all apps.  
Only admin roles can share objects at the global level.  
Creator can provide read/write permissions to user and power roles.  
Admin role has read/write permissions.  

### Field Extraction
In field extraction UI if the regex is changed manually we cannot go back to automatic field extraction.  
Regex field extractions are saved as inline transforms.  

Field Extractions can be created from the “Fields Sidebar” and “Event Action” Menu and “Settings” Menu.  

### Field Alias
Used to normalize data from different data sources.  
Aliases can be applied to a `sourcetype`, `source` or `host`.  

Multiple aliases can be applied to a single field.  
Field aliases can be used with lookup tables.  
The original field is not removed when a alias is created.  

### Calculated Field
Can only be used on extracted fields (will not work on lookup fields).  
Helps to avoid long, complex queries using the `eval` command.  
Calculated fields only apply to events (will not work for stats tables).  

> [!IMPORTANT] Field Usage Order
> Extracted Fields - Field Alias - Calculated Field - Lookup - Event Types - Tags

### Tags
They provide names to field value pairs in data.  
Tags show up in brackets beside the field which was tagged.  
Events can have one or more tags.  
Tags are **case-sensitive**.  

```
index=main sourcetype=eventgen tag::State=DMV
```

The above syntax will only return tags that are associated with the `State` field.  

List by Field Value Pair: Show each key value pair associated with tag separately.  
List by Tag Name: Show all the key value pairs that are associated with the tag.  

### Event Types
Lets us categorize and label group of events based on a **simple search string**.  
Allows us to group events of similar type.  
Event types can be applied to data that spans multiple indexes.  

Each event will get a new field (`eventtype`) with the event type name.  
This field can be tagged.  

Event types can also be colored.  
The color for events that are part of multiple event types is decided based on the event type priority.  
Event Types with priority 1 has the highest importance (will override other colors).  

Event Types can be created from the Search Bar “Save As” Menu, “Event Action” Menu and “Settings” Menu.  

### Macros
It is a reusable piece of SPL than we define once and then can use in other queries.  
Macro names are enclosed in backticks.  
Macros can contain functions that formats the output (unlike event type).  
Avoid leading pipes in macro. Will limit the types of searches that can be executed.  

![[splunk-macro-defination.png|560]]

Macro is treated as a string that gets inserted into the search when its used.  
When “Use eval-based definition” is used Splunk evaluates the macro before returning the result as a string.  

### Workflow Action
Allows us to take actions on a field from an event of a search (or event type).  
Workflows can access all fields from the event as argument.

Workflow actions are created from “Settings → Fields → Workflow Actions.”  
GET Action: Retrieve Information  
POST Action: Send Information  
Search Action: Secondary Information  

The action type is link for GET and POST workflow actions.  
The GET and POST action use external resources to perform the action.  
The search action runs with the permission of the user executing the main search.  
