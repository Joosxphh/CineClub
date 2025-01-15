import styles from './MovieCard.module.css';
import {Link} from "react-router";

const MovieCard = ({movie}) => {
    return (
        <Link to={`/movie/${movie.id}`} className={styles.card}>
            <div className={styles["movie-card"]}>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
                <div className={styles["rating-circle"]}>
                    <span>{movie.vote_average.toFixed(1)} ⭐</span>
                </div>

                <div className={styles["button-container"]}>
                    <span className={styles.button}>
                        Voir les détails
                    </span>
                </div>
            </div>
            <h3>{movie.title}</h3>
        </Link>
    );
};

export default MovieCard;