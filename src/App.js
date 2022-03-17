// bütün componentlerimizi bu app.js componenti altında birleştirip ilerleyecez.

import React from 'react';
import './App.css';
import Card from "./component/Card"



function App() {   // fonksiyondan bir component oluşturdum.
  return (
    // JSX yapısı.
    <div >
      <Card titleAll = "Bilal " textAll ="çalışmaktan vazgeçme"/>
      <Card titleAll = "Ali " textAll ="her zaman çalış"/>
      <Card titleAll = "Ömer " textAll ="pes etme" />
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
