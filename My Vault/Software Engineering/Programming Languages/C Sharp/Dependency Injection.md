---
tags: [programming, concept]
---

**Dependency**: Another class (object) that is required in our class for it to function  
e.g. We have a Modal class that uses a Database class to fetch data from database. In this class the Database class becomes a dependency for the Modal class 

### Injecting Dependencies

When a dependency from outside is pushed into our class we say a dependency has been injected  
All this means is that we should not instantiate the dependent class in our class using the `new` operator instead take it has a constructor parameter or using a setter  

Dependency Injection allows to decouple the construction of our classes from the construction of its dependencies  

### Dependency Inversion Principal

Our code should depend upon abstractions i.e. our class should depend on a interface (Soft Dependency) which in turn will implement a dependency  
By following this approach we are able to decouple our code from each other. As long as the  dependency satisfies the interface it can be easily replaced with another one  
This makes the code easy to modify and reuse

### Dependency Injection Container

Now that we have adopted this approach we have a new problem each of our classes require all these dependencies, so now in order to construct the class we not only need to know what dependencies it has but also how to instantiate the dependencies

This is where Dependency Injection Container (Service Locator) comes into picture  
This container is an map of dependencies that our class needs along with the logic to create these dependencies if they are not created yet  

Every time we ask for a dependency the map will figure out which dependency needs to be used and then the container will check if created one of those dependencies. If its already created it will just use that one else it will create a new one store it and then use it.

Instead of creating the class ourselves we ask the container for a new instance, it will resolve the dependencies, construct the object and return it  
The container can even resolve complex dependencies in a transparent manner  
If we want to update a generic dependency we only need to update the container. This allows us to write cleaner and modular code

---
