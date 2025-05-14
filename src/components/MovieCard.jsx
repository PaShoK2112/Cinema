import React from 'react'; 
import '../styles/MovieCard.css';

const MovieCard = ({ movie }) => (
<div className="movie-card">
<img src={movie.poster} alt={movie.title} />
<h3>{movie.title}</h3>
<p>{movie.description}</p>
<span>Жанр: {movie.genre}</span>
<span>Дата сеансу: {movie.date}</span>
<span>Час: {movie.time}</span>
</div>
);

export default MovieCard;
