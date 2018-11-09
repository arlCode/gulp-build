var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')({
        pattern: ['gulp-*', 'gulp.*'],
        replaceString: /\bgulp[\-.]/
    }),
    sassDoc = require('sassdoc');

var path = {
        sassFiles: "src/sass/*.scss",
        cssFile: "style.min.css",
        output: "dist/assets"
    };

gulp.task('sass', function (error) {
    return gulp.src(path.sassFiles)
        .pipe(plugins.sourcemaps.init())
        .pipe(sassDoc())
        .pipe(plugins.sass(plugins.sassOptions).on('error', plugins.sass.logError))
        .pipe(plugins.concat(path.cssFile))
        .pipe(plugins.autoprefixer(plugins.autoprefixerOptions))
        .pipe(plugins.minifyCss())
        .pipe(plugins.sourcemaps.write("maps"))
        .pipe(gulp.dest(path.output))
        .pipe(plugins.livereload({ start: true }));
});