---
title: Windows Terminal
tags:
  - os
  - windows
  - tool
date: 2024-01-28 14:15:56 -0600
updated: 2024-05-08 08:37:32 -0500
---

### Split Panes

Alt + Shift + - (Horizontal Split)  
Alt + Shift + = (Vertical Split)  
Alt + Shift + d (Auto Split)

 > [!note]
 > The above commands will open the default profile in the split pane

Alt + Selected Profile from Drop down (Split selected profile in Split Mode)  
Alt + Arrows (Move between Panes)  
Ctrl + Shift + W (Close a Window/ Pane)

### Command Line

````batch
wt -p "Ubuntu" -d .

wt; new-tab -p "Ubuntu"; split-pane -p "Ubuntu" -V; split-pane -p "Kali Linux" -H -d "D:Downloads"
````

#### Options

`-p` : Profile Name  
`-d` : Working Directory  
`-V` : Vertical Split  
`-h` : Horizontal Split

 > [!info]
 > * When using the above from PowerShell the ";" has to be escaped using \`
 > * [Windows Terminal command line arguments | Microsoft Learn](https://docs.microsoft.com/en-us/windows/terminal/command-line-arguments?tabs=windows) (Documentation)
