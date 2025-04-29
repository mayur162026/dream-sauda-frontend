import React, { useState, useEffect } from 'react';
import './AvailableContests.css';

const mockContests = [
  { id: 1, type: "1 vs 1", entryFee: 15, winningAmount: 21, platformFee: 9 },
  { id: 2, type: "1 vs 1", entryFee: 21, winningAmount: 35, platformFee: 9 },
  { id: 3, type: "Pool of 3", entryFee: 27, winningAmount: 70, platformFee: 11 },
  { id: 4, type: "1 vs 1", entryFee: 88, winningAmount: 150, platformFee: 26 },
  { id: 5, type: "Pool of 3", entryFee: 125, winningAmount: 325, platformFee: 50 },
];

const AvailableContests = ({ userHasTeam }) => {
  const [contests, setContests] = useState([]);

  useEffect(() => {
    // Replace with API fetch in real app
    setContests(mockContests);
  }, []);

  const handleJoin = (contestId) => {
    if (!userHasTeam) {
      alert("Please create a team before joining a contest.");
      return;
    }
    // Redirect or open modal to select team and join
    alert(`Joining contest ID ${contestId}`);
  };

  return (
    <div className="available-contests">
      <h3>Available Contests</h3>
      <div className="contest-list">
        {contests.map(contest => (
          <div className="contest-card" key={contest.id}>
            <h4>{contest.type}</h4>
            <p>Entry Fee: ₹{contest.entryFee}</p>
            <p>Winning Amount: ₹{contest.winningAmount}</p>
            <p>Platform Fee: ₹{contest.platformFee}</p>
            <button
              className="join-btn"
              onClick={() => handleJoin(contest.id)}
              disabled={!userHasTeam}
            >
              🎮 Join Contest
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableContests;
