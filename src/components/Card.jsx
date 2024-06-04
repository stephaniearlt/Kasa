import React from "react";
import PropTypes from "prop-types";
import "../styles/css/style.css";
import { Link } from "react-router-dom";

const Card = ({ title, cover, id }) => {
  return (
    <Link className="card" to={`/location/${id}`}>
      <img src={cover} alt={title} className="card-cover" />
      <h2 className="card-title">{title}</h2>
    </Link>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
};

export default Card;
