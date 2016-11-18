const assert = require('assert')
const greet = require('../lib/greet')

describe('test the greet module', function() {
  describe('greet()', function() {
    it('should return Hello Scott', function() {
      assert.equal(greet('Scott'), 'Hello Scott')
    })
    it('should return Hello Jim', function() {
      assert.equal(greet('Jim'), 'Hello Jim')
    })
  })
})
