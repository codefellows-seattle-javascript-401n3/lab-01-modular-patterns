const assert = require('assert');
const greet = require('../greet');

describe('Greet', function() {
  describe('greet()', function() {
    it('should greet the user', function() {
      assert.equal(greet.greet(), 'hello');
    });
    it('should greet the user by the username passed in as a parameter', function() {
      assert.equal(greet.greet('tom'), 'hello tom');
    });
  });
});
