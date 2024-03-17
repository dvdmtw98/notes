---
tags:
  - github
  - devops
  - pipeline
title: GitHub Actions Commands
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

### Workflow Structure

All actions are repositories that contain logic that can be used to perform a task  
Each job created its own virtual environment (runner) and is executed in parallel by default  
GitHub supports Ubuntu, Windows and MacOS based systems  

The `${{ }}` syntax is used by YAML to reference other values  
Secrets to be used in the Workflow have to be configured in the repo secrets page  

**<u>Commands</u>**

```yaml
name: Java CI with Gradle
```

Name of the Action (will show up in the Actions Tab)  
This is an optional field  

```yaml
env:
	AZURE_WEBAPP_NAME: 'sunshine-migrate'
	AZURE_WEBAPP_PORT: 8080
```

The `env` section is used to defined environment variables that are assessable throughout the workflow

```yaml
on:
  push:
    branches: [ master ]
  pull_request:
	branches: [ master ]
```

The `on` section is used to define the Events on which the Workflow will be triggered  
[Events that trigger workflows - GitHub Docs](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows)  

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
	
	steps:
	- uses: actions/checkout@v2
```

In above snippet `build` is the name of the job  
Jobs are a sequence of tasks that need to be executed together  
A workflow can contain more than one Job  
An Job can be used to call another Action, run commands or perform setup operations  

```yaml
* name: Checkout Code
  uses: actions/checkout@v2
  with:
    branch: master
```

It is used to select an Action  
The official actions are all assessable at `actions/`  
`with` is used to specify the configurable values of a action  

```yaml
* name: Change Permission of Gradle
  run: |
    chmod +w gradlew
    cd ..
```

The `run` command is used to execute a command on the system building the code  
In YAML `|` is used to denote multiline statements

```yaml
runs-on: ${{ matrix.os }}
strategy:
  os: [ubuntu-latest, windows-lastest, macOS-latest]
```

The strategy syntax can be used to build and test the application against multiple operating systems
