````bash
show payloads
show targets
````

#### Type of Payloads

Bind Payloads : Open a port on the target  
Reverse Payloads : Open a port on your machine and connect target to port on your machine (Recommended)

````bash
set payload <payload-name>
set payload <payload-no>
````

After selecting payload additional options can be set using "show options" command

#### Payloads

windows/meterpreter/reverse_http (Reverse Shell)  
exploit/multi/handler (Listener)  
exploit/multi/script/web_delivery (Web Delivery) (Ensure to set target)  
post/multi/manage/shell_to_meterpreter (Shell to Meterpreter)
