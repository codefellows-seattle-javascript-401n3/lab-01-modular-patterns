'use strict';

let gulp = require('gulp');
let eslint = require('gulp-eslint');
let mocha = require('gulp-mocha');
let sillyName = require('sillyname');

gulp.task('eslintrc', function() {
  return gulp.src(['**/*.js', '!node_module/**'])
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError());
});

gulp.task('test', function(){
  return gulp.src('./test/*-test.js')
  .pipe(mocha({reporter: 'list'}));
});

gulp.task('watch', function(){
  gulp.watch(['**/*.js', '!node_modules/**'], ['eslintrc','test']);
});

gulp.task('favorite', function(){
  console.log('I now bequeath you: ' + sillyName());
});
