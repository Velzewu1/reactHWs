import React from 'react';
import { useTodo } from './TodoContext';

const TodoItem = ({ todo }) => {
  const { removeTodo } = useTodo();

  return (
    <li className="todo-item">
      <span>{todo.text}</span>
      <button onClick={() => removeTodo(todo.id)} className="remove-btn">Удалить</button>
    </li>
  );
};

export default TodoItem;
