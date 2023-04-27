import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import './MoviePage.css'
import Navbar from "./Navbar";
import Footer from "./Footer";

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
      <div className="movie-page">
      <div className="movie-page_back">
      </div>
      <div className="movie-page_movie-title">
        <h1>{movie.title}</h1>
      </div>
      <div className="movie-page_movie-backdrop">
          <img 
          src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
          alt={movie.title}
          />
      </div>
      
      <div className="movie-page_launcher">
        <button className="movie-page_lecture">Lecture</button>
        <button className="movie-page_ba">Bande annonce</button>
        <button className="movie-page_add"><FontAwesomeIcon icon={faPlus} className="movie-page_icon" /></button>
        <button className="movie-page_like"><FontAwesomeIcon icon={faThumbsUp} className="movie-page_icon" /></button>
      </div>

    <div className="movie-page_movie-info_moviepage">
      <div className="movie-page_movie-date">
          <p>Date de sortie : {movie.release_date}</p>
          <p>Langue : {movie.original_language}</p>
          <p>Durée : {movie.runtime} minutes</p>
          <p>Note moyenne des spectateurs : {movie.vote_average} <FontAwesomeIcon icon={faThumbsUp} className="icons" /></p>
          <p>Nombre de vues: {movie.popularity}<i class="fa-solid fa-thumbs-up"></i></p>
      </div>
    </div>

      <div className="movie-page_movie-genre">
        <h3>Genre :   </h3>
        <p> {movie.genres.map((genre) => genre.name).join(", ")}</p>
      </div>

      <div className="movie-page_movie-overview">
          <p>{movie.overview}</p>
      </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default MoviePage;
