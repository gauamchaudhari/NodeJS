function sayHello(name) {
    console.log(`Hello, ${name} world!`);
}
function sayBye (name) {
    console.log(`Goodbye, world! ${name}`);
}

module.exports = {
    sayHello,
    sayBye
}