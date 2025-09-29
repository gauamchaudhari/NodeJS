/**
 * What is a module?
 * - A module is a file that contains code (variables, functions, classes) that can be reused in other files.
 * - Modules help in organizing code, making it more maintainable and reusable.
 * - In JavaScript, you can create modules using the `export` and `import` statements.
 * - You can export variables, functions, or classes from a module and import them in another module.
 * - This allows you to break your code into smaller, manageable pieces and share functionality across different parts of your application.
 * - Modules can be built-in (like `fs`, `http` in Node.js) or user-defined (your own files).
 * - Using modules promotes code reusability, separation of concerns, and better organization of code.
 * - In Node.js, each file is treated as a separate module by default.
 * - You can use relative paths to import user-defined modules.
 * - ES6 introduced a standardized module system using `import` and `export` keywords.
 * - CommonJS is another module system used in Node.js, which uses `require` and `module.exports`.
 * - When using ES6 modules in Node.js, ensure your environment supports it or use a transpiler like Babel.
 * - Modules can also have default exports, allowing you to export a single value from a module.
 * - You can import named exports using curly braces `{}` and default exports without curly braces.
 * - Modules can be nested, meaning a module can import other modules.
 * - Using modules helps in avoiding global namespace pollution by encapsulating code within the module scope.
 */
export const PI = 3.14;

export function calculateArea(radius) {
  return PI * radius * radius;
}

export class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  area() {
    return calculateArea(this.radius);
  }
}
// Default Export
export default function greet(name) {
  return `Hello, ${name}!`;
}

// Importing the module in another file (e.g., index.js)
/**
 * Importing Modules
 * - You can import modules using the `import` statement.
 * - You can import named exports using curly braces `{}` and default exports without curly braces.
 * - You can rename imports using the `as` keyword.
 * - You can import everything from a module as an object using the `* as` syntax.
 * - When importing user-defined modules, use relative paths (e.g., `./module.js`).
 * - Ensure the file extension is included when importing ES6 modules in Node.js (e.g., `.js`).
 * - You can import multiple named exports from a module in a single import statement.
 * - You can also mix named and default imports in a single statement.
 * - Importing modules helps in code organization, reusability, and separation of concerns.
 * - It allows you to share functionality across different parts of your application without duplicating code.
 * - Modules help in maintaining a clean global namespace by encapsulating code within the module scope.
 */
import greet, { PI, calculateArea, Circle } from "./Modules.js";

console.log(greet("Alice")); // Hello, Alice!
console.log(`Area of circle with radius 5: ${calculateArea(5)}`); // Area of circle with radius 5: 78.5

const myCircle = new Circle(10);
console.log(`Area of myCircle: ${myCircle.area()}`); // Area of myCircle: 314

// You can also import everything as an object
import * as MyModule from "./Modules.js";

console.log(MyModule.greet("Bob")); // Hello, Bob!
console.log(`Value of PI: ${MyModule.PI}`); // Value of PI: 3.14
