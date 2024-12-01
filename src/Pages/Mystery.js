import React from 'react'
import Header from '../Compnents/Header';
import Story from '../Compnents/Story';
import Footer from '../Compnents/Footer';
import a from './images/M1.jpg';
import b from './images/M2.jpg';
import c from './images/M3.jpg';
import d from './images/M4.jpg';
import e from './images/M5.jpg';


const booksData = [
  { name: "The Da Vinci Code",price: "100Rs", image: a },
  { name: "The God of Woods",price: "200Rs", image: b },
  { name: "The Girl on the Train",price: "300Rs", image: c },
  { name: "The Girl with Dragon Tattoo",price: "200Rs", image: d },
  { name: "Gillian Flynn",price: "100Rs", image: e },
];

function Mystery() {
  return (
    <div class="Main">
    <Header/>
    <Story heading="Mystery" books={booksData} />
    <Footer/>
    </div>
    
  )
}

export default Mystery