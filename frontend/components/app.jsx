import React from 'react';
import { Link } from 'react-router';
import PlayerContainer from './player/player_container';

const App = ({ children }) => (
  <div>
    <div>
      <div className="header">
        <Link to="/" className="logo">SP@CE ELEPHANT</Link>
        <div className="link-container">
          <Link to="/albums" className="header-link">ALBUMS</Link>
          <Link to="/all-tracks" className="header-link">ALL SONGS</Link>
        </div>
      </div>
      <div className="splash-container">
        <div className="splash">
          THE OFFICIAL SITE OF SP@CE ELEPHANT
        </div>
      </div>
      <div className="navbar-container">
        <div className="navbar">
          <Link to="/entourage/1" className="nav">TEDDY</Link>
          <Link to="/entourage/2" className="nav">MADDOCKS</Link>
          <Link to="/entourage/3" className="nav">ANDREW</Link>
          <Link to="/entourage/4" className="nav">DEL RO</Link>
          <Link to="/entourage/5" className="nav">RJ</Link>
        </div>
      </div>
    </div>
    <PlayerContainer />
    <div className="app-background">
      {children}
    </div>

  </div>
);

export default App;
