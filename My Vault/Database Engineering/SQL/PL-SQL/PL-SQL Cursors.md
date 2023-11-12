---
tags: [database, sql, oracle]
---

%ISOPEN  
%FOUND  
%NOTFOUND  
%ROWCOUNT

---

### Explicit Cursors

The cursor has to go through the following four steps : Declare, Open, Fetch, Close

````plsql
SET SERVEROUTPUT ON;

DECLARE
	v_fname VARCHAR2(20);
	
	CURSOR cur_fname IS
	SELECT first_name FROM employees
	WHERE employee_id < 105;
BEGIN
	OPEN cur_fname;
	LOOP
		FETCH cur_fname INTO v_fname;
		DBMS_OUTPUT.PUT_LINE(v_fname);
		EXIT WHEN cur_fname%NOTFOUND;
	END LOOP;
	CLOSE cur_fname;
END;

/
````

### Parameterized Cursor

````plsql
SET SERVEROUTPUT ON;

DECLARE
	v_fname VARCHAR2(20);
	
	CURSOR cur_fname(emp_id VARCHAR2) IS
	SELECT first_name FROM employees
	WHERE employee_id < emp_id;
BEGIN
	OPEN cur_fname(105);
	LOOP
		FETCH cur_fname INTO v_fname;
		DBMS_OUTPUT.PUT_LINE(v_fname);
		EXIT WHEN cur_fname%NOTFOUND;
	END LOOP;
	CLOSE cur_fname;
END;
/
````

### Parameterized Cursor with Default Parameter

If we don't pass parameter when we open the cursor the default value will be used else the parameter that we pass will be used

````plsql
SET SERVEROUTPUT ON;

DECLARE
	v_fname VARCHAR2(20);
	v_emp_id VARCHAR2(20);
	
	CURSOR cur_fname(emp_id VARCHAR2 := 110) IS
	SELECT first_name, employee_id FROM employees
	WHERE employee_id < emp_id;
BEGIN
	OPEN cur_fname;
	LOOP
		FETCH cur_fname INTO v_fname, v_emp_id;
		DBMS_OUTPUT.PUT_LINE(v_fname || ' ' || v_emp_id);
		EXIT WHEN cur_fname%NOTFOUND;
	END LOOP;
	CLOSE cur_fname;
END;
/
````

### Cursor For Loop

````plsql
SET SERVEROUTPUT ON;

DECLARE
	CURSOR cur_fname IS
	SELECT first_name, last_name FROM employees
	WHERE employee_id < 200;
BEGIN
	For i IN cur_fname
	LOOP
		DBMS_OUTPUT.PUT_LINE(i.first_name || ' ' || i.last_name);
	END LOOP;
END;
/
````

### Parameterized Cursor For Loop

````plsql
SET SERVEROUTPUT ON;

DECLARE
	CURSOR cur_fname(v_emp_id NUMBER) IS
	SELECT first_name, last_name FROM employees
	WHERE employee_id < v_emp_id;
BEGIN
	For i IN cur_fname(105)
	LOOP
		DBMS_OUTPUT.PUT_LINE(i.first_name || ' ' || i.last_name);
	END LOOP;
END;
/
````

### Cursor For Loop using Subqueries

````plsql
BEGIN
	FOR emp_record IN(SELECT empno,ename FROM emp)
	LOOP
		DBMS_OUTPUT.PUT_LINE(emp_record.empno||' '||emp_record.ename);
	END LOOP;
END;
/
````
