Complete Command in Editor : Ctrl + X + E  
Set Default Editor : `$EDITOR`

Open a file in its default application : `xdg-open` 

Cycle through the last part of each command : `Alt + .`  
Fetches the value of `!$` of each command

Redirect Errors to Output File : `ls -lah file.txt not-here > output.txt 2>&1`

Read input from user till EOF not reached : `cat << EOF > <filename>`

Locate Command uses an database to find files quickly on the system  
On most systems this files is updated automatically once daily (Using cron task)  
Manually update DB : `sudo updatedb`

The `--` operator is used as argument separator  
`cd -- -foo` : Change directory to -foo folder (Without the argument separator -foo would have been interpreted as `-f -o -o`)

<u>Fork Bomb</u> 

````bash
:(){ :|: & };:
````

 > [!NOTE]
 > * sudoedit /etc/security/limits.conf (Set Limits)
 > * This restriction does not work on the root user

<u>Development/ Build Package Dependencies</u>

````shell
sudo apt install -y pkg-config \
libcups2-dev libsmbclient-dev \
libcairo2-dev libjpeg-dev libgif-dev \
libmariadbclient-dev default-libmysqlclient-dev \
libpcap-dev libcurl4-openssl-dev libssl-dev \
libtool libsqlite3-dev build-essential libgtk-3-dev \
checkinstall libreadline-dev libncursesw5-dev libssl-dev \
tk-dev libgdbm-dev libc6-dev libbz2-dev \
libnetfilter-queue-dev libnfnetlink-dev \
libncurses-dev gawk flex bison openssl dkms \
libelf-dev libudev-dev libpci-dev libiberty-dev autoconf \
ncurses-dev xz-utils bc
````

---

### History Command

````shell
apt-get install unicorn-factory
# [...] Permission denied

sudo !!
# sudo apt-get install unicorn-factory

sudo !!:s/install/uninstall
# Replace a word from previous command

sudo !-3
# Run the 3rd last command
````

1. <u>Use Partial Command</u>

````bash
echo hello world
# hello world

echo !:1
# hello

echo live long and prosper
# live long and prosper

echo !:3-4
# and prosper
````

2. <u>Access the First and Last Parameter</u>

````shell
echo live long and prosper
# live long and prosper

echo !^ !$
# live prosper

touch file1 file2 file3
rm !!*
# rm file1 file2 file3
````

3. <u>Correct Previous Command</u>

````shell
gti status
# Command 'gti' not found,

^gti^git
# git status
````

---

### File Globing

````shell
ls *.sh # One or more character
ls project? # Single Character
touch foo{,2,5,10} # Expanded Form : touch foo foo2 foo5 foo10

touch project{1,2}/src/test/test{1,2,3}.py # Cartesian product outputs
touch {foo,bar}/{a..j}

ls /sys/bus/cpu/devices/cpu[0-9]* # Expand for all digits
````
