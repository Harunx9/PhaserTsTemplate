var td = require('./task-description');
var compileTs = require('./compile-ts');
var serve = require('./serve');
var livereload = require('./livereload');
var watch = require('./watch');

module.exports = new td('default',[
    compileTs.name,
    serve.name,
    livereload.name, 
    watch.name
]);
