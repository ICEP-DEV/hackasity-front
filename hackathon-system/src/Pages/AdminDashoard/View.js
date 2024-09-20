import React, { useState, useEffect } from 'react';
import './View.css'; // Optional for styling

function View() {
  const [teams, setTeams] = useState([]);

  // Fetch teams data from the backend API
  useEffect(() => {
    fetch('http://localhost:3001/api/teams')
      .then((response) => response.json())
      .then((data) => {
        setTeams(data);
      })
      .catch((error) => {
        console.error('Error fetching teams:', error);
      });
  }, []);
  

  return (
    <div className="view-container">
      <h1>Teams List</h1>
      <table className="teams-table">
        <thead>
          <tr>
            <th>Team ID</th>
            <th>Team Name</th>
            <th>Fisrt Name</th>
            <th>student Number</th>
            <th>Gender</th>
            <th>faculty</th>
            <th>Campus</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team) => (
            <tr key={team.id}>
              <td>{team.id}</td>
              <td>{team.team_name}</td>
              <td>{team.first_name}</td>
              <td>{team.last_name}</td>
              <td>{team.student_num}</td>
              <td>{team.gender}</td>
              <td>{team.faculty}</td>
              <td>{team.campus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default View;
