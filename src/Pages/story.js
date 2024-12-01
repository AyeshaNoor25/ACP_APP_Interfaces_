import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Story.css";
import axios from "axios";

function Story({ heading, books }) {
  const userId = "javeria"; // Example user ID

  const handleBuyNow = () => { alert("Proceeding to checkout!"); };

  const handleAddToCart = async (book) => {
    try {
      const response = await axios.post("http://localhost:5000/api/cart/add-to-cart", {
        userId,
        product: {
          productId: book._id,  // Make sure you pass the MongoDB _id here
          name: book.name,
          price: book.price,
          image: book.image,
        },
      });
      alert(response.data.message);  // Display success message
    } catch (error) {
      console.error("Error adding to cart:", error.response?.data || error.message);
      alert("Failed to add to cart. Please try again.");
    }
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
            <button
              className="add-to-cart"
              onClick={() => handleBuyNow(book)} // Pass book data when clicked
            >
              Buy Now
            </button>
            <button
              className="add-to-cart"
              onClick={() => handleAddToCart(book)} // Pass book data when clicked
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Story;
