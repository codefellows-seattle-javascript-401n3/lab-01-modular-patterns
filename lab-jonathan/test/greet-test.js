var verify = require('../lib/greet.js');
var assert = require('assert');




describe('app should say hello and give the provided name', function (){
  describe('greet', function(){
    it('will say hello to a user', function() {
      assert.strictEqual('hello Jonathan', verify('Jonathan'))
    });
  });
});


// bonus points below
describe('process.argv array', function() {
  describe('argv', function(){
    it('will pass in the name given on the command line to process.argv', function() {
      process.argv[1] = 'dave';
      assert('greet', verify('dave'));
    })
  });
});
