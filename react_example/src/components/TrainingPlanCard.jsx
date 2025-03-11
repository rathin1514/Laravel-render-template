import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/trainingplan.css';

function TrainingPlanCard({ source, title, description, ident }) {
    return (
        <div className="card p-3" style={{ width: "33rem" }}>
            <img src={source} className="card-img-top" alt="..." style={{ height: "25rem" }} />
            <div className="card-body text-center " style={{ height: "15rem" }}>
                <h5 className="card-title py-2">{title}</h5>
                <p className="card-text py-1">{description}</p>
                <a href="/profile/trainingplans/training" class="btn viewplan-btn py-2">View Plan</a>
            </div>
        </div>
    );
}

export default TrainingPlanCard;