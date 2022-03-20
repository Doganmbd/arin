import React from "react";

/* 

className Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
} 

*/

/* Burada bootstrap in collapse özelliklerini silecem yani butona bastığımda açıp kapama işlemini silip bunu artık react ile yapmış olacam */

class CollapseNine extends React.Component {

  constructor() {
    super();
    this.state = {
      showContent : true
    }
  }

  showMore = () => {
    this.setState({showContent : !this.state.showContent})
  }


  componentDidMount() {
    console.log("component oluşturuldu.")
  }

  componentDidUpdate() {
    console.log("component güncellendi.");
  }



  render() {
    return (
      <>
        <p>
          <button
            className="btn btn-primary w-75" onClick={this.showMore}
            
          >
            {/* {this.props.children.props.title} */}
            {React.Children.map(this.props.children ,child =>child.props.title  )  }
          </button>
        </p>
        {/* eğer showContent im doğru ise göster değilse gösterme. */}
        {this.state.showContent ? (
        <div style={{minheight: "120px"}}>
          <div className="collapse collapse-horizontal show" >
            <div className="card card-body" style={{width: "300px"}}>
              {/* {this.props.children} */}
              {React.Children.map(this.props.children , card =>card)}
            </div>
          </div>
        </div>
        ) : null}
      </>
    );
  }
}
export default CollapseNine;
