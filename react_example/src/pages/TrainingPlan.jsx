import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/user_profile.css';
import Exercises from '../components/Exercises';

function TrainingPlan() {
  return (
    <div className="dashboard-container">
      <Header />
      <div className="main-content">
        <Sidebar />
        <Exercises />
      </div>
      <Footer />
    </div>
  );
}

export default TrainingPlan;