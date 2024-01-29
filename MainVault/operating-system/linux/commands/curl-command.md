---
tags:
  - os
  - linux
  - command
  - web
title: cURL Command
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28
---

````bash
curl -X GET https://www.google.com [-v]
````

HEAD: Only return headers of the response  
OPTIONS: View the HTTP methods supported by the route

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

**Flags**  
`-O`: Download Files  
`-L`: Follow Redirect  
`-v`: View request and handshake information  
`-I`: View Header only

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Xy7fDxz39FM?si=G_6gzhHkgWe1-kcL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
