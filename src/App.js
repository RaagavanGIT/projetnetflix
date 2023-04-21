import React from 'react';
import Homepage from './Homepage';
import Header from './Components/Header.js';
import { BrowserRouter, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header />
      <Homepage />
    </div>
  );
}

export default App;
