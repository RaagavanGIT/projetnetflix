import React from "react";
import Connexion from "./component/Connexion";
import Homepage from "./component/Homepage";
import MoviePage from "./component/MoviePage";
import Footer from "./component/Footer";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Connexion/>}/>
        <Route path="/Homepage"element={<><Navbar /><Homepage /> <Footer/></>}/>
        <Route path="/movie/:id" element={<MoviePage/> } > </Route>   

      </Routes>
    </div>
  );
}

export default App;

// 