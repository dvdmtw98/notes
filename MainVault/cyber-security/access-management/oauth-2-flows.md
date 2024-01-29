---
title: OAuth 2.0 Flows
tags:
  - security
  - access
  - management
  - identity
date: 2024-01-28 14:15:56 -0600
---
Client ID and Client Secret that is used by the client is generated when the client establishes a trust relationship with the authorization server

#### Authorization Code Flow

* Resource Owner wants client to send email invites on their behalf to all their contacts  
* Client sends request to the Authorization Server. The request contains information like Client ID, Redirect URL, Response Type and Scopes  
* Authorization Server verifies the Resource Owner and if required prompts for a login  
* Consent form is shown to ask the Resource Owner to grant permission to Client to access a external resource with the displayed scopes  
* Authorization Server sends authorization code to the user's browser which using the Redirect URI calls the Client   
* The client then calls the authorization server directly (does not use resource owners browser) and sends the client id, client secret and authorization code  
* The authorization server verifies the data and responds with an access token  
* The client does not understand the content of the access token but knows that using this token it can access the resource server  
* The resource server verifies the access token and if valid returns the information requested by the client

For public clients instead of client secret PCKE algorithm is used to generate secret on the fly

#### Implicit Flow

* Resource Owner wants client to send email invites on their behalf to all their contacts  
* Client sends request to the Authorization Server. The request contains information like Client ID, Redirect URL, Response Type and Scopes  
* Authorization Server verifies the Resource Owner and if required prompts for a login  
* Consent form is shown to ask the Resource Owner to grant permission to Client to access a external resource with the displayed scopes  
* Authorization Server redirects to callback URL along with the access token in the URL as a query parameter

Implicit Flow is an legacy flow and for security reasons is strongly discouraged

#### Resource Owner Password Flow

* Resource Owner wants client to send email invites on their behalf to all their contacts  
* Client sends request to the Authorization Server. The request contains Resource Owner Username and Password
* Authorization Server responds with an access token which the client can use to authenticate with Resource Server

Password Flow is strong discouraged as it exposed the users credentials to the client  
Client Credentials grant is recommended for Machine (Service Account) to Machine authorization
