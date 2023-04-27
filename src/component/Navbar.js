import React, { useState } from "react";
import "./navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Logo from "./image/Logo.svg";
import Avatar from "./image/avatar.png";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const apiKey = "9e1d34262c59d085124aa1ee3b7065cb";
    const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=fr-FR&query=${searchTerm}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data.results);
      });
  };

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img src={Logo} alt="logo" />
          <span>Accueil</span>
          <span>Séries</span>
          <span>Films</span>
          <span>Nouveautés les plus regardées</span>
          <span>Ma liste</span>
          <span>Explorer par langue</span>
        </div>
        <div className="right">
          <SearchIcon className="icon" onClick={handleSearchClick} />
          <NotificationsIcon className="icon" />
          <img src={Avatar} />
          <div className="profile">
            <ArrowDropDownIcon className="icon"/>
            <div className="options">
              <span> Gérer les profils</span>
              <span>Transferer un profil</span>
              <span>Compte</span>
              <span>Centre d'aide</span>
            </div>
          </div>
          {isSearchOpen && (
            <form className="search-form" onSubmit={handleSearchSubmit}>
              <input
                type="text"
                placeholder="Recherche"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </form>
          )}
          {searchResults.length > 0 && (
            <div className="search-results">
              {searchResults.map((result) => (
                <div key={result.id} className="search-result">
                  <img
                    src={`https://image.tmdb.org/t/p/w92/${result.poster_path}`}
                    alt={result.title}
                  />
                  <span>{result.title}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;