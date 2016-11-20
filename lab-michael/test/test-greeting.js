var greet = require('../lib/greeting.js');
var assert = require('assert');

describe('func', function() {
  describe('A greeting', function() {
    it('will greet user by name', function() {
      var name = 'mike';
      assert.equal(greet(name), `hello ${name}`);
    });
  });
});
