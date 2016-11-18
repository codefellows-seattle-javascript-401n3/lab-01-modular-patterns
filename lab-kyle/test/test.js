'use strict';

const assert = require('assert');
const name = require('../lib/greet');

describe('a greet module', function() {
  describe('greeting()', function() {
    it('can make a greeting', function() {
      assert.equal(name.greeting(name), 'hello ' + name);
    });
    it('returns a string', function() {
      let result = name.greeting(name);
      assert.equal(typeof(result), typeof('string'));
    });
    it('returns a value with length greater than 0', function() {
      let result = name.greeting(name).length;
      assert.equal(result > 0, true);
    });
  });
  describe('end to end tests', function() {
    it('can hanlde command line args', function() {
      process.argv[2] = 'Kyle';
      let result = name.greeting(process.argv[2]);
      assert.equal(result, 'hello Kyle');
    });
  });
});
