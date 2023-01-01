#### Host (A and AAAA) Record

Forward Lookup Zone  
IPv4 : A Record  
IPv6 : AAAA Record

#### Pointer (PTR) Record

Reverse Lookup Zone  
Have an IP Address need Name

#### Canonical Name (CNAME)

Alias Records  
Used to hide the server details from network clients  
Can be used to redirect to another server

#### NS (Name Server Record)

Points to other DNS Servers

#### Mail Exchange (MX) Record

Points to Mail Servers. Identifies corporate mail server  
Mail Servers can have priority (Lower the number higher the priority)

#### TXT (Text) Record

Custom DNS record to associate an Service with a specific DNS Zone  
Office 365 requires an TXT record to confirm organization owns a specific DNS Zone

#### Service Location (SRV) Record

They point to servers that are running on the network  
Tells users where to find a specific service like the Global Catalog (Index)

#### SOA (Start of Authority)

Every Zone contains SOA at the beginning of the Zone  
Tells the Zone about itself  
Contains information like Owner, TTL, Authoritative Server, Serial Number
