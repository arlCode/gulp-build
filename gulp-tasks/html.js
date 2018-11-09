var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')({
        pattern: ['gulp-*', 'gulp.*'],
        replaceString: /\bgulp[\-.]/
    });

var path = {
        htmlFiles: "src/**/*.html",
        output: "dist"
    };
    

gulp.task('html', function() {

    return gulp.src(path.htmlFiles)
        .pipe(plugins.htmlmin({ collapseWhitespace: true}))
        .pipe(gulp.dest(path.output))
        .pipe(plugins.livereload({ start: true }));
});