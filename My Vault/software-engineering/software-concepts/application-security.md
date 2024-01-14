---
tags:
- devops
- security
title: Application Security
---

#### Input Validation
Ensures that applications only act on well-defined and uncontaminated data  
**Validation Rules**: Delineate acceptable and unacceptable inputs  
Application should use frontend and backend validation

#### Static Code Analysis (SAST)

Also called White box testing

GitHub uses **CodeQL** engine by default  
Can use other engines that output results in SARIF (Static Analysis Result Interchange Format)  
When enabled an Action is setup to perform the code analysis

**SonarQube** (has Free version) & **SonarCloud** (Cloud based SaaS) are popular enterprise code analysis tool  
**MPD** (Programming Mistake Detector) is an code analysis tool used in the Java ecosystem, **Roslyn Analyzer** is similarly used for C# code

#### Dynamic Code Analysis (DAST)

Also called Black box testing  
The code of the application is not analyzed by the tool

**Fuzzing:** Bombard software with random data to trigger crashes and vulnerabilities  
**Stress Testing:** Evaluate the stability and reliability of a system under extreme conditions

ZAP (Zed Attack Proxy) an tool from OWASP (Open Web Application Security Project) popular tool to run Dynamic Web Application Security Tests

#### Dependency Scanning/ Software Composition Analysis (SCA)

Used to check if packages used by application are secure  
These tools also allow to generate a overview on the [Software Licensing](software-licensing.md) used by the dependencies  
**WhiteSource Bolt**, **Black Duck** (Synopsys Detect), OWASP Dependency Checker and Dependabot are commonly used tools in this space

Azure Container Registry uses Qualys for scanning Docker Images  
Synk, Trivy are other Docker Scanners

#### Code Signing
Technique used to confirm the identity of the software author and guarantee that the code has not been altered or corrupted since it was signed

#### Sandboxing
Security mechanism that is used to isolate running programs by limiting the resources they can access and the changes they can make to a system  
It also allows testing of code under various environments

---

[Software Engineering](../software-engineering.md)