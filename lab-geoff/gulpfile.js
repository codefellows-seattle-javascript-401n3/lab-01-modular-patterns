// Directions:
// include the class eslint
'use strict'

let gulp = require('gulp');

//npm run useGulp
gulp.task('default', function() {
  console.log('gulp default task')
});

//npm run gulpLint
gulp.task('lint', function() {
  console.log('run eslint')
  // let stream = gulp.src('/*.js')
  // console.log(stream)
});

//npm run gulpTest
gulp.task('mocha', function() {
  console.log('run mocha')
});

//npm run gulpWatch
gulp.task('watch', function() {
  console.log('Watch files. Run the lint and test tasks');
  let watchedFiles = gulp.watch('./*.js', ['lint', 'mocha']);
  watchedFiles.on('change', function(e) {
    console.log('some change happened')
  })
});
