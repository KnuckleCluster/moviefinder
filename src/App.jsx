import { useState, useEffect } from "react";
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";
MovieCard
const API_URL = 'https://www.omdbapi.com?apikey=b9c30c87'

const movie1 = {
  "Title": "Fight Club",
  "Year": "1999",
  "imdbID": "tt0137523",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
}

function App() {
  const [movies,setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch (`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }


  useEffect(() => {
    searchMovies('Fight Club');
  }, []);

  return (
    <div className="app">
      <h1>Movie Finder</h1>
      <p>Find movies with ease.</p>
      <div className="search">
        <img className="searchimg" src={SearchIcon} alt="search" /> 
        <input type="text" placeholder="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <button onClick={() => searchMovies(searchTerm)}>Search</button>

      </div>
      {
        movies?.length > 0 
          ? (
            <div className="container">
              {movies.map((movie) => (
                <MovieCard movie = {movie} />
              ))}
            </div>
          ) : (
            <div className="empty">
              <h2>No results found.</h2>
            </div>
          )
      }

    </div>
  )
}

export default App
