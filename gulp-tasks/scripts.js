var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')({
        pattern: ['gulp-*', 'gulp.*'],
        replaceString: /\bgulp[\-.]/
    });

var path = {
        jsFiles: "src/js/*.js",
        scriptFile: "scripts.min.js",
        output: "dist/assets"
    },
    options = {
        ie8: true,
        warnings: true
    },
    buildOrder = [
        "src/js/app.js",
        "src/js/policy.js",
        "src/js/data/*.js",
        "src/js/services/*.js",
        "src/js/factories/*.js",
        "src/js/directives/*.js",
        "src/js/controllers/*.js"
    ];

gulp.task('scripts', function (cb) {

    return gulp.src(buildOrder)
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.jsdoc3(cb))
        .pipe(plugins.concat(path.scriptFile))
        .pipe(plugins.babel())
        .pipe(plugins.ngAnnotate())
        .pipe(plugins.uglify(options))
        .pipe(plugins.sourcemaps.write("maps"))
        .pipe(gulp.dest(path.output))
        .pipe(plugins.livereload({ start: true }));
})