Uses RC4 for Encryption. Old Algorithm

<u>Working</u>
  
Each packet send over the air is encrypted using an Key Stream  
An Random IV is used to generate the key stream. The IV is 24 bits only  
IV(24 bit) + Password = Key Stream (Used to Encrypt Data)  
Along with each packet the IV is send in plain text to the router

<u>Issues</u>
  
IV is 24 bits only. The IV is sent in plain text  
On an busy network the IV will repeat after sometime due to its small size
