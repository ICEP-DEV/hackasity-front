import { Button } from 'bootstrap';
import SideBar from '../components/SideBar';
import '../styles/Styles.css'

function AdminDash() {
    return (<div className='main'>
        <SideBar />
        <div className='main-content-page'>
            <div class="dashboard-item">
                <h2>Overview</h2>
                <div class="stats">
                    <div class="stat-box">
                        <h3>120</h3>
                        <p>Total Participants</p>
                    </div>
                    <div class="stat-box">
                        <h3>30</h3>
                        <p>Teams Formed</p>
                    </div>
                    <div class="stat-box">
                        <h3>45</h3>
                        <p>Submissions</p>
                    </div>
                </div>
            </div>

        </div>
    </div>)
}

export default AdminDash;