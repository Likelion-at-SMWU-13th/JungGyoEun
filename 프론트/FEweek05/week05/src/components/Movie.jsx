import React, { useState, useEffect } from "react";
import axios from "axios";

const Movie = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/movies")
      .then((res) => {
        const actionMovies = res.data.filter((movie) => movie.genre === "액션");
        setMovies(actionMovies);
      })
      .catch((err) => {
        console.error("에러 발생:", err);
      });
  }, []);

  return (
    <div>
      <h3>무비차트</h3>
      <div>
        {movies.map((movie) => (
          <div key={movie.id}>
            <img src={movie.poster} alt={movie.title} />
            <div>
              <h2>{movie.title}</h2>
              <p>⭐️ {movie.rating}</p>
              <p>{movie.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movie;
