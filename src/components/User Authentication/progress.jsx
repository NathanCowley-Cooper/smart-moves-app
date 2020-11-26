import React, { useContext, useState, useEffect } from "react";
import './../../dist/dist.css';
import { UserContext } from "./userContext";

function UsersProgress() {
  const { user } = useContext(UserContext);



  useEffect(() => {
    const getErgProgress = async () => {
    if (user.progress && user.progress.length > 0) {
      console.log("getting users progress");
      try {
        const url = new URL(
          "https://smart-moves.herokuapp.com/api/ergonomics"
        );
        const progressIds = await user.progress;
        const params = await { ids: progressIds };
        url.search = new URLSearchParams(params).toString();
        const response = await fetch(url);
        const ergonomics = await response.json();

        console.log(ergonomics);
        ergonomics.forEach((ergonomic) => {
          list.push(
            <li key={ergonomic._id}>
                <div className="progress-result">
                <h5>{ergonomic.ergonomic_name}</h5>
                </div>
            </li>
          );

          setState(list);
        });
      } catch (e) {
        console.log(e.message);
      }
    }
  };
    getErgProgress();
    
  }, [user]);

  const list = [];

  const [state, setState] = useState([]);

  return (
    <div>
      <ul>{state}</ul>
    </div>
  );
}

export default UsersProgress;
