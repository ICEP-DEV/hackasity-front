import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './JudgeDashboard.css';

function JudgeDashboard() {
  const [teams, setTeams] = useState([]);
  const [scores, setScores] = useState({});

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/teams');
        setTeams(response.data);
      } catch (error) {
        console.error('Error fetching teams:', error);
      }
    };

    fetchTeams();
  }, []);

  const handleScoreChange = (teamId, e) => {
    const { id, value } = e.target;
    setScores({
      ...scores,
      [teamId]: {
        ...scores[teamId],
        [id]: value
      }
    });
  };

  const handleSubmit = async (teamId, e) => {
    e.preventDefault();
    try {
      const { novelty, usefulness, feasibility, technical, impact, safety, comment } = scores[teamId];
      const total = 
        Number(novelty) +
        Number(usefulness) +
        Number(feasibility) +
        Number(technical) +
        Number(impact) +
        Number(safety);

      await axios.post('http://localhost:5000/api/scores', {
        teamId,
        scores: { novelty, usefulness, feasibility, technical, impact, safety, total, comment }
      });

      alert('Scores submitted successfully');
    } catch (error) {
      console.error('Error submitting scores:', error);
      alert('Failed to submit scores');
    }
  };

  return (
    <div className="dashboard-container">
      <h1>Judge Dashboard</h1>
      {teams.map((team) => (
        <div key={team.id} className="team-form">
          <h2>{team.name}</h2>
          <form onSubmit={(e) => handleSubmit(team.id, e)}>
            <div className="form-group">
              <label htmlFor={`novelty-${team.id}`}>Novelty</label>
              <input
                type="text"
                id={`novelty-${team.id}`}
                value={scores[team.id]?.novelty || ''}
                onChange={(e) => handleScoreChange(team.id, e)}
                placeholder="Novelty"
              />
            </div>
            <div className="form-group">
              <label htmlFor={`usefulness-${team.id}`}>Usefulness</label>
              <input
                type="text"
                id={`usefulness-${team.id}`}
                value={scores[team.id]?.usefulness || ''}
                onChange={(e) => handleScoreChange(team.id, e)}
                placeholder="Usefulness"
              />
            </div>
            <div className="form-group">
              <label htmlFor={`feasibility-${team.id}`}>Feasibility</label>
              <input
                type="text"
                id={`feasibility-${team.id}`}
                value={scores[team.id]?.feasibility || ''}
                onChange={(e) => handleScoreChange(team.id, e)}
                placeholder="Feasibility"
              />
            </div>
            <div className="form-group">
              <label htmlFor={`technical-${team.id}`}>Technical Proficiency</label>
              <input
                type="text"
                id={`technical-${team.id}`}
                value={scores[team.id]?.technical || ''}
                onChange={(e) => handleScoreChange(team.id, e)}
                placeholder="Technical Proficiency"
              />
            </div>
            <div className="form-group">
              <label htmlFor={`impact-${team.id}`}>Impact</label>
              <input
                type="text"
                id={`impact-${team.id}`}
                value={scores[team.id]?.impact || ''}
                onChange={(e) => handleScoreChange(team.id, e)}
                placeholder="Impact"
              />
            </div>
            <div className="form-group">
              <label htmlFor={`safety-${team.id}`}>Safety</label>
              <input
                type="text"
                id={`safety-${team.id}`}
                value={scores[team.id]?.safety || ''}
                onChange={(e) => handleScoreChange(team.id, e)}
                placeholder="Safety"
              />
            </div>
            <div className="form-group">
              <label htmlFor={`comment-${team.id}`}>Comment</label>
              <input
                type="text"
                id={`comment-${team.id}`}
                value={scores[team.id]?.comment || ''}
                onChange={(e) => handleScoreChange(team.id, e)}
                placeholder="Comment"
              />
            </div>
            <button type="submit" className="submit-btn">Score Team</button>
          </form>
        </div>
      ))}
    </div>
  );
}

export default JudgeDashboard;
