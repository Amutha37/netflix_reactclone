import React, { useState, useEffect } from "react";
import "./Banner.css";
import axios from "axios";
import requests from "./request";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original";
const base_Url = "https://api.themoviedb.org/3";
export default function Row({ title, fetchUrl }) {
  const [movie, setMovie] = useState([]);
  const [trailerUrll, setTrailerUrll] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(base_Url + requests.fetchTopRated);

      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    };
    fetchData();
  }, [fetchUrl]);
  // run [], run once when the row loads, and dont run again.
  // `url(${require("./resources/img/banners/3.jpg")})`
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 7) + "..." : str;
  };

  // movie play

  const handleClick = (movie) => {
    if (trailerUrll) {
      setTrailerUrll("");
    } else {
      movieTrailer(movie?.name || movie?.title)
        .then((url) => {
          // https://www.youtube.com/watch?v=XtMThy8QKqU
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrll(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  const handleClicked = (movie) => {
    return setTrailerUrll("");
  };
  const opts = {
    height: "448",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  // console.log(movie);
  return (
    <header>
      {!trailerUrll && (
        <div
          className="banner banner--top"
          style={{
            backgroundImage: `url("${base_url}${movie?.backdrop_path}")`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="banner_contents">
            <h1 className="banner_title">
              {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <div className="banner_buttons">
              <button
                className="banner_button"
                onClick={() => handleClick(movie)}
              >
                Play{" "}
              </button>
              <button className="banner_button">My List </button>
            </div>

            <h1 className="banner_description">
              {truncate(movie?.overview, 150)}
            </h1>
          </div>
          <div className="banner--fadeBottom"></div>
        </div>
      )}

      <div className="banner_buttons">
        {trailerUrll && (
          <div>
            <YouTube videoId={trailerUrll} opts={opts} />
            {
              <button
                className="banner_buttonn"
                onClick={() => handleClicked(movie)}
              >
                Stop
              </button>
            }
          </div>
        )}
      </div>
    </header>
  );
}
