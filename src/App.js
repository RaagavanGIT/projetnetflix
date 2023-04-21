import React from "react";
import Homepage from "/Users/maximetheophilos/projetnetflix/src/Components /Homepage.js";
import Header from "/Users/maximetheophilos/projetnetflix/src/Components /Header.js";
import MoviePage from "/Users/maximetheophilos/projetnetflix/src/Components /MoviePage.js";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Homepage />
            </>
          }
        />
        <Route path="/movie/:id" element={<MoviePage />} />
      </Routes>
    </div>
  );
}

export default App;

// 