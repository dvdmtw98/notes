---
title: Bash File Operations
tags: [os, linux, bash, programming]
---

1. <u>Read File (1st Method)</u>

````shell
while read -r line
do
	echo $line
done < filename
````

2. <u>Read File (2nd Method)</u>

````shell
cat filename | while read -r line
do
	echo $line
done
````

3. <u>Read File (3rd Method)</u>

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