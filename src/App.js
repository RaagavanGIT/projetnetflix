import React from "react";
import Connexion from "./component/Connexion";
import Homepage from "./component/Homepage";
import MoviePage from "./component/MoviePage";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Homepage" element={<Connexion/>} /> <Route
          path="/"
          element={
            <>
              <Navbar />
              <Homepage />
            </>
          }
        />
        <Route path="/movie/:id" element={<MoviePage />}>
          {" "}
        </Route>
      </Routes>
    </div>
  );
}

export default App;

//
