'strict mode';
const greet = require('./lib/greet');

// accepts command line argument or defaults to a 'no name' string when no arg given
let name = process.argv[2] || 'no name';

console.log(greet.greet(name));

module.exports.app = {
  name: name,
};
