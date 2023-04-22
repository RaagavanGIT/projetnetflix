import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
      <div className="back">
      <Link to="/">Retour à la page d'accueil</Link>
      </div>
      <div className="movie-title">
        <h1>{movie.title}</h1>
      </div>
      <div>
          <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          />
      </div>
      <div className="launcher">
        <button className="lecture">Lecture</button>
        <button className="add"><i class="fa-solid fa-plus"></i></button>
        <button className="like"><FontAwesomeIcon icon="fa-solid fa-thumbs-up" /></button>
      </div>

    <div className="movie-info">
      
      <div className="movie-date">
          <p>{movie.release_date}</p>
      </div>

      <div className="movie-vote">
          <p>{movie.vote_average}<i class="fa-solid fa-thumbs-up"></i></p>
      </div>
    </div>

    <div className="movie-genre">
        <p> Genre :{movie.genres.map((genre) => genre.name).join(", ")}</p>
      </div>

      <div className="movie-overview">
          <p>{movie.overview}</p>
      </div>

    </div>
  );
}

export default MoviePage;
