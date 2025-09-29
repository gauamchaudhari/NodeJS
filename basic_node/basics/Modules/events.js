const myEvent = require('events');
const eventEmitter = new myEvent.EventEmitter();

eventEmitter.on('printData', (first_name, last_name) => {
    console.log(`Hello, ${first_name} ${last_name}`);
});
eventEmitter.emit('printData', 'John', 'Doe');
eventEmitter.emit("printData", "Gautam", "Patel");

// example of multiple event listeners with data
eventEmitter.on('sayHello', (name) => {
    console.log(`Hello ${name}!`);
});
eventEmitter.on('sayHello', () => {
    console.log(`Hello Again !`);
});
eventEmitter.emit('sayHello', 'Rinku');