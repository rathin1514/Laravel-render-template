import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../styles/homepage_style.css'; 

function Header() {
  return (
    <header>
        <div className="container">
            <div className="container bg-gray">
                <div className="row align-items-center text-center text-md-start">
                    <div
                        className="col-12 col-md-4 d-flex justify-content-center mt-2 mb-2 justify-content-md-start mb-md-0">
                        <a href='/'><img src="/images/logo_big.png" alt="Club Logo" className="img-fluid club-logo" /></a>
                    </div>
                    <div
                        className="col-12 col-md-8 d-flex flex-column flex-md-row align-items-center align-items-md-end justify-content-center justify-content-md-end">
                        <a href="#trainings" className="btn head-btn mb-2 mb-md-0">Workouts</a>
                        <a href="#trainers" className="btn head-btn mx-md-2 mb-2 mb-md-0">Trainers</a>
                        <a href="#menu" className="btn head-btn mx-md-2 mb-2 mb-md-0">Recipes</a>
                        <a href="#subscription" className="btn head-btn mx-md-2 mb-2 mb-md-0">Pricing</a>
                    </div>
                </div>
            </div>
        </div>
    </header>
  );
}

export default Header;
