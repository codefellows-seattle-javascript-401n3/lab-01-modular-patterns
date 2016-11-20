const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');


gulp.task('welcome', function() {
  console.log('Welcome and Good Day');
});

gulp.task('tester', function() {
  gulp.src('./test/test-*.js')
  .pipe(mocha());
});

gulp.task('linter', function() {
  gulp.src('./**/*.js')
  .pipe(eslint());
});

gulp.task('dev', function() {
  gulp.watch('./**/*.js', ['tester', 'linter']);
});

gulp.task('default', ['welcome', 'dev']);
