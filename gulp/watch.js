var gulp = require('gulp');
var td = require('./task-description');
var watch = require('gulp-watch');
var compileTs = require('./compile-ts');
var conf = require('./gulpconfig');

module.exports = new td('watch',[],watchTask)


function watchTask(){
    gulp.watch(conf.srcPath+'**/*.ts', [compileTs.name]);
}