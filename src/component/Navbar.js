import React, { useState } from "react";
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
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img src={Logo} alt="logo" />
        </div>
        <div className="tabs">
            <span>Accueil</span>
            <span>Séries</span>
            <span>Films</span>
            <span>Nouveautés les plus regardées</span>
            <span>Ma liste</span>
            <span>Explorer par langue</span>
          </div>
        <div className="right">
          <SearchIcon className="icon" />
          <NotificationsIcon className="icon" />
          <div classnam="notifications">
            <span></span>
          </div>
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;
