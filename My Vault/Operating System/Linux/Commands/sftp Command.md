---
title: sftp Command
tags: [os, linux, command]
---

### Connect to Server using SFTP

````shell
sftp <username>@<ip-address>
````

### Put and Get Files from Server

````shell
mput <filename>
mget <filename>
````

* `mput` and `mget` is used to work with multiple files. put and get can be used with a single file
* When on Remote Machine and we want to run commands on local machine we can run the normal commands prefixed with `l`. So ls will be lls, pwd will be lpwd
* Applications like FileZilla can be used be work with remote machine using GUI