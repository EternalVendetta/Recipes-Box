import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

// React-router-dom Imports
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// My Components
import App from './App';
import Connexion from './Components/Connexion';
import NotFound from './Components/NotFound';


const Root = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Connexion} />
      <Route path='/pseudo/:pseudo' component={App} />
      <Route component={NotFound} />
    </Switch>
  </Router>
)


ReactDOM.render(<Root/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
