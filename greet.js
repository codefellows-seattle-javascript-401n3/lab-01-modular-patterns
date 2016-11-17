function greet(name) {
  if(typeof(name) === 'string') {
    return 'Hello ' + name;
  } else {
    return 'Please enter a string';
  }
}

var test = greet(process.argv[2]);
console.log(test);

module.exports = greet;
