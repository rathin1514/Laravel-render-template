import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/homepage_style.css';

function Banner() {
  return (
    <section className="banner">
      <div className="container-fluid h-100">
        <div className="row h-100">
          <div className="col-md-6 d-flex d-md-block"></div>
          <div className="col-12 col-md-6 d-flex flex-column justify-content-between align-items-center align-items-md-end">
            <div className="d-flex flex-column justify-content-center align-items-center flex-grow-1 w-100">
              <p className="text-banner text-center header-white slogan">Welcome to the club,<br /> <span
                className="buddy">Buddy</span></p>
            </div>
            <div className="d-flex flex-column flex-md-row gap-3 mb-4 w-100 justify-content-center justify-content-md-end">
              <a href="/register" className="btn club-btn w-100 signin-btn">Become a member</a>
              <a href="/login" className="btn club-btn w-100 login-btn">Log In</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;