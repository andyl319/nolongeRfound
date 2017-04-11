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
          THE OFFICIAL SITE OF TEDDY HONTIVEROS
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
