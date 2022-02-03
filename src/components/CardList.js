import React from 'react';
import PropTypes from 'prop-types';
import '../styles/CardList.scss';

function CardList({ id, title, checked, status }) {
  const firstCharacterUppercase = (_status) => {
    return status?.charAt(0).toUpperCase() + status.slice(1);
  };

  return (
    <div className="card">
      <div className="check-input">
        <input type="checkbox" id={id} />
        <label for={id} />
      </div>
      <p className="card-title">{title}</p>
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
