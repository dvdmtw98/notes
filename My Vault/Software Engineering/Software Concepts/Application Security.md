---
title: Application Security
tags: [devops, security]
---

### Static Application Security

Also called White box testing

GitHub uses **CodeQL** engine by default  
Can use other engines that output results in SARIF (Static Analysis Result Interchange Format)  
When enabled an Action is setup to perform the code analysis

**SonarQube** (has Free version) & **SonarCloud** (Cloud based SaaS) are popular enterprise code analysis tool  
**MPD** (Programming Mistake Detector) is an code analysis tool used in the Java ecosystem, **Roslyn Analyzer** is similarly used for C# code

---

### Dynamic Application Security

Also called Black box testing  
The code of the application is not analyzed by the tool

ZAP (Zed Attack Proxy) an tool from OWASP (Open Web Application Security Project) popular tool to run Dynamic Web Application Security Tests

---

### Dependency Scanning/ Software Composition Analysis (SCA)

Used to check if packages used by application are secure  
These tools also allow to generate a overview on the [Software Licensing](Software%20Licensing.md) used by the dependencies  
**WhiteSource Bolt**, **Black Duck** (Synopsys Detect), OWASP Dependency Checker and Dependabot are commonly used tools in this space

Azure Container Registry uses Qualys for scanning Docker Images  
Synk, Trivy are other Docker Scanners

---

[Software Engineering](../Software%20Engineering.md)