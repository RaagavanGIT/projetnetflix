import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Logo from "./image/Logo.svg";
import Avatar from "./image/avatar.png";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


const Navbar = () => {
  const[isScrolled, setIsScrolled] = useState(false);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true)
    return () => (window.onscroll = null);
  }
  return (
    <div className= "navbar">
      <div className="navbar_container">
        <div className="navbar_left">
          <img src={Logo} alt="logo" />
        </div>
        <div class="navbar_nav-tabs">
          <Link to="/Homepage"> <span>Accueil</span> </Link>
          <span>Séries</span>
          <span>Films</span>
          <span>Nouveautés les plus regardées</span>
          <span>Ma liste</span>
          <span>Explorer par langue</span>
          <span class="navbar_nav-toggle">Parcourir</span>
          <div class="navbar_nav-dropdown">
            <span>Accueil</span>
            <span>Séries</span>
            <span>Films</span>
            <span>Nouveautés les plus regardées</span>
            <span>Ma liste</span>
            <span>Explorer par langue</span>
          </div>
        </div>
        <div className="navbar_right">
          <SearchIcon className="navbar_icon" />
          <NotificationsIcon className="navbar_icon" />
          <div classnam="navbar_notifications">
            <span></span>
          </div>
          <img src={Avatar} />
          <div className="navbar_profile">
            <ArrowDropDownIcon className="navbar_icon"/>
            <div className="navbar_options">
              <span> Gérer les profils</span>
              <span>Transferer un profil</span>
              <span>Compte</span>
              <span>Centre d'aide</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
