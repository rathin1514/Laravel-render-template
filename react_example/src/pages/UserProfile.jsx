import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import UserDashboard from '../components/UserDashboard';
import Footer from '../components/Footer';
import '../styles/user_profile.css';

function UserProfile() {
  return (
    <div className="dashboard-container">
      <Header />
      <div className="main-content">
        <Sidebar />
        <UserDashboard />
      </div>
      <Footer />
    </div>
  );
}

export default UserProfile;
