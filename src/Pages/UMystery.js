import React from 'react'
import Header from '../Compnents/Header';
import Story from '../Compnents/Story';
import Footer from '../Compnents/Footer';
import a from './images/um1.jpg';
import b from './images/um2.jpg';
import c from './images/um3.jpg';
import d from './images/um4.jpg';
import e from './images/um5.jpg';


const booksData = [
  { name: "دستک",price: "100Rs", image: a },
  { name: "شر کا سہارا",price: "300Rs", image: b },
  { name: "30 گھنٹے",price: "100Rs", image: c },
  { name: "دولت کا جال",price: "300Rs", image: d },
  { name: "اجنبی لڑکی",price: "200Rs", image: e },
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