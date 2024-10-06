---
tags:
  - git
  - devops
title: Git Commit Command
date: 2024-01-28 14:15:56 -0600
updated: 2024-10-05 08:29:40 -0500
---

````bash
git commit -m "Message"
````

Commit all the files that are already **tracked** by git without adding them to staging area
Untracked files will not committed to the repo

````bash
git commit --amend -m "New commit message"
git commit -am "Message"
````

The `--amend` is an command that is used to fix mistakes that was made in the last commit  
This can be used to add new files and changes to the commit message as well

````bash
git commit --amend --no-edit
````

Add new files to the last commit without changing the commit message

 > [!important]
 > * `--amend` commands should only be only used in local copy of repo
 > * `--allow-empty` flag can be used to make a commit without any changes

### Commit Message

| Prefix     | Description                                                    | Example                                             |
| ---------- | -------------------------------------------------------------- | --------------------------------------------------- |
| `feat`     | A new feature.                                                 | `feat: Add user authentication`                     |
| `fix`      | A bug fix.                                                     | `fix: Resolve crash on login`                       |
| `docs`     | Documentation changes.                                         | `docs: Update README for installation instructions` |
| `style`    | Changes that do not affect the meaning of the code.            | `style: Format code with black`                     |
| `refactor` | A code change that neither fixes a bug nor adds a feature.     | `refactor: Simplify user service logic`             |
| `perf`     | A code change that improves performance.                       | `perf: Optimize image loading`                      |
| `test`     | Adding missing tests or correcting existing tests.             | `test: Add unit tests for authentication`           |
| `chore`    | Changes to the build process or auxiliary tools.               | `chore: Update dependencies`                        |
| `build`    | Changes that affect the build system or external dependencies. | `build: Add webpack configuration`                  |
| `ci`       | Changes to CI configuration files and scripts.                 | `ci: Update GitHub Actions workflow`                |
