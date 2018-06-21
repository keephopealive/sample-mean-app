// app.component.html
// app.component.ts
// task.service.ts
// routes.config.js
// task.ctrl.js
// task.model.js

const mongoose = require('mongoose');
const Task = mongoose.model('Task');

module.exports = {
    retrieveTasks: function(req, res) {
        console.log("SERVER > CONTROLLER > retrieveTasks")
        Task.find({},function(err, tasks){
            res.json(tasks);
        })
    },
    destroyTask: function(req, res) {
        console.log("SERVER > CONTROLLER > destroyTask > req.params", req.params.id)
        Task.deleteOne({_id:req.params.id}, function(result){
            res.send(true);
        })
    },
    createTask: function(req, res) {
        console.log("SERVER > CONTROLLER > createTask > req.body", req.body)
        Task.create(req.body, (status)=>{
            res.send(true);
        })
    }
}