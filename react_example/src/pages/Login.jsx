import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/login_register.css';

function Login() {
  return (
    <div>
      <div className="container-fluid bg-black min-vh-100">
        <div className="row d-flex justify-content-center">
          <div className="col-12 text-center mb-5 mt-5 header-white p-1">
            <h1>Log In</h1>
          </div>
        </div>

        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-5 mb-4 bg-white p-5 rounded-3">
            <form action="{{ route('login') }}" method="POST">
              <div className="mb-3">
                <label for="email" className="form-label">Enter your email:</label><br/>
                  <input type="email" className="form-control" name="email" placeholder="Email" required /> <br />
              </div>

              <div className="mb-3">
                <label for="password" className="form-label">Enter your password:</label> <br />
                <input type="password" className="form-control" name="password" placeholder="Password" required /> <br />
              </div>

              <div className="d-flex justify-content-center">
                <button type="submit" className="btn club-btn w-50 login-btn">Log In</button>
              </div>
            </form>
          </div>
          <div className="mb-3 text-center">
            <p><a href="/register" className="link-primary">Don't have an account? Register here</a></p>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Login;