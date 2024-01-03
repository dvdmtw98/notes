---
tags:
- os
- linux
- command
- web
title: cURL Command
---

````bash
curl -X GET https://www.google.com [-v]
````

HEAD : Only return headers of the response  
OPTIONS : View the HTTP methods supported by the route

````bash
# The route should support PUT method
curl https://www.google.com --upload-file ~/scripts/backdoor.php
````

On some sites PUT method will not be specified in the output of OPTIONS  
Always test to see if the method can be used

````bash
# Save results to file
curl https://www.google.com -o ~/google.html
````

**<u>Flags</u>**:  
-O : Download Files  
-L : Follow Redirect  
-v : View request and handshake information  
-I : View Header only

[Linux Essentials: Curl Fundamentals - YouTube](https://www.youtube.com/watch?v=Xy7fDxz39FM)