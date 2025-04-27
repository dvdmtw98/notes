---
title: MPV
tags:
  - software
  - video
date: 2025-04-15 18:36:05 -0500
updated: 2025-04-26 23:56:22 -0500
---

### Windows Setup

#### Installation

Binary: [Shinchiro’s Windows MPV Build](https://github.com/shinchiro/mpv-winbuild-cmake/releases)  
Download the latest non-dev `x86_64-v3` zip.

![[mpv-1.png|600]]

Extract the content of the zip to the location were you want to install MPV.  
I save/install it at: `C:\ProgramData\MPV`.  
And that’s it. MPV is installed on Windows. You can launch the player using `mpv.exe`.

To access MPV from the command line the install location has to be added to the **Path** environment variable.  
This can be done with PowerShell using the following command:

```powershell
# Change path to location were you have installed it
[Environment]::SetEnvironmentVariable(
	"PATH", $env:PATH + ";C:\ProgramData\MPV", "User")
```

#### File Association

In the `installer` directory there is a script called `mpv-install.bat`.  
This script can be used to automatically setup file associations for MPV.  
Personally, I do not use the script. I manually configure the file formats that should be opened with MPV.

Manually configure MPV to always open MP4 files:  
Find a MP4 file: `Right click → Open with → Choose another app`.  
In the menu scroll to bottom and select: `Choose an app from your PC`.  
Navigate to the directory where MPV is installed and select `mpv.exe`.  
Select `mpv.exe` in the menu and click on the `Always` button.

### Updates

#### Manual Update

![[mpv-2.png|460]]

The script `updater.bat` in the main directory is used to update MPV.   
The 1st time the script has to be executable manually (creates `settings.xml`).  
Subsequent executions can be automated. Always run the script as administrator.

![[mpv-3.png|600]]

On the 1st run you will be asked a few questions. Answer them as follows:  
Q1: `1` (weekly)  
Q2: `2` (x86_64-v3)  
Q3: `Y` (Yes, delete archive)  
Q4: `n` (No, skip install)

> [!INFO]
> - I highly recommend installing at least `ffmpeg`.
> - It is better to manually install the latest version.
> - The MPV script can end up installing an older version.
> - `ffmpeg` allow us to edit audio/video files from the CLI. `yt-dlp` allows us to view and download videos from YouTube (and some other sites).
> - The script cannot find it but I have `ffmpeg` installed on my system.

#### Automatic Update

Make sure to run `updater.bat` at least once before proceeding.  
The `settings.xml` file needs to exist for the unattended update to work.
Open `Task Scheduler`. Select `Action -> Create Task...`

![[task-scheduler-1.png|220]]

In the **General** tab give the task a **Name**.  
Make sure **Run with highest privileges** is check.  
Change **Configure for** to `Windows 10`.

![[task-scheduler-2.png|480]]

Go to the `Triggers` tab. Select **New**.  
Use the options to configure when the task will be executed.  
I have it configured to run **every Saturday at 9:45 PM**.

![[task-scheduler-3.png|480]]

Go to the `Actions` tab. Select **New**.  
In **Program/script** enter `cmd.exe`.  
In **Arguments** enter `/c "C:\path\to\mpv\updater.bat"`.

![[task-scheduler-4.png|340]]

If on laptop go to **Conditions** tab and uncheck the options other `Power`.

![[task-scheduler-5.png|480]]

Click on `Ok` to create the task.

### Configuration

In the main directory create a folder called `portable_config`.  
All MPV configuration will be stored in this directory.

MPV Config: [David’s MPV Config](https://github.com/dvdmtw98/dotfiles/tree/main/Common/mpv)  
You can download my config to the `portable_config` to use my settings & scripts.  
To use my scripts you also need to create a directory called `lua` (in main directory).  
And then add the following file: [Kikito’s md5.lua](https://github.com/kikito/md5.lua/blob/master/md5.lua) (used by `remeber_position.lua`)

| Filename                   | Purpose                                                                      | Type                                                                              |
| :------------------------- | :--------------------------------------------------------------------------- | :-------------------------------------------------------------------------------- |
| `autoload.lua`             | Automatically adds videos present in the current video's folder to playlist. | [3rd party](https://github.com/mpv-player/mpv/blob/master/TOOLS/lua/autoload.lua) |
| `display_version.lua`      | Debugging script to print version information to console                     | Custom                                                                            |
| `modernz.lua`              | A modern UI for MPV                                                          | [3rd party](https://github.com/Samillion/ModernZ)                                 |
| `remeber_position.lua`     | Makes MPV remember were the video was paused/stopped on last watch.          | Custom                                                                            |
| `remember_window_size.lua` | Remembers the window size from last playback.                                | Custom                                                                            |
| `screenshot_directory.lua` | Use different screenshot folder based on OS.                                 | Custom                                                                            |
| `thumbfast.lua`            | Show thumbnails on scroll on the progress bar.                               | [3rd party](https://github.com/po5/thumbfast)                                     |
| `vlcorp.lua`               | Crop video to different resolutions.                                         | [3rd party](https://github.com/kism/mpvscripts/blob/main/scripts/vlccrop.lua)     |

MPV Resources: [stax76’s curated list of mpv resources](https://github.com/stax76/awesome-mpv)

### Commands

| Shortcut                    | Description            |
|:--------------------------- |:---------------------- |
| `` ` ``                     | Open Console           |
| `sub-add path/to/to.srt`    | Load external subtitle |
| `loadfile path/to/file.mp4` | Load video             |
| `vf clr`                    | Clear Video Filters    |
| `set panscan 0`             | Reset panscan (Zoom)   |
