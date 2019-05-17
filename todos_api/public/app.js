//add the below if using cloud 9 for the $ warning to go away
/* global $ */ 

//any code we put here will wait to run till the DOM has loaded
$(document).ready(function() {
  $.getJSON('api/todos')
  .then(addTodos)
  .catch(function(err) {
    alert(`There is an error: ${err}`)
  })
})

function addTodos(todos) {
  todos.forEach(function(todo) {
    console.log(todo.name);
    // let newTodo = $(`<li class="task">${todo.name}<li>`); // do not use this as it is adding an extra dot for each list
    let newTodo = $('<li class="task">' + todo.name + '</li>');
    // newTodo.addClass('task'); could also do it this way
    $('.list').append(newTodo);
  })
}

  
