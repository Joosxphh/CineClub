import {useWishlist} from '../../context/WishlistContext';
import './Wishlist.css';

const Wishlist = () => {
    const {wishlist, removeFromWishlist} = useWishlist();
    return (
        <div className="wishlist">
            <h2>Wishlist</h2>
            <ul>
                {wishlist.map(movie => (
                    <li key={movie.id}>
                        <img src={movie.image} alt={movie.title}/>
                        <div>
                            <h3>{movie.title}</h3>
                            <button onClick={() => removeFromWishlist(movie.id)}>Supprimer</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Wishlist;