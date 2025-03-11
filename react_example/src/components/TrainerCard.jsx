import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/homepage_style.css';

function TrainerCard({ source, name, description, ident, title, content }) {
  return (
      <div className="col-xl-3 col-md-6 mb-5 d-flex flex-column align-items-center">
          <div className="training bg-black rounded cr p-4 text-center d-flex flex-column align-items-center w-100 h-100">
              <img src={source} alt={`Trainer ${name}`} className="img-fluid mb-3 mt-2 rounded-circle trainer-foto" />
              <h2 className="text-white mb-3">{name}</h2>
              <p className="text-white mb-3">{description}</p>
              <button type="button" className="btn club-btn readmore-tr-btn align-items-center w-100 mt-auto" data-bs-toggle="modal" data-bs-target={`#${ident}`}>
                  Learn more
              </button>
              <div className="modal fade" id={ident} tabIndex="-1" aria-hidden="true">
                  <div className="modal-dialog">
                      <div className="modal-content">
                          <div className="modal-header">
                              <h5 className="modal-title">{title}</h5>
                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div className="modal-body">{content}</div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default TrainerCard;
