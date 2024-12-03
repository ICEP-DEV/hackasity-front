import { Link, useNavigate } from "react-router-dom";
import '../styles/SideBar.css'
import { BsSpeedometer, BsPersonCircle, BsPeopleFill, BsPeople, BsBookFill } from "react-icons/bs";
import { useEffect, useState } from "react";
// import logo from '../assets/ICEPLOGO.jpg'
function Sidebar() {
    const navigate = useNavigate();
    useEffect(() => {
        var user = JSON.parse(localStorage.getItem('hackersity'));
        console.log(user);
        if (user !== null) {
            return;
        }
        navigate('/')
    })
    function logout() {
        localStorage.removeItem('hackersity');
        navigate('/')
    }

    return (<div id="sidebar">
        <div id="sidebar-head">
            {/* <img src={logo} alt="icep logo" width="50px" height="50px" style={{borderRadius:"100%"}}/> */}
            <h4 style={{ marginTop: "15px", marginLeft: "15px" }}>Hackacity</h4>
        </div>
        <div id="sidebar-content">
            <div className="side-content">
                <span className="side-label"><Link to='/admindash' className="link-label"><h5>Dashborad</h5></Link> </span>
            </div>
            <div className="side-content">
                <span className="side-label"><Link to='/events' className="link-label"><h5>Event</h5></Link></span>
            </div>
            <div className="side-content">
                <span className="side-label"><Link to='/teams' className="link-label"><h5>Team</h5></Link></span>
            </div>
            <div className="side-content">
                <span className="side-label"><Link to='/judge' className="link-label"><h5>Judges</h5></Link></span>
            </div>
            <div className="side-content">
                <span className="side-label"><Link to='/scores' className="link-label"><h5>Score</h5></Link></span>
            </div>
            <div className="side-content">
                <span className="side-label"><h5 className="link-label" onClick={logout}>Logout</h5></span>
            </div>
        </div>
    </div>)


}

export default Sidebar;