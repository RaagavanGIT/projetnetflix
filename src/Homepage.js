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
    <div className="homepage-container"> {}
      <div className="homepage-banner_movie">
        {movies.length > 0 && (
            <img
              src={`https://image.tmdb.org/t/p/original${movies[0].backdrop_path}`}
              alt={movies[0].title}
            />
        )}
            <button className='play'>Visionner</button>
            <button className='add_playlist'>Ajouter à ma liste</button>
      </div>
      <div className="movies-grid">
        {movies.map((movie) => (
          <div key={movie.id} className="movie">
            <a href="#" target="_blank"><img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            /> </a>
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Homepage;
