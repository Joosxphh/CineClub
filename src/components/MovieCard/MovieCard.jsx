import './MovieCard.css';

const MovieCard = ({movie}) => {
    return (

        <div className="movie-card">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
            <h3>{movie.title}</h3>
            <p>{movie.vote_average} ⭐</p>
            <a>Voir les détails</a>
        </div>
    );
}

export default MovieCard;