import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Results.css';

const Results = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/results');
        setTeams(response.data); // This assumes the data is already sorted
      } catch (error) {
        console.error('Error fetching results', error);
      }
    };

    fetchResults();
  }, []);

  return (
    <div className="results-container">
      <h1>Results</h1>
      <table>
        <thead>
          <tr>
            <th>Position</th>
            <th>Team Name</th>
            <th>Total Score</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, index) => (
            <tr key={index}>
              <td>{index + 1}</td> {/* Position from 1 to n */}
              <td>{team.team_name}</td>
              <td>{team.total_score}</td>
              <td>{team.comments}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Results;
