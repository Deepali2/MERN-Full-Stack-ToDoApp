//add the below if using cloud 9 for the $ warning to go away
/* global $ */ 

//any code we put here will wait to run till the DOM has loaded
$(document).ready(function() {
  $.getJSON('api/todos')
  .then(addTodos)
  .catch(function(err) {
    alert(`There is an error: ${err}`)
  })
  $('#todoInput').keypress(function() {
    if (event.which === 13) createTodo(); // 13 is the keycode for the enter key
  })
  $('.list').on('click', 'span', function() {
    removeTodo($(this).parent());
  })
})

//displays all the todos on the page
function addTodos(todos) {
  todos.forEach(todo => addTodo(todo))  
}

//helper function to append a todo item to the list
function addTodo(todo) {
    // let newTodo = $(`<li class="task">${todo.name}<li>`); // do not use this as it is adding an extra dot for each list
   let newTodo = $('<li class="task">' + todo.name +  '<span>X</span></li>');
    // newTodo.addClass('task'); could also do it this way
    newTodo.data('id', todo._id); //store the id of each todo
    if (todo.completed === true) {
      newTodo.addClass('done');
    }
    $('.list').append(newTodo);
}

//creates a new Todo and displays it
function createTodo() {
  var userInput = $('#todoInput').val();  //gives us the value in the input
  $.post('/api/todos', {name: userInput})
  .then(todo => {
    $('#todoInput').val(''); 
    addTodo(todo);
  })
  .catch (function(err) {
    console.log(err);
  })
}

//removes a Todo
function removeTodo(todo) {
  let clickedId = todo.data('id');
  let deleteUrl = '/api/todos/' + clickedId;
  $.ajax({
    method: 'DELETE',
    url: deleteUrl
  })
  .then(function(data) {
    todo.remove();
  })
  .catch(function(err) {
    console.log(err);
  })
}

  
