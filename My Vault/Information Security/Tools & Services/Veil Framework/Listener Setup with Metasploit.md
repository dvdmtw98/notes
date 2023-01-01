````bash
msfconsole
use exploit/multi/handler 		# Allows to listen on a Port

show options
set payload <payload-name> 		# Change based on payload generated
set <option-name> <value> 		# Use same values as payload

exploit 						# Starts the listener
````

* Veil will create an .rc file that consists of all the code required to setup the handler which can be used directly

`msfconsole -r <filename>`
