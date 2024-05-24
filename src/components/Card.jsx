import React from 'react';
import PropTypes from 'prop-types';
import '../styles/css/style.css';

const Card = ({ title, cover }) => {
  return (
    <div className="card">
      <img src={cover} alt={title} className="card-cover" />
      <h2 className="card-title">{title}</h2>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
};

export default Card;