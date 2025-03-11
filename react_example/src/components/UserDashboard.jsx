import React, { useState } from 'react';
import '../styles/user_dashboard.css';

function UserDashboard() {
  const [userData] = useState({
    email: '',
    username: '',
    password_hash: '',
    registration_date: '',
    age: null,
    gender: '',
    fitness_level: '',
    weight: null,
    height: null,
    subscription: '',
  });

  return (
    <div className="dashboard">
      <div className="avatar"></div>
      <div className="subscription-info">
        <div className="subscription-title">Subscription: {userData.subscription}</div>
        <button className="change-button">Change Subscription</button>
      </div>
      <div className="details">
        <p><strong>Email:</strong> {userData.email}</p>
        <p><strong>Username:</strong> {userData.username}</p>
        <p><strong>Registration Date:</strong> {userData.registration_date}</p>
        <p><strong>Age:</strong> {userData.age}</p>
        <p><strong>Gender:</strong> {userData.gender}</p>
        <p><strong>Fitness Level:</strong> {userData.fitness_level}</p>
        <p><strong>Weight:</strong> {userData.weight} kg</p>
        <p><strong>Height:</strong> {userData.height} cm</p>
      </div>
    </div>
  );
}

export default UserDashboard;
