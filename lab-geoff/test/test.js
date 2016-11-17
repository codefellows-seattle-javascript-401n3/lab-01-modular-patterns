var assert = require('assert');
var greet = require('../greet.js');

describe('greet.js', function() {
  it('greet should not be an empty object', function() {
    assert.notDeepEqual(greet, {});
  });
  it('greet should return a string', function() {
    var greeting = greet.greet('name');
    assert.equal(typeof greeting, 'string');
  });
});
