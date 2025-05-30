---
title: Control Flow and Loops
tags:
  - database
  - sql
  - oracle
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28
---

### Control Flow Statements

````plsql
SET SERVEROUTPUT ON;

DECLARE
	v_place VARCHAR2(20) := '&enter_place';
BEGIN
	IF v_place = 'India' THEN
		DBMS_OUTPUT.PUT_LINE('Welcome to : ' || v_place);
	ELSIF v_place = 'America' THEN
		DBMS_OUTPUT.PUT_LINE('Welcome to : ' || v_place);
	ELSE
		DBMS_OUTPUT.PUT_LINE('Invalid place');
	END IF;
END;
/
````

### Loops

**Simple Loop**  
The exit condition can be declared using EXIT WHEN or an IF statement with EXIT

````plsql
SET SERVEROUTPUT ON;

DECLARE
	V_counter NUMBER := 0;
	v_table NUMBER := &enter_a_number;
	v_result NUMBER := 1;
BEGIN
	LOOP
		v_counter := v_counter + 1;
		v_result := v_counter * v_table;
		DBMS_OUTPUT.PUT_LINE(v_table || ' x ' || v_counter || ' = ' || v_result);
		EXIT WHEN v_counter >= 10;
	END LOOP;
END;
/
````

**While Loop**  
When using Boolean we need to change its value to false to exit from the loop

````plsql
SET SERVEROUTPUT ON;

DECLARE
	v_counter NUMBER := 0;
	v_table NUMBER := &enter_a_number;
	v_result NUMBER;
	v_bool BOOLEAN := TRUE;
BEGIN
	WHILE v_bool LOOP
		v_counter := v_counter + 1;
		v_result := v_counter * v_table;
		DBMS_OUTPUT.PUT_LINE(v_table || ' x ' || v_counter || ' = ' || v_result);
		
		IF v_counter >= 10 THEN
			v_bool := FALSE;
		END IF;
	END LOOP;
END;
/
````

**Numeric For Loop**

````sql
SET SERVEROUTPUT ON;

DECLARE
	v_table NUMBER := &enter_a_number;
	v_result NUMBER;
BEGIN
	For v_counter IN 1 .. 10 LOOP
	v_result := v_counter * v_table;
	DBMS_OUTPUT.PUT_LINE(v_table || ' x ' || v_counter || ' = ' || v_result);
	END LOOP;
END;
/
````

### Case Statement

````plsql
DECLARE
	v_grade NUMBER:=&g;
BEGIN
	CASE v_grade
		WHEN 1 THEN DBMS_OUTPUT.PUT_LINE('Junior Engineer');
		WHEN 2 THEN DBMS_OUTPUT.PUT_LINE('Middle Level Engineer');
		WHEN 3 THEN DBMS_OUTPUT.PUT_LINE('Senior Engineer');
		ELSE DBMS_OUTPUT.PUT_LINE('No Engineers in this '||v_grade||' grade');
	END CASE;
END;

/
````
