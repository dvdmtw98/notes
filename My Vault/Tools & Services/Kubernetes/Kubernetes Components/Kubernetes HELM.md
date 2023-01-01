It is an package manager for Kubernetes. Allows to package and share YAML files
Bundle of YAML files is called as **Helm Chart**

Provides templating engine. Allows to create blueprints that will be used for reusing YAML files across multiple deployments

![HELM Template|600](../images/helm_template.png)

### Tiller Server

Helm v2 comes in 2 parts : Client (CLI) and Server (Tiller)  
Tiller has to be installed on the K8s cluster. It is response for deploying the resources

Tiller keeps an history of the YAML files of all deployments, this all us to HELM to update the running resources directly without having to delete and recreate all the resources  
Also provides rollback option to return to previous state of deployment

In Helm v3 Tiller was removed due to security concerns
