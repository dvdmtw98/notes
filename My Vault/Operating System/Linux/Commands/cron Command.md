---
title: cron Command
tags: [os, linux, command]
---

### Cron Job Structure

````shell
┌───────────────────── # Minute (0 - 59)
│ ┌─────────────────── # Hour (0 - 23)
│ │ ┌───────────────── # Day of Month (1 - 31)
│ │ │ ┌─────────────── # Month (1 - 12)
│ │ │ │ ┌───────────── # Day of Week (0 - 6) (Sunday to Saturday)
│ │ │ │ │
│ │ │ │ │
* * * * * <username> <command-to-execute>
````

**<u>Examples</u>**:  
`0 0 1,15 * * command` : Run at midnight of 1,15 of every month  
`*/10 * * * * command` : Run every 10 minutes  
`0 0-5 * * * command` : Run every day every hour between midnight and 5

### View Cron Jobs

````shell
crontab -l
crontab -u <username> -l
````

### Edit/ Add Cron Jobs

````shell
crontab -e
crontab -u <username> -e
crontab <filename> # Add cron Jobs from a file
````

### Delete Cron Jobs

````shell
crontab -r
````

 > [!INFO]
 > * For cron jobs of the root user add "sudo" before the command
 > * Cron jobs are saved in /etc under the folders /cron.d, /cron.hourly, /cron.daily, /cron.monthly, /cron.weekly (Useful if crontab is not present)

---

**<u>References</u>**:

* [Crontab.guru - The cron schedule expression editor](https://crontab.guru/)