var gulp = require('gulp');
var concat = require('gulp-concat');
var del = require('del');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var debug = require('gulp-debug');

gulp.task('clean', function (cb) {
  del(['js/latytud.js', 'js/latytud.min.js'], cb);
});

gulp.task('js', function () {
  gulp.src(['src/latytudModule.js', 'src/*.js'])
    .pipe(concat('latytud.js'))
    .pipe(ngAnnotate())
    .pipe(gulp.dest('js/'))
});

gulp.task('compress', ['js'], function () {
  gulp.src('js/latytud.js')
    .pipe(uglify())
    .pipe(concat('latytud.min.js'))
    .pipe(ngAnnotate())
    .pipe(gulp.dest('js/'))
});

gulp.task('watch', ['js'], function () {
  gulp.watch('src/**/*.js', ['js'])
});

gulp.task('default', ['clean', 'js', 'compress'], function () {

});
