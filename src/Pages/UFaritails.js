import React from 'react'
import Header from '../Compnents/Header';
import Story from '../Compnents/Story';
import Footer from '../Compnents/Footer';
import a from './images/uf1.jpg';
import b from './images/uf2.jpg';
import c from './images/uf3.jpg';
import d from './images/uf4.jpg';
import e from './images/uf5.jpg';


const booksData = [
  { name: "پری کی ملت کی کہانی",price: "100Rs", image: a },
  { name: "شیر اور خرگوش",price: "200Rs", image: b },
  { name: "ملک کا پوشیدہ محل",price: "300Rs", image: c },
  { name: "سنہری کہانی",price: "100Rs", image: d },
  { name: "میری کہانی میری دنیا",price: "200Rs", image: e },
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