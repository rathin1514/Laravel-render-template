import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/checkout.css';

function Cart() {
  return (
    <div>
      <div className="row g-5">
        <div className="col-md-5 col-lg-4 order-md-last">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="cart-title">Your Cart</span>
            <span className="badge cart-badge">0</span>
          </h4>
          <p className="empty-cart-message">Your cart is currently empty.</p>
        </div>
      </div>
    </div>
  );
}

export default Cart;
