var gulp = require('gulp');
var concat = require('gulp-concat');
var del = require('del');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var connect = require('gulp-connect');

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
    .pipe(concat('latytud.min.js'))
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(gulp.dest('js/'))
});

/* ============================================== */
/* ============================================== */
gulp.task('watch', ['js'], function () {
  gulp.watch('src/**/*.js', ['compress'])
});

/* ============================================== */
/* ============================================== */
gulp.task('webServerReload', function() {
  gulp.src(['src/**/*.js', 'js/**', 'css/**', 'index.html'])
  .pipe(connect.reload())
});

gulp.task('webServerConnect', function() {
  connect.server({
    root: '.',
    fallback:'index.html',
    port: 8282,
    livereload: true
  });
});

gulp.task('watchWebServer', function () {
  gulp.watch(['src/**/*.js', 'js/**', 'css/**', 'index.html'], ['compress', 'webServerReload'])
});

gulp.task('launchWebServer', ['webServerConnect', 'watchWebServer']);

/* ============================================== */
/* ============================================== */
gulp.task('default', ['clean', 'js', 'compress'], function () {
});
