var td = require('./task-description');
var connect = require('gulp-connect');
var conf = require('./gulpconfig');

module.exports = new td('serve',[],serve)

function serve(){
    connect.server({
        livereload: true,
        root: conf.pathBin
    });
}