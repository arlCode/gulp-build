var gulp = require('gulp');
    plugins = require('gulp-load-plugins')({
      pattern: ['gulp-*', 'gulp.*'],
      replaceString: /\bgulp[\-.]/
    });
var requireDir = require('require-dir');
var path = {
  sassFiles: "src/sass/*.scss",
  jsFiles: "src/js/**",
  htmlFiles: "src/**/*.html"
};
var connect = require('gulp-connect-multi')();

requireDir('./gulp-tasks'); // Folder or Gulp Tasks

// === Connect Tasks ===

gulp.task('connect', gulp.series('connect'));

gulp.task('reload', function() {
  plugins.livereload.listen();
});

// Start build task.
gulp.task('build', gulp.series('html', 'sass', 'scripts'));

// === WATCH Tasks ===

// HTML Minification and Watch Task
gulp.task('watch:html', function () {
  gulp.watch(path.htmlFiles, gulp.series('html'))
});

// SASS conversion and minification of CSS
gulp.task('watch:styles', function () {
  gulp.watch(path.sassFiles, gulp.series('sass'))
});

// JS conversion and minification of JS
gulp.task('watch:scripts', function () {
  gulp.watch(path.jsFiles, gulp.series('scripts'))
});

//  ==== Active Tasks ====

// Watch both styles, scripts, and HTML
gulp.task('watch', gulp.parallel('watch:styles', 'watch:scripts', 'watch:html'));

// Tasks that updated in real-time.
gulp.task('stream', gulp.parallel('watch', 'connect'));

// === Default build settings ===
gulp.task('default', gulp.series('del', 'build', 'stream'));