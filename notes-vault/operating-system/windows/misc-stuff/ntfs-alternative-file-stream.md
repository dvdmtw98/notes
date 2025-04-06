---
title: NTFS Alternative File Stream
tags:
  - os
  - windows
  - file-system
date: 2024-01-28 14:15:56 -0600
updated: 2024-02-07 10:37:08 -0600
---

All files contains a main stream called `$DATA`. This stores the regular file contents  
Additional streams can be created for hiding additional data (Even binary data like image can be added into a stream)  
When viewing the size of the file the size of the alternative streams are not included  
Streams can be attached to folders as well

````batch
:: Check if Alternate streams are present
dir /R

:: Create a new stream
echo [text] > file_name:stream_name

:: Read the data from the stream
more < file_name:stream_name
notepad file_name:stream_name
````

When we download files from the net the file is marked as untrusted as it is from somewhere else  
The OS knows this because of an Alternative File Stream called Zone Identifier  
This store the information about the zone of the file.

| Zone | Location              |
| ---- | --------------------- |
| 0    | My Computer           |
| 1    | Local Intranet Zone   |
| 2    | Trusted Sites Zone    |
| 3    | Internet Zone         |
| 4    | Restricted Sites Zone |
