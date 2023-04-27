Projet Netflix

Ce projet est un clone de l'interface utilisateur de Netflix, réalisé en utilisant React et l'API de The Movie Database.


Fonctionnalités

Affichage des films et des séries les plus populaires à l'écran d'accueil
Recherche de films et de séries par titre
Page de détails pour chaque film ou série, avec informations sur le casting, la bande-annonce et les recommandations de films connexes
Ajout de films et de séries à une liste personnelle
Navigation entre les différentes pages de l'application


Technologies utilisées

React
React Router
CSS
The Movie Database API


Installation

- Clonez le repository sur votre ordinateur : git clone https://github.com/RaagavanGIT/projetnetflix.git
- Ouvrez le terminal à la racine du projet et tapez : npm install pour installer les dépendances.
- Pour lancer l'application en mode développement, tapez npm start.
- Ouvrez votre navigateur et accédez à l'URL http://localhost:3000.


Configuration de l'API

- L'application utilise l'API de The Movie Database pour récupérer les informations sur les films et les séries. Pour utiliser cette API, vous devez créer un compte gratuit sur le site de The Movie Database et générer une clé API. Ensuite, créez un fichier .env à la racine du projet et ajoutez la clé API comme suit :

makefile
Copy code
REACT_APP_TMDB_API_KEY = votre_clé_api
Contribuer


Crédits

Ce projet a été réalisé par Raagavan, Maxime (TheKyyn) et Avidan. Les images et les informations sur les films et les séries sont fournies par The Movie Database.
