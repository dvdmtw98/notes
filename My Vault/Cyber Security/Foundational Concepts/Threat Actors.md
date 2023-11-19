---
tags:
  - security
  - concept
  - terms
---

### Threat Actor Motives

**Data Exfiltration**  
Unauthorized transfer of data from a computer  
Selling it on dark web, Identity Theft, Leveraging data for competitive advantage

**Financial Gain**  
Ransomware Attack, Bank Trojans

**Blackmail**  
Attacker obtains sensitive or compromising information about an individual  
Threatens to release the information to the public unless certain demands are met  

**Service Disruption**  
DDoS attack to overwhelm a network, service or server with excessive amounts of traffic  

**Philosophical or Political Beliefs**  
Use hacking to promote a political agenda, social change or to protest against unethical organizations

**Ethical Reasons**  
Hackers motivated with the desire to improve security

**Revenge**  
An employee who is disgruntled might want to harm their current or former employer by causing a data breach, disrupting services or leaking sensitive information  

**Disruption or Chaos**  
These threat actors engage in malicious activities for the thrill of it, to challenge their skills, or simply to cause harm  

**Espionage**  
Involves spying on individuals, organizations or nations to gather classified information   

**Cyber Warfare**  
Using cyberattacks an tool to attack nations both on and off the battlefield

### Threat Actor Attributes

Internal vs. External  

**Resources and Funding**  
Tools, skills and personal at the disposal of a given threat attacker

**Level of Sophistication and Capability**  
Technical Skills, Complexity of the tools, and their ability to evade detection

### Threat Actors
An individual or entity responsible for incidents that impact security and data protection

##### Unskilled Attackers
Also referred to as Script Kiddies  
Hackers with little or no skills and mostly use tools and exploits that are written by others  
Motived by a desire for recognition or the thrill of causing disruptions

##### Hacktivists
Hackers who are driven by a cause like social change, political agendas or terrorism  
Generally show a fairly high level of sophistication  
Website Defacement, DDoS Attacks, Doxing, Leaking of Sensitive Data  
e.g. Anonymous, LulzSec

##### Organized Cyber Crime Groups
Hackers who are part of a crime group that is well-funded and highly sophisticated  
Custom Malware, Ransomware, Sophisticated Phishing Campaigns  
They are mostly in it for the financial gains  
Data Breaches, identity Theft, Online Fraud, Ransomware Attack  
e.g. FIN7, Carbanak

##### Nation-state Actors
Groups that are sponsored by a government to conduct cyber operations  
False Flag Attack: Attack that appears to originate from a different source or group  
APT (Advanced Persistent Threat): Prolonged and targeted cyberattack  
Gather Intelligence, Disrupting Critical Infrastructure, Influencing Political Processes  
e.g. Stuxnet Worm

##### Insider Threats
Threats that originate from inside the organization  
Can have varying levels of capabilities  
Data Theft, Sabotage, Misuse of Access Privileges  
Motivated by financial gains, revenge, carelessness  
e.g. Edward Snowden, 2020 Twitter Bitcoin Attack  

### Tactics, Techniques and Procedures (TTPs)
Specific methods and patterns of activities or behaviors associated with a particular threat actor or group of threat actors

### Deception and Disruption Technologies
Techniques used to mislead, confuse and divert attackers from critical assets while simultaneously detecting and neutralizing threats

**Honeypot**  
A decoy system or network setup to attract potential hackers  
They are setup to mimic a real system and are used to collect information on the attacker

**Honeynet**  
Network of honeypots used to create a more complex system that is designed to mimic an entire network of systems, including servers, routers and switches

**Honeyfiles**  
A decoy file placed within a system to lure potential attackers  
Honeyfiles can have embedded code that can enumerate the attackers system when they try to access it

**Honeytokens**  
Piece of data or a resource that has no legitimate use but is monitored for access or use
They are useful for identifying insider threats  

**Other Techniques**  
Bogus DNS Entries  
Creating Decoy Directories  
Creating Dynamic Pages: confuse web crawlers and scrapping services  
Port Triggering: Ports are closed until a specific outbound traffic pattern is detected 
Spoofing Telemetry Data: Send fake data when network scan is detected