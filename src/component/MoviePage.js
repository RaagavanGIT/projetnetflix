import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import './MoviePage.css'
import Navbar from "./Navbar";

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
      <Navbar />
      <div className="moviepage">
      <div className="back">
      <Link to="/">Retour à la page d'accueil</Link>
      </div>
      <div className="movie-title">
        <h1>{movie.title}</h1>
      </div>
      <div>
          <img 
          src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
          alt={movie.title}
          />
      </div>
      
      <div className="launcher">
        <button className="lecture">Lecture</button>
        <button className="ba">Bande annonce</button>
        <button className="add"><FontAwesomeIcon icon={faPlus} className="icons" /></button>
        <button className="like"><FontAwesomeIcon icon={faThumbsUp} className="icons" /></button>
      </div>

    <div className="movie-info_moviepage">
      <div className="movie-date">
          <p>Date de sortie : {movie.release_date}</p>
          <p>Langue : {movie.original_language}</p>
          <p>Durée : {movie.runtime} minutes</p>
          <p>Note moyenne des spectateurs : {movie.vote_average} <FontAwesomeIcon icon={faThumbsUp} className="icons" /></p>
          <p>Nombre de vues: {movie.popularity}<i class="fa-solid fa-thumbs-up"></i></p>
      </div>
    </div>

      <div className="movie-genre">
        <h3>Genre :   </h3>
        <p> {movie.genres.map((genre) => genre.name).join(", ")}</p>
      </div>

      <div className="movie-overview">
          <p>{movie.overview}</p>
      </div>
      </div>
    </div>
  );
}

export default MoviePage;
