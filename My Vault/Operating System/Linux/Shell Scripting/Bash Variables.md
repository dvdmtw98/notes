---
title: Bash Variables
---

According to convention it should be in all caps  
Variable names cannot start with digits  
There shouldn't be any space between the variable name, = sign and the value

````shell
NAME_01="David"
SPORT="Foot"
echo "My name is $NAME_01"
````

The `{}` is used to make the command inside it be executed first and its value is used in place of the `{}`

````shell
echo "The best sport is {$SPORT}ball"
foo=bar
echo $foo (bar)
````

 > [!NOTE]
 > * Shell commands are space sensitive 
 > * `foo = bar` will throw error
 > * Shell thinks that you are trying to call a function called foo with parameters = and bar

````shell
# ${string: offset: length}
number = 12313.12

${number:0:4}
# 1231
````

### Double Quotes vs. Single Quotes

Double Quotes the string is expanded

````shell
echo "Value : $foo"
# Value : bar
````

The String is not expanded with single quotes

````shell
echo 'Value : $foo'
# Value : $foo
````