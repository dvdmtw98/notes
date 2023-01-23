---
title: Sending Backdoor via Email
---

### Using SMTP Server

1. Setup an SMTP Server  
   Free SMTP Service : [All Your Digital Marketing Tools in One Place - Sendinblue](https://www.sendinblue.com/)

````bash
# Sender Email has to be enclosed in '<>'
sendmail -xu <smtp-username> -xp <smtp-password> -s <server-name>:<port> \
-f "<sender-email>" -t "<target-email>" -u "<subject>" -m "<message>" \
-o message-header "From : <sender-username> <<sender-email>>"
````

 > [!NOTE]
 > In message when adding the link to the backdoor ensure it auto downloads then clicked
 > * Dropbox : Change `dl=0` to `dl=1` in URL
 > * Google Drive : `https://<cdomain>/uc?id=<file-id>&export=download`
 > 
 > Message Header is required so that the sender name is shown instead of the email address

### Using Webhosting

1. Setup a Webhosting Service  
   Free Webhost : [000webhost](https://www.000webhost.com/)

1. Upload File - public_html - Upload PHP File - View (Enter Details and Send Mail)
   PHP File : <https://drive.google.com/uc?id=1WAoTdbSebRVLyArjupNg3X2VEFUR8_Ko&export=download>

 > [!NOTE]
 > Paid services will always offer better features and higher change that the mail does not end up in spam folder