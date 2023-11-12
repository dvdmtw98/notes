---
tags: [docker, devops, container, orchestration]
---

Secrets need to be stored in the Swarm before they can be used by the Services
Only containers in the assigned services can access them  
To the containers the secrets appear like files stored on disk but in reality they are in-memory filesystem  
They can be accessed at `/run/secrets/<secret-name>`

 > [!note]
 > * In Docker Compose secrets will only work when read from a file
 > * Docker behind the scences creates a bind mount which enables the container to access the secret from the file
 > * Secrets used in this manner is not secure, meant for development purpose only

````bash
# Add secret from file
docker secret create <secret-name> <filename>
# Add secret from terminal
echo <secret-value> | docker secret create <secret-name> -

# View secrets
docker secret ls

# Consume secret on the terminal
docker service create --name psql --secret <secret-name> -e POSTGRES_PASSWORD_FILE=/run/secrets/<secret-name> postgres
````

Compose **version 3.1** is required to be able to use stacks with secrets  
In compose file the secret can be provided from an file or can be read from the secret store

 > [!important]
 > * To use the secrets on the terminal the image should expose environment variables that can be passed from a file
 > * Allow with the `docker service update` command we can use the `--secret-rm` and `--secret-add` flag to remove and add secrets
 > * Adding or removing a secret from an running container will cause the container to be redeployed
