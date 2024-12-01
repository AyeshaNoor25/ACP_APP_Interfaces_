import React from 'react'
import Header from '../Compnents/Header';
import Story from '../Compnents/Story';
import Footer from '../Compnents/Footer';
import a from './images/ufriction1.jpg';
import b from './images/ufriction2.jpg';
import c from './images/ufriction3.jpg';
import d from './images/ufriction4.jpg';
import e from './images/ufriction5.jpg';


const booksData = [
  { name: "روح یام",price: "100Rs", image: a },
  { name: "اب حیات",price: "200Rs", image: b },
  { name: "نمل",price: "300Rs", image: c },
  { name: "جنت کے پتے",price: "100Rs", image: d },
  { name: "پیر کامل",price: "100Rs", image: e },
];

function Firiction() {
  return (
    <div class="Main">
    <Header/>
    <Story heading="Fiction" books={booksData} />
    <Footer/>
    </div>
    
  )
}

export default Firiction