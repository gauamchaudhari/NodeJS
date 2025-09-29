/**
 * Properties in JavaScript.
 * JavaScript में properties किसी object का सबसे महत्वपूर्ण हिस्सा होती हैं।
एक property किसी object का नाम (key) और मान (value) का combination होता है।
ये object के data और behavior को store करती हैं।
 */

const user = {
  username: "Gautam",
  role: "Admin"
};

console.log(user.username); // Gautam

// Accessing properties using dot notation
const account = {
  owner: "Gautam",
  balance: 1000,

  get showBalance() {
    return `Current balance is ${this.balance}`;
  },

  set deposit(amount) {
    this.balance += amount;
  }
};

// Getter call
console.log(account.showBalance);  // Current balance is 1000

// Setter call
account.deposit = 500;
console.log(account.showBalance);  // Current balance is 1500

// Property Attributes (Property Descriptors)
const person = {};

Object.defineProperty(person, "name", {
  value: "Gautam",
  writable: false,      // value change नहीं कर सकते
  enumerable: true,     // loop में दिखेगा
  configurable: false   // delete नहीं कर सकते
});

console.log(person.name); // Gautam

// person.name = "Vinubha";  // value change नहीं होगी
console.log(person.name); // Gautam

// Checking Property Descriptors
// हम Object.getOwnPropertyDescriptor() से किसी property का descriptor देख सकते हैं।
const obj = { a: 10 };
const descriptor = Object.getOwnPropertyDescriptor(obj, "a");
console.log(descriptor);

// Adding  Properties
const users = {name: "Gautam", age: 24};
users.city = "Ahmedabad"; // Adding new property
users["role"] = "Admin"; // Adding new property using bracket notation

console.log(users); // { name: 'Gautam', age: 24, city: 'Ahmedabad', role: 'Admin' }

// deleting Properties
delete users.age; // Deleting property
console.log(users); // { name: 'Gautam', city: 'Ahmedabad', role: 'Admin' }

// checking Property Existence
console.log("name" in users); // true
console.log(users.hasOwnProperty("age")); // false

// Looping Through Properties
for (const key in users) {
 console.log(`${key}: ${users[key]}`);
}
// Output:
// name: Gautam
// city: Ahmedabad
// role: Admin

// Property Shorthand (ES6)
// अगर variable का नाम और property का नाम same है तो shorthand use कर सकते हैं।
const name = "Gautam";
const age = 25;

const user1 = { name, age };
console.log(user1);

// Dynamic property Names
const email = "email";
const user2 = {
  username: "Gautam",
  [email]: "gautam@example.com", // Dynamic property name
};

console.log(user2); // { username: 'Gautam', email: 'gautam@example.com' }


// Object.freeze() and Object.seal()
// Object.freeze() से object को पूरी तरह से immutable बना सकते हैं। Object की properties को modify या add नहीं कर सकते।
// Properties को delete भी नहीं कर सकते।
const objs = { a: 1 };
Object.freeze(objs);

// objs.a = 2;  // No effect
// objs.b = 3;  // No effect

console.log(objs); // { a: 1 }
