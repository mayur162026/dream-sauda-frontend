import React, { useState, useEffect } from 'react';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    users: 0,
    contests: 0,
    revenue: 0,
  });

  const [contests, setContests] = useState([]);
  const [newContest, setNewContest] = useState({
    type: '1 vs 1',
    entryFee: '',
    prizePool: '',
    maxPlayers: 2
  });

  useEffect(() => {
    // TODO: Replace with API calls
    setStats({ users: 120, contests: 15, revenue: 1040 });

    setContests([
      { id: 1, type: '1 vs 1', entryFee: 21, prizePool: 35 },
      { id: 2, type: 'Pool of 3', entryFee: 27, prizePool: 70 }
    ]);
  }, []);

  const handleAddContest = () => {
    const updated = [...contests, { ...newContest, id: contests.length + 1 }];
    setContests(updated);
    // TODO: Send to backend
  };

  return (
    <div className="admin-dashboard">
      <h2>👨‍💼 Admin Panel - Dream SAUDA</h2>

      <div className="summary">
        <div className="summary-box">Users: <strong>{stats.users}</strong></div>
        <div className="summary-box">Contests: <strong>{stats.contests}</strong></div>
        <div className="summary-box">Revenue (₹): <strong>{stats.revenue}</strong></div>
      </div>

      <div className="add-contest">
        <h3>Add New Contest</h3>
        <label>Type:
          <select value={newContest.type} onChange={e => setNewContest({ ...newContest, type: e.target.value })}>
            <option>1 vs 1</option>
            <option>Pool of 3</option>
          </select>
        </label>
        <label>Entry Fee:
          <input type="number" value={newContest.entryFee} onChange={e => setNewContest({ ...newContest, entryFee: e.target.value })} />
        </label>
        <label>Prize Pool:
          <input type="number" value={newContest.prizePool} onChange={e => setNewContest({ ...newContest, prizePool: e.target.value })} />
        </label>
        <button className="add-btn" onClick={handleAddContest}>➕ Add Contest</button>
      </div>

      <div className="contest-list">
        <h3>Active Contests</h3>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Type</th>
              <th>Entry Fee</th>
              <th>Prize Pool</th>
            </tr>
          </thead>
          <tbody>
            {contests.map(c => (
              <tr key={c.id}>
                <td>{c.id}</td>
                <td>{c.type}</td>
                <td>₹{c.entryFee}</td>
                <td>₹{c.prizePool}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
