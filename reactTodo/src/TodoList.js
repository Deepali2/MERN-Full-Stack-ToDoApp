import React, {Component} from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import * as apiCalls from './api';

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

  async loadTodos() {
    let todos = await apiCalls.getTodos();
    this.setState({todos});
  }
  
  async addTodo(val) {
    let newTodo = await apiCalls.createTodo(val);
    this.setState({
      todos: [...this.state.todos, newTodo]
    })    
  }

  async deleteTodo(id) {
    await apiCalls.removeTodo(id);
    const todos = this.state.todos.filter(todo => todo._id !== id);
    this.setState({
        todos: todos
    });
  }

  async toggleTodo(todo) {
    let updatedTodo = await apiCalls.updateTodo(todo);
    const todos = this.state.todos.map(t => 
      (t._id === updatedTodo._id)
      ? {...t, completed: !t.completed}
      : t
    );
    this.setState({
      todos: todos
    });
  }

  render (){
    const todos = this.state.todos.map(t => (
      <TodoItem 
        key={t._id}
        {...t}
        onDelete={this.deleteTodo.bind(this, t._id)} //must be bound here and not on top since id has to be passed in
        onToggle={this.toggleTodo.bind(this, t)}
      />
    ));
    return(
      <div>
         <h1>todo <span>list</span></h1>
         <h2>A MERN(MongoDB, Express, React, Node.js) full stack app</h2>
         <p>Designed and Maintained by deepaligarg1001@gmail.com</p>
         <TodoForm addTodo={this.addTodo}/>
         <ul>{todos}</ul>        
       </div>
    );
  }
}

export default TodoList;