var greet = require('../greeting.js');
var assert = require('assert');

describe('A greeting', function() {
  it('will greet user by name', function() {
    var name = 'bob';
    assert.equal(greet.greet(name), 'hello ' + name);
  });
});
