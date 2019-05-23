var mongoose = require ('mongoose');
mongoose.set('debug', true);
// console.log(process.env.DATABASEURL);
const url = process.env.DATABASEURL || 'mongodb://localhost/todo-api';
mongoose.connect(url, {useNewUrlParser:true});
// mongoose.connect('mongodb://localhost/todo-api', {useNewUrlParser:true});
// mongoose.connect('mongodb://deepali:Mango2018deployWebpages@ds137100.mlab.com:37100/reacttodolist', {useNewUrlParser:true});

mongoose.Promise = Promise; // to allow us to to use promise syntax

module.exports.Todo = require('./todo');

