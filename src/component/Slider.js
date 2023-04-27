import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Slider.css";

const withMovieSlider = (genre) => {
  return () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
      fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${"9e1d34262c59d085124aa1ee3b7065cb"}&sort_by=popularity.desc&with_genres=${genre}`)
        .then((response) => response.json())
        .then((data) => setMovies(data.results));
    }, [genre]);

    const [x, setX] = useState(0);

    const goLeft = () => {
      if (x === 0) {
        setX(-100 * (movies.length - 4));
      } else {
        setX(x + 100);
      }
    };

    const goRight = () => {
      if (x === -100 * (movies.length - 4)) {
        setX(0);
      } else {
        setX(x - 100);
      }
    };

    // Remplace les numéros de genre de TMDb par leur nom correspondant en français
    let genreName;
    switch (genre) {
      case "28":
        genreName = "Action";
        break;
      case "27":
        genreName = "Horreur";
        break;
      case "16":
        genreName = "Animation";
        break;
      default:
        genreName = "Autre";
    }

    return (
      <div className="movie-slider">
        <h2>{genreName}</h2>
        <div className="movie-slider-container">
          {movies.map((movie) => (
            <div key={movie.id} className="movie-card" style={{ transform: `translateX(${x}%)` }}>
              <Link to={`/movie/${movie.id}`}>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
              </Link>
              <h3>{movie.title}</h3>
            </div>
          ))}
        </div>
      </div>
    );
  };
};

// Utilise les noms de genres en français pour créer les composants de slider
const ActionMovieSlider = withMovieSlider("28"); // Action
const HorrorMovieSlider = withMovieSlider("27"); // Horreur
const AnimationMovieSlider = withMovieSlider("16"); // Animation

function App() {
  return (
    <div>
      <ActionMovieSlider />
      <HorrorMovieSlider />
      <AnimationMovieSlider />
    </div>
  );
}

export default App;
