import { useLocation } from "react-router-dom";

import { Wishlist, Button, Image } from "../components";
import { useWishlist } from "../hooks/useWishlist";

export const MovieDetail = () => {
  const location = useLocation();
  const { movie, list } = location?.state || {};

  const { wishlist, toggleWishlist, clearWishlist } = useWishlist();

  return (
    <div className="movie-detail">
      <div className="movie-detail-container">
        {/* Column 1: Picture */}
        <div className="movie-picture-column">
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
            alt={movie?.title}
          />
        </div>

        {/* Column 2: Movie info */}
        <div className="movie-details-column">
          <h1 className={list}>{movie?.title}</h1>
          <p>{movie?.overview}</p>
          <div className="additional-info-area">
            <ul>
              <li>
                <strong className={list}>Release Date:</strong>{" "}
                {movie?.release_date}
              </li>
              <li>
                <strong className={list}>Rating:</strong> {movie?.vote_average}
              </li>
              <li>
                <strong className={list}>Genres:</strong>{" "}
                {movie?.genres?.map((g) => g.name).join(", ")}
              </li>
            </ul>
          </div>
        </div>

        {/* Column 3: List Type and Wishlist */}
        <div className="wishlist-column">
          <Button onClick={() => toggleWishlist(movie)} variant={list}>
            {wishlist.some((item) => item?.id === movie?.id)
              ? "Remove from Wishlist"
              : "Add to Wishlist"}
          </Button>
          <Wishlist wishlist={wishlist} clearWishlist={clearWishlist} />
        </div>
      </div>
    </div>
  );
};
