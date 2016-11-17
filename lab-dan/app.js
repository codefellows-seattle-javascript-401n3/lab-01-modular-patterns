var nameLib = require('./lib/name-lib');

// accepts command line argument or defaults to a 'no name' string when no arg given
var name = process.argv[2] || 'no name';

console.log(nameLib.greet(name));

module.exports.app = {
  name: name,
};
