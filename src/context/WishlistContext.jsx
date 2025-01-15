import {createContext, useState, useContext, useEffect} from 'react';

const WishlistContext = createContext();

export const WishlistProvider = ({children}) => {
    const [wishlist, setWishlist] = useState(() => {
        const savedWishlist = localStorage.getItem('wishlist');
        return savedWishlist ? JSON.parse(savedWishlist) : [];
    });

    useEffect(() => {
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }, [wishlist]);

    const addToWishlist = (movie) => {
        if (!wishlist.some(item => item.id === movie.id)) {
            setWishlist([...wishlist, movie]);
        }
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
