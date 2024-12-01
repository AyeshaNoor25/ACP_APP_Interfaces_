import React from 'react'
import Header from '../Compnents/Header';
import Story from '../Compnents/Story';
import Footer from '../Compnents/Footer';
import a from './images/L1.jpg';
import b from './images/L2.jpg';
import c from './images/L3.jpg';
import d from './images/L4.jpg';
import e from './images/L5.jpg';


const booksData = [
  { name: "Middel March",price: "200Rs", image: a },
  { name: "The Trial",price: "300Rs", image: b },
  { name: "Jane Eyre",price: "400Rs", image: c },
  { name: "Littel Women",price: "200Rs", image: d },
  { name: "Anna Karenina",price: "100Rs", image: e },
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