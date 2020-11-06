import React, { Component } from "react";
import './../dist/dist.css';

class Countdown extends Component {
  state = {
    timerOn: false,
    timerStart: 0,
    timerTime: 0
  };

  startTimer = () => {
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: this.state.timerTime
    });
    this.timer = setInterval(() => {
      const newTime = this.state.timerTime - 10;
      if (newTime >= 0) {
        this.setState({
          timerTime: newTime
        });
      } else {
        clearInterval(this.timer);
        this.setState({ timerOn: false });
        alert("Countdown ended");
      }
    }, 10);
  };

  stopTimer = () => {
    clearInterval(this.timer);
    this.setState({ timerOn: false });
  };
  resetTimer = () => {
    if (this.state.timerOn === false) {
      this.setState({
        timerTime: this.state.timerStart
      });
    }
  };

  adjustTimer = input => {
    const { timerTime, timerOn } = this.state;
    if (!timerOn) {
       if (input === "incMinutes" && timerTime + 60000 < 216000000) {
        this.setState({ timerTime: timerTime + 60000 });
      } else if (input === "decMinutes" && timerTime - 60000 >= 0) {
        this.setState({ timerTime: timerTime - 60000 });
      } else if (input === "incSeconds" && timerTime + 1000 < 216000000) {
        this.setState({ timerTime: timerTime + 1000 });
      } else if (input === "decSeconds" && timerTime - 1000 >= 0) {
        this.setState({ timerTime: timerTime - 1000 });
      }
    }
  };

  

  render() {
    const { timerTime, timerStart, timerOn } = this.state;
    let seconds = ("0" + (Math.floor((timerTime / 1000) % 60) % 60)).slice(-2);
    let minutes = ("0" + Math.floor((timerTime / 60000) % 60)).slice(-2);
  

    return (
      <div className="Countdown">
        <div className="Countdown-header">

        <div className="circle"> 
          <svg width="300" viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(110,110)">
              <circle r="100" className="e-c-base"/>
                <g transform="rotate(-90)">
                  <circle r="100" className="e-c-progress"/>
                <g id="e-pointer">
                  <circle cx="100" cy="0" r="8" className="e-c-pointer"/>
                </g>
              </g>
            </g>
          </svg> 
        </div>


        </div>

        <div className="Countdown-time">
          {minutes} : {seconds}
        </div>
        
        <div className="Countdown-display">
          <button onClick={() => this.adjustTimer("incMinutes")}>
            &#8679;
          </button>
          <button onClick={() => this.adjustTimer("incSeconds")}>
            &#8679;
          </button>

          <div className="Countdown-label">Minutes : Seconds</div>

          <button onClick={() => this.adjustTimer("decMinutes")}>
            &#8681;
          </button>
          <button onClick={() => this.adjustTimer("decSeconds")}>
            &#8681;
          </button>
        </div>

        <div className="Countdown-buttons">
          {timerOn === false && (timerStart === 0 || timerTime === timerStart) && (
            <button className="Button-start" onClick={this.startTimer}>
              Start
            </button>
          )}
          {timerOn === true && timerTime >= 1000 && (
            <button className="Button-stop" onClick={this.stopTimer}>
              Stop
            </button>
          )}
          {timerOn === false &&
            (timerStart !== 0 && timerStart !== timerTime && timerTime !== 0) && (
              <button className="Button-start" onClick={this.startTimer}>
                Resume
              </button>
            )}

          {(timerOn === false || timerTime < 1000) &&
            (timerStart !== timerTime && timerStart > 0) && (
              <button className="Button-reset" onClick={this.resetTimer}>
                Reset
              </button>
            )}
          </div>
      </div>
    );
  }
}

export default Countdown;