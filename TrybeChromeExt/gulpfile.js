var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
  gulp.src('./popup.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./css/'));
});

gulp.task('default', function() {
  return gulp.watch('./popup.scss', gulp.series('styles'));
});