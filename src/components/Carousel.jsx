import { useEffect, useState } from "react";
import { MovieItem } from "./MovieItem";

export const Carousel = ({ title, fetchMovies }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const movieData = await fetchMovies();
      setMovies(movieData);
    };
    getMovies();
  }, [fetchMovies]);

  return (
    <div className="carousel-section">
      <h2>{title}</h2>
      <div className="carousel">
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} list={title} />
        ))}
      </div>
    </div>
  );
};
