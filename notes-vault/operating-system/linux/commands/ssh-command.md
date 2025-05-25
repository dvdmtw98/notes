---
title: ssh Command
tags:
  - os
  - linux
  - command
date: 2024-01-28 14:15:56 -0600
updated: 2025-05-21 18:44:35 -0500
---

````bash
ssh username@ip-address [-p <port>]

# Connect using Key
ssh -i <private-key> username@ip-address

# Connect using different shell
ssh username@ip-address -t /bin/sh
````

Default Port: `22`  

SSH can be used with GUI but is not recommended.  
`-X` (Untrusted Session): Enables `X11` security modules.  
`-Y` (Trusted Session): Disables `X11` security modules.  
The security module has caused issues with applications in the past.  
That is why `-Y` exists this is only recommended if you trust the remote server.  
This option only works if the destination app is using `X Server`.  

### Generate SSH Keys

````bash
ssh-keygen

# Generate key using specific algorithm
ssh-keygen -t <algorithm>
````

### Copy SSH Keys to Server

#### Using SSH Copy

````bash
# Move key to Remote Machine
ssh-copy-id username@ip-address
````

To specify a specific public key use the `-i` option.

````bash
# Add private key into client SSH agent
ssh-add ~/.ssh/tatu-aws-key

# Start SSH Agent (Use when ssh-add fails)
eval `ssh-agent -s`
````

When `ssh-copy-id` is used without `-i` it checks which private keys are loaded on the current (client) SSH agent and copies their corresponding public keys to server.  
The `eval` command is used to start the local SSH agent.  
So, the SSH agent has to be running and the private key for the public key to be copied as to be loaded into the SSH agent for `ssh-copy-id` without `-i` to work. 

#### Using Pipes

This method is not recommended.  
It should only be used if the above method does not work.

````bash
cat ~/.ssh/<pub-key> | ssh username@ip-address tee ~/.ssh/authorized_keys
````

### Check SSH Status

The following commands can be used to check if the SSH agent is running on client.

```bash
# SSH socket file location
echo $SSH_AUTH_SOCK

# List the loaded keys
ssh-add -l

# Checking running processes
ps -e | grep [s]sh-agent
```

### Create Aliases

Add the following configuration in `~/.ssh/config`

````shell
Host <alias_name>
	HostName <hostname/ ip-address>
	User <username>
	IdentityFile ~/.ssh/<my_key>
	ForwardAgent yes
````

**IdentifyFile**: Used to specify the private key to use for the SSH connection  
**ForwardAgent**: Forwards our local SSH Agent to the remote machine. This is useful if we want to use any of the locally saved Host information on remote machine

### SSH Configuration

Using the following settings on the remote server is strongly recommended.  
These options should only be changed once we have copied over the keys.  

 The known public keys are stored in `~/.ssh/authorized_keys`  
 Client Config: `~/.ssh/ssh_config`  
 Server Config: `~/.ssh/sshd_config`  

| Property Name            | Value |
| :----------------------- | :---- |
| `PasswordAuthentication` | `no`  |
| `PermitRootLogin`        | `no`  |

### Connecting to Old Server

Supported Algorithms & Ciphers will be provided by server when we try to establish connection using the normal command

```bash
ssh <ip-address> -oKexAlgorithms=+<algorithm-name> -c <cipher-name>
```

`-o`: Use option that is normally used in the config file.  
`KexAlgorithms` stands for “Key Exchange Algorithms”. It is the algorithm that is used initially to share the keys.  
`-c`: Encryption to use for the SSH connection.  

### Copying Files

The `scp` and `rsync` commands can be used to [[copy-commands|copy files]] to remote server.
