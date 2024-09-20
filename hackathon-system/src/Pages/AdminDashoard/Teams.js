import React, { useState } from 'react';
import axios from 'axios';
import './Teams.css';

function Teams() {
  const [showSecondForm, setShowSecondForm] = useState(false);
  const [teamName, setTeamName] = useState("");
  const [teamMembers, setTeamMembers] = useState(0);
  const [membersData, setMembersData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSecondForm(true);
  };

  const handleSaveTeam = async (e) => {
    e.preventDefault();

    // Collect team members data
    const members = Array.from({ length: teamMembers }).map((_, index) => ({
      firstName: document.querySelector(`#member-firstname-${index}`).value,
      lastName: document.querySelector(`#member-lastname-${index}`).value,
      studentNumber: document.querySelector(`#member-studentnumber-${index}`).value,
      gender: document.querySelector(`#member-gender-${index}`).value,
      faculty: document.querySelector(`#member-faculty-${index}`).value,
      campus: document.querySelector(`#member-campus-${index}`).value
    }));

    // Post data to the API
    try {
      const response = await axios.post('http://localhost:5000/api/teams', {
        teamName,
        teamMembers: members
      });
      console.log('Team and members saved:', response.data);
    } catch (error) {
      console.error('Error saving team and members:', error.response?.data?.error || error.message);
    }
  };

  return (
    <div className='container'>
      <div className='form-container'>
        {/* First Form */}
        <form className='form' onSubmit={handleSubmit}>
          <h1>Add teams</h1>
          <div className='form-group'>
            <label>Team Name</label>
            <input
              type="text"
              name="teamname"
              id="teamname"
              placeholder='Team name'
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              required
            />
          </div>
          <div className='form-group'>
            <label>Number of team members</label>
            <input
              type="number"
              name="number"
              id="number"
              placeholder='Number of team members'
              value={teamMembers}
              onChange={(e) => setTeamMembers(parseInt(e.target.value))}
              required
            />
          </div>
          <button type='submit' className='submit-btn'>Submit</button>
        </form>
      </div>

      {/* Second Form (Conditional Rendering) */}
      {showSecondForm && (
        <div className='table-container'>
          <h2>Team: {teamName}</h2>
          <form className='form' onSubmit={handleSaveTeam}>
            <h3>Team Members Details</h3>
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Student Number</th>
                  <th>Gender</th>
                  <th>Faculty</th>
                  <th>Campus</th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: teamMembers }).map((_, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td><input type="text" id={`member-firstname-${index}`} placeholder="First Name" /></td>
                    <td><input type="text" id={`member-lastname-${index}`} placeholder="Last Name" /></td>
                    <td><input type="text" id={`member-studentnumber-${index}`} placeholder="Student Number" /></td>
                    <td>
                      <select id={`member-gender-${index}`} placeholder="Gender">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                    </td>
                    <td><input type="text" id={`member-faculty-${index}`} placeholder="Faculty" /></td>
                    <td><input type="text" id={`member-campus-${index}`} placeholder="Campus" /></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button type="submit" className='submit-btn'>Save Team</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Teams;
