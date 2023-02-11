---
title: Tmux (Terminal Multiplexer)
tags: [os, linux, tools]
---

In Tmux there are sessions, sessions have windows and windows have panes  
Tmux does not use the concept of modes rather prefixed each of the command has hotkey (Default : Ctrl + B)

[Tmux Cheat Sheet & Quick Reference](https://tmuxcheatsheet.com/)

---

### Session Management

1. <u>List Sessions</u>

````shell
tmux ls
s # When in tmux
````

2. <u>Attach/ Detach an Session</u>

````shell
tmux a -t <session-no/session-name>
tmux a # When only one session is present
d # Detach from current session
````

3. <u>Create Session</u>

````shell
tmux
tmux new -s <session-name> # Create a new named session
````

4. <u>Rename Session</u>

````shell
tmux rename-session -t <session-no> <new-session-name>
$ # Rename the current session
````

5. <u>Move between Session</u>

`(` and `)` keys

6. <u>Killing Session</u>

````shell
tmux kill-session -t <session-name/session-no>
````

---

### Windows

c (New Window)  
, (Rename Window)  
& (Close Window)  
w (List Windows)

1. <u>Move between Windows</u>  
   n (Next)  
   p (Previous)  
   0-9 (Move)

---

### Panes

1. <u>Split Panes/ Windows</u>  
   % (Horizontal)  
   " (Vertical)

2. <u>Move between Panes</u>  
   Arrow Keys (Move between panes)  
   q (Flash Pane Number)  
   q 0-9 (Move to Pane)  
   o (Next Pane)

3. <u>Arrange/ Resize Panes</u>  
   Space (Different Layouts)  
   Ctrl + Arrow Key (Resize pane)  
   z (Zoom/ Unzoom)

4. <u>Copy Text</u>  
   Space - Arrows - Enter 

 > [!NOTE]
 > * Space starts copy process
 > * Arrow to select chunk of text
 > * Enter to copy selected text

5. <u>Closing Pane/ Window</u>  
   x (Close current pane)  
   exit (Close Pane)

---

[Linux Tools & Utilities](Linux%20Tools%20&%20Utilities.md)