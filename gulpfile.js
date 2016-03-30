var gulp = require('gulp');
var open = require('gulp-open');
var connect = require('gulp-connect');

var config = {
  devBaseUrl: 'http://localhost',
  port: 9009,
  paths: {
    html: './index.html',
    js: './app/src/**/*.js'
  }
};

gulp.task('connect', function() {
  connect.server({
      root: ['.'],
      port: config.port,
      base: config.devBaseUrl,
      fallback: 'index.html',
      livereload: true
  });
});

gulp.task('open', ['connect'], function() {
  return gulp.src('')
      .pipe(open({
          app: config.browser,
          uri: config.devBaseUrl + ':' + config.port + '/'
      }));
});

gulp.task('html', function() {
  return gulp.src(config.paths.html)
    .pipe(connect.reload());
});

gulp.task('js', function() {
  return gulp.src(config.paths.js)
    .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch(config.paths.html, ['html']);
  gulp.watch(config.paths.js, ['js']);
});

gulp.task('default', ['open', 'watch']);