import { MovieItem } from "./MovieItem";

export const Carousel = ({ title, movies }) => {
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
