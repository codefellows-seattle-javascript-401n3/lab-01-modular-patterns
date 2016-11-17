var hello = {};


hello.greet = function(name) {
  return 'hello ' + name;
};

hello.greet(process.argv[2]);

module.exports = hello.greet;
