import { useEffect, useState } from 'react';
import SideBar from '../components/SideBar';
import '../styles/Styles.css'
import axios from 'axios';
import { api } from '../Data/Api';
function Scores() {

    const [Score, setScore] = useState([]);
    const [AllScore, setAllScore] = useState([]);

    useEffect(() => {
        axios.get(api + 'get_total_scores').then(respond => {
            if (respond.data.success) {
                setScore(respond.data.results);
                console.log(respond.data.results);
            }
        })
        axios.get(api + 'get_all_score').then(respond => {
            if (respond.data.success) {
                setAllScore(respond.data.results);
                console.log(respond.data.results);
            }
        })
    }, [])

    return (<div className='main'>
        <SideBar />
        <div className='main-content-page'>
            <h3>Scores</h3>
            <table class="score-list" id="events">
                <thead>
                    <th>#</th>
                    <th>Team</th>
                    <th>%Score</th>
                </thead>
                <tbody>
                    {Score.map((score, xid) => (
                        <tr key={xid}>
                            <td>{xid + 1}</td>
                            <td>{score.team_name}</td>
                            <td>{score.average}%</td>
                        </tr>
                    ))}
                </tbody>
            </table>


            <div className='team-score'>
                <h3>Score per team</h3>
                {Score.map((score, xid) => (
                    <div key={xid} style={{ marginTop: '20px' }}>
                        <h4>{score.team_name}</h4>
                        <table class="score-list" id="events">
                            <thead>
                                <th>Judge Name</th>
                                <th>Score(%)</th>
                                <th>Comment</th>
                            </thead>
                            <tbody>
                                {AllScore.filter(value => { return value.team_name === score.team_name })
                                    .map((scoreTeam, zid) => (
                                        <tr key={zid}>
                                            <td>{scoreTeam.name} {scoreTeam.surname}</td>
                                            <td>{scoreTeam.score}%</td>
                                            <td>{scoreTeam.feddback}</td>
                                        </tr>

                                    ))}

                            </tbody>
                        </table>
                    </div>

                ))}

            </div>

        </div>
    </div>)
}

export default Scores;