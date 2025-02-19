import React, {useState} from 'react'; 

function UserInfo(props){
    return (
      <>
        <p>Привет, меня зовут {props.name}, мне {props.age} лет</p>
      </>
    )
  }
export default UserInfo;