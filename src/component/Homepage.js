import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import "./Homepage.css";
import Slider from './Slider'

function Homepage() {
  const [movies, setMovies] = useState([]);
  const [randomMovie, setRandomMovie] = useState(null);

  useEffect(() => {
    const apiKey = "9e1d34262c59d085124aa1ee3b7065cb";
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
            src={
              "https://image.tmdb.org/t/p/original" + randomMovie.backdrop_path
            }
            alt={randomMovie.title}
          />
        )}
        <div className="homepage_movie-info">
          <div className="homepage_movie_title_homepage">
            {randomMovie && (
              <>
                <h1>{randomMovie.title}</h1>
                <p>{randomMovie.overview}</p>
              </>
            )}
          </div>
          <div className="homepage_button-container">
            <button className="homepage_play">Visionner</button>
            <button className="homepage_add_playlist">
              <FontAwesomeIcon
                icon={faInfoCircle}
                style={{ background: "transparent" }}
              />{" "}
              Plus d'infos
            </button>
          </div>
        </div>
      </div>
      <Slider></Slider>
    </div>
  );
}

export default Homepage;
