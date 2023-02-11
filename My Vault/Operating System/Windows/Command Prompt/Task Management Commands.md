---
title: Task Management Commands
tags: [os, windows, command]
---

````batch
tasklist | findstr <string>

:: Kill a Task (Using Name & PID)
taskkill /f /t /im <taskname>
taskkill /f /t /pid <processid>
````