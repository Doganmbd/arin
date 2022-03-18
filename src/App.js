// bütün componentlerimizi bu app.js componenti altında birleştirip ilerleyecez.

import React from 'react';
/* import './App.css'; */
import Card from "./component/Card"
import Collapse from "./component/Collapse"




function App() {   // fonksiyondan bir component oluşturdum.
  return (
    // JSX yapısı.

    <div className="card-group">
          
          <Collapse control = "collapseWidthExample1">

          <Card 

          image="https://picsum.photos/id/1/600/300"
          text="bilal"
          body = "elbette başarırsın"
          message="1 dk önce yorum yapıldı." 
          />
        </Collapse>

        <Collapse control = "collapseWidthExample2">
          <Card 
          image="https://picsum.photos/id/2/600/300"
          text="ömer"
          body = "sen bu işi halledersin"
          message="2 dk önce yorum yapıldı." />
        </Collapse>
    </div>
 
  );
} 

// yukarıda fonksiyon olarak yazdım ben bunu class şeklindede yazabilirim.

/* class App2 extends React.Component {
  render () {
    return (
      <div>
        <h1>benim soyadım </h1>
      </div>
    )
  }
}
 */
export default App ;
