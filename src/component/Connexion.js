import react from 'react';
import { Link } from 'react-router-dom';
import './Connexion.css';


function Connexion() {
    return (
        <div>
            <div className="connexion">
                <h1>Qui est-ce ?</h1>
            </div>
            <div className="box">
                <Link to ="/Homepage">
                < div className="profil">
                    <img src='src/component/cyrille-banovski.jpeg'alt="Cyrille Banovski"></img>
                    <h2>Cyrille</h2>
                </div>
                </Link>
                <Link to ="/Homepage">
                < div className="profil">
                    <img src='src/component/Brontis-Guilloux.jpeg'alt="Brontis Guilloux"></img>
                    <h2>ErwinTheCat</h2>
                </div>
                </Link>
                </div>
            <div className="gestion">
                <button>
                    <h3>Gérer les profils</h3>
                </button>
            </div>
        </div>
    )
}

export default Connexion