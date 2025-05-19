import React from 'react';
import { Link } from 'react-router-dom'; import '../styles/MovieCard.css';

const MovieCard = ({ movie }) => { return (
<div className="movie-card">
<img src={movie.poster} alt={movie.title} />
<h3>{movie.title}</h3>
<p>{movie.description}</p>
<p>Жанр: {movie.genre}</p>
<p>Час сеансу: {movie.time}</p>

<Link to={`/booking/${movie.id}`}>
<button className="book-button">Забронювати</button>
</Link>
</div>
);
};

export default MovieCard;
