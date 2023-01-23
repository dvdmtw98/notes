---
title: Process Management Commands
---

### Process Management

The `ps` command is used to view the running processes on a system  
By default it only shows the processes that are running in the terminal

````bash
# View all processes that belongs to a user
ps -u <username>

# View all the processes running on the system
ps -aux
````

**<u>Flags</u>**  
a: All process on the system (All users)  
u: Show user that owns the process  
x: Exclude processes in the current terminal

---

### Terminate a Process

To terminate a process the `kill` command is used  
This command takes the process id/ job id as a parameter

````bash
# Find process id
pgrep <process-name>
grep -u <username> | grep <process-name>

# Kill process
kill <process-id>
````

If there are multiple processes of a type that we want to kill the `pkill` command can be used

````bash
# Kills all the ping proccesses on the system
pkill -9 <process-name>
````

---

### Foreground & Background Process

`Ctrl + C` : Sends Interrupt Signal (SIGINT Signal)  
`Ctrl + Z` : Sends Suspend Signal (SIGSTOP Signal)

The `job` command displays all the running jobs along with their job number  
The `fg` and `bg` command is used to move process to foreground and background

````bash
jobs
bg %<job-no>
fg %<job-no>
````

When a process is in background even though there might be output on the terminal we can still run other commands

The `&` sign is used with the command to process in the background directly

````bash
subl file_name.py &
nohup sleep 1000 &
````

The `nohup` command prevents the hang-up signal from terminating the process

---

### Signal & Traps

When we use the kill command we are sending the kill signal to the process  
There are other signals that can be sent to the process as well

````bash
# View all available signals
kill -l 
````

| Number | SIG     | Meaning                     |
| ------ | ------- | --------------------------- |
| 1      | SIGHUP  | Clean tidy-up               |
| 2      | SIGINT  | Interrupt                   |
| 3      | SIGQUIT | Quit                        |
| 6      | SIGABRT | Abort                       |
| 9      | SIGKILL | Die Now (cannot be trapped) |
| 14     | SIGALRM | Alarm Clock                 |
| 15     | SIGTERM | Terminate                   |
| 18     | SIGCONT | Continue                    |
| 19     | SIGSTOP | Suspend/ Stop               |

When we don't specify the signal in the kill command SIGTERM is sent to the process
It is also called as Soft Kill. In certain cases the process can refuse this signal

When we use Ctrl + Z the SIGSTOP signal is sent to the process  
If we use Ctrl + Z the second time SIGCONT signal is send to process

````bash
# Forcefully kill the process
kill -KILL %<job-no>
kill -9 %<job-no>
````

In your code we can write logic (Trap) that can be used to detect various signals and catch them. SIGKILL and SIGSTOP Signals cannot be caught, blocked or stopped  
In code when a process is interrupted due to error SIGQUIT signal is sent to it