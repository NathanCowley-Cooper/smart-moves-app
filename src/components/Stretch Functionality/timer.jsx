import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import './../../dist/dist.css';


const renderTime = ({ remainingTime }) => {

    if (remainingTime === 0) {
    return <div className="timer">Start Again...</div>;
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
      <div className="timer-wrapper">
        <CountdownCircleTimer
          isPlaying
          duration={30}
          colors={[["#1BA2D9", 0.33], ["#30b9f0", 0.33]]}
          onComplete={() => [true, 1000]}
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>
    </div>
  );
}

export default Timer;