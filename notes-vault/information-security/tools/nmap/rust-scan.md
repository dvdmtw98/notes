---
title: Rust Scan
tags:
  - security
  - tool
  - nmap
date: 2024-01-28 14:15:56 -0600
updated: 2024-03-14 12:45:38 -0500
---

````bash
rustscan -a <ip-address> --ulimit 5000 -- -sS -A -T4
# AND (Both are equivalent)
nmap -Pn -sS -A -T4 -p- <ip-address> -vvv
````

**Flags**  
`-a`: Target IP Address  
`-r`: Port Range (e.g. 1-1000)  
`-p`: Ports (e.g. 80,8080,1337)  
`--ulimit`: No. of file descriptors (Socket connects)

`--top`: Scan top 1000 ports  
`--scan-order "Random"`: Scan ports in random order (Helps to Evade Firewall)

`-b size`: Batch Size (Ports to Scan in in 1 sec)  
`-t milliseconds`: 4000 wait for 4 seconds before next scan. Default : 1.5 secs

[GitHub - RustScan/RustScan: 🤖 The Modern Port Scanner 🤖](https://github.com/RustScan/RustScan)
