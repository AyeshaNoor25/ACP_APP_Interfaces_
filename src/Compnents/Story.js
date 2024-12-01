import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch} from '@fortawesome/free-solid-svg-icons';
import './Story.css';

function Story({ heading, books }) {
  const handleAddToCart = () => {
    alert("Added to cart!");
  };

  const handleBuyNow = () => {
    alert("Proceeding to checkout!");
  };

  return (
    <div className="section-container">
      <div className="search-bar-container">
        <input type="text" placeholder="Book, Category, Author" className="search-bar" />
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
      </div>
      <h2>{heading}</h2>
      <div className="image-scroll">
        {books.map((book, index) => (
          <div className="image-item" key={index}>
            <img src={book.image} alt={book.name} />
            <h3>{book.name}</h3>
            <h3>{book.price}</h3>
            <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
            <button className="buy-now" onClick={handleBuyNow}>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Story;
