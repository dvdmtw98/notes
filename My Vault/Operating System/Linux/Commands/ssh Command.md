---
tags: [os, linux, command]
---

````bash
ssh username@ip-address [-p <port>]

# Connect using Key
ssh -i <private-key> username@ip-address

# Connect using different shell
ssh username@ip-address -t /bin/sh
````

 > [!INFO]
 > - SSH default port: 22
 > - SSH with GUI Support: -X (Untrusted Session), -Y (Trusted Session)

### Generate SSH Keys

````bash
ssh-keygen
# Generate key using specific algorithm
ssh-keygen -t <algorithm>
````

### Copy SSH Keys to Remote Machine

**Copy using the SSH copy and add binaries**

````bash
# Move key to Remote Machine
ssh-copy-id username@ip-address

# Required if above command fails
# No need to specify .pub with this command
ssh-add ~/.ssh/tatu-aws-key

# Use if above command does not work
eval `ssh-agent -s`
````

**Copy by using Pipes**

````bash
cat ~/.ssh/<pub-key> | ssh username@ip-address tee ~/.ssh/authorized_keys
````

 > [!INFO]
 > * The public keys of known devices are stored in `~/.ssh/` folder in a file called "authorized_keys"
 > * SSH Configuration Files: `~/.ssh/ssh_config` (Client Config File), `~/.ssh/sshd_config` (Server Config File)
 > * Disable PasswordAuthentication on server if it's not disabled by default to prevent login with password

### Create Alias for Remote Machines

Add the following configuration in `~/.ssh/config`

````shell
Host <alias_name>
HostName <hostname/ ip-address>
User <username>
IdentityFile ~/.ssh/<my_key>
ForwardAgent yes
````

**IdentifyFile**: Used to specify the key to use for the SSH connection  
**ForwardAgent**: Forwards our local SSH Agent to the remote machine. This is useful if we want to use any of the locally saved Host information on remote machine

### Connecting to Old Server

Supported Algorithms & Ciphers will be provided by server when we try to establish connection using the normal command

```bash
ssh <ip-address> -oKexAlgorithms=+<algorithm-name> -c <cipher-name>
```

---
