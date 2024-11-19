// src/components/Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Spotify_logo_with_text.svg" alt="Spotify" />
      </div>
      <div className="navbar-links">
        <a href="#music-recommendations">Músicas</a>
        <a href="#playlists">Playlists</a>
        <a href="#profile">Perfil</a>
      </div>
    </nav>
  );
};

export default Navbar;
