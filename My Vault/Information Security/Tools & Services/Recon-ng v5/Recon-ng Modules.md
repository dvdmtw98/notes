---
title: Recon-ng Modules
---

Modules are used to gather the various information. Modules are installed from the workspace  
D : Modules has an dependency  
K : Requires API Key

1. <u>Searching and Loading</u>

````bash
modules search
modules load <path-of-module>
````

2. <u>Setting Options</u>

````bash
info
options set <option-name> <value>
````

3. <u>Execution and Exiting</u>

````bash
run
options unset <option-name>
back # Exit Module
````

Some of the modules require an API Key which can be added as follows

````bash
keys add <api-name> <api-key>
keys list
````