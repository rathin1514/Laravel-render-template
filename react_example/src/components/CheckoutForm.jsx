import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/checkout.css';

function CheckoutForm() {
  return (
    <div className="col-md-7 col-lg-8">
      <h4 className="mb-3">Billing Address</h4>
      <div className="row g-3">
        <div className="col-sm-6">
          <label htmlFor="firstName" className="form-label">First name</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            required
          />
          <div className="invalid-feedback">Valid first name is required.</div>
        </div>

        <div className="col-sm-6">
          <label htmlFor="lastName" className="form-label">Last name</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            required
          />
          <div className="invalid-feedback">Valid last name is required.</div>
        </div>

        <div className="col-12">
          <label htmlFor="username" className="form-label">Username</label>
          <div className="input-group has-validation">
            <span className="input-group-text">@</span>
            <input
              type="text"
              className="form-control"
              id="username"
              required
            />
            <div className="invalid-feedback">Your username is required.</div>
          </div>
        </div>

        <div className="col-12">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="example@hof-university.de"
          />
          <div className="invalid-feedback">
            Please enter a valid email address for shipping updates.
          </div>
        </div>

        <div className="col-12">
          <label htmlFor="address" className="form-label">Address</label>
          <input
            type="text"
            className="form-control"
            id="address"
            placeholder="Alfons-Goppel-Platz 1"
            required
          />
          <div className="invalid-feedback">Please enter your shipping address.</div>
        </div>

        <div className="col-md-5">
          <label htmlFor="country" className="form-label">Country</label>
          <input
            type="text"
            className="form-control"
            id="country"
            placeholder="Enter your country"
            required
          />
          <div className="invalid-feedback">Please enter a valid country.</div>
        </div>

        <div className="col-md-4">
          <label htmlFor="city" className="form-label">City</label>
          <input
            type="text"
            className="form-control"
            id="city"
            placeholder="Enter your city"
            required
          />
          <div className="invalid-feedback">Please provide a valid city.</div>
        </div>

        <div className="col-md-3">
          <label htmlFor="zip" className="form-label">Zip</label>
          <input
            type="text"
            className="form-control"
            id="zip"
            placeholder=""
            required
          />
          <div className="invalid-feedback">Zip code required.</div>
        </div>
      </div>

      <hr className="my-4" />
    </div>
  );
}

export default CheckoutForm;
