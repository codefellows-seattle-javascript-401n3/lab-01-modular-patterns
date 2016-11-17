module.exports = {};

module.exports.greet = function (name) {
  if (name) {
    return 'hello, ' + name;
  } else {
    return 'hello';
  }
};
