const assert = require('assert');
const name = require('../lib/greet');
var result;

describe('a greet module', function() {
  describe('greeting()', function() {
    it('can make a greeting', function() {
      assert.equal(name.greeting(name), 'hello ' + name);
    });
    it('returns a string', function() {
      let result = name.greeting(name);
      assert.equal(typeof(result), typeof('string'));
    });
    it('returns a value with length greater than 0', function() {
      let result = name.greeting(name).length;
      assert.equal(result > 0, true);
    });
  });
});
