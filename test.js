var verify = require('./hello.js');
var assert = require('assert');


describe('app should say hello and give the provided name', function (){
  describe('greet', function(){
    it('will say hello to a user', function() {
      assert.strictEqual('hello Jonathan', verify('Jonathan'))
    });
  });
});
