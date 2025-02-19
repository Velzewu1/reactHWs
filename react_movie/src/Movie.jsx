import React, { useState, useEffect } from "react";

function Movie({ movie }) {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const savedFavourites = JSON.parse(localStorage.getItem("favourites")) || [];
    setFavourites(savedFavourites);
  }, []);

  const addToFavourites = () => {
    const updatedFavourites = [...favourites, movie];
    setFavourites(updatedFavourites);
    localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
  };

  return (
    <div className="movie-card">
      <img src={movie.poster} alt={movie.title} />
      <h3>{movie.title} ({movie.year})</h3>
      <button onClick={addToFavourites}>Добавить в избранное</button>
    </div>
  );
}

export default Movie;
