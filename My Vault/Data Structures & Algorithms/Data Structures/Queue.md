---
title: Queue
---

Queues are best implemented using a [Linked List](Linked%20List.md)  
When we Dequeue an element from Linked List the operation is O(1) while with [Array](Array.md) its O(n)

### Uses

Ride Haling App Priority  
Printer Spool  
Web Server Request Management  
BFS

### Time Complexity

| Operations | Time Complexity |
| ---------- | --------------- |
| Lookup     | O(n)            |
| Enqueue    | O(1)            |
| Dequeue    | O(1)            |
| Peek       | O(1)            |

Lookup operations are generally not performed as they are expensive

### Programs

<u>BFS (Breath First Search)</u>  
Add start node to queue mark as visited  
If Queue not empty Dequeue and visit its neighbors  
If not visited mark as true  
Add unvisited neighbor to queue