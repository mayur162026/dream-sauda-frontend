import React, { useState, useEffect } from 'react';
import './CreateTeam.css';

const CreateTeam = () => {
  const [isTeamCreationAllowed, setIsTeamCreationAllowed] = useState(false);

  useEffect(() => {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();

    // Allow from 15:30 (3:30PM) to 08:59 (next day)
    const afterMarketClose = currentHour > 15 || (currentHour === 15 && currentMinute >= 30);
    const beforeMarketOpen = currentHour < 9 || (currentHour === 9 && currentMinute === 0);

    setIsTeamCreationAllowed(afterMarketClose || beforeMarketOpen);
  }, []);

  return (
    <div className="create-team-box">
      <h3>Create New Team</h3>
      <p>Select 11 stocks (Max 2 per sector)</p>
      {isTeamCreationAllowed ? (
        <button className="create-team-btn" onClick={() => window.location.href = "/create-team"}>
          ➕ Create Team
        </button>
      ) : (
        <p className="disabled-text">Team creation is allowed only between 3:30 PM and 9:00 AM</p>
      )}
    </div>
  );
};

export default CreateTeam;
