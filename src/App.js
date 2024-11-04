// src/App.js

import React, { useState } from 'react';
import CashOnDelivery from './components/CashOnDelivery';
import CardDetails from './components/CardDetails';

function App() {
  const [paymentMethod, setPaymentMethod] = useState('cod'); // Default is Cash on Delivery


  return (
    <div className="App" style={appStyles}>
      <h1>Payment Options</h1>
      <div style={buttonContainerStyles}>
        <button
          style={buttonStyles}
          onMouseEnter={(e) => e.target.style.backgroundColor = buttonHoverStyles.backgroundColor}
          onMouseLeave={(e) => e.target.style.backgroundColor = buttonStyles.backgroundColor}
          onClick={() => setPaymentMethod('cod')}
        >
          Cash on Delivery
        </button>
        <button
          style={buttonStyles}
          onMouseEnter={(e) => e.target.style.backgroundColor = buttonHoverStyles.backgroundColor}
          onMouseLeave={(e) => e.target.style.backgroundColor = buttonStyles.backgroundColor}
          onClick={() => setPaymentMethod('card')}
        >
          Credit/Debit Card
        </button>
      </div>

      {paymentMethod === 'cod' && <CashOnDelivery />}
      {paymentMethod === 'card' && <CardDetails />}
    </div>
  );
}

export default App;
