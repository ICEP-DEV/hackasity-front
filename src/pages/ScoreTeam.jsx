import { useLocation, useNavigate } from 'react-router-dom';
import SideBar from '../components/JudgeSideBar';
import '../styles/Styles.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { api } from '../Data/Api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ScoreTeam() {
    const navigate = useNavigate();
    const router = useLocation();
    const { team } = router.state

    const [novelty, setnovelty] = useState('');
    const [usefulness, setusefulness] = useState('');
    const [feasibility, setfeasibility] = useState('');
    const [technical_proficiency, settechnical_proficiency] = useState('');
    const [impact, setimpact] = useState('');
    const [safety, setsafety] = useState('');
    const [feedback, setfeedback] = useState('');

    useEffect(() => {
        console.log(team);

    })

    function submit() {
        if (novelty === '') { toast.warn('Score novelty'); return; }
        if (usefulness === '') { toast.warn('Score usefulness'); return; }
        if (feasibility === '') { toast.warn('Score feasibility'); return; }
        if (technical_proficiency === '') { toast.warn('Score technical_proficiency'); return; }
        if (impact === '') { toast.warn('Score impact'); return; }
        if (safety === '') { toast.warn('Score safety'); return; }
        
        axios.put(api + 'score_team/' + team.score_id,{novelty,usefulness,feasibility,technical_proficiency,impact,safety,feedback}).then(respond => {
            if (respond.data.success) {
                toast(respond.data.message);
                setTimeout(function () {
                   navigate('/judgedash')
                }, 5000);

            }
            else {
                toast(respond.data.message);
            }
        }, err => {
            console.log(err);
        })

    }

    return (<div className='main'>
        <SideBar />
        <ToastContainer />
        <div className='main-content-page'>
            <h3>Scoring</h3>
            <section>
                <h2 >Submit Your Score for <span style={{ color: 'green' }}>{team.team_name}</span></h2>
                <div id="judgeScoreForm">

                    <label for="score">Novelty(0-100)</label>
                    <input type="number" id="score" name="score" onChange={(event) => setnovelty(event.target.value)} />

                    <label for="score">Usefulness(0-100)</label>
                    <input type="number" id="score" name="score" onChange={(event) => setusefulness(event.target.value)} />

                    <label for="score">Feasibility(0-100)</label>
                    <input type="number" id="score" name="score" onChange={(event) => setfeasibility(event.target.value)} />

                    <label for="score">Technical Proficiency(0-100)</label>
                    <input type="number" id="score" name="score" onChange={(event) => settechnical_proficiency(event.target.value)} />

                    <label for="score">Impact(0-100)</label>
                    <input type="number" id="score" name="score" onChange={(event) => setimpact(event.target.value)} />

                    <label for="score">Safety(0-100)</label>
                    <input type="number" id="score" name="score" onChange={(event) => setsafety(event.target.value)} />


                    <label for="feedback">Feedback</label>
                    <textarea id="feedback" name="feedback" rows="4" onChange={(event) => setfeedback(event.target.value)}></textarea>

                    <button type="button" onClick={submit}>Submit Score</button>
                </div>
            </section>

        </div>
    </div>)
}

export default ScoreTeam;