---
title: FFMPEG
tags:
  - software
  - command
  - automation
date: 2025-03-29 17:40:52 -0500
updated: 2025-03-29 18:18:06 -0500
---

### Stream Information

```bash
ffmpeg -i input.mkv
ffprobe input.mkv
```

`-hide_banner`: Hides the banner information from all commands

### MKV to MP4

```bash
ffmpeg -i input.mkv -c copy output.mp4

# Select specific streams
ffmpeg -i input.mkv -map 0:0 -map 0:2 -c copy output.mp4
```

`-map`: Select specific streams

### Extract Subtitles

```bash
ffmpeg -i input.mkv -map 0:2 -c copy output.srt

# Covert other formats (ASS/SSA) to SRT
ffmpeg -i input.mkv -map 0:2 -codec:s srt output.srt
```

`-codec`: Used when stream have to be converted to a different format  
`-c copy`: Export the stream in raw (original) format 

### Extract Audio as MP3

```bash
# VBR Conversion
ffmpeg -i input.mkv -map 0:1 -codec:a libmp3lame -qscale:a 0 output.mp3

# CBR Conversion
ffmpeg -i input.mkv -map 0:1 -codec:a libmp3lame -bitrate 192k output.mp3
```

For VBR:  
`0`: Best quality large file size  
`9`: Worst quality small file size  

If the audio is already in MP3 no conversion is required

| Format | Best Encoder | Use Case                                                          |
| ------ | ------------ | ----------------------------------------------------------------- |
| `MP3`  | `libmp3lame` | High-quality audio for general use, wide compatibility            |
| `AAC`  | `libfdk_aac` | Better quality than MP3, popular in streaming and mobile devices  |
| `OGG`  | `libvorbis`  | Open-source, high-quality audio, often used in streaming          | 
| `FLAC` | `libflac`    | Lossless audio for archiving, professional applications           |
| `WAV`  | `pcm_s16le`  | Uncompressed, high-quality audio for professional applications    |
| `Opus` | `libopus`    | Superior quality for streaming, VoIP, and real-time communication |

### Trim Video

```bash
ffmpeg -i input.mp4 -ss 00:00:10 -to 00:00:30 -c copy segment1.mp4
```

### Combine Videos

```bash
ffmpeg -f concat -safe 0 -i filelist.txt -c copy output.mp4
```

Without `-i` the input filenames can be listed directly 