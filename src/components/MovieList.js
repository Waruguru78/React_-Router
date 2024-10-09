import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.length === 0 ? (
        <h2>No movies found. Please add some movies!</h2>
      ) : (
        movies.map((movie) => (
          <MovieCard key={movie.title} movie={movie} />
        ))
      )}
    </div>
  );
};

export default MovieList;
