---
title: ssh Command
tags:
  - os
  - linux
  - command
date: 2024-01-28 14:15:56 -0600
updated: 2026-09-14 19:17:38 +0530
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
ssh-keygen -t ed25519 -C "comment" -f ~/.ssh/key_name

# For Old Systems
ssh-keygen -t rsa -b 2048 -C "comment" -f ~/.ssh/key_name
````

When `-f` is used the entire path has to be provided.  

### Copy Public Key to Server

```bash
# List SSH keys loaded into memory
ssh-add -l
```

The above command will give error if SSH agent is not running. Run the below command if the agent is not running.

```bash
# Start SSH Agent
eval "$(ssh-agent -s)"
```

Once the agent is running the key has to be stored into memory before it can be copied to the target system.

````bash
# Add private key into SSH agent
ssh-add ~/.ssh/tatu-aws-key

# Move key to Remote Machine
ssh-copy-id username@ip-address
ssh-copy-id -i ~/.ssh/key_name.pub username@ip-address
````

When `ssh-copy-id` is used without `-i` it checks which private keys are loaded on the current (client) SSH agent and copies their corresponding public keys to server.  

### SSH Configuration

Disabling Password Authentication is strong recommended on servers.  
This option should only be changed once the key is copied over.  

| Property Name            | Value |
| :----------------------- | :---- |
| `PasswordAuthentication` | `no`  |
| `PermitRootLogin`        | `no`  |

| Purpose                             | Linux Path                | Windows Path                                        |
| ----------------------------------- | ------------------------- | --------------------------------------------------- |
| **SSH Server config**               | `/etc/ssh/sshd_config`    | `C:\ProgramData\ssh\sshd_config`                    |
| **SSH Client config (system-wide)** | `/etc/ssh/ssh_config`     | `C:\ProgramData\ssh\ssh_config`                     |
| **SSH Client Config (User)**        | `~/.ssh/config`           | `C:\Users\<user>\.ssh\config`                       |
| **Authorized Keys (Normal User)**   | `~/.ssh/authorized_keys`  | `C:\Users\<user>\.ssh\authorized_keys`              |
| **Authorized Keys (Admin User)**    | N/A (same as normal user) | `C:\ProgramData\ssh\administrators_authorized_keys` |
| **Known hosts**                     | `~/.ssh/known_hosts`      | `C:\Users\<user>\.ssh\known_hosts`                  |
| **Private key**                     | `~/.ssh/id_rsa`           | `C:\Users\<user>\.ssh\id_rsa`                       |
| **Public key**                      | `~/.ssh/id_rsa.pub`       | `C:\Users\<user>\.ssh\id_rsa.pub`                   |
| **Host keys (server identity)**     | `/etc/ssh/ssh_host_*`     | `C:\ProgramData\ssh\ssh_host_*`                     |

User config always overrides the system-wide configuration.

### Create Aliases

Add the following configuration in `~/.ssh/config`

```shell
Host winxp
    HostName 10.0.5.10
    User david
    IdentityFile ~/.ssh/winxp_private
    IdentitiesOnly yes
    HostKeyAlgorithms +ssh-rsa
    PubkeyAcceptedAlgorithms +ssh-rsa
```

`IdentifyFile`: Private key to use for authentication.  
`IdentitiesOnly`: Only try the keys and algorithms that are specified.  
`ForwardAgent`: Forwards our local SSH Agent to the remote machine. Useful if we have to use any of the locally saved Host information on remote machine

### Connecting to Old Servers

When connecting with old system we might have to use old algorithms for the different stages used to establish the SSH section. The old algorithms are disabled by default on new versions of SSH. 

```bash
# Key Exchange Failure
ssh <user>@<ip-address> -o KexAlgorithms=+<algorithm-name> -c <cipher-name>

# Server Identity & Authentication Failure
ssh <user>@<ip-address> -o HostKeyAlgorithms=+<algorithm-name> -o PubkeyAcceptedAlgorithms=+<algorithm-name>
```

`-o`: Use an option that is normally configured in the SSH config file.  
`-c`: Encryption to use for the communication over the SSH tunnel.  

| Option                     | Description                                                                                                    |
| :------------------------- | :------------------------------------------------------------------------------------------------------------- |
| `KexAlgorithms`            | Algorithm used to perform math that will create the key used to construct the encrypted tunnel (shared secret) |
| `HostKeyAlgorithms`        | Algorithm that can be used by the server to prove its identity (sign its host key)                             |
| `PubkeyAcceptedAlgorithms` | Algorithm that is used for the public key authentication of the user.                                          |

### Windows

On Windows when using SSH with account that are members of the Administrator group the public key gets in: `C:\ProgramData\ssh\administrators_authorized_keys`.

`ssh-copy-id` will not work in for these accounts. The authorized public key file has to be created manually and then the public key has to be added.  

```powershell
New-Item -ItemType File -Force C:\ProgramData\ssh\administrators_authorized_keys

notepad C:\ProgramData\ssh\administrators_authorized_keys
```

The ownership of the file have to be changed for the file to be recognoized properly by OpenSSH.

```powershell
icacls C:\ProgramData\ssh\administrators_authorized_keys /inheritance:r

icacls C:\ProgramData\ssh\administrators_authorized_keys /grant "Administrators:F"

icacls C:\ProgramData\ssh\administrators_authorized_keys /grant "SYSTEM:F"
```

Finally, restart SSH for and the authorized keys file will get used by SSH.

```powershell
Restart-Service sshd
```
