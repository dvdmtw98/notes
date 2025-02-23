---
title: Streaming Window Functions
tags:
  - azure
  - cloud
  - streaming
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

Functions that group data based on time  
There are overlapping and non-overlapping windows  
Hopping and Sliding are overlapping windows

### Hopping Window

Hopes forwards in time using a fixed period  
We need to specify the window size and the hop size. If both these values are same it is same as tumbling window  
Overlapping of events/ windows can occur when using hopping window

![[hopping-window.png|600]]

### Sliding Window

Does not aggregate values after a fixed time period  
A new output is created when a new event is recorded or when event falls out of the window  
An event can belong to more than one sliding window as well

![[sliding-window.png|600]]

### Tumbling Window

Splits data into distinct time segments in which we perform aggregation operations  
It is contagious, non-overlapping timing window and an event cannot belong to more than one window  
It is the most commonly used window function

![[tumbling-window.png|600]]

### Session Window

Aggregates events that arrive at the same time  
When no events occur no window is created  
The `SessionWindow()` function takes three parameters the time unit, timeout size and the max duration size

![[session-window.png|600]]

### Snapshot Window

Groups events that occur at the same timestamp  
No window function is required

![[snapshot-window.png|600]]
