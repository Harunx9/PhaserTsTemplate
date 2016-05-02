///< <reference path="typings/main.d.ts" />
var gulp = require('gulp'),
    ts = require('gulp-typescript'),
    connect = require('gulp-connect'),
    watch = require('gulp-watch'),
    concat = require('gulp-concat');


gulp.task('compile-ts', function () {
    console.log('compileing typescript')
    var tsResult = gulp.src(['src/**/*.ts'])
        .pipe(
        ts({
            module: 'commonjs',
            removeComments: true
        }))
        
     return tsResult.js
        .pipe(concat('game.js'))
        .pipe(gulp.dest('bin/js/'));   
});

gulp.task('watch', function () {
    gulp.watch('src/**/*.ts', ['compile-ts']);
});

gulp.task('livereload', function () {
    gulp.src(['src/**/*.ts', 'bin/assets/**/*.*'])
        .pipe(watch(['src/**/*.ts', 'bin/assets/**/*.*']))
        .pipe(connect.reload())
});

gulp.task('serve', function () {
    connect.server({
        livereload: true,
        root: 'bin'
    });
});

gulp.task('default', ['compile-ts', 'serve', 'livereload', 'watch']);