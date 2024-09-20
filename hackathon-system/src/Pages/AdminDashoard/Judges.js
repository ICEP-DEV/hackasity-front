import React from 'react';
import "./Judges.css";

function Judges() {
  const judges = [
    {
      name: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      gender: 'Male',
      score: 95
    },
    {
      name: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@example.com',
      gender: 'Female',
      score: 88
    },
    {
      name: 'Alice',
      lastName: 'Johnson',
      email: 'alice.johnson@example.com',
      gender: 'Female',
      score: 92
    },
    {
      name: 'Bob',
      lastName: 'Brown',
      email: 'bob.brown@example.com',
      gender: 'Male',
      score: 90
    }
  ];

  return (
    <div className="container">
      <div className="center-table">
        <h2 className="judge-info-title">Judges Information</h2>
        <table className="styled-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Last Name</th>
              <th>Email Address</th>
              <th>Gender</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {judges.map((judge, index) => (
              <tr key={index}>
                <td>{judge.name}</td>
                <td>{judge.lastName}</td>
                <td>{judge.email}</td>
                <td>{judge.gender}</td>
                <td>{judge.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Judges;