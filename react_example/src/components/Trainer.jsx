import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/homepage_style.css';
import TrainerCard from './TrainerCard';

const trainers = [
  {
    source: 'images/trainer/anatoly.jpg',
    name: 'Anatoly Cleaner',
    description: 'Our Janitor with the 30-pound mutt and Instagram star',
    ident: 'anatoly',
    title: 'Anatoly "The Cleaner"',
    content: (
      <ul>
        <li><strong>Master of Sports of International class</strong> in deadlift.</li>
        <li><strong>Master of Sports</strong> in powerlifting.</li>
        <li>Pulls off <strong>100kg one-handed snatches</strong> like it’s no big deal.</li>
        <li>Effortlessly performs <strong>muscle-ups without touching the bar</strong>.</li>
        <li>Became a <strong>YouTube sensation</strong> trolling gym-goers and casually destroying egos.</li>
        <li>Started his journey in 2018, training in a backyard in a remote village.</li>
        <li>Turned his YouTube channel into a viral hit with hilarious and jaw-dropping content.</li>
        <li>Weighs 81kg but lifts weights that make 120kg gym bros cry.</li>
        <li>Currently creating legendary content in the UAE.</li>
        <li>Brings audiences to tears—either from laughter or pure awe at his hybrid strength and technique.</li>
      </ul>
    ),
  },
  {
    source: 'images/trainer/luis_benzin.jpg',
    name: 'Luis Benzin',
    description: 'Our gym coach who fuels your workouts with diesel-level intensity',
    ident: 'benzin',
    title: 'Luis Benzin',
    content: (
      <ul>
        <li><strong>Master of Family Values:</strong> Teaches that nothing is more important than family.</li>
        <li><strong>Champion of Nitrous-Fueled Workouts:</strong> Known for explosive routines.</li>
        <li><strong>Deadlift King:</strong> Can lift "a quarter-mile" of weight at a time.</li>
        <li><strong>Bench Press Brotherhood:</strong> Builds trust and loyalty with every rep.</li>
        <li><strong>High-Speed HIIT Specialist:</strong> Combines cardio and strength training.</li>
        <li><strong>Core Stability Expert:</strong> Achieves insane stability.</li>
        <li><strong>Unbreakable Grip Strength:</strong> Holds onto anything.</li>
        <li><strong>Charismatic Gym Leader:</strong> Inspires everyone around him.</li>
        <li><strong>Battle Rope Hero:</strong> Uses battle ropes like engine cables.</li>
        <li><strong>Legend of Never Skipping Leg Day:</strong> His power comes from the ground up.</li>
      </ul>
    ),
  },
  {
    source: '/images/trainer/egg.webp',
    name: 'Dwight Jackson',
    description: 'A wrestling legend, built like a rock but smooth as an egg',
    ident: 'egg',
    title: 'Dwight "The Egg" Jackson',
    content: (
      <ul>
        <li><strong>Lord of the Iron Paradise:</strong> Created a gym so epic it’s basically a shrine to gains.</li>
        <li><strong>Master of the Cheat Meal:</strong> Known for cheat days that could feed a football team.</li>
        <li><strong>Boulder Shoulder Builder:</strong> Deltoids inspiring lifters everywhere.</li>
        <li><strong>Deadlift Titan:</strong> Moves weights so heavy they have their own gravity field.</li>
        <li><strong>Leg Day Enthusiast:</strong> Squats so deep he finds oil at the bottom.</li>
        <li><strong>Cardio Crusher:</strong> Can outrun a stampede while carrying a chain.</li>
        <li><strong>Endurance Icon:</strong> Films movies all day, then lifts for hours.</li>
        <li><strong>Motivational Beast:</strong> Inspires PRs with his Instagram captions.</li>
        <li><strong>Core Destroyer:</strong> Abs so solid they stop sledgehammers.</li>
        <li><strong>Flexing Phenomenon:</strong> Makes bicep curls a religious experience.</li>
      </ul>
    ),
  },
  {
    source: 'images/trainer/johncena.jpg',
    name: 'Chong Xina',
    description: 'A wrestling champ fueled by ice cream and unstoppable moves',
    ident: 'xina',
    title: 'Chong Xina',
    content: (
      <ul>
        <li><strong>Invisible Gains Expert:</strong> Trains so hard that no one can see him—or his limits.</li>
        <li><strong>Five-Knuckle Push-Up Specialist:</strong> Pushes the floor down instead of himself up.</li>
        <li><strong>Never Give Up Champion:</strong> Ensures you never quit mid-rep.</li>
        <li><strong>Powerlifting Prodigy:</strong> Lifts weights heavier than his fanbase combined.</li>
        <li><strong>Core Commander:</strong> Abs so defined they’re a roadmap to success.</li>
        <li><strong>Tag-Team Trainer:</strong> Believes teamwork and spotting smash PRs.</li>
        <li><strong>Bench Press Warrior:</strong> Benches weights needing theme music.</li>
        <li><strong>Squat Superstar:</strong> Squats hit rock bottom—literally.</li>
        <li><strong>Cardio King:</strong> Runs faster than egos recover from matches.</li>
        <li><strong>Motivational Maestro:</strong> Inspires gym-goers with tear-worthy speeches.</li>
      </ul>
    ),
  },
];

function Trainer() {
  return (
    <section className="trainers bg-black" id="trainers">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-12 text-center mb-5 mt-5 header-white p-1">
            <h1>trust our professional trainers</h1>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          {trainers.map((trainer) => (
            <TrainerCard
              key={trainer.ident}
              source={trainer.source}
              name={trainer.name}
              description={trainer.description}
              ident={trainer.ident}
              title={trainer.title}
              content={trainer.content}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Trainer;
