import React from 'react';
import { TodoProvider } from './TodoContext';
import TodoApp from './TodoApp';
import './styles.css';

const App = () => {
  return (
    <TodoProvider>
      <TodoApp />
    </TodoProvider>
  );
};

export default App;
