import React, { useEffect, useState } from "react";
import './../../dist/dist.css';
import { Link } from "react-router-dom";

function ErgVideoPage({ match }) {
  useEffect(() => {
    console.log("match is", match.params.id);
    const getErgonomicAdj = () => {
      //return a promise
      //fetch ergonomic.json
      fetch(
        `https://smart-moves.herokuapp.com/api/ergonomics/${match.params.id}`
      )
        .then((res) => res.json())
        .then((ergonomic) => {
          setResult(ergonomic);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getErgonomicAdj();
  }, [match]);

  const [result, setResult] = useState({});


  useEffect(() => {
    if (!result.video_url) {
      return
    }
    const ErgVideo = () => {
      fetch(`https://youtube-rest-api.p.rapidapi.com/video?id=${result.video_url}`, {
        "method": "GET",
        "headers": {
          "cookie": "login-cookie",
          "x-rapidapi-key": "8a088421f8mshf78f99ada68b34ap197056jsndd8496e2282b",
          "x-rapidapi-host": "youtube-rest-api.p.rapidapi.com"
        }
      })
      .then((res) => res.json())
          .then((ergVideo) => {
            console.log(ergVideo);
            setVideoResult(ergVideo);
          })
      .catch(err => {
        console.error(err);
      });
    };
      ErgVideo();
    }, [result.video_url])

  const [videoResult, setVideoResult] = useState({});
    

  

  return (
    <div className="ergonomicPage">
      <Link to={`/ergonomics/${result._id}/info`}>
        <img
          src="/images/back.png"
          className="backButtonTwo"
          alt="Back Button"
        />
      </Link>

      <div className="headerImage">
        <img
          src={result.cover_image}
          className="ergonomicImage"
          alt="Adjustment"
        />
        <h1>{result.ergonomic_name}</h1>

        <div className="youtubeVideo">
          <a href= {`https://www.youtube.com/watch?v=${videoResult.videoId}`} className="youtubeLink" style={{textDecoration: 'none'}}>
          
            { videoResult.thumbnails ?
            <img
              src={videoResult.thumbnails[videoResult.thumbnails.length - 1].url}
              className="videoThumbnail"
              alt="Video Thumbnail"
            />
            : <i
            className="fas fa-spinner fa-pulse large"
            style={{ color: "#1BA2D9"}}
            />}
            <h4>{videoResult.title}</h4>
            <p>Tap to View Video</p>

          </a>
        </div>

        


      </div>
    </div>
  );
}

export default ErgVideoPage;
