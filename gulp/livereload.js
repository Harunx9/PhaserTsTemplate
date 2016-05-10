var gulp = require('gulp');
var td = require('./task-description');
var watch = require('gulp-watch');
var connect = require('gulp-connect');
var conf = require('./gulpconfig');
 
module.exports = new td('livereload',[],livereload)


function livereload(){
   gulp.src([ //todo issue is it required to twice this same array?
            conf.pathSrc + '**/*.ts',
            conf.pathBin + 'assets/**/*.*'
        ]).pipe(watch([
            conf.pathSrc + '**/*.ts',
            conf.pathBin + 'assets/**/*.*'
        ])).pipe(connect.reload())
}