//Import Components
import React from 'react';
import './../../dist/dist.css';
import Nav from './../../components/Navigation/nav';
import Header from './../../components/Navigation/header'

// Render Progress Page
function Progress() {
  return (
    <div className="progress">
      {/* Render Header */}
      <Header/>
      
      <img src="/images/progress.svg" className="progressLogo" alt="Progress Icon"/>
      <h1>View Users Progress Here!</h1>

      {/* Render Nav */}
      <Nav/>
    </div>
  );
}

//Export Page Controller
export default Progress;