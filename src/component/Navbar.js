import React from "react";
import "./navbar.css";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Logo from "./image/Logo.svg";
import Avatar from "./image/avatar.png"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="left">
          <img src={Logo} alt="logo-netflix" style={{height: "25px"}}/>
          <ul>
            <li>Accueil</li>
            <li>Séries</li>
            <li>Films</li>
            <li>Nouveautés les plus regardées</li>
            <li>Ma liste</li>
            <li>Explorer par langue</li>
          </ul>
        </div>
        <div className="right">
          <SearchIcon className="icon" />
          <NotificationsIcon  className="icon"/>
          <img src={Avatar} alt="profile" style={{height: "25px"}}/>
          <div className="profile">
          <ArrowDropDownIcon className="icon"/>
          <div className="options">
             <ul>
                <li>Brontis</li>
                <li>Gérer les profiles</li>
                <li>Transférer un profil</li>
                <li>Compte</li>
                <li>Centre d'aide</li>
             </ul>
          </div>
             
          </div>
        </div>
      </div>
    </div>
  );  
};

export default Navbar; 
