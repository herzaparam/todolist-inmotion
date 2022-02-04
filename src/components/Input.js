import React from 'react';
import '../styles/Input.scss';
import searchicon from '../assets/icons8-search.svg';

function Input({ placeholder, _handleSearch }) {
  return (
    <div className="group-input">
      <img src={searchicon} alt="" />
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => {
          _handleSearch(e.target.value);
        }}
      />
    </div>
  );
}

export default Input;
