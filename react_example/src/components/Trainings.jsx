import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/homepage_style.css';
import TrainingPlanCard from './TrainingPlanCard';

const trainingplans = [
  {
    source: '/images/training/example1.jpeg',
    title: 'Beginner Workout',
    description: 'Sample description of the Training plan according to the selection',
    ident: 'beginner',
  },
  {
    source: '/images/training/example2.jpeg',
    title: 'Intermediate Workout',
    description: 'Sample description of the Training plan according to the selection',
    ident: 'intermediate',
  },
  {
    source: '/images/training/example1.jpeg',
    title: 'Weight Loss Workout',
    description: 'Sample description of the Training plan according to the selection',
    ident: 'weightloss',
  },
  {
    source: '/images/training/example2.jpeg',
    title: 'Weight Gain Workout',
    description: 'Sample description of the Training plan according to the selection',
    ident: 'weightgain',
  },
];

function Trainings() {
  return (
      <div className="trainingplan-container container-lg p-4">
          <div className="row row-cols-2 justify-content-center gap-4">
              {trainingplans.map((trainingplan) => (
                  <TrainingPlanCard
                      key={trainingplan.ident}
                      source={trainingplan.source}
                      title={trainingplan.title}
                      description={trainingplan.description}
                      ident={trainingplan.ident}
                  />
              ))}
          </div>
      </div>
  );
}

export default Trainings;