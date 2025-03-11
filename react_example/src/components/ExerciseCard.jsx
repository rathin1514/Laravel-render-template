import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/trainingplan.css';

function ExerciseCard({ source, name, url, description, ident }) {
    return (
        <div className="card border-0" style={{ width: "100%" }}>
            <div className="d-flex align-items-center">
                <a href={url}>
                <img src={source} className="me-1 exercise-img" alt="..." style={{ width: "12rem", height: "7rem" }} />
                </a>
            <div className="card-body text-start d-inline">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
            </div>
            </div>
        </div>
    );
}

export default ExerciseCard;