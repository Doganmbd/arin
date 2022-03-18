/* https://reactjs.org/docs/components-and-props.html */
//! Function and Class Components 

/*
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;


  class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

}  */

/* https://reactjs.org/docs/typechecking-with-proptypes.html */
//! default proptype
/* eğer bir değer yoksa ama ben birşeyler görünmesini istiyorsam en alta bunu yazacaksın.
Welcome.defaultProps = {
  name: 'Stranger'
};
 */

//! proptypes
/* burada amaç hangi değerde verilerin bize ulaşmasını istiyorsak o değeri yazarız ör:string
import PropTypes from 'prop-types'; ekliyoruz

Welcome.propTypes = {

  optionalArray: PropTypes.array,
  optionalBool: PropTypes.bool,
  optionalFunc: PropTypes.func,
  optionalNumber: PropTypes.number,
  optionalObject: PropTypes.object,
  optionalString: PropTypes.string,
  optionalSymbol: PropTypes.symbol,
}
*/

import React from "react" 
import Cards from "../8-ClassAndFunction/CardTwo"
import Collapses from "../8-ClassAndFunction/CollapseTwo"

// tüm componentları burada toplayıp parametrelerini verecem.

class AppEight extends React.Component {
    render() {
        return (
            
<div className="container">
    <div className="row">
        <div className="card-group w-100">
            <div className="col">
     
            
                <Collapses name="collapseWidthExamplee1">
                    <Cards title="React" body="Güzel ders" image="https://picsum.photos/id/1/200/300" />
                </Collapses>
                </div>
                <div className="col">
                <Collapses name="collapseWidthExamplee2">
                    <Cards title ="HTML"  image="https://picsum.photos/id/100/200/300"/>
                </Collapses>
                </div>
                <div className="col">
                <Collapses name="collapseWidthExamplee3">
                    <Cards  title="CSS" body="Şekil ders" image="https://picsum.photos/id/200/200/300"/>
                </Collapses>
                </div>
            
        </div>
    </div>
</div>
                            
        

        )
    }
}

export default AppEight