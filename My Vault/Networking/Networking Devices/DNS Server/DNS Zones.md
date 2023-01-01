Zones are where the records in the DNS are stored (Records are stored in Text files)  
A DNS client is called as Resolver

Forward Lookup Zone : Have Name need IP Address  
Reverse Lookup Zone : Have IP Address need Name  
Zone Transfer (AXFR) : Replicate DNS on another Server

#### Primary Zone

Database is stored locally as a file on the Server (Data is stored in Flat Files)  
The DNS Server can be loaded on any server type  
Primary Zones Cause additional network traffic (As one PZ cannot see data of other PZ)
No Fault Tolerance  
No Security (Will accept any record if Dynamic DNS is Enabled)

#### Primary Zone with Active Directory Integration

DNS Records stored in Active Directory  
Uses AD replication servers (Changes can be made on multiple servers)  
DNS Server must be loaded on Domain Controller  
Reduce Network Traffic (Active Directory has all the records)  
Fault Tolerance (At least 2 DNS Servers should be set)  
Full Security (Active Directory Security)

#### Secondary Zone

Must get Database from Primary Zone (Entire Copy)  
Database stored locally but is NOT Editable  
Can be an copy of ADI Zone  
Used for Load Balancing  
Passes Record change request to PZ  
Delegation Record created on Secondary Zone (Specifies its Parent DNS who will answer all of the request)

#### Stub Zone

Must get Database from Primary Zone (Not Full Copy)  
Database stored locally but is NOT Editable  
Secondary gets only Three Resource Records Types (SOA, NS, A (Glue Host)) - Used to find Authoritative Server  
Used for Conditional Forwarding  
Delegation Record created on Stub Zone
