import React from 'react';

const TodoItem = ({name, completed, onDelete, onToggle}) => {
  const doneStyle = {
    textDecoration: completed? 'line-through': 'none',
    color: completed?'#bdc3c7': 'black'
  }
  return (
    <li>
      <span
      style={doneStyle}
      onClick={onToggle}
      >
      {name}       
      </span>
      <span onClick={onDelete}> X </span>
    </li>
  );
}

export default TodoItem;
