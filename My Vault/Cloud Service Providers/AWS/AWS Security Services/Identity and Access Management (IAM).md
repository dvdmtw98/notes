It allows us to control what resources a user has access to and how they use those resources (authorization)  
We can only have 1 root user in AWS. We can add more admin users if required

### Users

People who have access to the resources  
When creating a new account we need to specify the type of access - Programmatic   Access (Using API, CLI, SDK) and/or AWS Management Access (Web UI)

### Groups

When we have users that need to be given identical access we make use of groups  
The rules and policies can be applied on the group which is turn is applied to all the users in the group

### Roles

Similar to users but they are assigned to applications  
We assign permissions to entities so that they can perform operations on our behalf  
e.g. S3 instance has to access RDB for some data then we assign role to S3 that allows it to access RDB

### Policies

Permissions that are assigned to a user, group, role or resource  
Policy is an document (JSON) that explicitly lists permissions
