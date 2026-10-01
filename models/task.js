let mongoose = require('mongoose');

let taskSchema = new mongoose.Schema({
    task_name: String,
    task_desc: String,
    task_duedate: String,
    task_assignedBy: String,
    task_assignedTo: String
});

module.exports = mongoose.model('task', taskSchema);