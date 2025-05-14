import React from 'react';
import MovieList from './components/MovieList'; import movies from './data/movies';

const App = () => { 
  return (
    <div>
      <h1 style={{ textAlign: 'center', color: '#e0e8f3' }}>Список фільмів</h1>
      <MovieList movies={movies} />
    </div>
);
};


export default App;