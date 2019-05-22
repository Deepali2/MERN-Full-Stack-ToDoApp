import React, {Component} from 'react';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state={inputValue: ''}
    this.handleChange = this.handleChange.bind(this);
    this.keyPress = this.keyPress.bind(this);
  }
  handleChange(e) {
  this.setState({inputValue:e.target.value});
  }

  keyPress(e) {
    if (e.keyCode === 13) {
      this.props.addTodo(this.state.inputValue);
      this.setState({inputValue: ''});
    }  
  }

  render() {
    return (
      <div className='form'>
        <input 
          id='todoInput'
          type='text' 
          placeholder='Insert your task here...'
          value={this.state.inputValue}
          onChange={this.handleChange}
          onKeyDown={this.keyPress}
        />
      </div>
    )
  }
}

export default TodoForm;