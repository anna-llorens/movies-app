import { useLocation } from "react-router-dom";

import { Wishlist, Button, Image } from "../components";
import { useWishlist } from "../hooks/useWishlist";
import { useMovieDetails } from "../hooks/useMovieDetails";

export const MovieDetailPage = () => {
  const location = useLocation();
  const { movieId, listType } = location.state || {};
  const { movieDetails, loading, error } = useMovieDetails(movieId);
  const { wishlist, toggleWishlist, clearWishlist } = useWishlist();

  if (loading) {
    return <div>Loading movie details...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="movie-detail-layout">
      <div className="movie-detail-container">
        <Image
          src={`https://image.tmdb.org/t/p/w500${movieDetails?.poster_path}`}
          alt={movieDetails?.title}
        />
        <div className="movie-detail-info">
          <h1 className={listType}>{movieDetails?.title}</h1>
          <Button
            onClick={() => toggleWishlist(movieDetails)}
            variant={listType}
          >
            {wishlist.some((item) => item?.id === movieDetails?.id)
              ? "Remove from Wishlist"
              : "Add to Wishlist"}
          </Button>
          <p>{movieDetails?.overview}</p>
          <div className="additional-info-area">
            <ul>
              <li>
                <strong className={listType}>Release Date:</strong>{" "}
                {movieDetails?.releaseDate}
              </li>
              <li>
                <strong className={listType}>Rating:</strong>{" "}
                {movieDetails?.rating}
              </li>
              <li>
                <strong className={listType}>Genres:</strong>{" "}
                {movieDetails?.genres?.join(", ")}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Wishlist wishlist={wishlist} clearWishlist={clearWishlist} />
    </div>
  );
};
