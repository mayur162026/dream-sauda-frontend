import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Auth from './Components/Auth';
import Dashboard from './Components/Dashboard';
import CreateTeam from './Components/CreateTeam';
import MyTeams from './Components/MyTeams';
import JoinContest from './Components/JoinContestModal';
import Wallet from './Components/Wallet';
import Leaderboard from './Components/Leaderboard';
import Navbar from './Components/Navbar';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('isAuthenticated') === 'true');

  useEffect(() => {
    localStorage.setItem('isAuthenticated', isAuthenticated ? 'true' : 'false');
  }, [isAuthenticated]);

  return (
    <Router>
      {isAuthenticated && <Navbar />}
      
      <Routes>
        <Route path="/" element={<Auth setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />} />
        <Route path="/create-team" element={isAuthenticated ? <CreateTeam /> : <Navigate to="/" />} />
        <Route path="/my-teams" element={isAuthenticated ? <MyTeams /> : <Navigate to="/" />} />
        <Route path="/join-contest" element={isAuthenticated ? <JoinContest /> : <Navigate to="/" />} />
        <Route path="/wallet" element={isAuthenticated ? <Wallet /> : <Navigate to="/" />} />
        <Route path="/leaderboard" element={isAuthenticated ? <Leaderboard /> : <Navigate to="/" />} />
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
