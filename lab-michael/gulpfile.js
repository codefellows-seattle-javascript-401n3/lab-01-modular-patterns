const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');


gulp.task('welcome', function() {
  console.log('Welcome and Good Day');
  // gulp.src('/**/*.js');
});

gulp.task('tester', function() {
  gulp.src('./test/test-*.js')
  .pipe(mocha());
});

gulp.task('linter', function() {
  gulp.src('/**/*.js')
  .pipe(eslint());
});

// gulp.task('default', function() {
//   console.log('Process is run by default');
// });
gulp.task('default', ['welcome', 'tester', 'linter']);
