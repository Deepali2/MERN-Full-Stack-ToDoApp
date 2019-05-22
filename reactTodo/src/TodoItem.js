import React from 'react';

const TodoItem = ({name, completed, onDelete}) => {
  return (
    <li
      style={{
        textDecoration: completed? 'line-through': 'none'
      }}
    >
      {name}
      <span onClick={onDelete}> X </span>
    </li>
  )
}

export default TodoItem;
