import {useParams} from "react-router";
import {useEffect, useState} from "react";
import styles from './MovieDetail.module.css';
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
            <div
                className={styles["movie-detail"]}
                style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})`}}
            >
                <img
                    className={styles["movie-image"]}
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                />
                <div className={styles["movie-information"]}>
                    <h1 className={styles["movie-title"]}>{movie.title}</h1>
                    <div className={styles.infos}>
                        <p className={styles["release-date"]}>{movie.release_date}</p>
                        <p className={styles.genres}>{movie.genres.map(genre => genre.name).join(", ")}</p>
                        <p className={styles.duree}>
                            {Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m
                        </p>
                    </div>
                    <p className={styles.note}>{'⭐'.repeat(Math.round(movie.vote_average))}</p>
                    <p>{movie.overview}</p>
                    <div className={`${styles["button-container"]} ${styles["wishlist-detail"]}`}>
                        <button className={styles.button} onClick={() => addToWishlist(movie)}>
                            Ajouter à ma wishlist
                        </button>
                    </div>
                    <h2>Acteurs</h2>
                    <ul className={styles["acteur-liste"]}>
                        {movie.credits.cast.slice(0, 10).map(actor => (
                            <li key={actor.id} className={styles.acteur}>
                                <img
                                    className={styles["acteur-image"]}
                                    src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                                    alt={actor.name}
                                />
                                {actor.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={styles.trailer}>
                <h2 className={styles["similar-title"]}>Films Similaires</h2>
                <ul className={styles["similar-movies"]}>
                    {similarMovies.slice(0, 5).map(similarMovie => (
                        <li key={similarMovie.id} className={styles["similar-movie"]}>
                            <img
                                className={styles["similar-movie-image"]}
                                src={`https://image.tmdb.org/t/p/w200${similarMovie.poster_path}`}
                                alt={similarMovie.title}
                            />
                            <p className={styles["similar-movie-name"]}>{similarMovie.title}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default MovieDetail;
