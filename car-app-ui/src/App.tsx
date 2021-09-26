import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Menu } from "antd"
import './App.css';
import Home from './pages/Home'
import Cars from './pages/Cars'

function App() {

  return (
    <Router>
      <Menu mode="horizontal" theme="dark">
        <Menu.Item>
          CarZNow
        </Menu.Item>
      </Menu>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/cars/:companyId" exact>
          <Cars />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
