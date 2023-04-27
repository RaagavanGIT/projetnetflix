import react from "react";
import { Link } from "react-router-dom";
import "./Connexion.css";
import Avatar from "./image/avatar.png";
import Avatar2 from "./image/avatar2.jpeg";

function Connexion() {
  return (
    <div className="Connexion-page">

      <div className="connexion">
        <h1>Qui est-ce ?</h1>
      </div>


      <div className="connexion_box">
        <Link to="/Homepage">

          <div className="connexion_profil">
            <img src={Avatar} />
            <h2>Cyrille</h2>
          </div>

        </Link>

        <Link to="/Homepage">

          <div className="connexion_profil">
            <img src={Avatar2} />
            <h2>ErwinTheCat</h2>
          </div>

        </Link>
      </div>

      <div className="connexion_gestion">
        <button>
          <h3>Gérer les profils</h3>
        </button>
      </div>
    </div>
  );
}

export default Connexion;
