var gulp = require('gulp');
const del = require('del');

var delObject = {
    path: ["dist/assets/**","!dist/assets", "!dist/assets/img/**"],
    logMessage: "Erased watched produced files.\n"
};

// Erases Assets folder
gulp.task('del', function () {

    return del(delObject.path).then(paths => {
        console.log(delObject.logMessage);
    });

})
