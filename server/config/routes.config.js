const taskController = require('./../controllers/task.ctrl.js');
console.log("SERVER > routes.config.js");
module.exports = function(app){
    app.get('/tasks', taskController.retrieveTasks)
    // app.get('/tasks/:id', taskController.retrieveTask)
    app.delete('/tasks/:id', taskController.destroyTask)
    // app.patch('/tasks/:id', taskController.updateTask)
    app.post('/tasks', taskController.createTask)
}
