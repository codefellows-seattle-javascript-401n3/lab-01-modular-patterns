'use strict';

const greet = require('../lib/greet.js');
const assert = require('assert');

describe('a simple greet module', function() {
  it('can greet with name', function() {
    var name = '';
    assert.equal(greet.greet(name),'my name is ' + name);
  });
});
