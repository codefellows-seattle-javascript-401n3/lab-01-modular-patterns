const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');

//make a command called lintMe
gulp.task('lintMe', function() {
  return gulp.src(['**/*.js', '!node_modules'])
//the stuff gulp should look at is in the current directory or subdirectories with a .js extension, except from within the node_modules directory.
  .pipe(eslint()) //run the eslint method on that stream of data
  .pipe(eslint.format());//output the results to the console.
});

gulp.task('testMe', function() {
  return gulp.src(['./test/*.js']) //look for any file in the test directory with a .js extension
  .pipe(mocha());//run that stream of data through the mocha method
});

function nightsWatch() {
  gulp.watch(['**/*.js', '!node_modules/**'], ['lintMe', 'testMe']);
}
// }//make a function called nightsWatch that makes gulp watch any file with a .js extension in the current directory or subdirectories (except node modules) and then run the lintMe and testMe tasks


gulp.task('dev', function() {
  nightsWatch();
}); //make a gulp task called dev that runs the nightsWatch() function.

gulp.task('flatterJacob', function() {
  console.log('Jacob, you\'re great!');
});

gulp.task('default', ['flatterJacob']);

//below here I am playing with gulp

gulp.task('gulpStream5', function() {
  return gulp.src(['./test/*.js'])
  .pipe(gulp.dest('./lib/stream-file'));
});//it works! my gulpStream5 command takes the only file in the test directory and sends it to a new file in my lib directory. Pulled it open to check and it was there.
