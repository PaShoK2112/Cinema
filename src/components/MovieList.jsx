import React, { useState } from 'react'; 
import MovieCard from './MovieCard'; 
import '../styles/MovieList.css';

const MovieList = ({ movies }) => { 
const [query, setQuery] = useState("");

const filtered = movies.filter(movie =>
    movie.title.toLowerCase().includes(query.toLowerCase())
);

return (
    <div className="movie-list-container">
        <input
            type="text" 
            placeholder="Пошук фільму..." 
            value={query}
            onChange={e => setQuery(e.target.value)} 
            className="search-input"
        />
        <div className="movie-list">
            {filtered.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    </div>
);
};

export default MovieList;
