var gulp = require('gulp');
var eslint = require('gulp-eslint');
var mocha = require('gulp-mocha');

gulp.task('lint', function(){
  return gulp.src(['**/*.js','!node_modules/**'])
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError());
});

gulp.task('mocha', function() {
  return gulp.src('./test/*.js')
    .pipe(mocha({
      reporter: 'nyan',
    }));
});

gulp.task('watch', function() {
  //code
});

gulp.task('favorite', function() {
  //favorite task
});
