import React from 'react'
import Header from '../Compnents/Header';
import Story from '../Compnents/Story';
import Footer from '../Compnents/Footer';
import a from './images/f1.jpg';
import b from './images/f2.jpg';
import c from './images/f3.jpg';
import d from './images/f4.jpg';
import e from './images/f5.jpg';


const booksData = [
  { name: "Snow White",price: "100Rs", image: a },
  { name: "Rapunzel",price: "200Rs", image: b },
  { name: "Hansel and Gretel",price: "300Rs", image: c },
  { name: "Cinderella", price: "200Rs",image: d },
  { name: "Little Red Riding Hood", price: "100Rs",image: e },
];

function Faritails() {
  return (
    <div class="Main">
    <Header/>
    <Story heading="Faritails" books={booksData} />
    <Footer/>
    </div>
    
  )
}

export default Faritails