import {createContext, useState, useContext} from 'react';

const WishlistContext = createContext();

export const WishlistProvider = ({children}) => {
    const [wishlist, setWishlist] = useState([]);

    const addToWishlist = (movie) => {
        setWishlist([...wishlist, movie]);
    };

    const removeFromWishlist = (id) => {
        setWishlist(wishlist.filter(movie => movie.id !== id));
    };

    return (
        <WishlistContext.Provider value={{wishlist, addToWishlist, removeFromWishlist}}>
            {children}
        </WishlistContext.Provider>
    );
};

export const useWishlist = () => {
    return useContext(WishlistContext);
};
