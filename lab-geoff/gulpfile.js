'use strict'

let gulp = require('gulp');
let mocha = require('./node_modules/gulp-mocha');
let eslint = require('./node_modules/gulp-eslint')
// let eslint = require('./node_modules/eslint')

//npm run useGulp
gulp.task('default', function() {
  console.log('gulp default task')
});

//npm run gulpLint
gulp.task('lint', function() {
  console.log('running eslint for everything')
  console.log(eslint)
  gulp.src('./*.js').pipe(eslint())
});

//npm run gulpTest
gulp.task('mocha', function() {
  gulp.src('./test/*').pipe(mocha());
});

//npm run gulpWatch
gulp.task('watch', function() {
  console.log('Watch files. Run the lint and test tasks');
  let watchedFiles = gulp.watch('./*.js', ['lint', 'mocha']);
  watchedFiles.on('change', function(e) {
    console.log(e.path + ' was ' + e.type);
  })
});
