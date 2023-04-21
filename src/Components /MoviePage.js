import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

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
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
      />
    </div>
  );
}

export default MoviePage;
