---
title: ssh Command
---

### Connect to Remote Machine

````ssh
ssh username@ip-address
ssh username@domain-name -p <port-no> # Connect on non-default port

ssh -i <private-key> username@ip-address # Connect using Key
ssh username@ip-address -t /bin/sh # Connect using different shell
````

 > [!INFO]
 > - SSH default port : 22
 > - SSH with GUI Support : -X (Untrusted Session), -Y (Trusted Session)

### Generate SSH Keys

````shell
ssh-keygen
ssh-keygen -t <algorithm> # Generate key using specific algorithm
````

### Copy SSH Keys to Remote Machine

1. **Copy using the SSH copy and add binaries**

````shell
ssh-copy-id username@ip-address # Move key to Remote Machine
ssh-add ~/.ssh/tatu-aws-key # Required if above command fails. No need to specify .pub with this command
eval `ssh-agent -s` # Use if above command does not work
````

2. **Copy by using Pipes**

````shell
cat ~/.ssh/<pub-key> | ssh username@ip-address tee ~/.ssh/authorized_keys
````

 > [!INFO]
 > * The public keys of known devices are stored in `~/.ssh/` folder in a file called "authorized_keys"
 > * SSH Configuration Files: `~/.ssh/ssh_config` (Client Config File), `~/.ssh/sshd_config` (Server Config File)
 > * Disable PasswordAuthentication on server if it's not disabled by default to prevent login with password

### Create Alias for Remote Machines

````shell
Host <alias_name>
HostName <hostname/ ip-address>
User <username>
IdentityFile ~/.ssh/<my_key>
ForwardAgent yes
````

* Add the following configuration in `~/.ssh/config`
* IdentifyFile: Used to specify the key to use for the SSH connection
* ForwardAgent: Forwards our local SSH Agent to the remote machine. This is useful if we want to use any of the locally saved Host information on remote machine