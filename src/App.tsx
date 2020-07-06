import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Pokemon from './pages/pokemon';
import Recipe from './pages/Recipe';
import { Navigation } from './components/Navigation'

function App() {
  return (
   <BrowserRouter>
        <Navigation/>
       <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route  path="/About">
            <About />
          </Route>
          <Route  path="/Pokemon">
            <Pokemon />
          </Route>
          <Route  path="/Recipe">
            <Recipe />
          </Route>

        </Switch>
   </BrowserRouter>
  );
}

export default App;
