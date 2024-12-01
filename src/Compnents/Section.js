import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Section.css'; 
import b from './Crme&thills.jpeg';
import c from './faritail.jpeg';
import d from './fiction.jpeg';
import i from './horror.jpg';
import j from './Mystery.jpg';
import m from './litrature.jpg';

function Section() {
  return (
    <div className="section-container">
      <div className="search-bar-container">
        <input type="text" placeholder="Search by books" className="search-bar" />
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
      </div>
      <h2>English</h2>
      <div className="image-scroll">
        <Link to="/CrimeAndThirills"><img src={b} alt="Crime and Thrills" /></Link>
        <Link to="/Faritails"><img src={c} alt="Fairy Tales" /></Link>
        <Link to="/Firiction"><img src={d} alt="Fiction" /></Link>
        <Link to="/Horror"><img src={i} alt="Horror" /></Link>
        <Link to="/Mystery"><img src={j} alt="Mystery" /></Link>
        <Link to="/Litrature"><img src={m} alt="Litrature" /></Link>
      </div>
      {/* <hr /> */}
      <h2>Urdu</h2>
      <div className="image-scroll">
        <Link to="/UCrimeAndThirills"><img src={b} alt="UCrimeAndThirills.js" /></Link>
        <Link to="/UFaritails"><img src={c} alt="UFaritails" /></Link>
        <Link to="/UFiriction"><img src={d} alt="UFiction" /></Link>
        <Link to="/UHorror"><img src={i} alt="/UHorror" /></Link>
        <Link to="/UMystery"><img src={j} alt="UMystery" /></Link>
        <Link to="/ULitrature"><img src={m} alt="ULitrature" /></Link>
      </div>
    </div>
  );
}

export default Section;
