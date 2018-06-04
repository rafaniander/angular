var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');

gulp.task('concat', function() {
  return gulp.src('./dist/**/*.js')
    .pipe(concat('rating.js'))
    .pipe(gulp.dest('./dist/element'));
});

gulp.task('rename', function() {
  return gulp.src('./dist/**/*.css')
    .pipe(rename('rating.css'))
    .pipe(gulp.dest('./dist/element'));
});

// Fonts
gulp.task('fonts', function() {
    return gulp.src('./dist/rating-custom-element/fontawesome-webfont.*')
      //.pipe(rename('rating.css'))
      .pipe(gulp.dest('./dist/element'));
  });

gulp.task('default', ['concat', 'rename', 'fonts']);