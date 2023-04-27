import React from "react";
import Connexion from "./component/Connexion";
import Homepage from "./component/Homepage";
import {Header} from "./component/Header";
import MoviePage from "./component/MoviePage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Connexion />} />
        <Route path="/Homepage"element={<><Header /><Homepage /> </>}/>
        <Route path="/movie/:id" element={<MoviePage />} />
      </Routes>
    </div>
  );
}

export default App;

// 