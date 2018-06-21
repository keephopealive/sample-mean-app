// ============ Mongoose + BlueBird Promises ============ 
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/projectAlpha')
const TaskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    completed: { type: Boolean, default: false },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});
mongoose.model('Task', TaskSchema);