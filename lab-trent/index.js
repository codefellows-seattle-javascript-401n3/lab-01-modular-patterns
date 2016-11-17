const greet = require('./greet');

if (process.argv[2]) {
  console.log(greet(process.argv[2]));
} else {
  console.log(greet('trent'));
}
