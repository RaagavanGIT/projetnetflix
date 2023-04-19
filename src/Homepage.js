import React, { useState, useEffect } from 'react';
import './Homepage.css';

function Homepage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const apiKey = '9e1d34262c59d085124aa1ee3b7065cb';
    const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=fr-FR`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  }, []);

  return (
    <div className="homepage-container"> {/* Ajoutez ce conteneur englobant */}
      <h1>Page d'accueil</h1>
      <div className="movies-grid">
        {movies.map((movie) => (
          <div key={movie.id} className="movie">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Homepage;
