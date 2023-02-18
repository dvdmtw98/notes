---
title: GitHub Action Usage
tags: [github, devops, pipeline]
---

Default Working Directory: `/home/runner/work/<repo-name>/<repo-name>`  
Variable Name: `GITHUB_WORKSPACE`  

The same directory is also used by the checkout action  
Before checkout clones a repo the content of working directory is cleared   

### Docker Actions

Docker Actions can only to executed on Linux Runners  

```bash
# Execute permission for script file
git update-index --chmod=+x entrypoint.sh
```

When using Docker action the **working directory** is mounted as a **volume**. If any directories are created in the container it will be usage in the next steps  

In the Container the Working Directory is mounted at `/github/workspace/`

### Composite Actions

The files that where included along with the composite action repo can be accessed at `/home/runner/work/_actions/repo-owner/name-of-action-repo/` or using `GITHUB_ACTION_PATH` variable

### References

- [Variables - GitHub Docs](https://docs.github.com/en/actions/learn-github-actions/variables)
- [Contexts - GitHub Docs](https://docs.github.com/en/actions/learn-github-actions/contexts#context-availability)

---

[GitHub Actions](GitHub%20Actions.md)