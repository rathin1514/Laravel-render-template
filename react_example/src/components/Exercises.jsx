import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/homepage_style.css';
import '../styles/trainingplan.css'
import ExerciseCard from './ExerciseCard';

const exercises = [
  {
    source: '/images/training/example1.jpeg',
    name: 'Exercise 1',
    video_url: 'https://youtube.com',
    description: 'Sample description of the Exercise according to the selection. Sample description of the Exercise according to the selection.',
    ident: 'ex_name',
  },
  {
    source: '/images/training/example2.jpeg',
    name: 'Exercise 2',
    video_url: 'https://youtube.com',
    description: 'Sample description of the Exercise according to the selection. Sample description of the Exercise according to the selection.',
    ident: 'ex_name',
  },
  {
    source: '/images/training/example1.jpeg',
    name: 'Exercise 3',
    video_url: 'https://youtube.com',
    description: 'Sample description of the Exercise according to the selection. Sample description of the Exercise according to the selection.',
    ident: 'ex_name',
  },
  {
    source: '/images/training/example2.jpeg',
    name: 'Exercise 4',
    video_url: 'https://youtube.com',
    description: 'Sample description of the Exercise according to the selection. Sample description of the Exercise according to the selection.',
    ident: 'ex_name',
  },
  {
    source: '/images/training/example2.jpeg',
    name: 'Exercise 5',
    video_url: 'https://youtube.com',
    description: 'Sample description of the Exercise according to the selection. Sample description of the Exercise according to the selection.',
    ident: 'ex_name',
  },
  {
    source: '/images/training/example1.jpeg',
    name: 'Exercise 6',
    video_url: 'https://youtube.com',
    description: 'Sample description of the Exercise according to the selection. Sample description of the Exercise according to the selection.',
    ident: 'ex_name',
  },
  {
    source: '/images/training/example2.jpeg',
    name: 'Exercise 7',
    video_url: 'https://youtube.com',
    description: 'Sample description of the Exercise according to the selection. Sample description of the Exercise according to the selection.',
    ident: 'ex_name',
  },
];

function Exercises() {
  return (
      <div className="trainingplan-container container-lg p-4">
        <div className="card p-3 border-0 exercise-card">
            <h2 className="header">Training Plan #</h2>
        <div className=" justify-content-center row-gap-2">
              {exercises.map((exercise) => (
                  <ExerciseCard
                      key={exercise.ident}
                      source={exercise.source}
                      name={exercise.name}
                      url={exercise.video_url}
                      description={exercise.description}
                      ident={exercise.ident}
                  />
              ))}
          </div>
        </div>
      </div>
  );
}

export default Exercises;