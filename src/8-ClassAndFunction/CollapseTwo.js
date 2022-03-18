import React from "react";

/* 

className Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
} 

*/

class Collapses extends React.Component {
  render() {
    return (
      <>
        <p>
          <button
            className="btn btn-primary w-75"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={"#".concat(this.props.name)}
            aria-expanded="false"
            aria-controls={this.props.name}
          >
            {this.props.children.props.title}
          </button>
        </p>
        <div style={{minheight: "120px"}}>
          <div className="collapse collapse-horizontal show" id={this.props.name}>
            <div className="card card-body" style={{width: "300px"}}>
              {this.props.children}    {/* kendi içinde bir props parametresi var. */}
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Collapses;
