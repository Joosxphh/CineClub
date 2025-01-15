import {useParams} from "react-router";
import {useEffect, useState} from "react";
import './MovieDetail.css';
import {useWishlist} from "../../context/WishlistContext.jsx";

const API_KEY = import.meta.env.VITE_API_KEY;

const MovieDetail = () => {
    const {id} = useParams();
    const [movie, setMovie] = useState(null);
    const [similarMovies, setSimilarMovies] = useState([]);
    const {addToWishlist} = useWishlist();

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=credits&language=fr-FR`)
            .then(response => response.json())
            .then(data => setMovie(data));
    }, [id]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}&language=fr-FR`)
            .then(response => response.json())
            .then(data => setSimilarMovies(data.results));
    }, [id]);

    if (!movie) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="movie-detail"
                 style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})`}}>
                <img className="movie-image" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                     alt={movie.title}/>
                <div className="movie-information">
                    <h1 className="movie-title">{movie.title}</h1>
                    <div className="infos">
                        <p className="release-date">{movie.release_date}</p>
                        <p className="genres">{movie.genres.map(genre => genre.name).join(", ")}</p>
                        <p className="duree">{Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m</p></div>
                    <p className="note">{'⭐'.repeat(Math.round(movie.vote_average))}</p>
                    <p>{movie.overview}</p>
                    <div className="button-container wishlist">
                        <button className="button" onClick={() => addToWishlist(movie)}>Ajouter à la wishlist</button>
                    </div>
                    <h2>Acteurs</h2>
                    <ul className="acteur-liste">
                        {movie.credits.cast.slice(0, 10).map(actor => (
                            <li key={actor.id} className="acteur">
                                <img src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} alt={actor.name}/>
                                {actor.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default MovieDetail;