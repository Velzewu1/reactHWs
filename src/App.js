import './App.css'; 
import React, {useState, useEffect} from 'react'; 
import TodoInput from './components/TodoInput' 
import TodoList from './components/TodoList' 
 
function App() { 
  const [todos, setTodos] = useState([]) 
  const [editingIndex, setEditingIndex] = useState(null) 

  const [checks, setChecks] = useState([]);
  const [deleteList, setDeleteList] = useState([]);
 
  function addTodo(task){ 
    setTodos([...todos, task]); 
    setChecks([...checks, false]);
  } 
 
  function updateTodo(task, index) {
    setTodos(todos.map((todo, i) => (i === index ? task : todo)));
    setEditingIndex(null);
  }
 
  function cancelTodo(){
    setEditingIndex(null)
  }

  function setChecked(index) {
    setChecks(checks.map((isChecked, i) => (i === index ? !isChecked : isChecked )));
  }

  function deleteTodo() { 
    const newDeleteList = checks
      .map((isChecked, index) => isChecked ? index : null)
      .filter(index => index !== null);

    setDeleteList(newDeleteList);
    setChecks(checks.map((isChecked, index) => (newDeleteList.includes(index) ? false : isChecked)));
  } 

  useEffect(() => {
    if (deleteList.length > 0) {
      setTodos(prevTodos => prevTodos.filter((_, index) => !deleteList.includes(index)));
    }
  }, [deleteList]);
 
  return ( 
    <> 
      <h1>TodoList</h1> 
      <TodoInput onSave={addTodo} /> 
      <TodoList  
        task={todos[editingIndex]}
        todos={todos}  
        onSave={updateTodo}  
        onDelete={deleteTodo}  
        onCancel={cancelTodo}
        onCheck={setChecked}
        checkedList={checks}/> 
    </> 
  ); 
} 
 
export default App;