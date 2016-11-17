function greet(name) {
  if(typeof(name) === 'string') {
    return 'Hello ' + name;
  } else {
    return 'Please enter a string';
  }
}

module.exports = greet;
