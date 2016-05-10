///< <reference path="typings/main.d.ts" />
var gulp = require('gulp');
var conf = require('./gulp/gulpconfig');
 
 //load tasks
var taskCount = conf.tasks.lenght;
for (var index = 0; index < conf.tasks.length; index++) {
    var element = conf.tasks[index];
    var task = require(conf.gulpTasksPath + element);
    task.register(gulp); 
}