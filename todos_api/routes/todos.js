const express = require('express');
const router = express.Router();
const db = require('../models');


router.get('/', function(req, res) {
  db.Todo.find()
  .then(function(todos) {
    res.json(todos);
  })
  .catch(function(err) {
    res.send(err);
  })
})

router.post('/', function(req, res) {
  db.Todo.create(req.body)//create the new todo
  .then(function(newTodo) {//return the newly cerated to do item
    res.status(201).json(newTodo);
  })
  .catch(function(err) {
    res.send(err);
  })
})


module.exports = router;