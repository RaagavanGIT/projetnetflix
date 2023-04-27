import react from "react";
import { Link } from "react-router-dom";
import "./Connexion.css";
import Avatar from "./image/avatar.png";
import Avatar2 from "./image/avatar2.jpeg";

function Connexion() {
  return (
    <div>
    <div className="connexion-page">

      <div className="connexion_title">
        <h1>Qui est-ce ?</h1>
      </div>


      <div className="connexion_box">

          <div className="connexion_profil">
            <Link to="/Homepage">
            <img src={Avatar} />
            <h2>Cyrille</h2>
            </Link>
          </div>

          <div className="connexion_profil">
            <Link to="/Homepage">
            <img src={Avatar2} />
            <h2>ErwinTheCat</h2>
            </Link>
          </div>

      </div>

      <div className="connexion_gestion">
        <button>
          <h3>Gérer les profils</h3>
        </button>
      </div>
    </div>
    </div>
  );
}

export default Connexion;
