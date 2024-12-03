import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Judges from './pages/Judges';
import Events from './pages/Events';
import AdminDash from './pages/AdminDash';
import AddEvent from './pages/AddEvent';
import Teams from './pages/Teams';
import Scores from './pages/Scores';
import JudgeDash from './pages/JudgeDash';
import ScoreTeam from './pages/ScoreTeam';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route exact path='/admindash' element={<AdminDash />} />
        <Route exact path='/events' element={<Events />} />
        <Route exact path='/judge' element={<Judges />} />
        <Route exact path='/addevent' element={<AddEvent />} />
        <Route exact path='/teams' element={<Teams />} />
        <Route exact path='/scores' element={<Scores />} />
        <Route exact path='/judgedash' element={<JudgeDash />} />
        <Route exact path='/scoreteam' element={<ScoreTeam />} />
      </Routes>
    </Router>
  );
}

export default App;
