

import { useNavigate } from 'react-router-dom';
import SideBar from '../components/JudgeSideBar';
import '../styles/Styles.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { api } from '../Data/Api';

function JudgeDash(team) {
    const navigate = useNavigate();

    const [User, setUser] = useState({})
    const [Teams, setTeams] = useState([]);
    const [ScoredTeams, setScoredTeams] = useState([]);

    useEffect(() => {
        var user = JSON.parse(localStorage.getItem('hackersity'));
        
        if (user !== null) {
            setUser(user)
            axios.get(api + 'get_teams_by_judge/' + user.userId).then(respond => {
                if (respond.data.success) {
                    setTeams(respond.data.results);
                    console.log(respond.data.results);
                }
            })
            axios.get(api + 'get_score/' + user.userId).then(respond => {
                if (respond.data.success) {
                    setScoredTeams(respond.data.results);
                    console.log(respond.data.results);
                }
            })


            return;

        }
        navigate('/')
    }, [])


    function actionToScore(team) {
        navigate('/scoreteam', { state: { team: team } })
    }

    return (<div className='main'>
        <SideBar />
        <div className='main-content-page'>
            <h3>Dashboard</h3>

            <section>
                <h2>Welcome, Judge <span id="judgeNameDisplay" style={{ color: 'green' }}>{User.name} {User.surname}</span></h2>
                <p>Here, you can review team submissions and submit your scores and feedback.</p>
            </section>


            <section className='teamtobescore'>
                <h2>Team To Be Score</h2>

                <table className="team-list" id="events">
                    <thead>
                        <th>Team Name</th>
                        <th>Team Members</th>
                        <th>Action</th>
                    </thead>
                    <tbody>
                        {Teams.map((team, xid) => (
                            <tr key={xid}>
                                <td>{team.team_name}</td>
                                <td>{team.team_member}</td>
                                <td><button onClick={() => actionToScore(team)} className='btn btn-primary'>score</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>

            <section className="score-list-judge" >
                <h2>Your Submitted Scores</h2>
                <table id="events">
                    <thead>
                        <th>Team Name</th>
                        <th>Novelty</th>
                        <th>Usefulness</th>
                        <th>Feasibility</th>
                        <th>Technical Proficiency</th>
                        <th>Impact</th>
                        <th>Safety</th>
                        <th>Score</th>
                        <th>Feedback</th>
                    </thead>

                    <tbody>
                        {ScoredTeams.map((scored, xid) => (
                            <tr key={xid}>
                                <td>{scored.team_name}</td>
                                <td>{scored.novelty}</td>
                                <td>{scored.usefulness}</td>
                                <td>{scored.feasibility}</td>
                                <td>{scored.technical_proficiency}</td>
                                <td>{scored.impact}</td>
                                <td>{scored.safety}</td>
                                <td>{scored.score}</td>
                                <td>{scored.feedback}</td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </section>

        </div>
    </div>)
}

export default JudgeDash;

