---
tags: [programming, c]
---

They are used to implement user defined datatypes  
Structs can be used to return multiple values from an function

Structs can be initialized similar to array using `{100, "David", 8.6}`  
Structs are **values type** variables

Elements in a struct as accessed using the dot operator  
**Arrow operator** allows to access elements inside struct using the address of struct

````c
#include <stdio.h>
#include <string.h>

struct student
{
    int roll;
    float cga;
    char name[100];
};

int main(int argc, char const *argv[])
{
    struct student s1 = {21, 8.4, "David"};
    struct student *s1ptr = &s1;

    struct student s2;
    s2.roll = 56;
    s2.cga = 9.0;
    strcpy(s2.name, "John");

    printf("%s\n", (*s1ptr).name);
    printf("%s\n", s1ptr->name);
    return 0;
}

````

**Typedef** is used to assign an alias to an datatype

````c
typedef struct employee {
	int age;
	char name[100];
} emp;

int main()
{
	emp e1;
	e1.age = 24;
	return 0;
}
````
