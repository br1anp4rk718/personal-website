var mongoose = require('mongoose'),
    Schema = mongoose.Schema; //we're compiling our model

// this is our models and our schema formatt
var todoSchema = new Schema({
    content: String,
    completed: { type: Boolean, default: false },
    updated_at: { type: Date, default: Date.now }
});

mongoose.model('Todo', todoSchema);
//model function makes a copy of schema!!