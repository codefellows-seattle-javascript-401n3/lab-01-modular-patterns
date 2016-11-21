var expect = require('chai').expect;
var greet = require('../lib/greet.js').greet;

describe('greet', function() {
  it ('should greet whatever name is input', function() {
    var greeting = greet('sandy');
    expect(greeting).to.deep.equal('hello sandy');
  });
  it ('should process an argument', function () {
    process.argv[2] = 'smitty';
    var argPass = greet(process.argv[2]);
    expect(argPass).to.deep.equal('hello smitty');
  }); //more o' thems bonus points!
});
