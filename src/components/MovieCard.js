import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <Link to={`/movies/${movie.title}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <img src={movie.posterURL} alt={movie.title} />
        <h2>{movie.title}</h2>
        <p>{movie.description}</p>
        <p>Rating: {movie.rating}/10</p>
      </Link>
    </div>
  );
};

export default MovieCard;
