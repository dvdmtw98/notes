IPv6 is not backwards compatible with IPv4

1. <u>Dual IP Stack</u>  
   IPv4 + IPv6 on the device. Can be used independent of each other  
   IPv4 Mapped Addresses

2. <u>Map IPV4 address to IPv6</u>  
   First 80 bits are 0 next 16 bits are 1 (shown as ffff) and last 32 bits are populated with IPv4 address  
   E.g. ::ffff:192.168.1.100

3. <u>Tunneling</u>  
   IPv6 packets are encapsulated in IPv4 datagram  
   Microsoft uses an special adapter called as Teredo to achieve Tunneling
