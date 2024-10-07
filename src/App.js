import React, { useState } from "react";
import MovieList from "./componenets/MovieList";
import Filter from "./componenets/Filter";
import AddMovie from "./componenets/AddMovie";
import './App.css';


const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchRating, setSearchRating] = useState("");

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter((movie) => {
    return (
      (searchTitle === "" || movie.title.toLowerCase().includes(searchTitle.toLowerCase())) &&
      (searchRating === "" || movie.rating >= searchRating)
    );
  });

  return (
    <div>
      <h1>Movie App</h1>
      <AddMovie addMovie={addMovie} />
      <Filter setSearchTitle={setSearchTitle} setSearchRating={setSearchRating} />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
