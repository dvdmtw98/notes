---
title: User & Group Management Commands
---

<u>User ID</u>
  
UID 0 : Root User  
UIDs 1--99 : Special System Users  
UID 100--999 : Dynamic allocated system users  
UID 1000-9999 : Used for User accounts  
UID 10000-65534 : Remote Users  
UID 65534 : nobody (Special user with no privileges)

### Add/ Delete User

````shell
adduser <username>
deluser <username>

usermod -l <new-user-name> <old-user-name> # Change User Login Name
usermod -d <username> <home-directory> # Create Home Directory
usermod -s <username> <new-shell> # Change user shell
````

The files that are going to be added into the home directory for a newly created user is decided by the `/etc/skel` directory

 > [!NOTE]
 > * `adduser` is an high level binary that makes the process of adding user of the system simpler
 > * On systems where `adduser` is not present `useradd` can be used
 > * This command requires as to manually all the compenents that need to be created for the user

### Add/ Delete Group

````shell
groupadd <group-name>
groupdel <group-name>
usermod -aG <group-name> <username> # Add User to Group
usermod -g <group-name> <username> # Change Group
gpasswd -d <username> <groupname> # Remove user from a group

cat /etc/groups # File with Group Information
````

### User Password

````shell
passwd <username>
chage -l <username> # View Password Information
````

### Sudoers File

Specifies the rules that need to be satisfied by the user when using sudo command  
Open Sudoers File : `sudo visudo` (Best Practice)

**<u>Syntax</u>**  
User Host = (Runas) Command  
Read this as "User may run Command as the Runas user on Host"

%adm ALL=(ALL) NOPASSWD: ALL  
This means "any user in the adm group on any host may run any command as any user without a password"  
If (ALL : ALL) is used it means the command can be run as any user with further ALL group level privilege as well

Group Names Prefixed : %  
UIDs Prefixed : \#  
GIDs Prefixed : %#

---

**<u>References</u>**:

* [Understanding sudoers(5) syntax](https://toroid.org/sudoers-syntax)
* [sudo - What is the proper sudoers syntax to add a user? - Unix & Linux Stack Exchange](https://unix.stackexchange.com/questions/18877/what-is-the-proper-sudoers-syntax-to-add-a-user)
* [How to Create Users in Linux (useradd Command) | Linuxize](https://linuxize.com/post/how-to-create-users-in-linux-using-the-useradd-command/)