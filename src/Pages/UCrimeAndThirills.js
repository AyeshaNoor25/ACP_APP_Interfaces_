import React from 'react'
import Header from '../Compnents/Header';
import Story from '../Compnents/Story';
import Footer from '../Compnents/Footer';
import a from './images/UC&T1.jpg';
import b from './images/UC&T2.jpg';
import c from './images/UC&T3.jpg';
import d from './images/UC&T4.jpg';
import e from './images/UC&T5.jpg';


const booksData = [
  { name: "شیش محل", price: "100Rs", image: a },
  { name: "میں ایک جاسوس تھا", price: "100Rs", image: b },
  { name: "جرم و سزا",price: "300Rs", image: c },
  { name: "2 جرم و سزا",price: "100Rs", image: d },
  { name: "سرد کھائی",price: "200Rs", image: e },
];


function CrimeAndThirills() {
  return (
    <div class="Main">
    <Header/>
    <Story heading="Urdu CrimeAndThirills" books={booksData} />
      <Footer/>
      </div>
  )
}

export default CrimeAndThirills