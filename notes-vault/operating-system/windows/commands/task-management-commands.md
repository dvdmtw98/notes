---
title: Task Management Commands
tags:
  - os
  - windows
  - command
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

````batch
tasklist | findstr <string>

:: Kill a Task (Using Name & PID)
taskkill /f /t /im <taskname>
taskkill /f /t /pid <processid>
````
