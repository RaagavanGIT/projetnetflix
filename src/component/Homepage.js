import React, { useState, useEffect } from 'react';
import './Homepage.css';
import { Link } from 'react-router-dom';

function Homepage() {
  const [movies, setMovies] = useState([]);
  const [randomMovie, setRandomMovie] = useState(null);

  useEffect(() => {
    const apiKey = '9e1d34262c59d085124aa1ee3b7065cb';
    const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=fr-FR`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
        const randomIndex = Math.floor(Math.random() * data.results.length);
        setRandomMovie(data.results[randomIndex]);
      });
  }, []);

  const handleRefresh = () => {
    const randomIndex = Math.floor(Math.random() * movies.length);
    setRandomMovie(movies[randomIndex]);
  };

  return (
    <div className="homepage-container">
      <div className="homepage-banner_movie">
        {randomMovie && (
          <img
            src={'https://image.tmdb.org/t/p/original' + randomMovie.backdrop_path}
            alt={randomMovie.title}
          />
        )}
        <div className='button-container'>
        <button className='play'>Visionner</button>
        <button className='add_playlist'>Ajouter à ma liste</button>
        </div>
      </div>
      <div className='categories-name'>
        <h1>Films les plus récents :</h1>
      </div>
      <div className="movies-grid">
        {movies.map((movie) => (
          <div key={movie.id} className="movie">
            <Link to={`/movie/${movie.id}`}><img
              src={'https://image.tmdb.org/t/p/w500' + movie.poster_path}
              alt={movie.title}
            /></Link>
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Homepage;
