// src/components/Home.js
import React from 'react';
import Navbar from './Navbar';
import MusicRecommendations from './MusicRecommendations';
import Playlists from './Playlists';
import './Home.css';  // Importando o CSS da Home

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <MusicRecommendations />
      <Playlists />
    </div>
  );
};

export default Home;
