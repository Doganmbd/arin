import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="row">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{props.titleAll}</h5>
              <p className="card-text">
               {props.textAll}
              </p>
              
              
            </div>
          </div>
        </div>
    </div>
    </>
  );
};


export default Card ;
