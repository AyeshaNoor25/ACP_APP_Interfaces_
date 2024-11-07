// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CheckoutForm from './components/CheckoutForm';
import CartPage from './components/CartPage';
import Header from './components/Header';
import PayPage from './components/paypage'; // Ensure this is correctly imported

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (index) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  return (
    <>
      <Header cartCount={cartItems.length} />
      <Routes>
        <Route path="/" element={<CheckoutForm addToCart={addToCart} />} />
        <Route path="/cart" element={<CartPage cartItems={cartItems} removeFromCart={removeFromCart} />} />
        <Route path="/pay" element={<PayPage cartItems={cartItems} removeFromCart={removeFromCart} />} />
      </Routes>
    </>
  );
};

export default App;
