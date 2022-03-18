import React from "react";
import PropTypes from 'prop-types';

const Cards = (Card) => {
  return (
    
      <div className="card w-100">
        <img src={Card.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{Card.title}</h5>
          <p className="card-text">
           {Card.body}
          </p>
          <p className="card-text">
            <small className="text-muted">Last updated 1 mins ago</small>
          </p>
        </div>
      </div>
    
  );
};

Cards.defaultProps = {
    body : "buradaki yazıyı sildim ve default değer ekledim"
}

Cards.propTypes = {
    title : PropTypes.string
   /*  title : PropTypes.string.isRequired */
}

export default Cards;