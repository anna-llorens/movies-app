import { useParams, useSearchParams } from "react-router-dom";

import { Wishlist, Button, Image } from "../components";
import { useWishlist } from "../hooks/useWishlist";
import { useMovieDetails } from "../hooks/useMovieDetails";

export const MovieDetailPage = () => {
  const { movieId } = useParams();
  const [searchParams] = useSearchParams();
  const listType = searchParams.get("listType");

  const { movieDetails, loading, error } = useMovieDetails(movieId);
  const { wishlist, toggleWishlist, clearWishlist } = useWishlist();

  if (loading) {
    return <h2 className="movie-detail-loading">Loading movie details...</h2>;
  }

  if (error) {
    return <h2 className="movie-detail-error">{error}</h2>;
  }

  return (
    <div className={`movie-detail-layout ${listType}`}>
      <div className="movie-detail-container">
        <Image
          src={`https://image.tmdb.org/t/p/w500${movieDetails?.poster_path}`}
          alt={movieDetails?.title}
        />
        <div className="movie-detail-info">
          <h1 className={listType}>{movieDetails?.title}</h1>
          <h4 className={listType}>{movieDetails?.tagline}</h4>
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
                {movieDetails?.rating} ({movieDetails?.voteCount} votes)
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
