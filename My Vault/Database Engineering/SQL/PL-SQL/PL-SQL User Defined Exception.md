---
tags: [database, sql, oracle]
---

### Using Variable of EXCEPTION type

````plsql
DECLARE
	num1 NUMBER := 20;
	num2 NUMBER := 0;
	num3 NUMBER;
	divide_by_zero EXCEPTION;
BEGIN
	IF num2 = 0 THEN
		RAISE divide_by_zero;
	END IF;
	
	num3 := num1 / num2;
	DBMS_OUTPUT.PUT_LINE('Result : ' || num3);
	EXCEPTION WHEN divide_by_zero THEN
	DBMS_OUTPUT.PUT_LINE('Divide by Zero Exception');
END;
/
````

### RAISE_APPLICATION_ERROR

The error number can be between -20,000 and -20,999.  
SQLERRM is an utility class that is used to display the error message. SQLCODE is used to display the error code  
We cannot name the exception using this approach

[Declare User-Define Exception Using RAISE_APPLICATION_ERROR Method In Oracle Database | RebellionRider](http://www.rebellionrider.com/declare-user-define-exception-using-raise_application_error-method-in-oracle-database/#.WIXXD_l97IW)

````plsql
SET SERVEROUTPUT ON;

ACCEPT user_input NUMBER PROMPT 'Enter your age ?';
DECLARE
	num1 NUMBER := &user_input;
BEGIN
	IF num1 < 18 THEN
		RAISE_APPLICATION_ERROR(-20000, 'You are underage');
	END IF;

	DBMS_OUTPUT.PUT_LINE('Hello user');
	EXCEPTION WHEN others THEN
	DBMS_OUTPUT.PUT_LINE(SQLERRM);
END;
/
````

### PRAGMA EXCEPTION_INIT function

It is used to create named exception

````plsql
SET SERVEROUTPUT ON;

DECLARE
	ex_age EXCEPTION;
	num1 NUMBER := 17;
	PRAGMA EXCEPTION_INIT (ex_age, -20000);
BEGIN
	IF num1 < 18 THEN
		RAISE_APPLICATION_ERROR(-20000, 'You are underage');
	END IF;

	DBMS_OUTPUT.PUT_LINE('Hello user');
	EXCEPTION WHEN ex_age THEN
	DBMS_OUTPUT.PUT_LINE(SQLERRM);
END;
/
````
