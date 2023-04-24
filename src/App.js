import React from "react";
import { Routes, Route } from "react-router-dom";
import SearchResults from "./component/SearchResults";
import Homepage from "./component/Homepage";
import MoviePage from "./component/MoviePage";
import { Header } from "./component/Header";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Header />
              <Homepage />
            </div>
          }
        />
        <Route
          path="/movie/:id"
          element={
            <div>
              <Header />
              <MoviePage />
            </div>
          }
        />
        <Route
          path="/search-results/:searchQuery"
          element={
            <div>
              <Header />
              <SearchResults/>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
