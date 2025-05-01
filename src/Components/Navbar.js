import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '12px', background: '#282c34', color: 'white' }}>
      <NavLink to="/dashboard" style={{ margin: '10px', color: 'white' }}>Dashboard</NavLink>
      <NavLink to="/create-team" style={{ margin: '10px', color: 'white' }}>Create Team</NavLink>
      <NavLink to="/my-teams" style={{ margin: '10px', color: 'white' }}>My Teams</NavLink>
      <NavLink to="/join-contest" style={{ margin: '10px', color: 'white' }}>Join Contest</NavLink>
      <NavLink to="/wallet" style={{ margin: '10px', color: 'white' }}>Wallet</NavLink>
      <NavLink to="/leaderboard" style={{ margin: '10px', color: 'white' }}>Leaderboard</NavLink>
    </nav>
  );
};

export default Navbar;
