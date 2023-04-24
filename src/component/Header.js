import React, { useState } from "react";
import "./Header.css";

export function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchInput = (event) => {
    const value = event.target.value;
    setSearchQuery(value);

    if (value === "") {
      setSearchResults([]);
      return;
    }

    setTimeout(() => {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=9e1d34262c59d085124aa1ee3b7065cb&query=${searchQuery}`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.results && data.results.length > 0) {
            setSearchResults(data.results.slice(0, 10));
          } else {
            setSearchResults([]);
          }
        });
    }, 500);
  };

  return (
    <div className="header">
      <div className="logo">
        <img
          src="https://www.logo.wine/a/logo/Netflix/Netflix-Logo.wine.svg"
          alt="Netflix logo"
        />
      </div>
      <div className="tabs">
        <ul>
          <li>
            <a href="#">Accueil</a>
          </li>
          <li>
            <a href="#">Séries</a>
          </li>
          <li>
            <a href="#">Films</a>
          </li>
          <li>
            <a href="#">Nouveautés les plus regardées</a>
          </li>
          <li>
            <a href="#">Ma liste</a>
          </li>
          <li>
            <a href="#">Explorer par langue</a>
          </li>
        </ul>
      </div>
      <div className="profile">
        <div className="search-box">
          <form>
            <input
              type="text"
              placeholder="Recherche..."
              className="search-input"
              value={searchQuery}
              onChange={handleSearchInput}
            />
            <button type="submit" className="search-button">
              Valider
            </button>
          </form>
        </div>
        <div className="search-results">
          {searchResults.length > 0 ? (
            <ul>
              {searchResults.map((result) => (
                <li key={result.id}>{result.title}</li>
              ))}
            </ul>
          ) : (
            <p>
              {searchQuery &&
                `Aucun film ne correspond à votre recherche "${searchQuery}".`}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
