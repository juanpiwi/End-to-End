'use strict';

var bundle = require('gulp-bundle-assets');
var gulp   = require('gulp');


gulp.task('bundle', function() {
    return gulp.src('./public/app/bundle.config.js')
        .pipe(bundle())
        .pipe(gulp.dest('./public'));
});
