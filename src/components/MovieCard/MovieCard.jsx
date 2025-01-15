import styles from './MovieCard.module.css';
import {Link} from "react-router";

const MovieCard = ({movie}) => {
    return (
        <div className={styles["movie-card"]}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
            <h3>{movie.title}</h3>
            <p>{movie.vote_average} ⭐</p>
            <div className={styles["button-container"]}>
                <Link to={`/movie/${movie.id}`} className={styles.button}>Voir les détails</Link>
            </div>
        </div>
    );
};

export default MovieCard;
