import React from 'react';
import MovieList from '../components/MovieList'; import movies from '../data/movies';

const Home = () => { return (
<div className="page-container">
<h1 className="page-title">Список фільмів</h1>
<MovieList movies={movies} />
</div>
);
};

export default Home;
