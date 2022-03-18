import React from "react";

const Card = (prp) => {
  console.log(prp)
  
  return (
    <>
    
      <div className="card">
        <img src={prp.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{prp.text}</h5>
          <p className="card-text">{prp.body}</p>
          <p className="card-text"><small className="text-muted">{prp.message}</small></p>
        </div>
      </div>





    </>
  );
};


export default Card ;
