import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Wishlist, Button, Image } from "../components";

export const MovieDetail = () => {
  const location = useLocation();

  const { movie, list } = location?.state || {};

  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const toggleWishlist = () => {
    if (wishlist.some((item) => item.id === movie?.id)) {
      setWishlist(wishlist.filter((item) => item.id !== movie.id));
    } else {
      setWishlist([...wishlist, movie]);
    }
  };

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
          <p>{movie?.description}</p>
          <div className="additional-info-area">
            <ul>
              <li>
                <strong className={list}>Release Date:</strong>{" "}
                {movie?.releaseDate}
              </li>
              <li>
                <strong className={list}>Rating:</strong> {movie?.rating}
              </li>
              <li>
                <strong className={list}>Genres:</strong>{" "}
                {movie?.genres?.join(", ")}
              </li>
            </ul>
          </div>
        </div>

        {/* Column 3: List Type and Wishlist */}
        <div className="wishlist-column">
          <div className="list-type">
            <h2 className={list}>{list} Movie</h2>
          </div>
          <Button onClick={toggleWishlist} variant={list}>
            {wishlist.some((item) => item.id === movie?.id)
              ? "Remove from Wishlist"
              : "Add to Wishlist"}
          </Button>
          <Wishlist wishlist={wishlist} setWishlist={setWishlist} />
        </div>
      </div>
    </div>
  );
};
