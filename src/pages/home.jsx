import React from 'react';
import './../dist/dist.css';
import Nav from '../components/nav.jsx';
import Header from '../components/header.jsx';
import HeaderNav from '../components/headerNav.jsx';
import {Switch, Route} from 'react-router-dom';
import Ergonomic from '../components/ergonomics';
import Stretches from '../components/stretches';

function Home() {
  return (
    <div>
      <Header/>
      <HeaderNav/>

      <Switch>
        <Route path= "/home/stretches">
        <Stretches />
        </Route>
        <Route path= "/home/ergonomics">
        <Ergonomic />
        </Route>
      </Switch>

      <Nav />

    </div>
  );
}

export default Home;