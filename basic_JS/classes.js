/**
 * Classes in JavaScript
 * - ES6 introduced classes to JavaScript, providing a more straightforward syntax for creating objects and handling inheritance.
 * - Classes are syntactical sugar over JavaScript's existing prototype-based inheritance.
 * - They provide a cleaner and more intuitive way to create objects and deal with inheritance.
 * - Classes can have constructors, methods, and static properties/methods.
 * - They support inheritance through the `extends` keyword, allowing one class to inherit properties and methods from another.
 * - Classes help in organizing code and making it more modular and reusable.
 */
class personInfo {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  display() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}
const person1 = new personInfo("Alice", 30);
person1.display();

// class with multiple methods
class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  displayInfo() {
    console.log(`Car Brand: ${this.brand}, Model: ${this.model}`);
  }

  startEngine() {
    console.log(`${this.brand} ${this.model} engine started.`);
  }

  stopEngine() {
    console.log(`${this.brand} ${this.model} engine stopped.`);
  }
}

const car1 = new Car("Toyota", "Fortuner");
car1.displayInfo();
car1.startEngine();
car1.stopEngine();

/*
 * Default value in constructor
 * - You can provide default values for parameters in the constructor.
 * - If no value is passed when creating an instance, the default value will be used.
 * - This helps in avoiding undefined values and makes the class more robust.
 */
class person {
  constructor(name = "Guest", role = "User") {
    this.name = name;
    this.role = role;
  }

  display() {
    console.log(`Name: ${this.name}, Role: ${this.role}`);
  }
}

const per = new person();
per.display();

const per1 = new person("John", "Admin");
per1.display();

/**
 * What is inheritance in JavaScript?
 * - Inheritance is a fundamental concept in object-oriented programming that allows a class (child class) to inherit properties and methods from another class (parent class).
 * - In JavaScript, inheritance is implemented using the `extends` keyword.
 * - The child class can add its own properties and methods in addition to those inherited from the parent class.
 * - This promotes code reusability and establishes a hierarchical relationship between classes.
 * - The child class can also override methods from the parent class to provide specific implementations.
 */
// parent class
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

// child class
class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call the parent class constructor
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} barks.`);
  }

  displayBreed() {
    console.log(`${this.name} is a ${this.breed}.`);
  }
}

const dog1 = new Dog("Buddy", "Golden Retriever");
dog1.speak(); // Buddy barks.
dog1.displayBreed(); // Buddy is a Golden Retriever.

/**
 * Getters and Setters in JavaScript Classes
 * - Getters and setters are special methods in JavaScript classes that allow you to define how to access and modify the properties of an object.
 * - A getter method is used to retrieve the value of a property, while a setter method is used to set or update the value of a property.
 * - They provide a way to encapsulate the internal representation of an object and control how properties are accessed and modified.
 * - Getters and setters can be defined using the `get` and `set` keywords.
 * - They help in adding validation logic when setting a property value and can also compute values dynamically when getting a property value.
 */
class Product {
  constructor(name, price) {
    this._name = name; // Using underscore to indicate private property
    this._price = price;
  }

  // Getter for name
  get name() {
    return this._name;
  }
  // Setter for name
  set name(newName) {
    this._name = newName;
  }
  // Getter for price
  get price() {
    return this._price;
  }
  // Setter for price with validation
  set price(newPrice) {
    if (newPrice > 0) {
      this._price = newPrice;
    } else {
      console.log("Price must be a positive value.");
    }
  }

  displayInfo() {
    console.log(`Product Name: ${this._name}, Price: $${this._price}`);
  }
}
const product1 = new Product("Laptop", 1000);
product1.displayInfo(); // Product Name: Laptop, Price: $1000

// Using setter to update name and price
product1.name = "Gaming Laptop";
product1.price = 1500;
product1.displayInfo(); // Product Name: Gaming Laptop, Price: $1500

// Trying to set an invalid price
product1.price = -500; // Price must be a positive value.
product1.displayInfo(); // Product Name: Gaming Laptop, Price: $1500
product1.price = 2000; // Valid price update
product1.displayInfo(); // Product Name: Gaming Laptop, Price: $2000
/**
 * Static Methods and Properties in JavaScript Classes
 * - Static methods and properties are associated with the class itself rather than with instances of the class.
 * - They can be called on the class without creating an instance.
 * - Static methods are defined using the `static` keyword.
 * - They are often used for utility functions that do not require access to instance-specific data.
 * - Static properties can also be defined, but they are less common and usually defined outside the class body.
 */
class MathHelper {
  static add(a, b) {
    return a + b;
  }

  static subtract(a, b) {
    return a - b;
  }

  static multiply(a, b) {
    return a * b;
  }

  static divide(a, b) {
    if (b === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    return a / b;
  }
}

// Real Word example
class BankAccount {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited $${amount}. New balance: $${this.balance}`);
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient funds.");
        } else {
            this.balance -= amount;
            console.log(`Withdrew $${amount}. New balance: $${this.balance}`);
        }
    }

    getBalance() {
        return this.balance;
    }

    showBalance() {
        console.log(`Account Number: ${this.accountNumber}, Balance: $${this.balance}`);
    }
}

const acc = new BankAccount("123456789", 1000);
acc.showBalance(); // Account Number: 123456789, Balance: $1000
acc.deposit(500); // Deposited $500. New balance: $1500\
acc.withdraw(200); // Withdrew $200. New balance: $1300
acc.withdraw(2000); // Insufficient funds.
console.log(`Current Balance: $${acc.getBalance()}`); // Current Balance: $1300