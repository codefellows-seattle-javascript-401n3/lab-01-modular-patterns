'use strict';

const greet = require('./lib/greet');

if (process.argv[2]) {
  console.log(greet(process.argv[2]));
} else {
  console.log(greet('trent'));
}
