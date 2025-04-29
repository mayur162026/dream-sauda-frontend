import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
  const [name, setName] = useState('Amit Sharma');
  const [gender, setGender] = useState('Male');
  const [email] = useState('amit@example.com'); // not editable
  const [mobile] = useState('9876543210'); // not editable
  const [editing, setEditing] = useState(false);

  const [stats] = useState({
    contestsPlayed: 18,
    contestsWon: 7,
    totalEarnings: 735,
  });

  const handleSave = () => {
    setEditing(false);
    // Send updated name/gender to backend here
    console.log('Profile updated:', { name, gender });
  };

  return (
    <div className="profile">
      <h3>👤 Profile</h3>

      <div className="profile-section">
        <label>Name:</label>
        {editing ? (
          <input value={name} onChange={(e) => setName(e.target.value)} />
        ) : (
          <p>{name}</p>
        )}

        <label>Gender:</label>
        {editing ? (
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        ) : (
          <p>{gender}</p>
        )}

        <label>Email:</label>
        <p>{email}</p>

        <label>Mobile:</label>
        <p>{mobile}</p>

        {editing ? (
          <button className="save-btn" onClick={handleSave}>Save</button>
        ) : (
          <button className="edit-btn" onClick={() => setEditing(true)}>Edit</button>
        )}
      </div>

      <div className="profile-stats">
        <h4>📊 Stats</h4>
        <div className="stat-box">
          <p>Contests Played</p>
          <h3>{stats.contestsPlayed}</h3>
        </div>
        <div className="stat-box">
          <p>Contests Won</p>
          <h3>{stats.contestsWon}</h3>
        </div>
        <div className="stat-box">
          <p>Total Earnings (₹)</p>
          <h3>{stats.totalEarnings}</h3>
        </div>
      </div>

      <button className="logout-btn">🚪 Logout</button>
    </div>
  );
};

export default Profile;
