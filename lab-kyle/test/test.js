const assert = require('assert');
const name = require('../lib/name');

describe('a name module', function() {
  describe('greet()', function() {
    it('can make a greeting', function() {
      assert.equal(name.greet(name), 'hello ' + name);
    });
    it('returns a string', function() {
      assert.equal(typeof(name.greet(name)), typeof('string'));
    });
  });
});
