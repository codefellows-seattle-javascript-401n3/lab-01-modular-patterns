'use strict';


exports.greet = function greet(name) {
  if (!name) throw ReferenceError('Must provide name!');
  console.log(name);
  return `my name is ${name}`;
};
