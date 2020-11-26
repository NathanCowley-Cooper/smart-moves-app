import React, { useContext } from "react";
import './../../dist/dist.css';
import { UserContext } from "./userContext";

function ProgressBtn(props) {
  const { user } = useContext(UserContext);
  const progressBody = { progress: props.id };
  const addToUsersProgress = () => {
    fetch(`https://smart-moves.herokuapp.com/api/users/${user._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(progressBody)
    })
      .then((res) => {
        // log the response
        //console.log(res);
        // if the response wasn't a success response, show problem notification
        if (res.status !== 200) {
          console.log("problem updating user");
        } else {
          // else (success) show success notification & reload page
          console.log("user updated");
          console.log(res);
        }
      })
      // catch errors
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      {user.authenticated ? (
        <button className="fav-btn" onClick={addToUsersProgress}></button>
      ) : null}
    </div>
  );
}

export default ProgressBtn;
