var expect = require('chai').expect;
var nameLib = require('../lib/name-lib');

describe('Name Library', function () {
  describe('Greeting Function', function () {
    it('should equal an expected output', function () {
      expect(nameLib.greet('Dan')).to.equal('hello, Dan');
    });
    it('should handle nulls correctly', function () {
      expect(nameLib.greet(null)).to.equal('hello');
    });
    it('should handle undefined correctly', function () {
      expect(nameLib.greet(undefined)).to.equal('hello');
    });
    it('should always return a string', function () {
      expect(nameLib.greet('Test')).to.be.a('string');
      expect(nameLib.greet(null)).to.be.a('string');
      expect(nameLib.greet(undefined)).to.be.a('string');
    });
  });
});
