var gulp = require('gulp');
var eslint = require('gulp-eslint');

gulp.task('lint', function(){
  return gulp.src(['**/*.js','!node_modules/**'])
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError());
});


gulp.task('mocha', function() {
  //code
});

gulp.task('watch', function() {
  //code
});

gulp.task('favorite', function() {
  //favorite task
});
