import React from 'react';
import ReactDOM from 'react-dom';
import AlienInvasion from './AlienInvasion';
import Machines from './Machines';
import Zombie from './Zombie';
import { IndexRoute, Router, Route, browserHistory } from "react-router"; //not using this yet
import App from './App';
import './index.css';

ReactDOM.render(
  <Router history={ browserHistory }>
    <Route path='/' component={App}>
      <Route path='/alien' component={AlienInvasion}/>
      <Route path='/zombie' component={Zombie}/>
      <Route path='/machines' component={Machines}/>
    </Route>
  </Router>,

  document.getElementById('root')
);
