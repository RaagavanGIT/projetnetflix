import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import './MoviePage.css'

function MoviePage(props) {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=9e1d34262c59d085124aa1ee3b7065cb&language=fr-FR`
      );
      const data = await response.json();
      setMovie(data);
    };
    fetchMovie();
  }, [id]);

  if (!movie) {
    return <div>Chargement...</div>;
  }

  return (
    <div>

      <Link to="/">Retour à la page d'accueil</Link>
      <div className="movie-title">
        <h1>{movie.title}</h1>
      </div>
      <div>
          <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          />
      </div>
      <div className="movie-genre">
        <p>{movie.genres.map((genre) => genre.name).join(", ")}</p>
      </div>
      <div className="launcher">
        <button className="play">Play</button>
        <button className="add">+</button>
        <button className="like">OK</button>
      </div>

      <div className="movie-date">
          <p>{movie.release_date}</p>
      </div>

      <div className="movie-vote">
          <p>{movie.vote_average}</p>
      </div>

      <div className="movie-overview">
          <p>{movie.overview}</p>
      </div>

    </div>
  );
}

export default MoviePage;
