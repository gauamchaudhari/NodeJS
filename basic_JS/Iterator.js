/**
 * Iterator in JavaScript
 * - An iterator is an object that enables you to traverse through a collection (like an array or a string) one element at a time.
 * - Iterators implement the `Iterator` protocol, which consists of a `next()` method that returns an object with two properties: `value` and `done`.
 * - The `value` property contains the current element, and the `done` property is a boolean indicating whether the iteration is complete.
 * - You can create custom iterators by defining an object with a `next()` method.
 * - JavaScript provides built-in iterators for arrays, strings, maps, and sets.
 * - You can use the `for...of` loop to iterate over iterable objects like arrays and strings.
 * - The `Symbol.iterator` method can be implemented in custom objects to make them iterable.
 * - Iterators help in managing memory efficiently by generating values on-the-fly instead of storing them all in memory.
 * - You can also use generator functions (using the `function*` syntax) to create iterators more easily.
 * - Generators can yield multiple values over time, pausing and resuming their execution.
 * - Iterators and generators are powerful tools for handling asynchronous programming and data streams in JavaScript.
 */
function createIterator(array) {
    let index = 0;
    return {
        next: function() {
            if (index < array.length) {
                return { value: array[index++], done: false };
            } else {
                return { done: true };
            }
        }
    };  
}
const myArray = [10, 20, 30];
const iterator = createIterator(myArray);

console.log(iterator.next()); // { value: 10, done: false }
console.log(iterator.next()); // { value: 20, done: false }
console.log(iterator.next()); // { value: 30, done: false }
console.log(iterator.next()); // { done: true }

// Using for...of loop with an array (built-in iterator)
const anotherArray = [1, 2, 3, 4, 5];
for (const value of anotherArray) {
    console.log(value); // 1, 2, 3, 4, 5
}

// Custom iterable object
const myIterable = {
    data: ['a', 'b', 'c'],
    [Symbol.iterator]: function() {
        let index = 0;
        const data = this.data;
        return {
            next: function() {
                if (index < data.length) {
                    return { value: data[index++], done: false };
                } else {
                    return { done: true };
                }
            }
        };
    }
};
console.log(myIterable[Symbol.iterator]().next()); // { value: 'a', done: false }

// 2. Built-in Iterables
// JavaScript में कई built-in iterable objects होते हैं, जैसे:
// Arrays, Strings, Maps, Sets
// इनके पास पहले से ही default iterators होते हैं।
// Example with Array:
const arr = [1, 2, 3];

const iterators = arr[Symbol.iterator](); // Built-in iterator method

console.log(iterators.next()); // { value: 1, done: false }
console.log(iterators.next()); // { value: 2, done: false }
console.log(iterators.next()); // { value: 3, done: false }
console.log(iterators.next()); // { value: undefined, done: true }

// 3. for...of Loop with Iterables
// for...of loop automatically iterator को call करता है।
const fruits = ["Apple", "Mango", "Banana"];

for (const fruit of fruits) {
  console.log(fruit);
}
// Output:
// Apple
// Mango
// Banana

// 4. Custom Iterable using Symbol.iterator
// हम Symbol.iterator method define करके किसी custom object को iterable बना सकते हैं।
const myIterables = {
    data: ['x', 'y', 'z'],
    [Symbol.iterator]: function() {
        let index = 0;
        const data = this.data;
        return {
            next: function() {
                if (index < data.length) {
                    return { value: data[index++], done: false };
                } else {
                    return { done: true };
                }
            }
        };
    }
};

for (const value of myIterables) {
  console.log(value);
}
// Output:
// x
// y
// z

// 5. Generator Functions
// Generator function एक special function है जो iteration को आसान बनाता है।
// Generator function को define करने के लिए function* (asterisk *) का use होता है।
// इसमें yield keyword का उपयोग किया जाता है values को pause और resume करने के लिए।
function* generateColors() {
  yield "Red";
  yield "Green";
  yield "Blue";
}

for (const color of generateColors()) {
  console.log(color);
}
// Output:
// Red
// Green
// Blue

// 6. Passing Data to Generators
// हम next() में arguments पास करके generator को data भेज सकते हैं।
function* calculator() {
  const num1 = yield "Enter first number";
  const num2 = yield "Enter second number";
  yield `Sum is ${num1 + num2}`;
}

const calc = calculator();

console.log(calc.next().value);  // Enter first number
console.log(calc.next(10).value); // Enter second number
console.log(calc.next(20).value); // Sum is 30

// 7. Infinite Generators
// Generators का उपयोग infinite sequences बनाने के लिए भी किया जा सकता है क्योंकि वे lazy evaluation करते हैं।
function* infiniteCounter() {
  let i = 1;
  while (true) {
    yield i++;
  }
}

const counter = infiniteCounter();

console.log(counter.next().value); // 1
console.log(counter.next().value); // 2
console.log(counter.next().value); // 3

// 8. Generator with return
// return का use generator को terminate करने और final value देने के लिए होता है।
function* generateSequence() {
  yield 1;
  yield 2;
  return "Done!";
}

const seq = generateSequence();

console.log(seq.next()); // { value: 1, done: false }
console.log(seq.next()); // { value: 2, done: false }
console.log(seq.next()); // { value: 'Done!', done: true }
console.log(seq.next()); // { value: undefined, done: true }

// 9. Delegating Generators (yield*)
// हम yield* का उपयोग करके एक generator से दूसरे generator को delegate कर सकते हैं।
function* fruits() {
  yield "Apple";
  yield "Mango";
}

function* moreFruits() {
  yield* fruits();
  yield "Banana";
}

for (const fruit of moreFruits()) {
  console.log(fruit);
}
// Output:
// Apple
// Mango
// Banana

// 10. Real-Life Example – Paginated Data Fetching
// मान लो हमें API से paginated data fetch करना है, तो generator काफी useful है।
function* fetchPages() {
  let page = 1;
  while (page <= 3) {
    yield `Fetching data for page ${page}`;
    page++;
  }
}

const fetcher = fetchPages();

console.log(fetcher.next().value); // Fetching data for page 1
console.log(fetcher.next().value); // Fetching data for page 2
console.log(fetcher.next().value); // Fetching data for page 3
console.log(fetcher.next().value); // undefined
