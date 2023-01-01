````plsql
SET SERVEROUTPUT ON;

CREATE OR REPLACE FUNCTION area_of_circle(radius NUMBER)
RETURN NUMBER
IS
	v_pi CONSTANT NUMBER := 3.141;
	v_area NUMBER;
BEGIN
	v_area := v_pi * POWER(radius, 2);
	RETURN v_area;
END;
/

BEGIN
	DBMS_OUTPUT.PUT_LINE(area_of_circle(21));
END;
````

IN, OUT, IN OUT Parameter Mode is applicable here as well
