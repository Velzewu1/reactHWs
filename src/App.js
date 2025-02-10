import './App.css';
import { useState } from 'react';
import Counter from './components/Counter' 

function App() {
  const [clickCount, setclickCount] = useState(0) 

  function handleClick(){
    return setclickCount(clickCount + 1);
  }

  return (
    <>
      <Counter onClick={handleClick}/>
      <h1>{clickCount}</h1>
    </>
  );
}

export default App;
