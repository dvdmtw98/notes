---
tags:
- python
- programming
- advanced
title: Python Async Programming
---

Marking a function as `async` turns it into a coroutine function  
Unlike a normal function calling a coroutine function does not run the function  
Calling a coroutine function returns a coroutine which is a lightweight task

`asyncio.run()` is used to run/ start a coroutine function. The main coroutine function of the application can be started using this function. This function creates a event loop which is used to schedule and run and async functions. 

> [!NOTE]
> This function optimally take `debug=True` as a parameter which makes things slower but provides much better error information  

`await` keyword is used to tell Python to wait till the coroutine function is completed  
To await multiple coroutine functions together we need to create tasks, this is done using the  `asyncio.tasks()` function. This function takes coroutine function as input and turns it into a task that is scheduled to run in the event loop without awaiting it

`await asyncio.wait()` is used to wait for all the tasks that are scheduled on the event loop
`await asyncio.gather()` can be also used to await scheduled tasks, additionally gather also allows to schedule coroutines directly (it will automatically turn them into tasks)
If there any exception occurs in a task it will get reraised when we access the result of the task

> [!IMPORTANT]
> - Unlike multi threading and multi processing `asyncio` uses only the main process/ thread to achieve parallelism (new threads/ processes are not created)
> - For `asyncio` to have any effect all the libraries that are used in the async part of the code should support asynchronous programming (For making HTTP requests the `requests` library cannot be used as it does not support `asyncio` instead a library like `httpx` needs to be used)

### References

* [Intro to async Python | Writing a Web Crawler - YouTube](https://www.youtube.com/watch?v=ftmdDlwMwwQ)
* [VideosSampleCode/videos/117\_hello\_async at master · mCodingLLC/VideosSampleCode · GitHub](https://github.com/mCodingLLC/VideosSampleCode/tree/master/videos/117_hello_async)