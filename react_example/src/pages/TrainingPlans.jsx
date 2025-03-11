import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Trainings from '../components/Trainings';
import Footer from '../components/Footer';
import '../styles/user_profile.css';

function TrainingPlans() {
  return (
    <div className="dashboard-container">
      <Header />
      <div className="main-content">
        <Sidebar />
        <Trainings />
      </div>
      <Footer />
    </div>
  );
}

export default TrainingPlans;