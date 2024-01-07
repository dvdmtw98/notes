---
tags:
- cloud
- migration
title: Types of Migration
---

### Lift and Shift

Move workloads from a source environment to a target environment with **minor or no modifications or refactoring**

Ideal when

* A workload can operate as-is in the target environment
* Little or no business needs have to change

Considerations

* Requires the least amount of time because the amount of refactoring is kept to a minimum
* Team can continue to use the same set of tools and skills that they were using before
* Doesn't take full advantage of cloud platform features

---

### Move and Improve

**Modernize the workload** while migrating to take advantage of cloud native capibilities

Ideal when

* Architecture or Infrastructure of an app isn't supported in the target environment
* A major update to the workload is necessary

Considerations

* Take longer than lift and shift migrations
* Must be refactored in order for the app to migrate
* Extra time and effort as part of the life cycle of the app
* Requires that you learn new skills

---

### Rip and Replace

Decommission an existing app and **completely redesign and rewrite** it as a cloud native app

Ideal when:

* Current app isn't meeting your goals
* You want to remove legacy technical debt

Considerations

* Requires the most amount of time to develop
* Requires the most amount of learning
