import SideBar from '../components/SideBar';
import '../styles/Styles.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { api } from '../Data/Api';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Popup from './Popup/Popup';

function AddEvent() {
    const navigate = useNavigate();

    const [event_name, setEvent_name] = useState('');
    const [startDate, setStartDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endDate, setEndDate] = useState('');
    const [endTime, setEndTime] = useState('');
    const [ButtonPopup, setButtonPopup] = useState(false);

    function addEvent() {
        if(event_name === ''){
            toast.warn('Enter event name');
            return;
        }
        if(endDate === ''){
            toast.warn('Select start date');
            return;
        }
        if(startTime === ''){
            toast.warn('Select start time');
            return;
        }
        if(endDate === ''){
            toast.warn('Select end date');
            return;
        }
        if(endTime === ''){
            toast.warn('Select end time');
            return;
        }
        setButtonPopup(true);
        axios.post(api + 'add_event', { event_name, startDate, startTime, endDate, endTime }).then(respond => {
            console.log(respond.data);
            if(respond.data.success){
                toast(respond.data.message);
                setTimeout(function () {
                    navigate('/events')
                }, 5000);
            }
            else{
                setButtonPopup(false);
                toast(respond.data.message);
            }

        }, err => {
            setButtonPopup(false);
            console.log(err);
        })


    }

    return (<div className='main'>
        <SideBar />
        <Popup trigger={ButtonPopup} setTrigger={setButtonPopup} />
        <ToastContainer />
        <div className='main-content-page'>
            <h3>Add New Event</h3>

            <div id="addEventForm">
                <label for="eventTitle">Event Title</label>
                <input type="text" id="eventTitle" name="eventTitle" required onChange={(event) => setEvent_name(event.target.value)} />
                <div className='dateTime'>
                    <label for="eventDate" className='datetimelabel' >Start Date and Time</label>
                    <div>
                        <input type="date" id="eventDate" name="eventDate" required onChange={(event) => setStartDate(event.target.value)} />
                        <input type="time" id="eventTime" name="eventTime" required className='datetimeinput' onChange={(event) => setStartTime(event.target.value)} />
                    </div>
                </div>
                <div className='dateTime' >
                    <label for="eventDate">End Date and Time</label>
                    <div>
                        <input type="date" id="eventDate" name="eventDate" required onChange={(event) => setEndDate(event.target.value)} />
                        <input type="time" id="eventTime" name="eventTime" required className='datetimeinput' onChange={(event) => setEndTime(event.target.value)} />
                    </div>
                </div>

                <button type="button" className='addEventBtn' onClick={addEvent}>Add Event</button>
            </div>
        </div>
    </div>)
}

export default AddEvent;