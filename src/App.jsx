import './App.css';
import MovieList from "./components/MovieList/MovieList.jsx";
import {BrowserRouter, Route, Router, Routes} from "react-router";
import MovieDetail from "./components/MovieDetail/MovieDetail.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Wishlist from "./components/Wishlist/Wishlist.jsx";
import {WishlistProvider} from "./context/WishlistContext.jsx";

function App() {
    return (
        <WishlistProvider>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<MovieList/>}/>
                    <Route path="/movie/:id" element={<MovieDetail/>}/>
                    <Route path="/wishlist" element={<Wishlist/>}/>
                </Routes>
            </BrowserRouter>
        </WishlistProvider>
    );
}

export default App;