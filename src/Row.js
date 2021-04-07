import React, { useState, useEffect } from "react";
// with default in axios
import axios from "axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original";
const base_Url = "https://api.themoviedb.org/3";
export default function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(base_Url + fetchUrl);
      setMovies(request.data.results);
      // console.log(request.data.results);
      return request;
    }
    fetchData();
    // run [], run once when the row loads, and dont run again.
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  // check if the trainlerUrl is already open then close it
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.title)
        .then((url) => {
          // https://www.youtube.com/watch?v=XtMThy8QKqU
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };
  // console.log(movies);
  return (
    <div>
      <h2>{title}</h2>
      <div className="row_posters">
        {/* several row of movies */}
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            // use conditional setting for which class name to use for specific type of image
            className={`row_poster ${isLargeRow && "row_posterLarger"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}
