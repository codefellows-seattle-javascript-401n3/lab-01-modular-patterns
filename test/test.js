var assert = require('assert');
var greet = require('../lib/greet.js');

describe('Greet Module', function() {
  describe('#greet()', function() {
    it('returns Hello Jessica', function() {
      assert.strictEqual('Hello Jessica', greet('Jessica'));
    });
  });
});