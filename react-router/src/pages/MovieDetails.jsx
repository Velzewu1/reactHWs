import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const movieData = {
      1: { title: 'Titanic', description: 'Романтическая драма о любви на фоне трагедии легендарного корабля.' },
      2: { title: 'The Godfather', description: 'Эпическая сага о могучей мафиозной семье и их борьбе за власть.' },
      3: { title: 'Pulp Fiction', description: 'Стильный и нестандартный криминальный фильм, повествующий несколько переплетающихся историй.' },
      4: { title: 'Forrest Gump', description: 'История удивительного человека, переживающего судьбоносные моменты американской истории.' },
      5: { title: 'Fight Club', description: 'Темная сатира на потребительское общество, раскрывающая сущность человеческой идентичности.' },
    };

    setMovie(movieData[id]);
  }, [id]);

  if (!movie) {
    return <div>Загружается...</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="movie-details"
    >
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <button onClick={() => navigate(-1)} className="back-button">Назад</button>
    </motion.div>
  );
};

export default MovieDetails;
