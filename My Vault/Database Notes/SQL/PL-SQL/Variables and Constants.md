---
title: Variables and Constants
---

### Constant

Constant in PL/SQL has to be declared during the initialization phase only  
Instead of := we can also use DEFAULT keyword in CONSTANT  
NOT NULL can be imposed on any variable by placing it before the assignment or DEFAULT operator

````plsql
SET SERVEROUTPUT ON;

DECLARE
	v_pi CONSTANT NUMBER(7,6) := 3.141;
	v_even CONSTANT NUMBER(10) NOT NULL DEFAULT 02468;
BEGIN
	DBMS_OUTPUT.PUT_LINE(v_pi || " " || v_even);
END;
/
````

### Bind/ Host Variable

````plsql
SET SERVEROUTPUT ON;

VARIABLE v_bind1 VARCHAR2(10); 		# Declare Bind Variable
VARIABLE v_bind2 VARCHAR2(10);

EXEC :v_bind1 := 'David'; 			# Initialize variable method 1

BEGIN
	DBMS_OUTPUT.PUT_LINE(:v_bind1);
	:v_bind2 := 'Varghese'; 		# Initialize variable method 2
END;
/

PRINT :v_bind2;

SET AUTOPRINT ON; 					# Will cause all the bind variables to be printed automatically

VARIABLE v_bind1 VARCHAR2(10);
EXEC :v_bind1 := 'David';
````

### Anchor Type Keyword

````plsql
SET SERVEROUTPUT ON; 										# Shows the result of the query on the standard output

DECLARE
	v_fname employees.first_name%TYPE; 						# Anchor %TYPE: Refers to the DB column type
	v_lname VARCHAR2(10);
	v_num NUMBER := &enter_a_number; 						# User Input
BEGIN
	SELECT first_name, last_name INTO v_fname, v_lname 		# INTO saves the result in a varaible
	FROM employees
	WHERE employee_id = 100;
	DBMS_OUTPUT.PUT_LINE(v_fname || " " || v_lname); 		# Print the result on terminal
END;
/
````

### User Input

Accept keyword is used to make user defined message  
& is used to declare a user defined input

````plsql
SET SERVEROUTPUT ON;

ACCEPT user_input NUMBER PROMPT 'Enter your age ?';

DECLARE
	num1 NUMBER := &user_input;
BEGIN
	IF num1 < 18 THEN
		DBMS_OUTPUT.PUT_LINE('You are underage');
	ELSE
		DBMS_OUTPUT.PUT_LINE('Hello user');
	END IF;
END;

/
````