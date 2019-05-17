const express = require('express');
const router = express.Router();
const db = require('../models');

//Index Route
router.get('/', function(req, res) {
  db.Todo.find()
  .then(function(todos) {
    res.json(todos);
  })
  .catch(function(err) {
    res.send(err);
  })
})

//Create Route
router.post('/', function(req, res) {
  db.Todo.create(req.body)//create the new todo
  .then(function(newTodo) {//return the newly cerated to do item
    res.status(201).json(newTodo);
  })
  .catch(function(err) {
    res.send(err);
  })
})
//Show Route
router.get('/:todoId', function(req, res) {
  db.Todo.findById(req.params.todoId)
  .then(function(foundTodo) {
    res.json(foundTodo)
  })
  .catch(function(err) {
    res.send(err);
  })
})
//Update Route
router.put('/:todoId', function(req, res) {
  db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new:true})
  .then(function(todo) {
    res.json(todo);
  })
  .catch(function(err) {
    res.send(err);
  })
})


module.exports = router;