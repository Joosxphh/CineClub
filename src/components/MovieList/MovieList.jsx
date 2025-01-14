import MovieCard from "../MovieCard/MovieCard.jsx";
import {useEffect, useState} from "react";
import './MovieList.css';

const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const [filter, setFilter] = useState('popular');
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const url = searchQuery
            ? `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&api_key=daecc2030d9d538a823a8e0e08110341`
            : `https://api.themoviedb.org/3/movie/${filter}?api_key=daecc2030d9d538a823a8e0e08110341`;

        fetch(url)
            .then((response) => response.json())
            .then((data) => setMovies(data.results));
    }, [filter, searchQuery]);

    return (
        <>
            <h1>Liste de
                films {filter === 'now_playing' ? 'actuellement au cinéma' : filter === 'popular' ? 'populaires' : filter === 'top_rated' ? 'les mieux notés' : 'à venir'}</h1>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Rechercher un film..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
            <div className="filter-container">
                <button className="filter" onClick={() => setFilter('now_playing')}>Actuellement au cinéma</button>
                <button className="filter" onClick={() => setFilter('popular')}>Populaire</button>
                <button className="filter" onClick={() => setFilter('top_rated')}>Les mieux notés</button>
                <button className="filter" onClick={() => setFilter('upcoming')}>A venir</button>
            </div>
            <div className="movie-list">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie}/>
                ))}
            </div>
        </>
    );
}

export default MovieList;