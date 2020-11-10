import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import './../../dist/dist.css';
import Nav from './../../components/Navigation/nav';
import Header from './../../components/Navigation/header';


const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return <div className="timer">Too lale...</div>;
  }

  return (
    <div className="timer">
      <div className="text">Remaining</div>
      <div className="value">{remainingTime}</div>
      <div className="text">seconds</div>
    </div>
    );
  };

function Timer() {
  
  return (
    <div className="timer">
      <Header/>
      
      <div className="timerBlock">

      <div className="timer-wrapper">
        <CountdownCircleTimer
          isPlaying
          duration={30}
          colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
          onComplete={() => [true, 1000]}
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>

      </div>
      
      <Nav/>
    </div>
  );
}

export default Timer;