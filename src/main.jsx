import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter, Route, Routes} from "react-router";
import MovieDetail from './components/MovieDetail/MovieDetail.jsx';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/movie/:id" element={<MovieDetail/>}/>
        </Routes>
    </BrowserRouter>,
)
