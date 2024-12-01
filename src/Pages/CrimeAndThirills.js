import React from 'react'
import Header from '../Compnents/Header';
import Story from '../Compnents/Story';
import Footer from '../Compnents/Footer';
import a from './images/C&T1.jpg';
import b from './images/C&T2.jpg';
import c from './images/C&T3.jpg';
import d from './images/C&T4.jpg';
import e from './images/C&T5.jpg';


const booksData = [
  { name: "Murder on the morient",price: "100Rs", image: a},
  { name: "Verity",price: "200Rs",image: b },
  { name: "Gillian Flynn", price: "300Rs",image: c },
  { name: "The Silent Patient",price: "500Rs", image: d },
  { name: "The HouseMaid",price: "400Rs", image: e },
];


function CrimeAndThirills() {
  return (
    <div class="Main">
    <Header/>
    <Story heading="CrimeAndThirills" books={booksData} />
      <Footer/>
      </div>
  )
}

export default CrimeAndThirills