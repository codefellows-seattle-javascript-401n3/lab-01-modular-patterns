const gulp = require('gulp');
const mocha = require('gulp-mocha');
const eslint = require('gulp-eslint');


gulp.task('mocha', function() {
  return gulp.src('test/test.js')
    .pipe(mocha());
});

gulp.task('eslint', function(){
  return gulp.src('*/*.js')
  .pipe(eslint());
});
