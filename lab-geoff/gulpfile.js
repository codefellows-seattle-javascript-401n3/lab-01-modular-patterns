// Directions:
// include the class eslint
'use strict'

let gulp = require('gulp');

//npm run useGulp
gulp.task('default', function() {
  console.log('gulp default task') // good place to try something creative
});

//npm run gulpLint
gulp.task('lint', function() {
  console.log('running eslint for everything') // some notes as mocha but look up ESLINT stuff
});

//npm run gulpTest
gulp.task('mocha', function() {
  console.log('npm test') // need some way to call mocha -> might be nice to only run on specified files
  // process.argv[1] = 'npm test' //doesn't do anything (i think)
  let source = gulp.src('./*.js');
  console.log(source)
});

//npm run gulpWatch
gulp.task('watch', function() {
  console.log('Watch files. Run the lint and test tasks');
  let watchedFiles = gulp.watch('./*.js', ['lint', 'mocha']); //looks for a change in a js file -> runs lint -> runs mocha
  watchedFiles.on('change', function(e) {
    console.log('some change happened'); //would it be possible to show a diff here?
    console.log(e.path + ' was ' + e.type);
  })
});
