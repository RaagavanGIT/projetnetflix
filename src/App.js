import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './Homepage';
import MoviePage from './MoviePage';
import Header from './Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/movie/:id" component={MoviePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
