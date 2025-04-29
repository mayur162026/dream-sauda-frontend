import React, { useState, useEffect } from 'react';
import './Leaderboard.css';

const todayData = [
  { rank: 1, team: 'BullMasters', score: 94.5, winnings: 150 },
  { rank: 2, team: 'AlphaStorm', score: 89.3, winnings: 70 },
  { rank: 3, team: 'BearSlayers', score: 85.2, winnings: 44 },
  { rank: 4, team: 'StockStorm', score: 81.9, winnings: 0 },
];

const pastData = [
  { rank: 1, team: 'TitanForce', score: 99.1, winnings: 150 },
  { rank: 2, team: 'MoneyMakers', score: 91.7, winnings: 70 },
  { rank: 3, team: 'FinElite', score: 87.6, winnings: 44 },
];

const Leaderboard = () => {
  const [activeTab, setActiveTab] = useState('today');
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(activeTab === 'today' ? todayData : pastData);
  }, [activeTab]);

  return (
    <div className="leaderboard">
      <h3>🏆 Leaderboard</h3>
      <div className="tabs">
        <button
          className={activeTab === 'today' ? 'active' : ''}
          onClick={() => setActiveTab('today')}
        >
          Today’s Contest
        </button>
        <button
          className={activeTab === 'past' ? 'active' : ''}
          onClick={() => setActiveTab('past')}
        >
          Past Winners
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Team Name</th>
            <th>Score</th>
            <th>Winnings (₹)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => (
            <tr
              key={index}
              className={entry.rank <= 3 ? 'top-rank' : ''}
            >
              <td>{entry.rank}</td>
              <td>{entry.team}</td>
              <td>{entry.score}%</td>
              <td>{entry.winnings}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
