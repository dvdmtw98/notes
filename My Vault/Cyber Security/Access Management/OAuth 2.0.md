---
tags: [security, identity-management, authorization]
---

### Key Terms

**Resource Owner**: User  
**Client**: Application used by the resource owner  

**Authorization Server**: Service that knows Resource Owner i.e. site where user has account  
**Resource Server**: Service/API that client wants to use on behalf of the resource owner  

**Redirect URI**: URL that authorization server will redirect the Resource Owner after granting permissions to client  
**Response Type**: Type of information the client expects to receive e.g. authorization code  
**Scope**: Granular permissions that the client requires to perform actions  
**Consent**: Client asking the Resource Owner for permission to use the required scopes  

**Client Id**: Used to identify the client on the authorization server  
**Client Secret**: A value that is only known to client and authorization server. Used by them to share information privately  

**Authorization Code**: Temporary short-lived code that is sent back to the client from the authorization server. The client sends back the Authorization code along with the client secret for Access Token  
**Access Token**: Key that will be used by the client to communicate with the resource server

### OAuth 2.0

Allows application to permission action on behalf of user in another application  
OAuth is used to **authorize**/delegate authorization with an external resource  

Authorization with external resource is performed using **Access Token** (aka Bearer Token)  
They do not have a defined format but are mostly JWTs  
If the token does not include an audience claim then it becomes an **opaque token**

Access Token does not guarantee that the user is logged in  
The client does not understand and does not care about the content of the Access Token

### OAuth 2.0 Flow

Client ID and Client Secret that is used by the client is generated when the client establishes a trust relationship with the authorization server

#### Authorization Code Flow

- Resource Owner wants client to send email invites on their behalf to all their contacts  
- Client sends request to the Authorization Server. The request contains information like Client ID, Redirect URL, Response Type and Scopes  
- Authorization Server verifies the Resource Owner and if required prompts for a login  
- Consent form is shown to ask the Resource Owner to grant permission to Client to access a external resource with the displayed scopes  
- Authorization Server sends authorization code to the user's browser which using the Redirect URI calls the Client   
- The client then calls the authorization server directly (does not use resource owners browser) and sends the client id, client secret and authorization code  
- The authorization server verifies the data and responds with an access token  
- The client does not understand the content of the access token but knows that using this token it can access the resource server  
- The resource server verifies the access token and if valid returns the information requested by the client

For public clients instead of client secret PCKE algorithm is used to generate secret on the fly

#### Implicit Flow

- Resource Owner wants client to send email invites on their behalf to all their contacts  
- Client sends request to the Authorization Server. The request contains information like Client ID, Redirect URL, Response Type and Scopes  
- Authorization Server verifies the Resource Owner and if required prompts for a login  
- Consent form is shown to ask the Resource Owner to grant permission to Client to access a external resource with the displayed scopes  
- Authorization Server redirects to callback URL along with the access token in the URL as a query parameter

Implicit Flow is an legacy flow and for security reasons is strongly discouraged

#### Resource Owner Password Flow

- Resource Owner wants client to send email invites on their behalf to all their contacts  
- Client sends request to the Authorization Server. The request contains Resource Owner Username and Password
- Authorization Server responds with an access token which the client can use to authenticate with Resource Server

Password Flow is strong discouraged as it exposed the users credentials to the client  
Client Credentials grant is recommended for Machine (Service Account) to Machine authorization

### Confidential Client and Public Client

**Confidential Client** a client that can store a secret without exposing it publicly  
e.g. Server-side applications that can use environment variables to store information

**Public Clients** are clients that do not have the mechanism to store secrets  
e.g. SPAs, Mobile Apps, IoT Devices, etc. and other applications where the user can access the source code 

Client Secret is included in the request to the authorization server for access token  
Since public cannot store secrets an alternative approach is used where a secret is generated on the fly by the application    
This process of generating secret is called PCKE (Proof Key for Code Exchange)

---

[Access Management](Access%20Management.md)
