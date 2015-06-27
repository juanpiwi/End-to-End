'use strict';

var jshint = require('gulp-jshint');
var gulp   = require('gulp');


gulp.task('jshint', function() {
    return gulp.src(['./app/**/*.js','./index.js'])
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('jshint-stylish'));
});
