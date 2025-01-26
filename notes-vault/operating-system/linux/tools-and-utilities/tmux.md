---
title: Tmux
tags:
  - os
  - linux
  - tool
date: 2024-01-28 14:15:56 -0600
updated: 2025-01-19 13:22:19 -0600
---
Tmux is a Terminal Multiplexer  
Tmux consists of Sessions, Windows and Panes  

Session is the top most layer in Tmux and manages one or more Windows
At a time we can only attack to a single session  
Each session has a single active Window

Windows are containers to one or more Panes
Windows are like tabs in browsers. Each Window has an active Pane

In Tmux all commands are prefixed by an hotkey (Default: `Ctrl + b`)

[Tmux Cheat Sheet & Quick Reference](https://tmuxcheatsheet.com/)

### Session Management

#### List Sessions

````shell
tmux ls
s # When in tmux
````

#### Attach/ Detach Session

````shell
tmux a -t <session-no/session-name>

# Attack to recent session
tmux a

# Detach from current session
d
````

#### Create Session

````shell
tmux
tmux new -s <session-name> # Named session

# From within Tmux
:new
````

#### Rename Session

````shell
tmux rename-session -t <session-no> <new-session-name>

# Rename the current session
$
````

#### Move between Session

`(` & `)`: Move between Sessions

#### Killing Session

````shell
# Kill specific session
tmux kill-session -t <session-no>

# Kill all Tmux Sessions
tmux kill-server
````

### Windows

`c`: New Window  
`,`: Rename Window  
`&`: Close Window  
`w`: List Windows

#### Navigating Windows

`n`: Next  
`p`: Previous  
`0-9`: Move

#### Swapping Windows

`:swap-window -s 2 -t 1`

### Panes

#### Split Window
`%` (Horizontal)  
`"` (Vertical)

#### Move between Panes
`Arrow Keys`: Move between panes  
`q`: Flash Pane Number   
`q 0-9`: Move to Pane  
`o`: Next Pane

#### Arrange/ Resize Panes
`Space`: Different Layouts  
`Ctrl + Arrow Key`: Resize pane  
`z`: Zoom & Unzoom  
`{` & `}`: Swap Panes
#### Copy Text
Space - Arrows - Enter 

Space starts copy process  
Arrow to select chunk of text  
Enter to copy selected text

#### Closing Pane
`x`: Close current pane  
`exit`: Close Pane  
`Ctrl + d`: Kill Pane

#### Pane to Window

`!`: Turn Pane to new Window

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/DzNmUNvnB04?si=1VBDJ1Qkh8STIsBU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/GH3kpsbbERo?si=lFJTQ0b3C37A-cUn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
