import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/homepage_style.css'
import '../styles/sidebar.css'

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <i className="fas fa-brackets-curly"></i> Sidebar
      </div>
      <nav className="nav flex-column">
        <a href="/" className="nav-link active">
          <i className="fas fa-home"></i> Home
        </a>
        <a href="#" className="nav-link">
          <i className="fas fa-chart-pie"></i> Lorem
        </a>
        <a href="#" className="nav-link">
          <i className="fas fa-table"></i> Lorem
        </a>
        <a href="#" className="nav-link">
          <i className="fas fa-th"></i> Lorem
        </a>
        <a href="#" className="nav-link">
          <i className="fas fa-user"></i> Lorem
        </a>
      </nav>
    </div>
  );
}

export default Sidebar
