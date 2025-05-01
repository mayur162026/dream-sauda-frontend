import React, { useState, useEffect } from 'react';
import './ContestsList.css';

const mockContests = [
  { id: 1, name: 'Stock Showdown', prize: '₹5000', entryFee: '₹100', startsAt: '2025-05-01 15:00:00' },
  { id: 2, name: 'Market Masters', prize: '₹10000', entryFee: '₹200', startsAt: '2025-05-01 17:00:00' },
];

const ContestsList = () => {
  const [contests, setContests] = useState([]);

  useEffect(() => {
    // Fetch contests from API in a real-world scenario
    setContests(mockContests);
  }, []);

  const handleJoin = (contestId) => {
    alert(`Joining contest with ID: ${contestId}`);
    // TODO: Send request to join contest
  };

  return (
    <div className="contests-list-box">
      <h3>Upcoming Contests</h3>
      {contests.length === 0 ? (
        <p>No contests available. Check back later!</p>
      ) : (
        <div className="contests-list">
          {contests.map((contest) => (
            <div className="contest-card" key={contest.id}>
              <h4>{contest.name}</h4>
              <p>Prize: {contest.prize}</p>
              <p>Entry Fee: {contest.entryFee}</p>
              <p>Starts At: {new Date(contest.startsAt).toLocaleString()}</p>

              <button className="join-btn" onClick={() => handleJoin(contest.id)}>
                🎯 Join Contest
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ContestsList;
