---
title: PL-SQL Packages
---

Package is an collection of related procedures and functions that are stored together

### Package Header

````plsql
CREATE OR REPLACE PACKAGE pkg_sample
IS
FUNCTION func(num1 NUMBER, num2 NUMBER) RETURN NUMBER;
PROCEDURE proc(name VARCHAR2, age NUMBER);
END pkg_sample;
/
````

### Package Body

````plsql
CREATE OR REPLACE PACKAGE BODY pkg_sample
IS
	# Function Implementation
	FUNCTION func(num1 NUMBER, num2 NUMBER) RETURN NUMBER
	IS
		num3 NUMBER;
	BEGIN
		num3 := num1 + num2;
		RETURN num3;
	END func;

	# Procedure Implementation
	PROCEDURE proc(name VARCHAR2, age NUMBER) IS
	BEGIN
		DBMS_OUTPUT.PUT_LINE('Name : ' || name || ' Age : ' || age);
	END proc;
END pkg_sample;
/

SET SERVEROUTPUT ON;

DECLARE
num NUMBER;
BEGIN
	num := pkg_sample.func(25, 10);
	DBMS_OUTPUT.PUT_LINE(num);
	pkg_sample.proc('David', 22);
END;
/
````

Packages can have overloaded functions this is done be defining function with same name but different datatypes.  
Packages can have private members these are created by not defining the variable or function in the package and directly making them in the package body  
Packages can have One time execute anonymous blocks of code unlike normal anonymous block they do not have an END keyword