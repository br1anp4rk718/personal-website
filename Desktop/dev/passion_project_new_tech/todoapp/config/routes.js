var express = require('express');

module.exports = function(app){
    // register route controllers
    var main = require('../routes/main');
    var todo = require('../routes/todo');
    var todoRouter = express.Router();
    app.use('/todos', todoRouter);

    app.get('/', main.index);
    todoRouter.get('/', todo.all);
    todoRouter.post('/create', todo.create);
    todoRouter.post('/destroy/:id', todo.destroy);
};
