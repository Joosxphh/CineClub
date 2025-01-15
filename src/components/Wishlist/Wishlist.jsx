import styles from './Wishlist.module.css';
import {useWishlist} from '../../context/WishlistContext';

const Wishlist = () => {
    const {wishlist, removeFromWishlist} = useWishlist();
    return (
        <div className={styles["wishlist"]}>
            <h2>Wishlist</h2>
            <ul>
                {wishlist.map(movie => (
                    <li key={movie.id}>
                        <img className={styles["movie-image"]}
                             src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                             alt={movie.title}/>
                        <div>
                            <h3>{movie.title}</h3>
                            <button onClick={() => removeFromWishlist(movie.id)}>Supprimer</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Wishlist;