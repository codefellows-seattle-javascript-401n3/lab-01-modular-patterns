const greet = require('./lib/greet');

const greeting = greet.greeting(process.argv[2]);
console.log(greeting);
