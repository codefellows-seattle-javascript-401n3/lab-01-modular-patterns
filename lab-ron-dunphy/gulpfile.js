'use strict';

const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');


gulp.task('test', function(){
  gulp.src('./test/*-test.js')
  .pipe(mocha({reporter: 'nyan'}));
});

gulp.task('lint', function() {
  return gulp.src(['**/*.js', '!node_modules/**'])
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError());
});

gulp.task('dev', function(){
  gulp.watch(['**/*.js', '!node_modules/**'], ['lint', 'test']);
});

gulp.task('hello world', function(){
  console.log('Hell, low whirled');
});

gulp.task('default', ['dev']);
