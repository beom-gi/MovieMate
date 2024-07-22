import React, { useEffect, useState } from 'react';
import tmdb from '../api/api';
import MovieCard from './MovieCard';

const MovieList = () => {
  const [koreanMOvies, setKoreanMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await tmdb.get('/discover/movie');
        setMovies(response.data.results);
      } catch (error) {
        console.error('Failed to fetch movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
