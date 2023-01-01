### Public Modifier

A member denoted as public is accessible from anywhere in the code

### Private Modifier

A private member is only accessible from within [Class](CSharp%20Classes.md) where the member is defined  
By default (Modifier not specified) all objects in C# are private

### Protected Modifier

A protected member is only accessible in a class from its derived class  
It is recommended to avoid protected members whenever possible (Members being accessible in derived classes breaks encapsulation)

### Internal Modifier

Internal is mostly only used with classes  
The classes declared as internal are only accessible within the same assembly/ class library

### Protected Internal Modifier

Members declared as protected internal are only accessible within the same assembly (Internal Modifier) or within derived classes on that assembly/ class library (Protected Modifier)  
Very rarely used in real world applications and its usage is not recommended
