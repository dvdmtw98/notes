---
title: Bash File Operations
tags:
  - linux
  - bash
  - scripting
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 22:01:35 -0600
---

#### Read File (1st Method)

````shell
while read -r line
do
	echo $line
done < filename
````

#### Read File (2nd Method)

````shell
cat filename | while read -r line
do
	echo $line
done
````

#### Read File (3rd Method)

````shell
# File Content
# cyberciti.biz|202.54.1.1|/home/httpd|ftpcbzuser
# nixcraft.com|202.54.1.2|/home/httpd|ftpnixuser

file=/tmp/domains.txt

# Internal File Descriptor
IFS='|' 

while read -r domain ip webroot ftpusername
do
	echo $domain
	echo $ip
	echo $webroot
	echo $ftpusername
done < "$file"
````
