import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/login_register.css';

function Register() {
  return (
    <div>
      <div className="container-fluid bg-gray min-vh-100">
        <div className="row d-flex justify-content-center">
          <div className="col-12 text-center mb-5 mt-5 header-white p-1">
            <a href='/'><img src="/images/logo.png" alt="Partner Push Challenge"
              className="img-fluid mb-4 mt-2 rounded" width="200px" height="200px"/></a>
              <h1>Become our Member</h1>
          </div>
        </div>

        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-5 mb-4 bg-white p-5 rounded-3">
            <form action="{{ route('register') }}" method="POST">
              <div className="mb-3">
                <label for="name" className="form-label">Full Name:</label> <br />
                <input type="text" className="form-control" id="name" name="name" placeholder="Your name" required />
              </div>

              <div className="mb-3">
                <label for="email" className="form-label">Email:</label> <br/>
                  <input type="email" className="form-control" id="email" name="email" placeholder="email@example.com" required />
              </div>

              <div className="mb-3">
                <label for="password" className="form-label">Password:</label> <br />
                <input type="password" className="form-control" id="password" name="password" required />
              </div>

              <div className="mb-3">
                <label for="confirm_password" className="form-label">Confirm Password:</label> <br />
                <input type="password" className="form-control" id="confirm_password" name="password_confirmation" required />
              </div>


              <div className="mb-3">
                <label for="age" className="form-label">Your age:</label> <br />
                <input type="number" className="form-control" id="age" name="age" required />
              </div>

              <div className="mb-4">
                <label className="form-label">Gender:</label> <br />
                <input type="radio" className="m-2" name="gender" value="male" required /> Man
                <input type="radio" className="m-2" name="gender" value="female" required /> Woman
                <input type="radio" className="m-2" name="gender" value="other" required /> Other
              </div>

              <div className="mb-3">
                <label for="fitness_level" className="form-label"> I am...</label> <br />
                <select id="fitness_level" className="form-control" name="fitness_level" required>
                  <option value="beginner">Beginner</option>
                  <option value="pro">Intermediate</option>
                  <option value="pro">Profi</option>
                </select>
              </div>

              <div className="mb-3">
                <label for="weight" className="form-label">Weight (kg):</label> <br />
                <input type="number" className="form-control" id="weight" name="weight" placeholder="70" />
              </div>

              <div className="mb-3">
                <label for="height" className="form-label">Height (cm):</label> <br/>
                  <input type="number" className="form-control" id="height" name="height" placeholder="170" />
              </div>

              <div className="mb-3">
                <label for="subscription" className="form-label">Choose Subscription:</label>  <br />
                <select id="subscription" className="form-control" name="subscription_id" required>
                  <option value="1">Bronze Plan</option>
                  <option value="2">Silber Plan</option>
                  <option value="3">Gold Plan</option>
                </select>
              </div>

              <div className="d-flex justify-content-center">
                <button type="submit" className="btn club-btn w-50 login-btn">Join Club!</button>
              </div>
            </form>
          </div>
          <div className="mb-3 text-center">
            <p><a href="/login" className="link-primary">Already have an account? Log in here</a></p>
          </div>
        </div>
      </div>
    </div>

  );
}



export default Register;