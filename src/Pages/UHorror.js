import React from 'react'
import Header from '../Compnents/Header';
import Story from '../Compnents/Story';
import Footer from '../Compnents/Footer';
import a from './images/uh1.jpg';
import b from './images/uh2.jpg';
import c from './images/uh3.jpg';
import d from './images/uh4.jpg';
import e from './images/uh5.jpg';

const booksData = [
  { name: "حریت کدا",price: "100Rs", image: a },
  { name: "پاگل خانہ",price: "200Rs", image: b },
  { name: "نظر خراب",price: "300Rs", image: c },
  { name: "سدیو باد",price: "100Rs", image: d },
  { name: "عرف",price: "100Rs", image: e },
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