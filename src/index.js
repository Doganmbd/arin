import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/* import App2 from './App'; */
import App from './App';
import reportWebVitals from './reportWebVitals';



// burada bulunan diğer dosyalar css vb. dosyalar buradaki index.js dosyasının tamamlayıcıları olarak düşünebiliriz . bana en temel olarak index.js dosyası lazım.

ReactDOM.render(    // oluşturduğum component ı sayfamızda görünmesini sağlar.reactDom.render
  <React.StrictMode>
    <App />     {/* app componentimi çağırıyorum . yani sayfamda neyi gösterecem */}
    
  </React.StrictMode>,
  document.getElementById('root')   /* oluşturduğum componenti nerede gösterecem.root index.html deki id olduğu için. */
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
