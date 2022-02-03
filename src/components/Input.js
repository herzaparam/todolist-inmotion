import React from 'react';
import '../styles/Input.scss'
import searchicon from '../assets/icons8-search.svg';

function Input({placeholder}) {
  return (
    <div className="group-input">
      <img src={searchicon} alt="" />
      <input type="text" placeholder={placeholder}/>
    </div>
  );
}

export default Input;
