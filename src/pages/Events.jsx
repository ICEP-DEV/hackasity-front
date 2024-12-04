
import { useEffect, useState } from 'react';
import SideBar from '../components/SideBar';
import '../styles/Styles.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { api } from '../Data/Api';
import Popup from '../components/Popup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaBeer } from "react-icons/fa";
import { IoAddCircleOutline } from "react-icons/io5";

function Events() {
    const navigate = useNavigate();

    const [EventsList, setEventsList] = useState([]);
    const [JudgePopup, setJudgePopup] = useState(false);
    const [TeamPopup, setTeamPopup] = useState(false);
    const [Teams, setTeams] = useState([]);
    const [SelectedEvent, setSelectedEvent] = useState({});
    const [CheckedTeams, setCheckedTeams] = useState([]);
    useEffect(() => {
        axios.get(api + 'get_event').then(respond => {
            if (respond.data.success) {
                console.log(respond.data.results);

                setEventsList(respond.data.results)
            }
        }, err => {
            console.log(err);

        })

    }, [])

    const handleCheckboxChange = (item) => {
        if (CheckedTeams.includes(item)) {
            // Remove item if already selected
            setCheckedTeams(CheckedTeams.filter((selected) => selected !== item));
        } else {
            // Add item if not selected
            setCheckedTeams([...CheckedTeams, item]);
        }
    };

    function popTeamTable(event) {
        axios.get(api + 'get_teams').then(respond => {
            setTeams(respond.data.results.filter(values => { return values.event_id === null }));
            
            setSelectedEvent(event)
            setTeamPopup(true)
        })
    }

    function addToEvent() {

        console.log(CheckedTeams);
        console.log(SelectedEvent);
        var event_id = SelectedEvent.id

        for (var k = 0; k < CheckedTeams.length; k++) {
            axios.put(api + 'assign_team_event/' + CheckedTeams[k].id, { event_id }).then(respond => {
                if (k === CheckedTeams.length) {
                    setTimeout(function () {
                        toast('Done');
                        setTeamPopup(false)
                    }, 5000);

                }
            })
        }
        //
    }

    let teamTeable = <>
        <table className="team-list" id="events">
            <thead>
                <th>#</th>
                <th>Team Name</th>
                <th>Members</th>
            </thead>
            <tbody>
                {Teams.map((team, xid) => (
                    <tr key={xid}>
                        <td> <input
                            type="checkbox"
                            checked={CheckedTeams.includes(team)}
                            onChange={() => handleCheckboxChange(team)}
                        /></td>
                        <td>{team.team_name}</td>
                        <td>{team.team_member}</td>
                    </tr>
                ))}

            </tbody>
        </table>
        <div style={{ width: '50%', margin: 'auto', marginTop: '20px', textAlign: 'center', padding: '20px' }}>
            {Teams.length > 0 ? <button className='btn btn-primary' onClick={addToEvent}>Add To Event</button>
                : <button className='btn btn-primary' disabled >Add To Event</button>}
        </div>

    </>
    return (<div className='main'>
        <SideBar />
        <ToastContainer />
        <div className='main-content-page'>
            <h3>Events</h3>
            <button onClick={() => navigate('/addevent')} className='btn btn-primary'>Add Event  <IoAddCircleOutline size={25} color='#ffff'/></button>

            <table id="events" >
                <thead>
                    <th>Event Title</th>
                    <th>Start Date and Time</th>
                    <th>End Date and Time</th>
                    <th>Status</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {EventsList.map((event, xid) => (
                        <tr key={xid}>
                            <td>{event.event_name}</td>
                            <td>{event.start_date}</td>
                            <td>{event.end_date}</td>
                            <td>{event.event_status}</td>
                            <td>{event.event_status === 'Upcoming' ? <button className='btn btn-primary' onClick={() => popTeamTable(event)}>Assign Teams</button> :
                                <><button disabled className='btn btn-primary'>Assign Teams</button></>}
                            </td>
                        </tr>
                    ))}
                    <Popup trigger={JudgePopup} setTrigger={setJudgePopup}></Popup>
                    <Popup trigger={TeamPopup} setTrigger={setTeamPopup}>{teamTeable}</Popup>
                </tbody>
            </table>
        </div>
    </div>)
}

export default Events;