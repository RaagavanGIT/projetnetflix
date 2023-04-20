import React from "react";
import './Header.css';
function Header() {
    return (
      <div className="header">
        <div className="logo">
          <img src="https://www.logo.wine/a/logo/Netflix/Netflix-Logo.wine.svg" alt="Netflix logo" />
        </div>
        <div className="tabs">
          <ul>
            <li><a href="#">Accueil</a></li>
            <li><a href="#">Séries</a></li>
            <li><a href="#">Films</a></li>
            <li><a href="#">Nouveautés les plus regardées</a></li>
            <li><a href="#">Ma liste</a></li>
            <li><a href="#">Explorer par langue</a></li>
          </ul>
        </div>
        <div className="profile">
          <img src="https://www.example.com/profile.jpg" alt="Profil" />
        </div>
      </div>
    );
  }
  
  export default Header;