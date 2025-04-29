import React, { useEffect, useState } from 'react';
import './MyTeams.css';

const mockTeams = [
  { id: 1, name: 'BullRiders', stocks: 11, sectorBreakdown: { IT: 2, Pharma: 2 }, joined: false },
  { id: 2, name: 'Stock Titans', stocks: 10, sectorBreakdown: { Auto: 1 }, joined: true },
];

const MyTeams = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    // In real scenario, fetch user teams from API
    setTeams(mockTeams);
  }, []);

  const isBeforeMarketOpen = () => {
    const now = new Date();
    return now.getHours() < 9 || (now.getHours() === 9 && now.getMinutes() === 0);
  };

  const handleJoin = (teamId) => {
    alert(`Joining contest with team ID ${teamId}`);
    // TODO: Send request to join contest
  };

  const handleEdit = (teamId) => {
    window.location.href = `/edit-team/${teamId}`;
  };

  const handleDelete = (teamId) => {
    if (window.confirm('Are you sure you want to delete this team?')) {
      // TODO: Delete from backend
      setTeams(teams.filter(team => team.id !== teamId));
    }
  };

  return (
    <div className="my-teams-box">
      <h3>My Teams</h3>
      {teams.length === 0 ? (
        <p>No teams created yet. Create one now!</p>
      ) : (
        <div className="team-list">
          {teams.map((team) => (
            <div className="team-card" key={team.id}>
              <h4>{team.name}</h4>
              <p>Stocks Selected: {team.stocks}</p>
              <p>Sector Limit Used: {Object.keys(team.sectorBreakdown).length} sectors</p>

              {isBeforeMarketOpen() ? (
                <>
                  <button onClick={() => handleEdit(team.id)}>✏️ Edit</button>
                  <button onClick={() => handleDelete(team.id)}>🗑️ Delete</button>
                </>
              ) : (
                <p className="locked-text">Edits locked after 9:00 AM</p>
              )}

              {!team.joined && (
                <button className="join-btn" onClick={() => handleJoin(team.id)}>
                  🎯 Join Contest
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyTeams;
