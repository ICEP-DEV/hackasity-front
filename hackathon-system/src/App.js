import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home';
import Header from './Pages/Header';
import Footer from './Pages/Footer';
import Logout from './Pages/Logout';
import ForgotPassword from './Pages/ForgotPassword';
import Judges from './Pages/AdminDashoard/Judges';
import Scores from './Pages/JudgeDashboard/Scores';
import Teams from './Pages/AdminDashoard/Teams';
import Results from './Pages/AdminDashoard/Results';
import JudgeDashboard from './Pages/JudgeDashboard/JudgeDashboard';
import Dashboard from './Pages/AdminDashoard/Dashboard';
import View from './Pages/AdminDashoard/View';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="logout" element={<Logout />} />
          <Route path="forgotPassword" element={<ForgotPassword />} />
          <Route path="judge" element={<JudgeDashboard/>} />
          <Route path="dashboard" element={<Dashboard/>} />
          <Route path="judges" element={<Judges />} />
          <Route path="scores" element={<Scores />} />
          <Route path="teams" element={<Teams />} />
          <Route path="results" element={<Results/>} />
          <Route path="view" element={<View/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
