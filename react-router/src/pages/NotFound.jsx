import React from 'react';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="not-found"
    >
      <h2>Ошибка 404: Страница не найдена</h2>
    </motion.div>
  );
};

export default NotFound;
