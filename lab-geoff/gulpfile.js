// Directions:
// include the class eslint
'use strict'

let gulp = require('gulp');

gulp.task('default', function() {
  console.log('gulp default task')
});

// gulp.src('**/*.js').pipe()

gulp.task('lint', function() {
  console.log('run eslint')
});

gulp.task('mocha', function() {
  console.log('run mocha')
});

gulp.task('watch', function() {
  console.log('Watch files. Run the lint and test tasks')
});
