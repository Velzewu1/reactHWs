import React, { createContext, useContext, useState } from 'react';

const TodoContext = createContext();

export const useTodo = () => useContext(TodoContext);

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const removeTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter(todo => todo.id !== id));
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
