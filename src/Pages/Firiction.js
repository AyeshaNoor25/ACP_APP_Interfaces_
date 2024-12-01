import React from 'react'
import Header from '../Compnents/Header';
import Story from '../Compnents/Story';
import Footer from '../Compnents/Footer';
import a from './images/friction1.jpg';
import b from './images/friction2.jpg';
import c from './images/friction3.jpg';
import d from './images/friction4.jpg';
import e from './images/friction5.jpg';


const booksData = [
  { name: "Liane Moriarty",price: "100Rs", image: a },
  { name: "The Hunge Game",price: "300Rs", image: b },
  { name: "The Book Thief",price: "400Rs", image: c },
  { name: "The Great Gatsby",price: "200Rs", image: d },
  { name: "Orwell 1984", image: e },
];

function Firiction() {
  return (
    <div class="Main">
    <Header/>
    <Story heading="Firiction" books={booksData} />
    <Footer/>
    </div>
    
  )
}

export default Firiction