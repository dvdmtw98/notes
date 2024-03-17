---
tags:
  - database
  - sql
  - oracle
title: PL-SQL Ref Cursors
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

### Strong Ref Cursors

Has an return datatype

````plsql
SET SERVEROUTPUT ON;

DECLARE
	TYPE cur_type IS REF CURSOR RETURN employees%ROWTYPE;
	my_cur cur_type;
	v_emp employees%ROWTYPE;
BEGIN
	OPEN my_cur FOR
	SELECT * FROM employees WHERE employee_id = 100;
	FETCH my_cur INTO v_emp;
	DBMS_OUTPUT.PUT_LINE('Name : ' || v_emp.first_name || ' ' || v_emp.last_name);
	CLOSE my_cur;
END;
/
````

### Ref Cursor using User Type

````plsql
SET SERVEROUTPUT ON;

DECLARE
	TYPE my_type IS RECORD (
		emp_sal employees.salary%TYPE
	);
	TYPE cur_type IS REF CURSOR RETURN my_type;
	my_cur cur_type;
	v_emp employees.salary%TYPE;
BEGIN
	OPEN my_cur FOR
	SELECT salary FROM employees WHERE employee_id = 100;
	FETCH my_cur INTO v_emp;
	DBMS_OUTPUT.PUT_LINE('Salary : ' || v_emp);
	CLOSE my_cur;
END;
/
````

### Weak Ref Cursors

````plsql
SET SERVEROUTPUT ON;

DECLARE
	TYPE cur_type IS REF CURSOR;
	my_cur cur_type;
	v_salary employees.salary%TYPE;
	v_fname employees.first_name%TYPE;
BEGIN
	OPEN my_cur FOR
	SELECT first_name, salary FROM employees WHERE employee_id = 100;
	FETCH my_cur INTO v_fname,v_salary;
	DBMS_OUTPUT.PUT_LINE('First Name : ' || v_fname || ' Salary : ' || v_salary);
	CLOSE my_cur;
END;
/
````

### System Ref Cursors

Inbuilt Weak Ref Cursor

````plsql
SET SERVEROUTPUT ON;

DECLARE
	my_cur SYS_REFCURSOR;
	v_salary employees.salary%TYPE;
	v_fname employees.first_name%TYPE;
BEGIN
	OPEN my_cur FOR
	SELECT first_name, salary FROM employees WHERE employee_id = 100;
	FETCH my_cur INTO v_fname,v_salary;
	DBMS_OUTPUT.PUT_LINE('First Name : ' || v_fname || ' Salary : ' || v_salary);
	CLOSE my_cur;
END;
/
````
