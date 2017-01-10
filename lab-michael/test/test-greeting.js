var greet = require('../lib/greeting.js');
var assert = require('assert');

describe('Greet Function', function() {
  describe('A greeting', function() {
    it('will greet user by name', function() {
      let name = 'Michael';
      assert.equal(greet(name), `hello ${name}`);
    });
    it('will only take a valid name as a string', function() {
      assert.equal('Name needs to be a string', greet(3));
    });
  });
});
