import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/checkout.css';
import Cart from '../components/Cart';
import CheckoutForm from '../components/CheckoutForm';
import Payment from '../components/Payment';

function Checkout() {
  return (
    <div className="checkout-page">
      <div className="container container-checkout py-5">
        <div className="text-center">
          <h2 className="checkout-title">Checkout</h2>
          <p className="lead">Complete your purchase by providing the required details below.</p>
        </div>

        <Cart />  

        <CheckoutForm />  

        <Payment />  

        <div className="mt-4">
          <button className="w-100 btn btn-primary btn-lg" type="submit">
            Continue to checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
