import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../styles/homepage_style.css'; 

function Pricing(){
  return(
    <section className="subscription" id="subscription">
        <div className="col-12 text-center mb-5 mt-5 p-1">
            <h1>choose your pricing plan</h1>
        </div>
        <div className="container text-center">
            <div className="row">
                <div className="col-xl-4 col-md-6 col-sm-12 mb-5 mt-2">
                    <div className="card shadow-lg card-bronze">
                        <div className="card-header">
                            <h2>Bronze</h2>
                            <p>Simple guidance to start</p>
                        </div>
                        <div className="card-body">
                            <div className="price">0€<small className="text-muted">/mo</small></div>
                            <ul className="list-unstyled mt-4 mb-4 benefits">
                                <li className="mb-2 mt-2">One essential fitness plan</li>
                                <li className="mb-2 mt-2">One essential nutrition plan</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6 col-sm-12 mb-5 mt-2">
                    <div className="card shadow-lg card-silver">
                        <div className="card-header">
                            <h2>Silver</h2>
                            <p>More variety and flexibility</p>
                        </div>
                        <div className="card-body">
                            <div className="price">19€<small className="text-muted">/mo</small></div>
                            <ul className="list-unstyled mt-4 mb-4 benefits">
                                <li className="mb-2 mt-2">Unlimited fitness plans</li>
                                <li className="mb-2 mt-2">Unlimited nutrition plans</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6 col-sm-12 mb-5 mt-2">
                    <div className="card shadow-lg card-gold">
                        <div className="card-header">
                            <h2>Gold</h2>
                            <p>Fully personalized experience</p>
                        </div>
                        <div className="card-body">
                            <div className="price">29€<small className="text-muted">/mo</small></div>
                            <ul className="list-unstyled mt-4 mb-4 benefits">
                                <li className="mb-2 mt-2">Direct chat with trainers</li>
                                <li className="mb-2 mt-2">Unlimited fitness plans</li>
                                <li className="mb-2 mt-2">Unlimited nutrition plans</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center mb-5">
                <a href="/register" className="btn club-btn readmore-btn mt-4 w-50">Subscribe now</a>
            </div>
        </div>
    </section>  
  );
}

export default Pricing;