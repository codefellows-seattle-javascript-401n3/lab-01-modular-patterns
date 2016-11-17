var myObj = {
  greet: function greet(name) {
    console.log('hello ' + name);
    return ('hello ' + name);
  },
};

myObj.greet(process.argv[2]); //gimme thems bonus points!

module.exports = myObj;
