var assert = require('assert');
var name = require('./lib/name');

describe('a name module', function() {
  describe('greet()', function() {
    it('can make a greeting', function() {
      assert.equal('name.greet(name), "hello" + name');
    });
  });
});
