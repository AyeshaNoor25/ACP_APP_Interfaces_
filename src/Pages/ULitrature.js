import React from 'react'
import Header from '../Compnents/Header';
import Story from '../Compnents/Story';
import Footer from '../Compnents/Footer';
import a from './images/ul1.jpg';
import b from './images/ul2.jpg';
import c from './images/ul3.jpg';
import d from './images/ul4.jpg';
import e from './images/ul5.jpg';


const booksData = [
  { name: "کلیات اقبال",price: "100Rs", image: a },
  { name: "غالب",price: "200Rs", image: b },
  { name: "شارح دیوان",price: "300Rs", image: c },
  { name: "کراچی میں اردو غزل یا نظم",price: "100Rs", image: d },
  { name: "آزاد نظم",price: "400Rs", image: e },
];

function Litrature() {
  return (
    <div class="Main">
    <Header/>
    <Story heading="Litrature" books={booksData} />
    <Footer/>
    </div>
    
  )
}

export default Litrature