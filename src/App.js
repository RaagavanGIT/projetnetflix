import React from 'react';
import Homepage from './component/Homepage';
import {Header} from './component/Header';
import {Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<><Header/><Homepage/></>} />
        
      </Routes>
    </div>
  );
}

export default App;

// 