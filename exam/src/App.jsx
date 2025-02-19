import './App.css';
import { useState } from 'react';
import Counter from './components/Counter' 
import UserInfo from './components/UserInfo' 
import Timer from './components/Timer' 
import DataFetcher from './components/DataFetcher' 

function App() {
  const [clickCount, setclickCount] = useState(0);

  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const [isTimer, setIsTimer] = useState(false);

  function handleClick(){
    return setclickCount(clickCount + 1);
  }
  
  function handleName(event){
    return setName(event.target.value);
  }
  function handleAge(event){
    return setAge(event.target.value);
  }

  function handleTimer(){
    return setIsTimer(prevState => !prevState);
  }

  return (
    <>
      <Counter onClick={handleClick}/>
      <h1>{clickCount}</h1>

      <hr/>

      <form>
        <h1>Name:</h1>
        <input type="text" value={name} onChange={handleName}></input>
        <h1>Age:</h1>
        <input type='number' value={age} onChange={handleAge}></input>
      </form>

      <UserInfo name={name} age={age}></UserInfo>

      <hr/>

      <button onClick={handleTimer}>Toggle timer</button>

      {isTimer && <Timer />}

      <hr />

      <DataFetcher/>
    </>
  );
}

export default App;
