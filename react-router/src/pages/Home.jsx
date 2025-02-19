import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const movies = [
  { id: 1, title: 'Titanic' },
  { id: 2, title: 'The Godfather' },
  { id: 3, title: 'Pulp fiction' },
  { id: 4, title: 'Forrest Gump' },
  { id: 5, title: 'Fight club' },
];

const Home = () => {
  return (
    <div className="home-container">
      <h1>Галерея фильмов</h1>
      <ul>
        {movies.map((movie) => (
          <motion.li
            key={movie.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Link to={`/movie/${movie.id}`} className="movie-link">
              {movie.title}
            </Link>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
