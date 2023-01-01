AutoIt is installed in Wine when Veil Framework was installed

Download Script : <https://drive.google.com/uc?id=1sucJNjeNCrTdiOwZa5PMTz17eGl4Zcd6&export=download>  
Password : @Spam123  
In place of $URLs specify min 2 URLs. 1 normal file and the other backdoor

The links to the files should be direct links (They should be downloadable directly)

Save the script as .au3  
Search For Compile to Exe - Specify the script file and Icon File - Convert  
Send compiled exe file to Target

In Metasploit Setup "Multi Handler" to listen for connection

#### Spoofing the File Extension

Solution : Use Right to Left Override Character  
[U+202E RIGHT-TO-LEFT OVERRIDE - Unicode Explorer](https://unicode.flopp.net/c/202E)

Required Format : .jpg  
File with Backdoor : `<filename>.exe`

Inverted Extension : `<filename>gpj.exe`  
Right to Left Override : `<filename>exe.jpg`

Browsers can remove the "Right to Left Overwrite" so it's better to send the target compressed copy
