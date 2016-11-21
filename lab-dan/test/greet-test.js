'use strict';

const expect = require('chai').expect;
const greet = require('../lib/greet');

describe('Name Library', function () {
  describe('Greeting Function', function () {
    it('should equal an expected output', function () {
      expect(greet.greet('Dan')).to.equal('hello, Dan');
    });
    it('should handle nulls correctly', function () {
      expect(greet.greet(null)).to.equal('hello');
    });
    it('should handle undefined correctly', function () {
      expect(greet.greet(undefined)).to.equal('hello');
    });
    it('should always return a string', function () {
      expect(greet.greet('Test')).to.be.a('string');
      expect(greet.greet(null)).to.be.a('string');
      expect(greet.greet(undefined)).to.be.a('string');
    });
  });
});
