import React, { useState } from 'react';
import './JoinContestModal.css';

const JoinContestModal = ({ show, onClose, onJoin, contest, teams }) => {
  const [selectedTeamId, setSelectedTeamId] = useState(null);

  if (!show) return null;

  const handleJoin = () => {
    if (selectedTeamId !== null) {
      onJoin(contest.id, selectedTeamId);
      onClose();
    }
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h3>Join Contest</h3>
        <div className="contest-info">
          <p><strong>Type:</strong> {contest.type}</p>
          <p><strong>Entry Fee:</strong> ₹{contest.entryFee}</p>
          <p><strong>Prize Pool:</strong> ₹{contest.prizePool}</p>
          <p><strong>Max Players:</strong> {contest.maxPlayers}</p>
        </div>

        <div className="team-selection">
          <p><strong>Select Your Team:</strong></p>
          {teams.map(team => (
            <label key={team.id} className="team-option">
              <input
                type="radio"
                name="team"
                value={team.id}
                onChange={() => setSelectedTeamId(team.id)}
              />
              {team.name}
            </label>
          ))}
        </div>

        <div className="modal-actions">
          <button onClick={onClose} className="cancel-btn">Cancel</button>
          <button onClick={handleJoin} className="confirm-btn" disabled={!selectedTeamId}>
            Confirm Join
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinContestModal;
