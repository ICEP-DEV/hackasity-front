import { Button } from 'bootstrap';
import SideBar from '../components/SideBar';
import '../styles/Styles.css'
import { useEffect, useState } from 'react';
import { api } from '../Data/Api';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Teams() {

    const [team_name, setTeam_name] = useState('');
    const [team_member, setTeam_member] = useState('');

    const [Teams, setTeams]=useState([]);

    useEffect(() => {
        axios.get(api + 'get_teams').then(respond => {
            setTeams(respond.data.results);
            console.log(respond.data.results);
        })
    },[])

    function addTeam() {
        axios.post(api + 'add_team', { team_name, team_member }).then(respond => {
            if (respond.data.success) {
                toast(respond.data.message);
            }
            else {
                toast.warn(respond.data.message);
            }
        }, err => {
            console.log(err);
        })
    }
    return (<div className='main'>
        <SideBar />
        <ToastContainer />
        <div className='main-content-page'>
            <h3>Teams</h3>
            <div id="addEventForm">
                <label for="teamName">Team Name</label>
                <input type="text" id="teamName" name="teamName" onChange={(event) => setTeam_name(event.target.value)} />
                <label for="teamMembers">Team Members (Comma Separated)</label>
                <input type="text" id="teamMembers" name="teamMembers" onChange={(event) => setTeam_member(event.target.value)} required />
                <button type="button" onClick={addTeam}>Add Team</button>
            </div>

            <h3 id='teamList'>Team List</h3>
            <table className="team-list" id="events">
                <thead>
                    <th>Team Name</th>
                    <th>Members</th>
                </thead>
                <tbody>
                    {Teams.map((team,xid)=>(
                       <tr key={xid}>
                        <td>{team.team_name}</td>
                        <td>{team.team_member}</td>
                    </tr> 
                    ))}
                    
                </tbody>
            </table>
        </div>
    </div>)
}

export default Teams;