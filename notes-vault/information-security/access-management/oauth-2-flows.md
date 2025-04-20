---
title: OAuth 2.0 Flows
tags:
  - security
  - access
  - management
  - identity
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

Client ID and Client Secret that is used by the client is generated when the client establishes a trust relationship with the authorization server

#### Authorization Code Flow

* Resource Owner wants client to send email invites on their behalf to all their contacts  
* The client sends the request to the Authorization Server. The request contains information like Client ID, Redirect URL, Response Type and Scopes  
* The authorization Server verifies the Resource Owner and if required prompts for a login  
* A consent form is shown to ask the Resource Owner to grant permission to the client to access an external resource with the displayed scopes  
* The authorization server sends the authorization code to the user's browser which using the Redirect URI calls the Client   
* The client then calls the authorization server directly (does not use resource owner browser) and sends the client ID, client secret and authorization code  
* The authorization server verifies the data and responds with an access token  
* The client does not understand the content of the access token but knows that by using the token it can access the resource server  
* The resource server verifies the access token and if valid returns the information requested by the client

For public clients instead of client secrets PCKE algorithm is used to generate secrets on the fly

#### Implicit Flow

* Resource Owner wants client to send email invites on their behalf to all their contacts  
* The client sends the request to the Authorization Server. The request contains information like Client ID, Redirect URL, Response Type and Scopes  
* The authorization server verifies the Resource Owner and if required prompts for a login  
* A consent form is shown to ask the Resource Owner to grant permission to the client to access an external resource with the displayed scopes  
* The authorization server redirects to the callback URL along with the access token in the URL as a query parameter

Implicit Flow is a legacy flow and for security reasons is strongly discouraged

#### Resource Owner Password Flow

* Resource Owner wants client to send email invites on their behalf to all their contacts  
* The client sends the request to the Authorization Server. The request contains the Resource Owner Username and Password
* The authorization server responds with an access token which the client can use to authenticate with the Resource Server

Password Flow is strongly discouraged as it exposes the user's credentials to the client  
Client Credentials grant is recommended for Machine (Service Account) to Machine authorization
