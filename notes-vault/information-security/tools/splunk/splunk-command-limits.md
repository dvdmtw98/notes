---
title: Splunk Command Limits
tags:
  - security
  - splunk
  - command
date: 2026-07-27 22:49:27 +0530
updated: 2026-07-27 22:56:11 +0530
---

### Joining Commands

| Command                                           | Row Limit |                             Time Limit |           Configurable in SPL           |            Configurable in `limits.conf`             |
| ------------------------------------------------- | --------: | -------------------------------------: | :-------------------------------------: | :--------------------------------------------------: |
| **Generic subsearch** (`[...]`)                   |    10,000 |                                 60 sec |                   No                    |        Yes (`[subsearch] maxout`, `maxtime`)         |
| **join**                                          |    50,000 |                                 60 sec |                   No                    | Yes (`[join] subsearch_maxout`, `subsearch_maxtime`) |
| **append**                                        |    50,000 |                                 60 sec |       Yes (`maxout=`, `maxtime=`)       |                         Yes                          |
| **appendcols**                                    |    50,000 | 60 sec (`maxtime`), 60 sec (`timeout`) | Yes (`maxout=`, `maxtime=`, `timeout=`) |                         Yes                          |
| **union** (all inputs distributable streaming)    |      None |                                   None |                   N/A                   |                         N/A                          |
| **union** (any input centralized / non-streaming) |    50,000 |                                 60 sec |       Yes (`maxout=`, `maxtime=`)       |                         Yes                          |
| **multisearch**                                   |      None |                                   None |                   N/A                   |                         N/A                          |

### Other Commands

| Command     |       Default Limit |          Configurable in SPL           |
| ----------- | ------------------: | :------------------------------------: |
| `sort`      |      10,000 results |             Yes (`sort 0`)             |
| `head`      |          10 results |            Yes (`head <n>`)            |
| `tail`      |          10 results |            Yes (`tail <n>`)            |
| `top`       |           10 values |             Yes (`limit=`)             |
| `rare`      |           10 values |             Yes (`limit=`)             |
| `chart`     |           10 series |             Yes (`limit=`)             |
| `timechart` |           10 series |             Yes (`limit=`)             |
| `map`       | 10 spawned searches |          Yes (`maxsearches=`)          |
| `transpose` |              5 rows | Yes (`transpose <n>` or `transpose 0`) |
