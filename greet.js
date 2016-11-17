function greet(name) {
  if(typeof(name) === 'string') {
    return 'Hello ' + name;
  } else {
    return 'Please enter a string';
  }
}

console.log(greet(process.argv[2]));

module.exports = greet;
