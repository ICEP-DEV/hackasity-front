import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import '../styles/Login.css';
import axios from 'axios'
import { api } from '../Data/Api';
import Popup from './Popup/Popup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const navigate = useNavigate();

    const [ButtonPopup, setButtonPopup] = useState(false);
    const handleLogin = (e) => {
        e.preventDefault();

        if (role === '') {
            toast.warn('Select role');
            return
        }
        if (email === '') {
            toast.warn('Enter email');
            return
        }
        if (password === '') {
            toast.warn('Enter password');
            return
        }
        setButtonPopup(true);

        setTimeout(() => {
            if (role === "Admin") {
                axios.post(api + 'admin_login', { email, password }).then(respond => {
                    if (respond.data.success) {
                        var results = {
                            userId: respond.data.results[0].id,
                            email: respond.data.results[0].email,
                            name: respond.data.results[0].name,
                            surname: respond.data.results[0].surname,
                        }
                        localStorage.setItem('hackersity', JSON.stringify(results));
                        navigate('/admindash');
                    }
                    else {
                        toast.warn('Enter password');
                        // alert(respond.data.message);
                        setButtonPopup(false);
                    }
                }, err => {
                    setButtonPopup(false);
                    console.log(err);
                })

            }
            else if (role === "Judge") {
                axios.post(api + 'judge_login', { email, password }).then(respond => {
                    console.log(respond);
                    if (respond.data.success) {
                        var results = {
                            userId: respond.data.results[0].id,
                            email: respond.data.results[0].email,
                            name: respond.data.results[0].name,
                            surname: respond.data.results[0].surname,
                        }
                        localStorage.setItem('hackersity', JSON.stringify(results));
                        navigate('/judgedash');
                    }
                    else {
                        alert(respond.data.message);
                    }
                }, err => {
                    console.log(err);

                })

            }
        }, 2000)
        // Mock login validation (replace this with actual validation or API call)
        // if (email === "admin@example.com" && password === "password" && role) {
        //   if (role === "Admin") {
        //     navigate('/dashboard');  // Navigate to Admin dashboard
        //   } else if (role === "Judge") {
        //     navigate('/judge');  // Navigate to Judge page
        //   }
        // } else {
        //   alert("Invalid credentials or role selection. Please try again.");
        // }
    };

    return (
        <div className="login">
            <ToastContainer />
            <Popup trigger={ButtonPopup} setTrigger={setButtonPopup} />
            <form className="form" onSubmit={handleLogin}>
                <h1 className="title">Login</h1>

                <div className="radiobtn">
                    <label>
                        <input
                            type="radio"
                            name="role"
                            value="Admin"
                            onChange={(e) => setRole(e.target.value)}
                            required
                        />
                        Admin
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="role"
                            value="Judge"
                            onChange={(e) => setRole(e.target.value)}
                            required
                        />
                        Judge
                    </label>
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <div className="form-footer">
                    <NavLink to="/forgotpassword" className="forgot-password-link">Forgot Password?</NavLink>
                </div>

                <button type="submit" id="submit" name="submit">Login</button>
            </form>

            <footer className="footer">
                <p>TVH website @2024 Hackathon</p>
            </footer>
        </div>
    );
}

export default Login;
