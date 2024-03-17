---
tags:
  - os
  - linux
  - tool
title: Tmux
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-29 14:29:21 -0600
---
`Tmux`: Terminal Multiplexer  
In Tmux there are sessions, sessions have windows and windows have panes  
Tmux does not use the concept of modes rather prefixed each of the command has hotkey (Default: `Ctrl + B`)

[Tmux Cheat Sheet & Quick Reference](https://tmuxcheatsheet.com/)

### Session Management

#### List Sessions

````shell
tmux ls
s # When in tmux
````

#### Attach/ Detach an Session

````shell
tmux a -t <session-no/session-name>
tmux a # When only one session is present
d # Detach from current session
````

#### Create Session

````shell
tmux
tmux new -s <session-name> # Create a new named session
````

#### Rename Session

````shell
tmux rename-session -t <session-no> <new-session-name>
$ # Rename the current session
````

#### Move between Session
`(` and `)` keys

#### Killing Session

````shell
tmux kill-session -t <session-name/session-no>
````

### Windows

`c`: New Window  
`,`: Rename Window  
`&`: Close Window  
`w`: List Windows

#### Move between Windows

`n`: Next  
`p`: Previous  
`0-9`: Move

### Panes

#### Split Panes/ Windows
% (Horizontal)  
" (Vertical)

#### Move between Panes
`Arrow Keys`: Move between panes  
`q`: Flash Pane Number   
`q 0-9`: Move to Pane  
`o`: Next Pane

#### Arrange/ Resize Panes
`Space`: Different Layouts  
`Ctrl + Arrow Key`: Resize pane  
`z`: Zoom/ Unzoom

#### Copy Text
Space - Arrows - Enter 

 > [!NOTE]
 > * Space starts copy process
 > * Arrow to select chunk of text
 > * Enter to copy selected text

#### Closing Pane/ Window
`x`: Close current pane  
`exit`: Close Pane
