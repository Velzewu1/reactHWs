import React from "react";
import MovieList from "./MovieList"; 
import Favourites from "./Favourites";

function App() {
  return (
    <div className="App">
      <h1>Добро пожаловать в наш кинотеатр</h1>

      <MovieList />

      <Favourites />
    </div>
  );
}

export default App;
