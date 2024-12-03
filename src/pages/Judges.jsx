
import { useEffect, useState } from 'react';
import SideBar from '../components/SideBar';
import '../styles/Styles.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { api } from '../Data/Api';
function AddJudges() {

    const [Date, setDate] = useState('');
    const [pitch, setPitch] = useState('');
    // const [Hours, setHours] = useState(0);
    const [DateTimeset, setDateTimeset] = useState(false);

    let [email, setEmail] = useState('');
    let [name, setName] = useState('');
    let [surname, setSurname] = useState('');
    let [occupation, setoOcupation] = useState('');
    let [contact, setContact] = useState('');
    let [pitchTimeId, setpitchTimeId] = useState('');
    let [eventId, seteventId] = useState('');
    let [FoundJudge, setFoundJudge] = useState(false);
    let [Judges, setJudges] = useState([]);
    let [EventsList, setEventsList] = useState([]);

    useEffect(() => {
        axios.get(api + 'get_judges').then(respond => {
            setFoundJudge(respond.data.success)
            if (respond.data.success) {
                setJudges(respond.data.results);
                console.log(respond.data.results);
            }

        })

        axios.get(api + 'get_event').then(respond => {
            if (respond.data.success) {
                console.log(respond.data.results);

                setEventsList(respond.data.results)
            }
        }, err => {
            console.log(err);
        })
    }, [])

    function setDateTime() {
        if (Date === '') {
            toast.warn('Select date');
            return;
        }
        if (pitch === '') {
            toast.warn('Select Pitch');
            return;
        }
        console.log(pitch, Date);


        axios.post(api + 'add_pith_time', { Date, pitch }).then(respond => {
            if (respond.data.success) {
                console.log(respond.data);

                setpitchTimeId(respond.data.pitchId)
                toast(respond.data.message);
                setTimeout(function () {
                    setDateTimeset(true)
                }, 5000);
            }
            else {
                toast.warn(respond.data.message);
            }
        }, err => {
            console.log(err);

        })
    }

    function addJudge() {
        if (eventId === '') { toast.warn('Select event'); return; }
        if (name === '') { toast.warn('Enter name'); return; }
        if (surname === '') { toast.warn('Enter surname'); return; }
        if (email === '') { toast.warn('Enter email'); return; }
        if (occupation === '') { toast.warn('Enter occupation'); return; }
        if (contact === '') { toast.warn('Enter contact'); return; }

        setName('');
        setContact('');
        setSurname('');
        setoOcupation('');
        setEmail('');

        var data = {
            pitchTimeId, name, surname, email, occupation, contact, eventId
        }
        var judges = Judges

        axios.post(api + 'add_judge_score_table', data).then(respond => {
            if (respond.data.success) {
                toast(respond.data.message);
                axios.get(api + 'get_judges').then(respond => {
                    setFoundJudge(respond.data.success)
                    if (respond.data.success) {
                        setJudges(respond.data.results);
                        console.log(respond.data.results);
                    }

                })
            }
            else {
                toast.warn(respond.data.message);
            }
        }, err => {
            console.log(err);

        })
    }

    return (<div className='main'>
        <div className='main-sidebar'>
            <SideBar />
        </div>

        <ToastContainer />
        <div className='main-content-page'>
            <h3>Judges</h3>
            <div id="addEventForm">
                <select className='form-control' disabled={DateTimeset} onChange={(event) => seteventId(event.target.value)}>
                    <option selected disabled>--- Select Event ---</option>
                    {EventsList.map((event, xid) => (
                        <option key={xid} value={event.id}>{event.event_name}</option>
                    ))}
                </select>
                <div className='dateTime' >
                    <label for="eventDate">End Date</label>
                    <div>
                        <input type="date" className='form-control' id="eventDate" name="eventDate" disabled={DateTimeset} required onChange={(event) => setDate(event.target.value)} />
                        <select disabled={DateTimeset} className='form-control' onChange={(event) => setPitch(event.target.value)}>
                            <option selected disabled value=''>--- Select Pitch ---</option>
                            <option value='Mid-Day'>Mid-Day</option>
                            <option value='Mid-Night'>Mid-Night</option>
                        </select>
                        {/* <input type="time" id="eventTime" name="eventTime" disabled={DateTimeset} required className='datetimeinput' onChange={(event) => setTime(event.target.value)} /> */}
                        {/* <input type="number" id="eventTime" name="eventTime" disabled={DateTimeset} placeholder='hour(s), eg 2' onChange={(event) => setHours(event.target.value)} required /> */}
                    </div>
                    <button className='form-control btn btn-primary' disabled={DateTimeset} onClick={() => setDateTime()}>Set Date Time</button>
                </div>
            </div>
            {DateTimeset &&
                <div id="addEventForm">
                    <label for="judgeName">Judge Name</label>
                    <input type="text" id="judgeName" name="judgeName" value={name} onChange={(event) => setName(event.target.value)} />

                    <label for="judgeName">Surname Name</label>
                    <input type="text" id="judgeName" name="judgeName" value={surname} onChange={(event) => setSurname(event.target.value)} />


                    <label for="judgeExpertise">Occupation</label>
                    <input type="text" id="judgeOccupation" name="judgeOccupation" value={occupation} onChange={(event) => setoOcupation(event.target.value)} />

                    <label for="judgeEmail">Email Address</label>
                    <input type="text" id="judgeEmail" name="judgeEmail" value={email} onChange={(event) => setEmail(event.target.value)} />

                    <label for="judgeContact">Contact Info</label>
                    <input type="text" id="judgeContact" name="judgeContact" value={contact} onChange={(event) => setContact(event.target.value)} />

                    <button type="button" onClick={addJudge}>Add Judge</button>
                </div>
            }

            <h3>Judge List</h3>
            <table class="judge-list" id="events">
                <thead>
                    <th>Judge Name</th>
                    <th>Occupation</th>
                    <th>Email</th>
                    <th>Contact Info</th>
                    <th>Pitch</th>
                </thead>
                {FoundJudge && <tbody>
                    {Judges.map((judge, xid) => (
                        <tr key={xid}>
                            <td>{judge.name} {judge.surname}</td>
                            <td>{judge.occupation}</td>
                            <td>{judge.email}</td>
                            <td>{judge.contact}</td>
                            <td>{judge.pitch}</td>
                        </tr>
                    ))}

                </tbody>}

            </table>


        </div>
    </div>)
}

export default AddJudges;