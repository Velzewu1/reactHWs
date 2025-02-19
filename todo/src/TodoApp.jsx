import React, { useState } from 'react';
import { useTodo } from './TodoContext';
import TodoItem from './TodoItem';

const TodoApp = () => {
  const { todos, addTodo } = useTodo();
  const [newTodoText, setNewTodoText] = useState('');

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newTodoText.trim() !== '') {
      addTodo(newTodoText);
      setNewTodoText('');
    }
  };

  return (
    <div className="todo-container">
      <h1>ToDo List</h1>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          placeholder="Введите задачу"
          className="todo-input"
        />
        <button type="submit" className="add-btn">Добавить</button>
      </form>
      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
