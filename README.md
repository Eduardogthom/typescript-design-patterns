# TypeScript Design Patterns

A collection of design patterns implemented in TypeScript.

## Table of Contents

1. [Abstraction](#abstraction)
2. [Encapsulation](#encapsulation)
3. [Inheritance](#inheritance)
4. [Polymorphism](#polymorphism)

## Abstraction

Abstraction is the concept of hiding the complex implementation details and showing only the essential features of the object.

### Example 1

In this example, we define a `Shape` interface and implement it in `Circle` and `Rectangle` classes. We then calculate the total area of these shapes.

[View the code](typescript/oop/abstraction/abstraction-1.ts)

## Encapsulation

Encapsulation is the concept of wrapping the data (variables) and code (methods) together as a single unit. It restricts direct access to some of the object's components.

### Example 1

In this example, we create a `BankAccount` class that encapsulates the balance property and provides methods to deposit and withdraw money.

[View the code](typescript/oop/encapsulation/encapsulation-1.ts)

## Inheritance

Inheritance is the concept where one class inherits the properties and methods of another class.

### Example 2

In this example, we create a `Product` class and extend it to create `Book` and `Electronic` classes. Each subclass adds its own properties and methods.

[View the code](typescript/oop/inheritance/inheritance-2.ts)

## Polymorphism

Polymorphism is the ability to use a common interface for multiple forms (data types).

### Example 1

In this example, we demonstrate polymorphism using the `Shape` interface and its implementations in `Circle` and `Rectangle` classes.

[View the code](typescript/oop/polymorphism/polymorphism-1.ts)