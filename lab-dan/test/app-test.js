'strict mode';

const expect = require('chai').expect;
process.argv[2] = 'Test';
const app = require('../app.js');

describe('This is my App run from the command line', function () {
  describe('Greet Function', function () {
    it('should properly accept an argument and parse it', function () {
      expect(app.app.name).to.equal('Test');
    });
  });
});
