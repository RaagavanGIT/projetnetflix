import React from "react";
import "./Footer.css"


function Footer() {
    return (
        <div>
            <div className="footer">
                <div className="footer_content">
                    <div className="column1">
                        <p>Audiodescription</p>
                        <p>Relations Investisseurs</p>
                        <p>Confidentialité</p>
                        <p>Nous contacter</p>
                    </div>
                    <div className="column2">
                        <p>Centre d'aide</p>
                        <p>Recrutement</p>
                        <p>Informations légales</p>
                    </div>
                    <div className="column3">
                        <p>Cartes cadeaux</p>
                        <p>Boutique </p>
                        <p>Préférences de cookies</p>
                    </div>
                    <div className="column4">
                        <p>Presse</p>
                        <p>Conditions d'utilisation</p>
                        <p>Cookie Preferences</p>
                        <p>Mentions légales</p>
                    </div>
                </div>
                <div className="footer_btn">
                    <button>
                        <h3>Code de service</h3>
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Footer;
