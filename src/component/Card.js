import React from "react";

const Card = (props) => {
  console.log(props)
  
  return (
    <>
    
      <div className="card">
        <img src={props.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.text}</h5>
          <p className="card-text">{props.body}</p>
          <p className="card-text"><small className="text-muted">{props.message}</small></p>
        </div>
      </div>





    </>
  );
};


export default Card ;
