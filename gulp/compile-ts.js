var gulp = require('gulp');
var td = require('./task-description');
var ts = require('gulp-typescript');
var concat = require('gulp-concat');
var conf = require('./gulpconfig');

module.exports = new td('compile-ts',[],compileTs)

///
function compileTs(){
    console.log('compileing typescript')
    var tsResult = gulp.src(['src/**/*.ts'])
        .pipe(ts({
            module: 'commonjs',
            removeComments: true
        }));
        
     return tsResult.js
        .pipe(concat('game.js'))
        .pipe(gulp.dest(conf.destJs));   
}