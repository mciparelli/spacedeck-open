const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');

const compileStyles = function(done) {
  gulp.src('styles/**/*.scss')
    .pipe(sass({
        errLogToConsole: true
    }))
    .pipe(cleanCSS())
    .pipe(gulp.dest('./public/stylesheets/'))
    .pipe(concat('style.css'))
  done()
};

gulp.task('styles', compileStyles);

gulp.task('styles:watch', function() {
  gulp.watch(['styles/**/*.scss'], compileStyles)
});