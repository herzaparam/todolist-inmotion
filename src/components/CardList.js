import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/CardList.scss';

function CardList({ id, title, checked, status, onClick, act }) {
  const firstCharacterUppercase = (_status) => {
    return status?.charAt(0).toUpperCase() + status.slice(1);
  };
  const sliceLongString = (_text) => {
    if(_text.length > 28) {
      const newText = _text.substring(0, 28) + '. . .'
      return newText;
    }
    return _text;
  };

  return (
    <div className="card">
      <div className="check-input">
        <input
          type="checkbox"
          id={`${act}${id}`}
          checked={checked}
          onClick={() => {
            onClick(id - 1, act);
          }}
        />
        <label htmlFor={`${act}${id}`} />
      </div>
      <p className="card-title">{sliceLongString(title)}</p>
      <div className="card-right">
        <div className={`status ${status}`}>
          <p>{firstCharacterUppercase(status)}</p>
        </div>
      </div>
    </div>
  );
}

CardList.propTypes = {
  status: PropTypes.string,
};
CardList.defaultProps = {
  status: 'waiting',
};

export default CardList;
