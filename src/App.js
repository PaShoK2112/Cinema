import React from 'react';
import MovieList from './components/MovieList'; 
import movies from './data/movies';
import './App.css'

const App = () => { 
  return (
    <div>
      <h1 >Список фільмів</h1>
      <MovieList movies={movies} />
    </div>
);
};


export default App;