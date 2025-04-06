---
title: YouTube Download
tags:
  - software
  - automation
  - command
date: 2025-03-27 15:01:58 -0500
updated: 2025-03-30 20:47:41 -0500
---

### Thumbnails

```powershell
yt-dlp --skip-download `
	--write-thumbnail --convert-thumbnails jpg `
	-o "%(playlist_title,channel)s/%(title)s.%(ext)s" "<playlist_url>"
```

`%(playlist_id)s`: Playlist ID can help prevent issues because of special characters

```powershell
yt-dlp -f bestvideo `
	--download-sections "*00:01:30-00:01:31" `
	-o "%(playlist_title)s/%(title)s.%(ext)s" "<playlist_url>" `
	--exec "ffmpeg -i {} -frames:v 1 -q:v 2 '{}.jpg' && rm '{}'"

```

### Subtitles

```powershell
# All auto-generated subtitles
yt-dlp --skip-download `
	--write-auto-sub --all-subs `
	--convert-subs srt `
	-o "%(playlist_title,channel)s/%(title)s.%(ext)s" "<playlist_url>"

# All english auto-generated subtitles
yt-dlp --skip-download `
	--write-auto-sub --sub-lang en `
	--convert-subs srt `
	-o "%(playlist_title,channel)s/%(title)s.%(ext)s" "<playlist_url>"

# All maunually uploaded subtitles
yt-dlp --skip-download `
	--write-sub --all-subs `
	--convert-subs srt `
	-o "%(playlist_title,channel)s/%(title)s.%(ext)s" "<playlist_url>"

# All manually uploaded english subtitles
yt-dlp --skip-download `
	--write-sub --sub-lang en `
	--convert-subs srt `
	-o "%(playlist_title,channel)s/%(title)s.%(ext)s" "<playlist_url>"
```

[YT-DLP Output Templates](https://github.com/yt-dlp/yt-dlp#output-template)