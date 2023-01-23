---
title: Streaming Window Functions
---

Functions that group data based on time  
There are overlapping and non-overlapping windows  
Hopping and Sliding are overlapping windows

### Hopping Window

Hopes forwards in time using a fixed period  
We need to specify the window size and the hop size. If both these values are same it is same as tumbling window  
Overlapping of events/ windows can occur when using hopping window

![Hopping Window|600](../images/hopping_window.png)

### Sliding Window

Does not aggregate values after a fixed time period  
A new output is created when a new event is recorded or when event falls out of the window  
An event can belong to more than one sliding window as well

![Sliding Windows|600](../images/sliding_window.png)

### Tumbling Window

Splits data into distinct time segments in which we perform aggregation operations  
It is contagious, non-overlapping timing window and an event cannot belong to more than one window  
It is the most commonly used window function

![Tumbling Windows|600](../images/tumbling_window.png)

### Session Window

Aggregates events that arrive at the same time  
When no events occur no window is created  
The `SessionWindow()` function takes three parameters the time unit, timeout size and the max duration size

![Session Windows|600](../images/session_window.png)

### Snapshot Window

Groups events that occur at the same timestamp  
No window function is required

![Snapshot Window|600](../images/snapshot_window.png)