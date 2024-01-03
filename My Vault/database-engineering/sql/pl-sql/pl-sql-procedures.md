---
tags:
- database
- sql
- oracle
title: PL-SQL Procedures
---

When procedure has no parameters we do use parenthesis  
Procedures do not have an return type and cannot return any values  
Procedures can be called using EXEC statement, anonymous block or an names block

[What Are PL/SQL Stored Procedures In Oracle Database | RebellionRider](http://www.rebellionrider.com/what-are-pl-sql-stored-procedures-in-oracle-database/#.V8QgV5h97IU)  
[Authid current_user, authid definer | DBAORA](https://dbaora.com/authid-current_user-authid-definer/)

````plsql
SET SERVEROUTPUT ON;

CREATE OR REPLACE PROCEDURE sample_procedure
IS
	v_name VARCHAR2(20) := 'David';
	v_age NUMBER := 22;
BEGIN
	DBMS_OUTPUT.PUT_LINE('Name : ' || v_name || 'Age : ' || v_age);
END sample_procedure;
/

EXEC sample_procedure;

BEGIN
	sample_procedure;
END;

/
````

### Procedure with Parameter

````plsql
SET SERVEROUTPUT ON;

CREATE OR REPLACE PROCEDURE sample_procedure(p_name VARCHAR2, p_age NUMBER)
IS
BEGIN
	DBMS_OUTPUT.PUT_LINE('Name : ' || p_name || ' Age : ' || p_age);
END sample_procedure;
/

EXEC sample_procedure('David', 22);
````

Positional Notation: Parameters are passed in the order specified in the formal definition  
Named Notation: Use the formal name to specify the value to be passed

````plsql
SET SERVEROUTPUT ON;

CREATE OR REPLACE PROCEDURE sample_procedure(p_name VARCHAR2 := 'David', p_age NUMBER)
IS
BEGIN
	DBMS_OUTPUT.PUT_LINE('Name : ' || p_name || ' Age : ' || p_age);
END sample_procedure;
/

EXEC sample_procedure(p_name => 'John', p_age => 22);
````

When use named notation remember positional parameter cannot be used after an named parameter  
IN, OUT, IN OUT Parameter Mode: Used to specify the type of the variable that is passed to the procedure. Default mode is IN. DEFAULT keyword can be used only with IN variable

[oracle - What exactly are IN, OUT, IN OUT parameters in PL/SQL - Stack Overflow](https://stackoverflow.com/questions/32634123/what-exactly-are-in-out-in-out-parameters-in-pl-sql)

IN parameters are passed by reference. NOCOPY  
OUT and IN OUT parameters are passed by value. COPY

### RETURNING Clause

Returning Clause is used to return the inserted, updated, deleted column value into a variable after the DML command performs the manipulation.

````plsql
CREATE OR REPLACE procedure update_salary_proc(emp_id NUMBER)
IS
	name test_emp.ename%TYPE;
	new_sal test_emp.sal%TYPE;
BEGIN
	UPDATE test_emp
	SET sal = sal * 1.1
	WHERE empno = emp_id
	RETURNING ename, sal INTO name, new_sal;
	DBMS_OUTPUT.PUT_LINE('The Updated Salary for the Employee '||name||' is : '|| new_sal);
END update_salary_proc;
/
````

### Forward Declaration

Required when one procedure is called from inside another procedure

````plsql
DECLARE
v_number1 NUMBER:=&n1;
v_number2 NUMBER:=&n2;

# Forward Declaration Procedure but not yet defined
PROCEDURE proc1(number1 NUMBER);

PROCEDURE proc2(number2 NUMBER)
IS
BEGIN
	DBMS_OUTPUT.PUT_LINE('This Procedure proc2 is calling the proc1 which is not yet defined');
	proc1(v_number1);
END proc2;

PROCEDURE proc1(number1 NUMBER)
IS
BEGIN
	DBMS_OUTPUT.PUT_LINE('This Procedure proc1 is called by proc2');
END proc1;

BEGIN
	DBMS_OUTPUT.PUT_LINE('Complete Illustration of Forward Declarations');
	DBMS_OUTPUT.PUT_LINE('Procedure 1 Value '||v_number1);
	DBMS_OUTPUT.PUT_LINE('Procedure 2 Value '||v_number2);
	proc2(10);
END;
/
````