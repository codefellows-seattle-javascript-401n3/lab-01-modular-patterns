var assert = require('assert');
var index = require('../index.js');
console.log(index); //empty object right now

describe('index', function() {
  it('it should not be empty', function() {
    console.log("this is the console.log " + index);
    assert.ok(index);
  })
});

describe('someThing', function() {
  describe('someFunction', function() {
    it('moreDescription', function() {
      assert.equal(2, 2);
    })
  })
});

describe('index', function() {
  describe('index should not be an empty object', function() {
    it('should not be equal to an empty object', function() {
      var obj = {};
      assert.notDeepEqual(index, obj);
    })
  })
})
