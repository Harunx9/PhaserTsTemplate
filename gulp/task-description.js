var gulp = require('gulp');

module.exports = TaskDescription;

function TaskDescription(name,otherTasks,taskFunc,registerFunc) {
    var self = this;
    
    if(taskFunc == undefined){
        taskFunc = function(){};
    }
    if(registerFunc == undefined){
        registerFunc = register;
    }
    
    self.name = name;
    self.otherTasks = otherTasks;
    
    //()
    self.task = taskFunc;
    self.register = register;
    
    
    ///
    function register(gulp) {
        gulp.task(self.name,self.otherTasks,self.task);
    }
}