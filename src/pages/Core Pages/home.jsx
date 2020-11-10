import React from 'react';
import './../../dist/dist.css';
import Nav from './../../components/Navigation/nav';
import Header from './../../components/Navigation/header';
import HeaderNav from './../../components/Navigation/headerNav';
import {Switch, Route} from 'react-router-dom';
import Ergonomic from './../../components/Ergonomics Functionality/ergonomics';
import Stretches from './../../components/Stretch Functionality/stretches';

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