'use strict'

const gulp = require('gulp')
const eslint = require('gulp-eslint')
const mocha = require('gulp-mocha')

gulp.task('test-gulp', function() {
  console.log('successful test')
})

gulp.task('test', function() {
  gulp.src('./test/test.js', {read: false})
  .pipe(mocha({reporter: 'nyan'}))
})
