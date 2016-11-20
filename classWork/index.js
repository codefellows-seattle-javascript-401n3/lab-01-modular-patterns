'use strict';

const fs = require('fs');

fs.readFile('./one.txt', function(err, data){
  if(err){
    console.log('err');
  }
  console.log(data.toString());
});
