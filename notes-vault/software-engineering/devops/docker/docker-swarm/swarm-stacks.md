---
title: Swarm Stacks
tags:
  - docker
  - devops
  - container
  - orchestration
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

Stacks allows us to use compose files when working with swarm  
The **build** option is not available in stacks. A new option called **deploy** is introduced  
If compose file is used with swarm the build option is ignore and if we use it with docker compose the deploy option is ignored  
Docker Compose is not required when working with Stacks

Stack : Services, Volumes, Overlay Network and Secrets  
Compose **Version 3** is required at the very least when working with Stacks

````bash
# Deploy Stack File
docker stack deploy -c <yml-file> <stack-name>

# List running stacks
docker stack ls

# View services in the stack
docker stack services <stack-name>

# View tasks in the stack
docker stack ps <stack-name>
````

If deployed an updated stack file also the `docker stack deploy` command has to be used
