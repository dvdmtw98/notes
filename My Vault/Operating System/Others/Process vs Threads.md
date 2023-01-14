### Program Fie

A executable that contains set of instructions to perform a task  
It is stored as a file on the disk

### Process

When the code in the program is loaded into memory and executed by the processor it is called a process  
A process can need other resources (They are managed by the processor)  
Each process has its own memory address space. One process cannot corrupt the memory space of another process

### Thread

It is a unit of execution inside a process  
Each process has at least one thread (Main Thread)  
Each thread has its own stack and threads share a common address space. A misbehaving thread could cause the entire process to crash  