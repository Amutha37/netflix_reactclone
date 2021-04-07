import React, { useState, useEffect } from "react";
import "./Banner.css";
import axios from "axios";
import requests from "./request";

const base_url = "https://image.tmdb.org/t/p/original";
const base_Url = "https://api.themoviedb.org/3";
export default function Row({ title, fetchUrl }) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(
        base_Url + requests.fetchNetflixOriginals
      );

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

  console.log(movie);
  return (
    <header
      className="banner"
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
          <button className="banner_button">Play </button>
          <button className="banner_button">My List </button>
        </div>

        <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  );
}
