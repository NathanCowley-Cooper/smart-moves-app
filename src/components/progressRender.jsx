import React, { useContext, useState, useEffect } from "react";
import "../App.css";
import { UserContext } from "./UserContext";
import { Link } from "react-router-dom";

function ProgressRender() {
  const { user } = useContext(UserContext);

  const list = [];

  const [state, setState] = useState([]);

  useEffect(() => {
    getUserProgress();
  }, [user]);

  const getUserProgress = async () => {
    if (user.progress && user.progress.length > 0) {
      console.log("getting your progress");
      try {
        const url = new URL(
          "https://dsbn3.sse.codesandbox.io/api/destinations"
        );
        const progress = await user.progress;
        const params = await { ids: progress };
        url.search = new URLSearchParams(params).toString();
        const response = await fetch(url);
        const ergonomic = await response.json();
        //console.log(resorts);
        //const results = resorts;
        console.log(destinations);
        destinations.forEach((destination) => {
          //console.log(destination);
          list.push(
            <li key={destination._id}>
              <Link to={`/destinations/${destination._id}/info`}>
                <div className="resort-result">
                  <h5>{destination.title}</h5>
                  <img
                    src={destination.cover_img}
                    alt={destination.title}
                  ></img>
                </div>
              </Link>
            </li>
          );

          setState(list);
          //console.log("list is ", list);
          //this.setState({ list: this.list });
        });
      } catch (e) {
        console.log(e.message);
      }
    }
  };
  return (
    <div>
      <h2>Favs</h2>
      <ul>{state}</ul>
    </div>
  );
}

export default ProgressRender;