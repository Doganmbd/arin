import React from "react";


const CardNine = (Card) => {
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



export default CardNine;