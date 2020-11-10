import React from 'react';
import './../../dist/dist.css';
import Nav from './../../components/Navigation/nav';
import Header from './../../components/Navigation/header'


function Progress() {
  return (
    <div className="progress">
      <Header/>
      
      <img src="/images/progress.svg" className="progressLogo" alt="Progress Icon"/>
      <h1>View Users Progress Here!</h1>

      <Nav/>
    </div>
  );
}

export default Progress;