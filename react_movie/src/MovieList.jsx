import React, { useState, useEffect } from "react";

function Movie({ movie }) {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    // Загружаем текущие избранные фильмы из localStorage при монтировании компонента
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

const movieList = [
  { id: 1, title: "Фильм 1", year: 2021, poster: "link-to-poster-1.jpg" },
  { id: 2, title: "Фильм 2", year: 2022, poster: "link-to-poster-2.jpg" },
  { id: 3, title: "Фильм 3", year: 2023, poster: "link-to-poster-3.jpg" }
];

function MovieList() {
  return (
    <div className="movies-container">
      <h1>Список фильмов</h1>
      {movieList.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
