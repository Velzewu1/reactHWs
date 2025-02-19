import React, { useState, useEffect } from "react";

function Favourites() {
  const [favourites, setFavourites] = useState([]);

  // Загружаем избранные фильмы при монтировании компонента
  useEffect(() => {
    const savedFavourites = JSON.parse(localStorage.getItem("favourites")) || [];
    setFavourites(savedFavourites);
  }, []);

  const removeFromFavourites = (id) => {
    const updatedFavourites = favourites.filter(movie => movie.id !== id);
    setFavourites(updatedFavourites); // Обновляем состояние
    localStorage.setItem("favourites", JSON.stringify(updatedFavourites)); // Сохраняем в localStorage
  };

  const clearAllFavourites = () => {
    setFavourites([]); // Очищаем состояние
    localStorage.removeItem("favourites"); // Удаляем все избранные из localStorage
  };

  return (
    <div className="movies-container">
      <h1>Избранные фильмы</h1>
      {favourites.length > 0 ? (
        <div>
          <button className="clear-all" onClick={clearAllFavourites}>Очистить все избранное</button>
          {favourites.map(movie => (
            <div key={movie.id} className="movie-card">
              <img src={movie.poster} alt={movie.title} />
              <h3>{movie.title} ({movie.year})</h3>
              <button
                className="remove-btn"
                onClick={() => removeFromFavourites(movie.id)}
              >
                Удалить из избранного
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>У вас нет избранных фильмов</p>
      )}
    </div>
  );
}

export default Favourites;
