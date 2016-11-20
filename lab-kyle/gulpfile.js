'use strict'

const gulp = require('gulp')
const eslint = require('gulp-eslint')
const mocha = require('gulp-mocha')
const gulpif = require('gulp-if')

function isFixed(file) {
  return file.eslint != null && file.eslint.fixed
}

gulp.task('test-gulp', function() {
  console.log('successful test')
})

gulp.task('test', function() {
  gulp.src('./test/test.js', {read: false})
  .pipe(mocha({reporter: 'nyan'}))
})

gulp.task('eslint', function() {
  return gulp.src(['**/*.js', '!node_modules/**'])
  .pipe(eslint({ fix: true}))
  .pipe(eslint.format())
  .pipe(gulpif(isFixed, gulp.dest('./fixed/')))
  .pipe(eslint.failAfterError())
})

gulp.task('dev', function() {
  gulp.watch(['**/*.js', '!node_modules/**'], ['test', 'eslint'])
})

gulp.task('default', ['dev'])
