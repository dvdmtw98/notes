### Regions

Regions are independent geographical locations that consists of zones  
GCP has 25+ regions

---

### Points of Presence (PoP)

Intermediate location between GCP regions and end users  
These locations can be a third party data center or collection of hardware

1. **<u>Edge PoP</u>**  
   A location where the user can quickly enter (ingress) the GCP network for faster access to resources
2. **<u>CDN PoP</u>**  
   A location to serve (egress) cached websites, files, assets so they load very fast for end user
3. **<u>Cloud Media Edge</u>**  
   A location specialized for the delivery of media like video content

---

### Zone

It is a physical location made up of one or more datacenter  
A region will generally have 3 Zones  
Datacenters in zones are isolated from each other  
We can deploy a service in multiple zones to achieve higher fault tolerance

Services and Products can be scoped as:

1. **<u>Zonal Resource</u>**  
   A service that belongs to a single zone
2. **<u>Regional Resource</u>**  
   Resource that resides in multiple zones in a single region
3. **<u>Multi-regional Resource</u>**  
   Resource resides across zones present in multiple regions
4. **<u>Global Resource</u>**  
   Resource resides globally and resources and zones are abstracted away
5. **<u>Internal Services</u>**  
   Foundational services that are used by many other services  
   We cannot interact with these resources directly
