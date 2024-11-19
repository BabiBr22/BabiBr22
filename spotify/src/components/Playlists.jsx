// src/components/Playlists.js
import React from 'react';
import './Playlists.css';

const Playlists = () => {
  const playlists = [
    { id: 1, title: 'Chill Vibes', image: 'https://link-to-image' },
    { id: 2, title: 'Top Hits', image: 'https://link-to-image' },
    { id: 3, title: 'Workout', image: 'https://link-to-image' },
    // Adicione mais playlists conforme necessário
  ];

  return (
    <section id="playlists" className="playlists">
      <h2>Playlists</h2>
      <div className="playlist-list">
        {playlists.map((playlist) => (
          <div key={playlist.id} className="playlist-item">
            <img src={playlist.image} alt={playlist.title} />
            <h3>{playlist.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Playlists;
