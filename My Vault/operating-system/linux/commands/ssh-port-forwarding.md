---
tags:
- os
- linux
- command
title: SSH Port Forwarding
---

### Local Port Forwarding

I want to access remote resources that I can't access  
The SSH server should have access to the resource that we are trying to access

![Local Port Forwarding|600](../images/local-port-forwarding.png)

````bash
ssh -L <local-port>:<resource-to-access> <ssh-server>
````

### Remote Port Forwarding

I want people to access local resources that they can't have access

![Remote Port Forwarding|600](../images/remote-port-forwarding.png)

````bash
ssh -R <local-port>:<resource-to-access> <ssh-server>
````

 > [!NOTE]
 > For Remote Port forwarding the ssh server config `/etc/ssh/sshd_config` should have the following property
 > `GatewayPorts yes`