import React from 'react';
import ReactDOM from 'react-dom';
/* import './index.css'; */

import App from './App';
import AppEight from "./8-ClassAndFunction/AppSekiz"
/* import Cardtwo from "./component/Cardtwo" */
/* import reportWebVitals from './reportWebVitals'; */

/* const Apptwo = () => {
  return (

  <>

    
<div class="card-group">

    <Cardtwo 
    title = "bilal"
    body="sen bu işi başarırsın"
    footer ="1 dk önce"
    image="https://picsum.photos/id/1035/600/500"
    />

    <Cardtwo 
      title = "ali"
      body="sana güvenim sonsuz merak etme"
      footer ="2 dk önce"
      image="https://picsum.photos/id/1042/600/500"
      />

    <Cardtwo 
      title = "ömer"
      body="en iyi olmak için çabalamalısın."
      footer ="3 dk önce"
      image="https://picsum.photos/id/1045/600/500"
      />

</div>
    
  
  </>  
  )
} */

// burada bulunan diğer dosyalar css vb. dosyalar buradaki index.js dosyasının tamamlayıcıları olarak düşünebiliriz . bana en temel olarak index.js dosyası lazım.

ReactDOM.render(    // oluşturduğum component ı sayfamızda görünmesini sağlar.reactDom.render
  <React.StrictMode>
    <App />     {/* app componentimi çağırıyorum . yani sayfamda neyi gösterecem */}
    <AppEight/>    {/* sekizinci konu */}
  </React.StrictMode>,
  document.getElementById('root')   /* oluşturduğum componenti nerede gösterecem.root index.html deki id olduğu için. */
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
/* reportWebVitals(); */
