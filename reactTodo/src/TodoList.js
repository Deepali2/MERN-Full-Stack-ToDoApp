import React, {Component} from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
const APIURL = '/api/todos/';

class TodoList extends Component{
  constructor(props) {
    super(props);
    this.state= {
      todos:[]
    }
    this.addTodo = this.addTodo.bind(this);
  }
  componentWillMount() {
    this.loadTodos();
  }

  loadTodos() {
    fetch(APIURL)
    .then(resp => {
      if (!resp.ok) {
        if (resp.status >= 400 && resp.status < 500) {
          return resp.json().then(data => {     //resp.json will be the error message
            let err = {errorMessage: data.message};
            throw err;
          })
        } else {
          let err = {errorMessage: 'Please try again later. Server is not responding'};
          throw err;
        }
      }
      return resp.json()    
    })
    .then(todos => this.setState({todos}));
  }
  
  addTodo(val) {
    fetch(APIURL, {
      method: 'post', //the default method is get
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({name: val})
    })
    .then(resp => {
      if (!resp.ok) {
        if (resp.status >= 400 && resp.status < 500) {
          return resp.json().then(data => {     //resp.json will be the error message
            let err = {errorMessage: data.message};
            throw err;
          })
        } else {
          let err = {errorMessage: 'Please try again later. Server is not responding'};
          throw err;
        }
      }
      return resp.json()    
    })
    .then(newTodo => {
      this.setState({
        todos: [...this.state.todos, newTodo]
      })
    })
  }

  deleteTodo(id) {
    const deleteUrl = APIURL + id;
    fetch(deleteUrl, {
      method: 'delete', //the default method is get
    })
    .then(resp => {
      if (!resp.ok) {
        if (resp.status >= 400 && resp.status < 500) {
          return resp.json().then(data => {     //resp.json will be the error message
            let err = {errorMessage: data.message};
            throw err;
          })
        } else {
          let err = {errorMessage: 'Please try again later. Server is not responding'};
          throw err;
        }
      }
      return resp.json()    
    })
    .then(() => {
      const todos = this.state.todos.filter(todo => todo._id !== id);
      this.setState({
        todos: todos
      });
    })
  }

  render (){
    const todos = this.state.todos.map(t => (
      <TodoItem 
        key={t._id}
        {...t}
        onDelete={this.deleteTodo.bind(this, t._id)} //must be bound here and not on top since id has to be passed in
      />
    ));
    return(
      <div>
         <h1>Todo List</h1>
         <TodoForm addTodo={this.addTodo}/>
         <ul>{todos}</ul>        
       </div>
    );
  }
}

export default TodoList;