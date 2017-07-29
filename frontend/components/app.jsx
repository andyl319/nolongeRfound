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
          <div className="nav">TEDDY</div>
          <div className="nav">MADDOCKS</div>
          <div className="nav">ANDREW</div>
          <div className="nav">DEL RO</div>
          <div className="nav">RJ</div>
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
