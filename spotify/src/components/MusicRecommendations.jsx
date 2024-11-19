// src/components/MusicRecommendations.js
import React from 'react';
import './MusicRecommendations.css';

const MusicRecommendations = () => {
  const recommendations = [
    { id: 1, title: 'Blinding Lights', artist: 'The Weeknd', image: 'https://link-to-image' },
    { id: 2, title: 'Shape of You', artist: 'Ed Sheeran', image: 'https://link-to-image' },
    { id: 3, title: 'Levitating', artist: 'Dua Lipa', image: 'https://link-to-image' },
    // Adicione mais músicas conforme necessário
  ];

  return (
    <section id="music-recommendations" className="music-recommendations">
      <h2>Músicas Recomendadas</h2>
      <div className="music-list">
        {recommendations.map((music) => (
          <div key={music.id} className="music-item">
            <img src={music.image} alt={music.title} />
            <div className="music-info">
              <h3>{music.title}</h3>
              <p>{music.artist}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MusicRecommendations;
