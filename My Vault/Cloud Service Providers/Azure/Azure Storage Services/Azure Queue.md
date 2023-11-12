---
tags: [azure, storage, queue]
---

Allows to store and retrieve small pieces of data (Messages)  
Designed for scalable async processing  

The message can be up to 64 KiB in size  
A single queue cannot exceed 500 TiB  
Storage Account can support 20,000 messages/sec (1 KiB message)  
Single queue can support 2000 messages/sec (1 KiB message)

Supports configurable TTL for messages (Default 7 days)

### Visibility Timeout

Messages that are consumed from the queue are not immediately deleted  
However the message will not be visible in the queue for a period of time  
This time period is called visibility timeout and this enables fault tolerance in the system

To prevent the message from reappearing we need to use the function/ method that deletes the message from queue when consumed

---
