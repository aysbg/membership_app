var gulp = require('gulp'),
    gulpUtil = require('gulp-util'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    watch = require('gulp-watch');
    //nodemon = require('gulp-nodemon')

var paths = {
  styles: ['public/sass/*.scss']
};

gulp.task('scripts', function() {
  gulp.src('public/js/app/*.js')
      .pipe(concat('gym.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest('public/js'));
});

gulp.task('styles', function() {
  return gulp.src(paths.styles)
            .pipe(sass({ style: 'compressed' }))
            .pipe(concat('style.css'))
            .pipe(gulp.dest('public/css'));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.styles, ['styles']);
});
