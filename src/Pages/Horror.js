import React from 'react'
import Header from '../Compnents/Header';
import Story from '../Compnents/Story';
import Footer from '../Compnents/Footer';
import a from './images/h1.jpg';
import b from './images/h2.jpg';
import c from './images/h3.jpg';
import d from './images/h4.jpg';
import e from './images/h5.jpg';

const booksData = [
  { name: "Sleep Tight",price: "200Rs", image: a },
  { name: "The Exorcist",price: "300Rs", image: b },
  { name: "Stephen King",price: "400Rs", image: c },
  { name: "Frankenstein",price: "200Rs", image: d },
  { name: "Shirley Jackson",price: "100Rs", image: e },
];
function Horror() {
  return (
    <div class="Main">
    <Header/>
    <Story heading="Horror" books={booksData} />
    <Footer/>
    </div>
    
  )
}
export default Horror