const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

// Create the Express app
const app = express(); // Initialize the app first

// Middleware
app.use(cors()); // Now you can use the middleware after initializing the app
app.use(bodyParser.json());
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Change this to your MySQL username
    password: '', // Change this to your MySQL password
    database: 'hackathon' //database name
});

// Connect to the database
db.connect((err) => {
    if (err) throw err;
    console.log('MySQL connected...');
});

// Route to handle registration
app.post('/register',  (req, res) => {
    const { name, lname, email, number, password, cpassword } = req.body;

    // Validate input
    if (!name || !lname || !email || !number || !password || !cpassword) {
        return res.status(400).json({ msg: 'Please fill in all fields' });
    }

    // Insert into database
    const query = 'INSERT INTO users (name, lname, email, number, password, cpassword) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(query, [name, lname, email, number, password, cpassword], (err, result) => {
        if (err) throw err;
        res.status(201).json({ msg: 'User registered successfully', userId: result.insertId });
    });
});

// API endpoint to save team data
app.post('/api/teams', (req, res) => {
    const { teamName, teamMembers } = req.body;

    // Insert team data
    db.query(
        'INSERT INTO teams (team_name) VALUES (?)',
        [teamName],
        (err, results) => {
            if (err) {
                console.error('Error inserting team data:', err);
                return res.status(500).json({ error: 'Database error' });
            }

            const teamId = results.insertId; // Get the ID of the inserted team

            // Insert team members data
            const members = teamMembers.map(member => [
                teamId,
                member.firstName,
                member.lastName,
                member.studentNumber,
                member.gender,
                member.faculty,
                member.campus
            ]);

            db.query(
                'INSERT INTO team_members (team_id, first_name, last_name, student_num, gender, faculty, campus) VALUES ?',
                [members],
                (err) => {
                    if (err) {
                        console.error('Error inserting team members data:', err);
                        return res.status(500).json({ error: 'Database error' });
                    }
                    res.status(200).json({ message: 'Team and members saved successfully' });
                }
            );
        }
    );
});

// POST endpoint to save scores
app.post('/api/scores', (req, res) => {
    const { team_name, novelty, usefulness, feasibility, technical, impact, safety, total, comment } = req.body;
  
    const query = `
      INSERT INTO scores (team_name, novelty, usefulness, feasibility, technical, impact, safety, total, comment)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
  
    db.query(query, [team_name, novelty, usefulness, feasibility, technical, impact, safety, total, comment], (err, results) => {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).json({ error: 'Database error' });
      }
      res.status(201).json({ message: 'Scores saved successfully' });
    });
  });

// Fetch results in ascending order
// Example Express.js route for fetching sorted results
app.get('/api/results', async (req, res) => {
    try {
      const results = await db.query(
        'SELECT team_name, total, comment FROM scores ORDER BY total DESC'
      );
      
      res.json(results.rows); // Use rows if you're using PostgreSQL
    } catch (error) {
      console.error('Error fetching results:', error); // Log the error
      res.status(500).json({ error: 'Failed to fetch results' });
    }
  });
  
  // API route to fetch teams
app.get('/api/teams', (req, res) => {
  const sqlQuery = 'SELECT id, team_name, first_name, last_name, student_num, gender, faculty, campus FROM teams';

  db.query(sqlQuery, (err, results) => {
    if (err) {
      console.error('Error fetching teams:', err);
      res.status(500).json({ error: 'Failed to fetch teams' });
    } else {
      res.json(results);
    }
  });
});


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
