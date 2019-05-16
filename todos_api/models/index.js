var mongoose = require ('mongoose');
mongoose.set('debug', true);

mongoose.connect('mongodb://localhost/todo-api', {useNewUrlParser:true});
mongoose.Promise = Promise; // to allow us to to use promise syntax

module.exports.Todo = require('./todo');