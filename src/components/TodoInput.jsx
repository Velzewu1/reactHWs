import React, {useState} from 'react'; 
 
function TodoInput({onSave}){ 
    const [inputValue, setInputValue] = useState('') 
 
    function handleSave(){ 
        if(inputValue.trim()){ 
            onSave(inputValue); 
            setInputValue(''); 
        } 
 
    } 
    return( 
        <> 
            <input placeholder='Write your task' value={inputValue} type="text" onChange={((e) => setInputValue(e.target.value))}></input> 
            <button onClick={handleSave}> 
                Add 
            </button> 
        </> 
    ) 
} 
export default TodoInput;