---
tags: [database, sql, oracle]
---

Table based Record Datatype: Returns a single row of all the columns from the table

````plsql
SET SERVEROUTPUT ON;

DECLARE
	v_emp employees%ROWTYPE;
BEGIN
	SELECT * INTO v_emp
	FROM employees
	WHERE employee_id = 105;
	DBMS_OUTPUT.PUT_LINE(v_emp.first_name || ' ' || v_emp.last_name);
END;
/

DECLARE
	v_emp employees%ROWTYPE;
BEGIN
	SELECT first_name, last_name INTO v_emp.first_name, v_emp.last_name
	FROM employees
	WHERE employee_id = 105;
	DBMS_OUTPUT.PUT_LINE(v_emp.first_name || ' ' || v_emp.last_name);
END;
/
````

### Cursor based Record Datatype

````plsql
SET SERVEROUTPUT ON;

DECLARE
	CURSOR cur_emp IS
	SELECT first_name, last_name
	FROM employees
	WHERE employee_id = 120;
	emp_detail cur_emp%ROWTYPE;
BEGIN
	OPEN cur_emp;
	FETCH cur_emp INTO emp_detail;
	DBMS_OUTPUT.PUT_LINE(emp_detail.first_name || ' ' || emp_detail.last_name);
	CLOSE cur_emp;
END;
/

DECLARE
	CURSOR cur_emp IS
	SELECT first_name, last_name
	FROM employees
	WHERE employee_id > 120;
	emp_detail cur_emp%ROWTYPE;
BEGIN
	OPEN cur_emp;
	LOOP
		FETCH cur_emp INTO emp_detail;
		DBMS_OUTPUT.PUT_LINE(emp_detail.first_name || ' ' || emp_detail.last_name);
		EXIT WHEN cur_emp%NOTFOUND;
	END LOOP;
	CLOSE cur_emp;
END;
/
````

### User Defined Record Datatype

````plsql
SET SERVEROUTPUT ON;

DECLARE
TYPE user_type IS RECORD (
	fname employees.first_name%TYPE,
	dname departments.department_name%TYPE
);
var user_type;
BEGIN
	SELECT e.first_name, d.department_name INTO var.fname, var.dname
	FROM employees e JOIN departments d ON e.department_id = d.department_id
	WHERE e.department_id = 40;
	DBMS_OUTPUT.PUT_LINE(var.fname || ' ' || var.dname);
END;
/
````
