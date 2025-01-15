import MovieCard from "../MovieCard/MovieCard.jsx";
import {useEffect, useState} from "react";
import './MovieList.css';

const API_KEY = import.meta.env.VITE_API_KEY;

const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const [filter, setFilter] = useState('popular');
    const [searchQuery, setSearchQuery] = useState('');
    const [page, setPage] = useState(1);

    useEffect(() => {
        const url = searchQuery
            ? `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&api_key=${API_KEY}&language=fr-FR&page=${page}`
            : `https://api.themoviedb.org/3/movie/${filter}?api_key=${API_KEY}&language=fr-FR&page=${page}`;

        fetch(url)
            .then((response) => response.json())
            .then((data) => setMovies(data.results));
    }, [filter, searchQuery, page]);

    const handleNextPage = () => {
        setPage((prevPage) => prevPage + 1);
    };

    const handlePreviousPage = () => {
        if (page > 1) {
            setPage((prevPage) => prevPage - 1);
        }
    };

    return (
        <>
            <h1 className="main-title">Liste de
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
            <div className="pagination">
                <button onClick={handlePreviousPage} disabled={page === 1}>Précédent</button>
                <button onClick={handleNextPage}>Suivant</button>
            </div>
        </>
    );
}

export default MovieList;