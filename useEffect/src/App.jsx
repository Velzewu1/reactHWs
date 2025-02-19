import React, { useState, useEffect } from 'react';
import Children from './Children';
import './App.css';

const App = () => {
    const [state, setState] = useState(false);
    const [clickCount, setClickCount] = useState(0);
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    const onClickHandler = () => {
        setState((currentState) => !currentState);
    };

    const incrementClickCount = () => {
        setClickCount(clickCount + 1);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(timer); 
    }, []);

    return (
        <div className='App-container'>
            <button onClick={onClickHandler} className='switchBTN'>Switch</button>
            {state && <Children />}
            
            <div>
                <button onClick={incrementClickCount}>Кликни меня!</button>
                <p>Количество кликов: {clickCount}</p>
            </div>

            <div>
                <p>Текущее время: {time}</p>
            </div>
        </div>
    );
};

export default App;
