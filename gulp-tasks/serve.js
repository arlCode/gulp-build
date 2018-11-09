var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')({
        pattern: ['gulp-*', 'gulp.*'],
        replaceString: /\bgulp[\-.]/
    }),
    connect = require('gulp-connect-multi')();

gulp.task('connect', connect.server({
    root: ['dist'],
    livereload: true,
    port: 8080,
    open: {
        browser: 'chrome'
    }
}));
