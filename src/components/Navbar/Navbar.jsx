import './Navbar.module.css';
import {Link} from "react-router";
import {useWishlist} from '../../context/WishlistContext';
import styles from "./Navbar.module.css";

const Navbar = () => {
    const {wishlist} = useWishlist();
    console.log(wishlist);

    return (
        <nav className={styles.navbar}>
            <Link to="/"><h1>CinéClub</h1></Link>
            <ul>
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/wishlist">Wishlist ({wishlist.length})</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;