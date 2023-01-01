We define the target IP that all request need to be forwarded on the client device  
Proxies are protocol specific (i.e. HTTP proxy will only route HTTP traffic to proxy server)
Works at Layer 7 & Layer 4 ([Load Balancer](../Networking%20Devices/Load%20Balancer.md)s)  
[VPN Server](../Networking%20Devices/VPN%20Server.md) similar to Proxies hide the IP Address but they additionally encrypt the traffic

### Proxy

Makes request on behalf of the client (Target not aware of source)

**Caching** : Caches pages in its memory. Helps to save bandwidth  
**Anonymity** : Destination is not aware of the client  
**Logging** : Log requests that are originating from the source network  
**Block Websites** : Restrict and filter unwanted websites (gambling, social media, etc.)  
**Content Checking** : Verifies the content is valid and doesn't have malicious content (Similar to application [Firewall](../Networking%20Devices/Firewall/Firewall.md))

---

### Reverse Proxy

Makes request of behalf of client (Source not aware of target)

**Caching** : Caches pages in its memory. Helps to save bandwidth  
**Load Balancing** : Allows to balance request between multiple internal servers  
**Ingress** : Used in microservices allows to route traffic based on endpoints  
**Canary Deployment** : Route traffic between new and old version of site
