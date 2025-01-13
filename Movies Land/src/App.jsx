import React from "react";
import { useEffect } from "react";
import "./App.css";
import searchIcon from "./search.svg";
import MovieCard from "./components/MovieCard";
import { useState } from "react";

export default function App() {
  const API_URL = "https://www.omdbapi.com?apikey=da42803";

  const [movies, setMovies] = useState([]);
  const [serachTerm,setSearchTerm]=useState('')


  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies("spiderman");
  }, []);

  return (
    <div className="app">
      <h1>Movie Land</h1>
      <div className="search">
        {/* search-bar */}
        <input placeholder="Search for movies" 
        value={serachTerm}
        onChange={(e) =>setSearchTerm(e.target.value)} />

        {/* search-icon */}
        <img src={searchIcon} alt="search-icon" 
        onClick={() => searchMovies(serachTerm)} />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie)=>(
            <MovieCard key={movie.imdbID} movie={movie}/>
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies found</h2>
        </div>
      )}
    </div>
  );
}
