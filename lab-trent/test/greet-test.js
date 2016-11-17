const assert = require('assert');
const greet = require('../greet');

describe('Greet', function() {
  describe('greet()', function() {
    it('should greet the user by the username passed in as a parameter', function() {
      assert.equal(greet.greet('tom'), 'hello tom');
    });
    it('should greet the user by the different username passed in as a parameter', function() {
      assert.equal(greet.greet('richard'), 'hello richard');
    });
    it('should greet the user by the username passed as a process argument', function() {
      assert.equal(greet.greet(), 'hello ' + process.argv[2]);
    });
  });
});
