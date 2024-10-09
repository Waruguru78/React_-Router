import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import AddMovie from "./components/AddMovie";
import MovieDetail from "./components/MovieDetails";
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
    <Router>
      <div>
        <h1>Movie App</h1>
        <AddMovie addMovie={addMovie} />
        <Filter setSearchTitle={setSearchTitle} setSearchRating={setSearchRating} />
        <Routes>
          <Route path="/" element={<MovieList movies={filteredMovies} />} />
          <Route path="/movies/:id" element={<MovieDetail movies={movies} />} /> {/* Add this line for the MovieDetail route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
