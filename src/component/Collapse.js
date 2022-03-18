import React from "react";



const Collapse = (collapse) => {
    console.log(collapse)
    console.log(collapse.children)
  return (
    <div>
      <p>
        <button
          className="btn btn-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={"#".concat(collapse.control)}
          aria-expanded="false"
          aria-controls={collapse.control}
        >
         {collapse.children.props.text}
        </button>
      </p>
      <div style={{minheight: "120px"}}>
        <div className="collapse collapse-horizontal" id={collapse.control}>
          <div className="card card-body" style={{width:"300px" }}>
          {collapse.children}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Collapse ;