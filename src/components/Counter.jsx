import React, {useState} from 'react'; 
 
function Counter({onClick}){ 
    return( 
        <> 
            <button onClick={onClick}> 
                Add 
            </button> 
        </> 
    ) 
} 
export default Counter;