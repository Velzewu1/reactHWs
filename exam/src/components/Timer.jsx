import React, {useState, useEffect} from 'react'; 

function Timer(){
    const [timeCount, setTimeCount] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimeCount(prevTimeCount => prevTimeCount + 1);
            }, 1000);
        return () => clearInterval(intervalId);
      }, [timeCount]);

    return (
      <>
        <h1>Timer: {timeCount}</h1>
      </>
    )
  }
export default Timer;