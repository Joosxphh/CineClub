import './App.css';
import MovieList from "./components/MovieList/MovieList.jsx";
import {Route, Routes} from "react-router";
import MovieDetail from "./components/MovieDetail/MovieDetail.jsx";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<MovieList/>}/>
                <Route path="/movie/:id" element={<MovieDetail/>}/>
            </Routes>
        </div>
    );
}

export default App;