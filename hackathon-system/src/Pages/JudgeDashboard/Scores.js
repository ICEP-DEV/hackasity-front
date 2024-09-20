import React, { useState } from 'react';
import axios from 'axios'; // Import axios for API requests
import "./Scores.css";

function Scores() {
  const [scores, setScores] = useState({
    team_name: '', // Added team name
    novelty: '',
    usefulness: '',
    feasibility: '',
    technical: '',
    impact: '',
    safety: '',
    total: '',
    comment: ''
  });

  // Function to handle input change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setScores({
      ...scores,
      [id]: value
    });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Calculate the total score before submitting
    const total = 
      Number(scores.novelty) + 
      Number(scores.usefulness) + 
      Number(scores.feasibility) + 
      Number(scores.technical) + 
      Number(scores.impact) + 
      Number(scores.safety);

    // Update the total score in state
    setScores({
      ...scores,
      total: total.toString()
    });

    // Send the data to the backend
    try {
      await axios.post('http://localhost:5000/api/scores', {
        ...scores,
        total: total.toString() // Make sure the total is updated in the request
      });
      alert('Scores submitted successfully');
    } catch (error) {
      console.error('Error submitting scores', error);
      alert('Failed to submit scores');
    }
  };

  return (
    <div className="container">
      <form className="score-form" onSubmit={handleSubmit}>
        <h1>Score Form</h1>

        <div className="form-group">
          <label htmlFor="team_name">Team Name</label>
          <input 
            type="text" 
            id="team_name" 
            value={scores.team_name} 
            onChange={handleChange} 
            placeholder="Team Name" 
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="novelty">Novelty</label>
          <input 
            type="number" 
            id="novelty" 
            value={scores.novelty} 
            onChange={handleChange} 
            placeholder="Novelty" 
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="usefulness">Usefulness</label>
          <input 
            type="number" 
            id="usefulness" 
            value={scores.usefulness} 
            onChange={handleChange} 
            placeholder="Usefulness" 
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="feasibility">Feasibility</label>
          <input 
            type="number" 
            id="feasibility" 
            value={scores.feasibility} 
            onChange={handleChange} 
            placeholder="Feasibility" 
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="technical">Technical Proficiency</label>
          <input 
            type="number" 
            id="technical" 
            value={scores.technical} 
            onChange={handleChange} 
            placeholder="Technical Proficiency" 
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="impact">Impact</label>
          <input 
            type="number" 
            id="impact" 
            value={scores.impact} 
            onChange={handleChange} 
            placeholder="Impact" 
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="safety">Safety</label>
          <input 
            type="number" 
            id="safety" 
            value={scores.safety} 
            onChange={handleChange} 
            placeholder="Safety" 
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="total">Total</label>
          <input 
            type="number" 
            id="total" 
            value={scores.total} 
            readOnly 
            placeholder="Total" 
          />
        </div>

        <div className="form-group">
          <label htmlFor="comment">Comment</label>
          <input 
            type="text" 
            id="comment" 
            value={scores.comment} 
            onChange={handleChange} 
            placeholder="Comment" 
          />
        </div>

        <button type="submit" name="submit" id="submit">Tally and Submit Score</button>
      </form>
    </div>
  );
}

export default Scores;
