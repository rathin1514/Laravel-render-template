import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import '../styles/homepage_style.css';

function Workouts() {
  return (
    <section className="trainings bg-gray" id="trainings">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-12 text-center mb-5 mt-5 header-white p-1">
            <h1>50+ workout programs</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 mb-5">
            <div className="training bg-white rounded p-5 text-center">
              <img src="/images/training/example1.jpeg" alt="Power Ropes Blast"
                className="img-fluid mb-4 mt-2 rounded" />
                <h2 className="mb-2">Power Ropes Blast</h2>
                <p>Ignite your core and upper body strength with an intense battle ropes session. Feel the burn
                  as you push your endurance to new heights, gaining explosive power and stamina!</p>
                <button type="button" className="btn club-btn readmore-btn w-100" data-bs-toggle="modal"
                  data-bs-target="#powerRopes">
                  Learn more
                </button>
                <div className="modal fade" id="powerRopes" tabIndex="-1" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">Power Ropes Blast</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                          aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        <iframe width="100%" height="315"
                          src="https://www.youtube.com/embed/1gNMRV1GUFg" title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        <p>This beginner-friendly battle rope workout is designed to be performed with a
                          lightweight rope. After completing one round, additional iterations can be
                          added for a more intense session, allowing for a progressively challenging
                          workout experience.</p>
                        <p>Battle rope training provides numerous benefits, including enhanced
                          cardiovascular endurance, increased muscular strength, improved core
                          stability, and heightened calorie burn. It is a versatile and efficient
                          full-body workout that engages multiple muscle groups simultaneously while
                          improving coordination. Adaptable to various fitness levels, it offers a
                          comprehensive exercise regimen suitable for diverse fitness goals.</p>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
          <div className="col-12 col-md-6 mb-5">
            <div className="training bg-white rounded p-5 text-center">
              <img src="images/training/example2.jpeg" alt="Partner Push Challenge"
                className="img-fluid mb-4 mt-2 rounded" />
                <h2 className="mb-2">Partner Push Challenge</h2>
                <p>Team up for a dynamic full-body workout! Challenge each other’s strength, coordination, and
                  balance as you push through synchronized partner drills that build both muscle and teamwork!
                </p>
                <button type="button" className="btn club-btn readmore-btn w-100" data-bs-toggle="modal"
                  data-bs-target="#pushupChallenge">
                  Learn more
                </button>
                <div className="modal fade" id="pushupChallenge" tabIndex="-1" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">Partner Push Challenge</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                          aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        <iframe width="100%" height="315"
                          src="https://www.youtube.com/embed/Jf5_PJCFs-g" title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        <p>Transform your body in just 30 days with this ultimate push-up
                          challenge! The goal is to complete approximately <strong>170
                            push-ups per session</strong>, varying your movements to target
                          different muscle groups and prevent monotony. Here’s how to
                          structure your workout for maximum results:</p>
                        <ul>
                          <li><strong>Vary Your Arm Position</strong>: Mix it up with narrow,
                            wide, and staggered push-ups to engage your chest, shoulders,
                            and triceps differently.</li>
                          <li><strong>Incorporate Incline and Decline Push-Ups</strong>: Use a
                            bench, chair, or step to perform incline and decline variations,
                            targeting different angles of your chest.</li>
                          <li><strong>Add Pause Push-Ups</strong>: Lower yourself slowly, hold
                            at the bottom for a few seconds, and then push back up to
                            increase time under tension and build strength.</li>
                          <li><strong>Explosive Push-Ups</strong>: Add explosive push-ups,
                            like clap push-ups, to build power and burn out your chest and
                            triceps.</li>
                        </ul>
                        <p>Challenge yourself to complete this dynamic workout daily for 30 days
                          and see how your body transforms. Stay consistent, push your limits,
                          and enjoy the progress!</p>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Workouts;