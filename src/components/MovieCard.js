import React from 'react';

const MovieCard = ({ movie }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <div className="movie-card">
      <img src={imageUrl} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>평점 : {movie.vote_average}</p>
      <p>개봉일 : {movie.release_date}</p>
    </div>
  );
};

export default MovieCard;
