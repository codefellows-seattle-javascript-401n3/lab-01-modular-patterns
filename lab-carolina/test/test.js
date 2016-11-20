var greet = require('../lib/greet.js');
var assert = require('assert');


describe('testing a greeting module', function(){
  it('should return hello + Caro', function(){
    assert.equal(greet(' Caro'), 'hello Caro');
  });
});
