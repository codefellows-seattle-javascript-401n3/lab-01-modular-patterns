module.exports = function greet(name) {
  if(typeof(name) === 'string') {
    return `hello ${name}`;
  }
  return 'Name needs to be a string';
};