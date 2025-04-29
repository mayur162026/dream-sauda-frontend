import React from 'react';
import SummaryCard from './SummaryCard';
import CreateTeam from './CreateTeam';
import MyTeams from './MyTeams';
import ContestsList from './ContestsList';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h2>Welcome, [UserName] 👋</h2>
        <button className="profile-btn">My Profile</button>
      </header>

      <section className="summary-section">
        <SummaryCard title="Total Contests" value="18" />
        <SummaryCard title="Total Winnings" value="₹2,150" />
        <SummaryCard title="Wallet Balance" value="₹320" />
      </section>

      <CreateTeam />

      <MyTeams />

      <ContestsList />
    </div>
  );
};

export default Dashboard;
