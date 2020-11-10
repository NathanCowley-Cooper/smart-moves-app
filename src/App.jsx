//Import Page Controllers
import React, { useState, useMemo, useEffect } from "react";
import './dist/dist.css';
import Menu from './pages/Core Pages/menu';
import Home from './pages/Core Pages/home';
import Login from './pages/User Authentication/login.jsx';
import CreateAccount from './pages/User Authentication/createAccount.jsx';
import Splash from './pages/Core Pages/splash';
import Progress from './pages/Core Pages/progress';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StretchWalkthrough from './pages/walkthrough/stretchWalkthrough';
import ErgonomicWalkthrough from './pages/walkthrough/ergonomicWalkthrough';
import DailyStretches from './pages/Page Render Component/dailyStretch';
import OfficeStretches from './pages/Page Render Component/officeStretch';
import { UserContext } from "./components/User Authentication/userContext";
import { User } from "./components/User Authentication/user";
import ErgonomicPage from "./pages/Page Render Component/ergonomicPage";
import StretchDailyPage from "./pages/Page Render Component/stretchDailyPage";
import StretchOfficePage from "./pages/Page Render Component/stretchDailyPage";

import HamstringTimerPage from "./pages/Timer Pages/hamstringTimer";
import SeatForwardTimerPage from "./pages/Timer Pages/seatForwardTimer";
import TricepTimerPage from "./pages/Timer Pages/tricepTimer";
import ShoulderTimerPage from "./pages/Timer Pages/shoulderTimer";

import ShrugTimerPage from "./pages/Timer Pages/shrugTimer";
import BehindHeadTimerPage from "./pages/Timer Pages/behindHeadTimer";
import SideBendsTimerPage from "./pages/Timer Pages/sideBendsTimer";
import BackwardReachTimerPage from "./pages/Timer Pages/backwardReachTimer";

import ErgVideoPage from "./pages/Page Render Component/ErgVideoPage";

//Notifications
//React Notification
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';

function App() {
  const [user, setUser] = useState(User.props);

  const providerUser = useMemo(() => ({ user, setUser }), [user, setUser]);
  // Check User has Loacl Token
  useEffect(() => {
    if (localStorage.getItem("token")) {
      fetch("http://localhost:8081/api/auth/validate", {
        headers: { Authorization: `Bearer ${localStorage.token}` }
      })
        .then((res) => {
          if (res.status !== 200) {
            localStorage.removeItem("token");
            setUser(User.props);
            console.log("token not valid");
          } else {
            res.json().then((res) => {
              console.log("User Authenticated");
              const userData = {
                _id: res.user._id,
                first_name: res.user.first_name,
                email: res.user.email,
                authenticated: true
              };
              //console.log(userData);
              setUser(userData);
            });
          }
        })
        .catch((err) => {
          console.log(err.message);
        });
    } else {
      console.log("No local token, please sign in");
    }
  }, []);
  
  return (
    //React App Router Control
    <Router>
      <UserContext.Provider value={providerUser}>
        <div className="App">
            <Switch>
            <Route path="/" exact component={Splash} />
            <Route path="/login" exact component ={Login} />
            <Route path="/createAccount" exact component ={CreateAccount} />
            <Route path="/home" component={Home} />
            <Route path="/menu" exact component ={Menu} />
            <Route path="/progress" exact component ={Progress} />
            <Route path="/ergonomics/:id/info" exact component ={ErgonomicPage} />
            <Route path="/routines/dailystretches/:id/info" exact component ={StretchDailyPage} />
            <Route path="/routines/officestretches/:id/info" exact component ={StretchOfficePage} />
            <Route path="/stretchWalkthrough" exact component ={StretchWalkthrough} />
            <Route path="/ergonomicWalkthrough" exact component ={ErgonomicWalkthrough} />
            <Route path="/routines/5f605b719258f504a4067ad0/info" exact component ={DailyStretches} />
            <Route path="/routines/5f89a323b3f43055f41a4635/info" exact component ={OfficeStretches} />
            
            <Route path="/routines/dailystretches/5f605c919258f504a4067ad1/timer" exact component ={HamstringTimerPage} />
            <Route path="/routines/dailystretches/5f8ea80462025a600cfa4fb7/timer" exact component ={SeatForwardTimerPage} />
            <Route path="/routines/dailystretches/5f8ea8a562025a600cfa4fb8/timer" exact component ={TricepTimerPage} />
            <Route path="/routines/dailystretches/5f8ea96662025a600cfa4fba/timer" exact component ={ShoulderTimerPage} />

            <Route path="/routines/officestretches/5f605c919258f504a4067ad1/timer" exact component ={ShrugTimerPage} />
            <Route path="/routines/officestretches/5f90436a62025a600cfa4fbb/timer" exact component ={BehindHeadTimerPage} />
            <Route path="/routines/officestretches/5f9043dd62025a600cfa4fbc/timer" exact component ={SideBendsTimerPage} />
            <Route path="/routines/officestretches/5f9044a962025a600cfa4fbd/timer" exact component ={BackwardReachTimerPage} />

            <Route path="/ergonomics/:id/video" exact component ={ErgVideoPage} />

            </Switch>
        </div>
      </UserContext.Provider>
      <NotificationContainer />
    </Router>
  );
}

// Export App Component
export default App;
