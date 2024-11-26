import { useNavigate } from "react-router-dom";
import { Image } from "./Image";

export const MovieItem = ({ movie, list: listType }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${movie.id}?listType=${listType}`);
  };

  return (
    <div className="movie-item" onClick={handleClick}>
      <Image
        src={`https://image.tmdb.org/t/p/w200${movie?.poster_path}`}
        alt={movie?.title}
      />
      <p>{movie?.title}</p>
      <p className="movie-title">⭐ {movie?.vote_average}</p>
    </div>
  );
};
