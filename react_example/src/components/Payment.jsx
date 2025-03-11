import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/checkout.css';

function Payment() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

  const handlePaymentMethodChange = (event) => {
    setSelectedPaymentMethod(event.target.value);
  };

  return (
    <div>
      <h4 className="mb-3">Payment</h4>

      <div className="my-3">
        <div className="form-check">
          <input
            id="credit"
            name="paymentMethod"
            type="radio"
            className="form-check-input"
            value="credit"
            checked={selectedPaymentMethod === 'credit'}
            onChange={handlePaymentMethodChange}
            required
          />
          <label className="form-check-label" htmlFor="credit">
            Credit card
          </label>
        </div>
        <div className="form-check">
          <input
            id="debit"
            name="paymentMethod"
            type="radio"
            className="form-check-input"
            value="debit"
            checked={selectedPaymentMethod === 'debit'}
            onChange={handlePaymentMethodChange}
            required
          />
          <label className="form-check-label" htmlFor="debit">
            Debit card
          </label>
        </div>
        <div className="form-check">
          <input
            id="paypal"
            name="paymentMethod"
            type="radio"
            className="form-check-input"
            value="paypal"
            checked={selectedPaymentMethod === 'paypal'}
            onChange={handlePaymentMethodChange}
            required
          />
          <label className="form-check-label" htmlFor="paypal">
            PayPal
          </label>
        </div>
      </div>

      {selectedPaymentMethod === 'credit' || selectedPaymentMethod === 'debit' ? (
        <>
          <div className="row gy-3">
            <div className="col-md-6">
              <label htmlFor="cc-name" className="form-label">
                Name on card
              </label>
              <input
                type="text"
                className="form-control"
                id="cc-name"
                required
              />
              <div className="invalid-feedback">Name on card is required</div>
            </div>

            <div className="col-md-6">
              <label htmlFor="cc-number" className="form-label">
                Card number
              </label>
              <input
                type="text"
                className="form-control"
                id="cc-number"
                required
              />
              <div className="invalid-feedback">Card number is required</div>
            </div>

            <div className="col-md-3">
              <label htmlFor="cc-expiration" className="form-label">
                Expiration
              </label>
              <input
                type="text"
                className="form-control"
                id="cc-expiration"
                required
              />
              <div className="invalid-feedback">Expiration date required</div>
            </div>

            <div className="col-md-3">
              <label htmlFor="cc-cvv" className="form-label">
                CVV
              </label>
              <input
                type="text"
                className="form-control"
                id="cc-cvv"
                required
              />
              <div className="invalid-feedback">Security code required</div>
            </div>
          </div>
          <hr className="my-4" />
        </>
      ) : null}

      {selectedPaymentMethod === 'paypal' ? (
        <div className="paypal-info">
          <p>You'll be redirected to PayPal to complete your payment.</p>
        </div>
      ) : null}
    </div>
  );
}

export default Payment;
