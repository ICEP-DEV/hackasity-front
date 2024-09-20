import React from 'react';
import { NavLink } from 'react-router-dom';
import './Dashboard.css'; // Make sure to create this CSS file for styling

function Dashboard() {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>Admin Dashboard</h2>
        <nav>
          <ul>
            <li>
              <NavLink to="/judges" className="sidebar-link">Judges</NavLink>
            </li>
            <li>
              <NavLink to="/results" className="sidebar-link">Results</NavLink>
            </li>
            <li>
              <NavLink to="/teams" className="sidebar-link">Add Team</NavLink>
            </li>
            <li>
              <NavLink to="/view" className="sidebar-link">View Teams</NavLink>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <section className="admin-info">
          <h3>About the Admin</h3>
          <p>
            As an administrator, you have the highest level of access and control over the system. 
            Your responsibilities include managing judges, overseeing results, adding new teams, and viewing team details. 
            You have the ability to perform administrative tasks to ensure the smooth operation of the platform.
          </p>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
