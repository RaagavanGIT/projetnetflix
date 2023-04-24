import React from "react";
import Homepage from "./component/Homepage";
import {Header} from "./component/Header";
import MoviePage from "./component/MoviePage";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";

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
        <Route path="/movie/:id" element={<Navbar />} />
      </Routes>
    </div>
  );
}

export default App;

// 